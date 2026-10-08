<template>
  <!-- docs/design-spec.md §2 (#1): padding 140/20 · 160/48 · 200/100, gap copy → marquee 56 · 120 · 120 -->
  <section class="flex flex-col gap-14 overflow-hidden bg-accent pt-35 text-fg-inverse md:gap-30 md:pt-40 lg:pt-50">
    <div class="px-gutter">
      <div class="mx-auto flex max-w-170 flex-col items-center gap-6 text-center">
        <h1 class="text-display-xl text-balance">
          VMAP - Một bản đồ, mọi hành trình
        </h1>
        <p class="text-body-md text-balance text-fg-secondary">
          Khám phá, tìm kiếm và dẫn đường với dữ liệu được phát triển cho Việt Nam.
        </p>
        <AppButton :href="STORE_LINKS.android" variant="dark" class="w-full md:w-auto">
          Tải app
        </AppButton>
        <div class="flex h-5 items-center gap-2">
          <div class="flex gap-[1.75px]" role="img" aria-label="Đánh giá 5 sao">
            <svg v-for="i in 5" :key="i" class="size-3.25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true">
              <path d="M21.748 10.576 16.444 14.869l1.894 6.187c.127.253 0 .632-.252.758-.127.126-.253.126-.38.126s-.252 0-.378-.126l-5.177-3.788-5.303 3.788a.8.8 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313-5.177-4.167c-.252-.126-.379-.505-.252-.757.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506 0 .252-.126.505-.253.757" />
            </svg>
          </div>
          <span class="h-3.75 w-px bg-fg-secondary opacity-70" aria-hidden="true" />
          <p class="text-caption text-fg-secondary opacity-70">
            Miễn phí trên iOS và Android
          </p>
        </div>
      </div>
    </div>

    <HomePhoneMarquee />
  </section>
</template>
