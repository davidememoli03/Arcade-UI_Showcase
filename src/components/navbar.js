import { normalizeRouteHash, isShowcasePath } from '../router.js'
import { getLocale, setLocale } from '../i18n/locale-store.js'
import { t } from '../i18n/messages.js'

const ROUTE_META = [
  { route: '/home', msgKey: 'navHome' },
  { route: '/showcase', msgKey: 'navShowcase' },
  { route: '/tutorial', msgKey: 'navTutorial' },
  { route: '/playground', msgKey: 'navPlayground' },
]

/** @type {null | (() => void)} */
let detachNavbarHash = null

function linkButtonClass(route, current) {
  let isActive = route === current
  if (route === '/showcase' && isShowcasePath(current)) {
    isActive = true
  }
  return isActive
    ? 'arc-btn arc-btn-ghost arc-btn-sm showcase-nav-active'
    : 'arc-btn arc-btn-ghost arc-btn-sm'
}

export function createNavbar(container) {
  detachNavbarHash?.()
  detachNavbarHash = null

  const el = document.createElement('header')
  el.className = 'showcase-nav-outer'
  el.innerHTML = `
    <div class="showcase-nav-inner">
      <a href="#/home" class="showcase-logo" aria-label=""></a>
      <button type="button" class="arc-btn arc-btn-ghost showcase-nav-toggle" aria-expanded="false" aria-controls="arcade-nav-links" id="arcade-nav-toggle"></button>
      <nav class="showcase-nav-links" id="arcade-nav-links" aria-label=""></nav>
    </div>
  `

  const logo = el.querySelector('.showcase-logo')
  const toggleBtn = /** @type {HTMLButtonElement | null} */ (el.querySelector('#arcade-nav-toggle'))
  const nav = /** @type {HTMLElement | null} */ (el.querySelector('#arcade-nav-links'))

  let mobileOpen = false

  function closeMobile() {
    mobileOpen = false
    toggleBtn?.setAttribute('aria-expanded', 'false')
    nav?.classList.remove('is-open')
  }

  function openMobile() {
    mobileOpen = true
    toggleBtn?.setAttribute('aria-expanded', 'true')
    nav?.classList.add('is-open')
  }

  function rebuildLangStrip() {
    if (!nav) return
    const loc = getLocale()
    const wrap = document.createElement('span')
    wrap.className = 'showcase-lang-bar'
    wrap.setAttribute('role', 'group')
    wrap.setAttribute('aria-label', t(loc, 'langSwitchAria'))

    const mkBtn = (code) => {
      const lbl = code === 'en' ? t(loc, 'langEn') : t(loc, 'langIt')
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'arc-btn arc-btn-ghost arc-btn-sm showcase-lang-chip'
      if (code === loc) btn.classList.add('showcase-nav-active')
      btn.textContent = lbl
      btn.setAttribute('aria-pressed', String(code === loc))
      btn.addEventListener('click', () => {
        if (getLocale() !== code) setLocale(code)
      })
      wrap.appendChild(btn)
    }

    mkBtn('en')
    mkBtn('it')
    nav.appendChild(wrap)
  }

  function rebuildLinks() {
    if (!nav || !toggleBtn || !logo) return
    nav.replaceChildren()
    const current = normalizeRouteHash(window.location.hash)
    const loc = getLocale()

    logo.textContent = 'ARCADE UI'
    logo.setAttribute('aria-label', t(loc, 'logoAria'))
    toggleBtn.textContent = t(loc, 'navMenu')
    nav.setAttribute('aria-label', t(loc, 'navMainAria'))

    for (const { route, msgKey } of ROUTE_META) {
      const a = document.createElement('a')
      a.href = `#${route}`
      a.className = linkButtonClass(route, current)
      a.textContent = t(loc, msgKey)
      a.addEventListener('click', () => closeMobile())
      nav.appendChild(a)
    }

    const gh = document.createElement('a')
    gh.href = 'https://github.com/davidememoli03/Arcade-UI'
    gh.target = '_blank'
    gh.rel = 'noopener noreferrer'
    gh.className = 'arc-btn arc-btn-ghost arc-btn-sm'
    gh.textContent = t(loc, 'github')
    gh.addEventListener('click', () => closeMobile())
    nav.appendChild(gh)

    const npm = document.createElement('a')
    npm.href = 'https://www.npmjs.com/package/@davide03memoli/arcade-ui'
    npm.target = '_blank'
    npm.rel = 'noopener noreferrer'
    npm.className = 'arc-btn arc-btn-ghost arc-btn-sm'
    npm.textContent = t(loc, 'npm')
    npm.addEventListener('click', () => closeMobile())
    nav.appendChild(npm)

    rebuildLangStrip()
  }

  rebuildLinks()

  logo?.addEventListener('click', () => closeMobile())

  toggleBtn?.addEventListener('click', () => {
    if (mobileOpen) closeMobile()
    else openMobile()
  })

  const onHashChange = () => {
    rebuildLinks()
    closeMobile()
  }

  window.addEventListener('hashchange', onHashChange)
  detachNavbarHash = () => {
    window.removeEventListener('hashchange', onHashChange)
    detachNavbarHash = null
  }

  container.replaceChildren(el)
}
