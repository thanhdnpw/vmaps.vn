// Link và điều hướng dùng chung (docs/design-spec.md §6).

export const STORE_LINKS = {
  android: 'https://play.google.com/store/apps/details?id=vn.tasco.app_tasco_maps',
  ios: 'https://apps.apple.com/vn/app/vmap/id6769729366'
} as const

// Mọi nút "Tải app" dẫn về box tải app ở trang chủ (DownloadSection), nơi có link 2 store.
export const DOWNLOAD_LINK = '/#tai-app'

// Framer chưa gắn link cho Bản đồ / Tài liệu / Liên hệ, tạm trỏ về anchor.
export const NAV_LINKS = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Bản đồ', to: '/#ban-do' },
  { label: 'Tài liệu', to: '/#tai-lieu' },
  { label: 'Liên hệ', to: '/#lien-he' }
] as const

// Thông tin doanh nghiệp theo đăng ký kinh doanh (masothue.com/0111570157-cong-ty-co-phan-vmaps).
export const COMPANY = {
  name: 'Công ty Cổ phần VMAPS',
  internationalName: 'VMAPS Joint Stock Company',
  taxId: '0111570157',
  foundingDate: '2026-07-15',
  address: {
    street: 'Tầng 25 Tòa nhà Tasco, Lô HH2-2, đường Phạm Hùng',
    locality: 'Phường Từ Liêm',
    region: 'Hà Nội',
    country: 'VN'
  },
  phone: '024 6668 6863',
  phoneHref: 'tel:+842466686863'
} as const

export const COMPANY_ADDRESS = `${COMPANY.address.street}, ${COMPANY.address.locality}, ${COMPANY.address.region}`
