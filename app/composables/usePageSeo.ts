// SEO từng trang: title + description dùng chung cho thẻ meta, Open Graph và Twitter.
// Canonical, og:url, og:image mặc định gắn ở app.vue / nuxt.config.ts.
export function usePageSeo(seo: { title: MaybeRefOrGetter<string>, description: MaybeRefOrGetter<string>, type?: 'website' | 'article' }) {
  useSeoMeta({
    title: seo.title,
    ogTitle: seo.title,
    twitterTitle: seo.title,
    description: seo.description,
    ogDescription: seo.description,
    twitterDescription: seo.description,
    ogType: seo.type ?? 'website'
  })
}
