import { mountCodeBlock } from '../components/code-block.js'
import {
  findShowcaseItem,
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

function sideLinkClass(active) {
  const base = 'arc-btn arc-btn-ghost showcase-side-link'
  return active ? `${base} showcase-side-link-active` : base
}

function buildDetailCard(item) {
  const panel = document.createElement('article')
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

  if (item.interactive) {
    wireSectionInteractive(panel, item.interactive)
  }

  return panel
}

export function renderShowcase(outlet, { navigateTo, showcaseSlug }) {
  const layout = document.createElement('div')
  layout.className = 'showcase-layout'

  const drawer = document.createElement('aside')
  drawer.className = 'showcase-drawer'
  drawer.setAttribute('aria-label', 'Componenti')

  const idx = document.createElement('a')
  idx.href = '#/showcase'
  idx.className = sideLinkClass(!showcaseSlug)
  idx.textContent = 'INDICE'
  drawer.appendChild(idx)

  for (const cat of SHOWCASE_CATEGORIES) {
    const catEl = document.createElement('div')
    catEl.className = 'showcase-side-group'
    const lab = document.createElement('div')
    lab.className = 'showcase-side-cat'
    lab.textContent = cat.label
    catEl.appendChild(lab)
    for (const item of cat.items) {
      const a = document.createElement('a')
      a.href = `#/showcase/${item.id}`
      a.className = sideLinkClass(showcaseSlug === item.id)
      a.textContent = item.navLabel
      catEl.appendChild(a)
    }
    drawer.appendChild(catEl)
  }

  const detail = document.createElement('div')
  detail.className = 'showcase-detail'

  if (!showcaseSlug) {
    const intro = document.createElement('div')
    intro.className = 'arc-panel arc-panel-yellow'
    intro.innerHTML = `
      <div class="arc-panel-header">${SHOWCASE_INTRO.title}</div>
      <div class="arc-panel-body">
        <p class="showcase-blurb" style="margin:0 0 1rem;">${SHOWCASE_INTRO.body}</p>
        <p class="showcase-blurb" style="margin:0;">Scegli un componente dal menu a sinistra: ogni pagina mostra solo quell’elemento con anteprima e codice.</p>
      </div>
    `
    detail.appendChild(intro)

    for (const cat of SHOWCASE_CATEGORIES) {
      const block = document.createElement('div')
      block.className = 'showcase-index-block'
      const h = document.createElement('div')
      h.className = 'showcase-index-cat-title'
      h.textContent = cat.label
      block.appendChild(h)
      const row = document.createElement('div')
      row.className = 'showcase-index-links'
      for (const item of cat.items) {
        const link = document.createElement('a')
        link.href = `#/showcase/${item.id}`
        link.className = 'arc-btn arc-btn-ghost'
        link.textContent = item.navLabel
        row.appendChild(link)
      }
      block.appendChild(row)
      detail.appendChild(block)
    }
  }
  else {
    const found = findShowcaseItem(showcaseSlug)
    if (!found) {
      const err = document.createElement('div')
      err.className = 'arc-panel arc-panel-red'
      err.innerHTML = `
        <div class="arc-panel-header">NON TROVATO</div>
        <div class="arc-panel-body">
          <p class="showcase-blurb">Nessun componente con id <code class="arc-label" style="display:inline;padding:0 .25rem;">${showcaseSlug}</code>.</p>
        </div>
        <div class="arc-panel-footer">
          <button type="button" class="arc-btn arc-btn-primary" id="sc-badslug-back">TORNA ALL’INDICE</button>
        </div>
      `
      err.querySelector('#sc-badslug-back')?.addEventListener('click', () => {
        navigateTo('/showcase')
      })
      detail.appendChild(err)
    }
    else {
      const navRow = document.createElement('div')
      navRow.className = 'showcase-breadcrumb'
      navRow.innerHTML = `<span class="showcase-bc-part">${found.category.label}</span>
        <span class="showcase-bc-sep">/</span>
        <span class="showcase-bc-part">${found.item.title}</span>`
      detail.appendChild(navRow)
      detail.appendChild(buildDetailCard(found.item))
    }
  }

  layout.appendChild(drawer)
  layout.appendChild(detail)
  outlet.appendChild(layout)
}
