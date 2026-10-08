<template>
  <!-- docs/design-spec.md §2 (#5): ảnh full-bleed cao 100vh, nội dung căn đáy-trái -->
  <section class="relative isolate flex min-h-svh items-end px-gutter py-section">
    <NuxtImg
      src="/images/routes/hanoi-skyline.jpg"
      alt=""
      sizes="xs:100vw md:100vw lg:100vw"
      class="absolute inset-0 -z-10 size-full object-cover object-bottom"
      loading="lazy"
    />
    <div class="scrim absolute inset-0 -z-10" aria-hidden="true" />

    <div class="flex flex-col gap-3 text-fg">
      <h2 class="text-display-lg text-balance">
        Khám phá hành trình mới
      </h2>
      <div class="flex flex-col items-start gap-4">
        <p class="text-body-lg text-balance">
          Bản đồ Việt Nam, dẫn đường thông minh và các tiện ích di chuyển — tất cả trong một ứng dụng.
        </p>
        <!-- Ảnh design tablet/phone không có nút này -->
        <div class="hidden lg:block">
          <AppButton :href="STORE_LINKS.android" variant="light">
            Tải app
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scrim đổi điểm dừng theo breakpoint như Framer */
.scrim {
  background: linear-gradient(rgb(0 0 0 / 0) 12%, #000 61%);
}

@media (width >= 810px) {
  .scrim {
    background: linear-gradient(rgb(0 0 0 / 0) 37%, #000 64%);
  }
}

@media (width >= 1200px) {
  .scrim {
    background: linear-gradient(rgb(0 0 0 / 0) 39%, #000 76%);
  }
}
</style>
