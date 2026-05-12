import { AudioManager } from '@davide03memoli/arcade-ui'

const INSTALL = 'npm install @davide03memoli/arcade-ui'

export function renderHome(outlet, { navigateTo }) {
  const audio = AudioManager.getInstance()

  outlet.innerHTML = `
    <h1 class="arc-glitch showcase-hero-title" data-text="INSERT COIN TO START">INSERT COIN TO START</h1>
    <p class="showcase-hero-sub">
      Neon arcade UI primitives for the web — pixel chrome, CRT vibes, and synthesized SFX via Web Audio.
      Built as pure CSS + a tiny JS layer. This site runs on the same library it documents.
      In <strong>SHOWCASE</strong> ogni componente ha una pagina dedicata (<code style="font-family:var(--arc-font-mono);font-size:0.95em;">#/showcase/…</code>), con menu fisso a sinistra.
    </p>
    <div class="arc-panel arc-panel-cyan" style="max-width: 560px; margin: 0 auto;">
      <div class="arc-panel-header">INSTALL</div>
      <div class="arc-panel-body">
        <code style="font-family: var(--arc-font-mono); font-size: 1rem;">${INSTALL}</code>
      </div>
      <div class="arc-panel-footer">
        <button type="button" class="arc-btn arc-btn-primary" id="home-copy-install">COPY COMMAND</button>
      </div>
    </div>
    <div class="showcase-row">
      <button type="button" class="arc-btn arc-btn-primary" id="home-cta-showcase">VIEW COMPONENTS</button>
      <button type="button" class="arc-btn arc-btn-ghost" id="home-cta-tutorial">GET STARTED</button>
      <a class="arc-btn arc-btn-ghost" href="https://github.com/davidememoli03/Arcade-UI" target="_blank" rel="noopener noreferrer">GITHUB</a>
    </div>
    <div class="arc-panel arc-panel-purple" style="max-width: 520px; margin: 2rem auto 0;">
      <div class="arc-panel-header">LIVE SFX DEMO</div>
      <div class="arc-panel-body showcase-preview-box">
        <button type="button" class="arc-btn arc-btn-primary" id="home-demo-sfx" data-arc-sound-click="select">PLAY SELECT SFX</button>
      </div>
      <div class="arc-panel-footer" style="font-size: 0.95rem; opacity: 0.9;">
        Uses <code style="font-family: var(--arc-font-mono);">AudioManager.getInstance().play('select')</code>
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
