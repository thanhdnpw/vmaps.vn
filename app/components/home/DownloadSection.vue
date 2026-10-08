<template>
  <!-- docs/design-spec.md §2 (#6): padding 40/20 · 56/48 · 120/100, cao 528 trên tablet/desktop -->
  <section id="tai-app" class="overflow-hidden bg-accent px-gutter pt-10 pb-16 text-fg-inverse md:h-132 md:pt-14 md:pb-0 lg:pt-30">
    <div class="flex flex-col gap-12.5 md:flex-row">
      <div class="flex flex-col gap-4 pt-8 md:w-91 md:shrink-0 lg:w-auto lg:flex-1">
        <h2 class="text-display-lg">
          Bắt đầu hành trình hôm nay
        </h2>
        <p class="text-body-md text-balance text-fg-secondary">
          Tìm kiếm địa điểm, khám phá dịch vụ và chọn lộ trình phù hợp với VMAP
        </p>
        <!-- Phone xếp dọc 2 badge như ảnh design -->
        <div class="flex flex-col items-start gap-2.5 pt-2.25 md:flex-row md:gap-2">
          <a :href="STORE_LINKS.android" target="_blank" rel="noopener" class="rounded-sm transition-opacity hover:opacity-85">
            <NuxtImg src="/images/download/google-play.png" alt="Tải VMAP trên Google Play" width="172" height="48" densities="x1 x2" class="h-12 w-43" />
          </a>
          <a :href="STORE_LINKS.ios" target="_blank" rel="noopener" class="rounded-sm transition-opacity hover:opacity-85">
            <NuxtImg src="/images/download/app-store.png" alt="Tải VMAP trên App Store" width="172" height="48" densities="x1 x2" class="h-12 w-43" />
          </a>
        </div>
      </div>

      <!-- Khung ảnh 348 (tablet) / 459 (desktop) như Framer, ảnh 292×362 căn giữa -->
      <div class="flex justify-center md:w-87 md:shrink-0 lg:w-114.75">
        <NuxtImg
          src="/images/download/app-preview.png"
          alt="Màn hình dẫn đường của VMAP trên iPhone"
          width="292"
          height="362"
          densities="x1 x2"
          class="h-90.5 w-73 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
