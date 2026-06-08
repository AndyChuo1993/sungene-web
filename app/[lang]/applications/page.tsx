import Link from 'next/link'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import { APPLICATION_SLUGS, APPLICATIONS } from '@/lib/applications'
import { ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title: lang === 'en' ? 'Applications | SunGene Industrial IoT' : '應用場景 | SunGene 工業物聯網',
    description:
      lang === 'en'
        ? 'Remote monitoring applications: tank level, pump, solar site, remote meter reading and equipment alarm notification.'
        : '遠端監控應用場景：水箱液位、泵浦、太陽能場域、遠端抄表與設備告警通知。',
    alternates: getAlternates(lang, '/applications'),
  }
}

export default async function Applications({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const c = {
    en: { kicker: 'Applications', title: 'Common remote monitoring applications', intro: 'Each application targets one real-world job. Find yours and see how we solve it.', learn: 'Learn more' },
    zh: { kicker: '應用場景', title: '常見的遠端監控應用', intro: '每個應用都針對一個實際需求。找到你的場景，看看我們怎麼解。', learn: '了解更多' },
  }[lang]

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{c.kicker}</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">{c.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">{c.intro}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {APPLICATION_SLUGS.map((slug) => {
            const a = APPLICATIONS[slug].content[lang]
            return (
              <Link
                key={slug}
                href={`/${lang}/applications/${slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-gray-900">{a.title}</h2>
                <p className="mt-2 leading-relaxed text-gray-600">{a.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  {c.learn} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
