#!/bin/bash
set -euo pipefail
REPO="davidememoli03/Arcade-UI"
OWNER="davidememoli03"
PROJECT_NUMBER=3

create_and_add() {
  local title="$1"
  local body="$2"
  local labels="$3"

  local ISSUE_URL
  ISSUE_URL="$(gh issue create \
    --repo "$REPO" \
    --title "$title" \
    --body "$body" \
    --label "$labels")"

  echo "✅ Created: $ISSUE_URL"

  gh project item-add "$PROJECT_NUMBER" \
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
