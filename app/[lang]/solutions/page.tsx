import Link from 'next/link'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { breadcrumbLd, getAlternates, getLocalizedUrl, itemListLd } from '@/lib/seo'
import { SOLUTION_SLUGS, SOLUTIONS } from '@/lib/solutions'
import { ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title:
      lang === 'en'
        ? 'Solutions — Water, Energy & Equipment Monitoring | SunGene Industrial IoT'
        : '解決方案 — 水、能源與設備監控 | SunGene 工業物聯網',
    description:
      lang === 'en'
        ? 'Remote monitoring solutions for water, energy and industrial equipment using LoRaWAN, NB-IoT and RS485.'
        : '採用 LoRaWAN、NB-IoT、RS485 的水、能源與工業設備遠端監控解決方案。',
    alternates: getAlternates(lang, '/solutions'),
  }
}

export default async function SolutionsIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const listSchema = itemListLd(
    SOLUTION_SLUGS.map((slug) => ({
      name: SOLUTIONS[slug][lang].title,
      url: getLocalizedUrl(lang, `/solutions/${slug}`),
    }))
  )
  const breadcrumbSchema = breadcrumbLd([
    { name: lang === 'en' ? 'Home' : '首頁', url: getLocalizedUrl(lang) },
    { name: lang === 'en' ? 'Solutions' : '解決方案', url: getLocalizedUrl(lang, '/solutions') },
  ])

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            {lang === 'en' ? 'Solutions' : '解決方案'}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {lang === 'en' ? 'Remote monitoring, by scenario' : '依場景區分的遠端監控'}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {lang === 'en'
              ? 'We start from the problem you need to solve — then bring the gateways, sensors and meters to match.'
              : '我們從您要解決的問題出發，再搭配對應的閘道器、感測器與電錶。'}
          </p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SOLUTION_SLUGS.map((slug) => {
            const s = SOLUTIONS[slug][lang]
            return (
              <Link
                key={slug}
                href={`/${lang}/solutions/${slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-gray-900">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-gray-600">{s.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  {lang === 'en' ? 'Learn more' : '了解更多'}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
