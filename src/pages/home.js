import { AudioManager } from '@davide03memoli/arcade-ui'

const INSTALL = 'npm install @davide03memoli/arcade-ui'

export function renderHome(outlet, { navigateTo }) {
  const audio = AudioManager.getInstance()

  outlet.innerHTML = `
    <div class="home-page page-flow">
      <div class="page-head page-head--center page-head--flush">
        <p class="page-kicker">Arcade UI</p>
        <div class="showcase-hero-title-wrap">
          <h1 class="arc-glitch showcase-hero-title" data-text="INSERT COIN TO START">INSERT COIN TO START</h1>
        </div>
        <p class="page-desc home-intro-below">
          Primitivi UI neon da browser — chrome pixel, vibes CRT e SFX sintetizzati con Web Audio.
          CSS puro e un sottile strato JS. Questo sito documenta la stessa libreria che usa in produzione.
        </p>
      </div>
      <p class="home-intro">
        Nella sezione <strong>SHOWCASE</strong> ogni componente ha una pagina dedicata
        (<code class="showcase-inline-code">#/showcase/…</code>): indice laterale su desktop, menu apribile in alto su mobile.
      </p>
      <div class="arc-panel arc-panel-cyan showcase-home-panel">
        <div class="arc-panel-header">INSTALL</div>
        <div class="arc-panel-body">
          <code class="showcase-inline-code" style="font-size: 1rem;">${INSTALL}</code>
        </div>
        <div class="arc-panel-footer">
          <button type="button" class="arc-btn arc-btn-primary" id="home-copy-install">COPY COMMAND</button>
        </div>
      </div>
      <div class="home-actions">
        <button type="button" class="arc-btn arc-btn-primary" id="home-cta-showcase">VIEW COMPONENTS</button>
        <button type="button" class="arc-btn arc-btn-ghost" id="home-cta-tutorial">GET STARTED</button>
        <a class="arc-btn arc-btn-ghost" href="https://github.com/davidememoli03/Arcade-UI" target="_blank" rel="noopener noreferrer">GITHUB</a>
      </div>
      <div class="arc-panel arc-panel-purple showcase-home-panel showcase-home-panel--narrow">
        <div class="arc-panel-header">LIVE SFX DEMO</div>
        <div class="arc-panel-body showcase-preview-box">
          <button type="button" class="arc-btn arc-btn-primary" id="home-demo-sfx" data-arc-sound-click="select">PLAY SELECT SFX</button>
        </div>
        <div class="arc-panel-footer showcase-footer-note">
          Usa <code class="showcase-inline-code">AudioManager.getInstance().play('select')</code>
        </div>
      </div>
    </div>
  `

  outlet.querySelector('#home-copy-install')?.addEventListener('click', async (e) => {
    const btn = e.currentTarget
    try {
      await navigator.clipboard.writeText(INSTALL)
      btn.textContent = 'COPIED!'
      window.setTimeout(() => {
        btn.textContent = 'COPY COMMAND'
      }, 1800)
    }
    catch {
      btn.textContent = 'COPY FAILED'
    }
  })

  outlet.querySelector('#home-cta-showcase')?.addEventListener('click', () => {
    navigateTo('/showcase')
  })
  outlet.querySelector('#home-cta-tutorial')?.addEventListener('click', () => {
    navigateTo('/tutorial')
  })

  outlet.querySelector('#home-demo-sfx')?.addEventListener('click', () => {
    audio.play('select')
  })
}
