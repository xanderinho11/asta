const EXCEL_BUDGET = [
  { key: 'Por', label: 'Por', target: 3, weight: .09 },
  { key: 'Dc+B', label: 'Dc + B', target: 7, weight: .12 },
  { key: 'Dd+Ds+E', label: 'Dd + Ds + E', target: 3, weight: .02 },
  { key: 'M', label: 'M', target: 5, weight: .06 },
  { key: 'C', label: 'C', target: 4, weight: .06 },
  { key: 'A+T', label: 'A + T', target: 5, weight: .23 },
  { key: 'W', label: 'W', target: 5, weight: .19 },
  { key: 'Pc', label: 'Pc', target: 3, weight: .23 },
];

const FORMATIONS = {
  '3-5-1-1': [
    ['por','POR',['Por'],50,92], ['dcL','DC',['Dc','B'],24,76], ['dc','DC',['Dc','B'],50,72], ['dcR','DC',['Dc','B'],76,76],
    ['eL','E',['E','Ds','W'],13,52], ['m','M',['M','C'],35,54], ['c','C',['C','M'],50,47], ['cR','C',['C','M'],65,54], ['eR','E',['E','Dd','W'],87,52],
    ['t','T/A',['T','A','C','W'],50,29], ['pc','PC',['Pc','A'],50,12]
  ],
  '3-5-2': [
    ['por','POR',['Por'],50,92], ['dcL','DC',['Dc','B'],24,76], ['dc','DC',['Dc','B'],50,72], ['dcR','DC',['Dc','B'],76,76],
    ['eL','E',['E','Ds','W'],13,52], ['m','M',['M','C'],35,54], ['c','C',['C','M'],50,47], ['cR','C',['C','M'],65,54], ['eR','E',['E','Dd','W'],87,52],
    ['pcL','PC/A',['Pc','A'],38,16], ['pcR','PC/A',['Pc','A'],62,16]
  ],
  '3-4-1-2': [
    ['por','POR',['Por'],50,92], ['dcL','DC',['Dc','B'],24,76], ['dc','DC',['Dc','B'],50,72], ['dcR','DC',['Dc','B'],76,76],
    ['eL','E',['E','Ds','W'],15,51], ['m','M/C',['M','C'],40,52], ['c','C/M',['C','M'],60,52], ['eR','E',['E','Dd','W'],85,51],
    ['t','T/A',['T','A','C','W'],50,33], ['pcL','PC/A',['Pc','A'],38,15], ['pcR','PC/A',['Pc','A'],62,15]
  ],
  '3-4-2-1': [
    ['por','POR',['Por'],50,92], ['dcL','DC',['Dc','B'],24,76], ['dc','DC',['Dc','B'],50,72], ['dcR','DC',['Dc','B'],76,76],
    ['eL','E',['E','Ds','W'],15,51], ['m','M/C',['M','C'],40,53], ['c','C/M',['C','M'],60,53], ['eR','E',['E','Dd','W'],85,51],
    ['tL','T/A',['T','A','W','C'],36,31], ['tR','T/A',['T','A','W','C'],64,31], ['pc','PC',['Pc','A'],50,12]
  ],
  '4-3-1-2': [
    ['por','POR',['Por'],50,92], ['ds','DS',['Ds','E','B'],12,74], ['dcL','DC',['Dc','B'],38,74], ['dcR','DC',['Dc','B'],62,74], ['dd','DD',['Dd','E','B'],88,74],
    ['m','M',['M','C'],34,51], ['c','C',['C','M'],50,45], ['cR','C',['C','M'],66,51], ['t','T/A',['T','A','C','W'],50,29],
    ['pcL','PC/A',['Pc','A'],38,13], ['pcR','PC/A',['Pc','A'],62,13]
  ],
  '4-3-2-1': [
    ['por','POR',['Por'],50,92], ['ds','DS',['Ds','E','B'],12,74], ['dcL','DC',['Dc','B'],38,74], ['dcR','DC',['Dc','B'],62,74], ['dd','DD',['Dd','E','B'],88,74],
    ['m','M',['M','C'],34,51], ['c','C',['C','M'],50,45], ['cR','C',['C','M'],66,51], ['tL','T/A',['T','A','W','C'],38,29], ['tR','T/A',['T','A','W','C'],62,29], ['pc','PC',['Pc','A'],50,12]
  ],
  '4-2-3-1': [
    ['por','POR',['Por'],50,92], ['ds','DS',['Ds','E','B'],12,74], ['dcL','DC',['Dc','B'],38,74], ['dcR','DC',['Dc','B'],62,74], ['dd','DD',['Dd','E','B'],88,74],
    ['mL','M/C',['M','C'],38,54], ['mR','M/C',['M','C'],62,54], ['wL','W/A',['W','A','E'],20,31], ['t','T/A',['T','A','C','W'],50,31], ['wR','W/A',['W','A','E'],80,31], ['pc','PC',['Pc','A'],50,12]
  ],
  '4-3-3': [
    ['por','POR',['Por'],50,92], ['ds','DS',['Ds','E','B'],12,74], ['dcL','DC',['Dc','B'],38,74], ['dcR','DC',['Dc','B'],62,74], ['dd','DD',['Dd','E','B'],88,74],
    ['m','M',['M','C'],35,52], ['c','C',['C','M'],50,45], ['cR','C',['C','M'],65,52], ['wL','W/A',['W','A'],22,24], ['pc','PC',['Pc','A'],50,13], ['wR','W/A',['W','A'],78,24]
  ],
  '4-4-1-1': [
    ['por','POR',['Por'],50,92], ['ds','DS',['Ds','E','B'],12,74], ['dcL','DC',['Dc','B'],38,74], ['dcR','DC',['Dc','B'],62,74], ['dd','DD',['Dd','E','B'],88,74],
    ['wL','E/W',['E','W','Ds'],15,49], ['mL','M/C',['M','C'],40,50], ['mR','M/C',['M','C'],60,50], ['wR','E/W',['E','W','Dd'],85,49], ['t','T/A',['T','A','W','C'],50,29], ['pc','PC',['Pc','A'],50,12]
  ],
  '4-4-2': [
    ['por','POR',['Por'],50,92], ['ds','DS',['Ds','E','B'],12,74], ['dcL','DC',['Dc','B'],38,74], ['dcR','DC',['Dc','B'],62,74], ['dd','DD',['Dd','E','B'],88,74],
    ['wL','E/W',['E','W','Ds'],15,49], ['mL','M/C',['M','C'],40,50], ['mR','M/C',['M','C'],60,50], ['wR','E/W',['E','W','Dd'],85,49], ['pcL','PC/A',['Pc','A'],38,14], ['pcR','PC/A',['Pc','A'],62,14]
  ]
};

