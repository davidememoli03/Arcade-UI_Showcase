import { SHOWCASE_CATEGORIES } from '../data/showcase-catalog.js'
import { getLocale } from '../i18n/locale-store.js'
import { t } from '../i18n/messages.js'

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
  const loc = getLocale()
  const meta = t(loc, 'homeMeta', { count: COMPONENT_COUNT })

  outlet.innerHTML = `
    <div class="home-page page-flow" lang="${loc}">
      <section class="home-hero" aria-labelledby="home-hero-title">
        <header class="page-head page-head--center page-head--flush">
          <p class="page-kicker">${t(loc, 'homeKicker')}</p>
          <div class="showcase-hero-title-wrap">
            <h1 id="home-hero-title" class="arc-glitch showcase-hero-title home-hero-glitch" data-text="INSERT COIN TO START">
              INSERT COIN TO START
            </h1>
          </div>
          <p class="page-desc home-intro-below home-hero-lead">
            ${t(loc, 'homeLead')}
          </p>
        </header>
        <p class="home-meta-strip">
          ${meta}
        </p>
      </section>

      <section class="home-block home-block--routes" aria-labelledby="home-routes-title">
        <h2 id="home-routes-title" class="home-block-title">${t(loc, 'homeRoutesTitle')}</h2>
        <div class="arc-panel arc-panel-cyan home-stack-panel">
          <div class="arc-panel-header">${t(loc, 'homeRoutesPanelHdr')}</div>
          <div class="arc-panel-body home-route-body">
            <ul class="home-route-list">
              <li class="home-route-item">
                <div class="home-route-copy">
                  <p class="home-route-name">${t(loc, 'homeRouteShowcaseName')}</p>
                  <p class="home-route-desc">${t(loc, 'homeRouteShowcaseDesc')}</p>
                </div>
                <button type="button" class="arc-btn arc-btn-primary home-route-cta" data-home-route="/showcase">${t(loc, 'homeBtnOpen')}</button>
              </li>
              <li class="home-route-item">
                <div class="home-route-copy">
                  <p class="home-route-name">${t(loc, 'homeRouteTutorialName')}</p>
                  <p class="home-route-desc">${t(loc, 'homeRouteTutorialDesc')}</p>
                </div>
                <button type="button" class="arc-btn arc-btn-ghost home-route-cta" data-home-route="/tutorial">${t(loc, 'homeBtnOpen')}</button>
              </li>
              <li class="home-route-item">
                <div class="home-route-copy">
                  <p class="home-route-name">${t(loc, 'homeRouteSandboxName')}</p>
                  <p class="home-route-desc">${t(loc, 'homeRouteSandboxDesc')}</p>
                </div>
                <button type="button" class="arc-btn arc-btn-ghost home-route-cta" data-home-route="/playground">${t(loc, 'homeBtnOpen')}</button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="home-block home-block--dev" aria-labelledby="home-dev-title">
        <h2 id="home-dev-title" class="home-block-title">${t(loc, 'homeDevTitle')}</h2>
        <div class="arc-panel arc-panel-cyan home-stack-panel">
          <div class="arc-panel-header">${t(loc, 'homeDevHdr')}</div>
          <div class="arc-panel-body home-dev-body">
            <div class="home-dev-col home-dev-col--install">
              <p class="home-dev-label">${t(loc, 'homeNpmLbl')}</p>
              <pre class="home-install-pre"><code class="home-install-cmd"><span class="home-install-kw">npm install</span> <span class="home-install-pkg">${NPM_PKG}</span></code></pre>
              <button type="button" class="arc-btn arc-btn-primary home-copy-btn" id="home-copy-install">${t(loc, 'homeCopyInstall')}</button>
            </div>
            <div class="home-dev-divider" aria-hidden="true"></div>
            <div class="home-dev-col home-dev-col--sfx">
              <p class="home-dev-label">${t(loc, 'homeSoundLbl')}</p>
              <p class="home-sfx-hint">
                ${t(loc, 'homeSoundHint')} <code class="showcase-inline-code">data-arc-sound-click</code>).
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

      <nav class="home-link-row" aria-label="${t(loc, 'homeQuickLinksAria')}">
        <a class="arc-btn arc-btn-ghost" href="https://github.com/davidememoli03/Arcade-UI" target="_blank" rel="noopener noreferrer">${t(loc, 'github')}</a>
        <a class="arc-btn arc-btn-ghost" href="https://www.npmjs.com/package/@davide03memoli/arcade-ui" target="_blank" rel="noopener noreferrer">${t(loc, 'npm')}</a>
        <a class="arc-btn arc-btn-ghost" href="https://davidememoli03.github.io/Arcade-UI" target="_blank" rel="noopener noreferrer">${t(loc, 'showcaseStorybook')}</a>
      </nav>
    </div>
  `

  bindHomeRoutes(outlet, navigateTo)

  outlet.querySelector('#home-copy-install')?.addEventListener('click', async (e) => {
    const btn = e.currentTarget
    try {
      await navigator.clipboard.writeText(INSTALL)
      btn.textContent = t(getLocale(), 'homeCopyInstalled')
      window.setTimeout(() => {
        btn.textContent = t(getLocale(), 'homeCopyInstall')
      }, 1800)
    }
    catch {
      btn.textContent = t(getLocale(), 'homeCopyFail')
    }
  })
}
