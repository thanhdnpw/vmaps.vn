<script setup lang="ts">
defineProps<{ entry: ChangelogEntry }>()
</script>

<template>
  <!-- Framer "Changelog Card": padding 24, gap 8, bo 12. Hover: nền accent, toàn bộ chữ accent/contrast -->
  <NuxtLink
    :to="`/changelog/${entry.slug}`"
    class="group flex flex-col gap-2 rounded-md bg-surface-card p-6 text-fg transition-colors duration-200 hover:bg-accent hover:text-fg-inverse"
  >
    <div class="flex items-center gap-2.5">
      <span class="font-mono text-eyebrow font-medium text-accent uppercase group-hover:text-fg-inverse">
        {{ entry.version }}
      </span>
      <span class="rounded-[3px] bg-white/6 px-1.5 py-0.75 font-mono text-eyebrow font-medium text-accent uppercase group-hover:text-fg-inverse">
        {{ entry.type }}
      </span>
      <time :datetime="entry.date" class="text-caption text-fg-secondary group-hover:text-fg-inverse">
        {{ entry.dateLabel }}
      </time>
    </div>
    <h2 class="text-heading-md">
      {{ entry.title }}
    </h2>
    <!-- HTML tĩnh trong repo (app/utils/changelog.ts), không phải input người dùng -->
    <!-- eslint-disable vue/no-v-html -->
    <div class="text-body-md" v-html="entry.body" />
    <!-- eslint-enable vue/no-v-html -->
  </NuxtLink>
</template>