let players = [];
let state = null;
let currentPlayer = null;
let editingPurchaseId = null;
let favoritesOnly = false;
let currentSlotId = null;
let saveTimer = null;

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const fmt = n => Number.isFinite(Number(n)) ? new Intl.NumberFormat('it-IT', { maximumFractionDigits: 1 }).format(Number(n)) : '—';
const fmtInt = n => Number.isFinite(Number(n)) ? new Intl.NumberFormat('it-IT', { maximumFractionDigits: 0 }).format(Number(n)) : '—';
const initials = name => String(name || '?').replace(/\./g,'').split(/\s+/).filter(Boolean).slice(0,2).map(x => x[0]).join('').toUpperCase();
const playerByName = name => players.find(p => p.name === name);
const purchaseById = id => state.roster.find(x => x.id === id);
const clone = obj => JSON.parse(JSON.stringify(obj));

function showToast(text, error=false) {
  const el = $('#toast');
  el.textContent = text;
  el.className = `toast show${error ? ' error' : ''}`;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.className = 'toast', 2200);
}

async function api(url, opts={}) {
  const res = await fetch(url, { headers: { 'Content-Type':'application/json', ...(opts.headers||{}) }, ...opts });
  if (res.status === 401) throw Object.assign(new Error('AUTH_REQUIRED'), { code:'AUTH_REQUIRED' });
  if (!res.ok) throw new Error((await res.text()) || 'Errore server');
  const ct = res.headers.get('content-type') || '';
  return ct.includes('application/json') ? res.json() : res.text();
}

async function boot() {
  const config = await fetch('/api/config').then(r => r.json());
  if (config.authRequired && !config.authenticated) {
    $('#loginScreen').classList.remove('hidden');
    $('#app').classList.add('hidden');
    return;
  }
  await loadApp();
}

async function loadApp() {
  try {
    [players, state] = await Promise.all([api('/api/players'), api('/api/state')]);
    state.roster ||= [];
    state.favorites ||= [];
    state.notes ||= {};
    state.budgetConfig ||= clone(EXCEL_BUDGET);
    state.formation ||= '3-5-1-1';
    state.lineups ||= state.lineup ? { [state.formation]: state.lineup } : {};
    delete state.lineup;
    $('#loginScreen').classList.add('hidden');
    $('#app').classList.remove('hidden');
    initFormationSelect();
    renderAll();
  } catch (err) {
    if (err.code === 'AUTH_REQUIRED') {
      $('#loginScreen').classList.remove('hidden');
      $('#app').classList.add('hidden');
    } else {
      console.error(err); showToast('Impossibile caricare l’app', true);
    }
  }
}

