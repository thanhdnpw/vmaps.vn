<script setup lang="ts">
// Stories (docs/design-spec.md §2 #4): Features (4a) + How it works (4b) trên cùng nền tối.
// Framer khoá Features ở 1200px nên tablet bị bóp còn 612px, phone tràn ngang. Ở đây dựng lại:
// desktop/tablet 2 cột (heading sticky), tablet giữ khung 612px như ảnh design, phone 1 cột.

const features = [
  {
    title: 'Kết nối hệ sinh thái VETC',
    description: 'Tiếp cận các dịch vụ trên hành trình như thu phí, đỗ xe, ví điện tử và các tiện ích dành cho chủ phương tiện.',
    accent: true,
    // Phosphor Command
    icon: 'M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z'
  },
  {
    title: 'Dữ liệu bản đồ chi tiết',
    description: 'Kết hợp dữ liệu bản đồ và hình ảnh vệ tinh để tái hiện không gian và hạ tầng một cách trực quan.',
    accent: false,
    // Phosphor MapTrifold
    icon: 'M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z'
  },
  {
    title: 'Bản đồ 3D trực quan',
    description: 'Khám phá công trình, hạ tầng và không gian xung quanh với dữ liệu bản đồ 3D.',
    accent: false,
    // Phosphor Cube
    icon: 'M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z'
  }
]

const steps = [
  { title: 'Tìm kiếm', description: 'Tìm địa điểm, dịch vụ và những điều bạn cần trên bản đồ.', icon: 'search' },
  { title: 'Chọn hành trình', description: 'Xem thông tin giao thông và lựa chọn tuyến đường phù hợp với nhu cầu di chuyển.', icon: 'navigation' },
  { title: 'Di chuyển', description: 'Dẫn đường và tiếp cận các dịch vụ tiện ích trên suốt hành trình.', icon: 'move' }
] as const
</script>

<template>
  <section class="bg-surface-dark px-gutter pt-section pb-5 md:pb-section">
    <!-- 4a. Features -->
    <div class="mx-auto flex flex-col gap-block md:max-w-153 md:flex-row md:gap-14 md:py-35 lg:max-w-none">
      <div class="flex flex-col gap-2.5 md:sticky md:top-40 md:flex-1 md:self-start">
        <!-- Ảnh design phone không có eyebrow -->
        <p class="hidden font-mono text-eyebrow font-medium text-accent uppercase md:block">
          Vmap
        </p>
        <h2 class="text-display-lg text-balance text-fg">
          Điểm khác biệt
        </h2>
        <p class="text-body-lg text-fg">
          Được xây dựng cho cách người Việt di chuyển
        </p>
      </div>

      <ul class="flex flex-col gap-6 md:flex-1">
        <li
          v-for="feature in features"
          :key="feature.title"
          class="flex flex-col gap-7.5 rounded-lg p-8 shadow-card"
          :class="feature.accent ? 'bg-accent text-fg-inverse' : 'border border-line bg-surface-card text-fg'"
        >
          <div
            class="flex size-14 items-center justify-center rounded-sm"
            :class="feature.accent ? 'bg-black/20' : 'bg-surface-subtle text-accent'"
          >
            <svg class="size-8" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
              <path :d="feature.icon" />
            </svg>
          </div>
          <div class="flex max-w-[90%] flex-col gap-2.5">
            <h3 class="text-heading-md">
              {{ feature.title }}
            </h3>
            <p class="text-body-lg opacity-80">
              {{ feature.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 4b. How it works -->
    <div class="mt-40.5 flex flex-col items-center gap-12 rounded-lg bg-accent px-5 pt-12 pb-30 text-center text-fg-inverse md:mt-30.25 md:px-10 md:pt-30 md:pb-40 lg:mt-32.25 lg:px-20 lg:pb-50">
      <h2 class="text-display-lg text-balance">
        Bắt đầu hành trình với VMAP
      </h2>

      <ol class="flex w-full flex-col gap-5.5 text-left md:flex-row md:gap-4">
        <li v-for="step in steps" :key="step.title" class="flex flex-1 flex-col gap-5 rounded-lg bg-white p-5">
          <div class="flex size-12 items-center justify-center rounded-md bg-accent">
            <svg
              class="size-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <template v-if="step.icon === 'search'">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </template>
              <polygon v-else-if="step.icon === 'navigation'" points="3 11 22 2 13 21 11 13 3 11" />
              <template v-else>
                <polyline points="5 9 2 12 5 15" />
                <polyline points="9 5 12 2 15 5" />
                <polyline points="15 19 12 22 9 19" />
                <polyline points="19 9 22 12 19 15" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </template>
            </svg>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-heading-sm">
              {{ step.title }}
            </h3>
            <p class="max-w-55 text-body-md text-balance">
              {{ step.description }}
            </p>
          </div>
        </li>
      </ol>

      <AppButton :href="STORE_LINKS.android" variant="dark" class="w-full md:w-auto">
        Tải app
      </AppButton>
    </div>
  </section>
</template>
