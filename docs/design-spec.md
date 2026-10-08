# VMAP landing page: design spec

Nguồn: Framer project (đọc qua Framer MCP) + bản published `https://smart-staple-745598.framer.app` (đo computed style bằng Playwright ở 3 viewport 1200 / 810 / 390).
Ngày đọc: 2026-10-08. Trang chính: `/` (nodeId `R_id6v0vz`).

> Lưu ý nguồn: Framer MCP chỉ trả XML của page `/` (Desktop). `getNodeXml` lỗi "Node is not a text node" với component, Design System page và các page khác, còn variant Tablet/Phone không trả children. Vì vậy giá trị nội bộ component và override theo breakpoint lấy từ bản published.

---

## 1. Pages

| Path | Ghi chú |
|---|---|
| `/` | Landing chính (spec này) |
| `/legal/:slug` | CMS, Terms / Privacy |
| `/privacy` | |
| `/changelog`, `/changelog/:slug` | CMS, dùng `Changelog Card` |
| `/press` | |
| `/404` | |
| `/template` | Trang mẫu, có thể bỏ |

Meta title đang là `Streaks: Train together, move better` (còn sót từ template), cần đổi khi build.

---

## 2. Sections trang `/` (thứ tự từ trên xuống)

Container nội dung: `maxWidth 1200px`, padding ngang 100 / 48 / 20 (desktop / tablet / phone).

| # | Section (tên layer) | Nền | Padding D / T / P | Gap D / T / P | Nội dung |
|---|---|---|---|---|---|
| 0 | **Header** (fixed, top 0, cao 100 = ticker 36 + navbar 64; phone 92 = 36 + 56) | — | — | — | Announcement ticker (nền `accent/base`, cao 36) + Navbar (nền `bg/subtle`). Navbar desktop: padding `10px 25px`, logo "VMAP®" (Geist 600 20px), nav links (gap 32px, Geist 14px): Trang chủ / Bản đồ / Tài liệu / Liên hệ + nút "Tải app" (Button · Standard Accent). Phone: padding `14px 20px`, ẩn nav links, hiện menu icon 28×28 |
| 1 | **Hero** | `accent/base` | 200/100/0 · 160/48/0 · 140/20/0 | 120 · 120 · 56 | Hero copy (maxW 680, gap 24, căn giữa): H1 `display/xl` "VMAP - Một bản đồ, mọi hành trình", sub `body/md`, nút "Tải app" (Button · Large Black, cao 56), proof line (5 sao 13×12, divider 1×15 `text/secondary` @0.7, caption "Miễn phí trên iOS và Android" @0.7). Bên dưới: **Phone marquee ticker** (cao 260, speed 30, gap 40, chạy trái), 6 ảnh phone 230×260, screenshot bo 20px |
| 2 | **Benefits** | `bg/Dark` | 140/100 · 96/48 · 64/20 | 56 · 48 · 40 | Heading căn giữa (maxW 720, gap 12): eyebrow "THIẾT KẾ CHO VIỆT NAM", H2 `display/lg` "Mọi điều bạn cần cho mỗi hành trình", sub `body/lg` @0.8 (maxW 600) |
| 3 | **Why section / Result cards** | `bg/subtle` | 0/100 · 96/48 · 64/20 | 56 · 48 · 40 | Carousel `Company Result Card` (autoplay 3s, drag, 3 item/view, gap 20, cao 440; tablet 300, phone 400). 4 card: địa chỉ VN / tuyến đường theo giao thông / bãi đỗ-trạm thu phí-xăng-sạc-cứu hộ / tìm bằng AI |
| 4 | **Stories** (wrapper) | `bg/Dark` | 140/100 · 96/48 · 64/20/20 | 56 · 48 · 40 | Chứa 4a và 4b |
| 4a | ↳ **Features** | `bg/Dark` | 140/100 (lồng thêm trong Stories) | 56 | 2 cột: trái là heading sticky (top 160): label mono "Vmap", "Điểm khác biệt", "Được xây dựng cho cách người Việt di chuyển" (maxW 560). Phải là grid 1 cột, gap 24, maxW 560, gồm 3 `Feature Card`: VETC (variant màu accent), Dữ liệu bản đồ chi tiết, Bản đồ 3D (variant tối) |
| 4b | ↳ **How it works** | `accent/base` + ảnh nền absolute | 120/80/200 · 120/40/160 · 48/20/100 | — | Bo 20px, maxW 1200. H2 `display/lg` "Bắt đầu hành trình với VMAP", 3 step card ngang (gap 16; phone xếp dọc, gap 22): Tìm kiếm / Chọn hành trình / Di chuyển. CTA "Tải app" (Large Black) |
| 5 | **Routes** (full-bleed photo) | Ảnh + scrim | 140/100 · 96/48 · 64/20 | 56 · 48 · 40 | Cao `100vh`, nội dung căn đáy-trái: H2 `display/lg` "Khám phá hành trình mới", sub `body/lg`, nút "Tải app" (variant sáng, màu `text/primary`) |
| 6 | **Download** | `accent/base` | 120/100/0 · 56/48/0 · 40/20/0 | 50 (row wrap) | Copy (maxW 530, pt 32, gap 16): H2 "Bắt đầu hành trình hôm nay", body, 2 store badge 172×48 (bo 10, border 1px `accent/contrast`). Bên phải là ảnh app preview 459×362. Cao 528 trên desktop |
| 7 | **Footer** | `bg/Black` `#000` | 100/100/64 · 72/48 · 56/20 | 56 | Top: brand (VMAP® + blurb `text/on-dark-muted`) và 3 cột link (Product / Company / Legal), gap 120 (phone xếp dọc, gap 48). Bottom bar: © 2026 VMAP + social icons. Cuối trang có **Streak marquee** (cao 40, nền accent, gap 100) |