function budgetGroupForRole(role) {
  if (role === 'Por') return 'Por';
  if (['Dc','B'].includes(role)) return 'Dc+B';
  if (['Dd','Ds','E'].includes(role)) return 'Dd+Ds+E';
  if (role === 'M') return 'M';
  if (role === 'C') return 'C';
  if (['A','T'].includes(role)) return 'A+T';
  if (role === 'W') return 'W';
  if (role === 'Pc') return 'Pc';
  return null;
}

function calculateBudget() {
  const total = Number(state.budgetTotal || 500);
  const cfg = state.budgetConfig.map(c => ({ ...c, initialBudget: total * Number(c.weight || 0) }));
  const groups = cfg.map(c => {
    const purchases = state.roster.filter(r => budgetGroupForRole(r.budgetRole) === c.key);
    const spent = purchases.reduce((s,r) => s + Number(r.price || 0), 0);
    const used = purchases.length;
    const closed = used >= Number(c.target || 0);
    const minFinal = spent + Math.max(Number(c.target || 0) - used, 0);
    return { ...c, spent, used, closed, minFinal, dynamicBudget: 0 };
  });

  const frozen = new Set(groups.filter(g => g.closed).map(g => g.key));
  for (let pass=0; pass<groups.length+2; pass++) {
    const fixed = groups.filter(g => frozen.has(g.key)).reduce((s,g) => s + (g.closed ? g.spent : g.minFinal), 0);
    const open = groups.filter(g => !frozen.has(g.key));
    const weightSum = open.reduce((s,g) => s + g.initialBudget, 0);
    let changed = false;
    for (const g of open) {
      const alloc = weightSum > 0 ? (total - fixed) * g.initialBudget / weightSum : g.minFinal;
      if (g.minFinal > alloc + 1e-7) { frozen.add(g.key); changed = true; }
    }
    if (!changed) break;
  }

  const fixed = groups.filter(g => frozen.has(g.key)).reduce((s,g) => s + (g.closed ? g.spent : g.minFinal), 0);
  const open = groups.filter(g => !frozen.has(g.key));
  const weightSum = open.reduce((s,g) => s + g.initialBudget, 0);
  groups.forEach(g => {
    if (frozen.has(g.key)) g.dynamicBudget = g.closed ? g.spent : g.minFinal;
    else g.dynamicBudget = weightSum > 0 ? (total - fixed) * g.initialBudget / weightSum : g.minFinal;
    g.remainingBudget = Math.max(0, g.dynamicBudget - g.spent);
    g.utilization = g.dynamicBudget > 0 ? g.spent / g.dynamicBudget : 0;
  });

  const spentTotal = state.roster.reduce((s,r) => s + Number(r.price || 0), 0);
  const remaining = total - spentTotal;
  const slotsLeft = Math.max(0, Number(state.rosterTarget || 35) - state.roster.length);
  const maxNextBid = slotsLeft > 0 ? Math.max(0, remaining - Math.max(0, slotsLeft - 1)) : 0;
  return { groups, total, spentTotal, remaining, slotsLeft, maxNextBid };
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    try { await api('/api/state', { method:'PUT', body: JSON.stringify(state) }); }
    catch (err) { console.error(err); showToast('Salvataggio non riuscito', true); }
  }, 350);
}

function renderAll() {
  renderKpis();
  renderPlayers();
  renderRoster();
  renderBudget();
  renderField();
}

function renderKpis() {
  const b = calculateBudget();
  $('#kpiRemaining').textContent = fmtInt(b.remaining);
  $('#kpiRoster').textContent = `${state.roster.length}/${state.rosterTarget}`;
  $('#kpiSpent').textContent = fmtInt(b.spentTotal);
  const avg = b.slotsLeft ? b.remaining / b.slotsLeft : 0;
  $('#avgPerSlot').textContent = fmt(avg);
  const safe = b.remaining >= b.slotsLeft;
  $('#budgetGuardCard').classList.toggle('warning', !safe);
  $('#budgetGuardCard .status-icon').textContent = safe ? '✓' : '!';
  $('#budgetGuardCard .status-title').textContent = safe ? 'Budget sotto controllo' : 'Attenzione al budget';
  $('#budgetGuardText').textContent = safe
    ? `Hai ${fmtInt(b.remaining)} crediti per ${b.slotsLeft} slot: il minimo di 1 credito a posto è coperto.`
    : `Ti mancano crediti per completare tutti gli slot con almeno 1 credito.`;
}

function roleBadges(roles=[]) {
  return roles.map(r => `<span class="role-badge role-${r}">${r}</span>`).join('');
}

function isBought(p) { return state.roster.some(r => r.playerName === p.name); }
function isFavorite(p) { return state.favorites.includes(p.name); }

