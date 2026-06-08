import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Lang } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, getSiteUrl } from '@/lib/seo'

const META = {
  en: {
    title: 'SunGene Industrial IoT | Remote Monitoring & Data Acquisition',
    description:
      'SunGene Industrial IoT supplies remote monitoring and data acquisition solutions for water, energy and industrial equipment — using LoRaWAN, NB-IoT, RS485 and 4G LTE. Distributor, system integrator and OEM partners welcome.',
  },
  zh: {
    title: 'SunGene 工業物聯網 | 遠端監控與數據採集',
    description:
      'SunGene 工業物聯網提供水、能源與工業設備的遠端監控與數據採集方案，採用 LoRaWAN、NB-IoT、RS485 與 4G LTE 技術，歡迎經銷商、系統整合商與 OEM 合作夥伴洽詢。',
  },
} as const

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const baseUrl = getSiteUrl()
  const m = META[lang]

  return {
    metadataBase: new URL(baseUrl),
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      url: getLocalizedUrl(lang),
      type: 'website',
      siteName: 'SunGene Industrial IoT',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SunGene Industrial IoT' }],
    },
    twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
    icons: { icon: '/logo/sungene.png' },
    alternates: getAlternates(lang),
  }
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)

  const baseUrl = getSiteUrl()
  const logoUrl = `${baseUrl}/logo/sungene.png`

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SunGene Industrial IoT',
    url: baseUrl,
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene Industrial IoT',
    description: META[lang].description,
    url: baseUrl,
    logo: logoUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TW',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contact@sungenelite.com',
      availableLanguage: ['en', 'zh-Hant'],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <Header lang={lang} />
      <div id="page-content">{children}</div>
      <Footer lang={lang} />
    </>
  )
}
