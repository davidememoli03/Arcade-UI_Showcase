import { renderHome } from './pages/home.js'
import { renderShowcase } from './pages/showcase.js'
import { renderTutorial } from './pages/tutorial.js'
import { renderPlayground } from './pages/playground.js'

const ROUTES = {
  '/home': renderHome,
  '/showcase': renderShowcase,
  '/tutorial': renderTutorial,
  '/playground': renderPlayground,
}

export function normalizeRouteHash(hash) {
  if (!hash || hash === '#') return '/home'
  let p = hash.startsWith('#') ? hash.slice(1) : hash
  if (!p.startsWith('/')) p = `/${p}`
  const pathOnly = p.split('?')[0]
  if (pathOnly === '/') return '/home'
  return pathOnly
}

export function createRouter({ outlet, onAfterNavigate }) {
  function apply() {
    const path = normalizeRouteHash(window.location.hash)
    const render = ROUTES[path] ?? ROUTES['/home']
    outlet.replaceChildren()
    render(outlet, {
      navigateTo(pathFragment) {
        const clean = pathFragment.startsWith('/') ? pathFragment.slice(1) : pathFragment
        window.location.hash = `#/${clean}`
      },
    })
    onAfterNavigate?.()
  }

  window.addEventListener('hashchange', apply)
  return { apply }
}
