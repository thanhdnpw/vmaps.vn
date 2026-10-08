// Tài liệu pháp lý, chép từ Framer CMS collection "Legal" (docs/design-spec.md §1, route /legal/:slug).

export interface LegalDocument {
  title: string
  version: string
  /** ISO 8601, field "Last edited on" */
  editedOn: string
}

export const LEGAL_DOCUMENTS: Record<string, LegalDocument> = {
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    version: '1.1',
    editedOn: '2022-09-08'
  }
}

// Framer hiển thị kiểu "Sep 8, 2022"
export function formatLegalDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(iso))
}
