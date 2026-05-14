const STORAGE_KEY = 'arcade-ui-showcase-lang'

/** @typedef {'en'|'it'} Locale */

/** @type {Set<(loc: Locale) => void>} */
const listeners = new Set()

/** @type {Locale} */
let locale = 'en'

/** @param {string | null | undefined} value */
export function normalizeLocale(value) {
  const v = String(value ?? '').toLowerCase()
  return v === 'it' ? 'it' : 'en'
}

/** @returns {Locale} */
export function getLocale() {
  return locale
}

export function setLocale(next) {
  const n = normalizeLocale(next)
  if (n === locale) return
  locale = n
  try {
    localStorage.setItem(STORAGE_KEY, n)
  }
  catch {
    /* ignore */
  }
  document.documentElement.lang = n === 'it' ? 'it' : 'en'
  for (const fn of listeners) fn(n)
}

/** @param {(loc: Locale) => void} fn */
export function subscribeLocale(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function initLocaleDocument() {
  let stored = null
  try {
    stored = localStorage.getItem(STORAGE_KEY)
  }
  catch {
    /* ignore */
  }
  locale = normalizeLocale(stored ?? 'en')
  document.documentElement.lang = locale === 'it' ? 'it' : 'en'
}
