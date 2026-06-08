import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import { INDUSTRY_SLUGS, INDUSTRIES, IndustrySlug } from '@/lib/industries'
import { SOLUTIONS } from '@/lib/solutions'
import { Check, ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

function isSlug(slug: string): slug is IndustrySlug {
  return (INDUSTRY_SLUGS as string[]).includes(slug)
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => INDUSTRY_SLUGS.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) return {}
  const i = INDUSTRIES[slug].content[lang]
  return {
    title: `${i.title} | SunGene Industrial IoT`,
    description: i.tagline,
    alternates: getAlternates(lang, `/industries/${slug}`),
  }
}

export default async function IndustryDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) notFound()
  const ind = INDUSTRIES[slug]
  const i = ind.content[lang]

  const L = {
    en: { pains: 'Challenges', solutions: 'How we help', related: 'Related solutions', quote: 'Request a Quote', catalog: 'Request Product Catalog', back: 'All industries' },
    zh: { pains: '面臨的挑戰', solutions: '我們如何協助', related: '相關解決方案', quote: '索取報價', catalog: '索取產品型錄', back: '所有產業' },
  }[lang]

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">
        <Link href={`/${lang}/industries`} className="text-sm font-medium text-blue-700 hover:underline">
          ← {L.back}
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">{i.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{i.tagline}</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.pains}</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              {i.pains.map((p) => (
                <li key={p} className="rounded-md bg-gray-50 px-4 py-2">{p}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.solutions}</h2>
            <ul className="mt-4 space-y-2">
              {i.solutions.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.related}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {ind.relatedSolutions.map((sl) => (
              <Link key={sl} href={`/${lang}/solutions/${sl}`} className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-blue-700 transition hover:border-blue-300">
                {SOLUTIONS[sl][lang].title} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl bg-blue-900 p-8 text-center text-white">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/contact?type=quote`} className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-blue-50">
              {L.quote} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${lang}/contact?type=catalog`} className="inline-flex items-center gap-2 rounded-sm border border-blue-400 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800">
              {L.catalog}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
