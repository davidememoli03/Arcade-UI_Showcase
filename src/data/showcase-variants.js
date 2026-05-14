/**
 * Varianti / opzioni per pagina dettaglio showcase (chiave = item.id del catalogo).
 */
export const SHOWCASE_VARIANTS = {
  'cmp-btn': [
    {
      title: 'Stili (variant)',
      description: 'primary · ghost · danger — eccezione visiva principale, secondaria, pericolo.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;align-items:center;">
<button type="button" class="arc-btn arc-btn-primary">PRIMARY</button>
<button type="button" class="arc-btn arc-btn-ghost">GHOST</button>
<button type="button" class="arc-btn arc-btn-danger">DANGER</button></div>`,
      code: `<button type="button" class="arc-btn arc-btn-primary">OK</button>
<button type="button" class="arc-btn arc-btn-ghost">CANCEL</button>
<button type="button" class="arc-btn arc-btn-danger">DELETE</button>`,
    },
    {
      title: 'Dimensioni',
      description: 'arc-btn-sm · arc-btn-lg — pulsanti più piccoli o più grandi.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;justify-content:center;">
<button type="button" class="arc-btn arc-btn-primary arc-btn-sm">SMALL</button>
<button type="button" class="arc-btn arc-btn-primary">DEFAULT</button>
<button type="button" class="arc-btn arc-btn-primary arc-btn-lg">LARGE</button></div>`,
      code: `<button type="button" class="arc-btn arc-btn-primary arc-btn-sm">SM</button>
<button type="button" class="arc-btn arc-btn-primary arc-btn-lg">LG</button>`,
    },
    {
      title: 'Stato disabilitato · suoni',
      description: 'disabled; per SFX da AudioManager usa data-arc-sound-hover / data-arc-sound-click.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-primary" disabled>DISABLED</button>
<button type="button" class="arc-btn arc-btn-ghost" data-arc-sound-click="coin">CON SUONO</button></div>`,
      code: `<button type="button" class="arc-btn arc-btn-primary" disabled>NIENTE CLICK</button>
<button class="arc-btn arc-btn-primary" data-arc-sound-click="select">CLICK SFX</button>`,
    },
  ],

  'cmp-badge': [
    {
      title: 'Colori',
      description: 'arc-badge-cyan · red · yellow · green · purple',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;justify-content:center;">
<span class="arc-badge arc-badge-cyan">CYAN</span>
<span class="arc-badge arc-badge-red">RED</span>
<span class="arc-badge arc-badge-yellow">YEL</span>
<span class="arc-badge arc-badge-green">GRN</span>
<span class="arc-badge arc-badge-purple">PUR</span></div>`,
      code: `<span class="arc-badge arc-badge-cyan">NEW</span>
<span class="arc-badge arc-badge-red">LIVE</span>`,
    },
    {
      title: 'Outline · pulse',
      description: 'arc-badge-outline — bordo visibile; arc-badge-pulse — animazione pulse.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;justify-content:center;">
<span class="arc-badge arc-badge-yellow arc-badge-outline">OUTLINE</span>
<span class="arc-badge arc-badge-red arc-badge-pulse">PULSE</span></div>`,
      code: `<span class="arc-badge arc-badge-outline arc-badge-cyan">TAG</span>
<span class="arc-badge arc-badge-red arc-badge-pulse">LIVE</span>`,
    },
  ],

  'cmp-panel': [
    {
      title: 'Varianti colore pannello',
      description: 'arc-panel-cyan · red · yellow · green · purple · glass',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;align-items:stretch;">
<div class="arc-panel arc-panel-cyan" style="min-width:100px;flex:1;"><div class="arc-panel-header">CY</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-red" style="min-width:100px;flex:1;"><div class="arc-panel-header">RD</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-yellow" style="min-width:100px;flex:1;"><div class="arc-panel-header">YL</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-green" style="min-width:100px;flex:1;"><div class="arc-panel-header">GN</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-purple" style="min-width:100px;flex:1;"><div class="arc-panel-header">PU</div><div class="arc-panel-body">…</div></div></div>
<div class="arc-panel arc-panel-glass" style="max-width:280px;margin:0.5rem auto 0;"><div class="arc-panel-header">GLASS</div><div class="arc-panel-body">Trasparenza / vetro</div></div>`,
      code: `<div class="arc-panel arc-panel-cyan">…</div>
<div class="arc-panel arc-panel-glass">…</div>`,
    },
    {
      title: 'Struttura header / body / footer',
      description: 'Tre zone opzionali; footer tipico per azioni.',
      previewHtml: `<div class="arc-panel arc-panel-cyan" style="max-width:260px;margin:0 auto;"><div class="arc-panel-header">TITOLO</div><div class="arc-panel-body">Contenuto principale.</div><div class="arc-panel-footer"><button type="button" class="arc-btn arc-btn-primary">OK</button></div></div>`,
      code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">TITOLO</div>
  <div class="arc-panel-body">…</div>
  <div class="arc-panel-footer">
    <button type="button" class="arc-btn arc-btn-primary">OK</button>
  </div>
</div>`,
    },
  ],

  'cmp-card': [
    {
      title: 'Varianti colore card',
      description: 'arc-card-cyan · red · yellow · green · purple',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<div class="arc-card arc-card-cyan" style="width:100px;"><div class="arc-card-header"><p class="arc-card-title">CY</p></div><div class="arc-card-body"></div></div>
<div class="arc-card arc-card-red" style="width:100px;"><div class="arc-card-header"><p class="arc-card-title">RD</p></div><div class="arc-card-body"></div></div>
<div class="arc-card arc-card-yellow" style="width:100px;"><div class="arc-card-header"><p class="arc-card-title">YL</p></div><div class="arc-card-body"></div></div></div>`,
      code: `<div class="arc-card arc-card-cyan">…</div>
<div class="arc-card arc-card-purple">…</div>`,
    },
    {
      title: 'Modificatori stato',
      description: 'arc-card-glow — bagliore; arc-card-selected — selezionata; arc-card-locked — bloccata.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<div class="arc-card arc-card-cyan arc-card-glow" style="max-width:120px;"><div class="arc-card-header"><p class="arc-card-title">GLOW</p></div><div class="arc-card-body"></div></div>
<div class="arc-card arc-card-cyan arc-card-selected" style="max-width:120px;"><div class="arc-card-header"><p class="arc-card-title">SEL</p></div><div class="arc-card-body"></div></div>
<div class="arc-card arc-card-cyan arc-card-locked" style="max-width:120px;"><div class="arc-card-header"><p class="arc-card-title">LOCK</p></div><div class="arc-card-body"></div></div></div>`,
      code: `<div class="arc-card arc-card-cyan arc-card-glow">…</div>
<div class="arc-card arc-card-cyan arc-card-selected">…</div>
<div class="arc-card arc-card-cyan arc-card-locked">…</div>`,
    },
    {
      title: 'Header con avatar e meta',
      description: 'arc-card-avatar · title · subtitle · arc-card-meta',
      previewHtml: `<div class="arc-card arc-card-cyan" style="max-width:240px;margin:0 auto;"><div class="arc-card-header"><div class="arc-card-avatar">🎮</div><p class="arc-card-title">PLAYER</p><p class="arc-card-subtitle">Ready</p></div><div class="arc-card-body"><div class="arc-card-meta"><span class="arc-card-meta-key">HP</span><span class="arc-card-meta-value">100</span></div></div></div>`,
      code: `<div class="arc-card arc-card-cyan">
  <div class="arc-card-header">
    <div class="arc-card-avatar">🥷</div>
    <p class="arc-card-title">RYU</p>
    <p class="arc-card-subtitle">Fighter</p>
  </div>
  <div class="arc-card-body">
    <div class="arc-card-meta">
      <span class="arc-card-meta-key">STR</span>
      <span class="arc-card-meta-value">92</span>
    </div>
  </div>
</div>`,
    },
  ],

  'cmp-input': [
    {
      title: 'Input + label + hint',
      description: 'arc-input-wrapper · arc-label · arc-input · arc-input-hint',
      previewHtml: `<div class="arc-input-wrapper" style="max-width:260px;margin:0 auto;"><label class="arc-label" for="sv-inp">NOME</label><input id="sv-inp" class="arc-input" placeholder="AAA" maxlength="3" autocomplete="off"><span class="arc-input-hint">max 3 caratteri</span></div>`,
      code: `<div class="arc-input-wrapper">
  <label class="arc-label" for="id">NOME</label>
  <input id="id" class="arc-input" placeholder="AAA">
  <span class="arc-input-hint">suggerimento</span>
</div>`,
    },
    {
      title: 'Hint errore',
      description: 'arc-input-hint-error — messaggio di validazione.',
      previewHtml: `<div class="arc-input-wrapper" style="max-width:260px;margin:0 auto;"><label class="arc-label" for="sv-inp2">CODICE</label><input id="sv-inp2" class="arc-input" value="bad" aria-invalid="true"><span class="arc-input-hint arc-input-hint-error">Formato non valido</span></div>`,
      code: `<span class="arc-input-hint arc-input-hint-error">Errore</span>`,
    },
  ],

  'cmp-textarea-select': [
    {
      title: 'Textarea',
      description: 'arc-input arc-textarea — stesso bordo degli input.',
      previewHtml: `<div class="arc-input-wrapper" style="max-width:280px;margin:0 auto;"><label class="arc-label" for="sv-ta">NOTE</label><textarea id="sv-ta" class="arc-input arc-textarea" rows="3" placeholder="…"></textarea></div>`,
      code: `<textarea class="arc-input arc-textarea" rows="4" placeholder="…"></textarea>`,
    },
    {
      title: 'Select',
      description: 'arc-input arc-select sul tag select.',
      previewHtml: `<div class="arc-input-wrapper" style="max-width:220px;margin:0 auto;"><label class="arc-label" for="sv-sel">LIVELLO</label><select id="sv-sel" class="arc-input arc-select"><option>EASY</option><option>NORMAL</option><option>HARD</option></select></div>`,
      code: `<select class="arc-input arc-select">
  <option>A</option><option>B</option>
</select>`,
    },
  ],

  'cmp-toggle': [
    {
      title: 'Stati base',
      description: 'Checkbox nascosto + switch; checked / non checked.',
      previewHtml: `<div style="display:flex;flex-direction:column;gap:0.5rem;align-items:flex-start;">
<label class="arc-toggle"><input type="checkbox" class="arc-toggle-input"><span class="arc-toggle-switch" aria-hidden="true"></span><span class="arc-toggle-label">OFF</span></label>
<label class="arc-toggle"><input type="checkbox" class="arc-toggle-input" checked><span class="arc-toggle-switch" aria-hidden="true"></span><span class="arc-toggle-label">ON</span></label></div>`,
      code: `<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle-input" checked>
  <span class="arc-toggle-switch" aria-hidden="true"></span>
  <span class="arc-toggle-label">LABEL</span>
</label>`,
    },
    {
      title: 'Disabilitato · label a sinistra · override visivo',
      description: 'disabled; arc-toggle-label-left; arc-toggle-on / arc-toggle-off (forza aspetto senza stato nativo).',
      previewHtml: `<div style="display:flex;flex-direction:column;gap:0.5rem;align-items:flex-start;">
<label class="arc-toggle"><input type="checkbox" class="arc-toggle-input" disabled><span class="arc-toggle-switch" aria-hidden="true"></span><span class="arc-toggle-label">LOCKED</span></label>
<label class="arc-toggle arc-toggle-label-left"><input type="checkbox" class="arc-toggle-input" checked><span class="arc-toggle-switch" aria-hidden="true"></span><span class="arc-toggle-label">LEFT</span></label></div>`,
      code: `<label class="arc-toggle arc-toggle-label-left">…</label>
<!-- static override: --></label>`,
    },
  ],

  'cmp-slider': [
    {
      title: 'Slider base + data-arc-slider',
      description: 'Imposta --arc-slider-value in %; bindSliders() aggiorna il fill (attivo su questo sito).',
      previewHtml: `<div class="arc-slider-wrapper" style="min-width:220px;margin:0 auto;"><div class="arc-slider-header"><span class="arc-slider-label">VOL</span><span class="arc-slider-display" id="sv-vd">55</span></div><input type="range" class="arc-slider" min="0" max="100" value="55" data-arc-slider data-arc-slider-display="sv-vd" style="--arc-slider-value: 55%"></div>`,
      code: `<input type="range" class="arc-slider" min="0" max="100" value="75"
  data-arc-slider style="--arc-slider-value: 75%">`,
    },
    {
      title: 'Varianti colore',
      description: 'arc-slider-danger · arc-slider-success · arc-slider-yellow · arc-slider-purple',
      previewHtml: `<div style="display:flex;flex-direction:column;gap:0.75rem;min-width:200px;">
<input type="range" class="arc-slider arc-slider-danger" min="0" max="100" value="30" data-arc-slider style="--arc-slider-value:30%">
<input type="range" class="arc-slider arc-slider-success" min="0" max="100" value="50" data-arc-slider style="--arc-slider-value:50%">
<input type="range" class="arc-slider arc-slider-yellow" min="0" max="100" value="70" data-arc-slider style="--arc-slider-value:70%">
<input type="range" class="arc-slider arc-slider-purple" min="0" max="100" value="90" data-arc-slider style="--arc-slider-value:90%"></div>`,
      code: `<input type="range" class="arc-slider arc-slider-danger" …>`,
    },
  ],

  'cmp-tabs': [
    {
      title: 'Colori (arc-tabs-*)',
      description: 'cyan · magenta · yellow · green · red · purple — stessa struttura radio/label/panel.',
      previewHtml: `<div class="arc-tabs arc-tabs-cyan" style="max-width:280px;margin:0 auto;"><input class="arc-tab-radio" type="radio" name="sv-tabs-demo" id="svtd1" checked><input class="arc-tab-radio" type="radio" name="sv-tabs-demo" id="svtd2"><div class="arc-tab-list" role="tablist"><label class="arc-tab" for="svtd1">A</label><label class="arc-tab" for="svtd2">B</label></div><div class="arc-tab-panel">Cyan</div><div class="arc-tab-panel">tabs</div></div>`,
      code: `<div class="arc-tabs arc-tabs-cyan">…</div>
<div class="arc-tabs arc-tabs-yellow">…</div>
<!-- magenta · green · red · purple -->`,
    },
    {
      title: 'Anatomia CSS-only',
      description: 'Radio con stesso name; label for= id; pannelli .arc-tab-panel nello stesso ordine.',
      previewHtml: ``,
      code: `<div class="arc-tabs arc-tabs-cyan">
  <input class="arc-tab-radio" type="radio" name="uniq" id="t1" checked>
  <input class="arc-tab-radio" type="radio" name="uniq" id="t2">
  <div class="arc-tab-list" role="tablist">
    <label class="arc-tab" for="t1">TAB 1</label>
    <label class="arc-tab" for="t2">TAB 2</label>
  </div>
  <div class="arc-tab-panel">…</div>
  <div class="arc-tab-panel">…</div>
</div>`,
    },
    {
      title: 'Modalità JS (data-arc-tabs)',
      description: 'Tab come button role="tab"; bindTabs() le collega. Già eseguito dopo navigazione su questo sito.',
      previewHtml: `<div class="arc-tabs arc-tabs-green" data-arc-tabs style="max-width:280px;margin:0 auto;"><div class="arc-tab-list" role="tablist"><button type="button" class="arc-tab" role="tab">1</button><button type="button" class="arc-tab" role="tab">2</button></div><div class="arc-tab-panel" role="tabpanel">Uno</div><div class="arc-tab-panel" role="tabpanel">Due</div></div>`,
      code: `<div class="arc-tabs arc-tabs-cyan" data-arc-tabs>
  <div class="arc-tab-list" role="tablist">
    <button type="button" class="arc-tab" role="tab">A</button>
    <button type="button" class="arc-tab" role="tab">B</button>
  </div>
  <div class="arc-tab-panel" role="tabpanel">…</div>
  <div class="arc-tab-panel" role="tabpanel">…</div>
</div>`,
    },
  ],

  'cmp-dropdown': [
    {
      title: 'Colori menu',
      description: 'arc-dropdown-cyan · green · red · yellow · purple',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;align-items:flex-start;">
<div class="arc-dropdown arc-dropdown-green" style="min-width:140px;"><button type="button" class="arc-dropdown-trigger" aria-expanded="false"><span class="arc-dropdown-value">G</span><span class="arc-dropdown-chevron" aria-hidden="true"></span></button><ul class="arc-dropdown-menu" role="listbox"><li class="arc-dropdown-option" role="option">A</li></ul></div>
<div class="arc-dropdown arc-dropdown-red" style="min-width:140px;"><button type="button" class="arc-dropdown-trigger" aria-expanded="false"><span class="arc-dropdown-value">R</span><span class="arc-dropdown-chevron" aria-hidden="true"></span></button><ul class="arc-dropdown-menu" role="listbox"><li class="arc-dropdown-option" role="option">A</li></ul></div>
<div class="arc-dropdown arc-dropdown-yellow" style="min-width:140px;"><button type="button" class="arc-dropdown-trigger" aria-expanded="false"><span class="arc-dropdown-value">Y</span><span class="arc-dropdown-chevron" aria-hidden="true"></span></button><ul class="arc-dropdown-menu" role="listbox"><li class="arc-dropdown-option" role="option">A</li></ul></div></div>`,
      code: `<div class="arc-dropdown arc-dropdown-cyan">…</div>
<div class="arc-dropdown arc-dropdown-purple">…</div>`,
    },
    {
      title: 'Opzioni · selezionata · disabilitata',
      description: 'arc-dropdown-option-selected · arc-dropdown-option-disabled',
      previewHtml: `<div class="arc-dropdown arc-dropdown-cyan" style="min-width:200px;margin:0 auto;"><button type="button" class="arc-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false"><span class="arc-dropdown-value">LEVEL</span><span class="arc-dropdown-chevron" aria-hidden="true"></span></button><ul class="arc-dropdown-menu" role="listbox"><li class="arc-dropdown-option" role="option">EASY</li><li class="arc-dropdown-option arc-dropdown-option-selected" role="option">NORMAL</li><li class="arc-dropdown-option arc-dropdown-option-disabled" aria-disabled="true" role="option">LOCKED</li></ul></div>`,
      code: `<li class="arc-dropdown-option arc-dropdown-option-selected" role="option">…</li>
<li class="arc-dropdown-option arc-dropdown-option-disabled" aria-disabled="true" role="option">…</li>`,
    },
  ],

  'cmp-accordion': [
    {
      title: 'Colori',
      description: 'arc-accordion-cyan · red · yellow · green',
      previewHtml: `<div style="max-width:260px;margin:0 auto;"><details class="arc-accordion arc-accordion-red" open><summary class="arc-accordion-summary">RED</summary><div class="arc-accordion-content"><p>Esempio</p></div></details></div>`,
      code: `<details class="arc-accordion arc-accordion-cyan" open>
  <summary class="arc-accordion-summary">TITOLO</summary>
  <div class="arc-accordion-content"><p>…</p></div>
</details>`,
    },
  ],

  'cmp-tooltip': [
    {
      title: 'Posizioni',
      description: 'arc-tooltip-top (default) · bottom · left · right',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-bottom" data-tooltip="Sotto">BOTTOM</button>
<button type="button" class="arc-btn arc-btn-ghost" data-tooltip="Sopra default">TOP</button>
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-left" data-tooltip="Sinistra">LEFT</button>
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-right" data-tooltip="Destra">RIGHT</button></div>`,
      code: `<button class="arc-btn arc-btn-primary" data-tooltip="Testo">OK</button>
<button class="arc-btn arc-tooltip-bottom" data-tooltip="…">…</button>`,
    },
  ],

  'cmp-modal': [
    {
      title: 'Varianti colore modale',
      description: 'arc-modal-cyan · green · yellow · red · purple',
      previewHtml: `<button type="button" class="arc-btn arc-btn-primary" data-arc-modal-open="sc-modal-cmp-modal">APRI (cyan)</button>
<div class="arc-modal-backdrop" id="sc-modal-cmp-modal" aria-hidden="true">
  <div class="arc-modal arc-modal-cyan" role="dialog" aria-modal="true" aria-labelledby="sc-modal-cmp-modal-title">
    <div class="arc-modal-header">
      <span id="sc-modal-cmp-modal-title" class="arc-modal-title">DEMO</span>
      <button type="button" class="arc-modal-close" aria-label="Chiudi">[X]</button>
    </div>
    <div class="arc-modal-body">Varianti: applica arc-modal-green / yellow / red / purple sulla stessa struttura.</div>
    <div class="arc-modal-footer"><button type="button" class="arc-btn arc-btn-ghost">CHIUDI</button></div>
  </div>
</div>`,
      code: `<div class="arc-modal arc-modal-green" role="dialog">…</div>
<div class="arc-modal arc-modal-yellow" role="dialog">…</div>
<!-- red · purple -->

import { arcModal } from '@davide03memoli/arcade-ui'
arcModal.open('id-backdrop', { trigger: element })`,
      lang: 'javascript',
    },
  ],

  'cmp-progress': [
    {
      title: 'Determinata + colori',
      description: 'Wrapper con label; --arc-progress da 0% a 100%',
      previewHtml: `<div style="display:flex;flex-direction:column;gap:0.75rem;min-width:220px;">
<div class="arc-progress-wrapper arc-progress-cyan"><span class="arc-progress-label">CY 40%</span><div class="arc-progress" style="--arc-progress:40%"><div class="arc-progress-bar"></div></div></div>
<div class="arc-progress-wrapper arc-progress-green"><span class="arc-progress-label">GN 70%</span><div class="arc-progress" style="--arc-progress:70%"><div class="arc-progress-bar"></div></div></div>
<div class="arc-progress-wrapper arc-progress-red"><span class="arc-progress-label">RD 20%</span><div class="arc-progress" style="--arc-progress:20%"><div class="arc-progress-bar"></div></div></div></div>`,
      code: `<div class="arc-progress arc-progress-yellow" style="--arc-progress: 65%">
  <div class="arc-progress-bar"></div>
</div>`,
    },
    {
      title: 'Indeterminate',
      description: 'arc-progress-indeterminate — animazione a ciclo continuo.',
      previewHtml: `<div class="arc-progress arc-progress-indeterminate arc-progress-purple" role="progressbar" aria-label="Loading" style="min-width:200px;"></div>`,
      code: `<div class="arc-progress arc-progress-indeterminate arc-progress-cyan" role="progressbar">
  <div class="arc-progress-bar"></div>
</div>`,
    },
  ],

  'cmp-table': [
    {
      title: 'Colori wrapper · compattezza',
      description: 'arc-table-wrapper arc-table-* · arc-table-compact',
      previewHtml: `<div class="arc-table-wrapper arc-table-green" style="max-width:300px;margin:0 auto;"><table class="arc-table arc-table-compact"><caption>MIN</caption><thead><tr><th class="arc-table-th">A</th><th class="arc-table-th arc-table-th-num">B</th></tr></thead><tbody><tr class="arc-table-row"><td class="arc-table-td">1</td><td class="arc-table-td arc-table-td-num">2</td></tr></tbody></table></div>`,
      code: `<div class="arc-table-wrapper arc-table-cyan">…</div>
<!-- green · yellow · red · purple -->`,
    },
    {
      title: 'Leaderboard · righe speciali',
      description: 'arc-table-leaderboard; arc-table-row-gold · arc-table-row-active · arc-table-row-muted',
      previewHtml: `<div class="arc-table-wrapper arc-table-cyan" style="max-width:320px;margin:0 auto;"><table class="arc-table arc-table-leaderboard"><thead><tr><th class="arc-table-th arc-table-th-rank">#</th><th class="arc-table-th">P</th><th class="arc-table-th arc-table-th-num">S</th></tr></thead><tbody><tr class="arc-table-row arc-table-row-gold"><td class="arc-table-td arc-table-td-rank"><span class="arc-table-rank-num">01</span></td><td class="arc-table-td">TOP</td><td class="arc-table-td arc-table-td-num">999</td></tr><tr class="arc-table-row arc-table-row-muted"><td class="arc-table-td arc-table-td-rank"><span class="arc-table-rank-num">02</span></td><td class="arc-table-td">YOU</td><td class="arc-table-td arc-table-td-num">10</td></tr></tbody></table></div>`,
      code: `<table class="arc-table arc-table-leaderboard">…</table>`,
    },
  ],

  'cmp-avatar': [
    {
      title: 'Dimensioni',
      description: 'arc-avatar-sm · (default) · lg · xl',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:flex-end;justify-content:center;">
<div class="arc-avatar arc-avatar-sm"><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">S</span></div></div>
<div class="arc-avatar"><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">M</span></div></div>
<div class="arc-avatar arc-avatar-lg"><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">L</span></div></div></div>`,
      code: `<div class="arc-avatar arc-avatar-sm">…</div>
<div class="arc-avatar arc-avatar-xl">…</div>`,
    },
    {
      title: 'Cornici · stato · attivo',
      description: 'arc-avatar-frame-neon · gold · silver · bronze; status online/offline; arc-avatar-active',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<div class="arc-avatar arc-avatar-sm arc-avatar-frame-gold arc-avatar-active"><span class="arc-avatar-status arc-avatar-status-online"></span><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">1</span></div></div>
<div class="arc-avatar arc-avatar-sm arc-avatar-frame-silver"><span class="arc-avatar-status arc-avatar-status-offline"></span><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">2</span></div></div></div>`,
      code: `<div class="arc-avatar arc-avatar-frame-bronze">…</div>`,
    },
  ],

  'cmp-display': [
    {
      title: 'Varianti layout · colore',
      description: 'arc-display-score · arc-display-timer; colori red · green · amber · cyan. Valore tipicamente impostato da setArcDisplayValue.',
      previewHtml: `<div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;align-items:flex-start;">
<div style="text-align:center;"><div class="arc-display arc-display-score arc-display-cyan" role="status" style="min-height:2.5rem;width:100%;max-width:140px;"></div><span class="arc-input-hint" style="font-size:0.7rem;">score · cyan</span></div>
<div style="text-align:center;"><div class="arc-display arc-display-timer arc-display-amber" role="status" style="min-height:2.5rem;width:100%;max-width:140px;"></div><span class="arc-input-hint" style="font-size:0.7rem;">timer · amber</span></div></div>`,
      code: `<div class="arc-display arc-display-score arc-display-cyan" role="status"></div>
<!-- vuoto → setArcDisplayValue(el, 12345, { pad: 6 }) -->`,
      lang: 'javascript',
    },
    {
      title: 'Prova interattiva (JS)',
      description: 'Aggiorna il valore con setArcDisplayValue.',
      previewHtml: `<div class="arc-display arc-display-score arc-display-cyan" id="sc-display-cmp-display" role="status" aria-live="polite"></div>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-display-refresh-cmp-display">Aggiorna numero</button>`,
      code: `import { setArcDisplayValue } from '@davide03memoli/arcade-ui'
setArcDisplayValue(el, 125400, { pad: 6 })`,
      lang: 'javascript',
    },
  ],

  'cmp-countdown': [
    {
      title: 'API arcCountdown',
      description: 'secondi, onTick, onEnd; stop() per annullare.',
      previewHtml: `<div class="arc-display arc-display-timer arc-display-amber" id="sc-count-cmp-countdown" role="status" aria-live="polite"></div>
<button type="button" class="arc-btn arc-btn-primary arc-btn-sm" id="sc-count-start-cmp-countdown">AVVIA 15s</button>`,
      code: `import { arcCountdown, setArcDisplayValue } from '@davide03memoli/arcade-ui'
setArcDisplayValue(displayEl, '15', { pad: 2 })
const ctrl = arcCountdown(displayEl, {
  seconds: 15,
  onTick: (r) => {},
  onEnd: () => {},
})
ctrl.stop()`,
      lang: 'javascript',
    },
  ],

  'cmp-sprite': [
    {
      title: 'Strip orizzontale',
      description: '--arc-sprite-sheet · -frames · -width · -height · -fps · -scale',
      previewHtml: `<div class="arc-sprite arc-sprite-pixelated arc-sprite-bg-panel" role="img" style="--arc-sprite-sheet:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==');--arc-sprite-frames:1;--arc-sprite-width:1px;--arc-sprite-height:1px;--arc-sprite-scale:40;"></div>`,
      code: `<div class="arc-sprite arc-sprite-pixelated" style="
  --arc-sprite-sheet: url('/hero.png');
  --arc-sprite-frames: 4;
  --arc-sprite-width: 32px;
  --arc-sprite-height: 32px;
  --arc-sprite-fps: 8;
"></div>`,
    },
    {
      title: 'Modificatori classi',
      description: 'arc-sprite-bg-dark · arc-sprite-bg-panel · arc-sprite-paused · arc-sprite-pixelated · arc-sprite-loop-once · arc-sprite-grid · arc-sprite-gif',
      previewHtml: `<p class="arc-input-hint" style="text-align:center;">GIF: contenitore arc-sprite-gif + img.arc-sprite-img. Grglia multi-riga: arc-sprite-grid + arcSprite.init() in JS.</p>`,
      code: `<div class="arc-sprite arc-sprite-gif arc-sprite-pixelated">
  <img class="arc-sprite-img" src="idle.gif" alt="" width="32" height="32">
</div>

import { arcSprite } from '@davide03memoli/arcade-ui'
arcSprite.init(document.querySelector('.arc-sprite'))?.play()`,
      lang: 'javascript',
    },
  ],

  'cmp-glow-text': [
    {
      title: 'Glow box / testo',
      description: 'arc-glow-cyan · red · yellow · green · purple',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.85rem 1rem;justify-content:center;align-items:center;padding:0.35rem 0;font-family:var(--arc-font-pixel);font-size:clamp(0.72rem,2.4vw,0.95rem);">
<span class="arc-glow-cyan">CY</span><span class="arc-glow-red">RD</span><span class="arc-glow-yellow">YL</span><span class="arc-glow-green">GN</span><span class="arc-glow-purple">PU</span></div>`,
      code: `<span class="arc-glow-cyan">TEXT</span>`,
    },
    {
      title: 'Effetti testo',
      description: 'arc-text-neon · arc-text-gradient · arc-text-outline · arc-text-glitch · arc-text-shadow-long · arc-text-chroma · arc-text-pixel-shadow',
      previewHtml: `<div style="display:flex;flex-direction:column;gap:0.85rem;align-items:center;justify-content:center;padding:0.5rem 0;font-family:var(--arc-font-pixel);font-size:clamp(0.72rem,2.3vw,0.95rem);">
<span class="arc-text-neon">NEON</span><span class="arc-text-outline">OUTLINE</span><span class="arc-text-glitch" data-text="GLITCH">GLITCH</span></div>`,
      code: `<span class="arc-text-gradient">GRAD</span>
<span class="arc-text-pixel-shadow">PIX</span>`,
    },
  ],

  'cmp-glitch': [
    {
      title: 'Classi',
      description: 'arc-glitch (sempre) · arc-glitch-hover (solo al passaggio del mouse)',
      previewHtml: `<div style="display:flex;flex-direction:column;align-items:center;gap:1.1rem;width:100%;padding:0.35rem 0;">
<p class="arc-glitch arc-text-neon" data-text="ALWAYS" style="font-family:var(--arc-font-pixel);font-size:clamp(0.78rem,2.5vw,1.05rem);margin:0;text-align:center;">ALWAYS</p>
<p class="arc-glitch-hover arc-text-neon" data-text="HOVER" style="font-family:var(--arc-font-pixel);font-size:clamp(0.78rem,2.5vw,1.05rem);margin:0;text-align:center;">HOVER ME</p></div>`,
      code: `<p class="arc-glitch" data-text="X">X</p>
<p class="arc-glitch-hover" data-text="Y">Y</p>`,
    },
    {
      title: 'Burst (JS)',
      description: 'initGlitch(root) + triggerGlitch(el, ms)',
      previewHtml: `<div style="display:flex;flex-direction:column;align-items:center;gap:1rem;width:100%;">
<p class="arc-glitch arc-text-neon" data-text="PULSE" style="font-family:var(--arc-font-pixel);font-size:clamp(0.78rem,2.5vw,1.05rem);margin:0;">PULSE</p>
<button type="button" class="arc-btn arc-btn-ghost" id="sc-glitch-cmp-glitch">Trigger</button></div>`,
      code: `import { initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'
initGlitch(document.body)
triggerGlitch(el, 500)`,
      lang: 'javascript',
    },
  ],

  'cmp-pixel-border': [
    {
      title: 'Spessori e stili',
      description: 'arc-border-pixel · arc-border-pixel-thick · arc-border-pixel-inset · arc-border-pixel-chamfer · arc-border-pixel-glow',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:clamp(1.25rem,3.5vw,2.25rem) clamp(1.5rem,4vw,2.75rem);justify-content:center;align-items:flex-start;padding:0.6rem clamp(0.35rem,2vw,0.85rem) 1rem;">
<div class="arc-border-pixel" style="padding:0.85rem 1rem;font-family:var(--arc-font-body);font-size:1rem;line-height:1.35;">base</div>
<div class="arc-border-pixel-thick arc-border-pixel-glow" style="padding:0.85rem 1rem;font-family:var(--arc-font-body);font-size:1rem;line-height:1.35;">thick+glow</div>
<div class="arc-border-pixel-inset" style="padding:0.85rem 1rem;font-family:var(--arc-font-body);font-size:1rem;line-height:1.35;">inset</div>
<div class="arc-border-pixel-chamfer" style="padding:0.85rem 1rem;font-family:var(--arc-font-body);font-size:1rem;line-height:1.35;">chamfer</div></div>`,
      code: `<div class="arc-border-pixel arc-border-pixel-glow">…</div>`,
    },
  ],

  'cmp-crt': [
    {
      title: 'Wrapper CRT',
      description: 'Combina con arc-anim-flicker / scanline su figli se serve.',
      previewHtml: `<div class="arc-crt-screen arc-border-pixel" style="max-width:min(100%,22rem);width:100%;padding:1.15rem 1.35rem;margin:0 auto;font-family:var(--arc-font-body);font-size:1.05rem;line-height:1.5;text-align:center;">Contenuto tipo CRT</div>`,
      code: `<div class="arc-crt-screen">…</div>`,
    },
  ],

  'cmp-bg-pattern': [
    {
      title: 'Classi pattern',
      description: 'arc-bg-grid · arc-bg-dots · arc-bg-scanlines · arc-bg-noise · arc-bg-circuit · arc-bg-stars',
      previewHtml: `<div class="showcase-bg-pattern-demo" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(11.5rem,1fr));gap:clamp(1rem,2.5vw,1.35rem);max-width:38rem;width:100%;margin:0 auto;padding:0.15rem;">
<div class="arc-bg-grid arc-border-pixel" style="min-height:5.25rem;padding:0.65rem 0.75rem;display:flex;align-items:center;justify-content:center;--arc-bg-opacity:0.55;"><span class="showcase-bg-pattern-label">grid</span></div>
<div class="arc-bg-dots arc-border-pixel" style="min-height:5.25rem;padding:0.65rem 0.75rem;display:flex;align-items:center;justify-content:center;"><span class="showcase-bg-pattern-label">dots</span></div>
<div class="arc-bg-scanlines arc-border-pixel" style="min-height:5.25rem;padding:0.65rem 0.75rem;display:flex;align-items:center;justify-content:center;"><span class="showcase-bg-pattern-label">scan</span></div>
<div class="arc-bg-noise arc-border-pixel" style="min-height:5.25rem;padding:0.65rem 0.75rem;display:flex;align-items:center;justify-content:center;"><span class="showcase-bg-pattern-label">noise</span></div>
<div class="arc-bg-circuit arc-border-pixel" style="min-height:5.25rem;padding:0.65rem 0.75rem;display:flex;align-items:center;justify-content:center;"><span class="showcase-bg-pattern-label">circuit</span></div>
<div class="arc-bg-stars arc-border-pixel" style="min-height:5.25rem;padding:0.65rem 0.75rem;display:flex;align-items:center;justify-content:center;"><span class="showcase-bg-pattern-label">stars</span></div></div>`,
      code: `<div class="arc-bg-grid" style="--arc-bg-opacity:0.4">…</div>`,
    },
  ],

  'cmp-anim': [
    {
      title: 'Classi animazione',
      description: 'Token in CSS: velocità/intensità regolabili con variabili.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.85rem 1rem;justify-content:center;align-items:center;padding:0.5rem 0;font-family:var(--arc-font-pixel);font-size:clamp(0.68rem,2.2vw,0.9rem);">
<span class="arc-anim-flicker">FLICK</span>
<span class="arc-anim-blink-cursor">|</span>
<span class="arc-anim-insert-coin">COIN</span>
<span class="arc-anim-scanline-move arc-border-pixel" style="padding:0.45rem 0.6rem;">SCAN</span></div>`,
      code: `<span class="arc-anim-static-noise">…</span>
<span class="arc-anim-power-on">…</span>
<span class="arc-anim-power-off">…</span>
<!-- arc-u-blink · arc-u-pulse · arc-u-glitch -->`,
    },
  ],

  'cmp-audio': [
    {
      title: 'ID suoni built-in',
      description: 'coin · select · blip · error · win · gameover',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-audio-coin-cmp-audio">coin</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-audio-select-cmp-audio">select</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-audio-blip-cmp-audio">blip</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-audio-error-cmp-audio">error</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-audio-win-cmp-audio">win</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-audio-gameover-cmp-audio">gameover</button></div>`,
      code: `const a = AudioManager.getInstance()
a.play('coin')
a.play('select')
// blip · error · win · gameover

a.setVolume(0.5)
a.mute() / a.unmute()

a.bindButtons(document.body)`,
      lang: 'javascript',
    },
  ],

  'cmp-toast': [
    {
      title: 'Tipi',
      description: 'info · success · warning · error',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-primary arc-btn-sm" id="sc-toast-i-cmp-toast">info</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-toast-ok-cmp-toast">success</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-toast-warn-cmp-toast">warn</button>
<button type="button" class="arc-btn arc-btn-danger arc-btn-sm" id="sc-toast-err-cmp-toast">error</button></div>`,
      code: `import { arcToast } from '@davide03memoli/arcade-ui'
arcToast.show({ message: '…', type: 'info', duration: 3000 })
// type: 'success' | 'warning' | 'error'
// duration: 0 = persistente
// position: 'bottom-right' | 'bottom-left' | …`,
      lang: 'javascript',
    },
  ],
}

/** Varianti per pagina dettaglio; fallback al singolo esempio del catalogo. */
export function getShowcaseVariants(item) {
  const list = SHOWCASE_VARIANTS[item.id]
  if (list?.length) {
    return list
  }
  return [
    {
      title: 'Esempio',
      description: '',
      previewHtml: item.previewHtml,
      code: item.code,
      lang: item.lang ?? 'html',
    },
  ]
}
