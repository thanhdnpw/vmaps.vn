<script setup lang="ts">
import type { NuxtError } from '#app'

// error.vue thay thế toàn bộ app.vue nên phải tự gắn Header/Footer.
defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: 'Page not found | VMAP'
})
</script>

<template>
  <div>
    <SiteHeader />
    <main>
      <!-- Framer "Not found section": cao 100vh, ảnh nền neo đỉnh, nội dung căn giữa; padding theo nhịp section -->
      <section class="relative isolate flex min-h-svh flex-col items-center justify-center px-gutter py-section">
        <NuxtImg
          src="/images/not-found/runners.jpg"
          alt=""
          sizes="xs:100vw md:100vw lg:100vw"
          class="absolute inset-0 -z-10 size-full object-cover object-top"
          preload
        />
      </section>
    </main>
    <SiteFooter />
  </div>
</template>
