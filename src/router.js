import { renderHome } from './pages/home.js'
import { renderShowcase } from './pages/showcase.js'
import { renderTutorial } from './pages/tutorial.js'
import { renderPlayground } from './pages/playground.js'

const ROUTES = {
  '/home': renderHome,
  '/tutorial': renderTutorial,
  '/playground': renderPlayground,
}

export function normalizeRouteHash(hash) {
  if (!hash || hash === '#') return '/home'
  let p = hash.startsWith('#') ? hash.slice(1) : hash
  if (!p.startsWith('/')) p = `/${p}`
  const pathOnly = p.split('?')[0].replace(/\/+$/, '') || '/'
  if (pathOnly === '/') return '/home'
  return pathOnly
}

/** True se siamo nell’area showcase (indice o pagina componente). */
export function isShowcasePath(path) {
  return path === '/showcase' || path.startsWith('/showcase/')
}

export function parseShowcaseSlug(path) {
  if (!isShowcasePath(path)) return null
  if (path === '/showcase') return null
  const rest = path.slice('/showcase/'.length).split('/')[0]
  return rest || null
}

export function createRouter({ outlet, onAfterNavigate }) {
  function apply() {
    const path = normalizeRouteHash(window.location.hash)
    outlet.replaceChildren()

    const ctx = {
      navigateTo(pathFragment) {
        const clean = pathFragment.startsWith('/') ? pathFragment.slice(1) : pathFragment
        window.location.hash = `#/${clean}`
      },
    }

    if (isShowcasePath(path)) {
      renderShowcase(outlet, { ...ctx, showcaseSlug: parseShowcaseSlug(path) })
    }
    else {
      const render = ROUTES[path] ?? ROUTES['/home']
      render(outlet, ctx)
    }

    onAfterNavigate?.()
  }

  window.addEventListener('hashchange', apply)
  return { apply }
}