Nội dung footer: Product (How it works, Features, Stories), Company (Changelog, Press, Contact), Legal (Terms & Conditions, Privacy Policy). Link còn tiếng Anh từ template.

Phần tử ngoài canvas (không render): ghi chú "ImportantReadAndThenDelete", "SpecialDeal", "BuyMeACoffee", và text ghi chú hướng sản phẩm sau này (contributors / business owners / governmental agencies). Bỏ qua khi build.

---

## 3. Design tokens

### 3.1 Màu (Framer color styles)

Theme thực tế là tối với accent vàng chanh. Dark variant gần như trùng light, trừ `accent/base` và `Border`.

| Token | Light | Dark | Dùng cho |
|---|---|---|---|
| `accent/base` | `#C4F135` rgb(196,241,53) | `#D6FF4B` | Nền Hero, How it works, Download, ticker, nút accent, feature card nổi bật, nền icon step |
| `base` | `#D6FF4B` | `#D6FF4B` | (trùng `accent/base` dark, có thể gộp) |
| `accent/contrast` | `#101114` | | Chữ/viền trên nền accent |
| `accent/Signal` | `#FF6A33` | | Màu nhấn phụ (cam), chưa thấy dùng trên `/` |
| `bg/Dark` | `#0E0F12` | | Nền section tối, nút Large Black |
| `bg/subtle` | `#16181C` | | Navbar, section result, icon wrapper |
| `bg/card` | `rgba(255,255,255,0.02)` | | Feature card tối |
| `bg/Black` | `#000000` | | Footer |
| `bg/White` | `#FFFFFF` | | Step card, result card |
| `border/subtle` | `#2A2E35` | | Viền trên nền tối |
| `Border` | `#DBDAD3` | `#2B2B2B` | Viền trên nền sáng |
| `text/primary` | `#F4F2EC` | | Chữ chính trên nền tối |
| `text/on-dark` | `#F4F2EC` | | (trùng `text/primary`) |
| `text/on-dark-muted` | `#9AA1AC` | | Chữ phụ footer, link footer |
| `text/secondary` | `#515254` | | Chữ phụ trên nền sáng, divider |
| `text/inverse` | `#101114` | | Chữ trên nền accent/trắng |

