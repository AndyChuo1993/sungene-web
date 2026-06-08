import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import { getProduct, PRODUCT_SLUGS } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => PRODUCT_SLUGS.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  const p = getProduct(slug)
  if (!p) return {}
  const c = p[lang]
  return {
    title: `${c.name} | SunGene Industrial IoT`,
    description: c.tagline,
    alternates: getAlternates(lang, `/products/${slug}`),
  }
}

export default async function ProductDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  const p = getProduct(slug)
  if (!p) notFound()
  const c = p[lang]

  const L = {
    en: { back: 'All products', specs: 'Specifications', quote: 'Request a Quote', catalog: 'Request Catalog', related: 'Related solution' },
    zh: { back: '所有產品', specs: '規格', quote: '索取報價', catalog: '索取型錄', related: '相關解決方案' },
  }[lang]

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <Link href={`/${lang}/products`} className="text-sm font-medium text-blue-700 hover:underline">
          ← {L.back}
        </Link>
        <div className="mt-4 grid gap-10 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            <Image src={p.image} alt={c.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" priority />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{c.name}</h1>
            <p className="mt-4 leading-relaxed text-gray-600">{c.tagline}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${lang}/contact?type=quote`} className="inline-flex items-center justify-center gap-2 rounded-sm bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                {L.quote} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`/${lang}/contact?type=catalog`} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-800">
                {L.catalog}
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              {L.related}:{' '}
              <Link href={`/${lang}/solutions/${p.relatedSolution}`} className="font-medium text-blue-700 hover:underline">
                {lang === 'en' ? 'Equipment Monitoring' : '設備監控'}
              </Link>
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900">{L.specs}</h2>
          <dl className="mt-4 divide-y divide-gray-100 rounded-xl border border-gray-200">
            {c.specs.map((s) => (
              <div key={s.label} className="grid grid-cols-3 gap-4 px-5 py-3">
                <dt className="col-span-1 text-sm font-medium text-gray-500">{s.label}</dt>
                <dd className="col-span-2 text-sm text-gray-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}
