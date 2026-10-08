// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/test-utils/module'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [tailwindcss()]
  },
  // Geist + Geist Mono theo docs/design-spec.md §3.2. Tự host qua @nuxt/fonts.
  fonts: {
    defaults: {
      subsets: ['vietnamese', 'latin-ext', 'latin']
    },
    families: [
      { name: 'Geist', provider: 'google', weights: [400, 500, 600] },
      { name: 'Geist Mono', provider: 'google', weights: [500] }
    ]
  }
})
