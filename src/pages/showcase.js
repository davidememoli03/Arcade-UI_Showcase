import { mountCodeBlock } from '../components/code-block.js'
import { AudioManager, triggerGlitch } from '@davide03memoli/arcade-ui'

const SECTIONS = [
  { id: 'cmp-btn', label: 'Buttons' },
  { id: 'cmp-panel', label: 'Panels' },
  { id: 'cmp-input', label: 'Input' },
  { id: 'cmp-glitch', label: 'Glitch' },
  { id: 'cmp-audio', label: 'AudioManager' },
]

export function renderShowcase(outlet) {
  const shell = document.createElement('div')
  shell.className = 'showcase-two-col showcase-two-col--sidebar'

  const side = document.createElement('aside')
  side.className = 'showcase-sidebar'
  for (const s of SECTIONS) {
    const b = document.createElement('button')
    b.type = 'button'
    b.className = 'arc-btn arc-btn-ghost'
    b.textContent = s.label
    b.addEventListener('click', () => {
      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    side.appendChild(b)
  }

  const main = document.createElement('div')
  main.className = 'showcase-stack'

  function card({ id, title, previewHtml, code, lang = 'html' }) {
    const panel = document.createElement('section')
    panel.className = 'arc-panel arc-panel-cyan'
    panel.id = id
    panel.innerHTML = `
      <div class="arc-panel-header">${title}</div>
      <div class="arc-panel-body showcase-stack"></div>
      <div class="arc-panel-footer"></div>
    `
    const body = panel.querySelector('.arc-panel-body')
    const foot = panel.querySelector('.arc-panel-footer')
    const prev = document.createElement('div')
    prev.className = 'showcase-preview-box arc-border-pixel'
    prev.style.padding = '1rem'
    prev.innerHTML = previewHtml
    body.appendChild(prev)
    mountCodeBlock(body, { language: lang, code, showCopy: false })
    const copy = document.createElement('button')
    copy.type = 'button'
    copy.className = 'arc-btn arc-btn-ghost'
    copy.textContent = 'COPY CODE'
    copy.addEventListener('click', async () => {
      await navigator.clipboard.writeText(code)
      copy.textContent = 'COPIED'
      window.setTimeout(() => {
        copy.textContent = 'COPY CODE'
      }, 1500)
    })
    foot.appendChild(copy)
    return panel
  }

  main.appendChild(
    card({
      id: 'cmp-btn',
      title: 'arc-btn',
      previewHtml: `
        <button type="button" class="arc-btn arc-btn-primary">PRIMARY</button>
        <button type="button" class="arc-btn arc-btn-ghost">GHOST</button>
        <button type="button" class="arc-btn arc-btn-danger">DANGER / ACCENT</button>
        <button type="button" class="arc-btn arc-btn-primary" disabled>DISABLED</button>
      `,
      code: `<button type="button" class="arc-btn arc-btn-primary">PRIMARY</button>
<button type="button" class="arc-btn arc-btn-ghost">GHOST</button>
<button type="button" class="arc-btn arc-btn-danger">DANGER / ACCENT</button>
<button type="button" class="arc-btn arc-btn-primary" disabled>DISABLED</button>`,
    }),
  )

  main.appendChild(
    card({
      id: 'cmp-panel',
      title: 'arc-panel',
      previewHtml: `
        <div class="arc-panel arc-panel-cyan" style="min-width:200px;">
          <div class="arc-panel-header">CYAN</div>
          <div class="arc-panel-body">Panel body</div>
        </div>
        <div class="arc-panel arc-panel-purple" style="min-width:200px;">
          <div class="arc-panel-header">MAGENTA / PURPLE</div>
          <div class="arc-panel-body">Neon magenta lane</div>
        </div>
        <div class="arc-panel arc-panel-yellow" style="min-width:200px;">
          <div class="arc-panel-header">YELLOW</div>
          <div class="arc-panel-body">High score lane</div>
        </div>
      `,
      code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">TITLE</div>
  <div class="arc-panel-body">Content</div>
</div>
<div class="arc-panel arc-panel-purple">...</div>
<div class="arc-panel arc-panel-yellow">...</div>`,
    }),
  )

  main.appendChild(
    card({
      id: 'cmp-input',
      title: 'arc-input',
      previewHtml: `
        <div class="arc-input-wrapper" style="min-width:240px;">
          <label class="arc-label" for="demo-inp">CALLSIGN</label>
          <input id="demo-inp" class="arc-input" placeholder="AAA" maxlength="3" autocomplete="off">
        </div>
      `,
      code: `<div class="arc-input-wrapper">
  <label class="arc-label" for="id">CALLSIGN</label>
  <input id="id" class="arc-input" placeholder="AAA">
</div>`,
    }),
  )

  const glitchPanel = card({
    id: 'cmp-glitch',
    title: 'Glitch (.arc-glitch + JS)',
    previewHtml: `
      <p class="arc-glitch arc-text-neon" data-text="HIGH SCORE" style="font-family:var(--arc-font-pixel);font-size:1rem;margin:0;">HIGH SCORE</p>
      <button type="button" class="arc-btn arc-btn-ghost" id="showcase-glitch-run">triggerGlitch()</button>
    `,
    code: `import { initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'

initGlitch(document.body)

<p class="arc-glitch" data-text="HIGH SCORE">HIGH SCORE</p>

triggerGlitch(element, 450)`,
    lang: 'javascript',
  })
  main.appendChild(glitchPanel)

  const audioPanel = card({
    id: 'cmp-audio',
    title: 'AudioManager',
    previewHtml: `
      <button type="button" class="arc-btn arc-btn-primary" id="showcase-audio-coin">play('coin')</button>
      <button type="button" class="arc-btn arc-btn-ghost" id="showcase-audio-blip">play('blip')</button>
    `,
    code: `import { AudioManager } from '@davide03memoli/arcade-ui'

const audio = AudioManager.getInstance()
audio.play('coin')
audio.bindButtons(document.body)`,
    lang: 'javascript',
  })
  main.appendChild(audioPanel)

  glitchPanel.querySelector('#showcase-glitch-run')?.addEventListener('click', () => {
    const g = glitchPanel.querySelector('.arc-glitch')
    if (g) triggerGlitch(g, 500)
  })

  const a = AudioManager.getInstance()
  audioPanel.querySelector('#showcase-audio-coin')?.addEventListener('click', () => {
    a.play('coin')
  })
  audioPanel.querySelector('#showcase-audio-blip')?.addEventListener('click', () => {
    a.play('blip')
  })

  shell.appendChild(side)
  shell.appendChild(main)
  outlet.appendChild(shell)
}
