const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 3000);
const APP_PIN = String(process.env.APP_PIN || '').trim();
const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, 'public');
const SOURCE_DATA_DIR = path.join(ROOT, 'data');
const DATA_DIR = process.env.DATA_DIR || SOURCE_DATA_DIR;
const STATE_PATH = path.join(DATA_DIR, 'state.json');
const SOURCE_STATE_PATH = path.join(SOURCE_DATA_DIR, 'state.json');
const PLAYERS_PATH = path.join(SOURCE_DATA_DIR, 'players.json');
const SESSION_TOKEN = crypto.randomBytes(32).toString('hex');

const playersForPhotos = JSON.parse(fs.readFileSync(PLAYERS_PATH, 'utf8'));
const PLAYER_PHOTO_BY_ID = new Map(
  playersForPhotos
    .filter(player => player && Number.isInteger(Number(player.id)) && player.photoUrl)
    .map(player => [String(player.id), String(player.photoUrl)])
);
const PHOTO_CACHE_DIR = path.join(DATA_DIR, 'photo-cache');
fs.mkdirSync(PHOTO_CACHE_DIR, { recursive: true });

fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(STATE_PATH)) fs.copyFileSync(SOURCE_STATE_PATH, STATE_PATH);

const MIME = {
  '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg',
  '.ico':'image/x-icon', '.webp':'image/webp', '.woff2':'font/woff2'
};

function parseCookies(req) {
  const header = req.headers.cookie || '';
  const pairs = header.split(';').map(x=>x.trim()).filter(Boolean);
  const out = {};
  for (const pair of pairs) {
    const i = pair.indexOf('=');
    const k = decodeURIComponent(i >= 0 ? pair.slice(0,i) : pair);
    const v = decodeURIComponent(i >= 0 ? pair.slice(i+1) : '');
    out[k] = v;
  }
  return out;
}
function isAuthed(req) { return !APP_PIN || parseCookies(req).asta_session === SESSION_TOKEN; }
function json(res, status, obj, headers={}) {
  res.writeHead(status, { 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store', ...headers });
  res.end(JSON.stringify(obj));
}
function readBody(req, max=2*1024*1024) {
  return new Promise((resolve,reject) => {
    let size=0, chunks=[];
    req.on('data', c => { size += c.length; if (size > max) { reject(new Error('BODY_TOO_LARGE')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => {
      if (!chunks.length) return resolve({});
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); } catch { reject(new Error('BAD_JSON')); }
    });
    req.on('error', reject);
  });
}
function writeStateAtomic(state) {
  const tmp = STATE_PATH + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(state, null, 2), 'utf8');
  fs.renameSync(tmp, STATE_PATH);
}
function serveFile(res, filePath, cache=false) {
  try {
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) throw new Error('NOT_FILE');
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream', 'Cache-Control': cache ? 'public, max-age=3600' : 'no-cache' });
    fs.createReadStream(filePath).pipe(res);
  } catch { res.writeHead(404); res.end('Not found'); }
}

function fetchRemoteImage(url, redirects=0) {
  return new Promise((resolve, reject) => {
    if (redirects > 3) return reject(new Error('TOO_MANY_REDIRECTS'));
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/149 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://www.fantacalcio.it/',
        'Accept-Language': 'it-IT,it;q=0.9,en;q=0.8'
      },
      timeout: 12000
    }, upstream => {
      const status = Number(upstream.statusCode || 0);
      if ([301,302,303,307,308].includes(status) && upstream.headers.location) {
        upstream.resume();
        const nextUrl = new URL(upstream.headers.location, url).toString();
        return fetchRemoteImage(nextUrl, redirects + 1).then(resolve, reject);
      }
      if (status !== 200) {
        upstream.resume();
        return reject(new Error(`PHOTO_UPSTREAM_${status}`));
      }
      const chunks = [];
      let total = 0;
      upstream.on('data', chunk => {
        total += chunk.length;
        if (total > 5 * 1024 * 1024) {
          upstream.destroy(new Error('PHOTO_TOO_LARGE'));
          return;
        }
        chunks.push(chunk);
      });
      upstream.on('end', () => resolve({
        body: Buffer.concat(chunks),
        contentType: String(upstream.headers['content-type'] || 'image/png').split(';')[0]
      }));
      upstream.on('error', reject);
    });
    request.on('timeout', () => request.destroy(new Error('PHOTO_TIMEOUT')));
    request.on('error', reject);
  });
}

