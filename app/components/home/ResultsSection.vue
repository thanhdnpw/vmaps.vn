<script setup lang="ts">
// Carousel `Company Result Card` (docs/design-spec.md §2 #3): autoplay 3s, kéo được, gap 20.
// Desktop/tablet 3 card mỗi lượt, phone 1 card (bản published bị bóp card còn 103px, làm theo ảnh design).
// Card ngoài lượt hiện vẫn lộ ra hai bên với opacity .15.

const cards = [
  {
    text: 'Địa chỉ, địa điểm và thông tin địa phương được cập nhật theo thực tế tại Việt Nam',
    photo: '/images/results/address.png',
    // Phosphor MapPinArea
    icon: 'M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z'
  },
  {
    text: 'Tìm tuyến đường phù hợp với tình hình giao thông và điều kiện đường đi.',
    photo: '/images/results/route.png',
    // Phosphor NavigationArrow
    icon: 'M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z'
  },
  {
    text: 'Tìm bãi đỗ xe, trạm thu phí, cây xăng, trạm sạc và dịch vụ cứu hộ.',
    photo: '/images/results/services.png',
    // Phosphor Car
    icon: 'M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z'
  },
  {
    text: 'Tìm địa điểm và thông tin bằng ngôn ngữ tự nhiên với AI.',
    photo: '/images/results/ai-search.png',
    // Phosphor Path
    icon: 'M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z'
  }
]

const count = cards.length
// 3 bản liên tiếp để luôn có card hai bên; vị trí thật nằm ở bản giữa.
const slides = [0, 1, 2].flatMap(copy => cards.map((card, i) => ({ ...card, key: `${copy}-${i}`, real: copy === 1 })))

const index = ref(count)
const animate = ref(true)

function go(step: number) {
  animate.value = true
  index.value += step
}

// Hết transition mà đã trôi ra ngoài bản giữa thì nhảy (không animation) về vị trí tương ứng trong bản giữa.
function onTransitionEnd(e: TransitionEvent) {
  if (e.target !== e.currentTarget || e.propertyName !== 'transform') return
  if (index.value >= count * 2 || index.value < count) {
    animate.value = false
    index.value = count + (((index.value - count) % count) + count) % count
  }
}

// Autoplay 3s, dừng khi đang kéo, khi tab ẩn hoặc khi người dùng muốn giảm chuyển động.
let timer: ReturnType<typeof setInterval> | undefined
const dragging = ref(false)

function startAutoplay() {
  stopAutoplay()
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    if (!dragging.value && document.visibilityState === 'visible') go(1)
  }, 3000)
}

function stopAutoplay() {
  if (timer) clearInterval(timer)
  timer = undefined
}

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)

// Kéo bằng chuột / vuốt: lệch quá 50px thì sang card kế tiếp.
const dragX = ref(0)
let startX = 0

function onPointerDown(e: PointerEvent) {
  dragging.value = true
  animate.value = false
  startX = e.clientX
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onPointerMove(e: PointerEvent) {
  if (dragging.value) dragX.value = e.clientX - startX
}

function onPointerUp() {
  if (!dragging.value) return
  dragging.value = false
  const delta = dragX.value
  dragX.value = 0
  if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1)
  else animate.value = true
  startAutoplay()
}
</script>

<template>
  <!-- Padding: phone 64/20, tablet 96/48, desktop 0/100 (theo Framer) -->
  <section class="overflow-clip bg-surface-subtle px-gutter py-section lg:py-0" aria-roledescription="carousel" aria-label="Tính năng nổi bật">
    <ul
      class="flex h-100 cursor-grab touch-pan-y gap-5 select-none active:cursor-grabbing md:h-75 lg:h-105.75"
      :class="{ 'transition-transform duration-500 ease-out': animate }"
      :style="{ transform: `translateX(calc(${-index} * (100% + 20px) / var(--per-view) + ${dragX}px))` }"
      @transitionend="onTransitionEnd"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <li
        v-for="(slide, i) in slides"
        :key="slide.key"
        class="slide relative flex shrink-0 flex-col justify-end gap-4 overflow-hidden rounded-lg bg-white p-7 transition-opacity duration-500"
        :class="{
          'opacity-15': i < index || i > index + 2,
          'opacity-15 md:opacity-100': i === index + 1 || i === index + 2
        }"
        :aria-hidden="slide.real ? undefined : 'true'"
      >
        <NuxtImg
          :src="slide.photo"
          alt=""
          width="360"
          densities="x1 x2"
          class="pointer-events-none absolute inset-0 size-full object-cover"
          loading="lazy"
          draggable="false"
        />
        <div class="absolute inset-0 bg-linear-to-b from-[rgb(84_84_84/0)] from-30% to-black to-80% opacity-85" aria-hidden="true" />
        <svg class="relative size-9 text-accent" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
          <path :d="slide.icon" />
        </svg>
        <h3 class="relative text-heading-sm text-balance text-fg">
          {{ slide.text }}
        </h3>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  --per-view: 1;
}

@media (width >= 810px) {
  ul {
    --per-view: 3;
  }
}

.slide {
  width: calc((100% - (var(--per-view) - 1) * 20px) / var(--per-view));
}
</style>
