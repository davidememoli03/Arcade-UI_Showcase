/** Italian copy for showcase catalog — auto-extracted. */
export const SHOWCASE_INTRO_IT = {
  title: 'Come usare questa pagina',
  body: 'Ogni pagina componente elenca varianti e opzioni (anteprima + codice). Quasi tutto è HTML + classi arc-; dove serve JS lo vedi negli snippet.',
}

export const SHOWCASE_CATEGORY_LABEL_IT = {
  "cat-base": "Base e contenitori",
  "cat-form": "Moduli (form)",
  "cat-nav": "Navigazione",
  "cat-overlay": "Sovrapposizioni",
  "cat-data": "Dati e stato",
  "cat-fx": "Look & effetti",
  "cat-js": "JavaScript incluso"
}

export const SHOWCASE_ITEM_IT = {
  "cmp-btn": {
    "navLabel": "Pulsanti",
    "title": "Pulsanti",
    "blurb": "Azioni cliccabili: stile arcade con varianti colore e dimensioni. Aggiungi `data-arc-sound-click` per SFX (con AudioManager)."
  },
  "cmp-badge": {
    "navLabel": "Badge",
    "title": "Badge",
    "blurb": "Etichette compatte (stato, conteggio, rank) con colori neon e opzione pulse."
  },
  "cmp-panel": {
    "navLabel": "Panel",
    "title": "Pannello",
    "blurb": "Scatola HUD con header/body/footer: il contenitore tipico per moduli e messaggi."
  },
  "cmp-card": {
    "navLabel": "Card",
    "title": "Card (scheda)",
    "blurb": "Scheda stile “seleziona personaggio”: header con avatar, statistiche nel body."
  },
  "cmp-input": {
    "navLabel": "Input / label",
    "title": "Campi di testo",
    "blurb": "Input testuale con etichetta sopra e hint opzionale sotto."
  },
  "cmp-textarea-select": {
    "navLabel": "Textarea / Select",
    "title": "Area testo e menu a tendina",
    "blurb": "Stessi bordi neon: `textarea` e `select` con le classi analoghe a `arc-input`."
  },
  "cmp-toggle": {
    "navLabel": "Toggle",
    "title": "Interruttore (toggle)",
    "blurb": "LED on/off come sui cabinati: solo HTML + checkbox, nessun JS."
  },
  "cmp-slider": {
    "navLabel": "Slider",
    "title": "Slider (range)",
    "blurb": "Barra volume/stats: usa `data-arc-slider` + `--arc-slider-value` (percentuale). Con `bindSliders()` si aggiorna il fill automaticamente."
  },
  "cmp-tabs": {
    "navLabel": "Schede (tabs)",
    "title": "Schede",
    "blurb": "Schede stile HUD. Senza JS: radio nascosti + label (vedi codice). Con JS: aggiungi `data-arc-tabs` su `.arc-tabs`, tab come `<button role=\"tab\">`; `bindTabs()` è già attivo su questo sito dopo il caricamento pagina."
  },
  "cmp-dropdown": {
    "navLabel": "Dropdown",
    "title": "Menu a comparsa",
    "blurb": "Lista sotto il pulsante: apri/chiudi impostando `aria-expanded` sul trigger (vedi JS nel blocco codice)."
  },
  "cmp-accordion": {
    "navLabel": "Accordion",
    "title": "Accordion",
    "blurb": "Sezioni espandibili: usa `<details>` + `<summary>` con le classi accordion."
  },
  "cmp-tooltip": {
    "navLabel": "Tooltip",
    "title": "Tooltip",
    "blurb": "Tooltip CSS puro: metti il testo in `data-tooltip` sull’elemento. Aggiungi classi posizione se serve."
  },
  "cmp-modal": {
    "navLabel": "Modal",
    "title": "Finestra modale",
    "blurb": "Dialog sopra la pagina: backdrop + `arcModal.open/close` da JS, oppure `data-arc-modal-open`."
  },
  "cmp-progress": {
    "navLabel": "Progress",
    "title": "Barra di avanzamento",
    "blurb": "Percentuale con `--arc-progress` (es. `75%`). Variante “indeterminate” per caricamento infinito."
  },
  "cmp-table": {
    "navLabel": "Tabella",
    "title": "Tabella / classifica",
    "blurb": "Tabella compatta per scoreboard: wrapper colorato + righe leader."
  },
  "cmp-avatar": {
    "navLabel": "Avatar",
    "title": "Avatar",
    "blurb": "Ritratto quadrato con cornice neon e LED stato (online/offline)."
  },
  "cmp-display": {
    "navLabel": "Display 7-seg",
    "title": "Display a sette segmenti",
    "blurb": "Numeri stile cabinato. L’HTML può essere vuoto: `setArcDisplayValue(el, valore)` crea le cifre."
  },
  "cmp-countdown": {
    "navLabel": "Countdown",
    "title": "Timer (arcCountdown)",
    "blurb": "Sullo stesso tipo di display puoi far scorrere un countdown: a zero viene chiamato onEnd."
  },
  "cmp-sprite": {
    "navLabel": "Sprite",
    "title": "Sprite sheet",
    "blurb": "Animazione da foglio PNG (strip orizzontale). Imposti URL, numero frame, size e FPS con variabili CSS; oppure GIF con `arc-sprite-gif`."
  },
  "cmp-glow-text": {
    "navLabel": "Glow & testo",
    "title": "Bagliore e testo neon",
    "blurb": "Classi per testo luminoso, alone, contorno e gradiente — tutto token-based."
  },
  "cmp-glitch": {
    "navLabel": "Glitch",
    "title": "Glitch",
    "blurb": "Distorsione su testo: classe sul markup + `initGlitch()` per sincronizzare i layer; `triggerGlitch()` per un burst."
  },
  "cmp-pixel-border": {
    "navLabel": "Bordo pixel",
    "title": "Bordo 8-bit",
    "blurb": "Cornice a gradini come i bordi dei giochi 8-bit; combina con `-glow` per il neon."
  },
  "cmp-crt": {
    "navLabel": "CRT",
    "title": "Schermo CRT",
    "blurb": "Avvolgi il contenuto per vignetta/scanline stile tubo catodico (combinabile con animazioni flicker)."
  },
  "cmp-bg-pattern": {
    "navLabel": "Sfondi pattern",
    "title": "Pattern di sfondo",
    "blurb": "Griglia, puntini, scanline, rumore, circuito, stelle — come classe su un contenitore (non sul body se vuoi controllare l’area)."
  },
  "cmp-anim": {
    "navLabel": "Animazioni",
    "title": "Animazioni cabinato",
    "blurb": "Flicker, cursore lampeggiante, insert coin, scanline in movimento, noise TV, power on/off."
  },
  "cmp-audio": {
    "navLabel": "AudioManager",
    "title": "Suoni arcade",
    "blurb": "SFX sintetizzati (nessun MP3): `play('coin'|'select'|… )` e `bindButtons()` per i data-attribute sui bottoni."
  },
  "cmp-toast": {
    "navLabel": "Toast",
    "title": "Notifiche toast",
    "blurb": "Messaggi tipo “GAME OVER” in basso o in alto: `arcToast.show({ message, type, duration })`."
  }
}
