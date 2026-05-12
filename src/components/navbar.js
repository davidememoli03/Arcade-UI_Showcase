import { isShowcasePath, normalizeRouteHash } from '../router.js'

const LINKS = [
  { route: '/home', label: 'HOME' },
  { route: '/showcase', label: 'SHOWCASE' },
  { route: '/tutorial', label: 'TUTORIAL' },
  { route: '/playground', label: 'PLAYGROUND' },
]

function linkButtonClass(route, current) {
  let isActive = route === current
  if (route === '/showcase' && isShowcasePath(current)) {
    isActive = true
  }
  return isActive ? 'arc-btn arc-btn-ghost showcase-nav-active' : 'arc-btn arc-btn-ghost'
}

export function createNavbar(container) {
  const el = document.createElement('header')
  el.className = 'showcase-nav-outer'
  el.innerHTML = `
    <div class="showcase-nav-inner">
      <span class="showcase-logo">ARCADE UI</span>
      <button type="button" class="arc-btn arc-btn-ghost showcase-nav-toggle" aria-expanded="false" aria-controls="arcade-nav-links" id="arcade-nav-toggle">
        MENU
      </button>
      <nav class="showcase-nav-links" id="arcade-nav-links" aria-label="Main">
      </nav>
    </div>
  `

  const nav = el.querySelector('#arcade-nav-links')

  function rebuildLinks() {
    nav.replaceChildren()
    const current = normalizeRouteHash(window.location.hash)

    for (const { route, label } of LINKS) {
      const a = document.createElement('a')
      a.href = `#${route}`
      a.className = linkButtonClass(route, current)
      a.textContent = label
      a.addEventListener('click', () => closeMobile())
      nav.appendChild(a)
    }

    const gh = document.createElement('a')
    gh.href = 'https://github.com/davidememoli03/Arcade-UI'
    gh.target = '_blank'
    gh.rel = 'noopener noreferrer'
    gh.className = 'arc-btn arc-btn-ghost'
    gh.textContent = 'GITHUB'
    gh.addEventListener('click', () => closeMobile())
    nav.appendChild(gh)

    const npm = document.createElement('a')
    npm.href = 'https://www.npmjs.com/package/@davide03memoli/arcade-ui'
    npm.target = '_blank'
    npm.rel = 'noopener noreferrer'
    npm.className = 'arc-btn arc-btn-ghost'
    npm.textContent = 'NPM'
    npm.addEventListener('click', () => closeMobile())
    nav.appendChild(npm)
  }

  rebuildLinks()

  const toggle = el.querySelector('#arcade-nav-toggle')
  let mobileOpen = false

  function closeMobile() {
    mobileOpen = false
    toggle.setAttribute('aria-expanded', 'false')
    nav.classList.remove('is-open')
  }

  function openMobile() {
    mobileOpen = true
    toggle.setAttribute('aria-expanded', 'true')
    nav.classList.add('is-open')
  }

  toggle.addEventListener('click', () => {
    if (mobileOpen) closeMobile()
    else openMobile()
  })

  window.addEventListener('hashchange', () => {
    rebuildLinks()
    closeMobile()
  })

  container.replaceChildren(el)
}
