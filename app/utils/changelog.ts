// Bản phát hành, chép từ Framer CMS collection "Changelog" (docs/design-spec.md §1, route /changelog).
// Body giữ nguyên HTML của CMS, kể cả <br> đầu/cuối đoạn tạo khoảng trống trong card như Framer.

export interface ChangelogEntry {
  slug: string
  version: string
  /** feature / improvement / fix, hiển thị uppercase */
  type: string
  /** ISO 8601, dùng để sắp xếp */
  date: string
  dateLabel: string
  title: string
  body: string
  cover?: string
}

const entries: ChangelogEntry[] = [
  {
    slug: 'neutral-store-buttons',
    version: '2.4.1',
    type: 'improvement',
    date: '2026-09-14',
    dateLabel: '14 September 2026',
    title: 'Neutral store buttons',
    body: '<p>The download section now uses plain iOS and Android buttons instead of the official Apple App Store and Google Play badge artwork. Buyers should add their own official badges before launch, following the current brand guidelines for each store.</p>'
  },
  {
    slug: 'adaptive-plans-for-shift-workers',
    version: '2.4.0',
    type: 'feature',
    date: '2026-09-04',
    dateLabel: '4 September 2026',
    title: 'Adaptive plans for shift workers',
    body: '<p><br>Plans now read the hours you actually train and rebuild around them. If your week moves, the sessions move with it instead of piling up as misses.</p>'
  },
  {
    slug: 'faster-route-downloads',
    version: '2.3.2',
    type: 'improvement',
    date: '2026-08-21',
    dateLabel: '21 August 2026',
    title: 'Faster route downloads',
    body: '<p><br>Offline routes download roughly three times quicker on mobile data, and partial downloads resume instead of starting over.</p>'
  },
  {
    slug: 'club-challenges',
    version: '2.3.0',
    type: 'feature',
    date: '2026-08-06',
    dateLabel: '6 August 2026',
    title: 'Club challenges',
    body: '<p><br>Clubs can now set a shared weekly target and track it together. Progress appears on the club page and in every member’s plan.</p>'
  },
  {
    slug: 'pacing-drift-on-treadmill-runs',
    version: '2.2.1',
    type: 'fix',
    date: '2026-07-18',
    dateLabel: '18 July 2026',
    title: 'Pacing drift on treadmill runs',
    body: '<p><br>Fixed an issue where treadmill sessions reported pace up to twelve percent fast when the phone was held rather than armband-mounted.</p>'
  },
  {
    slug: 'offline-sessions',
    version: '2.2.0',
    type: 'feature',
    date: '2026-07-02',
    dateLabel: '2 July 2026',
    title: 'Offline sessions',
    body: '<p><br>Guided sessions and audio pacing now work with no signal. Everything syncs automatically once you reconnect.</p>'
  },
  {
    slug: 'template-release',
    version: '2.1.3',
    type: 'fix',
    date: '2026-06-12',
    dateLabel: '12 June 2026',
    title: 'Watch sync reliability',
    body: '<p>Resolved duplicate session entries when a watch and phone recorded the same activity, and sped up first-time sync after pairing.</p><p><br></p>',
    cover: 'https://framerusercontent.com/images/VPNaNlpAPRXTqrOXAT44QsmNMxE.jpg'
  }
]

/** Mới nhất trước */
export const CHANGELOG_ENTRIES = entries.toSorted((a, b) => b.date.localeCompare(a.date))