### 3.2 Typography

Font: **Geist** (400, 500, 600) và **Geist Mono** (500), lấy từ Google Fonts.

| Style | Tag | Font | Size D | Size T | Size P | Line-height | Letter-spacing | Khác |
|---|---|---|---|---|---|---|---|---|
| `display/xl` | h1 | Geist 600 | 72 | 64 | 56 | 1.05em | -0.04em | |
| `display/lg` | h2 | Geist 600 | 48 | 42 | 36 | 1.1em | -0.015em | |
| `stat` | p | Geist 600 | 56 | ? | ? | 1em | -0.01em | |
| `heading/md` | h3 | Geist 600 | 28 | 28 | 22 | 1.2em | 0 | Feature card title |
| `heading/sm` | h4 | Geist 600 | 20 | 20 | 18 | 1.4em (P: 1.3) | 0 | Step title, logo |
| `body/lg` | p | Geist 400 | 18 | 17 | 16 | 1.5em | 0 | |
| `body/md` | p | Geist 400 | 16 | 16 | 15 | 1.5em | 0 | |
| `caption` | p | Geist 400 | 14 | 14 | 14 | 1.4em | 0 | Nav link |
| `eyebrow` | p | Geist Mono 500 | 12 | 12 | 12 | 1.4em | 0.06em | uppercase |
| `on-accent/*` | | (copy của display-xl, display-lg, heading-md, heading-sm, body-md) | | | | | | Cùng thông số, khác màu chữ (`text/inverse`) để dùng trên nền accent |

Size T/P đo từ bản published. "?" là chưa thấy dùng trên `/`.
Nút: Geist 400, 16px / 24px (phone 15px).

### 3.3 Spacing

Scale gap/padding xuất hiện trên trang (px):
`1.75 · 6 · 8 · 10 · 12 · 16 · 20 · 22 · 24 · 28 · 30 · 32 · 40 · 48 · 50 · 56 · 64 · 72 · 80 · 96 · 100 · 120 · 140 · 160 · 200`

