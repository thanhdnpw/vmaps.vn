// Metadata tài liệu pháp lý, tách khỏi legal.ts (import HTML `?raw` chỉ Vite hiểu) để server/sitemap dùng được.

export interface LegalDocumentMeta {
  title: string
  version: string
  /** ISO 8601, field "Last edited on" */
  editedOn: string
}

export const LEGAL_META = {
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    version: '1.1',
    editedOn: '2022-09-08'
  }
} satisfies Record<string, LegalDocumentMeta>