function filteredPlayers() {
  const q = $('#searchInput').value.trim().toLowerCase();
  const role = $('#roleFilter').value;
  const sort = $('#sortFilter').value;
  let out = players.filter(p => {
    if (q && !(`${p.name} ${p.team || ''}`.toLowerCase().includes(q))) return false;
    if (role && !(p.roles || []).includes(role)) return false;
    if (favoritesOnly && !isFavorite(p)) return false;
    return true;
  });
  if (sort === 'pma-desc') out.sort((a,b) => Number(b.pmaCredits||0)-Number(a.pmaCredits||0) || a.name.localeCompare(b.name));
  else if (sort === 'fvm-desc') out.sort((a,b) => Number(b.fvm1000||0)-Number(a.fvm1000||0) || a.name.localeCompare(b.name));
  else if (sort === 'price2025-desc') out.sort((a,b) => Number(b.price2025||0)-Number(a.price2025||0) || a.name.localeCompare(b.name));
  else out.sort((a,b) => a.name.localeCompare(b.name));
  return out;
}

function renderPlayers() {
  const out = filteredPlayers();
  $('#resultsCount').textContent = out.length;
  $('#resultsTitle').textContent = $('#searchInput').value.trim() ? 'Risultati ricerca' : (favoritesOnly ? 'Preferiti' : 'Calciatori');
  $('#clearSearch').classList.toggle('hidden', !$('#searchInput').value);
  const shown = out.slice(0, 48);
  $('#playersGrid').innerHTML = shown.map(p => `
    <article class="player-card ${isBought(p) ? 'bought' : ''}" data-player="${escapeAttr(p.name)}">
      ${isBought(p) ? '<span class="bought-ribbon">ACQUISTATO</span>' : ''}
      <div class="player-top">
        <div class="player-avatar">${initials(p.name)}</div>
        <div class="player-main"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.team || p.teamCode || '—')} · Quot. ${fmtInt(p.quotation)}</span></div>
        <button class="star-btn ${isFavorite(p) ? 'on' : ''}" data-fav="${escapeAttr(p.name)}" aria-label="Preferito">${isFavorite(p) ? '★' : '☆'}</button>
      </div>
      <div class="role-badges">${roleBadges(p.roles)}</div>
      <div class="player-metrics">
        <div class="metric"><span>PMA 500</span><strong>${fmt(p.pmaCredits)}</strong></div>
        <div class="metric"><span>Prezzo 2025</span><strong>${fmtInt(p.price2025)}</strong></div>
        <div class="metric"><span>FVM/1000</span><strong>${fmtInt(p.fvm1000)}</strong></div>
      </div>
      <div class="player-quick-actions">
        <button class="quick-buy-btn" data-quick-buy="${escapeAttr(p.name)}">${isBought(p) ? 'Modifica acquisto' : 'Acquista'}</button>
      </div>
    </article>`).join('');

  if (!shown.length) $('#playersGrid').innerHTML = `<div class="empty-card" style="grid-column:1/-1"><h3>Nessun calciatore trovato</h3><p>Prova a cambiare nome o filtri.</p></div>`;

  $$('.player-card').forEach(card => card.addEventListener('click', e => {
    if (e.target.closest('[data-fav]')) return;
    openPlayer(card.dataset.player);
  }));
  $$('[data-fav]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation(); toggleFavorite(btn.dataset.fav);
  }));
  $$('[data-quick-buy]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const p = playerByName(btn.dataset.quickBuy);
    const bought = state.roster.find(r => r.playerName === p?.name);
    if (p) openBuy(p.name, bought?.id || null);
  }));
}

function toggleFavorite(name) {
  const i = state.favorites.indexOf(name);
  if (i >= 0) state.favorites.splice(i,1); else state.favorites.push(name);
  scheduleSave(); renderPlayers();
}

