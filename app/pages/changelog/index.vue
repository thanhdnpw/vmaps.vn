<script setup lang="ts">
usePageSeo({
  title: 'Changelog | VMAP',
  description: 'Nhật ký cập nhật của VMAP: tính năng mới, cải tiến và bản sửa lỗi qua từng phiên bản.'
})
</script>

<template>
  <main class="mx-auto flex max-w-200 flex-col gap-5 px-gutter pt-35 pb-section md:gap-14 md:pt-40">
    <!-- Framer "Changelog page": khung 800 như Legal/Privacy, gap 20 / 56 / 56 -->
    <header class="flex flex-col gap-4">
      <p class="font-mono text-eyebrow font-medium text-accent uppercase">
        Changelog
      </p>
      <h1 class="text-display-lg text-fg">
        What we shipped
      </h1>
      <p class="text-body-md text-fg">
        Every release, newest first. Follow along as Streaks gets better.
      </p>
    </header>

    <!-- Framer "Release list": 1 cột, tablet 2 cột với các hàng cao bằng nhau; card giữ chiều cao riêng (không kéo giãn) -->
    <div class="grid items-start gap-4 md:auto-rows-fr md:grid-cols-2 lg:auto-rows-auto lg:grid-cols-1">
      <ChangelogReleaseCard v-for="entry in CHANGELOG_ENTRIES" :key="entry.slug" :entry="entry" />
    </div>
  </main>
</template>
