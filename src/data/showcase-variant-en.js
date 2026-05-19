/**
 * English copy for showcase variant headings (paired by index with SHOWCASE_VARIANTS).
 */
export const SHOWCASE_VARIANTS_EN = {
  'cmp-btn': [
    {
      title: 'Styles (variants)',
      description: 'primary · ghost · danger — primary, secondary, and danger visuals.',
    },
    {
      title: 'Sizes',
      description: 'arc-btn-sm · arc-btn-lg — smaller or larger buttons.',
    },
    {
      title: 'Disabled · sounds',
      description: 'disabled; for AudioManager SFX use data-arc-sound-hover / data-arc-sound-click.',
    },
  ],
  'cmp-badge': [
    {
      title: 'Colors',
      description: 'arc-badge-cyan · red · yellow · green · purple',
    },
    {
      title: 'Outline · pulse',
      description: 'arc-badge-outline — visible border; arc-badge-pulse — pulse animation.',
    },
  ],
  'cmp-panel': [
    {
      title: 'Panel color variants',
      description: 'arc-panel-cyan · red · yellow · green · purple · glass',
    },
    {
      title: 'Header / body / footer structure',
      description: 'Three optional zones; footer is typical for actions.',
    },
  ],
  'cmp-card': [
    {
      title: 'Card color variants',
      description: 'arc-card-cyan · red · yellow · green · purple',
    },
    {
      title: 'State modifiers',
      description: 'arc-card-glow — glow; arc-card-selected — selected; arc-card-locked — locked.',
    },
    {
      title: 'Header with avatar and meta',
      description: 'arc-card-avatar · title · subtitle · arc-card-meta',
    },
  ],
  'cmp-input': [
    {
      title: 'Input + label + hint',
      description: 'arc-input-wrapper · arc-label · arc-input · arc-input-hint',
    },
    {
      title: 'Error hint',
      description: 'arc-input-hint-error — validation message.',
    },
  ],
  'cmp-textarea-select': [
    {
      title: 'Textarea',
      description: 'arc-input arc-textarea — same border treatment as inputs.',
    },
    {
      title: 'Select',
      description: 'arc-input arc-select on the select element.',
    },
  ],
  'cmp-toggle': [
    {
      title: 'Basic states',
      description: 'Hidden checkbox + switch; checked / unchecked.',
    },
    {
      title: 'Disabled · left label · visual override',
      description: 'disabled; arc-toggle-label-left; arc-toggle-on / arc-toggle-off (forces look without native state).',
    },
  ],
  'cmp-slider': [
    {
      title: 'Base slider + data-arc-slider',
      description: 'Set --arc-slider-value as a %; bindSliders() updates the fill (enabled on this site).',
    },
    {
      title: 'Color variants',
      description: 'arc-slider-danger · arc-slider-success · arc-slider-yellow · arc-slider-purple',
    },
  ],
  'cmp-tabs': [
    {
      title: 'Colors (arc-tabs-*)',
      description: 'cyan · magenta · yellow · green · red · purple — same radio/label/panel structure.',
    },
    {
      title: 'CSS-only anatomy',
      description: 'Radios share the same name; label for= id; .arc-tab-panel elements in matching order.',
    },
    {
      title: 'JS mode (data-arc-tabs)',
      description: 'Tabs as buttons with role="tab"; bindTabs() wires them. Runs after navigation on this site.',
    },
  ],
  'cmp-dropdown': [
    {
      title: 'Menu colors',
      description: 'arc-dropdown-cyan · green · red · yellow · purple',
    },
    {
      title: 'Options · selected · disabled',
      description: 'arc-dropdown-option-selected · arc-dropdown-option-disabled',
    },
  ],
  'cmp-accordion': [
    {
      title: 'Colors',
      description: 'arc-accordion-cyan · red · yellow · green',
    },
  ],
  'cmp-tooltip': [
    {
      title: 'Positions',
      description: 'arc-tooltip-top (default) · bottom · left · right',
    },
  ],
  'cmp-modal': [
    {
      title: 'Modal color variants',
      description: 'arc-modal-cyan · green · yellow · red · purple',
    },
  ],
  'cmp-progress': [
    {
      title: 'Determinate + colors',
      description: 'Wrapper with label; --arc-progress from 0% to 100%',
    },
    {
      title: 'Indeterminate',
      description: 'arc-progress-indeterminate — looping animation.',
    },
  ],
  'cmp-table': [
    {
      title: 'Wrapper colors · compact mode',
      description: 'arc-table-wrapper arc-table-* · arc-table-compact',
    },
    {
      title: 'Leaderboard · row styles',
      description: 'arc-table-leaderboard; arc-table-row-gold · arc-table-row-active · arc-table-row-muted',
    },
  ],
  'cmp-avatar': [
    {
      title: 'Sizes',
      description: 'arc-avatar-sm · (default) · lg · xl',
    },
    {
      title: 'Frames · status · active',
      description: 'arc-avatar-frame-neon · gold · silver · bronze; online/offline status; arc-avatar-active',
    },
  ],
  'cmp-display': [
    {
      title: 'Layout · color variants',
      description:
        'arc-display-score · arc-display-timer; red · green · amber · cyan. Value is typically set via setArcDisplayValue.',
    },
    {
      title: 'Interactive try (JS)',
      description: 'Update the value with setArcDisplayValue.',
    },
  ],
  'cmp-countdown': [
    {
      title: 'arcCountdown API',
      description: 'seconds, onTick, onEnd; stop() to cancel.',
    },
  ],
  'cmp-sprite': [
    {
      title: 'Horizontal strip',
      description: '--arc-sprite-sheet · -frames · -width · -height · -fps · -scale',
    },
    {
      title: 'Class modifiers',
      description:
        'arc-sprite-bg-dark · arc-sprite-bg-panel · arc-sprite-paused · arc-sprite-pixelated · arc-sprite-loop-once · arc-sprite-grid · arc-sprite-gif',
    },
  ],
  'cmp-glow-text': [
    {
      title: 'Glow box / text',
      description: 'arc-glow-cyan · red · yellow · green · purple',
    },
    {
      title: 'Text effects',
      description:
        'arc-text-neon · arc-text-gradient · arc-text-outline · arc-text-glitch · arc-text-shadow-long · arc-text-chroma · arc-text-pixel-shadow',
    },
  ],
  'cmp-glitch': [
    {
      title: 'Classes',
      description: 'arc-glitch (always) · arc-glitch-hover (on hover only)',
    },
    {
      title: 'Burst (JS)',
      description: 'bindGlitch(root) + triggerGlitch(el, ms)',
    },
  ],
  'cmp-pixel-border': [
    {
      title: 'Weights & styles',
      description: 'arc-border-pixel · arc-border-pixel-thick · arc-border-pixel-inset · arc-border-pixel-chamfer · arc-border-pixel-glow',
    },
  ],
  'cmp-crt': [
    {
      title: 'CRT wrapper',
      description: 'Combine with arc-anim-flicker / scanlines on children if needed.',
    },
  ],
  'cmp-bg-pattern': [
    {
      title: 'Pattern classes',
      description: 'arc-bg-grid · arc-bg-dots · arc-bg-scanlines · arc-bg-noise · arc-bg-circuit · arc-bg-stars',
    },
  ],
  'cmp-anim': [
    {
      title: 'Animation classes',
      description: 'CSS tokens: speed/intensity tuned with variables.',
    },
  ],
  'cmp-audio': [
    {
      title: 'Built-in sound IDs',
      description: 'coin · select · blip · error · win · gameover',
    },
  ],
  'cmp-toast': [
    {
      title: 'Types',
      description: 'info · success · warning · error',
    },
  ],
}
