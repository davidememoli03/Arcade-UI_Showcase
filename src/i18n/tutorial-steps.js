/** @typedef {import('./locale-store.js').Locale} Locale */

const EN = [
  {
    header: 'STEP 1 // INSTALL',
    paragraphs: [{ html: `<p>Install with npm (recommended) or use the CDN from any HTML page.</p>` }],
    codes: [
      {
        lang: 'bash',
        code: 'npm install @davide03memoli/arcade-ui',
      },
      {
        lang: 'html',
        code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui/dist/arcade-ui.min.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@davide03memoli/arcade-ui/dist/arcade-ui.es.js"></script>`,
      },
    ],
  },
  {
    header: 'STEP 2 // IMPORT CSS',
    paragraphs: [
      { html: `<p>With a bundler import styles once in your entry file.</p>` },
    ],
    codes: [{ lang: 'javascript', code: "import '@davide03memoli/arcade-ui/dist/arcade-ui.css'" }],
    afterFirstCodeParagraphs: [
      {
        plain:
          'Without a bundler use a normal link tag pointing to node_modules or the CDN URL from step 1.',
      },
      {
        lang: 'html',
        code: '<link rel="stylesheet" href="./node_modules/@davide03memoli/arcade-ui/dist/arcade-ui.css">',
      },
    ],
  },
  {
    header: 'STEP 3 // FIRST COMPONENT',
    paragraphs: [
      {
        html: `<p>Panels and buttons are markup + <code class="arc-label" style="display:inline;padding:.1rem .3rem;font-size:.9em;">arc-*</code> classes only.</p>`,
      },
    ],
    codes: [
      {
        lang: 'html',
        code: `<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">READY</div>
  <div class="arc-panel-body">
    <button type="button" class="arc-btn arc-btn-primary">START GAME</button>
  </div>
</div>`,
      },
    ],
  },
  {
    header: 'STEP 4 // AUDIOMANAGER',
    paragraphs: [{ html: `<p>SFX are synthesized via Web Audio — no audio assets.</p>` }],
    codes: [
      {
        lang: 'javascript',
        code: `import { AudioManager } from '@davide03memoli/arcade-ui'

const audio = AudioManager.getInstance()
document.querySelector('#go').addEventListener('click', () => {
  audio.play('select')
})
audio.bindButtons(document.body)`,
      },
    ],
    demoButtonId: 'tut-audio',
    demoInnerHtml:
      `<button type="button" class="arc-btn arc-btn-primary" id="tut-audio">PLAY SELECT</button>`,
  },
  {
    header: 'STEP 5 // GLITCH EFFECT',
    paragraphs: [
      {
        html: `<p>The <strong>.arc-glitch</strong>, <strong>initGlitch()</strong>, and optional <strong>triggerGlitch()</strong> use the <strong>data-text</strong> attribute for the distorted layers.</p>`,
      },
    ],
    codes: [
      {
        lang: 'javascript',
        code: `import { initGlitch, triggerGlitch } from '@davide03memoli/arcade-ui'

initGlitch(document.body)

const el = document.querySelector('.arc-glitch')
triggerGlitch(el, 600)`,
      },
    ],
    demoGlitchBurstId: 'tut-glitch',
    demoGlitchWrapHtml: `
        <span class="arc-glitch arc-text-neon" data-text="1UP" style="font-family:var(--arc-font-pixel);font-size:1rem;">1UP</span>
        <button type="button" class="arc-btn arc-btn-ghost" id="tut-glitch">GLITCH BURST</button>
      `,
  },
]

const IT = [
  {
    header: 'STEP 1 // INSTALLAZIONE',
    paragraphs: [{ html: `<p>Installazione con npm (consigliata) oppure CDN in qualsiasi pagina HTML.</p>` }],
    codes: EN[0].codes,
  },
  {
    header: 'STEP 2 // IMPORT CSS',
    paragraphs: [{ html: `<p>Con un bundler importa gli stili una sola volta nel file di ingresso.</p>` }],
    codes: EN[1].codes,
    afterFirstCodeParagraphs: [
      {
        plain:
          'Senza bundler usa un normale tag link verso node_modules o l\'URL CDN del passo 1.',
      },
      EN[1].afterFirstCodeParagraphs[1],
    ],
  },
  {
    header: 'STEP 3 // PRIMO COMPONENTE',
    paragraphs: [
      {
        html: `<p>Pannelli e pulsanti sono solo markup + classi <code class="arc-label" style="display:inline;padding:.1rem .3rem;font-size:.9em;">arc-*</code>.</p>`,
      },
    ],
    codes: EN[2].codes,
  },
  {
    header: 'STEP 4 // AUDIOMANAGER',
    paragraphs: [{ html: `<p>Gli SFX sono sintetizzati in Web Audio: nessun file audio.</p>` }],
    codes: EN[3].codes,
    demoButtonId: 'tut-audio',
    demoInnerHtml:
      `<button type="button" class="arc-btn arc-btn-primary" id="tut-audio">PLAY SELECT</button>`,
  },
  {
    header: 'STEP 5 // EFFETTO GLITCH',
    paragraphs: [
      {
        html: `<p>La classe <strong>.arc-glitch</strong>, <strong>initGlitch()</strong> e (opzionale) <strong>triggerGlitch()</strong> usano l'attributo <strong>data-text</strong> per i livelli distorti.</p>`,
      },
    ],
    codes: EN[4].codes,
    demoGlitchBurstId: 'tut-glitch',
    demoGlitchWrapHtml: EN[4].demoGlitchWrapHtml,
  },
]

/** @param {Locale} locale */
export function getTutorialBlueprint(locale) {
  return locale === 'it' ? IT : EN
}