function openPlayer(name) {
  const p = playerByName(name); if (!p) return;
  currentPlayer = p;
  const bought = state.roster.find(r => r.playerName === p.name);
  const details = [
    ['PMA %', p.pmaPct != null ? `${fmt(Number(p.pmaPct)*100)}%` : '—'], ['PMA 500', fmt(p.pmaCredits)], ['Prezzo 2025', fmtInt(p.price2025)], ['Fantateam 2025', p.fantateam2025 || '—'],
    ['Voto', fmt(p.vote)], ['Fantavoto', fmt(p.fantavote)], ['Presenze', fmtInt(p.appearances)], ['Titolare', fmtInt(p.starts)],
    ['Gol', fmtInt(p.goals)], ['Assist', fmtInt(p.assists)], ['Ammonizioni', fmtInt(p.yellow)], ['Espulsioni', fmtInt(p.red)]
  ];
  if ((p.roles||[]).includes('Por')) details.push(['Gol subiti', fmtInt(p.goalsConceded)], ['Rigori parati', fmtInt(p.pensSaved)]);
  $('#playerDialogContent').innerHTML = `
    <div class="modal-head"><div></div><button class="modal-close" data-close="playerDialog">×</button></div>
    <div class="detail-hero">
      <div class="player-avatar">${initials(p.name)}</div>
      <div><p class="eyebrow">${escapeHtml(p.team || p.teamCode || '—')} · QUOT. ${fmtInt(p.quotation)}</p><h2>${escapeHtml(p.name)}</h2><div class="role-badges">${roleBadges(p.roles)}</div></div>
    </div>
    <div class="detail-grid">${details.map(([k,v]) => `<div class="detail-metric"><span>${k}</span><strong>${escapeHtml(String(v))}</strong></div>`).join('')}</div>
    <div class="detail-actions">
      <button class="btn btn-secondary" id="dialogFavBtn">${isFavorite(p) ? '★ Preferito' : '☆ Aggiungi ai preferiti'}</button>
      <button class="btn btn-primary" id="dialogBuyBtn">${bought ? `Modifica acquisto · ${fmtInt(bought.price)}` : 'Acquista'}</button>
    </div>`;
  bindCloseButtons($('#playerDialogContent'));
  $('#dialogFavBtn').onclick = () => { toggleFavorite(p.name); openPlayer(p.name); };
  $('#dialogBuyBtn').onclick = () => { $('#playerDialog').close(); openBuy(p.name, bought?.id); };
  if (!$('#playerDialog').open) $('#playerDialog').showModal();
}

function openBuy(name, purchaseId=null) {
  const p = playerByName(name); if (!p) return;
  currentPlayer = p; editingPurchaseId = purchaseId || null;
  const existing = purchaseId ? purchaseById(purchaseId) : null;
  $('#buyPlayerName').textContent = p.name;
  $('#buyPlayerMeta').innerHTML = `<span>${escapeHtml(p.team || '—')}</span>${roleBadges(p.roles)}`;
  $('#buyPrice').value = existing?.price || '';
  $('#buyRole').innerHTML = (p.roles || []).map(r => `<option value="${r}" ${existing?.budgetRole === r ? 'selected' : ''}>${r} · fascia ${budgetGroupForRole(r)}</option>`).join('');
  $('#buyDialog').showModal();
  setTimeout(() => $('#buyPrice').focus(), 40);
}

function savePurchase() {
  const p = currentPlayer;
  const price = Number($('#buyPrice').value);
  const budgetRole = $('#buyRole').value;
  if (!p || !price || price < 1 || !budgetRole) return;
  const existingOther = state.roster.find(r => r.playerName === p.name && r.id !== editingPurchaseId);
  if (existingOther) { showToast('Giocatore già presente in rosa', true); return; }
  const spentWithout = state.roster.filter(r => r.id !== editingPurchaseId).reduce((s,r) => s+Number(r.price||0),0);
  if (spentWithout + price > Number(state.budgetTotal || 500)) { showToast('Prezzo superiore ai crediti disponibili', true); return; }
  if (editingPurchaseId) {
    const r = purchaseById(editingPurchaseId); Object.assign(r, { price, budgetRole });
  } else {
    state.roster.push({ id: `r_${Date.now()}_${Math.random().toString(36).slice(2,7)}`, playerName: p.name, price, budgetRole, boughtAt: new Date().toISOString() });
  }
  $('#buyDialog').close();
  editingPurchaseId = null;
  scheduleSave(); renderAll(); showToast('Acquisto salvato');
}

function renderRoster() {
  const empty = !state.roster.length;
  $('#rosterEmpty').classList.toggle('hidden', !empty);
  $('#rosterContent').classList.toggle('hidden', empty);
  const b = calculateBudget();
  $('#roleSummary').innerHTML = b.groups.map(g => `<div class="role-summary-card"><span>${g.label}</span><strong>${g.used}/${g.target}</strong></div>`).join('');
  $('#rosterRows').innerHTML = state.roster.map(r => {
    const p = playerByName(r.playerName) || { name:r.playerName, roles:[] };
    return `<tr>
      <td><div class="roster-player"><div class="player-avatar">${initials(p.name)}</div><div><strong>${escapeHtml(p.name)}</strong><div class="muted" style="font-size:10px;margin-top:2px">${escapeHtml(p.team || '—')}</div></div></div></td>
      <td><div class="role-badges" style="margin:0">${roleBadges(p.roles)}</div></td>
      <td><span class="role-badge role-${r.budgetRole}">${r.budgetRole}</span></td>
      <td><strong>${fmtInt(r.price)}</strong></td><td>${fmt(p.pmaCredits)}</td>
      <td><div class="row-actions"><button class="row-icon" data-edit="${r.id}" title="Modifica">✎</button><button class="row-icon" data-delete="${r.id}" title="Rimuovi">×</button></div></td>
    </tr>`;
  }).join('');
  $$('[data-edit]').forEach(btn => btn.onclick = () => { const r=purchaseById(btn.dataset.edit); openBuy(r.playerName,r.id); });
  $$('[data-delete]').forEach(btn => btn.onclick = () => removePurchase(btn.dataset.delete));
}

