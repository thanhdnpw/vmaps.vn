<script setup lang="ts">
import type { NuxtError } from '#app'

// error.vue thay thế toàn bộ app.vue nên phải tự gắn Header/Footer.
const props = defineProps<{ error: NuxtError }>()

// Design chỉ có trạng thái 404; lỗi khác dùng chung bố cục, đổi mã và tiêu đề.
const notFound = computed(() => props.error.statusCode === 404)
const title = computed(() => notFound.value ? 'Page not found' : 'Something went wrong')
const message = computed(() => notFound.value
  ? 'The page you are looking for doesn’t exist or has been moved. Please go back to the homepage.'
  : 'An unexpected error occurred. Please go back to the homepage and try again.')

useSeoMeta({
  title: () => `${title.value} | VMAP`
})
</script>

<template>
  <div>
    <SiteHeader />
    <main>
      <!-- Framer "Not found section": cao 100vh, ảnh nền neo đỉnh, nội dung căn giữa; padding theo nhịp section -->
      <section class="relative isolate flex min-h-svh flex-col items-center justify-center px-gutter py-section">
        <!-- Ảnh tĩnh thay vì NuxtImg: trang lỗi không được prerender nên biến thể /_ipx/ không tồn tại trên bản static -->
        <img
          src="/images/not-found/runners.jpg"
          alt=""
          width="1200"
          height="1365"
          fetchpriority="high"
          class="absolute inset-0 -z-10 size-full object-cover object-top"
        >

        <!-- Framer "Not found content": maxW 700, bo 20, padding 40/24/24 · 48, gap 12 · 20 -->
        <div class="flex max-w-175 flex-col items-center gap-3 rounded-lg bg-surface-dark px-6 pt-10 pb-6 text-center md:gap-5 md:p-12">
          <p class="text-display-xl text-signal">
            {{ error.statusCode }}
          </p>
          <div class="flex w-full flex-col items-center gap-5">
            <h1 class="text-display-xl text-fg">
              {{ title }}
            </h1>
            <!-- Rộng theo tiêu đề (w-0 min-w-full: không góp vào độ rộng card), tối đa 560 -->
            <p class="w-0 min-w-full max-w-140 text-body-md text-fg">
              {{ message }}
            </p>
            <AppButton href="/" variant="accent-lg" class="w-full md:w-auto">
              Go back home
            </AppButton>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>
