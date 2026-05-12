import { mountCodeBlock } from '../components/code-block.js'
import { AudioManager, initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'

const STEPS = [
  {
    header: 'STEP 1 // INSTALLATION',
    render(body, foot, { goNext, isLast }) {
      body.innerHTML = `
        <p>Install via npm (recommended) or drop the CDN build into any page.</p>
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
      foot.appendChild(nextBtn(goNext, isLast))
    },
  },
  {
    header: 'STEP 2 // IMPORT CSS',
    render(body, foot, { goNext, isLast }) {
      body.innerHTML = `<p>With a bundler, import the stylesheet once in your entry file.</p>`
      mountCodeBlock(body, {
        language: 'javascript',
        code: "import '@davide03memoli/arcade-ui/dist/arcade-ui.css'",
      })
      body.appendChild(document.createElement('p')).textContent = 'Without a bundler, use a plain link tag pointing at node_modules or the CDN URL shown in step 1.'
      mountCodeBlock(body, {
        language: 'html',
        code: '<link rel="stylesheet" href="./node_modules/@davide03memoli/arcade-ui/dist/arcade-ui.css">',
      })
      foot.appendChild(nextBtn(goNext, isLast))
    },
  },
  {
    header: 'STEP 3 // FIRST COMPONENT',
    render(body, foot, { goNext, isLast }) {
      body.innerHTML = `<p>Drop panels and buttons anywhere — everything is class-driven.</p>`
      mountCodeBlock(body, {
        language: 'html',
        code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">READY</div>
  <div class="arc-panel-body">
    <button type="button" class="arc-btn arc-btn-primary">START GAME</button>
  </div>
</div>`,
      })
      foot.appendChild(nextBtn(goNext, isLast))
    },
  },
  {
    header: 'STEP 4 // AUDIOMANAGER',
    render(body, foot, { goNext, isLast }) {
      body.innerHTML = `<p>Built-in SFX are synthesized — no audio assets required.</p>`
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
      foot.appendChild(nextBtn(goNext, isLast))
    },
  },
  {
    header: 'STEP 5 // GLITCH EFFECT',
    render(body, foot, { goNext, isLast }) {
      body.innerHTML = `<p>Add the <strong>.arc-glitch</strong> class and call <strong>initGlitch</strong> so <code>data-text</code> is wired for the distortion layers.</p>`
      mountCodeBlock(body, {
        language: 'javascript',
        code: `import { initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'

initGlitch(document.body)

// optional burst
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
      foot.appendChild(nextBtn(goNext, isLast))
    },
  },
]

function nextBtn(goNext, isLast) {
  const b = document.createElement('button')
  b.type = 'button'
  b.className = 'arc-btn arc-btn-primary'
  b.textContent = isLast ? 'BACK TO TOP ▲' : 'NEXT STEP ▶'
  b.addEventListener('click', goNext)
  return b
}

export function renderTutorial(outlet) {
  const wrap = document.createElement('div')
  wrap.className = 'showcase-tutorial-steps'

  let index = 0

  function mountStep() {
    wrap.replaceChildren()
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

    const isLast = index === STEPS.length - 1
    step.render(body, foot, {
      goNext: () => {
        if (isLast) {
          index = 0
        }
        else {
          index += 1
        }
        mountStep()
      },
      isLast,
    })
    wrap.appendChild(panel)
  }

  mountStep()
  outlet.appendChild(wrap)
}
