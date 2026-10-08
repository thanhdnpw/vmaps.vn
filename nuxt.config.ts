// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/test-utils/module'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'vi' }
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  // Breakpoint ảnh khớp Tailwind (phone 390 / tablet 810 / desktop 1200) + màn lớn cho ảnh full-bleed.
  image: {
    screens: { xs: 390, md: 810, lg: 1200, xl: 1440, xxl: 1920, '2xl': 2560 }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  // Footer còn link tới các trang chưa dựng (/press, /privacy, ...) — không chặn `nuxt generate` vì 404 của chúng.
  nitro: {
    prerender: { failOnError: false }
  },
  // Geist + Geist Mono theo docs/design-spec.md §3.2. Tự host qua @nuxt/fonts.
  fonts: {
    defaults: {
      subsets: ['vietnamese', 'latin-ext', 'latin']
    },
    families: [
      { name: 'Geist', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Geist Mono', provider: 'google', weights: [500] }
    ]
  }
})
