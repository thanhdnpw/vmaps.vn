<script setup lang="ts">
// Footer (docs/design-spec.md §2 #7). Nhãn tiếng Anh giữ nguyên như ảnh design (còn sót từ template).
const columns = [
  {
    heading: 'Product',
    links: [
      { label: 'How it works', to: '/#how-it-works' },
      { label: 'Features', to: '/#features' },
      { label: 'Stories', to: '/#stories' }
    ]
  },
  {
    heading: 'Company',
    links: [
      { label: 'Changelog', to: '/changelog' },
      { label: 'Press', to: '/press' },
      // Framer đang trỏ mailto của template (hello@streaks.app), chờ email thật
      { label: 'Contact', to: '/#lien-he' }
    ]
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms & Conditions', to: '/legal/terms-and-conditions' },
      { label: 'Privacy Policy', to: '/privacy' }
    ]
  }
]
</script>

<template>
  <footer id="lien-he">
    <!-- Padding đáy gồm cả khoảng trống 52–68px Framer để lại dưới đường kẻ -->
    <div class="flex flex-col gap-14 bg-black px-gutter pt-14 pb-27 text-body-md md:pt-18 md:pb-31 lg:pt-25 lg:pb-29">
      <div class="flex flex-col gap-12 md:flex-row md:gap-30">
        <!-- Framer cố định khối brand cao 105 (chỉ có tác dụng trên phone, nơi nội dung thấp hơn) -->
        <div class="flex min-h-26.25 flex-col gap-2.5 md:w-64 md:shrink-0 lg:w-66">
          <NuxtLink to="/" class="self-start text-heading-sm text-fg">
            VMAP®
          </NuxtLink>
          <p class="text-fg-muted">
            Bản đồ Việt Nam cho mọi hành trình. Khám phá, tìm kiếm và dẫn đường với dữ liệu được phát triển cho Việt Nam.
          </p>
        </div>

        <!-- Phone: 2 cột, các hàng cao bằng nhau như Framer -->
        <nav class="grid flex-1 auto-rows-fr grid-cols-2 gap-y-12 md:grid-cols-3" aria-label="Chân trang">
          <div v-for="column in columns" :key="column.heading" class="flex flex-col gap-4">
            <p class="text-fg">
              {{ column.heading }}
            </p>
            <ul class="flex flex-col gap-3 md:gap-2.5">
              <li v-for="link in column.links" :key="link.label">
                <NuxtLink :to="link.to" class="whitespace-nowrap text-fg-muted transition-colors hover:text-fg">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- Phone: căn giữa, chừa chỗ hàng social icon (đang trống trên Framer: cao 24 + gap 32) -->
      <p class="mt-14 text-center text-fg md:mt-0 md:text-left">
        © 2026 VMAP
      </p>

      <div class="h-px bg-fg-secondary opacity-70" aria-hidden="true" />
    </div>

    <!-- Streak marquee trên Framer chưa có nội dung, chỉ còn dải accent cao 40 -->
    <div class="h-10 bg-accent" aria-hidden="true" />
  </footer>
</template>
