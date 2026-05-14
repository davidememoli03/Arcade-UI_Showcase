import { getLocale } from '../i18n/locale-store.js'
import { t } from '../i18n/messages.js'

function flash(el) {
  el.classList.remove('copy-flash')
  void el.offsetWidth
  el.classList.add('copy-flash')
}

export function mountCodeBlock(container, options) {
  const {
    language,
    code,
    showCopy = true,
  } = options

  const wrap = document.createElement('div')
  wrap.className = 'showcase-code-block'

  const toolbar = document.createElement('div')
  toolbar.className = 'showcase-code-toolbar'

  const tag = document.createElement('span')
  tag.className = 'showcase-lang-tag'
  tag.textContent = language.toUpperCase()

  toolbar.appendChild(tag)

  if (showCopy) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'arc-btn arc-btn-ghost'
    btn.textContent = t(getLocale(), 'codeCopy')
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code)
        flash(btn)
        btn.textContent = t(getLocale(), 'codeCopied')
        window.setTimeout(() => {
          btn.textContent = t(getLocale(), 'codeCopy')
        }, 1600)
      }
      catch {
        btn.textContent = t(getLocale(), 'codeCopyErr')
      }
    })
    toolbar.appendChild(btn)
  }

  const preOuter = document.createElement('div')
  preOuter.className = 'showcase-pre-wrap arc-border-pixel arc-border-pixel-glow'

  const pre = document.createElement('pre')
  const codeEl = document.createElement('code')
  codeEl.className = `language-${language}`
  codeEl.textContent = code
  pre.appendChild(codeEl)
  preOuter.appendChild(pre)

  if (window.hljs) {
    window.hljs.highlightElement(codeEl)
  }

  wrap.appendChild(toolbar)
  wrap.appendChild(preOuter)
  container.appendChild(wrap)
  return wrap
}
