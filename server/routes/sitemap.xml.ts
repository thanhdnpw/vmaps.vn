// Sitemap tĩnh, prerender lúc `nuxt generate` (nuxt.config.ts → nitro.prerender.routes).
import { CHANGELOG_ENTRIES } from '../../app/utils/changelog'
import { LEGAL_META } from '../../app/utils/legal-meta'

export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig(event).public.siteUrl
  const urls: { loc: string, lastmod?: string }[] = [
    { loc: '/' },
    { loc: '/changelog', lastmod: CHANGELOG_ENTRIES[0]?.date },
    ...CHANGELOG_ENTRIES.map(e => ({ loc: `/changelog/${e.slug}`, lastmod: e.date })),
    ...Object.entries(LEGAL_META).map(([slug, doc]) => ({ loc: `/legal/${slug}`, lastmod: doc.editedOn })),
    { loc: '/press' },
    { loc: '/privacy' }
  ]
  const body = urls
    .map(u => `  <url><loc>${siteUrl}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n')
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
})
