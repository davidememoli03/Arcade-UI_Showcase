import { SHOWCASE_CATEGORIES } from '../data/showcase-catalog.js'
import { getLocale } from '../i18n/locale-store.js'
import { t } from '../i18n/messages.js'

const NPM_PKG = '@davide03memoli/arcade-ui'
const INSTALL = `npm install ${NPM_PKG}`

const DOCS_FRAMEWORK_PARITY =
  'https://github.com/davidememoli03/Arcade-UI/blob/main/docs/FRAMEWORK-PARITY.md'
const DOCS_ANGULAR_CONSUMER =
  'https://github.com/davidememoli03/Arcade-UI/blob/main/docs/angular-consumer.md'

const REACT_SNIPPET = `import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
import '@davide03memoli/arcade-ui/react'
import { bindArcadeSounds } from '@davide03memoli/arcade-ui'

// After the app root is in the DOM:
bindArcadeSounds(document.getElementById('root'))`

const ANGULAR_SNIPPET = `import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
import { Component } from '@angular/core'
import { arcadeUiAngularImports, ArcadeAudioService } from '@davide03memoli/arcade-ui/angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...arcadeUiAngularImports],
  providers: [ArcadeAudioService],
  template: \`<button class="arc-btn" arcadeSoundClick="coin">PLAY</button>\`,
})
export class AppComponent {}`

const COMPONENT_COUNT = SHOWCASE_CATEGORIES.reduce((n, c) => n + c.items.length, 0)

/** @param {string} text */
function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * @param {HTMLButtonElement | null} button
 * @param {string} snippet
 * @param {string} resetLabel
 */
function bindSnippetCopy(button, snippet, resetLabel) {
  if (!button) return
  button.addEventListener('click', async (e) => {
    const btn = /** @type {HTMLButtonElement} */ (e.currentTarget)
    try {
      await navigator.clipboard.writeText(snippet)
      btn.textContent = t(getLocale(), 'homeCopyInstalled')
      window.setTimeout(() => {
        btn.textContent = resetLabel
      }, 1800)
    }
    catch {
      btn.textContent = t(getLocale(), 'homeCopyFail')
    }
  })
}

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

      <section class="home-block home-block--framework" aria-labelledby="home-framework-title">
        <h2 id="home-framework-title" class="home-block-title">${t(loc, 'homeFrameworkTitle')}</h2>
        <div class="arc-panel arc-panel-cyan home-stack-panel">
          <div class="arc-panel-header">${t(loc, 'homeFrameworkPanelHdr')}</div>
          <div class="arc-panel-body home-framework-body">
            <p class="home-framework-intro">
              ${t(loc, 'homeFrameworkIntro')}
            </p>
            <div class="home-framework-grid">
              <div class="home-framework-col">
                <p class="home-dev-label">${t(loc, 'homeFrameworkReactKicker')}</p>
                <p class="home-framework-desc">${t(loc, 'homeFrameworkReactDesc')}</p>
                <pre class="home-install-pre home-framework-pre"><code class="home-install-cmd home-framework-code">${escapeHtml(REACT_SNIPPET)}</code></pre>
                <button type="button" class="arc-btn arc-btn-primary home-copy-btn" id="home-copy-react">${t(loc, 'homeFrameworkCopyReact')}</button>
              </div>
              <div class="home-framework-col">
                <p class="home-dev-label">${t(loc, 'homeFrameworkAngularKicker')}</p>
                <p class="home-framework-desc">${t(loc, 'homeFrameworkAngularDesc')}</p>
                <pre class="home-install-pre home-framework-pre"><code class="home-install-cmd home-framework-code">${escapeHtml(ANGULAR_SNIPPET)}</code></pre>
                <button type="button" class="arc-btn arc-btn-primary home-copy-btn" id="home-copy-angular">${t(loc, 'homeFrameworkCopyAngular')}</button>
              </div>
            </div>
            <div class="home-framework-docs" role="group" aria-label="${t(loc, 'homeFrameworkTitle')}">
              <a class="arc-btn arc-btn-ghost home-framework-doc-link" href="${DOCS_FRAMEWORK_PARITY}" target="_blank" rel="noopener noreferrer">${t(loc, 'homeFrameworkDocsParity')}</a>
              <a class="arc-btn arc-btn-ghost home-framework-doc-link" href="${DOCS_ANGULAR_CONSUMER}" target="_blank" rel="noopener noreferrer">${t(loc, 'homeFrameworkDocsAngular')}</a>
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

  bindSnippetCopy(outlet.querySelector('#home-copy-react'), REACT_SNIPPET, t(loc, 'homeFrameworkCopyReact'))
  bindSnippetCopy(outlet.querySelector('#home-copy-angular'), ANGULAR_SNIPPET, t(loc, 'homeFrameworkCopyAngular'))
}
