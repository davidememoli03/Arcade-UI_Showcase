import { mountCodeBlock } from '../components/code-block.js'
import { AudioManager, initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'
import { getLocale } from '../i18n/locale-store.js'
import { getTutorialBlueprint } from '../i18n/tutorial-steps.js'
import { tf, t } from '../i18n/messages.js'

function mountNav(footEl, index, { goPrev, goNext, isLast }) {
  footEl.replaceChildren()

  footEl.className = 'arc-panel-footer tutorial-foot'
  const loc = getLocale()

  if (index > 0) {
    const back = document.createElement('button')
    back.type = 'button'
    back.className = 'arc-btn arc-btn-ghost tutorial-foot-back'
    back.textContent = t(loc, 'tutorialPrev')
    back.addEventListener('click', goPrev)
    footEl.appendChild(back)
  }

  const next = document.createElement('button')
  next.type = 'button'
  next.className = 'arc-btn arc-btn-primary tutorial-foot-next'
  next.textContent = isLast ? t(loc, 'tutorialRestart') : t(loc, 'tutorialNext')
  next.addEventListener('click', goNext)
  footEl.appendChild(next)
}

function buildProgress(el, index, total) {
  const loc = getLocale()
  const pct = ((index + 1) / total) * 100
  el.className = 'tutorial-progress'
  el.innerHTML = `
    <div class="tutorial-progress-meta">
      <span><strong>${t(loc, 'tutorialGuideBadge')}</strong> Arcade UI</span>
      <span>${tf(loc, 'tutorialProgressFmt', { step: index + 1, total })}</span>
    </div>
    <div class="tutorial-progress-track">
      <div class="tutorial-progress-fill" style="width:${pct}%"></div>
    </div>`
}

function renderStepBody(stepIndex, /** @type HTMLElement */ body) {
  body.replaceChildren()
  const blueprint = getTutorialBlueprint(getLocale())
  const step = blueprint[stepIndex]

  const frag = document.createDocumentFragment()

  for (const p of step.paragraphs) {
    const wrap = document.createElement('div')
    wrap.innerHTML = p.html
    frag.appendChild(wrap.firstElementChild ?? wrap)
  }

  for (const c of step.codes) {
    const mount = document.createElement('div')
    frag.appendChild(mount)
    mountCodeBlock(mount, { language: c.lang, code: c.code })
  }

  const afterAr = step.afterFirstCodeParagraphs
  if (afterAr?.length) {
    for (const blk of afterAr) {
      if ('plain' in blk && blk.plain) {
        const pEl = frag.appendChild(document.createElement('p'))
        pEl.textContent = blk.plain
      }
      else if ('lang' in blk && 'code' in blk) {
        const mount = document.createElement('div')
        frag.appendChild(mount)
        mountCodeBlock(mount, { language: blk.lang, code: blk.code })
      }
    }
  }

  if ('demoInnerHtml' in step && step.demoInnerHtml && 'demoButtonId' in step) {
    const demo = document.createElement('div')
    demo.className = 'showcase-preview-box'
    demo.innerHTML = step.demoInnerHtml
    frag.appendChild(demo)
    demo.querySelector(`#${step.demoButtonId}`)?.addEventListener('click', () => {
      AudioManager.getInstance().play('select')
    })
  }

  if ('demoGlitchWrapHtml' in step && step.demoGlitchWrapHtml && step.demoGlitchBurstId) {
    const demo = document.createElement('div')
    demo.className = 'showcase-preview-box'
    demo.innerHTML = step.demoGlitchWrapHtml.trim()
    frag.appendChild(demo)
    initGlitch(demo)
    demo.querySelector(`#${step.demoGlitchBurstId}`)?.addEventListener('click', () => {
      const el = demo.querySelector('.arc-glitch')
      if (el) triggerGlitch(el, 550)
    })
  }

  body.appendChild(frag)
}

export function renderTutorial(outlet) {
  const wrap = document.createElement('div')
  wrap.className = 'page-flow tutorial-page'

  const mast = document.createElement('header')
  mast.className = 'page-head tutorial-page-intro'

  const progress = document.createElement('div')

  let index = 0

  function mountMastTitle() {
    const loc = getLocale()
    mast.innerHTML = `
    <p class="page-kicker">${t(loc, 'tutorialKicker')}</p>
    <p class="page-title">${t(loc, 'tutorialTitle')}</p>
    <p class="page-desc">${t(loc, 'tutorialDesc')}</p>
  `
  }

  mountMastTitle()

  function mountStep(options = {}) {
    const { scrollIntoView = false } = options
    const blueprint = getTutorialBlueprint(getLocale())
    const total = blueprint.length

    mountMastTitle()
    buildProgress(progress, index, total)

    const step = blueprint[index]
    const panel = document.createElement('div')
    panel.className = 'arc-panel arc-panel-cyan tutorial-step-panel'
    panel.innerHTML = `
      <div class="arc-panel-header"></div>
      <div class="arc-panel-body"></div>
      <div class="arc-panel-footer"></div>
    `
    const header = panel.querySelector('.arc-panel-header')
    const body = panel.querySelector('.arc-panel-body')
    const foot = panel.querySelector('.arc-panel-footer')

    if (header) header.textContent = step.header

    renderStepBody(index, body)

    body.classList.add('showcase-stack', 'tutorial-panel-body-flow')

    const isLast = index === total - 1
    mountNav(foot, index, {
      goPrev: () => {
        if (index > 0) {
          index -= 1
          mountStep({ scrollIntoView: true })
        }
      },
      goNext: () => {
        if (isLast) index = 0
        else index += 1
        mountStep({ scrollIntoView: true })
      },
      isLast,
    })

    wrap.replaceChildren(mast, progress, panel)

    if (scrollIntoView) {
      requestAnimationFrame(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }

  outlet.appendChild(wrap)
  mountStep({ scrollIntoView: false })
}