function removePurchase(id) {
  const r = purchaseById(id); if (!r) return;
  if (!confirm(`Rimuovere ${r.playerName} dalla rosa?`)) return;
  state.roster = state.roster.filter(x => x.id !== id);
  Object.values(state.lineups || {}).forEach(lineup => {
    Object.keys(lineup).forEach(slot => { if (lineup[slot] === id) delete lineup[slot]; });
  });
  scheduleSave(); renderAll(); showToast('Acquisto rimosso');
}

function renderBudget() {
  const b = calculateBudget();
  $('#budgetSpent').textContent = fmtInt(b.spentTotal);
  $('#budgetSpent').nextElementSibling.textContent = `/ ${fmtInt(b.total)}`;
  $('#budgetRemaining').textContent = fmtInt(b.remaining);
  $('#budgetRoster').textContent = state.roster.length;
  $('#budgetRoster').nextElementSibling.textContent = `/ ${state.rosterTarget}`;
  $('#maxNextBid').textContent = fmtInt(b.maxNextBid);
  $('#budgetGrid').innerHTML = b.groups.map(g => {
    const pct = Math.min(100, Math.max(0, g.utilization*100));
    return `<article class="budget-card">
      <div class="budget-card-head">
        <div class="budget-title"><i class="budget-dot"></i><div><strong>${g.label}</strong><span>${g.used}/${g.target} posti</span></div></div>
        <div class="budget-value"><strong>${fmtInt(g.dynamicBudget)}</strong><span>budget dinamico</span></div>
      </div>
      <div class="progress"><i style="width:${pct}%"></i></div>
      <div class="budget-meta">
        <div><span>SPESO</span><strong>${fmtInt(g.spent)}</strong></div>
        <div><span>ANCORA SPENDIBILI</span><strong>${fmtInt(g.remainingBudget)}</strong></div>
        <div><span>UTILIZZO</span><strong>${fmt(pct)}%</strong></div>
      </div>
    </article>`;
  }).join('');
}

function initFormationSelect() {
  $('#formationSelect').innerHTML = Object.keys(FORMATIONS).map(f => `<option value="${f}">${f}</option>`).join('');
  $('#formationSelect').value = state.formation;
}

function currentLineup() {
  state.lineups ||= {};
  state.lineups[state.formation] ||= {};
  return state.lineups[state.formation];
}

function renderField() {
  $('#formationSelect').value = state.formation;
  const slots = FORMATIONS[state.formation] || FORMATIONS['3-5-1-1'];
  const lineup = currentLineup();
  $('#pitchSlots').innerHTML = slots.map(([id,label,accept,x,y]) => {
    const purchase = lineup[id] ? purchaseById(lineup[id]) : null;
    const p = purchase ? playerByName(purchase.playerName) : null;
    return `<div class="pitch-slot ${p ? '' : 'slot-empty'}" data-slot="${id}" style="left:${x}%;top:${y}%">
      <div class="slot-card"><span class="slot-role">${label}</span><span class="slot-name">${p ? escapeHtml(shortName(p.name)) : '＋ scegli'}</span></div>
    </div>`;
  }).join('');
  $$('.pitch-slot').forEach(el => el.onclick = () => openSlot(el.dataset.slot));

  const usedIds = new Set(Object.values(lineup));
  $('#benchCount').textContent = state.roster.length;
  $('#benchList').innerHTML = state.roster.length ? state.roster.map(r => {
    const p = playerByName(r.playerName) || {name:r.playerName,roles:[]};
    return `<div class="bench-player ${usedIds.has(r.id) ? 'used' : ''}" data-bench="${r.id}"><div class="player-avatar">${initials(p.name)}</div><div class="bench-player-info"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml((p.roles||[]).join(' · '))}</span></div><strong>${fmtInt(r.price)}</strong></div>`;
  }).join('') : `<p class="muted">Aggiungi prima dei giocatori alla rosa.</p>`;
}

function shortName(name) {
  const parts=String(name).split(' '); return parts.length > 1 ? `${parts[0]} ${parts[1].slice(0,1)}.` : name;
}

