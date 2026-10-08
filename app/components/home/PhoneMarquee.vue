<script setup lang="ts">
// Phone marquee của Hero: 6 máy 230×260 (chỉ lộ nửa trên), gap 40, chạy trái 30px/s.
// Mỗi máy = bóng (opacity .7) + screenshot 210 bo 20 lệch (9, 10) + khung máy 226.66 căn giữa.
const phones = [
  { src: '/images/hero/screen-1.png', h: 488, alt: 'Màn hình Đóng góp bản đồ của VMAP' },
  { src: '/images/hero/screen-2.png', h: 488, alt: 'Màn hình chi tiết địa điểm trên VMAP' },
  { src: '/images/hero/screen-3.png', h: 426, alt: 'Bản đồ đường phố Hà Nội trên VMAP' },
  { src: '/images/hero/screen-4.png', h: 428, alt: 'Màn hình tìm kiếm theo danh mục trên VMAP' },
  { src: '/images/hero/screen-5.png', h: 435, alt: 'Màn hình thời tiết và chất lượng không khí trên VMAP' },
  { src: '/images/hero/screen-6.png', h: 387, alt: 'Màn hình ứng dụng VMAP' }
]
</script>

<template>
  <div class="marquee h-65 overflow-hidden">
    <div class="marquee-track flex w-max">
      <!-- 2 bản giống nhau để cuộn liền mạch; bản thứ 2 ẩn với trình đọc màn hình -->
      <ul
        v-for="copy in 2"
        :key="copy"
        class="flex shrink-0 gap-10 pr-10"
        :aria-hidden="copy === 2 ? 'true' : undefined"
      >
        <li v-for="phone in phones" :key="phone.src" class="relative h-65 w-57.5 shrink-0 overflow-hidden">
          <NuxtImg
            src="/images/hero/phone-shadow.png"
            alt=""
            width="230"
            height="465"
            class="absolute inset-x-0 top-0 h-116.25 w-57.5 max-w-none opacity-70"
          />
          <NuxtImg
            :src="phone.src"
            :alt="copy === 1 ? phone.alt : ''"
            width="420"
            sizes="210px"
            densities="x1 x2"
            :style="{ height: `${phone.h}px` }"
            class="absolute top-2.5 left-2.25 w-52.5 max-w-none rounded-lg object-cover"
            loading="lazy"
          />
          <NuxtImg
            src="/images/hero/phone-frame.png"
            alt=""
            width="227"
            height="466"
            densities="x1 x2"
            class="absolute top-0 left-1/2 h-116.5 w-56.75 max-w-none -translate-x-1/2"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* 1 bản = 6 × (230 + 40) = 1620px, 30px/s → 54s */
.marquee-track {
  animation: marquee 54s linear infinite;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
