/**
 * Showcase catalog: each entry has a unique id used in URLs `#/showcase/<id>`.
 * Canonical copy is English; Italian overlays live in `./showcase-catalog-it.js`.
 */

import {
  SHOWCASE_CATEGORY_LABEL_IT,
  SHOWCASE_INTRO_IT,
  SHOWCASE_ITEM_IT,
} from './showcase-catalog-it.js'

const SB = 'https://davidememoli03.github.io/Arcade-UI'

/** @param {import('../i18n/locale-store.js').Locale | string} locale */
export function localizeShowcaseCatalog(locale) {
  if (locale === 'it') {
    const categories = SHOWCASE_CATEGORIES.map((cat) => ({
      ...cat,
      label: SHOWCASE_CATEGORY_LABEL_IT[cat.id] ?? cat.label,
      items: cat.items.map((item) => {
        const ov = SHOWCASE_ITEM_IT[item.id]
        return ov ? { ...item, ...ov } : { ...item }
      }),
    }))
    return { intro: SHOWCASE_INTRO_IT, categories }
  }
  return { intro: SHOWCASE_INTRO, categories: SHOWCASE_CATEGORIES }
}

/** @param {string | null | undefined} slug @param {import('../i18n/locale-store.js').Locale | string} [locale] */
export function findShowcaseItem(slug, locale = 'en') {
  if (!slug) return null
  const { categories } = localizeShowcaseCatalog(locale)
  for (const cat of categories) {
    const item = cat.items.find((i) => i.id === slug)
    if (item) {
      return { item, category: cat }
    }
  }
  return null
}

export const SHOWCASE_INTRO = {
  title: 'How to use this page',
  body: 'Each component page lists variants and options (preview + code). Almost everything is HTML + arc- classes; where JS is needed you will see it in the snippets.',
}

