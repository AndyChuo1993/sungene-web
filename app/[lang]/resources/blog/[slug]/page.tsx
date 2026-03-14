import { Lang } from '@/lib/i18n'
import { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'

export async function generateMetadata({ params }: { params: { lang: Lang; slug: string } }): Promise<Metadata> {
  const { lang, slug } = params
  return { alternates: { canonical: `/${lang}/blog/${slug}` }, robots: { index: false, follow: true } }
}

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const { lang, slug } = params
  permanentRedirect(`/${lang}/blog/${slug}`)
}
