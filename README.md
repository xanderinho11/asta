# Asta Mantra Web — v1

Prima versione web della gestione asta Mantra, costruita dai file Excel 2026/27 dell'utente.

## Funzioni incluse

- Database di 500+ calciatori importato dal file Excel: ruoli Mantra, squadra, quotazione, PMA, PMA su 500, prezzo reale asta 2025, Fantateam 2025 e statistiche.
- Ricerca rapida con filtri e scheda giocatore.
- Acquisto giocatore con prezzo e scelta del singolo ruolo a cui imputare la spesa.
- Rosa da 35 slot, modifica/rimozione acquisti e preferiti.
- Budget dinamico nelle 8 fasce del file Excel, con riserva minima di 1 credito per ogni posto ancora da riempire.
- Configurazione di budget, target ruolo e percentuali.
- Campo grafico con selezione modulo, assegnazione giocatori e auto-schieramento.
- Backup JSON e CSV della rosa.
- Salvataggio server-side.
- PIN opzionale tramite variabile Railway `APP_PIN`.

## Avvio locale

```bash
npm start
```

Apri `http://localhost:3000`.

## Railway

1. Pubblica questa cartella in una repository GitHub.
2. Crea un servizio Railway dalla repository.
3. Aggiungi `APP_PIN` nelle Variables se vuoi proteggere l'app.
4. Per rendere i dati persistenti anche tra deploy/riavvii, aggiungi un Railway Volume montato su `/data` e imposta `DATA_DIR=/data`.
5. Railway fornirà automaticamente `PORT`.

## Note v1

Il database calciatori è incorporato nel progetto e deriva dall'Excel preparato. Lo stato personale dell'asta è separato in `state.json`, così si può aggiornare in futuro il listone senza perdere gli acquisti.
