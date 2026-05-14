import { SHOWCASE_CATEGORIES } from '../data/showcase-catalog.js'

const INSTALL = 'npm install @davide03memoli/arcade-ui'

const COMPONENT_COUNT = SHOWCASE_CATEGORIES.reduce((n, c) => n + c.items.length, 0)

function bindHomeRoutes(outlet, navigateTo) {
  outlet.querySelectorAll('[data-home-route]').forEach((el) => {
    el.addEventListener('click', () => {
      const r = el.getAttribute('data-home-route')
      if (r) navigateTo(r)
    })
  })
}

export function renderHome(outlet, { navigateTo }) {
  outlet.innerHTML = `
    <div class="home-page page-flow" lang="it">
      <section class="home-hero arc-border-pixel" aria-labelledby="home-hero-title">
        <header class="page-head page-head--center page-head--flush">
          <p class="page-kicker">Arcade UI · vetrina interattiva</p>
          <div class="showcase-hero-title-wrap">
            <h1 id="home-hero-title" class="arc-glitch showcase-hero-title home-hero-glitch" data-text="INSERT COIN TO START">
              INSERT COIN TO START
            </h1>
          </div>
          <p class="page-desc home-intro-below home-hero-lead">
            Neon da cabinato, bordi pixel e SFX sintetizzati: componenti pronti per SPA, demo e HUD.
            Scorri, ascolta, copia il markup — tutto quello che vedi qui gira sulla stessa libreria npm.
          </p>
        </header>
        <ul class="home-quick-stats">
          <li>
            <span class="home-stat-value">${COMPONENT_COUNT}</span>
            <span class="home-stat-label">componenti nel catalogo</span>
          </li>
          <li>
            <span class="home-stat-value">3</span>
            <span class="home-stat-label">percorsi · showcase · tutorial · playground</span>
          </li>
          <li>
            <span class="home-stat-value">CRT</span>
            <span class="home-stat-label">vibes + Web Audio opzionale</span>
          </li>
        </ul>
      </section>

      <section class="home-section" aria-label="Esplora">
        <p class="home-section-label">Scegli il tuo percorso</p>
        <div class="home-feature-grid">
          <article class="arc-panel arc-panel-cyan home-feature-card">
            <div class="arc-panel-header">SHOWCASE</div>
            <div class="arc-panel-body home-feature-body">
              <p class="home-feature-text">
                Anteprima viva e snippet da copiare. Su desktop l’indice resta a sinistra; su mobile il menu si compatta in alto.
              </p>
            </div>
            <div class="arc-panel-footer home-feature-foot">
              <button type="button" class="arc-btn arc-btn-primary home-feature-cta" data-home-route="/showcase">
                <span class="home-feature-cta-stack">
                  <span class="home-feature-cta-line">Showcase ▸</span>
                  <span class="home-feature-cta-hint">Galleria componenti</span>
                </span>
              </button>
            </div>
          </article>
          <article class="arc-panel arc-panel-yellow home-feature-card">
            <div class="arc-panel-header">TUTORIAL</div>
            <div class="arc-panel-body home-feature-body">
              <p class="home-feature-text">
                Percorso guidato: dove sta il CSS, quando serve un filo di JS e come si collegano i suoni da cabinato.
              </p>
            </div>
            <div class="arc-panel-footer home-feature-foot">
              <button type="button" class="arc-btn arc-btn-primary home-feature-cta" data-home-route="/tutorial">
                <span class="home-feature-cta-stack">
                  <span class="home-feature-cta-line">Tutorial ▸</span>
                  <span class="home-feature-cta-hint">Primi passi</span>
                </span>
              </button>
            </div>
          </article>
          <article class="arc-panel arc-panel-green home-feature-card">
            <div class="arc-panel-header">PLAYGROUND</div>
            <div class="arc-panel-body home-feature-body">
              <p class="home-feature-text">
                Laboratorio immediato: scegli un componente, scrivi nel riquadro e guarda il risultato appena sotto.
              </p>
            </div>
            <div class="arc-panel-footer home-feature-foot">
              <button type="button" class="arc-btn arc-btn-primary home-feature-cta" data-home-route="/playground">
                <span class="home-feature-cta-stack">
                  <span class="home-feature-cta-line">Sandbox ▸</span>
                  <span class="home-feature-cta-hint">Prova dal vivo</span>
                </span>
              </button>
            </div>
          </article>
        </div>
      </section>

      <p class="home-intro">
        Ogni pagina componente usa URL dedicate <code class="showcase-inline-code">#/showcase/…</code>:
        vai dritto al pulsante che ti serve dal menu laterale o dall’URL.
      </p>

      <div class="home-split">
        <div class="arc-panel arc-panel-cyan showcase-home-panel home-install-panel">
          <div class="arc-panel-header">INSTALL</div>
          <div class="arc-panel-body home-install-body">
            <code class="showcase-inline-code home-install-cmd">${INSTALL}</code>
          </div>
          <div class="arc-panel-footer">
            <button type="button" class="arc-btn arc-btn-primary" id="home-copy-install">COPY COMMAND</button>
          </div>
        </div>
        <div class="arc-panel arc-panel-purple showcase-home-panel showcase-home-panel--narrow home-sfx-panel">
          <div class="arc-panel-header">SOUND CHECK</div>
          <div class="arc-panel-body home-sfx-body">
            <p class="home-sfx-hint">
              Ogni clic usa Web Audio sintetizzato (come sui pulsanti con
              <code class="showcase-inline-code">data-arc-sound-click</code>).
            </p>
            <div class="home-sfx-buttons">
              <button type="button" class="arc-btn arc-btn-ghost" id="home-demo-coin" data-arc-sound-click="coin">COIN</button>
              <button type="button" class="arc-btn arc-btn-primary" id="home-demo-sfx" data-arc-sound-click="select">SELECT</button>
              <button type="button" class="arc-btn arc-btn-ghost" id="home-demo-blip" data-arc-sound-click="blip">BLIP</button>
            </div>
          </div>
          <div class="arc-panel-footer showcase-footer-note">
            <span><code class="showcase-inline-code">AudioManager.getInstance().play('select')</code></span>
          </div>
        </div>
      </div>

      <nav class="home-link-row" aria-label="Collegamenti rapidi">
        <a class="arc-btn arc-btn-ghost" href="https://github.com/davidememoli03/Arcade-UI" target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a class="arc-btn arc-btn-ghost" href="https://www.npmjs.com/package/@davide03memoli/arcade-ui" target="_blank" rel="noopener noreferrer">NPM</a>
        <a class="arc-btn arc-btn-ghost" href="https://davidememoli03.github.io/Arcade-UI" target="_blank" rel="noopener noreferrer">STORYBOOK</a>
      </nav>
    </div>
  `

  bindHomeRoutes(outlet, navigateTo)

  outlet.querySelector('#home-copy-install')?.addEventListener('click', async (e) => {
    const btn = e.currentTarget
    try {
      await navigator.clipboard.writeText(INSTALL)
      btn.textContent = 'COPIATO!'
      window.setTimeout(() => {
        btn.textContent = 'COPY COMMAND'
      }, 1800)
    }
    catch {
      btn.textContent = 'COPY FAILED'
    }
  })

}
