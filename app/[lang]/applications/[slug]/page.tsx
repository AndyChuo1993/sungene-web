import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, breadcrumbLd } from '@/lib/seo'
import { APPLICATION_SLUGS, APPLICATIONS, ApplicationSlug } from '@/lib/applications'
import { SOLUTIONS } from '@/lib/solutions'
import { PRODUCTS } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

function isSlug(slug: string): slug is ApplicationSlug {
  return (APPLICATION_SLUGS as string[]).includes(slug)
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => APPLICATION_SLUGS.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) return {}
  const a = APPLICATIONS[slug].content[lang]
  return {
    title: `${a.title} | SunGene Industrial IoT`,
    description: a.tagline,
    alternates: getAlternates(lang, `/applications/${slug}`),
  }
}

export default async function ApplicationDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) notFound()
  const app = APPLICATIONS[slug]
  const a = app.content[lang]
  const solution = SOLUTIONS[app.solution][lang]

  const L = {
    en: { intent: 'Why it matters', how: 'How it works', products: 'Products used', tech: 'Technologies', solution: 'Related solution', relatedProducts: 'Related products', quote: 'Request a Quote', catalog: 'Request Product Catalog', back: 'All applications' },
    zh: { intent: '為什麼重要', how: '運作方式', products: '使用的產品', tech: '使用技術', solution: '相關解決方案', relatedProducts: '相關產品', quote: '索取報價', catalog: '索取產品型錄', back: '所有應用場景' },
  }[lang]

  const relatedProducts = PRODUCTS.filter((p) => p.relatedSolution === app.solution)
  const breadcrumbSchema = breadcrumbLd([
    { name: lang === 'en' ? 'Home' : '首頁', url: getLocalizedUrl(lang) },
    { name: lang === 'en' ? 'Applications' : '應用場景', url: getLocalizedUrl(lang, '/applications') },
    { name: a.title, url: getLocalizedUrl(lang, `/applications/${slug}`) },
  ])

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-4xl">
        <Link href={`/${lang}/applications`} className="text-sm font-medium text-blue-700 hover:underline">
          ← {L.back}
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">{a.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{a.tagline}</p>

        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.intent}</h2>
          <p className="mt-3 leading-relaxed text-gray-700">{a.intent}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.how}</h2>
          <ol className="mt-4 space-y-3">
            {a.how.map((step, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{i + 1}</span>
                <span className="leading-relaxed text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.products}</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              {a.products.map((p) => (
                <li key={p} className="rounded-md bg-gray-50 px-4 py-2">{p}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.tech}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {a.technologies.map((tch) => (
                <li key={tch} className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-700">{tch}</li>
              ))}
            </ul>
            <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.solution}</h2>
            <Link href={`/${lang}/solutions/${app.solution}`} className="mt-3 inline-flex items-center gap-1 font-medium text-blue-700 hover:underline">
              {solution.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-10">
            <div className="flex items-end justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.relatedProducts}</h2>
              <Link href={`/${lang}/products`} className="text-sm font-medium text-blue-700 hover:underline">
                {lang === 'en' ? 'View all products' : '查看所有產品'} →
              </Link>
            </div>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${lang}/products/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="relative aspect-square bg-gray-50">
                    <Image src={p.image} alt={p[lang].name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900">{p[lang].name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

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
