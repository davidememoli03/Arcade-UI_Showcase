/**
 * Italian overlays for showcase variants (paired by index with SHOWCASE_VARIANTS).
 * Optional previewHtml/code/lang swap in Italian demos; headings match historic IT copy.
 */
export const SHOWCASE_VARIANTS_IT = {
  "cmp-btn": [
    {
      "title": "Stili (variant)",
      "description": "primary · ghost · danger — eccezione visiva principale, secondaria, pericolo."
    },
    {
      "title": "Dimensioni",
      "description": "arc-btn-sm · arc-btn-lg — pulsanti più piccoli o più grandi."
    },
    {
      "title": "Stato disabilitato · suoni",
      "description": "disabled; per SFX da AudioManager usa data-arc-sound-hover / data-arc-sound-click.",
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-primary" disabled>DISABLED</button>
<button type="button" class="arc-btn arc-btn-ghost" data-arc-sound-click="coin">CON SUONO</button></div>`,
      code: `<button type="button" class="arc-btn arc-btn-primary" disabled>NIENTE CLICK</button>
<button class="arc-btn arc-btn-primary" data-arc-sound-click="select">CLICK SFX</button>`,
    }
  ],
  "cmp-badge": [
    {
      "title": "Colori",
      "description": "arc-badge-cyan · red · yellow · green · purple"
    },
    {
      "title": "Outline · pulse",
      "description": "arc-badge-outline — bordo visibile; arc-badge-pulse — animazione pulse."
    }
  ],
  "cmp-panel": [
    {
      "title": "Varianti colore pannello",
      "description": "arc-panel-cyan · red · yellow · green · purple · glass",
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;align-items:stretch;">
<div class="arc-panel arc-panel-cyan" style="min-width:100px;flex:1;"><div class="arc-panel-header">CY</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-red" style="min-width:100px;flex:1;"><div class="arc-panel-header">RD</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-yellow" style="min-width:100px;flex:1;"><div class="arc-panel-header">YL</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-green" style="min-width:100px;flex:1;"><div class="arc-panel-header">GN</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-purple" style="min-width:100px;flex:1;"><div class="arc-panel-header">PU</div><div class="arc-panel-body">…</div></div></div>
<div class="arc-panel arc-panel-glass" style="max-width:280px;margin:0.5rem auto 0;"><div class="arc-panel-header">GLASS</div><div class="arc-panel-body">Trasparenza / vetro</div></div>`,
    },
    {
      "title": "Struttura header / body / footer",
      "description": "Tre zone opzionali; footer tipico per azioni.",
      previewHtml: `<div class="arc-panel arc-panel-cyan" style="max-width:260px;margin:0 auto;"><div class="arc-panel-header">TITOLO</div><div class="arc-panel-body">Contenuto principale.</div><div class="arc-panel-footer"><button type="button" class="arc-btn arc-btn-primary">OK</button></div></div>`,
      code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">TITOLO</div>
  <div class="arc-panel-body">…</div>
  <div class="arc-panel-footer">
    <button type="button" class="arc-btn arc-btn-primary">OK</button>
  </div>
</div>`,
    }
  ],
  "cmp-card": [
    {
      "title": "Varianti colore card",
      "description": "arc-card-cyan · red · yellow · green · purple"
    },
    {
      "title": "Modificatori stato",
      "description": "arc-card-glow — bagliore; arc-card-selected — selezionata; arc-card-locked — bloccata."
    },
    {
      "title": "Header con avatar e meta",
      "description": "arc-card-avatar · title · subtitle · arc-card-meta"
    }
  ],
  "cmp-input": [
    {
      "title": "Input + label + hint",
      "description": "arc-input-wrapper · arc-label · arc-input · arc-input-hint",
      previewHtml: `<div class="arc-input-wrapper" style="max-width:260px;margin:0 auto;"><label class="arc-label" for="sv-inp">NOME</label><input id="sv-inp" class="arc-input" placeholder="AAA" maxlength="3" autocomplete="off"><span class="arc-input-hint">max 3 caratteri</span></div>`,
      code: `<div class="arc-input-wrapper">
  <label class="arc-label" for="id">NOME</label>
  <input id="id" class="arc-input" placeholder="AAA">
  <span class="arc-input-hint">suggerimento</span>
</div>`,
    },
    {
      "title": "Hint errore",
      "description": "arc-input-hint-error — messaggio di validazione.",
      previewHtml: `<div class="arc-input-wrapper" style="max-width:260px;margin:0 auto;"><label class="arc-label" for="sv-inp2">CODICE</label><input id="sv-inp2" class="arc-input" value="bad" aria-invalid="true"><span class="arc-input-hint arc-input-hint-error">Formato non valido</span></div>`,
      code: `<span class="arc-input-hint arc-input-hint-error">Errore</span>`,
    }
  ],
  "cmp-textarea-select": [
    {
      "title": "Textarea",
      "description": "arc-input arc-textarea — stesso bordo degli input."
    },
    {
      "title": "Select",
      "description": "arc-input arc-select sul tag select.",
      previewHtml: `<div class="arc-input-wrapper" style="max-width:220px;margin:0 auto;"><label class="arc-label" for="sv-sel">LIVELLO</label><select id="sv-sel" class="arc-input arc-select"><option>EASY</option><option>NORMAL</option><option>HARD</option></select></div>`,
    }
  ],
  "cmp-toggle": [
    {
      "title": "Stati base",
      "description": "Checkbox nascosto + switch; checked / non checked."
    },
    {
      "title": "Disabilitato · label a sinistra · override visivo",
      "description": "disabled; arc-toggle-label-left; arc-toggle-on / arc-toggle-off (forza aspetto senza stato nativo)."
    }
  ],
  "cmp-slider": [
    {
      "title": "Slider base + data-arc-slider",
      "description": "Imposta --arc-slider-value in %; bindSliders() aggiorna il fill (attivo su questo sito)."
    },
    {
      "title": "Varianti colore",
      "description": "arc-slider-danger · arc-slider-success · arc-slider-yellow · arc-slider-purple"
    }
  ],
  "cmp-tabs": [
    {
      "title": "Colori (arc-tabs-*)",
      "description": "cyan · magenta · yellow · green · red · purple — stessa struttura radio/label/panel."
    },
    {
      "title": "Anatomia CSS-only",
      "description": "Radio con stesso name; label for= id; pannelli .arc-tab-panel nello stesso ordine."
    },
    {
      "title": "Modalità JS (data-arc-tabs)",
      "description": "Tab come button role=\"tab\"; bindTabs() le collega. Già eseguito dopo navigazione su questo sito.",
      previewHtml: `<div class="arc-tabs arc-tabs-green" data-arc-tabs style="max-width:280px;margin:0 auto;"><div class="arc-tab-list" role="tablist"><button type="button" class="arc-tab" role="tab">1</button><button type="button" class="arc-tab" role="tab">2</button></div><div class="arc-tab-panel" role="tabpanel">Uno</div><div class="arc-tab-panel" role="tabpanel">Due</div></div>`,
    }
  ],
  "cmp-dropdown": [
    {
      "title": "Colori menu",
      "description": "arc-dropdown-cyan · green · red · yellow · purple"
    },
    {
      "title": "Opzioni · selezionata · disabilitata",
      "description": "arc-dropdown-option-selected · arc-dropdown-option-disabled"
    }
  ],
  "cmp-accordion": [
    {
      "title": "Colori",
      "description": "arc-accordion-cyan · red · yellow · green",
      previewHtml: `<div style="max-width:260px;margin:0 auto;"><details class="arc-accordion arc-accordion-red" open><summary class="arc-accordion-summary">RED</summary><div class="arc-accordion-content"><p>Esempio</p></div></details></div>`,
      code: `<details class="arc-accordion arc-accordion-cyan" open>
  <summary class="arc-accordion-summary">TITOLO</summary>
  <div class="arc-accordion-content"><p>…</p></div>
</details>`,
    }
  ],
  "cmp-tooltip": [
    {
      "title": "Posizioni",
      "description": "arc-tooltip-top (default) · bottom · left · right",
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-bottom" data-tooltip="Sotto">BOTTOM</button>
<button type="button" class="arc-btn arc-btn-ghost" data-tooltip="Sopra (default)">TOP</button>
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-left" data-tooltip="Sinistra">LEFT</button>
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-right" data-tooltip="Destra">RIGHT</button></div>`,
      code: `<button class="arc-btn arc-btn-primary" data-tooltip="Testo tooltip">OK</button>
<button class="arc-btn arc-tooltip-bottom" data-tooltip="…">…</button>`,
    }
  ],
  "cmp-modal": [
    {
      "title": "Varianti colore modale",
      "description": "arc-modal-cyan · green · yellow · red · purple",
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
    }
  ],
  "cmp-progress": [
    {
      "title": "Determinata + colori",
      "description": "Wrapper con label; --arc-progress da 0% a 100%"
    },
    {
      "title": "Indeterminate",
      "description": "arc-progress-indeterminate — animazione a ciclo continuo."
    }
  ],
  "cmp-table": [
    {
      "title": "Colori wrapper · compattezza",
      "description": "arc-table-wrapper arc-table-* · arc-table-compact"
    },
    {
      "title": "Leaderboard · righe speciali",
      "description": "arc-table-leaderboard; arc-table-row-gold · arc-table-row-active · arc-table-row-muted"
    }
  ],
  "cmp-avatar": [
    {
      "title": "Dimensioni",
      "description": "arc-avatar-sm · (default) · lg · xl"
    },
    {
      "title": "Cornici · stato · attivo",
      "description": "arc-avatar-frame-neon · gold · silver · bronze; status online/offline; arc-avatar-active"
    }
  ],
  "cmp-display": [
    {
      "title": "Varianti layout · colore",
      "description": "arc-display-score · arc-display-timer; colori red · green · amber · cyan. Valore tipicamente impostato da setArcDisplayValue.",
      code: `<div class="arc-display arc-display-score arc-display-cyan" role="status"></div>
<!-- vuoto → setArcDisplayValue(el, 12345, { pad: 6 }) -->`,
      lang: 'javascript',
    },
    {
      "title": "Prova interattiva (JS)",
      "description": "Aggiorna il valore con setArcDisplayValue.",
      previewHtml: `<div class="arc-display arc-display-score arc-display-cyan" id="sc-display-cmp-display" role="status" aria-live="polite"></div>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-display-refresh-cmp-display">Aggiorna numero</button>`,
    }
  ],
  "cmp-countdown": [
    {
      "title": "API arcCountdown",
      "description": "secondi, onTick, onEnd; stop() per annullare.",
      previewHtml: `<div class="arc-display arc-display-timer arc-display-amber" id="sc-count-cmp-countdown" role="status" aria-live="polite"></div>
<button type="button" class="arc-btn arc-btn-primary arc-btn-sm" id="sc-count-start-cmp-countdown">AVVIA 15s</button>`,
    }
  ],
  "cmp-sprite": [
    {
      "title": "Strip orizzontale",
      "description": "--arc-sprite-sheet · -frames · -width · -height · -fps · -scale"
    },
    {
      "title": "Modificatori classi",
      "description": "arc-sprite-bg-dark · arc-sprite-bg-panel · arc-sprite-paused · arc-sprite-pixelated · arc-sprite-loop-once · arc-sprite-grid · arc-sprite-gif",
      previewHtml: `<p class="arc-input-hint" style="text-align:center;">GIF: contenitore arc-sprite-gif + img.arc-sprite-img. Griglia multi-riga: arc-sprite-grid + arcSprite.init() in JS.</p>`,
    }
  ],
  "cmp-glow-text": [
    {
      "title": "Glow box / testo",
      "description": "arc-glow-cyan · red · yellow · green · purple"
    },
    {
      "title": "Effetti testo",
      "description": "arc-text-neon · arc-text-gradient · arc-text-outline · arc-text-glitch · arc-text-shadow-long · arc-text-chroma · arc-text-pixel-shadow"
    }
  ],
  "cmp-glitch": [
    {
      "title": "Classi",
      "description": "arc-glitch (sempre) · arc-glitch-hover (solo al passaggio del mouse)"
    },
    {
      "title": "Burst (JS)",
      "description": "initGlitch(root) + triggerGlitch(el, ms)"
    }
  ],
  "cmp-pixel-border": [
    {
      "title": "Spessori e stili",
      "description": "arc-border-pixel · arc-border-pixel-thick · arc-border-pixel-inset · arc-border-pixel-chamfer · arc-border-pixel-glow"
    }
  ],
  "cmp-crt": [
    {
      "title": "Wrapper CRT",
      "description": "Combina con arc-anim-flicker / scanline su figli se serve.",
      previewHtml: `<div class="arc-crt-screen arc-border-pixel" style="max-width:min(100%,22rem);width:100%;padding:1.15rem 1.35rem;margin:0 auto;font-family:var(--arc-font-body);font-size:1.05rem;line-height:1.5;text-align:center;">Contenuto tipo CRT</div>`,
    }
  ],
  "cmp-bg-pattern": [
    {
      "title": "Classi pattern",
      "description": "arc-bg-grid · arc-bg-dots · arc-bg-scanlines · arc-bg-noise · arc-bg-circuit · arc-bg-stars"
    }
  ],
  "cmp-anim": [
    {
      "title": "Classi animazione",
      "description": "Token in CSS: velocità/intensità regolabili con variabili."
    }
  ],
  "cmp-audio": [
    {
      "title": "ID suoni built-in",
      "description": "coin · select · blip · error · win · gameover"
    }
  ],
  "cmp-toast": [
    {
      "title": "Tipi",
      "description": "info · success · warning · error",
      code: `import { arcToast } from '@davide03memoli/arcade-ui'
arcToast.show({ message: '…', type: 'info', duration: 3000 })
// type: 'success' | 'warning' | 'error'
// duration: 0 = toast persistente
// position: 'bottom-right' | 'bottom-left' | …`,
      lang: 'javascript',
    }
  ]
}
