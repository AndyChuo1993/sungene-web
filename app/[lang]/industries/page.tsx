import Link from 'next/link'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import { INDUSTRY_SLUGS, INDUSTRIES } from '@/lib/industries'
import { ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title: lang === 'en' ? 'Industries | SunGene Industrial IoT' : '產業應用 | SunGene 工業物聯網',
    description:
      lang === 'en'
        ? 'Industrial IoT remote monitoring for water utilities, energy & solar, industrial facilities, agriculture and telecom infrastructure.'
        : '工業物聯網遠端監控應用於自來水事業、能源與太陽能、工業廠務、農業與電信基礎設施。',
    alternates: getAlternates(lang, '/industries'),
  }
}

export default async function Industries({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const c = {
    en: { kicker: 'Industries', title: 'Who we help', intro: 'Buyers often search by industry, not by product. Find your sector and the monitoring it needs.', learn: 'Learn more' },
    zh: { kicker: '產業應用', title: '我們服務的產業', intro: '客戶常用「產業」而非「產品」來找供應商。找到你的領域，看看它需要的監控。', learn: '了解更多' },
  }[lang]

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{c.kicker}</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">{c.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">{c.intro}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_SLUGS.map((slug) => {
            const i = INDUSTRIES[slug].content[lang]
            return (
              <Link
                key={slug}
                href={`/${lang}/industries/${slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h2 className="text-lg font-bold text-gray-900">{i.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{i.tagline}</p>
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