Đề xuất chuẩn hoá thành scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 64 · 80 · 96 · 120 · 140 · 160 · 200`. Các giá trị lẻ (1.75, 6, 10, 22, 28, 30, 50, 72, 100) nên gộp vào giá trị gần nhất khi build.

Section rhythm:

| | Desktop | Tablet | Phone |
|---|---|---|---|
| Padding dọc section | 140 | 96 | 64 |
| Padding ngang section | 100 | 48 | 20 |
| Gap giữa khối trong section | 56 | 48 | 40 |
| Hero padding-top (chừa header) | 200 | 160 | 140 |
| Hero gap copy → marquee | 120 | 120 | 56 |
| Max content width | 1200 | | |

### 3.4 Bo góc

| Giá trị | Dùng cho |
|---|---|
| `10px` | Button, store badge, icon wrapper 56×56 |
| `12px` | Step icon container |
| `20px` | Card (result, feature, step), How it works block, phone screenshot |
| `40px` | Hiếm (2 chỗ, phần tử phụ) |
| `0` | Section |

Một số giá trị lẻ (8, 11, 15) chỉ xuất hiện 1–2 lần, coi như noise.

### 3.5 Shadow

- Button Standard Accent: `0 0.6px 0.6px -1.25px rgba(0,0,0,.72), 0 2.29px 2.29px -2.5px rgba(0,0,0,.64), 0 10px 10px -3.75px rgba(0,0,0,.25)`
- Button Large Black: như trên với alpha `.25 / .22 / .09` (blur 0.48 / 1.83 / 8)
- Feature card: `0 10px 30px -20px rgba(0,0,0,.25)`

### 3.6 Motion

- Smooth scroll: Lenis (intensity 12, vertical).
- Ticker: announcement (header), phone marquee (speed 30, hướng trái, gap 40), streak marquee ở footer (gap 100).
- Carousel result cards: autoplay 3s, kéo được.
- Features heading `position: sticky; top: 160px`.

---

## 4. Breakpoints

Theo media query của Framer:

| Tên | Range | Frame thiết kế |
|---|---|---|
| Desktop | `≥ 1200px` | 1200 |
| Tablet | `810px – 1199.98px` | 810 |
| Phone | `≤ 809.98px` | 390 |

Thay đổi layout chính theo breakpoint:

- **Header**: phone ẩn nav links, hiện menu icon (chưa kiểm tra nút CTA trên phone) (navbar cao 56, desktop/tablet cao 64).
- **Hero buttons**: phone chuyển sang cột.
- **Features (4a)**: desktop 2 cột với heading sticky. Tablet vẫn để row nên grid card chỉ còn rộng 278px. Phone: section bị fixed width 1200 và padding 100 nên tràn ngang (đo được rộng 518–726px trên viewport 375). **Đây là lỗi trong Framer, khi build phải làm lại responsive:** tablet/phone xếp 1 cột, bỏ sticky. Trên phone heading của khối này cũng không render.
- **Steps (How it works)**: desktop/tablet 3 cột ngang, phone 1 cột.
- **Download**: tablet/phone xếp dọc (ảnh preview xuống dưới copy).
- **Footer top**: phone xếp dọc, các cột link wrap (gap 48).

---

## 5. Component lặp lại

| Component | Framer ID | Số lần dùng trên `/` | Variants / props | Spec |
|---|---|---|---|---|
| **Button** | `Tnz4seCKc` | 4 (header, hero, how-it-works, routes) | `Standard Accent` (44h, padding 15/20, nền accent, chữ `text/inverse`); `Large Black` (56h, padding 20/30, nền `bg/Dark`, chữ `text/primary`); variant sáng (`zMIqz4YH_`, dùng ở Routes). Props: label, link, icon (Phosphor, ví dụ `PlayCircle`), show-icon (bool), icon color | Bo 10, gap icon–label 6, icon 20×20, Geist 16/24 |
| **Topbar** (Header) | `lWUcIJP0H` | 1 (layout chung) | Desktop / Phone | Xem section 0 |
| **Feature Card** | `Kym4ifyAB` | 3 | `Left Color` (nền accent, chữ tối, icon wrapper `rgba(0,0,0,.2)`); `Left` (nền `bg/card`, chữ sáng, icon wrapper `bg/subtle`). Props: show icon, icon name (Phosphor: Command, MapTrifold, Cube), title, show description, description | Padding 32, gap 30, bo 20, icon wrapper 56×56 bo 10. Title `heading/md`, desc `body/lg` |
| **Company Result Card** | `I3dQcoDNp` | 4 (trong carousel) | Variant `Default`. Props: text, icon (Phosphor: MapPinArea, NavigationArrow, Car, Path) | 315×417 (thiết kế 360×440), padding 28, bo 20, ảnh nền + photo scrim, card icon 36×36, text `heading/sm` màu sáng |
| **Step card** (không phải component, lặp inline ×3) | | 3 | | Nền trắng, bo 20, padding 20, gap 20; icon box nền accent bo 12 padding 10 với icon 28×28 `#101114`; title `heading/sm`, desc `body/md` (width 220) |
| **Store badge** (inline ×2) | | 2 | Android / iOS | 172×48, bo 10, border 1px `accent/contrast`, ảnh badge |
| **Marquee phone** (inline ×6) | | 6 | | 230×260, phone shadow + screenshot 210×488 bo 20 + phone frame |
| **Instagram ticker / row / card** (desktop + mobile) | `e3fPQ3wLS`, `tRJ8WMxe5`, `x_BV4reOJ`, `Q9BrqeIWu`, `R8tJHQdL7` | 0 trên `/` | | Còn sót từ template, chưa dùng |
| **Feature Block** | `cRJt9HLAk` | 0 | | Chưa dùng |
| **Quote Card** | `yDWoi2V96` | 0 (có `TestimonialsList` ngoài canvas) | | Chưa dùng |
| **FAQ Accordion** | `UpqEA6qxk` | 0 | | Chưa dùng |
| **Changelog Card** | `QyLFnpItS` | Trang `/changelog` | | |
| **Underline Button** | `NlL5Mcn_O` | ? | | Có thể dùng ở footer hoặc legal |
| **Remix CTA** | `B2GydN2XV` | ? | | Của template Framer, bỏ |

