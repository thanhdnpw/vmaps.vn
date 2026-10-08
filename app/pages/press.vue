<script setup lang="ts">
// Nội dung mẫu chép nguyên từ Framer (còn sót của template Streaks), cần thay bằng thông tin báo chí của VMAP.
const paragraphs = [
  'Everything you need to write about Streaks. For interviews or product questions, email hello@streaks.app and we will reply within two working days.',
  'Streaks is a training app for people who move better together. It combines adaptive training plans, real-time pacing, and local clubs in a single app, and is available on iOS and Android.',
  'Boilerplate: Streaks helps people build a movement habit that holds. Founded in 2024, the app now supports more than 80,000 active members across 40 countries.',
  'Brand assets: Replace this section with links to your own logo pack, product screenshots, and founder photography before publishing.'
]

useSeoMeta({
  title: 'Press and brand assets | VMAP'
})
</script>

<template>
  <main class="mx-auto flex max-w-200 flex-col gap-5 px-gutter pt-35 pb-section md:gap-6 md:pt-40">
    <!-- Framer "Press page": cùng khung với Privacy page (maxW 800), gap 20 / 24 / 24 -->
    <p class="font-mono text-eyebrow font-medium text-accent uppercase">
      Press kit
    </p>
    <h1 class="text-display-lg text-fg">
      Press &amp; brand assets
    </h1>
    <p v-for="(text, i) in paragraphs" :key="i" class="max-w-160 text-body-md text-fg-muted">
      {{ text }}
    </p>
  </main>
</template>
