<script setup lang="ts">
// Nội dung mẫu chép nguyên từ Framer (còn sót của template), cần thay trước khi lên store.
const paragraphs = [
  'PLACEHOLDER. Replace this page before you launch. This text is sample copy shipped with the template and is not legal advice.',
  'This policy explains what Streaks collects, why, and what control you have. App stores require a live privacy URL before you can publish, so this page must be completed.',
  'We collect account details you give us, activity data from sessions you record, and device data needed to sync with watches and fitness platforms you connect.',
  'Activity data is used to build and adapt your training plan. Aggregated, non-identifying data may be used to improve pacing accuracy. We do not sell personal data.',
  'You can export or delete your data at any time from account settings. Deletion removes your sessions, routes, and club memberships within 30 days.'
]

useSeoMeta({
  title: 'Privacy Policy | VMAP'
})
</script>

<template>
  <main class="mx-auto flex max-w-200 flex-col gap-5 px-gutter pt-35 pb-section md:gap-6 md:pt-40">
    <!-- Framer "Privacy page": cùng khung với Legal document (maxW 800), gap 20 / 24 / 24 -->
    <p class="font-mono text-eyebrow font-medium text-accent uppercase">
      Legal
    </p>
    <h1 class="text-display-lg text-fg">
      Privacy Policy
    </h1>
    <p v-for="(text, i) in paragraphs" :key="i" class="max-w-160 text-body-md text-fg-muted">
      {{ text }}
    </p>
  </main>
</template>
