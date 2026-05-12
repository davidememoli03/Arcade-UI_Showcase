import { mountCodeBlock } from '../components/code-block.js'
import {
  SHOWCASE_CATEGORIES,
  SHOWCASE_INTRO,
} from '../data/showcase-catalog.js'
import {
  arcToast,
  arcCountdown,
  AudioManager,
  setArcDisplayValue,
  triggerGlitch,
} from '@davide03memoli/arcade-ui'

function wireDropdowns(root) {
  root.querySelectorAll('.arc-dropdown-trigger').forEach((trigger) => {
    if (trigger.dataset.scWired === '1') return
    trigger.dataset.scWired = '1'
    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') === 'true'
      trigger.setAttribute('aria-expanded', String(!open))
    })
  })
}

function wireSectionInteractive(panel, interactive) {
  if (interactive === 'dropdown') {
    wireDropdowns(panel)
  }
  if (interactive === 'display') {
    const el = panel.querySelector('#sc-seven-seg')
    const btn = panel.querySelector('#sc-seven-refresh')
    if (el) {
      setArcDisplayValue(el, 12_580, { pad: 6 })
    }
    btn?.addEventListener('click', () => {
      if (!el) return
      setArcDisplayValue(el, Math.floor(Math.random() * 999_999), { pad: 6 })
    })
  }
  if (interactive === 'glitch') {
    panel.querySelector('#sc-glitch-btn')?.addEventListener('click', () => {
      const g = panel.querySelector('.arc-glitch')
      if (g) triggerGlitch(g, 520)
    })
  }
  if (interactive === 'countdown') {
    const el = panel.querySelector('#sc-count-el')
    const btn = panel.querySelector('#sc-count-start')
    let ctrl = null
    btn?.addEventListener('click', () => {
      ctrl?.stop?.()
      if (!el) return
      setArcDisplayValue(el, '15', { pad: 2 })
      ctrl = arcCountdown(el, {
        seconds: 15,
        onEnd: () => {
          ctrl = null
        },
      })
    })
  }
  if (interactive === 'audio') {
    const a = AudioManager.getInstance()
    panel.querySelector('#sc-audio-coin')?.addEventListener('click', () => {
      a.play('coin')
    })
    panel.querySelector('#sc-audio-select')?.addEventListener('click', () => {
      a.play('select')
    })
  }
  if (interactive === 'toast') {
    panel.querySelector('#sc-toast-i')?.addEventListener('click', () => {
      arcToast.show({ message: 'PLAYER 1 READY', type: 'info', duration: 2500 })
    })
    panel.querySelector('#sc-toast-ok')?.addEventListener('click', () => {
      arcToast.show({ message: 'STAGE CLEAR', type: 'success', duration: 2500 })
    })
    panel.querySelector('#sc-toast-err')?.addEventListener('click', () => {
      arcToast.show({ message: 'GAME OVER', type: 'error', duration: 2500 })
    })
  }
}

export function renderShowcase(outlet) {
  const shell = document.createElement('div')
  shell.className = 'showcase-two-col showcase-two-col--sidebar'

  const side = document.createElement('aside')
  side.className = 'showcase-sidebar'
  side.setAttribute('aria-label', 'Sezioni componenti')

  for (const cat of SHOWCASE_CATEGORIES) {
    const catEl = document.createElement('div')
    catEl.className = 'showcase-side-group'
    const lab = document.createElement('div')
    lab.className = 'showcase-side-cat'
    lab.textContent = cat.label
    catEl.appendChild(lab)
    for (const item of cat.items) {
      const b = document.createElement('button')
      b.type = 'button'
      b.className = 'arc-btn arc-btn-ghost'
      b.textContent = item.navLabel
      b.addEventListener('click', () => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      catEl.appendChild(b)
    }
    side.appendChild(catEl)
  }

  const main = document.createElement('div')
  main.className = 'showcase-stack'

  const intro = document.createElement('div')
  intro.className = 'arc-panel arc-panel-yellow'
  intro.innerHTML = `
    <div class="arc-panel-header">${SHOWCASE_INTRO.title}</div>
    <div class="arc-panel-body">
      <p class="showcase-blurb" style="margin:0 0 .75rem;">${SHOWCASE_INTRO.body}</p>
    </div>
  `
  main.appendChild(intro)

  function card(item) {
    const panel = document.createElement('section')
    panel.className = 'arc-panel arc-panel-cyan'
    panel.id = item.id
    const head = document.createElement('div')
    head.className = 'arc-panel-header showcase-card-header'
    head.innerHTML = `<span>${item.title}</span><span class="showcase-class-tag">${item.className}</span>`
    const body = document.createElement('div')
    body.className = 'arc-panel-body showcase-stack'
    const foot = document.createElement('div')
    foot.className = 'arc-panel-footer showcase-card-foot'

    const blurb = document.createElement('p')
    blurb.className = 'showcase-blurb'
    blurb.textContent = item.blurb
    body.appendChild(blurb)

    const prev = document.createElement('div')
    prev.className = 'showcase-preview-box arc-border-pixel'
    prev.style.padding = '1rem'
    prev.innerHTML = item.previewHtml
    body.appendChild(prev)

    mountCodeBlock(body, {
      language: item.lang ?? 'html',
      code: item.code,
      showCopy: false,
    })

    const copy = document.createElement('button')
    copy.type = 'button'
    copy.className = 'arc-btn arc-btn-ghost'
    copy.textContent = 'COPY CODE'
    copy.addEventListener('click', async () => {
      await navigator.clipboard.writeText(item.code.trim())
      copy.textContent = 'COPIATO'
      window.setTimeout(() => {
        copy.textContent = 'COPY CODE'
      }, 1500)
    })
    foot.appendChild(copy)

    if (item.storybook) {
      const sb = document.createElement('a')
      sb.href = item.storybook
      sb.target = '_blank'
      sb.rel = 'noopener noreferrer'
      sb.className = 'arc-btn arc-btn-ghost'
      sb.textContent = 'STORYBOOK'
      foot.appendChild(sb)
    }

    panel.appendChild(head)
    panel.appendChild(body)
    panel.appendChild(foot)
    main.appendChild(panel)

    if (item.interactive) {
      wireSectionInteractive(panel, item.interactive)
    }
  }

  for (const cat of SHOWCASE_CATEGORIES) {
    for (const item of cat.items) {
      card(item)
    }
  }

  shell.appendChild(side)
  shell.appendChild(main)
  outlet.appendChild(shell)
}
