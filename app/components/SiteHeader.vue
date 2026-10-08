<script setup lang="ts">
// Header cố định: announcement ticker (36) + navbar (64, phone 56). docs/design-spec.md §2 (#0).
const menuOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <!-- Ticker trên Framer chưa có nội dung, chỉ còn dải màu accent -->
    <div class="h-9 bg-accent" aria-hidden="true" />

    <nav class="flex h-14 items-center justify-between bg-surface-subtle px-5 md:h-16 md:px-6.25" aria-label="Chính">
      <NuxtLink to="/" class="text-heading-sm text-fg">
        VMAP®
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in NAV_LINKS"
          :key="link.label"
          :to="link.to"
          class="text-caption text-fg transition-opacity hover:opacity-70"
        >
          {{ link.label }}
        </NuxtLink>
        <AppButton :href="DOWNLOAD_LINK">
          Tải app
        </AppButton>
      </div>

      <button
        type="button"
        class="size-7 text-fg md:hidden"
        :aria-label="menuOpen ? 'Đóng menu' : 'Mở menu'"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <!-- Phosphor List / X (regular) -->
        <svg viewBox="0 0 256 256" fill="currentColor" class="size-full" aria-hidden="true">
          <path v-if="menuOpen" d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
          <path v-else d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
        </svg>
      </button>
    </nav>

    <div
      v-show="menuOpen"
      id="mobile-menu"
      class="flex flex-col gap-1 border-t border-line bg-surface-subtle px-5 pt-2 pb-5 md:hidden"
    >
      <NuxtLink
        v-for="link in NAV_LINKS"
        :key="link.label"
        :to="link.to"
        class="py-3 text-body-md text-fg"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
      <AppButton :href="DOWNLOAD_LINK" class="mt-3 w-full" @click="menuOpen = false">
        Tải app
      </AppButton>
    </div>
  </header>
</template>
