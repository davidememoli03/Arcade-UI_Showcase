import { mountCodeBlock } from '../components/code-block.js'
import {
  findShowcaseItem,
  SHOWCASE_CATEGORIES,
  SHOWCASE_INTRO,
} from '../data/showcase-catalog.js'
import { getShowcaseVariants } from '../data/showcase-variants.js'
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

function wireSectionInteractive(panel, item) {
  const { interactive, id: itemId } = item
  if (!interactive) return

  if (interactive === 'dropdown') {
    wireDropdowns(panel)
  }

  if (interactive === 'display') {
    const el = panel.querySelector(`#sc-display-${itemId}`)
    const btn = panel.querySelector(`#sc-display-refresh-${itemId}`)
    if (el) {
      setArcDisplayValue(el, 12_580, { pad: 6 })
    }
    btn?.addEventListener('click', () => {
      if (!el) return
      setArcDisplayValue(el, Math.floor(Math.random() * 999_999), { pad: 6 })
    })
  }

  if (interactive === 'glitch') {
    panel.querySelector(`#sc-glitch-${itemId}`)?.addEventListener('click', () => {
      let g = panel.querySelector(`#sc-glitch-${itemId}`)?.previousElementSibling
      if (!g?.classList?.contains('arc-glitch')) {
        g = panel.querySelector('.arc-glitch')
      }
      if (g) triggerGlitch(g, 520)
    })
  }

  if (interactive === 'countdown') {
    const el = panel.querySelector(`#sc-count-${itemId}`)
    const btn = panel.querySelector(`#sc-count-start-${itemId}`)
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
    const pairs = [
      ['sc-audio-coin', 'coin'],
      ['sc-audio-select', 'select'],
      ['sc-audio-blip', 'blip'],
      ['sc-audio-error', 'error'],
      ['sc-audio-win', 'win'],
      ['sc-audio-gameover', 'gameover'],
    ]
    for (const [base, sound] of pairs) {
      panel.querySelector(`#${base}-${itemId}`)?.addEventListener('click', () => {
        a.play(sound)
      })
    }
  }

  if (interactive === 'toast') {
    panel.querySelector(`#sc-toast-i-${itemId}`)?.addEventListener('click', () => {
      arcToast.show({ message: 'PLAYER 1 READY', type: 'info', duration: 2500 })
    })
    panel.querySelector(`#sc-toast-ok-${itemId}`)?.addEventListener('click', () => {
      arcToast.show({ message: 'STAGE CLEAR', type: 'success', duration: 2500 })
    })
    panel.querySelector(`#sc-toast-warn-${itemId}`)?.addEventListener('click', () => {
      arcToast.show({ message: 'WARNING', type: 'warning', duration: 2500 })
    })
    panel.querySelector(`#sc-toast-err-${itemId}`)?.addEventListener('click', () => {
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

  const intro = document.createElement('p')
  intro.className = 'showcase-blurb'
  intro.textContent = item.blurb
  body.appendChild(intro)

  const variants = getShowcaseVariants(item)
  for (const v of variants) {
    const block = document.createElement('section')
    block.className = 'showcase-variant'

    const vh = document.createElement('h3')
    vh.className = 'showcase-variant-title'
    vh.textContent = v.title
    block.appendChild(vh)

    if (v.description) {
      const vd = document.createElement('p')
      vd.className = 'showcase-variant-desc'
      vd.textContent = v.description
      block.appendChild(vd)
    }

    if (v.previewHtml?.trim()) {
      const prev = document.createElement('div')
      prev.className = 'showcase-preview-box arc-border-pixel'
      prev.style.padding = '1rem'
      prev.innerHTML = v.previewHtml
      block.appendChild(prev)
    }

    mountCodeBlock(block, {
      language: v.lang ?? item.lang ?? 'html',
      code: v.code,
      showCopy: false,
    })

    const copy = document.createElement('div')
    copy.className = 'showcase-variant-actions'
    const copyBtn = document.createElement('button')
    copyBtn.type = 'button'
    copyBtn.className = 'arc-btn arc-btn-ghost'
    copyBtn.textContent = 'COPY CODE'
    copyBtn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(v.code.trim())
      copyBtn.textContent = 'COPIATO'
      window.setTimeout(() => {
        copyBtn.textContent = 'COPY CODE'
      }, 1500)
    })
    copy.appendChild(copyBtn)
    block.appendChild(copy)

    body.appendChild(block)
  }

  const foot = document.createElement('div')
  foot.className = 'arc-panel-footer showcase-card-foot'
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

  wireSectionInteractive(panel, item)

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
  idx.className = `${sideLinkClass(!showcaseSlug)} showcase-drawer-indice`
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
        <p class="showcase-blurb" style="margin:0;">Ogni componente ha una pagina con <strong>tutte le varianti e opzioni</strong> raggruppate in sezioni (anteprima + codice).</p>
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
