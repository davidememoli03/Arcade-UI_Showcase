# Cursor Prompt — Arcade-UI Showcase & Tutorial Site

> **Repo libreria:** https://github.com/davidememoli03/Arcade-UI  
> **Storybook live:** https://davidememoli03.github.io/Arcade-UI/  
> **npm:** https://www.npmjs.com/package/@davide03memoli/arcade-ui  
> **GitHub Project:** https://github.com/users/davidememoli03/projects/3/views/1

---

## Contesto

Costruisci un sito web di **showcase e tutorial** per la libreria CSS/JS `@davide03memoli/arcade-ui`.  
La libreria ha uno stile retro 80s arcade: neon palette, pixel animations, sound effects via Web Audio API.

Il sito **deve essere costruito usando esclusivamente `@davide03memoli/arcade-ui`** per la sua UI — la libreria si documenta con sé stessa (dogfooding).

Le classi principali da usare nel sito sono:

| Elemento | Classe |
|---|---|
| Bottoni | `arc-btn arc-btn-primary` / `arc-btn-secondary` / `arc-btn-ghost` |
| Pannelli | `arc-panel arc-panel-cyan` con figli `arc-panel-header`, `arc-panel-body`, `arc-panel-footer` |
| Input | `arc-input` con wrapper `arc-input-wrapper` e `arc-label` |
| Effetti JS | `AudioManager.bindArcadeSounds()` (`bindButtons` è alias), `bindGlitch()`, `arcModal`, `arcToast`, … |

Colori neon del design system: cyan `#00f5ff`, magenta `#ff007f`, yellow `#ffe600`.

