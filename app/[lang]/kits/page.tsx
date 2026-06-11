import Link from 'next/link'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, breadcrumbLd, itemListLd } from '@/lib/seo'
import { KITS, KIT_SLUGS } from '@/lib/kits'
import { ArrowRight, Package } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const title = lang === 'en' ? 'Monitoring Kits | SunGene Industrial IoT' : '監控套件 | SunGene 工業物聯網'
  const description =
    lang === 'en'
      ? 'Ready-to-deploy remote monitoring kits — sensors, RTU/gateway and LoRa / NB-IoT / 4G backhaul, bundled for tank level, weather & agriculture, and industrial environmental monitoring.'
      : '即裝即用的遠端監控套件——感測器、RTU/閘道器與 LoRa / NB-IoT / 4G 回傳,涵蓋水位、氣象農業與工業環境監測。'
  return {
    title,
    description,
    alternates: getAlternates(lang, '/kits'),
    openGraph: {
      title,
      description,
      url: getLocalizedUrl(lang, '/kits'),
      type: 'website',
      siteName: 'SunGene Industrial IoT',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SunGene Monitoring Kits' }],
    },
  }
}

export default async function KitsIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)

  const C = {
    en: {
      kicker: 'Monitoring Kits',
      title: 'Ready-to-deploy monitoring kits',
      intro:
        'Each kit bundles the sensors, RTU / gateway and wireless backhaul for one monitoring scenario — pre-matched, brand-ready and easy to quote. Tell us your site and we propose the exact bill of materials.',
      view: 'View kit',
      cta: 'Request a Kit Quote',
    },
    zh: {
      kicker: '監控套件',
      title: '即裝即用的監控套件',
      intro:
        '每組套件將單一監控場景所需的感測器、RTU／閘道器與無線回傳預先配好——可貼牌、好報價。告訴我們您的場域,我們提供完整料表建議。',
      view: '查看套件',
      cta: '索取套件報價',
    },
  }[lang]

  const listSchema = itemListLd(
    KIT_SLUGS.map((s) => ({ name: KITS[s][lang].title, url: getLocalizedUrl(lang, `/kits/${s}`) }))
  )
  const breadcrumbSchema = breadcrumbLd([
    { name: lang === 'en' ? 'Home' : '首頁', url: getLocalizedUrl(lang) },
    { name: C.kicker, url: getLocalizedUrl(lang, '/kits') },
  ])

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{C.kicker}</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">{C.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{C.intro}</p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {KIT_SLUGS.map((s) => {
            const k = KITS[s][lang]
            return (
              <Link
                key={s}
                href={`/${lang}/kits/${s}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Package className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-gray-900">{k.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-gray-600">{k.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  {C.view} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-14 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
          <p className="mx-auto max-w-2xl text-lg">
            {lang === 'en'
              ? 'Need a different combination? We configure kits to your project — sensors, connectivity and protocols.'
              : '需要不同的組合?我們依您的專案配置套件——感測器、連線方式與協議。'}
          </p>
          <Link
            href={`/${lang}/contact?type=quote`}
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-blue-50"
          >
            {C.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
