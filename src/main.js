import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
import {
  arcModal,
  bindArcadeSounds,
  bindArcDisplays,
  bindGlitch,
  bindSliders,
  bindTabs,
} from '@davide03memoli/arcade-ui'
import './style.css'
import { createNavbar } from './components/navbar.js'
import { createRouter } from './router.js'
import { initLocaleDocument, subscribeLocale, getLocale } from './i18n/locale-store.js'
import { syncDocumentTitle } from './i18n/messages.js'

bindArcadeSounds(document.body)

initLocaleDocument()
syncDocumentTitle(getLocale())

const root = document.getElementById('app-root')
root.innerHTML = `
  <div class="showcase-shell">
    <div class="showcase-perspective-grid" aria-hidden="true"></div>
    <div id="nav-mount"></div>
    <main id="page-outlet" class="showcase-main"></main>
  </div>
`

const outlet = document.getElementById('page-outlet')
const navMount = document.getElementById('nav-mount')

const { apply } = createRouter({
  outlet,
  onAfterNavigate() {
    bindArcadeSounds(outlet)
    bindGlitch(outlet)
    bindTabs(outlet)
    bindSliders(outlet)
    bindArcDisplays(outlet)
    arcModal.bindModalTriggers(outlet)
  },
})

createNavbar(navMount)

subscribeLocale((loc) => {
  syncDocumentTitle(loc)
  createNavbar(navMount)
  apply()
})

if (!window.location.hash || window.location.hash === '#') {
  window.location.hash = '#/home'
}
else {
  apply()
}
