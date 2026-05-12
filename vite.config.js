import { defineConfig } from 'vite'

// GitHub Pages project site: /RepoName/ (must match repo name)
const base = process.env.BASE_URL ?? './'

export default defineConfig({
  base,
})
