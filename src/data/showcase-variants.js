import { SHOWCASE_VARIANTS_EN } from './showcase-variant-en.js'
import { SHOWCASE_VARIANTS_IT } from './showcase-variant-it.js'

/**
 * Variant snippets (preview + code). English text is canonical; IT overlays in `showcase-variant-it.js`.
 */
export const SHOWCASE_VARIANTS = {
  'cmp-btn': [
    {
      title: 'Styles (variants)',
      description: 'primary · ghost · danger — primary, secondary, and danger visuals.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;align-items:center;">
<button type="button" class="arc-btn arc-btn-primary">PRIMARY</button>
<button type="button" class="arc-btn arc-btn-ghost">GHOST</button>
<button type="button" class="arc-btn arc-btn-danger">DANGER</button></div>`,
      code: `<button type="button" class="arc-btn arc-btn-primary">OK</button>
<button type="button" class="arc-btn arc-btn-ghost">CANCEL</button>
<button type="button" class="arc-btn arc-btn-danger">DELETE</button>`,
    },
    {
      title: 'Sizes',
      description: 'arc-btn-sm · arc-btn-lg — smaller or larger buttons.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;justify-content:center;">
<button type="button" class="arc-btn arc-btn-primary arc-btn-sm">SMALL</button>
<button type="button" class="arc-btn arc-btn-primary">DEFAULT</button>
<button type="button" class="arc-btn arc-btn-primary arc-btn-lg">LARGE</button></div>`,
      code: `<button type="button" class="arc-btn arc-btn-primary arc-btn-sm">SM</button>
<button type="button" class="arc-btn arc-btn-primary arc-btn-lg">LG</button>`,
    },
    {
      title: 'Disabled · sounds',
      description: 'disabled; for AudioManager SFX use data-arc-sound-hover / data-arc-sound-click.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-primary" disabled>DISABLED</button>
<button type="button" class="arc-btn arc-btn-ghost" data-arc-sound-click="coin">WITH SOUND</button></div>`,
      code: `<button type="button" class="arc-btn arc-btn-primary" disabled>NO CLICK</button>
<button class="arc-btn arc-btn-primary" data-arc-sound-click="select">CLICK SFX</button>`,
    },
  ],

  'cmp-badge': [
    {
      title: 'Colors',
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
      description: 'arc-badge-outline — visible border; arc-badge-pulse — pulse animation.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;justify-content:center;">
<span class="arc-badge arc-badge-yellow arc-badge-outline">OUTLINE</span>
<span class="arc-badge arc-badge-red arc-badge-pulse">PULSE</span></div>`,
      code: `<span class="arc-badge arc-badge-outline arc-badge-cyan">TAG</span>
<span class="arc-badge arc-badge-red arc-badge-pulse">LIVE</span>`,
    },
  ],

  'cmp-panel': [
    {
      title: 'Panel color variants',
      description: 'arc-panel-cyan · red · yellow · green · purple · glass',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;align-items:stretch;">
<div class="arc-panel arc-panel-cyan" style="min-width:100px;flex:1;"><div class="arc-panel-header">CY</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-red" style="min-width:100px;flex:1;"><div class="arc-panel-header">RD</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-yellow" style="min-width:100px;flex:1;"><div class="arc-panel-header">YL</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-green" style="min-width:100px;flex:1;"><div class="arc-panel-header">GN</div><div class="arc-panel-body">…</div></div>
<div class="arc-panel arc-panel-purple" style="min-width:100px;flex:1;"><div class="arc-panel-header">PU</div><div class="arc-panel-body">…</div></div></div>
<div class="arc-panel arc-panel-glass" style="max-width:280px;margin:0.5rem auto 0;"><div class="arc-panel-header">GLASS</div><div class="arc-panel-body">Transparency / frosted glass</div></div>`,
      code: `<div class="arc-panel arc-panel-cyan">…</div>
<div class="arc-panel arc-panel-glass">…</div>`,
    },
    {
      title: 'Header / body / footer structure',
      description: 'Three optional zones; footer is typical for actions.',
      previewHtml: `<div class="arc-panel arc-panel-cyan" style="max-width:260px;margin:0 auto;"><div class="arc-panel-header">TITLE</div><div class="arc-panel-body">Main body copy.</div><div class="arc-panel-footer"><button type="button" class="arc-btn arc-btn-primary">OK</button></div></div>`,
      code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">TITLE</div>
  <div class="arc-panel-body">…</div>
  <div class="arc-panel-footer">
    <button type="button" class="arc-btn arc-btn-primary">OK</button>
  </div>
</div>`,
    },
  ],

  'cmp-card': [
    {
      title: 'Card color variants',
      description: 'arc-card-cyan · red · yellow · green · purple',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<div class="arc-card arc-card-cyan" style="width:100px;"><div class="arc-card-header"><p class="arc-card-title">CY</p></div><div class="arc-card-body"></div></div>
<div class="arc-card arc-card-red" style="width:100px;"><div class="arc-card-header"><p class="arc-card-title">RD</p></div><div class="arc-card-body"></div></div>
<div class="arc-card arc-card-yellow" style="width:100px;"><div class="arc-card-header"><p class="arc-card-title">YL</p></div><div class="arc-card-body"></div></div></div>`,
      code: `<div class="arc-card arc-card-cyan">…</div>
<div class="arc-card arc-card-purple">…</div>`,
    },
    {
      title: 'State modifiers',
      description: 'arc-card-glow — glow; arc-card-selected — selected; arc-card-locked — locked.',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<div class="arc-card arc-card-cyan arc-card-glow" style="max-width:120px;"><div class="arc-card-header"><p class="arc-card-title">GLOW</p></div><div class="arc-card-body"></div></div>
<div class="arc-card arc-card-cyan arc-card-selected" style="max-width:120px;"><div class="arc-card-header"><p class="arc-card-title">SEL</p></div><div class="arc-card-body"></div></div>
<div class="arc-card arc-card-cyan arc-card-locked" style="max-width:120px;"><div class="arc-card-header"><p class="arc-card-title">LOCK</p></div><div class="arc-card-body"></div></div></div>`,
      code: `<div class="arc-card arc-card-cyan arc-card-glow">…</div>
<div class="arc-card arc-card-cyan arc-card-selected">…</div>
<div class="arc-card arc-card-cyan arc-card-locked">…</div>`,
    },
    {
      title: 'Header with avatar and meta',
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
      previewHtml: `<div class="arc-input-wrapper" style="max-width:260px;margin:0 auto;"><label class="arc-label" for="sv-inp">NAME</label><input id="sv-inp" class="arc-input" placeholder="AAA" maxlength="3" autocomplete="off"><span class="arc-input-hint">max 3 characters</span></div>`,
      code: `<div class="arc-input-wrapper">
  <label class="arc-label" for="id">NAME</label>
  <input id="id" class="arc-input" placeholder="AAA">
  <span class="arc-input-hint">hint</span>
</div>`,
    },
    {
      title: 'Error hint',
      description: 'arc-input-hint-error — validation message.',
      previewHtml: `<div class="arc-input-wrapper" style="max-width:260px;margin:0 auto;"><label class="arc-label" for="sv-inp2">CODE</label><input id="sv-inp2" class="arc-input" value="bad" aria-invalid="true"><span class="arc-input-hint arc-input-hint-error">Invalid format</span></div>`,
      code: `<span class="arc-input-hint arc-input-hint-error">Error</span>`,
    },
  ],

  'cmp-textarea-select': [
    {
      title: 'Textarea',
      description: 'arc-input arc-textarea — same border treatment as inputs.',
      previewHtml: `<div class="arc-input-wrapper" style="max-width:280px;margin:0 auto;"><label class="arc-label" for="sv-ta">NOTE</label><textarea id="sv-ta" class="arc-input arc-textarea" rows="3" placeholder="…"></textarea></div>`,
      code: `<textarea class="arc-input arc-textarea" rows="4" placeholder="…"></textarea>`,
    },
    {
      title: 'Select',
      description: 'arc-input arc-select on the select element.',
      previewHtml: `<div class="arc-input-wrapper" style="max-width:220px;margin:0 auto;"><label class="arc-label" for="sv-sel">LEVEL</label><select id="sv-sel" class="arc-input arc-select"><option>EASY</option><option>NORMAL</option><option>HARD</option></select></div>`,
      code: `<select class="arc-input arc-select">
  <option>A</option><option>B</option>
</select>`,
    },
  ],

  'cmp-toggle': [
    {
      title: 'Basic states',
      description: 'Hidden checkbox + switch; checked / unchecked.',
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
      title: 'Disabled · left label · visual override',
      description: 'disabled; arc-toggle-label-left; arc-toggle-on / arc-toggle-off (forces look without native state).',
      previewHtml: `<div style="display:flex;flex-direction:column;gap:0.5rem;align-items:flex-start;">
<label class="arc-toggle"><input type="checkbox" class="arc-toggle-input" disabled><span class="arc-toggle-switch" aria-hidden="true"></span><span class="arc-toggle-label">LOCKED</span></label>
<label class="arc-toggle arc-toggle-label-left"><input type="checkbox" class="arc-toggle-input" checked><span class="arc-toggle-switch" aria-hidden="true"></span><span class="arc-toggle-label">LEFT</span></label></div>`,
      code: `<label class="arc-toggle arc-toggle-label-left">…</label>
<!-- static override: --></label>`,
    },
  ],

  'cmp-slider': [
    {
      title: 'Base slider + data-arc-slider',
      description: 'Set --arc-slider-value as a %; bindSliders() updates the fill (enabled on this site).',
      previewHtml: `<div class="arc-slider-wrapper" style="min-width:220px;margin:0 auto;"><div class="arc-slider-header"><span class="arc-slider-label">VOL</span><span class="arc-slider-display" id="sv-vd">55</span></div><input type="range" class="arc-slider" min="0" max="100" value="55" data-arc-slider data-arc-slider-display="sv-vd" style="--arc-slider-value: 55%"></div>`,
      code: `<input type="range" class="arc-slider" min="0" max="100" value="75"
  data-arc-slider style="--arc-slider-value: 75%">`,
    },
    {
      title: 'Color variants',
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
      title: 'Colors (arc-tabs-*)',
      description: 'cyan · magenta · yellow · green · red · purple — same radio/label/panel structure.',
      previewHtml: `<div class="arc-tabs arc-tabs-cyan" style="max-width:280px;margin:0 auto;"><input class="arc-tab-radio" type="radio" name="sv-tabs-demo" id="svtd1" checked><input class="arc-tab-radio" type="radio" name="sv-tabs-demo" id="svtd2"><div class="arc-tab-list" role="tablist"><label class="arc-tab" for="svtd1">A</label><label class="arc-tab" for="svtd2">B</label></div><div class="arc-tab-panel">Cyan</div><div class="arc-tab-panel">tabs</div></div>`,
      code: `<div class="arc-tabs arc-tabs-cyan">…</div>
<div class="arc-tabs arc-tabs-yellow">…</div>
<!-- magenta · green · red · purple -->`,
    },
    {
      title: 'CSS-only anatomy',
      description: 'Radios share the same name; label for= id; .arc-tab-panel elements in matching order.',
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
      title: 'JS mode (data-arc-tabs)',
      description: 'Tabs as buttons with role="tab"; bindTabs() wires them. Runs after navigation on this site.',
      previewHtml: `<div class="arc-tabs arc-tabs-green" data-arc-tabs style="max-width:280px;margin:0 auto;"><div class="arc-tab-list" role="tablist"><button type="button" class="arc-tab" role="tab">1</button><button type="button" class="arc-tab" role="tab">2</button></div><div class="arc-tab-panel" role="tabpanel">One</div><div class="arc-tab-panel" role="tabpanel">Two</div></div>`,
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
      title: 'Menu colors',
      description: 'arc-dropdown-cyan · green · red · yellow · purple',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;align-items:flex-start;">
<div class="arc-dropdown arc-dropdown-green" style="min-width:140px;"><button type="button" class="arc-dropdown-trigger" aria-expanded="false"><span class="arc-dropdown-value">G</span><span class="arc-dropdown-chevron" aria-hidden="true"></span></button><ul class="arc-dropdown-menu" role="listbox"><li class="arc-dropdown-option" role="option">A</li></ul></div>
<div class="arc-dropdown arc-dropdown-red" style="min-width:140px;"><button type="button" class="arc-dropdown-trigger" aria-expanded="false"><span class="arc-dropdown-value">R</span><span class="arc-dropdown-chevron" aria-hidden="true"></span></button><ul class="arc-dropdown-menu" role="listbox"><li class="arc-dropdown-option" role="option">A</li></ul></div>
<div class="arc-dropdown arc-dropdown-yellow" style="min-width:140px;"><button type="button" class="arc-dropdown-trigger" aria-expanded="false"><span class="arc-dropdown-value">Y</span><span class="arc-dropdown-chevron" aria-hidden="true"></span></button><ul class="arc-dropdown-menu" role="listbox"><li class="arc-dropdown-option" role="option">A</li></ul></div></div>`,
      code: `<div class="arc-dropdown arc-dropdown-cyan">…</div>
<div class="arc-dropdown arc-dropdown-purple">…</div>`,
    },
    {
      title: 'Options · selected · disabled',
      description: 'arc-dropdown-option-selected · arc-dropdown-option-disabled',
      previewHtml: `<div class="arc-dropdown arc-dropdown-cyan" style="min-width:200px;margin:0 auto;"><button type="button" class="arc-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false"><span class="arc-dropdown-value">LEVEL</span><span class="arc-dropdown-chevron" aria-hidden="true"></span></button><ul class="arc-dropdown-menu" role="listbox"><li class="arc-dropdown-option" role="option">EASY</li><li class="arc-dropdown-option arc-dropdown-option-selected" role="option">NORMAL</li><li class="arc-dropdown-option arc-dropdown-option-disabled" aria-disabled="true" role="option">LOCKED</li></ul></div>`,
      code: `<li class="arc-dropdown-option arc-dropdown-option-selected" role="option">…</li>
<li class="arc-dropdown-option arc-dropdown-option-disabled" aria-disabled="true" role="option">…</li>`,
    },
  ],

  'cmp-accordion': [
    {
      title: 'Colors',
      description: 'arc-accordion-cyan · red · yellow · green',
      previewHtml: `<div style="max-width:260px;margin:0 auto;"><details class="arc-accordion arc-accordion-red" open><summary class="arc-accordion-summary">RED</summary><div class="arc-accordion-content"><p>Sample copy</p></div></details></div>`,
      code: `<details class="arc-accordion arc-accordion-cyan" open>
  <summary class="arc-accordion-summary">TITLE</summary>
  <div class="arc-accordion-content"><p>…</p></div>
</details>`,
    },
  ],

  'cmp-tooltip': [
    {
      title: 'Positions',
      description: 'arc-tooltip-top (default) · bottom · left · right',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-bottom" data-tooltip="Below">BOTTOM</button>
<button type="button" class="arc-btn arc-btn-ghost" data-tooltip="Default top">TOP</button>
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-left" data-tooltip="Left side">LEFT</button>
<button type="button" class="arc-btn arc-btn-ghost arc-tooltip-right" data-tooltip="Right side">RIGHT</button></div>`,
      code: `<button class="arc-btn arc-btn-primary" data-tooltip="Tooltip text">OK</button>
<button class="arc-btn arc-tooltip-bottom" data-tooltip="…">…</button>`,
    },
  ],

  'cmp-modal': [
    {
      title: 'Modal color variants',
      description: 'arc-modal-cyan · green · yellow · red · purple',
      previewHtml: `<button type="button" class="arc-btn arc-btn-primary" data-arc-modal-open="sc-modal-cmp-modal">OPEN (cyan)</button>
<div class="arc-modal-backdrop" id="sc-modal-cmp-modal" aria-hidden="true">
  <div class="arc-modal arc-modal-cyan" role="dialog" aria-modal="true" aria-labelledby="sc-modal-cmp-modal-title">
    <div class="arc-modal-header">
      <span id="sc-modal-cmp-modal-title" class="arc-modal-title">DEMO</span>
      <button type="button" class="arc-modal-close" aria-label="Close">[X]</button>
    </div>
    <div class="arc-modal-body">Variants: swap arc-modal-green / yellow / red / purple on the same markup shell.</div>
    <div class="arc-modal-footer"><button type="button" class="arc-btn arc-btn-ghost">CLOSE</button></div>
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
      title: 'Determinate + colors',
      description: 'Wrapper with label; --arc-progress from 0% to 100%',
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
      description: 'arc-progress-indeterminate — looping animation.',
      previewHtml: `<div class="arc-progress arc-progress-indeterminate arc-progress-purple" role="progressbar" aria-label="Loading" style="min-width:200px;"></div>`,
      code: `<div class="arc-progress arc-progress-indeterminate arc-progress-cyan" role="progressbar">
  <div class="arc-progress-bar"></div>
</div>`,
    },
  ],

  'cmp-table': [
    {
      title: 'Wrapper colors · compact mode',
      description: 'arc-table-wrapper arc-table-* · arc-table-compact',
      previewHtml: `<div class="arc-table-wrapper arc-table-green" style="max-width:300px;margin:0 auto;"><table class="arc-table arc-table-compact"><caption>MIN</caption><thead><tr><th class="arc-table-th">A</th><th class="arc-table-th arc-table-th-num">B</th></tr></thead><tbody><tr class="arc-table-row"><td class="arc-table-td">1</td><td class="arc-table-td arc-table-td-num">2</td></tr></tbody></table></div>`,
      code: `<div class="arc-table-wrapper arc-table-cyan">…</div>
<!-- green · yellow · red · purple -->`,
    },
    {
      title: 'Leaderboard · row styles',
      description: 'arc-table-leaderboard; arc-table-row-gold · arc-table-row-active · arc-table-row-muted',
      previewHtml: `<div class="arc-table-wrapper arc-table-cyan" style="max-width:320px;margin:0 auto;"><table class="arc-table arc-table-leaderboard"><thead><tr><th class="arc-table-th arc-table-th-rank">#</th><th class="arc-table-th">P</th><th class="arc-table-th arc-table-th-num">S</th></tr></thead><tbody><tr class="arc-table-row arc-table-row-gold"><td class="arc-table-td arc-table-td-rank"><span class="arc-table-rank-num">01</span></td><td class="arc-table-td">TOP</td><td class="arc-table-td arc-table-td-num">999</td></tr><tr class="arc-table-row arc-table-row-muted"><td class="arc-table-td arc-table-td-rank"><span class="arc-table-rank-num">02</span></td><td class="arc-table-td">YOU</td><td class="arc-table-td arc-table-td-num">10</td></tr></tbody></table></div>`,
      code: `<table class="arc-table arc-table-leaderboard">…</table>`,
    },
  ],

  'cmp-avatar': [
    {
      title: 'Sizes',
      description: 'arc-avatar-sm · (default) · lg · xl',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:flex-end;justify-content:center;">
<div class="arc-avatar arc-avatar-sm"><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">S</span></div></div>
<div class="arc-avatar"><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">M</span></div></div>
<div class="arc-avatar arc-avatar-lg"><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">L</span></div></div></div>`,
      code: `<div class="arc-avatar arc-avatar-sm">…</div>
<div class="arc-avatar arc-avatar-xl">…</div>`,
    },
    {
      title: 'Frames · status · active',
      description: 'arc-avatar-frame-neon · gold · silver · bronze; status online/offline; arc-avatar-active',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
<div class="arc-avatar arc-avatar-sm arc-avatar-frame-gold arc-avatar-active"><span class="arc-avatar-status arc-avatar-status-online"></span><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">1</span></div></div>
<div class="arc-avatar arc-avatar-sm arc-avatar-frame-silver"><span class="arc-avatar-status arc-avatar-status-offline"></span><div class="arc-avatar-inner"><span class="arc-avatar-placeholder">2</span></div></div></div>`,
      code: `<div class="arc-avatar arc-avatar-frame-bronze">…</div>`,
    },
  ],

  'cmp-display': [
    {
      title: 'Layout · color variants',
      description:
        'arc-display-score · arc-display-timer; red · green · amber · cyan. Value is typically set via setArcDisplayValue.',
      previewHtml: `<div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;align-items:flex-start;">
<div style="text-align:center;"><div class="arc-display arc-display-score arc-display-cyan" role="status" style="min-height:2.5rem;width:100%;max-width:140px;"></div><span class="arc-input-hint" style="font-size:0.7rem;">score · cyan</span></div>
<div style="text-align:center;"><div class="arc-display arc-display-timer arc-display-amber" role="status" style="min-height:2.5rem;width:100%;max-width:140px;"></div><span class="arc-input-hint" style="font-size:0.7rem;">timer · amber</span></div></div>`,
      code: `<div class="arc-display arc-display-score arc-display-cyan" role="status"></div>
<!-- empty markup → setArcDisplayValue(el, 12345, { pad: 6 }) -->`,
      lang: 'javascript',
    },
    {
      title: 'Interactive try (JS)',
      description: 'Update the value with setArcDisplayValue.',
      previewHtml: `<div class="arc-display arc-display-score arc-display-cyan" id="sc-display-cmp-display" role="status" aria-live="polite"></div>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-display-refresh-cmp-display">Refresh value</button>`,
      code: `import { setArcDisplayValue } from '@davide03memoli/arcade-ui'
setArcDisplayValue(el, 125400, { pad: 6 })`,
      lang: 'javascript',
    },
  ],

  'cmp-countdown': [
    {
      title: 'arcCountdown API',
      description: 'seconds, onTick, onEnd; stop() to cancel.',
      previewHtml: `<div class="arc-display arc-display-timer arc-display-amber" id="sc-count-cmp-countdown" role="status" aria-live="polite"></div>
<button type="button" class="arc-btn arc-btn-primary arc-btn-sm" id="sc-count-start-cmp-countdown">START 15s</button>`,
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
      title: 'Horizontal strip',
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
      title: 'Class modifiers',
      description: 'arc-sprite-bg-dark · arc-sprite-bg-panel · arc-sprite-paused · arc-sprite-pixelated · arc-sprite-loop-once · arc-sprite-grid · arc-sprite-gif',
      previewHtml: `<p class="arc-input-hint" style="text-align:center;">GIF: use arc-sprite-gif wrapper + img.arc-sprite-img. Multi-row grid: arc-sprite-grid + arcSprite.init() in JS.</p>`,
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
      title: 'Glow box / text',
      description: 'arc-glow-cyan · red · yellow · green · purple',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.85rem 1rem;justify-content:center;align-items:center;padding:0.35rem 0;font-family:var(--arc-font-pixel);font-size:clamp(0.72rem,2.4vw,0.95rem);">
<span class="arc-glow-cyan">CY</span><span class="arc-glow-red">RD</span><span class="arc-glow-yellow">YL</span><span class="arc-glow-green">GN</span><span class="arc-glow-purple">PU</span></div>`,
      code: `<span class="arc-glow-cyan">TEXT</span>`,
    },
    {
      title: 'Text effects',
      description: 'arc-text-neon · arc-text-gradient · arc-text-outline · arc-text-glitch · arc-text-shadow-long · arc-text-chroma · arc-text-pixel-shadow',
      previewHtml: `<div style="display:flex;flex-direction:column;gap:0.85rem;align-items:center;justify-content:center;padding:0.5rem 0;font-family:var(--arc-font-pixel);font-size:clamp(0.72rem,2.3vw,0.95rem);">
<span class="arc-text-neon">NEON</span><span class="arc-text-outline">OUTLINE</span><span class="arc-text-glitch" data-text="GLITCH">GLITCH</span></div>`,
      code: `<span class="arc-text-gradient">GRAD</span>
<span class="arc-text-pixel-shadow">PIX</span>`,
    },
  ],

  'cmp-glitch': [
    {
      title: 'Classes',
      description: 'arc-glitch (always) · arc-glitch-hover (on hover only)',
      previewHtml: `<div style="display:flex;flex-direction:column;align-items:center;gap:1.1rem;width:100%;padding:0.35rem 0;">
<p class="arc-glitch arc-text-neon" data-text="ALWAYS" style="font-family:var(--arc-font-pixel);font-size:clamp(0.78rem,2.5vw,1.05rem);margin:0;text-align:center;">ALWAYS</p>
<p class="arc-glitch-hover arc-text-neon" data-text="HOVER" style="font-family:var(--arc-font-pixel);font-size:clamp(0.78rem,2.5vw,1.05rem);margin:0;text-align:center;">HOVER ME</p></div>`,
      code: `<p class="arc-glitch" data-text="X">X</p>
<p class="arc-glitch-hover" data-text="Y">Y</p>`,
    },
    {
      title: 'Burst (JS)',
      description: 'bindGlitch(root) + triggerGlitch(el, ms)',
      previewHtml: `<div style="display:flex;flex-direction:column;align-items:center;gap:1rem;width:100%;">
<p class="arc-glitch arc-text-neon" data-text="PULSE" style="font-family:var(--arc-font-pixel);font-size:clamp(0.78rem,2.5vw,1.05rem);margin:0;">PULSE</p>
<button type="button" class="arc-btn arc-btn-ghost" id="sc-glitch-cmp-glitch">Trigger</button></div>`,
      code: `import { bindGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'
bindGlitch(document.body)
triggerGlitch(el, 500)`,
      lang: 'javascript',
    },
  ],

  'cmp-pixel-border': [
    {
      title: 'Weights & styles',
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
      title: 'CRT wrapper',
      description: 'Combine with arc-anim-flicker / scanlines on children if needed.',
      previewHtml: `<div class="arc-crt-screen arc-border-pixel" style="max-width:min(100%,22rem);width:100%;padding:1.15rem 1.35rem;margin:0 auto;font-family:var(--arc-font-body);font-size:1.05rem;line-height:1.5;text-align:center;">CRT-style content</div>`,
      code: `<div class="arc-crt-screen">…</div>`,
    },
  ],

  'cmp-bg-pattern': [
    {
      title: 'Pattern classes',
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
      title: 'Animation classes',
      description: 'CSS tokens: speed/intensity tuned with variables.',
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
      title: 'Built-in sound IDs',
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

a.bindArcadeSounds(document.body)`,
      lang: 'javascript',
    },
  ],

  'cmp-toast': [
    {
      title: 'Types',
      description: 'info · success · warning · error',
      previewHtml: `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;justify-content:center;">
<button type="button" class="arc-btn arc-btn-primary arc-btn-sm" id="sc-toast-i-cmp-toast">info</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-toast-ok-cmp-toast">success</button>
<button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-toast-warn-cmp-toast">warn</button>
<button type="button" class="arc-btn arc-btn-danger arc-btn-sm" id="sc-toast-err-cmp-toast">error</button></div>`,
      code: `import { arcToast } from '@davide03memoli/arcade-ui'
arcToast.show({ message: '…', type: 'info', duration: 3000 })
// type: 'success' | 'warning' | 'error'
// duration: 0 = persistent toast
// position: 'bottom-right' | 'bottom-left' | …`,
      lang: 'javascript',
    },
  ],
}

/** @param {import('../i18n/locale-store.js').Locale|string} locale */
export function getShowcaseVariants(item, locale = 'en') {
  const list = SHOWCASE_VARIANTS[item.id]
  const pack = locale === 'it' ? SHOWCASE_VARIANTS_IT : SHOWCASE_VARIANTS_EN
  const overlay = pack[item.id]
  let merged =
    list?.length && Array.isArray(overlay)
      ? list.map((entry, i) => {
          const lbl = overlay[i]
          if (!lbl) return { ...entry }
          const next = {
            ...entry,
            title: lbl.title,
            description: lbl.description ?? '',
          }
          if (Object.prototype.hasOwnProperty.call(lbl, 'previewHtml')) next.previewHtml = lbl.previewHtml
          if (Object.prototype.hasOwnProperty.call(lbl, 'code')) next.code = lbl.code
          if (Object.prototype.hasOwnProperty.call(lbl, 'lang')) next.lang = lbl.lang
          return next
        })
      : null
  if (merged?.length) {
    return merged
  }
  if (list?.length) return list.map((entry) => ({ ...entry }))
  const fallbackTitle = locale === 'it' ? 'Esempio' : 'Example'
  return [
    {
      title: fallbackTitle,
      description: '',
      previewHtml: item.previewHtml,
      code: item.code,
      lang: item.lang ?? 'html',
    },
  ]
}
