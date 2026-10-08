// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/test-utils/module'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'vi' },
      meta: [
        { name: 'theme-color', content: '#0e0f12' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:site_name', content: 'VMAP' },
        { property: 'og:locale', content: 'vi_VN' },
        { property: 'og:image', content: 'https://vmaps.vn/images/routes/hanoi-skyline.jpg' },
        { property: 'og:image:width', content: '2048' },
        { property: 'og:image:height', content: '1211' },
        { property: 'og:image:alt', content: 'VMAP - Một bản đồ, mọi hành trình' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://vmaps.vn/images/routes/hanoi-skyline.jpg' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  // Domain chính dùng cho canonical, og:url, sitemap. Đổi qua env NUXT_PUBLIC_SITE_URL.
  runtimeConfig: {
    public: {
      siteUrl: 'https://vmaps.vn'
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
    prerender: { failOnError: false, routes: ['/sitemap.xml'] }
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
