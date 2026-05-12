import { mountCodeBlock } from '../components/code-block.js'
import { mountPropsTable } from '../components/props-table.js'

const COMPONENTS = [
  { id: 'button', label: 'arc-btn' },
  { id: 'panel', label: 'arc-panel' },
  { id: 'input', label: 'arc-input' },
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
  const dis = state.disabled ? ' disabled' : ''
  return `<div class="arc-input-wrapper">
  <label class="arc-label" for="playground-field">${escapeHtml(state.inputLabel)}</label>
  <input id="playground-field" class="arc-input" placeholder="${escapeHtml(state.inputPh)}"${dis}>
</div>`
}

export function renderPlayground(outlet) {
  const wrap = document.createElement('div')
  wrap.className = 'showcase-stack'

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
  }

  const grid = document.createElement('div')
  grid.className = 'showcase-play-grid'

  const controlPanel = document.createElement('div')
  controlPanel.className = 'arc-panel arc-panel-cyan'
  controlPanel.innerHTML = `
    <div class="arc-panel-header">CONFIG</div>
    <div class="arc-panel-body showcase-stack" id="pg-controls-body"></div>
    <div class="arc-panel-footer" id="pg-props-footer"></div>
  `

  const previewPanel = document.createElement('div')
  previewPanel.className = 'arc-panel arc-panel-purple'
  previewPanel.innerHTML = `
    <div class="arc-panel-header">PREVIEW</div>
    <div class="arc-panel-body">
      <div id="pg-preview" class="showcase-preview-box"></div>
    </div>
  `

  const bodyRoot = controlPanel.querySelector('#pg-controls-body')
  const propsFooter = controlPanel.querySelector('#pg-props-footer')
  const preview = previewPanel.querySelector('#pg-preview')

  const outputSection = document.createElement('div')
  outputSection.className = 'arc-panel arc-panel-yellow'
  outputSection.innerHTML = `
    <div class="arc-panel-header">GENERATED HTML</div>
    <div class="arc-panel-body" id="pg-out-body"></div>
    <div class="arc-panel-footer" id="pg-out-foot"></div>
  `

  const cmpSelectWrap = document.createElement('div')
  cmpSelectWrap.className = 'arc-input-wrapper'
  cmpSelectWrap.innerHTML = '<label class="arc-label" for="pg-cmp">COMPONENT</label>'
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
  dynamicMount.className = 'showcase-stack'
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
    else {
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
    const variantOrColor = state.component === 'button'
      ? state.btnVariant
      : state.component === 'panel'
        ? state.panelColor
        : '—'
    mountPropsTable(propsFooter, [
      { name: 'component', value: state.component },
      { name: 'variant / color', value: variantOrColor },
      { name: 'disabled', value: state.component === 'panel' ? '—' : String(state.disabled) },
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
    copy.className = 'arc-btn arc-btn-ghost'
    copy.textContent = 'COPY HTML'
    copy.addEventListener('click', async () => {
      await navigator.clipboard.writeText(html)
      copy.textContent = 'COPIED'
      window.setTimeout(() => {
        copy.textContent = 'COPY HTML'
      }, 1500)
    })
    outFoot.appendChild(copy)
  }

  cmpSelect.addEventListener('change', () => {
    state.component = cmpSelect.value
    state.disabled = false
    buildDynamicControls()
    sync()
  })

  grid.appendChild(controlPanel)
  grid.appendChild(previewPanel)
  wrap.appendChild(grid)
  wrap.appendChild(outputSection)

  outlet.appendChild(wrap)
  buildDynamicControls()
  sync()
}
