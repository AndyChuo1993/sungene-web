import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, itemListLd, breadcrumbLd } from '@/lib/seo'
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title: lang === 'en' ? 'Products | SunGene Industrial IoT' : '產品 | SunGene 工業物聯網',
    description:
      lang === 'en'
        ? 'Industrial IoT controllers, gateways, sensors and meters for remote monitoring — RS485, LoRa, NB-IoT and 0-10V.'
        : '工業物聯網控制器、閘道器、感測器與電錶，支援 RS485、LoRa、NB-IoT 與 0-10V 遠端監控。',
    alternates: getAlternates(lang, '/products'),
  }
}

export default async function ProductsIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)

  const listSchema = itemListLd(
    PRODUCTS.map((p) => ({
      name: p[lang].name,
      url: getLocalizedUrl(lang, `/products/${p.slug}`),
      image: p.image,
    }))
  )
  const breadcrumbSchema = breadcrumbLd([
    { name: lang === 'en' ? 'Home' : '首頁', url: getLocalizedUrl(lang) },
    { name: lang === 'en' ? 'Products' : '產品', url: getLocalizedUrl(lang, '/products') },
  ])

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            {lang === 'en' ? 'Products' : '產品'}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {lang === 'en' ? 'Monitoring & control hardware' : '監控與控制硬體'}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {lang === 'en'
              ? 'Field-proven gateways, sensors, meters and controllers for remote monitoring — RS485 / Modbus, LoRa, NB-IoT and 4G, with a printable datasheet for every product.'
              : '經現場驗證的閘道器、感測器、電錶與控制器,支援 RS485／Modbus、LoRa、NB-IoT 與 4G 遠端監控,每項產品皆附可列印規格表。'}
          </p>
        </header>

        {PRODUCT_CATEGORIES.map((cat) => {
          const items = PRODUCTS.filter((p) => p.category === cat.key)
          if (items.length === 0) return null
          return (
            <section key={cat.key} className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">{lang === 'en' ? cat.en : cat.zh}</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => {
                  const c = p[lang]
                  return (
                    <Link
                      key={p.slug}
                      href={`/${lang}/products/${p.slug}`}
                      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                    >
                      <div className="relative aspect-square bg-gray-50">
                        <Image src={p.image} alt={c.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-gray-900">{c.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{c.tagline}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                          {lang === 'en' ? 'View details' : '查看詳情'}
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
