import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, getOrganizationId, getSiteUrl } from '@/lib/seo'

const META = {
  en: {
    title: 'SunGene Industrial IoT | Remote Monitoring & Data Acquisition',
    description:
      'SunGene is an Industrial IoT brand and international channel operator — remote monitoring and data acquisition solutions for water, energy and equipment, using LoRaWAN, NB-IoT, RS485 and 4G LTE. Distributor, system integrator and OEM/private-label partners welcome.',
  },
  zh: {
    title: 'SunGene 工業物聯網 | 遠端監控與數據採集',
    description:
      'SunGene 是工業物聯網品牌與國際通路營運商——提供水、能源與設備的遠端監測與數據採集方案，採用 LoRaWAN、NB-IoT、RS485 與 4G LTE 技術，歡迎經銷商、系統整合商與 OEM/貼牌合作夥伴洽詢。',
  },
} as const

export const dynamicParams = false

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

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
  const orgId = getOrganizationId()
  const websiteId = `${baseUrl}/#website`
  const logoUrl = `${baseUrl}/logo/sungene.png`
  const canonicalDescription =
    'SunGene Industrial IoT provides remote monitoring and data acquisition hardware and solutions for water, energy, industrial equipment and environmental monitoring.'

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: 'SunGene Industrial IoT',
    alternateName: ['SunGene IoT', 'SunGene', 'SunGene Co., Ltd.'],
    description: canonicalDescription,
    url: baseUrl,
    inLanguage: ['en', 'zh-Hant'],
    publisher: { '@type': 'Organization', '@id': orgId },
    hasPart: [
      { '@type': 'CollectionPage', name: 'Industrial IoT Products', url: `${baseUrl}/en/products` },
      { '@type': 'CollectionPage', name: 'Remote Monitoring Solutions', url: `${baseUrl}/en/solutions` },
      { '@type': 'CollectionPage', name: 'Monitoring Kits', url: `${baseUrl}/en/kits` },
      { '@type': 'CollectionPage', name: 'Industrial IoT Applications', url: `${baseUrl}/en/applications` },
      { '@type': 'CollectionPage', name: 'Product Catalog and Datasheets', url: `${baseUrl}/en/resources` },
    ],
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: 'SunGene Industrial IoT',
    alternateName: ['SunGene IoT', 'SunGene', '上瑾錸有限公司'],
    legalName: 'SunGene Co., Ltd.',
    foundingDate: '2023',
    description: canonicalDescription,
    slogan: 'Remote Monitoring & Data Acquisition',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    brand: {
      '@type': 'Brand',
      name: 'SunGene Industrial IoT',
      url: baseUrl,
    },
    sameAs: ['https://www.linkedin.com/company/108298466/'],
    areaServed: ['Taiwan', 'China', 'Global'],
    knowsAbout: [
      'Industrial IoT',
      'Remote monitoring',
      'Data acquisition',
      'LoRaWAN',
      'NB-IoT',
      'RS485',
      'Modbus',
      'BACnet',
      'MQTT',
      '4G LTE',
      'Water monitoring',
      'Energy monitoring',
      'Equipment monitoring',
      'Environmental monitoring',
      'OEM / ODM industrial hardware',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'No. 201, Guangfu Rd., Central District',
        addressLocality: 'Taichung',
        addressCountry: 'TW',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: "Unit 1001-2, Building A1, Yincheng Zhigu, No. 6788-1 Binhai West Avenue, Tong'an District",
        addressLocality: 'Xiamen',
        addressRegion: 'Fujian',
        addressCountry: 'CN',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contact@sungeneiot.com',
      telephone: '+886-4-3703-2705',
      availableLanguage: ['en', 'zh-Hant'],
      url: `${baseUrl}/en/contact`,
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industrial IoT remote monitoring solutions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'OEM / ODM and private-label Industrial IoT hardware programs',
        },
      },
    ],
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
