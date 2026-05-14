import { mountCodeBlock } from '../components/code-block.js'
import { mountPropsTable } from '../components/props-table.js'

const COMPONENTS = [
  { id: 'button', label: 'arc-btn' },
  { id: 'panel', label: 'arc-panel' },
  { id: 'input', label: 'arc-input' },
  { id: 'badge', label: 'arc-badge' },
  { id: 'toggle', label: 'arc-toggle' },
  { id: 'textarea', label: 'arc-textarea' },
  { id: 'select', label: 'arc-select' },
  { id: 'card', label: 'arc-card' },
  { id: 'accordion', label: 'arc-accordion' },
  { id: 'tooltip', label: 'data-tooltip' },
]

function escapeHtml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

/** Safe HTML for innerHTML preview + for copy/snippet display */
function buildSnippet(state) {
  if (state.component === 'button') {
    const dis = state.disabled ? ' disabled' : ''
    return `<button type="button" class="arc-btn arc-btn-${state.btnVariant}"${dis}>${escapeHtml(state.btnText)}</button>`
  }
  if (state.component === 'panel') {
    return `<div class="arc-panel arc-panel-${state.panelColor}">
  <div class="arc-panel-header">${escapeHtml(state.panelTitle)}</div>
  <div class="arc-panel-body">${escapeHtml(state.panelBody)}</div>
</div>`
  }
  if (state.component === 'input') {
    const dis = state.disabled ? ' disabled' : ''
    return `<div class="arc-input-wrapper">
  <label class="arc-label" for="playground-field">${escapeHtml(state.inputLabel)}</label>
  <input id="playground-field" class="arc-input" placeholder="${escapeHtml(state.inputPh)}"${dis}>
</div>`
  }
  if (state.component === 'badge') {
    const extra = [state.badgePulse ? 'arc-badge-pulse' : '', state.badgeOutline ? 'arc-badge-outline' : '']
      .filter(Boolean)
      .join(' ')
    const mod = extra ? ` ${extra}` : ''
    return `<span class="arc-badge arc-badge-${state.badgeColor}${mod}">${escapeHtml(state.badgeText)}</span>`
  }
  if (state.component === 'toggle') {
    const ch = state.toggleChecked ? ' checked' : ''
    return `<label class="arc-toggle">
  <input type="checkbox" class="arc-toggle-input"${ch}>
  <span class="arc-toggle-switch" aria-hidden="true"></span>
  <span class="arc-toggle-label">${escapeHtml(state.toggleLabel)}</span>
</label>`
  }
  if (state.component === 'textarea') {
    return `<div class="arc-input-wrapper">
  <label class="arc-label" for="playground-ta">${escapeHtml(state.taLabel)}</label>
  <textarea id="playground-ta" class="arc-input arc-textarea" rows="${state.taRows}" placeholder="${escapeHtml(state.taPlaceholder)}"></textarea>
</div>`
  }
  if (state.component === 'select') {
    return `<div class="arc-input-wrapper">
  <label class="arc-label" for="playground-sel">${escapeHtml(state.selLabel)}</label>
  <select id="playground-sel" class="arc-input arc-select">
    <option>${escapeHtml(state.selOpt1)}</option>
    <option>${escapeHtml(state.selOpt2)}</option>
    <option>${escapeHtml(state.selOpt3)}</option>
  </select>
</div>`
  }
  if (state.component === 'card') {
    return `<div class="arc-card arc-card-${state.cardAccent}">
  <div class="arc-card-header">
    <div class="arc-card-avatar">${escapeHtml(state.cardAvatar)}</div>
    <p class="arc-card-title">${escapeHtml(state.cardTitle)}</p>
    <p class="arc-card-subtitle">${escapeHtml(state.cardSubtitle)}</p>
  </div>
  <div class="arc-card-body">
    <div class="arc-card-meta">
      <span class="arc-card-meta-key">${escapeHtml(state.cardMetaKey)}</span>
      <span class="arc-card-meta-value">${escapeHtml(state.cardMetaVal)}</span>
    </div>
  </div>
</div>`
  }
  if (state.component === 'accordion') {
    const op = state.accOpen ? ' open' : ''
    return `<details class="arc-accordion arc-accordion-${state.accColor}"${op}>
  <summary class="arc-accordion-summary">${escapeHtml(state.accSummary)}</summary>
  <div class="arc-accordion-content"><p>${escapeHtml(state.accBody)}</p></div>
</details>`
  }
  if (state.component === 'tooltip') {
    return `<button type="button" class="arc-btn arc-btn-ghost" data-tooltip="${escapeHtml(state.tooltipText)}">${escapeHtml(state.tooltipBtn)}</button>`
  }
  return ''
}

