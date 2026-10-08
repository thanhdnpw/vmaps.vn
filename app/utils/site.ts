// Link và điều hướng dùng chung (docs/design-spec.md §6).

export const STORE_LINKS = {
  android: 'https://play.google.com/store/apps/details?id=vn.tasco.app_tasco_maps',
  ios: 'https://apps.apple.com/vn/app/vmap/id6769729366'
} as const

// Framer chưa gắn link cho Bản đồ / Tài liệu / Liên hệ, tạm trỏ về anchor.
export const NAV_LINKS = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Bản đồ', to: '/#ban-do' },
  { label: 'Tài liệu', to: '/#tai-lieu' },
  { label: 'Liên hệ', to: '/#lien-he' }
] as const
