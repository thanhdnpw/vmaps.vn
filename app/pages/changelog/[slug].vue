<script setup lang="ts">
const route = useRoute()
const entry = CHANGELOG_ENTRIES.find(e => e.slug === route.params.slug)

if (!entry) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy bản phát hành', fatal: true })
}

// Mô tả lấy từ body: bỏ thẻ HTML, cắt ~160 ký tự cho snippet tìm kiếm.
const plainBody = entry.body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
usePageSeo({
  title: `${entry.title} | VMAP Changelog`,
  description: plainBody.length > 160 ? `${plainBody.slice(0, 157).trimEnd()}…` : plainBody,
  type: 'article'
})
useSeoMeta({
  articlePublishedTime: entry.date
})
</script>

<template>
  <main class="mx-auto flex max-w-200 flex-col gap-5 px-gutter pt-38 pb-section md:gap-6 md:pt-46 lg:pt-56">
    <!--
      Framer "Release page": maxW 800, padding 96/20/64 · 120/48/96 · 160/100/140, gap 20 / 24 / 24.
      Trang này trên Framer có navbar nằm trong luồng (56 / 64) thay vì header cố định, nên padding trên
      cộng thêm phần đó để nội dung giữ đúng vị trí: 152 / 184 / 224.
    -->
    <div class="flex items-center gap-2.5 text-fg-secondary">
      <span class="font-mono text-eyebrow font-medium uppercase">{{ entry.version }}</span>
      <span class="font-mono text-eyebrow font-medium uppercase">{{ entry.type }}</span>
      <time :datetime="entry.date" class="text-caption">{{ entry.dateLabel }}</time>
    </div>
    <h1 class="text-display-lg text-fg">
      {{ entry.title }}
    </h1>
    <!-- HTML tĩnh trong repo (app/utils/changelog.ts), không phải input người dùng -->
    <!-- eslint-disable vue/no-v-html -->
    <div class="text-body-md text-fg" v-html="entry.body" />
    <!-- eslint-enable vue/no-v-html -->
  </main>
</template>
