import { Lang } from '@/lib/i18n'
import { redirect } from 'next/navigation'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: (lang === 'zh' ? '資源中心' : 'Resources') + ' | SunGene',
    alternates: { canonical: `/${lang}/resources`, languages: { zh: '/zh/resources', en: '/en/resources' } },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  redirect(`/${params.lang}/resources`)
}
