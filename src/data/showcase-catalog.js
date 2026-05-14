/**
 * Catalogo showcase: ogni voce ha id univoco usato nell’URL `#/showcase/<id>`.
 */

const SB = 'https://davidememoli03.github.io/Arcade-UI'

export function findShowcaseItem(slug) {
  if (!slug) return null
  for (const cat of SHOWCASE_CATEGORIES) {
    const item = cat.items.find((i) => i.id === slug)
    if (item) {
      return { item, category: cat }
    }
  }
  return null
}

export const SHOWCASE_INTRO = {
  title: 'Come usare questa pagina',
  body: 'Ogni pagina componente elenca varianti e opzioni (anteprima + codice). Quasi tutto è HTML + classi arc-; dove serve JS lo vedi negli snippet.',
}

export const SHOWCASE_CATEGORIES = [
  {
    id: 'cat-base',
    label: 'Base e contenitori',
    items: [
      {
        id: 'cmp-btn',
        navLabel: 'Pulsanti',
        title: 'Pulsanti',
        className: '.arc-btn',
        blurb: 'Azioni cliccabili: stile arcade con varianti colore e dimensioni. Aggiungi `data-arc-sound-click` per SFX (con AudioManager).',
        storybook: `${SB}/?path=/story/components-button--primary`,
        previewHtml: `
          <button type="button" class="arc-btn arc-btn-primary">PRIMARY</button>
          <button type="button" class="arc-btn arc-btn-ghost">GHOST</button>
          <button type="button" class="arc-btn arc-btn-danger">DANGER</button>
          <button type="button" class="arc-btn arc-btn-primary arc-btn-sm">SMALL</button>
          <button type="button" class="arc-btn arc-btn-primary" disabled>DISABLED</button>`,
        code: `<button type="button" class="arc-btn arc-btn-primary">OK</button>
<button type="button" class="arc-btn arc-btn-ghost">CANCEL</button>
<button type="button" class="arc-btn arc-btn-danger">DELETE</button>
<button type="button" class="arc-btn arc-btn-primary arc-btn-sm">SMALL</button>`,
      },
      {
        id: 'cmp-badge',
        navLabel: 'Badge',
        title: 'Badge',
        className: '.arc-badge',
        blurb: 'Etichette compatte (stato, conteggio, rank) con colori neon e opzione pulse.',
        storybook: `${SB}/?path=/story/components-badge--default`,
        previewHtml: `
          <span class="arc-badge arc-badge-cyan">NEW</span>
          <span class="arc-badge arc-badge-red arc-badge-pulse">LIVE</span>
          <span class="arc-badge arc-badge-yellow arc-badge-outline">COINS ×3</span>`,
        code: `<span class="arc-badge arc-badge-cyan">NEW</span>
<span class="arc-badge arc-badge-red arc-badge-pulse">LIVE</span>
<span class="arc-badge arc-badge-outline arc-badge-yellow">BONUS</span>`,
      },
      {
        id: 'cmp-panel',
        navLabel: 'Panel',
        title: 'Pannello',
        className: '.arc-panel',
        blurb: 'Scatola HUD con header/body/footer: il contenitore tipico per moduli e messaggi.',
        storybook: `${SB}/?path=/story/components-panel--default`,
        previewHtml: `
          <div class="arc-panel arc-panel-cyan" style="min-width:200px;">
            <div class="arc-panel-header">TITOLO</div>
            <div class="arc-panel-body">Contenuto</div>
            <div class="arc-panel-footer"><button type="button" class="arc-btn arc-btn-ghost">OK</button></div>
          </div>`,
        code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">TITOLO</div>
  <div class="arc-panel-body">Contenuto</div>
  <div class="arc-panel-footer">
    <button type="button" class="arc-btn arc-btn-primary">OK</button>
  </div>
</div>`,
      },
      {
        id: 'cmp-card',
        navLabel: 'Card',
        title: 'Card (scheda)',
        className: '.arc-card',
        blurb: 'Scheda stile “seleziona personaggio”: header con avatar, statistiche nel body.',
        storybook: `${SB}/?path=/story/components-card--character-select-screen`,
        previewHtml: `
          <div class="arc-card arc-card-cyan" style="max-width:260px;">
            <div class="arc-card-header">
              <div class="arc-card-avatar">🥷</div>
              <p class="arc-card-title">RYU</p>
              <p class="arc-card-subtitle">Fighter</p>
            </div>
            <div class="arc-card-body">
              <div class="arc-card-meta"><span class="arc-card-meta-key">PWR</span><span class="arc-card-meta-value">92</span></div>
            </div>
          </div>`,
        code: `<div class="arc-card arc-card-cyan">
  <div class="arc-card-header">
    <div class="arc-card-avatar">🥷</div>
    <p class="arc-card-title">RYU</p>
    <p class="arc-card-subtitle">Fighter</p>
  </div>
  <div class="arc-card-body">…</div>
</div>`,
      },
    ],
  },
  {
    id: 'cat-form',
    label: 'Moduli (form)',
    items: [
      {
        id: 'cmp-input',
        navLabel: 'Input / label',
        title: 'Campi di testo',
        className: '.arc-input · .arc-label',
        blurb: 'Input testuale con etichetta sopra e hint opzionale sotto.',
        storybook: `${SB}/?path=/story/components-input--default`,
        previewHtml: `
          <div class="arc-input-wrapper" style="min-width:240px;">
            <label class="arc-label" for="sc-inp">NOME</label>
            <input id="sc-inp" class="arc-input" placeholder="AAA" maxlength="3" autocomplete="off">
            <span class="arc-input-hint">max 3 caratteri</span>
          </div>`,
        code: `<div class="arc-input-wrapper">
  <label class="arc-label" for="id">NOME</label>
  <input id="id" class="arc-input" placeholder="AAA" maxlength="3">
  <span class="arc-input-hint">suggerimento</span>
</div>`,
      },
      {
        id: 'cmp-textarea-select',
        navLabel: 'Textarea / Select',
        title: 'Area testo e menu a tendina',
        className: '.arc-textarea · .arc-select',
        blurb: 'Stessi bordi neon: `textarea` e `select` con le classi analoghe a `arc-input`.',
        storybook: `${SB}/?path=/story/components-input--default`,
        previewHtml: `
          <div class="arc-input-wrapper" style="min-width:220px;">
            <label class="arc-label" for="sc-ta">NOTE</label>
            <textarea id="sc-ta" class="arc-input arc-textarea" rows="2" placeholder="…"></textarea>
          </div>
          <div class="arc-input-wrapper" style="min-width:200px;">
            <label class="arc-label" for="sc-sel">LIVELLO</label>
            <select id="sc-sel" class="arc-input arc-select">
              <option>EASY</option><option>NORMAL</option><option>HARD</option>
            </select>
          </div>`,
        code: `<textarea class="arc-input arc-textarea" rows="3" placeholder="…"></textarea>

<select class="arc-input arc-select">
  <option>EASY</option>
  <option>NORMAL</option>
</select>`,
      },
      {
        id: 'cmp-toggle',
        navLabel: 'Toggle',
        title: 'Interruttore (toggle)',
        className: '.arc-toggle',
        blurb: 'LED on/off come sui cabinati: solo HTML + checkbox, nessun JS.',
        storybook: `${SB}/?path=/story/components-toggle--all-states`,
        previewHtml: `
          <label class="arc-toggle">
            <input type="checkbox" class="arc-toggle-input" checked>
            <span class="arc-toggle-switch" aria-hidden="true"></span>
            <span class="arc-toggle-label">SOUND</span>
          </label>`,
        code: `<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle-input">
  <span class="arc-toggle-switch" aria-hidden="true"></span>
  <span class="arc-toggle-label">OPTION</span>
</label>`,
      },
      {
        id: 'cmp-slider',
        navLabel: 'Slider',
        title: 'Slider (range)',
        className: '.arc-slider',
        blurb: 'Barra volume/stats: usa `data-arc-slider` + `--arc-slider-value` (percentuale). Con `bindSliders()` si aggiorna il fill automaticamente.',
        storybook: `${SB}/?path=/story/components-slider--volume-panel-demo`,
        previewHtml: `
          <div class="arc-slider-wrapper" style="min-width:220px;">
            <div class="arc-slider-header">
              <span class="arc-slider-label">GAIN</span>
              <span class="arc-slider-display" id="sc-vol-disp">60</span>
            </div>
            <input type="range" class="arc-slider" min="0" max="100" value="60"
              data-arc-slider data-arc-slider-display="sc-vol-disp"
              style="--arc-slider-value: 60%">
          </div>`,
        code: `<input type="range" class="arc-slider" min="0" max="100" value="75"
  data-arc-slider style="--arc-slider-value: 75%">

<!-- display valore: data-arc-slider-display="id-span" -->

// Dopo aver aggiunto gli slider al DOM:
// import { bindSliders } from '@davide03memoli/arcade-ui'
// bindSliders(document.body)`,
      },
    ],
  },
  {
    id: 'cat-nav',
    label: 'Navigazione',
    items: [
      {
        id: 'cmp-tabs',
        navLabel: 'Schede (tabs)',
        title: 'Schede',
        className: '.arc-tabs',
        blurb: 'Schede stile HUD. Senza JS: radio nascosti + label (vedi codice). Con JS: aggiungi `data-arc-tabs` su `.arc-tabs`, tab come `<button role="tab">`; `bindTabs()` è già attivo su questo sito dopo il caricamento pagina.',
        storybook: `${SB}/?path=/story/components-tabs--multi-panel-demo`,
        previewHtml: `
          <div class="arc-tabs arc-tabs-cyan" style="max-width:320px;">
            <input class="arc-tab-radio" type="radio" name="sc-tabs-radio" id="sc-tab-a" checked>
            <input class="arc-tab-radio" type="radio" name="sc-tabs-radio" id="sc-tab-b">
            <div class="arc-tab-list" role="tablist">
              <label class="arc-tab" for="sc-tab-a">A</label>
              <label class="arc-tab" for="sc-tab-b">B</label>
            </div>
            <div class="arc-tab-panel">Contenuto A</div>
            <div class="arc-tab-panel">Contenuto B</div>
          </div>`,
        code: `<div class="arc-tabs arc-tabs-cyan">
  <input class="arc-tab-radio" type="radio" name="unique-name" id="t1" checked>
  <input class="arc-tab-radio" type="radio" name="unique-name" id="t2">
  <div class="arc-tab-list" role="tablist">
    <label class="arc-tab" for="t1">TAB 1</label>
    <label class="arc-tab" for="t2">TAB 2</label>
  </div>
  <div class="arc-tab-panel">…</div>
  <div class="arc-tab-panel">…</div>
</div>`,
      },
      {
        id: 'cmp-dropdown',
        navLabel: 'Dropdown',
        title: 'Menu a comparsa',
        className: '.arc-dropdown',
        blurb: 'Lista sotto il pulsante: apri/chiudi impostando `aria-expanded` sul trigger (vedi JS nel blocco codice).',
        storybook: `${SB}/?path=/story/components-dropdown--default`,
        interactive: 'dropdown',
        previewHtml: `
          <div class="arc-dropdown arc-dropdown-cyan" style="min-width:220px;">
            <button type="button" class="arc-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
              <span class="arc-dropdown-value">DIFFICOLTÀ</span>
              <span class="arc-dropdown-chevron" aria-hidden="true"></span>
            </button>
            <ul class="arc-dropdown-menu" role="listbox">
              <li class="arc-dropdown-option" role="option">EASY</li>
              <li class="arc-dropdown-option arc-dropdown-option-selected" role="option">NORMAL</li>
              <li class="arc-dropdown-option" role="option">HARD</li>
            </ul>
          </div>`,
        code: `<!-- Apri/chiudi: sul click del trigger inverti aria-expanded ("true"/"false") -->

<div class="arc-dropdown arc-dropdown-cyan">
  <button type="button" class="arc-dropdown-trigger" aria-expanded="false">
    <span class="arc-dropdown-value">LABEL</span>
    <span class="arc-dropdown-chevron" aria-hidden="true"></span>
  </button>
  <ul class="arc-dropdown-menu" role="listbox">
    <li class="arc-dropdown-option" role="option">A</li>
  </ul>
</div>`,
        lang: 'html',
      },
      {
        id: 'cmp-accordion',
        navLabel: 'Accordion',
        title: 'Accordion',
        className: '.arc-accordion',
        blurb: 'Sezioni espandibili: usa `<details>` + `<summary>` con le classi accordion.',
        storybook: `${SB}/?path=/story/components-accordion--default`,
        previewHtml: `
          <div style="max-width:280px;">
            <details class="arc-accordion arc-accordion-cyan" open>
              <summary class="arc-accordion-summary">Round 1</summary>
              <div class="arc-accordion-content"><p>Dettagli stage…</p></div>
            </details>
            <details class="arc-accordion arc-accordion-cyan">
              <summary class="arc-accordion-summary">Round 2</summary>
              <div class="arc-accordion-content"><p>Bloccato finché non completi il round 1.</p></div>
            </details>
          </div>`,
        code: `<details class="arc-accordion arc-accordion-cyan" open>
  <summary class="arc-accordion-summary">TITOLO</summary>
  <div class="arc-accordion-content"><p>Testo</p></div>
</details>`,
      },
    ],
  },
  {
    id: 'cat-overlay',
    label: 'Sovrapposizioni',
    items: [
      {
        id: 'cmp-tooltip',
        navLabel: 'Tooltip',
        title: 'Tooltip',
        className: '[data-tooltip]',
        blurb: 'Tooltip CSS puro: metti il testo in `data-tooltip` sull’elemento. Aggiungi classi posizione se serve.',
        storybook: `${SB}/?path=/story/components-tooltip--all-positions`,
        previewHtml: `
          <button type="button" class="arc-btn arc-btn-ghost" data-tooltip="Suggerimento rapido">HOVER ME</button>`,
        code: `<button type="button" class="arc-btn arc-btn-primary" data-tooltip="Testo tooltip">
  SAVE
</button>
<!-- opzionale: arc-tooltip-bottom sullo stesso elemento -->`,
      },
      {
        id: 'cmp-modal',
        navLabel: 'Modal',
        title: 'Finestra modale',
        className: '.arc-modal',
        blurb: 'Dialog sopra la pagina: backdrop + `arcModal.open/close` da JS, oppure `data-arc-modal-open`.',
        storybook: `${SB}/?path=/story/components-modal--default`,
        previewHtml: `
          <button type="button" class="arc-btn arc-btn-primary" data-arc-modal-open="sc-showcase-modal">APRI MODALE</button>
          <div class="arc-modal-backdrop" id="sc-showcase-modal" aria-hidden="true">
            <div class="arc-modal arc-modal-cyan" role="dialog" aria-modal="true" aria-labelledby="sc-modal-title">
              <div class="arc-modal-header">
                <span id="sc-modal-title" class="arc-modal-title">PAUSA</span>
                <button type="button" class="arc-modal-close" aria-label="Chiudi">[X]</button>
              </div>
              <div class="arc-modal-body">Continuare la partita?</div>
              <div class="arc-modal-footer">
                <button type="button" class="arc-btn arc-btn-primary">SÌ</button>
                <button type="button" class="arc-btn arc-btn-ghost">NO</button>
              </div>
            </div>
          </div>`,
        code: `<button type="button" class="arc-btn arc-btn-primary" data-arc-modal-open="my-modal">OPEN</button>

<div class="arc-modal-backdrop" id="my-modal" aria-hidden="true">
  <div class="arc-modal arc-modal-cyan" role="dialog" aria-modal="true">
    <div class="arc-modal-header">…</div>
    <div class="arc-modal-body">…</div>
  </div>
</div>

import { arcModal } from '@davide03memoli/arcade-ui'
arcModal.bindModalTriggers(document.body)`,
        lang: 'javascript',
      },
    ],
  },
  {
    id: 'cat-data',
    label: 'Dati e stato',
    items: [
      {
        id: 'cmp-progress',
        navLabel: 'Progress',
        title: 'Barra di avanzamento',
        className: '.arc-progress',
        blurb: 'Percentuale con `--arc-progress` (es. `75%`). Variante “indeterminate” per caricamento infinito.',
        storybook: `${SB}/?path=/story/components-progress--all-colors`,
        previewHtml: `
          <div class="arc-progress-wrapper arc-progress-cyan" style="min-width:220px;">
            <span class="arc-progress-label">LOAD 65%</span>
            <div class="arc-progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--arc-progress: 65%">
              <div class="arc-progress-bar"></div>
            </div>
          </div>`,
        code: `<div class="arc-progress arc-progress-cyan" style="--arc-progress: 65%">
  <div class="arc-progress-bar"></div>
</div>`,
      },
      {
        id: 'cmp-table',
        navLabel: 'Tabella',
        title: 'Tabella / classifica',
        className: '.arc-table',
        blurb: 'Tabella compatta per scoreboard: wrapper colorato + righe leader.',
        storybook: `${SB}/?path=/story/components-table--leaderboard`,
        previewHtml: `
          <div class="arc-table-wrapper arc-table-cyan" style="max-width:320px;">
            <table class="arc-table arc-table-compact">
              <caption>HIGH SCORE</caption>
              <thead><tr><th class="arc-table-th arc-table-th-rank">#</th><th class="arc-table-th">NAME</th><th class="arc-table-th arc-table-th-num">PTS</th></tr></thead>
              <tbody>
                <tr class="arc-table-row arc-table-row-gold"><td class="arc-table-td arc-table-td-rank"><span class="arc-table-rank-num">01</span></td><td class="arc-table-td">ACE</td><td class="arc-table-td arc-table-td-num">999</td></tr>
                <tr class="arc-table-row"><td class="arc-table-td arc-table-td-rank"><span class="arc-table-rank-num">02</span></td><td class="arc-table-td">BOB</td><td class="arc-table-td arc-table-td-num">120</td></tr>
              </tbody>
            </table>
          </div>`,
        code: `<div class="arc-table-wrapper arc-table-cyan">
  <table class="arc-table arc-table-leaderboard">…</table>
</div>`,
      },
      {
        id: 'cmp-avatar',
        navLabel: 'Avatar',
        title: 'Avatar',
        className: '.arc-avatar',
        blurb: 'Ritratto quadrato con cornice neon e LED stato (online/offline).',
        storybook: `${SB}/?path=/story/components-avatar--character-select-grid`,
        previewHtml: `
          <div class="arc-avatar arc-avatar-sm arc-avatar-frame-neon">
            <span class="arc-avatar-status arc-avatar-status-online" aria-label="Online"></span>
            <div class="arc-avatar-inner"><span class="arc-avatar-placeholder">DM</span></div>
          </div>`,
        code: `<div class="arc-avatar arc-avatar-sm">
  <div class="arc-avatar-inner">
    <span class="arc-avatar-placeholder">DM</span>
  </div>
</div>`,
      },
      {
        id: 'cmp-display',
        navLabel: 'Display 7-seg',
        title: 'Display a sette segmenti',
        className: '.arc-display',
        blurb: 'Numeri stile cabinato. L’HTML può essere vuoto: `setArcDisplayValue(el, valore)` crea le cifre.',
        storybook: `${SB}/?path=/story/components-display--score-counter`,
        interactive: 'display',
        previewHtml: `
          <div class="arc-display arc-display-score arc-display-cyan" id="sc-seven-seg" role="status" aria-live="polite"></div>
          <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-seven-refresh">Aggiorna</button>`,
        code: `<div class="arc-display arc-display-score arc-display-cyan" role="status"></div>

import { setArcDisplayValue } from '@davide03memoli/arcade-ui'
setArcDisplayValue(element, 125400, { pad: 6 })`,
        lang: 'javascript',
      },
      {
        id: 'cmp-countdown',
        navLabel: 'Countdown',
        title: 'Timer (arcCountdown)',
        className: 'arcCountdown()',
        blurb: 'Sullo stesso tipo di display puoi far scorrere un countdown: a zero viene chiamato onEnd.',
        storybook: `${SB}/?path=/story/components-display--score-counter`,
        interactive: 'countdown',
        previewHtml: `
          <div class="arc-display arc-display-timer arc-display-amber" id="sc-count-el" role="status" aria-live="polite"></div>
          <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" id="sc-count-start">AVVIA 15s</button>`,
        code: `import { arcCountdown, setArcDisplayValue } from '@davide03memoli/arcade-ui'

setArcDisplayValue(displayEl, '15', { pad: 2 })

const ctrl = arcCountdown(displayEl, {
  seconds: 15,
  onEnd: () => { /* tempo scaduto */ },
})
// ctrl.stop()`,
        lang: 'javascript',
      },
      {
        id: 'cmp-sprite',
        navLabel: 'Sprite',
        title: 'Sprite sheet',
        className: '.arc-sprite',
        blurb: 'Animazione da foglio PNG (strip orizzontale). Imposti URL, numero frame, size e FPS con variabili CSS; oppure GIF con `arc-sprite-gif`.',
        storybook: `${SB}/?path=/story/components-sprite--sprite-sheet-strip`,
        previewHtml: `
          <div class="arc-sprite arc-sprite-pixelated arc-sprite-bg-panel"
            role="img" aria-label="Demo 1 frame"
            style="
              --arc-sprite-sheet: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==');
              --arc-sprite-frames: 1;
              --arc-sprite-width: 1px;
              --arc-sprite-height: 1px;
              --arc-sprite-scale: 48;
            "></div>
          <p class="arc-input-hint" style="max-width:220px;margin:0;">Pixel ingrandito: sostituisci con il tuo PNG strip.</p>`,
        code: `<div class="arc-sprite arc-sprite-pixelated" style="
  --arc-sprite-sheet: url('/sprites/hero.png');
  --arc-sprite-frames: 4;
  --arc-sprite-width: 32px;
  --arc-sprite-height: 32px;
  --arc-sprite-fps: 8;
  --arc-sprite-scale: 2;
"></div>`,
      },
    ],
  },
  {
    id: 'cat-fx',
    label: 'Look & effetti',
    items: [
      {
        id: 'cmp-glow-text',
        navLabel: 'Glow & testo',
        title: 'Bagliore e testo neon',
        className: '.arc-glow-* · .arc-text-*',
        blurb: 'Classi per testo luminoso, alone, contorno e gradiente — tutto token-based.',
        storybook: `${SB}/?path=/story/effects-glow--text`,
        previewHtml: `
          <span class="arc-glow-cyan" style="font-family:var(--arc-font-pixel);font-size:clamp(0.75rem,2.4vw,0.95rem);">GLOW</span>
          <span class="arc-text-neon" style="font-family:var(--arc-font-pixel);font-size:clamp(0.75rem,2.4vw,0.95rem);">NEON</span>
          <span class="arc-text-outline" style="font-family:var(--arc-font-pixel);font-size:clamp(0.75rem,2.4vw,0.95rem);">OUTLINE</span>`,
        code: `<span class="arc-glow-cyan">TESTO</span>
<span class="arc-text-neon">NEON</span>
<span class="arc-text-outline">CONTORNO</span>`,
      },
      {
        id: 'cmp-glitch',
        navLabel: 'Glitch',
        title: 'Glitch',
        className: '.arc-glitch',
        blurb: 'Distorsione su testo: classe sul markup + `initGlitch()` per sincronizzare i layer; `triggerGlitch()` per un burst.',
        storybook: `${SB}/?path=/story/effects-glitch--always-on`,
        previewHtml: `
          <p class="arc-glitch arc-text-neon" data-text="HIGH SCORE" style="font-family:var(--arc-font-pixel);font-size:clamp(0.78rem,2.5vw,1.05rem);margin:0;">HIGH SCORE</p>
          <button type="button" class="arc-btn arc-btn-ghost" id="sc-glitch-cmp-glitch">Trigger</button>`,
        interactive: 'glitch',
        code: `<p class="arc-glitch" data-text="TITLE">TITLE</p>

import { initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'
initGlitch(document.body)
triggerGlitch(element, 500)`,
        lang: 'javascript',
      },
      {
        id: 'cmp-pixel-border',
        navLabel: 'Bordo pixel',
        title: 'Bordo 8-bit',
        className: '.arc-border-pixel',
        blurb: 'Cornice a gradini come i bordi dei giochi 8-bit; combina con `-glow` per il neon.',
        storybook: `${SB}/?path=/story/effects-pixel-border--showcase`,
        previewHtml: `
          <div class="arc-border-pixel arc-border-pixel-glow" style="padding:1.1rem 1.25rem;font-family:var(--arc-font-body);font-size:1.05rem;">Contenuto incorniciato</div>`,
        code: `<div class="arc-border-pixel arc-border-pixel-glow">…</div>`,
      },
      {
        id: 'cmp-crt',
        navLabel: 'CRT',
        title: 'Schermo CRT',
        className: '.arc-crt-screen',
        blurb: 'Avvolgi il contenuto per vignetta/scanline stile tubo catodico (combinabile con animazioni flicker).',
        storybook: `${SB}/?path=/story/effects-crt--screen`,
        previewHtml: `
          <div class="arc-crt-screen arc-border-pixel" style="max-width:min(100%,22rem);width:100%;padding:1.15rem 1.35rem;font-family:var(--arc-font-body);font-size:1.05rem;line-height:1.5;text-align:center;">
            Testo come dentro al cabinato
          </div>`,
        code: `<div class="arc-crt-screen">… contenuto …</div>`,
      },
      {
        id: 'cmp-bg-pattern',
        navLabel: 'Sfondi pattern',
        title: 'Pattern di sfondo',
        className: '.arc-bg-*',
        blurb: 'Griglia, puntini, scanline, rumore, circuito, stelle — come classe su un contenitore (non sul body se vuoi controllare l’area).',
        storybook: `${SB}/?path=/story/effects-background-patterns--all-patterns`,
        previewHtml: `
          <div class="arc-bg-grid arc-border-pixel" style="min-height:5rem;padding:0.85rem 1rem;--arc-bg-opacity:0.5;display:flex;align-items:center;justify-content:center;"><span class="showcase-bg-pattern-label">Griglia leggera</span></div>`,
        code: `<div class="arc-bg-grid">…</div>
<div class="arc-bg-scanlines">…</div>`,
      },
      {
        id: 'cmp-anim',
        navLabel: 'Animazioni',
        title: 'Animazioni cabinato',
        className: '.arc-anim-*',
        blurb: 'Flicker, cursore lampeggiante, insert coin, scanline in movimento, noise TV, power on/off.',
        storybook: `${SB}/?path=/story/effects-animations--showcase`,
        previewHtml: `
          <span class="arc-anim-insert-coin arc-text-neon" style="font-family:var(--arc-font-pixel);font-size:clamp(0.7rem,2.3vw,0.9rem);">INSERT COIN</span>`,
        code: `<span class="arc-anim-flicker">…</span>
<span class="arc-anim-insert-coin">INSERT COIN</span>`,
      },
    ],
  },
  {
    id: 'cat-js',
    label: 'JavaScript incluso',
    items: [
      {
        id: 'cmp-audio',
        navLabel: 'AudioManager',
        title: 'Suoni arcade',
        className: 'AudioManager',
        blurb: 'SFX sintetizzati (nessun MP3): `play(\'coin\'|\'select\'|… )` e `bindButtons()` per i data-attribute sui bottoni.',
        storybook: `${SB}/?path=/story/components-button--primary`,
        previewHtml: `
          <button type="button" class="arc-btn arc-btn-primary" id="sc-audio-coin">coin</button>
          <button type="button" class="arc-btn arc-btn-ghost" id="sc-audio-select">select</button>`,
        interactive: 'audio',
        code: `import { AudioManager } from '@davide03memoli/arcade-ui'
const a = AudioManager.getInstance()
a.play('coin')
a.bindButtons(document.body)`,
        lang: 'javascript',
      },
      {
        id: 'cmp-toast',
        navLabel: 'Toast',
        title: 'Notifiche toast',
        className: 'arcToast',
        blurb: 'Messaggi tipo “GAME OVER” in basso o in alto: `arcToast.show({ message, type, duration })`.',
        storybook: `${SB}/?path=/story/components-toast--playground`,
        interactive: 'toast',
        previewHtml: `
          <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" id="sc-toast-i">info</button>
          <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-toast-ok">success</button>
          <button type="button" class="arc-btn arc-btn-danger arc-btn-sm" id="sc-toast-err">error</button>`,
        code: `import { arcToast } from '@davide03memoli/arcade-ui'
arcToast.show({ message: 'PLAYER 1 READY', type: 'info', duration: 3000 })`,
        lang: 'javascript',
      },
    ],
  },
]
