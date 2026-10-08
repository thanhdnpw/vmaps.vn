<script setup lang="ts">
const description = 'Khám phá, tìm kiếm và dẫn đường với dữ liệu được phát triển cho Việt Nam.'
usePageSeo({
  title: 'VMAP - Một bản đồ, mọi hành trình',
  description
})

// Structured data: tổ chức + website + ứng dụng di động (iOS/Android) cho rich result của Google.
const siteUrl = useRuntimeConfig().public.siteUrl
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          'name': 'VMAP',
          'legalName': COMPANY.name,
          'alternateName': COMPANY.internationalName,
          'taxID': COMPANY.taxId,
          'foundingDate': COMPANY.foundingDate,
          'telephone': COMPANY.phoneHref.replace('tel:', ''),
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': COMPANY.address.street,
            'addressLocality': COMPANY.address.locality,
            'addressRegion': COMPANY.address.region,
            'addressCountry': COMPANY.address.country
          },
          'logo': `${siteUrl}/icon-512.png`,
          'url': `${siteUrl}/`
        },
        { '@type': 'WebSite', '@id': `${siteUrl}/#website`, 'name': 'VMAP', 'url': `${siteUrl}/`, 'inLanguage': 'vi', 'publisher': { '@id': `${siteUrl}/#organization` } },
        {
          '@type': 'MobileApplication',
          'name': 'VMAP',
          description,
          'applicationCategory': 'TravelApplication',
          'operatingSystem': 'iOS, Android',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'VND' },
          'installUrl': [STORE_LINKS.ios, STORE_LINKS.android],
          'publisher': { '@id': `${siteUrl}/#organization` }
        }
      ]
    })
  }]
})
</script>

<template>
  <main>
    <HomeHeroSection />
    <HomeBenefitsSection />
    <HomeResultsSection />
    <HomeStoriesSection />
    <HomeRoutesSection />
    <HomeDownloadSection />
  </main>
</template>
