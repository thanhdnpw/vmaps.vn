<script setup lang="ts">
// Button của Framer (docs/design-spec.md §5): `accent` = Standard Accent (cao 44), `dark` = Large Black (cao 56),
// `light` = biến thể sáng ở Routes (cao 56, nền text/primary).
withDefaults(defineProps<{
  href: string
  variant?: 'accent' | 'dark' | 'light'
  icon?: boolean
}>(), {
  variant: 'accent',
  icon: true
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="inline-flex items-center justify-center gap-1.5 rounded-sm text-body-md transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="{
      'h-11 bg-accent px-5 text-fg-inverse shadow-button-accent focus-visible:outline-fg': variant === 'accent',
      'h-14 bg-surface-dark px-7.5 text-fg shadow-button-dark focus-visible:outline-surface-dark': variant === 'dark',
      'h-14 bg-fg px-5 text-fg-inverse shadow-button-accent focus-visible:outline-fg': variant === 'light'
    }"
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
  </a>
</template>