export function renderPlayground(outlet) {
  const shell = document.createElement('div')
  shell.className = 'playground-shell'

  const head = document.createElement('header')
  head.className = 'page-head playground-page-intro'
  head.innerHTML = `
    <p class="page-kicker">Sandbox</p>
    <p class="page-title">Prova markup e varianti in tempo reale</p>
    <p class="page-desc">
      Scegli un tipo di componente, regola stato e testi, osserva l&apos;anteprima e copia il markup dalla sezione finale.
    </p>
  `

  const wrap = document.createElement('div')
  wrap.className = 'showcase-stack playground-stack'

  const state = {
    component: 'button',
    btnVariant: 'primary',
    disabled: false,
    btnText: 'CREDITS',
    panelColor: 'cyan',
    panelTitle: 'HUD',
    panelBody: 'Continue?',
    inputLabel: 'CALLSIGN',
    inputPh: 'AAA',
    badgeText: 'NEW',
    badgeColor: 'cyan',
    badgePulse: false,
    badgeOutline: false,
    toggleLabel: 'SOUND',
    toggleChecked: true,
    taLabel: 'NOTE',
    taPlaceholder: '…',
    taRows: 3,
    selLabel: 'LIVELLO',
    selOpt1: 'EASY',
    selOpt2: 'NORMAL',
    selOpt3: 'HARD',
    cardAccent: 'cyan',
    cardTitle: 'RYU',
    cardSubtitle: 'Fighter',
    cardAvatar: '🥷',
    cardMetaKey: 'PWR',
    cardMetaVal: '92',
    accColor: 'cyan',
    accSummary: 'Round 1',
    accBody: 'Dettagli stage…',
    accOpen: true,
    tooltipBtn: 'HOVER ME',
    tooltipText: 'Suggerimento rapido',
  }

  const grid = document.createElement('div')
  grid.className = 'showcase-play-grid playground-top-grid'

  const controlPanel = document.createElement('div')
  controlPanel.className = 'arc-panel arc-panel-cyan playground-panel playground-panel--config'
  controlPanel.innerHTML = `
    <div class="arc-panel-header">Controlli</div>
    <div class="arc-panel-body showcase-stack" id="pg-controls-body"></div>
    <div class="arc-panel-footer" id="pg-props-footer"></div>
  `

  const previewPanel = document.createElement('div')
  previewPanel.className = 'arc-panel arc-panel-cyan playground-panel playground-panel--preview'
  previewPanel.innerHTML = `
    <div class="arc-panel-header">Anteprima</div>
    <div class="arc-panel-body">
      <div id="pg-preview" class="showcase-preview-box"></div>
    </div>
  `

  const bodyRoot = controlPanel.querySelector('#pg-controls-body')
  const propsFooter = controlPanel.querySelector('#pg-props-footer')
  const preview = previewPanel.querySelector('#pg-preview')

  const outputSection = document.createElement('div')
  outputSection.className = 'arc-panel arc-panel-yellow playground-panel playground-panel--output'
  outputSection.innerHTML = `
    <div class="arc-panel-header">Codice HTML</div>
    <div class="arc-panel-body" id="pg-out-body"></div>
    <div class="arc-panel-footer showcase-output-foot" id="pg-out-foot"></div>
  `

  const lead = document.createElement('p')
  lead.className = 'playground-lead'
  lead.textContent = 'Seleziona un componente, poi modifica proprietà qui sotto. L\'output si aggiorna in tempo reale.'
  bodyRoot.appendChild(lead)

  const cmpSelectWrap = document.createElement('div')
  cmpSelectWrap.className = 'arc-input-wrapper'
  cmpSelectWrap.innerHTML = '<label class="arc-label" for="pg-cmp">COMPONENTE</label>'
  const cmpSelect = document.createElement('select')
  cmpSelect.id = 'pg-cmp'
  cmpSelect.className = 'arc-input arc-select'
  for (const c of COMPONENTS) {
    const o = document.createElement('option')
    o.value = c.id
    o.textContent = c.label
    cmpSelect.appendChild(o)
  }
  cmpSelectWrap.appendChild(cmpSelect)
  bodyRoot.appendChild(cmpSelectWrap)

  const dynamicMount = document.createElement('div')
  dynamicMount.className = 'showcase-stack playground-controls-dynamic'
  bodyRoot.appendChild(dynamicMount)

  const outBody = outputSection.querySelector('#pg-out-body')
  const outFoot = outputSection.querySelector('#pg-out-foot')

  function selectField(label, id, options, current, onChange) {
    const w = document.createElement('div')
    w.className = 'arc-input-wrapper'
    const lab = document.createElement('label')
    lab.className = 'arc-label'
    lab.htmlFor = id
    lab.textContent = label
    const sel = document.createElement('select')
    sel.id = id
    sel.className = 'arc-input arc-select'
    for (const o of options) {
      const opt = document.createElement('option')
      opt.value = o.v
      opt.textContent = o.t
      sel.appendChild(opt)
    }
    sel.value = current
    sel.addEventListener('change', () => onChange(sel.value))
    w.appendChild(lab)
    w.appendChild(sel)
    return w
  }

  function textField(label, value, onChange) {
    const w = document.createElement('div')
    w.className = 'arc-input-wrapper'
    const lab = document.createElement('label')
    lab.className = 'arc-label'
    lab.textContent = label
    const inp = document.createElement('input')
    inp.className = 'arc-input'
    inp.value = value
    inp.addEventListener('input', () => onChange(inp.value))
    w.appendChild(lab)
    w.appendChild(inp)
    return w
  }

  function checkField(label, checked, onChange) {
    const w = document.createElement('div')
    w.className = 'arc-input-wrapper'
    const lab = document.createElement('label')
    lab.className = 'arc-label'
    const cb = document.createElement('input')
    cb.type = 'checkbox'
    cb.checked = checked
    cb.addEventListener('change', () => onChange(cb.checked))
    lab.appendChild(cb)
    lab.append(` ${label}`)
    w.appendChild(lab)
    return w
  }

  function buildDynamicControls() {
    dynamicMount.replaceChildren()
    if (state.component === 'button') {
      dynamicMount.appendChild(selectField('Variant', 'pg-var', [
        { v: 'primary', t: 'primary' },
        { v: 'ghost', t: 'ghost' },
        { v: 'danger', t: 'danger' },
      ], state.btnVariant, (v) => {
        state.btnVariant = v
        sync()
      }))
      dynamicMount.appendChild(textField('Label', state.btnText, (v) => {
        state.btnText = v
        sync()
      }))
      dynamicMount.appendChild(checkField('Disabled', state.disabled, (v) => {
        state.disabled = v
        sync()
      }))
    }
    else if (state.component === 'badge') {
      dynamicMount.appendChild(textField('Text', state.badgeText, (v) => {
        state.badgeText = v
        sync()
      }))
      dynamicMount.appendChild(selectField('Color', 'pg-bc', [
        { v: 'cyan', t: 'cyan' },
        { v: 'red', t: 'red' },
        { v: 'yellow', t: 'yellow' },
        { v: 'green', t: 'green' },
        { v: 'purple', t: 'purple' },
      ], state.badgeColor, (v) => {
        state.badgeColor = v
        sync()
      }))
      dynamicMount.appendChild(checkField('Pulse', state.badgePulse, (v) => {
        state.badgePulse = v
        sync()
      }))
      dynamicMount.appendChild(checkField('Outline', state.badgeOutline, (v) => {
        state.badgeOutline = v
        sync()
      }))
    }
    else if (state.component === 'toggle') {
      dynamicMount.appendChild(textField('Label', state.toggleLabel, (v) => {
        state.toggleLabel = v
        sync()
      }))
      dynamicMount.appendChild(checkField('Checked', state.toggleChecked, (v) => {
        state.toggleChecked = v
        sync()
      }))
    }
    else if (state.component === 'textarea') {
      dynamicMount.appendChild(textField('Label', state.taLabel, (v) => {
        state.taLabel = v
        sync()
      }))
      dynamicMount.appendChild(textField('Placeholder', state.taPlaceholder, (v) => {
        state.taPlaceholder = v
        sync()
      }))
      dynamicMount.appendChild(selectField('Rows', 'pg-tar', [
        { v: '2', t: '2' },
        { v: '3', t: '3' },
        { v: '4', t: '4' },
        { v: '5', t: '5' },
        { v: '6', t: '6' },
      ], String(state.taRows), (v) => {
        state.taRows = Number(v)
        sync()
      }))
    }
    else if (state.component === 'select') {
      dynamicMount.appendChild(textField('Label', state.selLabel, (v) => {
        state.selLabel = v
        sync()
      }))
      dynamicMount.appendChild(textField('Option 1', state.selOpt1, (v) => {
        state.selOpt1 = v
        sync()
      }))
      dynamicMount.appendChild(textField('Option 2', state.selOpt2, (v) => {
        state.selOpt2 = v
        sync()
      }))
      dynamicMount.appendChild(textField('Option 3', state.selOpt3, (v) => {
        state.selOpt3 = v
        sync()
      }))
    }
    else if (state.component === 'card') {
      dynamicMount.appendChild(selectField('Accent', 'pg-ca', [
        { v: 'cyan', t: 'cyan' },
        { v: 'purple', t: 'purple' },
        { v: 'yellow', t: 'yellow' },
        { v: 'red', t: 'red' },
        { v: 'green', t: 'green' },
      ], state.cardAccent, (v) => {
        state.cardAccent = v
        sync()
      }))
      dynamicMount.appendChild(textField('Avatar (emoji/text)', state.cardAvatar, (v) => {
        state.cardAvatar = v
        sync()
      }))
      dynamicMount.appendChild(textField('Title', state.cardTitle, (v) => {
        state.cardTitle = v
        sync()
      }))
      dynamicMount.appendChild(textField('Subtitle', state.cardSubtitle, (v) => {
        state.cardSubtitle = v
        sync()
      }))
      dynamicMount.appendChild(textField('Meta key', state.cardMetaKey, (v) => {
        state.cardMetaKey = v
        sync()
      }))
      dynamicMount.appendChild(textField('Meta value', state.cardMetaVal, (v) => {
        state.cardMetaVal = v
        sync()
      }))
    }
    else if (state.component === 'accordion') {
      dynamicMount.appendChild(selectField('Color', 'pg-acc', [
        { v: 'cyan', t: 'cyan' },
        { v: 'red', t: 'red' },
        { v: 'yellow', t: 'yellow' },
        { v: 'green', t: 'green' },
      ], state.accColor, (v) => {
        state.accColor = v
        sync()
      }))
      dynamicMount.appendChild(textField('Summary', state.accSummary, (v) => {
        state.accSummary = v
        sync()
      }))
      dynamicMount.appendChild(textField('Body', state.accBody, (v) => {
        state.accBody = v
        sync()
      }))
      dynamicMount.appendChild(checkField('Open by default', state.accOpen, (v) => {
        state.accOpen = v
        sync()
      }))
    }
    else if (state.component === 'tooltip') {
      dynamicMount.appendChild(textField('Button label', state.tooltipBtn, (v) => {
        state.tooltipBtn = v
        sync()
      }))
      dynamicMount.appendChild(textField('Tooltip text', state.tooltipText, (v) => {
        state.tooltipText = v
        sync()
      }))
    }
    else if (state.component === 'panel') {
      dynamicMount.appendChild(selectField('Color', 'pg-pc', [
        { v: 'cyan', t: 'cyan' },
        { v: 'purple', t: 'magenta / purple' },
        { v: 'yellow', t: 'yellow' },
      ], state.panelColor, (v) => {
        state.panelColor = v
        sync()
      }))
      dynamicMount.appendChild(textField('Header', state.panelTitle, (v) => {
        state.panelTitle = v
        sync()
      }))
      dynamicMount.appendChild(textField('Body', state.panelBody, (v) => {
        state.panelBody = v
        sync()
      }))
    }
    else if (state.component === 'input') {
      dynamicMount.appendChild(textField('Label text', state.inputLabel, (v) => {
        state.inputLabel = v
        sync()
      }))
      dynamicMount.appendChild(textField('Placeholder', state.inputPh, (v) => {
        state.inputPh = v
        sync()
      }))
      dynamicMount.appendChild(checkField('Disabled', state.disabled, (v) => {
        state.disabled = v
        sync()
      }))
    }
  }

  function sync() {
    const html = buildSnippet(state)
    preview.innerHTML = html

    propsFooter.replaceChildren()
    const variantOrColor = (() => {
      if (state.component === 'button') return state.btnVariant
      if (state.component === 'panel') return state.panelColor
      if (state.component === 'badge') return state.badgeColor
      if (state.component === 'card') return state.cardAccent
      if (state.component === 'accordion') return state.accColor
      return '—'
    })()
    const disabledVal = (() => {
      if (state.component === 'button' || state.component === 'input') return String(state.disabled)
      if (state.component === 'toggle') return String(state.toggleChecked)
      if (state.component === 'accordion') return String(state.accOpen)
      return '—'
    })()
    mountPropsTable(propsFooter, [
      { name: 'componente', value: state.component },
      { name: 'variante / colore', value: variantOrColor },
      { name: 'flag', value: disabledVal },
    ])

    outBody.replaceChildren()
    mountCodeBlock(outBody, {
      language: 'html',
      code: html,
      showCopy: false,
    })

    outFoot.replaceChildren()
    const copy = document.createElement('button')
    copy.type = 'button'
    copy.className = 'arc-btn arc-btn-primary playground-copy-html'
    copy.textContent = 'COPIA MARKUP'
    copy.addEventListener('click', async () => {
      await navigator.clipboard.writeText(html)
      copy.textContent = 'COPIATO'
      window.setTimeout(() => {
        copy.textContent = 'COPIA MARKUP'
      }, 1500)
    })
    outFoot.appendChild(copy)
  }

  cmpSelect.addEventListener('change', () => {
    state.component = cmpSelect.value
    if (state.component === 'button' || state.component === 'input') {
      state.disabled = false
    }
    buildDynamicControls()
    sync()
  })

  grid.appendChild(controlPanel)
  grid.appendChild(previewPanel)
  wrap.appendChild(grid)
  wrap.appendChild(outputSection)

  shell.appendChild(head)
  shell.appendChild(wrap)
  outlet.appendChild(shell)
  buildDynamicControls()
  sync()
}
