<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const doc = LEGAL_DOCUMENTS[slug]

if (!doc) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy tài liệu', fatal: true })
}

usePageSeo({
  title: `${doc.title} | VMAP`,
  description: `${doc.title} của VMAP, phiên bản ${doc.version}.`
})
</script>

<template>
  <main class="mx-auto flex max-w-200 flex-col gap-6 px-gutter pt-35 pb-section md:pt-40">
    <!-- Framer "Legal document": maxW 800, padding 140/20/64 · 160/48/96 · 160/100/140, gap 24 -->
    <LegalDocumentHeader :title="doc.title" :version="doc.version" :edited-on="doc.editedOn" />
    <LegalDocumentBody :html="doc.html" />
  </main>
</template>