Showcase pensato per **`@davide03memoli/arcade-ui` v5.6.x** ([repo Arcade-UI](https://github.com/davidememoli03/Arcade-UI), [Storybook](https://davidememoli03.github.io/Arcade-UI/)).

---

## Step 1 — Scaffolding del progetto

Crea un nuovo progetto **Vite + Vanilla JS** (no React, la libreria è CSS/JS pura):

```bash
npm create vite@latest arcade-ui-showcase -- --template vanilla
cd arcade-ui-showcase
npm install
npm install @davide03memoli/arcade-ui
```

Struttura delle cartelle da creare:

```
arcade-ui-showcase/
├── public/
├── src/
│   ├── pages/
│   │   ├── home.js
│   │   ├── showcase.js
│   │   ├── tutorial.js
│   │   └── playground.js
│   ├── components/
│   │   ├── navbar.js
│   │   ├── code-block.js
│   │   └── props-table.js
│   ├── router.js
│   └── main.js
├── index.html
└── vite.config.js
```

In `main.js` importa sempre:

```js
import '@davide03memoli/arcade-ui/dist/arcade-ui.css'
```

---

## Step 2 — Layout globale (Navbar)

Crea una navbar fissa con:

- Logo **"ARCADE UI"** con font pixel/monospace e glow neon cyan
- Link a: `HOME` | `SHOWCASE` | `TUTORIAL` | `PLAYGROUND` | `GITHUB` | `NPM`
- Link attivo evidenziato con bordo neon magenta
- Usa `arc-btn arc-btn-ghost` per ogni link di navigazione
- Routing **hash-based** client-side (`window.location.hash`)
- Responsive: collasso a menu hamburger su mobile

---

## Step 3 — Implementa le pagine

### 3.1 — Home / Hero (`#/home`)

- Titolo gigante **"INSERT COIN TO START"** con effetto glitch animato (usa la classe `arc-glitch` o l'effetto JS della libreria)
- Sottotitolo descrittivo della libreria
- Blocco install command con **copy-to-clipboard**:

```html
<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-body">npm install @davide03memoli/arcade-ui</div>
</div>
```

- Tre CTA (`arc-btn`): **VIEW COMPONENTS** | **GET STARTED** | **GITHUB**
- Mini demo live: un `arc-panel` con un `arc-btn` che riproduce SFX al click tramite `AudioManager`
- Sfondo: griglia prospettica stile anni '80 in CSS puro (`linear-gradient`)

---

### 3.2 — Showcase (`#/showcase`)

- **Sidebar sinistra** con lista dei componenti (`arc-btn arc-btn-ghost` per ogni voce)
- **Area destra** con una card `arc-panel` per ogni componente:
  - `arc-panel-header`: nome componente
  - `arc-panel-body`: preview live renderizzata
  - `arc-panel-footer`: pulsante **COPY CODE** (`arc-btn arc-btn-secondary`)
- Syntax highlighting con **highlight.js** (via CDN)

Componenti da documentare:

1. `arc-btn` — varianti: primary, secondary, ghost + stati: hover, active, disabled
2. `arc-panel` — varianti: cyan, magenta, yellow
3. `arc-input` + `arc-label`
4. Effetto glitch (JS)
5. AudioManager (demo con bottone che emette suono)

---

### 3.3 — Tutorial (`#/tutorial`)

Step-by-step guide. Ogni step è un `arc-panel arc-panel-cyan` con header numerato:

```html
<div class="arc-panel arc-panel-cyan">
  <div class="arc-panel-header">STEP 1 // INSTALLATION</div>
  <div class="arc-panel-body"><!-- contenuto --></div>
  <div class="arc-panel-footer">
    <button class="arc-btn arc-btn-primary">NEXT STEP ▶</button>
  </div>
</div>
```

| Step | Titolo | Contenuto |
|---|---|---|
| 1 | Installation | npm install + CDN alternative |
| 2 | Import CSS | JS bundler vs tag `<link>` |
| 3 | Primo componente | Esempio minimo `arc-btn` + `arc-panel` |
| 4 | AudioManager | SFX al click, esempio con `audio.play('select')` |
| 5 | Effetto Glitch | Applicare l'effetto JS a qualsiasi elemento |

Tutti gli snippet sono copiabili e con syntax highlighting.

---

### 3.4 — Playground (`#/playground`)

- **Select dropdown** (`arc-input`) per scegliere il componente
- **Controlli varianti**: radio/select per colore, checkbox per `disabled`, ecc.
- **Preview live** che si aggiorna in tempo reale
- **Output HTML** generato mostrato in un `arc-panel` con pulsante copy
- Tutto il chrome del playground è costruito con classi arc-ui

---

## Step 4 — Deploy su GitHub Pages

Aggiungi un file `.github/workflows/deploy.yml`:

```yaml
name: Deploy Showcase

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Step 5 — Crea le GitHub Issues e aggiungile al Project

Dopo aver completato il codice, usa il seguente script bash per creare tutte le issues su `davidememoli03/Arcade-UI` e aggiungerle al **Project #3** (user-level project).

> **Prerequisito:** `gh auth login` completato con permessi `repo` e `project`.

```bash
#!/bin/bash
REPO="davidememoli03/Arcade-UI"
OWNER="davidememoli03"
PROJECT_NUMBER=3

create_and_add() {
  local title="$1"
  local body="$2"
  local labels="$3"

  ISSUE_URL=$(gh issue create \
    --repo "$REPO" \
    --title "$title" \
    --body "$body" \
    --label "$labels")

  echo "✅ Created: $ISSUE_URL"

  gh project item-add $PROJECT_NUMBER \
    --owner "$OWNER" \
    --url "$ISSUE_URL"

  echo "📌 Added to project #$PROJECT_NUMBER"
}

# ── ISSUE 1 ──────────────────────────────────────────────────
create_and_add \
  "[SETUP] Project scaffolding & Vite config" \
  "## Obiettivo
Inizializzare il progetto base del sito showcase.

## Task
- [ ] Inizializzare progetto Vite + Vanilla JS
- [ ] Installare \`@davide03memoli/arcade-ui\`
- [ ] Configurare struttura cartelle: \`src/pages\`, \`src/components\`, \`src/router\`
- [ ] Configurare routing hash-based client-side
- [ ] Setup GitHub Pages deploy via GitHub Actions

## Acceptance Criteria
- \`npm run dev\` funziona correttamente
- \`npm run build\` produce \`dist/\` corretto
- Deploy automatico su GitHub Pages attivo" \
  "setup"

# ── ISSUE 2 ──────────────────────────────────────────────────
create_and_add \
  "[SETUP] Navbar e layout globale" \
  "## Obiettivo
Creare il layout condiviso da tutte le pagine.

## Task
- [ ] Componente navbar fisso con logo ARCADE UI + glow neon cyan
- [ ] Link di navigazione con \`arc-btn arc-btn-ghost\`
- [ ] Routing hash-based: HOME | SHOWCASE | TUTORIAL | PLAYGROUND | GITHUB | NPM
- [ ] Link attivo evidenziato con bordo magenta
- [ ] Versione mobile responsive (hamburger menu)

## Acceptance Criteria
- Navbar presente su tutte le pagine
- Navigazione funzionante tra le sezioni
- Usa esclusivamente classi arc-ui per la UI" \
  "setup,feature"

# ── ISSUE 3 ──────────────────────────────────────────────────
create_and_add \
  "[PAGE] Hero / Home page" \
  "## Obiettivo
Creare la landing page ad alto impatto visivo.

## Task
- [ ] Titolo 'INSERT COIN TO START' con effetto glitch
- [ ] Sottotitolo descrittivo della libreria
- [ ] Install command con copy-to-clipboard dentro \`arc-panel arc-panel-cyan\`
- [ ] 3 CTA buttons (\`arc-btn\`): View Components, Get Started, GitHub
- [ ] Mini demo live con AudioManager (click = SFX)
- [ ] Sfondo griglia prospettica 80s in CSS puro

## Acceptance Criteria
- Effetto glitch funzionante
- Copy-to-clipboard funzionante
- SFX al click del demo button
- Layout responsive" \
  "feature,page"

# ── ISSUE 4 ──────────────────────────────────────────────────
create_and_add \
  "[PAGE] Components Showcase" \
  "## Obiettivo
Documentare tutti i componenti della libreria con preview live.

## Task
- [ ] Sidebar con lista componenti (arc-btn ghost)
- [ ] Card \`arc-panel\` per ogni componente con preview + snippet
- [ ] Syntax highlighting con highlight.js (CDN)
- [ ] Bottone COPY CODE per ogni snippet
- [ ] Componenti da coprire: arc-btn, arc-panel, arc-input, glitch, AudioManager

## Acceptance Criteria
- Tutti i componenti documentati
- Copy code funzionante
- Syntax highlighting attivo
- Navigazione sidebar funzionante" \
  "feature,page"

# ── ISSUE 5 ──────────────────────────────────────────────────
create_and_add \
  "[PAGE] Getting Started Tutorial" \
  "## Obiettivo
Guida passo-passo per iniziare a usare la libreria.

## Task
- [ ] 5 step sequenziali ognuno in un \`arc-panel arc-panel-cyan\`
- [ ] Step 1: Installazione npm/CDN
- [ ] Step 2: Import CSS
- [ ] Step 3: Primo componente
- [ ] Step 4: AudioManager + SFX
- [ ] Step 5: Effetto Glitch
- [ ] Bottone NEXT STEP tra ogni step
- [ ] Snippet copiabili con highlight.js

## Acceptance Criteria
- Tutti e 5 gli step presenti e navigabili
- Ogni snippet è copiabile
- Tutto il chrome è fatto con arc-ui" \
  "feature,page,tutorial"

# ── ISSUE 6 ──────────────────────────────────────────────────
create_and_add \
  "[PAGE] Interactive Playground" \
  "## Obiettivo
Permettere all'utente di esplorare i componenti configurando le props in tempo reale.

## Task
- [ ] Select per scegliere il componente (\`arc-input\`)
- [ ] Controlli varianti (colore, disabled, testo, ecc.)
- [ ] Preview live aggiornata in tempo reale
- [ ] Output HTML generato in \`arc-panel\` con copy button
- [ ] Tutto il chrome costruito con arc-ui

## Acceptance Criteria
- Selezione componente funzionante
- Preview aggiornata ad ogni modifica
- Codice HTML generato corretto e copiabile" \
  "feature,page"

# ── ISSUE 7 ──────────────────────────────────────────────────
create_and_add \
  "[COMPONENT] Code Block con syntax highlighting" \
  "## Obiettivo
Componente riutilizzabile per mostrare snippet di codice.

## Task
- [ ] Wrapper con highlight.js (CDN) per syntax highlighting
- [ ] Stilizzato in accordo con il visual language di arcade-ui (bordi neon, font monospace)
- [ ] Tag linguaggio visibile (HTML, JS, CSS)
- [ ] Pulsante COPY con feedback visivo al click
- [ ] Line highlighting opzionale

## Utilizzo
Usato in: Showcase, Tutorial, Playground." \
  "component"

# ── ISSUE 8 ──────────────────────────────────────────────────
create_and_add \
  "[DEPLOY] GitHub Pages — CI/CD workflow" \
  "## Obiettivo
Deploy automatico del sito su GitHub Pages ad ogni push su main.

## Task
- [ ] Creare \`.github/workflows/deploy.yml\`
- [ ] Build con \`npm run build\`
- [ ] Publish \`dist/\` su branch \`gh-pages\`
- [ ] Verificare URL di deploy funzionante

## Acceptance Criteria
- Push su main → deploy automatico
- Sito raggiungibile su URL GitHub Pages
- Build senza errori nel log Actions" \
  "ci,deploy"

echo ""
echo "🎮 Tutte le issues create e aggiunte al progetto #$PROJECT_NUMBER!"
```

---

## Note finali

- Non usare React, Vue o altri framework: la libreria è CSS/JS pura, il sito deve esserlo altrettanto.
- Ogni singolo elemento UI del sito (bottoni, pannelli, input, layout) deve usare le classi `arc-*`.
- Per la libreria JavaScript (AudioManager, glitch), importa dal package installato, non da CDN.
- Usa `highlight.js` da CDN solo per il syntax highlighting degli snippet di codice.
- Il routing è hash-based puro: nessuna dipendenza esterna per il router.