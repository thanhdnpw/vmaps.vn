<script setup lang="ts">
// Nội dung là HTML tĩnh trong repo (không phải input người dùng) nên dùng v-html.
defineProps<{ html: string }>()
</script>

<template>
  <!--
    Framer "Document body": p = body/md, h2 = display/lg, strong 700, link màu accent.
    Đoạn trống (<h2><br></h2>, <p><br></p>) là khoảng cách giữa các mục, giữ nguyên như CMS.
  -->
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="text-body-md text-fg [&_a]:text-accent [&_a[href]]:transition-opacity [&_a[href]]:hover:opacity-70 [&_h2]:text-display-lg [&_strong]:font-bold"
    v-html="html"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>