async function servePlayerPhoto(res, playerId) {
  const remoteUrl = PLAYER_PHOTO_BY_ID.get(String(playerId));
  if (!remoteUrl) { res.writeHead(404); return res.end('Photo not found'); }

  const cachePath = path.join(PHOTO_CACHE_DIR, `${playerId}.png`);
  if (fs.existsSync(cachePath)) {
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=604800, immutable'
    });
    return fs.createReadStream(cachePath).pipe(res);
  }

  try {
    const image = await fetchRemoteImage(remoteUrl);
    fs.writeFileSync(cachePath, image.body);
    res.writeHead(200, {
      'Content-Type': image.contentType || 'image/png',
      'Cache-Control': 'public, max-age=604800, immutable'
    });
    return res.end(image.body);
  } catch (err) {
    console.error(`Foto ${playerId} non caricata:`, err.message);
    res.writeHead(502, { 'Cache-Control':'no-store' });
    return res.end('Photo unavailable');
  }
}

const server = http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const p = url.pathname;

    if (p === '/api/config' && req.method === 'GET') return json(res,200,{ authRequired:Boolean(APP_PIN), authenticated:isAuthed(req) });

    if (p === '/api/login' && req.method === 'POST') {
      const body = await readBody(req);
      if (APP_PIN && String(body.pin || '') !== APP_PIN) return json(res,401,{ error:'PIN_ERRATO' });
      const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
      return json(res,200,{ok:true},{'Set-Cookie':`asta_session=${encodeURIComponent(SESSION_TOKEN)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=604800${secure}`});
    }
    if (p === '/api/logout' && req.method === 'POST') return json(res,200,{ok:true},{'Set-Cookie':'asta_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0'});

    if (p.startsWith('/api/') && !isAuthed(req)) return json(res,401,{error:'AUTH_REQUIRED'});
    const photoMatch = p.match(/^\/api\/player-photo\/(\d+)$/);
    if (photoMatch && req.method === 'GET') return await servePlayerPhoto(res, photoMatch[1]);
    if (p === '/api/players' && req.method === 'GET') return serveFile(res, PLAYERS_PATH, false);
    if (p === '/api/state' && req.method === 'GET') return json(res,200,JSON.parse(fs.readFileSync(STATE_PATH,'utf8')));
    if (p === '/api/state' && req.method === 'PUT') {
      const body = await readBody(req); body.updatedAt = new Date().toISOString(); writeStateAtomic(body); return json(res,200,{ok:true,updatedAt:body.updatedAt});
    }
    if (p === '/api/reset' && req.method === 'POST') { fs.copyFileSync(SOURCE_STATE_PATH, STATE_PATH); return json(res,200,{ok:true}); }

    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end('Method not allowed'); }
    const rel = decodeURIComponent(p).replace(/^\/+/, '');
    let filePath = path.resolve(PUBLIC_DIR, rel || 'index.html');
    if (!filePath.startsWith(path.resolve(PUBLIC_DIR))) { res.writeHead(403); return res.end('Forbidden'); }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) return serveFile(res,filePath, /\.(css|js|png|jpg|jpeg|svg|webp|woff2)$/i.test(filePath));
    return serveFile(res, path.join(PUBLIC_DIR,'index.html'), false);
  } catch (err) {
    console.error(err);
    if (!res.headersSent) return json(res,500,{error:'SERVER_ERROR'});
    res.end();
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Asta Mantra Web pronta su http://localhost:${PORT}`);
  console.log(`Persistenza: ${STATE_PATH}`);
  console.log(APP_PIN ? 'PIN app attivo.' : 'PIN app non configurato.');
});
