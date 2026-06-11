import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, breadcrumbLd, faqLd } from '@/lib/seo'
import { KITS, KIT_SLUGS, getKit } from '@/lib/kits'
import { getProduct } from '@/lib/products'
import { SOLUTIONS, SolutionSlug } from '@/lib/solutions'
import { ArrowRight, Check, Package } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => KIT_SLUGS.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  const kit = getKit(slug)
  if (!kit) return {}
  const c = kit[lang]
  const title = `${c.title} | SunGene Industrial IoT`
  return {
    title,
    description: c.tagline,
    alternates: getAlternates(lang, `/kits/${slug}`),
    openGraph: {
      title,
      description: c.tagline,
      url: getLocalizedUrl(lang, `/kits/${slug}`),
      type: 'website',
      siteName: 'SunGene Industrial IoT',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: c.title }],
    },
  }
}

export default async function KitDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  const kit = getKit(slug)
  if (!kit) notFound()
  const c = kit[lang]

  const L = {
    en: {
      back: 'All kits',
      components: 'Kit components',
      apps: 'Applications',
      customers: 'Typical customers',
      protocols: 'Connectivity & protocols',
      partnership: 'Partnership',
      products: 'Products in this kit',
      quote: 'Request a Kit Quote',
      related: 'Related solution',
    },
    zh: {
      back: '所有套件',
      components: '套件內容',
      apps: '應用場景',
      customers: '典型客戶',
      protocols: '連線與協議',
      partnership: '合作模式',
      products: '套件相關產品',
      quote: '索取套件報價',
      related: '相關解決方案',
    },
  }[lang]

  const products = kit.relatedProducts.map((s) => getProduct(s)).filter((p): p is NonNullable<typeof p> => Boolean(p))
  const sol = SOLUTIONS[kit.relatedSolution as SolutionSlug]?.[lang]

  const url = getLocalizedUrl(lang, `/kits/${slug}`)
  const breadcrumbSchema = breadcrumbLd([
    { name: lang === 'en' ? 'Home' : '首頁', url: getLocalizedUrl(lang) },
    { name: lang === 'en' ? 'Monitoring Kits' : '監控套件', url: getLocalizedUrl(lang, '/kits') },
    { name: c.title, url },
  ])
  const faqs =
    lang === 'en'
      ? [
          { q: `What is included in the ${c.title}?`, a: `${c.components.join('; ')}. We finalize the exact bill of materials to match your site and connectivity.` },
          { q: 'Can the kit ship under our brand?', a: c.partnership },
          { q: 'How does the kit connect to our SCADA or cloud platform?', a: `${kit.protocols.join(' · ')} — devices use open protocols, so data lands in your existing SCADA, BMS or IoT platform.` },
        ]
      : [
          { q: `${c.title}包含哪些內容?`, a: `${c.components.join(';')}。我們會依您的場域與連線需求確認最終料表。` },
          { q: '套件可以用我們的品牌出貨嗎?', a: c.partnership },
          { q: '套件如何接入我們的 SCADA 或雲端平台?', a: `${kit.protocols.join(' · ')}——裝置採開放協議,數據可直接進入既有 SCADA、BMS 或物聯網平台。` },
        ]
  const faqSchema = faqLd(faqs)

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-5xl">
        <Link href={`/${lang}/kits`} className="text-sm font-medium text-blue-700 hover:underline">
          ← {L.back}
        </Link>

        <div className="mt-4 flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
            <Package className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{c.title}</h1>
            <p className="mt-3 text-lg leading-relaxed text-gray-600">{c.tagline}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={`/${lang}/contact?type=quote`} className="inline-flex items-center justify-center gap-2 rounded-sm bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
            {L.quote} <ArrowRight className="h-4 w-4" />
          </Link>
          {sol && (
            <Link href={`/${lang}/solutions/${kit.relatedSolution}`} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-800">
              {L.related}: {sol.title}
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-bold text-gray-900">{L.components}</h2>
            <ul className="mt-4 space-y-3">
              {c.components.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-blue-700" /> {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-xl font-bold text-gray-900">{L.protocols}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {kit.protocols.map((p) => (
                <li key={p} className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-700">{p}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">{L.apps}</h2>
            <ul className="mt-4 space-y-3">
              {c.applications.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-blue-700" /> {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-xl font-bold text-gray-900">{L.customers}</h2>
            <ul className="mt-4 space-y-3">
              {c.customers.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-blue-700" /> {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {products.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-gray-900">{L.products}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${lang}/products/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="relative aspect-square bg-gray-50">
                    <Image src={p.image} alt={p[lang].name} fill className="object-cover" sizes="(max-width:640px) 50vw, 20vw" />
                  </div>
                  <p className="px-4 py-3 text-sm font-medium text-gray-800 group-hover:text-blue-800">{p[lang].name}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h2 className="text-lg font-bold text-gray-900">{L.partnership}</h2>
          <p className="mt-2 text-gray-700">{c.partnership}</p>
          <Link href={`/${lang}/contact?type=quote`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">
            {L.quote} <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  )
}
