import { mountCodeBlock } from '../components/code-block.js'
import { AudioManager, initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'

function mountNav(footEl, index, { goPrev, goNext, isLast }) {
  footEl.replaceChildren()

  footEl.className = 'arc-panel-footer tutorial-foot'

  if (index > 0) {
    const back = document.createElement('button')
    back.type = 'button'
    back.className = 'arc-btn arc-btn-ghost tutorial-foot-back'
    back.textContent = 'PASSO PRECEDENTE'
    back.addEventListener('click', goPrev)
    footEl.appendChild(back)
  }

  const next = document.createElement('button')
  next.type = 'button'
  next.className = 'arc-btn arc-btn-primary tutorial-foot-next'
  next.textContent = isLast ? 'RICOMINCIA DA CAPO' : 'PASSO SUCCESSIVO'
  next.addEventListener('click', goNext)
  footEl.appendChild(next)
}

function buildProgress(el, index, total) {
  const pct = ((index + 1) / total) * 100
  el.className = 'tutorial-progress'
  el.innerHTML = `
    <div class="tutorial-progress-meta">
      <span><strong>GUIDA</strong> Arcade UI</span>
      <span>Passo ${index + 1} / ${total}</span>
    </div>
    <div class="tutorial-progress-track">
      <div class="tutorial-progress-fill" style="width:${pct}%"></div>
    </div>`
}

const STEPS = [
  {
    header: 'STEP 1 // INSTALLAZIONE',
    render(body) {
      body.innerHTML = `
        <p>Installazione con npm (consigliata) oppure CDN in qualsiasi pagina HTML.</p>
      `
      mountCodeBlock(body, {
        language: 'bash',
        code: 'npm install @davide03memoli/arcade-ui',
      })
      mountCodeBlock(body, {
        language: 'html',
        code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui/dist/arcade-ui.min.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui/dist/arcade-ui.es.js"></script>`,
      })
    },
  },
  {
    header: 'STEP 2 // IMPORT CSS',
    render(body) {
      body.innerHTML = `<p>Con un bundler importa gli stili una sola volta nel file di ingresso.</p>`
      mountCodeBlock(body, {
        language: 'javascript',
        code: "import '@davide03memoli/arcade-ui/dist/arcade-ui.css'",
      })
      body.appendChild(document.createElement('p')).textContent =
        'Senza bundler usa un normale tag link verso node_modules o l\'URL CDN del passo 1.'
      mountCodeBlock(body, {
        language: 'html',
        code: '<link rel="stylesheet" href="./node_modules/@davide03memoli/arcade-ui/dist/arcade-ui.css">',
      })
    },
  },
  {
    header: 'STEP 3 // PRIMO COMPONENTE',
    render(body) {
      body.innerHTML = `<p>Pannelli e pulsanti sono solo markup + classi <code class="arc-label" style="display:inline;padding:.1rem .3rem;font-size:.9em;">arc-*</code>.</p>`
      mountCodeBlock(body, {
        language: 'html',
        code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">READY</div>
  <div class="arc-panel-body">
    <button type="button" class="arc-btn arc-btn-primary">START GAME</button>
  </div>
</div>`,
      })
    },
  },
  {
    header: 'STEP 4 // AUDIOMANAGER',
    render(body) {
      body.innerHTML = `<p>Gli SFX sono sintetizzati in Web Audio: nessun file audio.</p>`
      mountCodeBlock(body, {
        language: 'javascript',
        code: `import { AudioManager } from '@davide03memoli/arcade-ui'

const audio = AudioManager.getInstance()
document.querySelector('#go').addEventListener('click', () => {
  audio.play('select')
})
audio.bindButtons(document.body)`,
      })
      const demo = document.createElement('div')
      demo.className = 'showcase-preview-box'
      demo.innerHTML = `<button type="button" class="arc-btn arc-btn-primary" id="tut-audio">PLAY SELECT</button>`
      body.appendChild(demo)
      body.querySelector('#tut-audio')?.addEventListener('click', () => {
        AudioManager.getInstance().play('select')
      })
    },
  },
  {
    header: 'STEP 5 // EFFETTO GLITCH',
    render(body) {
      body.innerHTML = `
        <p>La classe <strong>.arc-glitch</strong>, <strong>initGlitch()</strong> e (opzionale) <strong>triggerGlitch()</strong> usano l'attributo <strong>data-text</strong> per i livelli distorti.</p>`
      mountCodeBlock(body, {
        language: 'javascript',
        code: `import { initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'

initGlitch(document.body)

const el = document.querySelector('.arc-glitch')
triggerGlitch(el, 600)`,
      })
      const demo = document.createElement('div')
      demo.className = 'showcase-preview-box'
      demo.innerHTML = `
        <span class="arc-glitch arc-text-neon" data-text="1UP" style="font-family:var(--arc-font-pixel);font-size:1rem;">1UP</span>
        <button type="button" class="arc-btn arc-btn-ghost" id="tut-glitch">GLITCH BURST</button>
      `
      body.appendChild(demo)
      initGlitch(demo)
      body.querySelector('#tut-glitch')?.addEventListener('click', () => {
        const el = demo.querySelector('.arc-glitch')
        if (el) triggerGlitch(el, 550)
      })
    },
  },
]

export function renderTutorial(outlet) {
  const wrap = document.createElement('div')
  wrap.className = 'page-flow tutorial-page'

  const mast = document.createElement('header')
  mast.className = 'page-head'
  mast.innerHTML = `
    <p class="page-kicker">Percorso guidato</p>
    <p class="page-title">Primi passi con Arcade UI</p>
    <p class="page-desc">Installazione, fogli di stile, primo componente, AudioManager ed effetto glitch — in cinque passaggi.</p>
  `

  const progress = document.createElement('div')

  let index = 0

  function mountStep() {
    buildProgress(progress, index, STEPS.length)

    const step = STEPS[index]
    const panel = document.createElement('div')
    panel.className = 'arc-panel arc-panel-cyan'
    panel.innerHTML = `
      <div class="arc-panel-header"></div>
      <div class="arc-panel-body"></div>
      <div class="arc-panel-footer"></div>
    `
    panel.querySelector('.arc-panel-header').textContent = step.header

    const body = panel.querySelector('.arc-panel-body')
    const foot = panel.querySelector('.arc-panel-footer')

    step.render(body)

    body.classList.add('showcase-stack', 'tutorial-panel-body-flow')

    const isLast = index === STEPS.length - 1
    mountNav(foot, index, {
      goPrev: () => {
        if (index > 0) {
          index -= 1
          mountStep()
        }
      },
      goNext: () => {
        if (isLast) index = 0
        else index += 1
        mountStep()
      },
      isLast,
    })

    wrap.replaceChildren(mast, progress, panel)
  }

  outlet.appendChild(wrap)
  mountStep()
}
