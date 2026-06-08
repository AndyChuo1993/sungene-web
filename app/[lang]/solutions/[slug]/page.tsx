import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import { SOLUTION_SLUGS, SOLUTIONS, SolutionSlug } from '@/lib/solutions'
import { getApplicationsForSolution } from '@/lib/applications'
import { Check, ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

function isSlug(slug: string): slug is SolutionSlug {
  return (SOLUTION_SLUGS as string[]).includes(slug)
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) =>
    SOLUTION_SLUGS.map((slug) => ({ lang, slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) return {}
  const s = SOLUTIONS[slug][lang]
  return {
    title: `${s.title} | SunGene Industrial IoT`,
    description: s.tagline,
    alternates: getAlternates(lang, `/solutions/${slug}`),
  }
}

export default async function SolutionDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) notFound()
  const s = SOLUTIONS[slug][lang]

  const L = {
    en: { problem: 'The problem', capabilities: 'What we monitor', products: 'Products used', industries: 'Where it is used', applications: 'Related applications', quote: 'Request a Quote', catalog: 'Request Product Catalog', back: 'All solutions' },
    zh: { problem: '面臨的問題', capabilities: '監控項目', products: '使用的產品', industries: '適用產業', applications: '相關應用場景', quote: '索取報價', catalog: '索取產品型錄', back: '所有解決方案' },
  }[lang]

  const applications = getApplicationsForSolution(slug)

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">
        <Link href={`/${lang}/solutions`} className="text-sm font-medium text-blue-700 hover:underline">
          ← {L.back}
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">{s.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{s.tagline}</p>

        {/* Problem */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.problem}</h2>
          <p className="mt-3 leading-relaxed text-gray-700">{s.problem}</p>
        </section>

        {/* Capabilities */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.capabilities}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {s.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-4">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="font-medium text-gray-800">{cap}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Products + Industries */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.products}</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              {s.products.map((p) => (
                <li key={p} className="rounded-md bg-gray-50 px-4 py-2">{p}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.industries}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.industries.map((i) => (
                <li key={i} className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-700">{i}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Related applications */}
        {applications.length > 0 && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.applications}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {applications.map((app) => (
                <Link
                  key={app.slug}
                  href={`/${lang}/applications/${app.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 transition hover:border-blue-300"
                >
                  <span className="font-medium text-gray-800">{app.content[lang].title}</span>
                  <ArrowRight className="h-4 w-4 text-blue-700 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-14 rounded-xl bg-blue-900 p-8 text-center text-white">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/contact?type=quote`} className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-blue-50">
              {L.quote} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${lang}/resources`} className="inline-flex items-center gap-2 rounded-sm border border-blue-400 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800">
              {L.catalog}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