function openSlot(id) {
  currentSlotId = id;
  $('#showAllSlotPlayers').checked = false;
  const slot = (FORMATIONS[state.formation] || []).find(s => s[0]===id);
  $('#slotTitle').textContent = `Posizione ${slot?.[1] || ''}`;
  renderSlotChoices();
  $('#slotDialog').showModal();
}

function renderSlotChoices() {
  const slot = (FORMATIONS[state.formation] || []).find(s => s[0]===currentSlotId);
  if (!slot) return;
  const accept = slot[2];
  const showAll = $('#showAllSlotPlayers').checked;
  const lineup = currentLineup();
  const already = new Set(Object.entries(lineup).filter(([sid]) => sid !== currentSlotId).map(([,rid]) => rid));
  const choices = state.roster.filter(r => !already.has(r.id)).filter(r => {
    const p = playerByName(r.playerName); return showAll || (p?.roles || []).some(role => accept.includes(role));
  });
  $('#slotPlayers').innerHTML = choices.length ? choices.map(r => {
    const p = playerByName(r.playerName) || {name:r.playerName,roles:[]};
    const compatible = (p.roles||[]).some(role => accept.includes(role));
    return `<button class="slot-choice" data-slot-player="${r.id}"><div class="player-avatar">${initials(p.name)}</div><div class="slot-choice-info"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml((p.roles||[]).join(' · '))}${compatible ? '' : ' · adattato'}</span></div><strong>${fmtInt(r.price)}</strong></button>`;
  }).join('') : `<p class="muted">Nessun giocatore compatibile disponibile.</p>`;
  $$('[data-slot-player]').forEach(btn => btn.onclick = () => assignToSlot(btn.dataset.slotPlayer));
  $('#removeFromSlotBtn').classList.toggle('hidden', !lineup[currentSlotId]);
}

function assignToSlot(rosterId) {
  currentLineup()[currentSlotId] = rosterId;
  scheduleSave(); $('#slotDialog').close(); renderField();
}

function autoLineup() {
  const slots = FORMATIONS[state.formation] || [];
  const lineup = {};
  const unused = [...state.roster];
  for (const [id,,accept] of slots) {
    const idx = unused.findIndex(r => (playerByName(r.playerName)?.roles || []).some(role => accept.includes(role)));
    if (idx >= 0) lineup[id] = unused.splice(idx,1)[0].id;
  }
  state.lineups[state.formation] = lineup;
  scheduleSave(); renderField(); showToast('Formazione compilata automaticamente');
}

function openSettings() {
  $('#settingsBudgetTotal').value = state.budgetTotal;
  $('#settingsRosterTarget').value = state.rosterTarget;
  $('#settingsBudgetRows').innerHTML = state.budgetConfig.map((c,i) => `<tr><td><strong>${c.label}</strong></td><td><input class="input setting-target" data-i="${i}" type="number" min="0" value="${c.target}"></td><td><input class="input setting-weight" data-i="${i}" type="number" min="0" max="100" step="0.1" value="${fmt(Number(c.weight)*100).replace(',','.')}" /></td></tr>`).join('');
  validateSettings();
  $$('.setting-target, .setting-weight').forEach(x => x.oninput = validateSettings);
  $('#settingsDialog').showModal();
}

function validateSettings() {
  const sumT = $$('.setting-target').reduce((s,x)=>s+Number(x.value||0),0);
  const sumW = $$('.setting-weight').reduce((s,x)=>s+Number(x.value||0),0);
  const el=$('#settingsValidation');
  const good=Math.abs(sumW-100)<.05;
  el.classList.toggle('error', !good);
  el.textContent = `Target fasce: ${sumT} posti · Percentuali: ${fmt(sumW)}%${good ? '' : ' (devono fare 100%)'}`;
  return good;
}

function saveSettings() {
  if (!validateSettings()) { showToast('Le percentuali devono sommare 100%', true); return false; }
  state.budgetTotal = Number($('#settingsBudgetTotal').value || 500);
  state.rosterTarget = Number($('#settingsRosterTarget').value || 35);
  state.budgetConfig = state.budgetConfig.map((c,i) => ({ ...c, target:Number($(`.setting-target[data-i="${i}"]`).value||0), weight:Number($(`.setting-weight[data-i="${i}"]`).value||0)/100 }));
  scheduleSave(); renderAll(); return true;
}

