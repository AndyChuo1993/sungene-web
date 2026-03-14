import { Lang } from '@/lib/i18n'
import { permanentRedirect } from 'next/navigation'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    alternates: {
      canonical: `/${lang}/services/export-sales-outsourcing`,
    },
    robots: { index: false, follow: true },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  permanentRedirect(`/${lang}/services/export-sales-outsourcing`)
}
