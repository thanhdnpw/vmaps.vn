<script setup lang="ts">
defineProps<{
  title: string
  version: string
  editedOn: string
}>()
</script>

<template>
  <!-- Framer: "Document title" + "Document meta" (gap 10, version gap 2) -->
  <header class="flex flex-col gap-6">
    <h1 class="text-display-xl text-fg">
      {{ title }}
    </h1>
    <p class="flex flex-wrap gap-2.5 text-body-md">
      <span class="flex gap-0.5 text-accent"><span>V</span><span>{{ version }}</span></span>
      <span class="text-fg-secondary" aria-hidden="true">-</span>
      <span class="text-fg-secondary">Last edited on</span>
      <time :datetime="editedOn" class="text-fg-secondary">{{ formatLegalDate(editedOn) }}</time>
    </p>
  </header>
</template>
