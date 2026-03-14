import { redirect } from 'next/navigation'
import { Lang } from '@/lib/i18n'

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  redirect(`/${lang}/resources?tab=industries`)
}
