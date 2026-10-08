<script setup lang="ts">
// Button của Framer (docs/design-spec.md §5): `accent` = Standard Accent (cao 44), `dark` = Large Black (cao 56),
// `light` = biến thể sáng ở Routes (cao 56, nền text/primary), `accent-lg` = Large Accent (cao 56, trang 404).
// Link ngoài (http...) mở tab mới; link nội bộ đi qua router.
// Anchor `/#id` khi đang ở đúng trang thì tự cuộn mượt: router bỏ qua điều hướng trùng route nên bấm lần 2 sẽ không cuộn.
const props = withDefaults(defineProps<{
  href: string
  variant?: 'accent' | 'accent-lg' | 'dark' | 'light'
  icon?: boolean
}>(), {
  variant: 'accent',
  icon: true
})

const isExternal = computed(() => /^https?:\/\//.test(props.href))

const route = useRoute()
function onClick(event: MouseEvent) {
  const [path, id] = props.href.split('#')
  if (!id || path !== route.path || event.metaKey || event.ctrlKey || event.shiftKey) return
  const target = document.getElementById(id)
  if (!target) return
  event.preventDefault()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  history.replaceState(history.state, '', `#${id}`)
}
</script>

<template>
  <NuxtLink
    :to="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener' : undefined"
    class="inline-flex items-center justify-center gap-1.5 rounded-sm text-body-md transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="{
      'h-11 bg-accent px-5 text-fg-inverse shadow-button-accent focus-visible:outline-fg': variant === 'accent',
      'h-14 bg-accent px-7.5 text-fg-inverse shadow-button-accent focus-visible:outline-fg': variant === 'accent-lg',
      'h-14 bg-surface-dark px-7.5 text-fg shadow-button-dark focus-visible:outline-surface-dark': variant === 'dark',
      'h-14 bg-fg px-5 text-fg-inverse shadow-button-accent focus-visible:outline-fg': variant === 'light'
    }"
    @click="onClick"
  >
    <!-- Phosphor PlayCircle (fill) -->
    <svg
      v-if="icon"
      class="size-5 shrink-0"
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40.55,110.58-52,36A8,8,0,0,1,104,164V92a8,8,0,0,1,12.55-6.58l52,36a8,8,0,0,1,0,13.16Z" />
    </svg>
    <slot />
  </NuxtLink>
</template>