Icon: **Phosphor** (code components `Phosphor.tsx`, `Phosphor_1.tsx`, `Phosphor_2.tsx`). Tên icon đang dùng: PlayCircle, Command, MapTrifold, Cube, MapPinArea, NavigationArrow, Car, Path, cùng 3 icon step (search, navigation, move) từ bộ icon khác. Star rating dùng component `StarAlt`.

---

## 6. Ghi chú để build

1. Accent có 3 biến thể gần nhau (`#C4F135`, `#D6FF4B` ở `base` và `accent/base` dark). Cần chốt 1 giá trị.
2. `text/primary` và `text/on-dark` trùng nhau; `text/inverse`, `accent/contrast` gần trùng `bg/Dark`. Có thể gộp token.
3. Text style `on-accent/*` chỉ khác màu chữ, nên khi build làm thành modifier màu thay vì style riêng.
4. Features section (4a) đang lồng trong Stories, width cố định 1200 và padding bị lặp. Cần dựng lại cho đúng responsive.
5. Copy footer, meta title và tên layer (Streaks, Runner, Clubs) còn sót từ template "Streaks".
6. Link tải app: Android `https://play.google.com/store/apps/details?id=vn.tasco.app_tasco_maps`, iOS `https://apps.apple.com/vn/app/vmap/id6769729366`.

---

## 7. Tokens trong code (Tailwind v4)

Khai báo trong `app/assets/css/main.css` (`@theme`), font load qua `@nuxt/fonts` trong `nuxt.config.ts` (Geist 400/500/600, Geist Mono 500, subset `vietnamese` + `latin-ext` + `latin`, tự host).

Đã xoá palette, breakpoint, radius, shadow và cỡ chữ mặc định của Tailwind, nên chỉ dùng được token của dự án.

| Framer | Tailwind |
|---|---|
| `accent/base` | `accent` (chốt `#D6FF4B`, khớp ảnh design trong `design/`) |
| `accent/contrast`, `text/inverse` | `accent-contrast`, `fg-inverse` |
| `accent/Signal` | `signal` |
| `bg/Dark`, `bg/subtle`, `bg/card` | `surface-dark`, `surface-subtle`, `surface-card` |
| `bg/Black`, `bg/White` | `black`, `white` |
| `text/primary` = `text/on-dark` | `fg` |
| `text/on-dark-muted` | `fg-muted` |
| `text/secondary` | `fg-secondary` |
| `border/subtle`, `Border` | `line`, `line-light` |
| `display/xl` … `caption` | `text-display-xl`, `text-display-lg`, `text-stat`, `text-heading-md`, `text-heading-sm`, `text-body-lg`, `text-body-md`, `text-caption` (đã kèm line-height, tracking, weight, tự đổi cỡ theo breakpoint) |
| `eyebrow` | `font-mono font-medium uppercase text-eyebrow` |
| `on-accent/*` | Dùng cùng class `text-*`, đổi màu bằng `text-fg-inverse` |
| Breakpoint Tablet / Desktop | `md:` (≥810) / `lg:` (≥1200), base = Phone |
| Nhịp section | `py-section` (64/96/140), `px-gutter` (20/48/100), `gap-block` (40/48/56), `pt-header` (92/100), `max-w-content` (1200) |
| Bo góc 10 / 12 / 20 / 40 | `rounded-sm` / `rounded-md` / `rounded-lg` / `rounded-xl` |
| Shadow | `shadow-button-accent`, `shadow-button-dark`, `shadow-card` |
