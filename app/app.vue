<script setup lang="ts">
// Canonical + og:url theo route (bỏ query/hash), domain lấy từ runtimeConfig.public.siteUrl.
const route = useRoute()
const siteUrl = useRuntimeConfig().public.siteUrl
const canonical = computed(() => `${siteUrl}${route.path === '/' ? '/' : route.path.replace(/\/$/, '')}`)
useHead({
  link: [{ rel: 'canonical', href: canonical }]
})
useSeoMeta({
  ogUrl: canonical
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>
