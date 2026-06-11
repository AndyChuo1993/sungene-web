import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, breadcrumbLd, faqLd } from '@/lib/seo'
import { SOLUTION_SLUGS, SOLUTIONS, SolutionSlug } from '@/lib/solutions'
import { getApplicationsForSolution } from '@/lib/applications'
import { PRODUCTS } from '@/lib/products'
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
  const title = `${s.title} | SunGene Industrial IoT`
  return {
    title,
    description: s.tagline,
    alternates: getAlternates(lang, `/solutions/${slug}`),
    openGraph: {
      title,
      description: s.tagline,
      url: getLocalizedUrl(lang, `/solutions/${slug}`),
      type: 'website',
      siteName: 'SunGene Industrial IoT',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: s.title }],
    },
  }
}

export default async function SolutionDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) notFound()
  const s = SOLUTIONS[slug][lang]

  const L = {
    en: { problem: 'The problem', capabilities: 'What we monitor', products: 'Products used', industries: 'Where it is used', applications: 'Related applications', relatedProducts: 'Related products', viewAll: 'View all products', quote: 'Request a Quote', catalog: 'Request Product Catalog', back: 'All solutions' },
    zh: { problem: '面臨的問題', capabilities: '監控項目', products: '使用的產品', industries: '適用產業', applications: '相關應用場景', relatedProducts: '相關產品', viewAll: '查看所有產品', quote: '索取報價', catalog: '索取產品型錄', back: '所有解決方案' },
  }[lang]

  const applications = getApplicationsForSolution(slug)
  const relatedProducts = PRODUCTS.filter((p) => p.relatedSolution === slug)

  const breadcrumbSchema = breadcrumbLd([
    { name: lang === 'en' ? 'Home' : '首頁', url: getLocalizedUrl(lang) },
    { name: lang === 'en' ? 'Solutions' : '解決方案', url: getLocalizedUrl(lang, '/solutions') },
    { name: s.title, url: getLocalizedUrl(lang, `/solutions/${slug}`) },
  ])

  const faqs = lang === 'en'
    ? [
        { q: `Which devices does the ${s.title} solution use?`, a: `${s.title} combines SunGene gateways, sensors and meters — see "Products used" and "Related products" on this page. We match the hardware to your site, range and protocols.` },
        { q: 'Can it integrate with my existing SCADA, BMS or cloud platform?', a: 'Yes. Our devices use open protocols (Modbus, BACnet, MQTT, OPC UA) and output standardized data, so they integrate with most existing SCADA, BMS, ERP and cloud platforms.' },
        { q: 'Do you support OEM / ODM and customization?', a: 'Yes — custom firmware, protocols, enclosure, labeling and packaging are available. Send your requirements through the contact form.' },
        { q: `How do I get pricing or a sample for ${s.title}?`, a: 'Use the Request a Quote or Request Catalog button on this page. MOQ and pricing depend on the configuration and order volume.' },
      ]
    : [
        { q: `${s.title}解決方案會用到哪些裝置?`, a: `${s.title}整合 SunGene 的閘道器、感測器與電錶——請見本頁「使用的產品」與「相關產品」。我們會依您的場域、量程與協議搭配硬體。` },
        { q: '能與我現有的 SCADA、BMS 或雲端平台整合嗎?', a: '可以。我們的裝置採用開放協議（Modbus、BACnet、MQTT、OPC UA）並輸出標準化數據，可接入多數既有 SCADA、BMS、ERP 與雲端平台。' },
        { q: '你們提供 OEM / ODM 與客製嗎?', a: '提供——客製韌體、協議、外殼、貼牌與包裝皆可，歡迎透過聯絡表單告訴我們需求。' },
        { q: `如何取得${s.title}的報價或樣品?`, a: '點本頁的「索取報價」或「索取型錄」按鈕。最低訂購量與價格依配置與訂購量而定。' },
      ]
  const faqSchema = faqLd(faqs)
  const faqHeading = lang === 'en' ? 'Frequently asked questions' : '常見問題'

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-10">
            <div className="flex items-end justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{L.relatedProducts}</h2>
              <Link href={`/${lang}/products`} className="text-sm font-medium text-blue-700 hover:underline">
                {L.viewAll} →
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

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900">{faqHeading}</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-200 p-5">
                <dt className="font-semibold text-gray-900">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

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
