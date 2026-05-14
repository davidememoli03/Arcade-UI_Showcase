import { SHOWCASE_CATEGORIES } from '../data/showcase-catalog.js'

const NPM_PKG = '@davide03memoli/arcade-ui'
const INSTALL = `npm install ${NPM_PKG}`

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
      <section class="home-hero" aria-labelledby="home-hero-title">
        <header class="page-head page-head--center page-head--flush">
          <p class="page-kicker">Arcade UI · vetrina interattiva</p>
          <div class="showcase-hero-title-wrap">
            <h1 id="home-hero-title" class="arc-glitch showcase-hero-title home-hero-glitch" data-text="INSERT COIN TO START">
              INSERT COIN TO START
            </h1>
          </div>
          <p class="page-desc home-intro-below home-hero-lead">
            Arcade UI è una libreria npm di componenti per interfacce stile cabinato: pannelli e pulsanti arcade, glitch, scanline CRT e tipografia retrò, con sintesi audio opzionale al tocco — da usare nelle SPA, nelle landing o nei prototipi di HUD.
          </p>
        </header>
        <p class="home-meta-strip">
          Pacchetto <strong class="home-meta-strong">@davide03memoli/arcade-ui</strong> · catalogo da
          <span class="home-meta-strong">${COMPONENT_COUNT}</span>
          blocchi ricorrenti (pannello, bottone, tooltip, countdown, AudioManager …) · in questo sito la documentazione è viva: anteprime, testi e codice pronto da copiare
        </p>
      </section>

      <section class="home-block home-block--routes" aria-labelledby="home-routes-title">
        <h2 id="home-routes-title" class="home-block-title">Percorsi</h2>
        <div class="arc-panel arc-panel-cyan home-stack-panel">
          <div class="arc-panel-header">Scegli dove andare</div>
          <div class="arc-panel-body home-route-body">
            <ul class="home-route-list">
              <li class="home-route-item">
                <div class="home-route-copy">
                  <p class="home-route-name">Showcase</p>
                  <p class="home-route-desc">Anteprima viva, snippet copiabili e indice laterale su desktop.</p>
                </div>
                <button type="button" class="arc-btn arc-btn-primary home-route-cta" data-home-route="/showcase">Apri ▸</button>
              </li>
              <li class="home-route-item">
                <div class="home-route-copy">
                  <p class="home-route-name">Tutorial</p>
                  <p class="home-route-desc">Ordine consigliato: CSS, punti in cui serve JS, collegamento ai suoni.</p>
                </div>
                <button type="button" class="arc-btn arc-btn-ghost home-route-cta" data-home-route="/tutorial">Apri ▸</button>
              </li>
              <li class="home-route-item">
                <div class="home-route-copy">
                  <p class="home-route-name">Sandbox</p>
                  <p class="home-route-desc">Scegli un componente, modifica il markup e vedi l’anteprima sotto.</p>
                </div>
                <button type="button" class="arc-btn arc-btn-ghost home-route-cta" data-home-route="/playground">Apri ▸</button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="home-block home-block--dev" aria-labelledby="home-dev-title">
        <h2 id="home-dev-title" class="home-block-title">Per sviluppatori</h2>
        <div class="arc-panel arc-panel-cyan home-stack-panel">
          <div class="arc-panel-header">Install &amp; audio</div>
          <div class="arc-panel-body home-dev-body">
            <div class="home-dev-col home-dev-col--install">
              <p class="home-dev-label">Comando npm</p>
              <pre class="home-install-pre"><code class="home-install-cmd"><span class="home-install-kw">npm install</span> <span class="home-install-pkg">${NPM_PKG}</span></code></pre>
              <button type="button" class="arc-btn arc-btn-primary home-copy-btn" id="home-copy-install">COPY COMMAND</button>
            </div>
            <div class="home-dev-divider" aria-hidden="true"></div>
            <div class="home-dev-col home-dev-col--sfx">
              <p class="home-dev-label">Sound check</p>
              <p class="home-sfx-hint">
                Clic con Web Audio (come <code class="showcase-inline-code">data-arc-sound-click</code>).
              </p>
              <div class="home-sfx-buttons">
                <button type="button" class="arc-btn arc-btn-ghost" id="home-demo-coin" data-arc-sound-click="coin">COIN</button>
                <button type="button" class="arc-btn arc-btn-ghost" id="home-demo-sfx" data-arc-sound-click="select">SELECT</button>
                <button type="button" class="arc-btn arc-btn-ghost" id="home-demo-blip" data-arc-sound-click="blip">BLIP</button>
              </div>
              <p class="home-dev-code-hint">
                <code class="showcase-inline-code">AudioManager.getInstance().play('select')</code>
              </p>
            </div>
          </div>
        </div>
      </section>

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
