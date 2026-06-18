import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import CatalogDownload from '@/components/CatalogDownload'
import { Lang } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, itemListLd } from '@/lib/seo'
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products'
import { RESOURCES, RESOURCE_SLUGS } from '@/lib/resources'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title: lang === 'en' ? 'Resources, Catalog & Datasheets | SunGene Industrial IoT' : '資源、型錄與規格表 | SunGene Industrial IoT',
    description:
      lang === 'en'
        ? 'Download the SunGene Industrial IoT product catalog and read buyer-focused resources for RS485 gateways, LoRaWAN tank monitoring, NB-IoT energy monitoring and Modbus data acquisition.'
        : '下載 SunGene Industrial IoT 產品型錄，閱讀 RS485 閘道器、LoRaWAN 水槽監控、NB-IoT 能源監控與 Modbus 資料採集等採購導向資源。',
    alternates: getAlternates(lang, '/resources'),
  }
}

const C = {
  en: {
    kicker: 'Resources',
    title: 'Catalog, datasheets and Industrial IoT guides',
    intro:
      'Use these resources to evaluate SunGene remote monitoring hardware, gateway architectures and distributor / OEM-ready solution bundles.',
    card: 'SunGene Industrial IoT Product Catalog (PDF)',
    cardSub: 'Solutions / Applications / Controllers / Partner & OEM programs',
    guideTitle: 'High-intent resource pages',
    guideSub: 'Focused pages for buyers searching by protocol, network type or monitoring scenario.',
    dsTitle: 'Product Datasheets',
    dsSub: 'Per-product specification sheets. Open them and save or print as PDF.',
    view: 'Datasheet',
    read: 'Read resource',
  },
  zh: {
    kicker: '資源',
    title: '型錄、規格表與工業 IoT 指南',
    intro: '這些資料可協助評估 SunGene 遠端監控硬體、閘道器架構，以及適合通路與 OEM 合作的方案組合。',
    card: 'SunGene Industrial IoT 產品型錄（PDF）',
    cardSub: '解決方案 / 應用場景 / 控制器 / 通路與 OEM 合作',
    guideTitle: '高意圖資源頁',
    guideSub: '針對採購常用的協定、網路類型與監控場景建立的主題頁。',
    dsTitle: '產品規格表',
    dsSub: '每個產品都有獨立規格頁，可開啟後另存或列印為 PDF。',
    view: '規格表',
    read: '閱讀資源',
  },
} as const

export default async function Resources({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const c = C[lang]
  const listSchema = itemListLd(
    RESOURCE_SLUGS.map((slug) => ({
      name: RESOURCES[slug].content[lang].title,
      url: getLocalizedUrl(lang, `/resources/${slug}`),
    }))
  )

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{c.kicker}</p>
        <h1 className="mt-2 max-w-4xl text-4xl font-bold text-gray-900">{c.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">{c.intro}</p>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">{c.card}</h2>
              <p className="mt-1 text-sm text-gray-500">{c.cardSub}</p>
            </div>
          </div>
          <CatalogDownload lang={lang} />
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">{c.guideTitle}</h2>
          <p className="mt-2 text-gray-600">{c.guideSub}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {RESOURCE_SLUGS.map((slug) => {
              const resource = RESOURCES[slug].content[lang]
              return (
                <Link
                  key={slug}
                  href={`/${lang}/resources/${slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{resource.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                    {c.read} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">{c.dsTitle}</h2>
          <p className="mt-2 text-gray-600">{c.dsSub}</p>
          <div className="mt-6 space-y-8">
            {PRODUCT_CATEGORIES.map((cat) => {
              const items = PRODUCTS.filter((p) => p.category === cat.key)
              if (!items.length) return null
              return (
                <div key={cat.key}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{cat[lang]}</h3>
                  <ul className="mt-3 divide-y divide-gray-100 rounded-xl border border-gray-200">
                    {items.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/${lang}/products/${p.slug}/datasheet`}
                          className="flex items-center justify-between gap-4 px-5 py-3 transition hover:bg-gray-50"
                        >
                          <span className="text-sm font-medium text-gray-800">{p[lang].name}</span>
                          <span className="inline-flex flex-shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-700">
                            <FileText className="h-4 w-4" /> {c.view}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