export const SHOWCASE_CATEGORIES = [
  {
    id: 'cat-base',
    label: 'Base & layout',
    items: [
      {
        id: 'cmp-btn',
        navLabel: 'Buttons',
        title: 'Buttons',
        className: '.arc-btn',
        blurb: 'Clickable actions with arcade styling, color variants, and sizes. Add `data-arc-sound-click` for SFX (via AudioManager).',
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
        blurb: 'Compact labels (status, counts, ranks) with neon colors and an optional pulse.',
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
        title: 'Panel',
        className: '.arc-panel',
        blurb: 'HUD box with header/body/footer — the typical shell for forms and messages.',
        storybook: `${SB}/?path=/story/components-panel--default`,
        previewHtml: `
          <div class="arc-panel arc-panel-cyan" style="min-width:200px;">
            <div class="arc-panel-header">TITLE</div>
            <div class="arc-panel-body">Content</div>
            <div class="arc-panel-footer"><button type="button" class="arc-btn arc-btn-ghost">OK</button></div>
          </div>`,
        code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">TITLE</div>
  <div class="arc-panel-body">Content</div>
  <div class="arc-panel-footer">
    <button type="button" class="arc-btn arc-btn-primary">OK</button>
  </div>
</div>`,
      },
      {
        id: 'cmp-card',
        navLabel: 'Card',
        title: 'Card',
        className: '.arc-card',
        blurb: 'Character-select style card: header with avatar, stats in the body.',
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
    label: 'Forms',
    items: [
      {
        id: 'cmp-input',
        navLabel: 'Input / label',
        title: 'Text fields',
        className: '.arc-input · .arc-label',
        blurb: 'Text input with a label above and an optional hint below.',
        storybook: `${SB}/?path=/story/components-input--default`,
        previewHtml: `
          <div class="arc-input-wrapper" style="min-width:240px;">
            <label class="arc-label" for="sc-inp">NAME</label>
            <input id="sc-inp" class="arc-input" placeholder="AAA" maxlength="3" autocomplete="off">
            <span class="arc-input-hint">max 3 characters</span>
          </div>`,
        code: `<div class="arc-input-wrapper">
  <label class="arc-label" for="id">NAME</label>
  <input id="id" class="arc-input" placeholder="AAA" maxlength="3">
  <span class="arc-input-hint">hint</span>
</div>`,
      },
      {
        id: 'cmp-textarea-select',
        navLabel: 'Textarea / Select',
        title: 'Textarea & dropdown',
        className: '.arc-textarea · .arc-select',
        blurb: 'Same neon borders: `textarea` and `select` use classes parallel to `arc-input`.',
        storybook: `${SB}/?path=/story/components-input--default`,
        previewHtml: `
          <div class="arc-input-wrapper" style="min-width:220px;">
            <label class="arc-label" for="sc-ta">NOTE</label>
            <textarea id="sc-ta" class="arc-input arc-textarea" rows="2" placeholder="…"></textarea>
          </div>
          <div class="arc-input-wrapper" style="min-width:200px;">
            <label class="arc-label" for="sc-sel">LEVEL</label>
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
        title: 'Toggle switch',
        className: '.arc-toggle',
        blurb: 'Cabinet-style LED on/off: HTML + checkbox only, no JS.',
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
        title: 'Range slider',
        className: '.arc-slider',
        blurb: 'Volume/stat bar: use `data-arc-slider` + `--arc-slider-value` (percentage). With `bindSliders()` the fill updates automatically.',
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

// After sliders are in the DOM:
// import { bindSliders } from '@davide03memoli/arcade-ui'
// bindSliders(document.body)`,
      },
    ],
  },
  {
    id: 'cat-nav',
    label: 'Navigation',
    items: [
      {
        id: 'cmp-tabs',
        navLabel: 'Tabs',
        title: 'Tabs',
        className: '.arc-tabs',
        blurb: 'HUD-style tabs. Without JS: hidden radios + labels (see code). With JS: add `data-arc-tabs` on `.arc-tabs`, tabs as `<button role="tab">`; `bindTabs()` already runs after navigation on this site.',
        storybook: `${SB}/?path=/story/components-tabs--multi-panel-demo`,
        previewHtml: `
          <div class="arc-tabs arc-tabs-cyan" style="max-width:320px;">
            <input class="arc-tab-radio" type="radio" name="sc-tabs-radio" id="sc-tab-a" checked>
            <input class="arc-tab-radio" type="radio" name="sc-tabs-radio" id="sc-tab-b">
            <div class="arc-tab-list" role="tablist">
              <label class="arc-tab" for="sc-tab-a">A</label>
              <label class="arc-tab" for="sc-tab-b">B</label>
            </div>
            <div class="arc-tab-panel">Panel A</div>
            <div class="arc-tab-panel">Panel B</div>
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
        title: 'Dropdown menu',
        className: '.arc-dropdown',
        blurb: 'List under the button: toggle by setting `aria-expanded` on the trigger (see the code sample).',
        storybook: `${SB}/?path=/story/components-dropdown--default`,
        interactive: 'dropdown',
        previewHtml: `
          <div class="arc-dropdown arc-dropdown-cyan" style="min-width:220px;">
            <button type="button" class="arc-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
              <span class="arc-dropdown-value">DIFFICULTY</span>
              <span class="arc-dropdown-chevron" aria-hidden="true"></span>
            </button>
            <ul class="arc-dropdown-menu" role="listbox">
              <li class="arc-dropdown-option" role="option">EASY</li>
              <li class="arc-dropdown-option arc-dropdown-option-selected" role="option">NORMAL</li>
              <li class="arc-dropdown-option" role="option">HARD</li>
            </ul>
          </div>`,
        code: `<!-- Toggle open/closed: on trigger click flip aria-expanded ("true"/"false") -->

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
        blurb: 'Expandable sections: `<details>` + `<summary>` with accordion classes.',
        storybook: `${SB}/?path=/story/components-accordion--default`,
        previewHtml: `
          <div style="max-width:280px;">
            <details class="arc-accordion arc-accordion-cyan" open>
              <summary class="arc-accordion-summary">Round 1</summary>
              <div class="arc-accordion-content"><p>Stage details…</p></div>
            </details>
            <details class="arc-accordion arc-accordion-cyan">
              <summary class="arc-accordion-summary">Round 2</summary>
              <div class="arc-accordion-content"><p>Locked until round 1 is cleared.</p></div>
            </details>
          </div>`,
        code: `<details class="arc-accordion arc-accordion-cyan" open>
  <summary class="arc-accordion-summary">TITLE</summary>
  <div class="arc-accordion-content"><p>Text</p></div>
</details>`,
      },
    ],
  },
  {
    id: 'cat-overlay',
    label: 'Overlays',
    items: [
      {
        id: 'cmp-tooltip',
        navLabel: 'Tooltip',
        title: 'Tooltip',
        className: '[data-tooltip]',
        blurb: 'Pure CSS tooltip: put the text in `data-tooltip` on the element. Add position classes if needed.',
        storybook: `${SB}/?path=/story/components-tooltip--all-positions`,
        previewHtml: `
          <button type="button" class="arc-btn arc-btn-ghost" data-tooltip="Quick hint">HOVER ME</button>`,
        code: `<button type="button" class="arc-btn arc-btn-primary" data-tooltip="Tooltip text">
  SAVE
</button>
<!-- optional: arc-tooltip-bottom on the same element -->`,
      },
      {
        id: 'cmp-modal',
        navLabel: 'Modal',
        title: 'Modal dialog',
        className: '.arc-modal',
        blurb: 'Page overlay dialog: backdrop + `arcModal.open/close` from JS, or `data-arc-modal-open`.',
        storybook: `${SB}/?path=/story/components-modal--default`,
        previewHtml: `
          <button type="button" class="arc-btn arc-btn-primary" data-arc-modal-open="sc-showcase-modal">OPEN MODAL</button>
          <div class="arc-modal-backdrop" id="sc-showcase-modal" aria-hidden="true">
            <div class="arc-modal arc-modal-cyan" role="dialog" aria-modal="true" aria-labelledby="sc-modal-title">
              <div class="arc-modal-header">
                <span id="sc-modal-title" class="arc-modal-title">PAUSA</span>
                <button type="button" class="arc-modal-close" aria-label="Close">[X]</button>
              </div>
              <div class="arc-modal-body">Continue the game?</div>
              <div class="arc-modal-footer">
                <button type="button" class="arc-btn arc-btn-primary">YES</button>
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
    label: 'Data & state',
    items: [
      {
        id: 'cmp-progress',
        navLabel: 'Progress',
        title: 'Progress bar',
        className: '.arc-progress',
        blurb: 'Percentage with `--arc-progress` (e.g. `75%`). “Indeterminate” variant for endless loading.',
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
        navLabel: 'Table',
        title: 'Table / leaderboard',
        className: '.arc-table',
        blurb: 'Compact scoreboard-style table: colored wrapper + leader rows.',
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
        blurb: 'Square portrait with neon frame and online/offline status LED.',
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
        navLabel: '7-segment',
        title: 'Seven-segment display',
        className: '.arc-display',
        blurb: 'Cabinet-style digits. HTML can be empty: `setArcDisplayValue(el, value)` builds the digits.',
        storybook: `${SB}/?path=/story/components-display--score-counter`,
        interactive: 'display',
        previewHtml: `
          <div class="arc-display arc-display-score arc-display-cyan" id="sc-seven-seg" role="status" aria-live="polite"></div>
          <button type="button" class="arc-btn arc-btn-ghost arc-btn-sm" id="sc-seven-refresh">Refresh</button>`,
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
        blurb: 'Same display type can show a ticking countdown; at zero `onEnd` runs.',
        storybook: `${SB}/?path=/story/components-display--score-counter`,
        interactive: 'countdown',
        previewHtml: `
          <div class="arc-display arc-display-timer arc-display-amber" id="sc-count-el" role="status" aria-live="polite"></div>
          <button type="button" class="arc-btn arc-btn-primary arc-btn-sm" id="sc-count-start">START 15s</button>`,
        code: `import { arcCountdown, setArcDisplayValue } from '@davide03memoli/arcade-ui'

setArcDisplayValue(displayEl, '15', { pad: 2 })

const ctrl = arcCountdown(displayEl, {
  seconds: 15,
  onEnd: () => { /* time up */ },
})
// ctrl.stop()`,
        lang: 'javascript',
      },
      {
        id: 'cmp-sprite',
        navLabel: 'Sprite',
        title: 'Sprite sheet',
        className: '.arc-sprite',
        blurb: 'PNG sheet animation (horizontal strip). URL, frames, size, FPS via CSS vars; GIF mode with `arc-sprite-gif`.',
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
          <p class="arc-input-hint" style="max-width:220px;margin:0;">Upscaled pixels — swap in your own PNG strip.</p>`,
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
    label: 'Look & effects',
    items: [
      {
        id: 'cmp-glow-text',
        navLabel: 'Glow & text',
        title: 'Glow & neon text',
        className: '.arc-glow-* · .arc-text-*',
        blurb: 'Classes for luminous text, halos, outlines, and gradients — all token-based.',
        storybook: `${SB}/?path=/story/effects-glow--text`,
        previewHtml: `
          <span class="arc-glow-cyan" style="font-family:var(--arc-font-pixel);font-size:clamp(0.75rem,2.4vw,0.95rem);">GLOW</span>
          <span class="arc-text-neon" style="font-family:var(--arc-font-pixel);font-size:clamp(0.75rem,2.4vw,0.95rem);">NEON</span>
          <span class="arc-text-outline" style="font-family:var(--arc-font-pixel);font-size:clamp(0.75rem,2.4vw,0.95rem);">OUTLINE</span>`,
        code: `<span class="arc-glow-cyan">TEXT</span>
<span class="arc-text-neon">NEON</span>
<span class="arc-text-outline">CONTORNO</span>`,
      },
      {
        id: 'cmp-glitch',
        navLabel: 'Glitch',
        title: 'Glitch',
        className: '.arc-glitch',
        blurb: 'Text distortion: class on markup + `initGlitch()` to sync layers; `triggerGlitch()` for a burst.',
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
        navLabel: 'Pixel border',
        title: '8-bit border',
        className: '.arc-border-pixel',
        blurb: 'Stepped frame like classic 8-bit games; combine with `-glow` for neon.',
        storybook: `${SB}/?path=/story/effects-pixel-border--showcase`,
        previewHtml: `
          <div class="arc-border-pixel arc-border-pixel-glow" style="padding:1.1rem 1.25rem;font-family:var(--arc-font-body);font-size:1.05rem;">Framed content</div>`,
        code: `<div class="arc-border-pixel arc-border-pixel-glow">…</div>`,
      },
      {
        id: 'cmp-crt',
        navLabel: 'CRT',
        title: 'CRT screen',
        className: '.arc-crt-screen',
        blurb: 'Wrap content for vignette/scanlines CRT look (combine with flicker animations).',
        storybook: `${SB}/?path=/story/effects-crt--screen`,
        previewHtml: `
          <div class="arc-crt-screen arc-border-pixel" style="max-width:min(100%,22rem);width:100%;padding:1.15rem 1.35rem;font-family:var(--arc-font-body);font-size:1.05rem;line-height:1.5;text-align:center;">
            Text as inside a cabinet
          </div>`,
        code: `<div class="arc-crt-screen">… contenuto …</div>`,
      },
      {
        id: 'cmp-bg-pattern',
        navLabel: 'Backgrounds',
        title: 'Background patterns',
        className: '.arc-bg-*',
        blurb: 'Grid, dots, scanlines, noise, circuits, stars — as a container class (not on body if you need a bounded area).',
        storybook: `${SB}/?path=/story/effects-background-patterns--all-patterns`,
        previewHtml: `
          <div class="arc-bg-grid arc-border-pixel" style="min-height:5rem;padding:0.85rem 1rem;--arc-bg-opacity:0.5;display:flex;align-items:center;justify-content:center;"><span class="showcase-bg-pattern-label">Soft grid</span></div>`,
        code: `<div class="arc-bg-grid">…</div>
<div class="arc-bg-scanlines">…</div>`,
      },
      {
        id: 'cmp-anim',
        navLabel: 'Animations',
        title: 'Cabinet animations',
        className: '.arc-anim-*',
        blurb: 'Flicker, blinking cursor, insert coin, moving scanlines, TV noise, power on/off.',
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
    label: 'Built-in JavaScript',
    items: [
      {
        id: 'cmp-audio',
        navLabel: 'AudioManager',
        title: 'Arcade sounds',
        className: 'AudioManager',
        blurb: 'Synthesized SFX (no MP3 files): `play(\'coin\'|\'select\'| …)` and `bindButtons()` for data attributes on buttons.',
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
        title: 'Toast notifications',
        className: 'arcToast',
        blurb: '“GAME OVER” style messages bottom or top: `arcToast.show({ message, type, duration })`.',
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
