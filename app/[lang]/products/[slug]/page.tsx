import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, breadcrumbLd, productLd, faqLd } from '@/lib/seo'
import { getProduct, PRODUCT_SLUGS } from '@/lib/products'
import { SOLUTIONS, SolutionSlug } from '@/lib/solutions'
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

  const url = getLocalizedUrl(lang, `/products/${slug}`)
  const productSchema = productLd({
    name: c.name,
    description: c.tagline,
    image: p.image,
    url,
    category: p.category,
    specs: c.specs,
  })
  const breadcrumbSchema = breadcrumbLd([
    { name: lang === 'en' ? 'Home' : '首頁', url: getLocalizedUrl(lang) },
    { name: lang === 'en' ? 'Products' : '產品', url: getLocalizedUrl(lang, '/products') },
    { name: c.name, url },
  ])

  // Build a factual FAQ from this product's own spec table + safe standard answers.
  const findSpec = (re: RegExp) => c.specs.find((s) => re.test(s.label))
  const comm = findSpec(/communicat|protocol|interface|通訊|協議|連接|介面/i)
  const temp = findSpec(/temp|operating|溫度|工作/i)
  const faqs: { q: string; a: string }[] = []
  if (lang === 'en') {
    if (comm) faqs.push({ q: `What protocols / interfaces does the ${c.name} support?`, a: `It supports ${comm.value}, so it integrates with SCADA, BMS and cloud platforms over standard industrial protocols.` })
    faqs.push({ q: 'Do you offer OEM / ODM customization?', a: 'Yes. SunGene provides OEM / ODM service — custom firmware, protocols, enclosure, labeling and packaging. Send your requirements through our contact form.' })
    faqs.push({ q: 'How can I get a sample, quote or the product catalog?', a: 'Use the Request a Quote or Request Catalog button on this page. MOQ and pricing depend on the model and order volume.' })
    if (temp) faqs.push({ q: 'What operating conditions does it support?', a: `Rated operating range: ${temp.value}. See the full specifications above for details.` })
    faqs.push({ q: 'Will it work with my existing system?', a: 'Yes — our devices use open protocols and output standardized data, so they integrate with most existing SCADA, BMS, ERP and cloud setups.' })
  } else {
    if (comm) faqs.push({ q: `${c.name} 支援哪些協議 / 介面?`, a: `支援 ${comm.value}，可透過標準工業協議與 SCADA、BMS 及雲端平台整合。` })
    faqs.push({ q: '你們提供 OEM / ODM 客製嗎?', a: '提供。SunGene 提供 OEM / ODM 服務——客製韌體、協議、外殼、貼牌與包裝，歡迎透過聯絡表單告訴我們需求。' })
    faqs.push({ q: '如何索取樣品、報價或產品型錄?', a: '點本頁的「索取報價」或「索取型錄」按鈕。最低訂購量與價格依型號與訂購量而定。' })
    if (temp) faqs.push({ q: '支援的工作環境條件?', a: `額定工作範圍：${temp.value}。詳見上方完整規格。` })
    faqs.push({ q: '能與我現有的系統整合嗎?', a: '可以——我們的裝置採用開放協議並輸出標準化數據，可接入多數既有 SCADA、BMS、ERP 與雲端系統。' })
  }
  const faqSchema = faqLd(faqs)
  const faqHeading = lang === 'en' ? 'Frequently asked questions' : '常見問題'

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <Link href={`/${lang}/resources`} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-800">
                {L.catalog}
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              {L.related}:{' '}
              <Link href={`/${lang}/solutions/${p.relatedSolution}`} className="font-medium text-blue-700 hover:underline">
                {SOLUTIONS[p.relatedSolution as SolutionSlug]?.[lang].title ?? p.relatedSolution}
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
      </div>
    </main>
  )
}