function exportCsv() {
  const rows = [['Calciatore','Squadra','Ruoli Mantra','Ruolo budget','Prezzo','PMA 500','Prezzo 2025']];
  state.roster.forEach(r => { const p=playerByName(r.playerName)||{}; rows.push([r.playerName,p.team||'',(p.roles||[]).join('/'),r.budgetRole,r.price,p.pmaCredits??'',p.price2025??'']); });
  const csv = '\uFEFF' + rows.map(row => row.map(v => `"${String(v).replace(/"/g,'""')}"`).join(';')).join('\r\n');
  downloadBlob(csv, 'rosa-asta-mantra.csv', 'text/csv;charset=utf-8');
}

function downloadBackup() { downloadBlob(JSON.stringify(state,null,2), 'backup-asta-mantra.json', 'application/json'); }
function downloadBlob(content, filename, type) { const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([content],{type})); a.download=filename; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),500); }

async function importBackup(file) {
  try {
    const parsed=JSON.parse(await file.text());
    if (!Array.isArray(parsed.roster) || !Array.isArray(parsed.budgetConfig)) throw new Error('Formato non valido');
    state=parsed; state.lineups ||= {}; await api('/api/state',{method:'PUT',body:JSON.stringify(state)}); $('#backupDialog').close(); initFormationSelect(); renderAll(); showToast('Backup importato');
  } catch (e) { showToast('Backup non valido', true); }
}

function escapeHtml(str='') { return String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c])); }
function escapeAttr(str='') { return escapeHtml(str).replace(/`/g,'&#096;'); }
function bindCloseButtons(root=document) { $$('[data-close]', root).forEach(btn => btn.onclick = () => document.getElementById(btn.dataset.close)?.close()); }

// Events
$('#loginForm').addEventListener('submit', async e => {
  e.preventDefault(); $('#loginError').textContent='';
  try { await api('/api/login',{method:'POST',body:JSON.stringify({pin:$('#pinInput').value})}); await loadApp(); }
  catch { $('#loginError').textContent='PIN errato'; }
});

$('#tabs').addEventListener('click', e => {
  const btn=e.target.closest('[data-tab]'); if (!btn) return;
  $$('.tab').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
  $$('.tab-panel').forEach(x=>x.classList.remove('active')); $(`#tab-${btn.dataset.tab}`).classList.add('active');
  if (btn.dataset.tab==='field') renderField();
});

$('#searchInput').addEventListener('input', renderPlayers);
$('#roleFilter').addEventListener('change', renderPlayers);
$('#sortFilter').addEventListener('change', renderPlayers);
$('#clearSearch').onclick = () => { $('#searchInput').value=''; renderPlayers(); $('#searchInput').focus(); };
$('#favoritesOnly').onclick = () => { favoritesOnly=!favoritesOnly; $('#favoritesOnly').classList.toggle('active',favoritesOnly); renderPlayers(); };
$('#buyForm').addEventListener('submit', e => { e.preventDefault(); savePurchase(); });
$('#settingsBtn').onclick = openSettings;
$('#budgetSettingsBtn').onclick = openSettings;
$('#settingsForm').addEventListener('submit', e => { e.preventDefault(); if (saveSettings()) { $('#settingsDialog').close(); showToast('Impostazioni salvate'); } });
$('#restoreExcelBudget').onclick = () => { $('#settingsBudgetTotal').value=500; $('#settingsRosterTarget').value=35; EXCEL_BUDGET.forEach((c,i)=>{ const t=$(`.setting-target[data-i="${i}"]`); const w=$(`.setting-weight[data-i="${i}"]`); if(t)t.value=c.target; if(w)w.value=c.weight*100; }); validateSettings(); };
$('#exportBtn').onclick = () => $('#backupDialog').showModal();
$('#exportCsvBtn').onclick = exportCsv;
$('#downloadBackupBtn').onclick = downloadBackup;
$('#importBackupInput').onchange = e => { if (e.target.files?.[0]) importBackup(e.target.files[0]); e.target.value=''; };
$('#logoutBtn').onclick = async () => { await fetch('/api/logout',{method:'POST'}); location.reload(); };
$('#resetAppBtn').onclick = async () => { if (!confirm('Azzero rosa, budget, preferiti e formazioni?')) return; await api('/api/reset',{method:'POST'}); $('#backupDialog').close(); await loadApp(); showToast('Asta azzerata'); };
$('#formationSelect').onchange = () => { state.formation=$('#formationSelect').value; state.lineups[state.formation] ||= {}; scheduleSave(); renderField(); };
$('#autoLineupBtn').onclick = autoLineup;
$('#clearLineupBtn').onclick = () => { state.lineups[state.formation]={}; scheduleSave(); renderField(); };
$('#showAllSlotPlayers').onchange = renderSlotChoices;
$('#removeFromSlotBtn').onclick = () => { delete currentLineup()[currentSlotId]; scheduleSave(); $('#slotDialog').close(); renderField(); };
bindCloseButtons();

boot();
