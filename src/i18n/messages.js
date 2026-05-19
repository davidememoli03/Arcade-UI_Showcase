/** @typedef {import('./locale-store.js').Locale} Locale */

const MSG = /** @type {const} */ ({
  en: {
    docTitle: 'Arcade UI — Showcase & Tutorial',
    navHome: 'HOME',
    navShowcase: 'SHOWCASE',
    navTutorial: 'TUTORIAL',
    navPlayground: 'PLAYGROUND',
    navMenu: 'MENU',
    navMainAria: 'Main',
    langSwitchAria: 'Language',
    langEn: 'EN',
    langIt: 'IT',
    logoAria: 'Arcade UI — home',
    github: 'GITHUB',
    npm: 'NPM',
    showcaseDrawerAria: 'Components',
    showcaseDrawerSummary: 'COMPONENTS ▸',
    showcaseIndex: 'INDEX',
    showcaseIndexExtra:
      'Each component page lists <strong>all variants and options</strong> in sections (preview + code).',
    showcaseNotFound: 'NOT FOUND',
    showcaseBadSlugBody: 'No component with id',
    showcaseBackIndex: 'BACK TO INDEX',
    showcaseCopyCode: 'COPY CODE',
    showcaseCopied: 'COPIED',
    showcaseStorybook: 'STORYBOOK',
    playgroundKicker: 'Sandbox',
    playgroundTitle: 'Tweak markup and variants live',
    playgroundDesc:
      'Pick a component type, adjust state and labels, preview below, then copy markup from the final section.',
    playgroundControls: 'Controls',
    playgroundPreview: 'Preview',
    playgroundHtmlHeader: 'HTML output',
    playgroundLead:
      'Select a component and edit properties below. Output updates live.',
    playgroundCmpLabel: 'COMPONENT',
    playgroundPropsCaption: 'Current state (read-only)',
    playgroundPropsColProp: 'Property',
    playgroundPropsColVal: 'Value',
    playgroundCopyMarkup: 'COPY MARKUP',
    playgroundCopyMarkupDone: 'COPIED',
    tutorialKicker: 'Guided tour',
    tutorialTitle: 'First steps with Arcade UI',
    tutorialDesc: 'Installation, stylesheet, first component, AudioManager, and glitch — in five steps.',
    tutorialGuideBadge: 'GUIDE',
    tutorialProgressFmt: ({ step, total }) => `Step ${step} / ${total}`,
    tutorialPrev: 'PREVIOUS STEP',
    tutorialNext: 'NEXT STEP',
    tutorialRestart: 'START AGAIN',
    homeKicker: 'Arcade UI · interactive showcase',
    homeLead:
      'Arcade UI is an npm component library for cabinet-style interfaces: arcade panels and buttons, glitch, CRT scanlines and retro typography, with optional synthesized audio on tap — usable in SPAs, landing pages, or HUD prototypes.',
    homeMeta:
      'Package @davide03memoli/arcade-ui · catalog with {count} recurring blocks (panel, button, tooltip, countdown, AudioManager…) · docs on this site are live: previews, copy-ready snippets',
    homeRoutesTitle: 'Paths',
    homeRoutesPanelHdr: 'Where to go',
    homeBtnOpen: 'Open ▸',
    homeRouteShowcaseName: 'Showcase',
    homeRouteShowcaseDesc: 'Live preview, copyable snippets, and a side index on desktop.',
    homeRouteTutorialName: 'Tutorial',
    homeRouteTutorialDesc: 'Suggested order: CSS, where JS is needed, wiring sounds.',
    homeRouteSandboxName: 'Sandbox',
    homeRouteSandboxDesc: 'Pick a component, edit markup, and see preview below.',
    homeDevTitle: 'For developers',
    homeDevHdr: 'Install & audio',
    homeNpmLbl: 'npm command',
    homeSoundLbl: 'Sound check',
    homeSoundHint: 'Click with Web Audio (like',
    homeCopyInstall: 'COPY COMMAND',
    homeCopyInstalled: 'DONE!',
    homeCopyFail: 'COPY FAILED',
    homeQuickLinksAria: 'Quick links',
    homeFrameworkTitle: 'React & Angular',
    homeFrameworkIntro:
      'The same CSS and declarative hooks work in SPA frameworks: TypeScript JSX augmentation (React) and optional directives plus services (Angular). Import paths are documented in the library repo.',
    homeFrameworkReactKicker: 'React',
    homeFrameworkReactDesc:
      'Import `@davide03memoli/arcade-ui/react` once so `data-*` props on native elements are typed; keep importing the main bundle for CSS and `bindArcadeSounds`, `bindGlitch`, `bindTabs`, etc. after mount.',
    homeFrameworkAngularKicker: 'Angular',
    homeFrameworkAngularDesc:
      'Use the secondary entry `@davide03memoli/arcade-ui/angular` for `arcadeUiAngularImports`, `ArcadeAudioService`, glitch and theme directives — map `data-arc-sound-*` to `arcadeSoundClick` and similar inputs in templates.',
    homeFrameworkCopyReact: 'COPY REACT SNIPPET',
    homeFrameworkCopyAngular: 'COPY ANGULAR SNIPPET',
    homeFrameworkPanelHdr: 'Secondary entries & bootstrap',
    homeFrameworkDocsParity: 'Framework parity (mapping HTML ↔ React ↔ Angular)',
    homeFrameworkDocsAngular: 'Angular consumer guide',
    codeCopy: 'COPY',
    codeCopied: 'COPIED',
    codeCopyErr: 'ERR',
    pgPropComponent: 'component',
    pgPropVariant: 'variant / color',
    pgPropFlag: 'flag',
    toastInfoDemo: 'PLAYER 1 READY',
    toastSuccessDemo: 'STAGE CLEAR',
    toastWarnDemo: 'WARNING',
    toastErrorDemo: 'GAME OVER',
  },
  it: {
    docTitle: 'Arcade UI — Vetrina e tutorial',
    navHome: 'HOME',
    navShowcase: 'SHOWCASE',
    navTutorial: 'TUTORIAL',
    navPlayground: 'SANDBOX',
    navMenu: 'MENU',
    navMainAria: 'Principale',
    langSwitchAria: 'Lingua',
    langEn: 'EN',
    langIt: 'IT',
    logoAria: 'Arcade UI — vai alla home',
    github: 'GITHUB',
    npm: 'NPM',
    showcaseDrawerAria: 'Componenti',
    showcaseDrawerSummary: 'COMPONENTI ▸',
    showcaseIndex: 'INDICE',
    showcaseIndexExtra:
      'Ogni componente ha una pagina con <strong>tutte le varianti e opzioni</strong> raggruppate in sezioni (anteprima + codice).',
    showcaseNotFound: 'NON TROVATO',
    showcaseBadSlugBody: 'Nessun componente con id',
    showcaseBackIndex: 'TORNA ALL’INDICE',
    showcaseCopyCode: 'COPIA CODICE',
    showcaseCopied: 'COPIATO',
    showcaseStorybook: 'STORYBOOK',
    playgroundKicker: 'Sandbox',
    playgroundTitle: 'Prova markup e varianti in tempo reale',
    playgroundDesc:
      'Scegli un tipo di componente, regola stato e testi, osserva l’anteprima e copia il markup dalla sezione finale.',
    playgroundControls: 'Controlli',
    playgroundPreview: 'Anteprima',
    playgroundHtmlHeader: 'Codice HTML',
    playgroundLead:
      'Seleziona un componente, poi modifica proprietà qui sotto. L’output si aggiorna in tempo reale.',
    playgroundCmpLabel: 'COMPONENTE',
    playgroundPropsCaption: 'Stato attuale (sola lettura)',
    playgroundPropsColProp: 'Proprietà',
    playgroundPropsColVal: 'Valore',
    playgroundCopyMarkup: 'COPIA MARKUP',
    playgroundCopyMarkupDone: 'COPIATO',
    tutorialKicker: 'Percorso guidato',
    tutorialTitle: 'Primi passi con Arcade UI',
    tutorialDesc: 'Installazione, fogli di stile, primo componente, AudioManager ed effetto glitch — in cinque passaggi.',
    tutorialGuideBadge: 'GUIDA',
    tutorialProgressFmt: ({ step, total }) => `Passo ${step} / ${total}`,
    tutorialPrev: 'PASSO PRECEDENTE',
    tutorialNext: 'PASSO SUCCESSIVO',
    tutorialRestart: 'RICOMINCIA DA CAPO',
    homeKicker: 'Arcade UI · vetrina interattiva',
    homeLead:
      'Arcade UI è una libreria npm di componenti per interfacce stile cabinato: pannelli e pulsanti arcade, glitch, scanline CRT e tipografia retrò, con sintesi audio opzionale al tocco — da usare nelle SPA, nelle landing o nei prototipi di HUD.',
    homeMeta:
      'Pacchetto @davide03memoli/arcade-ui · catalogo da {count} blocchi ricorrenti (pannello, bottone, tooltip, countdown, AudioManager …) · in questo sito la documentazione è viva: anteprime, testi e codice pronto da copiare',
    homeRoutesTitle: 'Percorsi',
    homeRoutesPanelHdr: 'Scegli dove andare',
    homeBtnOpen: 'Apri ▸',
    homeRouteShowcaseName: 'Showcase',
    homeRouteShowcaseDesc: 'Anteprima viva, snippet copiabili e indice laterale su desktop.',
    homeRouteTutorialName: 'Tutorial',
    homeRouteTutorialDesc: 'Ordine consigliato: CSS, punti in cui serve JS, collegamento ai suoni.',
    homeRouteSandboxName: 'Sandbox',
    homeRouteSandboxDesc: 'Scegli un componente, modifica il markup e vedi l’anteprima sotto.',
    homeDevTitle: 'Per sviluppatori',
    homeDevHdr: 'Install & audio',
    homeNpmLbl: 'Comando npm',
    homeSoundLbl: 'Sound check',
    homeSoundHint: 'Clic con Web Audio (come',
    homeCopyInstall: 'COPY COMMAND',
    homeCopyInstalled: 'COPIATO!',
    homeCopyFail: 'COPY FALLITO',
    homeQuickLinksAria: 'Collegamenti rapidi',
    homeFrameworkTitle: 'React e Angular',
    homeFrameworkIntro:
      'Stessi CSS e stessi hook dichiarativi nelle SPA: augmentation TypeScript per JSX (React) e directive + servizi opzionali (Angular). I percorsi di import sono descritti nel repo della libreria.',
    homeFrameworkReactKicker: 'React',
    homeFrameworkReactDesc:
      'Importa `@davide03memoli/arcade-ui/react` una volta per tipizzare le prop `data-*` sugli elementi nativi; continua a importare il bundle principale per il CSS e per `bindArcadeSounds`, `bindGlitch`, `bindTabs`, ecc. dopo il mount.',
    homeFrameworkAngularKicker: 'Angular',
    homeFrameworkAngularDesc:
      'Usa la entry secondaria `@davide03memoli/arcade-ui/angular` per `arcadeUiAngularImports`, `ArcadeAudioService`, directive per glitch/tema — nei template `arcadeSoundClick` e gli altri input mappano gli attributi `data-arc-sound-*`.',
    homeFrameworkCopyReact: 'COPIA SNIPPET REACT',
    homeFrameworkCopyAngular: 'COPIA SNIPPET ANGULAR',
    homeFrameworkPanelHdr: 'Entry secondarie e bootstrap',
    homeFrameworkDocsParity: 'Framework parity (tabella HTML ↔ React ↔ Angular)',
    homeFrameworkDocsAngular: 'Guida consumer Angular',
    codeCopy: 'COPIA',
    codeCopied: 'COPIATO',
    codeCopyErr: 'ERR',
    pgPropComponent: 'componente',
    pgPropVariant: 'variante / colore',
    pgPropFlag: 'flag',
    toastInfoDemo: 'PLAYER 1 PRONTO',
    toastSuccessDemo: 'MISSIONE COMPLETATA',
    toastWarnDemo: 'ATTENZIONE',
    toastErrorDemo: 'GAME OVER',
  },
})

/**
 * @param {Locale} loc
 * @param { keyof typeof MSG.en } key
 * @param {Record<string, string | number>?} vars
 */
export function t(loc, key, vars) {
  const table = loc === 'it' ? MSG.it : MSG.en
  let s = /** @type {unknown} */ (table[key])
  if (typeof s !== 'string') return ''
  if (vars && typeof vars === 'object') {
    for (const [k, v] of Object.entries(vars)) {
      s = s.replaceAll(`{${k}}`, String(v))
    }
  }
  return s
}

/**
 * @template TArgs
 * @param {Locale} loc
 * @param { keyof typeof MSG.en & 'tutorialProgressFmt' } key
 * @param {TArgs extends object ? TArgs : never} [arg]
 */
export function tf(loc, key, arg) {
  const table = loc === 'it' ? MSG.it : MSG.en
  const fn = table[key]
  if (typeof fn === 'function') {
    return /** @type {(a: typeof arg) => string} */ (fn)(arg)
  }
  return ''
}

/** @param {Locale} loc */
export function syncDocumentTitle(loc) {
  const table = loc === 'it' ? MSG.it : MSG.en
  document.title = typeof table.docTitle === 'string' ? table.docTitle : document.title
}
