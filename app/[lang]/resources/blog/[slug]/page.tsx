import { Lang } from '@/lib/i18n'
import { redirect } from 'next/navigation'

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const { lang, slug } = params
  redirect(`/${lang}/blog/${slug}`)
}
