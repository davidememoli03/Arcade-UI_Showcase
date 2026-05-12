import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
import {
  arcModal,
  AudioManager,
  bindArcDisplays,
  bindSliders,
  bindTabs,
  initGlitch,
} from '@davide03memoli/arcade-ui'
import './style.css'
import { createNavbar } from './components/navbar.js'
import { createRouter } from './router.js'

const audio = AudioManager.getInstance()
audio.bindButtons(document.body)

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
    audio.bindButtons(outlet)
    initGlitch(outlet)
    bindTabs(outlet)
    bindSliders(outlet)
    bindArcDisplays(outlet)
    arcModal.bindModalTriggers(outlet)
  },
})

createNavbar(navMount)

if (!window.location.hash || window.location.hash === '#') {
  window.location.hash = '#/home'
}
else {
  apply()
}
