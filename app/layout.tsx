import '../styles/globals.css'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { t } from '@/lib/i18n'

export async function generateMetadata() {
  const lang = cookies().get('lang')?.value === 'en' ? 'en' : 'zh-Hant'
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'),
    title: t(lang, 'meta_default_title'),
    description: t(lang, 'meta_default_desc'),
    openGraph: { title: t(lang, 'meta_default_title'), description: t(lang, 'meta_default_desc'), type: 'website' },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/logo/sungene.png' },
    alternates: {
      canonical: '/',
      languages: {
        'en': '/?lang=en',
        'zh-TW': '/',
      },
    },
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const lang = cookies().get('lang')?.value === 'en' ? 'en' : 'zh-Hant'
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const logoUrl = `${site}/logo/sungene.png`
  
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SunGene Co., LTD.',
    url: site,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene Co., LTD.（上瑾錸有限公司）',
    description: t(lang, 'schema_desc'),
    url: site,
    logo: logoUrl,
    telephone: '04-37032705',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '台中市中區光復路201號',
      addressLocality: '台中市',
      addressRegion: '中區',
      addressCountry: 'TW'
    },
    vatID: '94111922',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+886-4-37032705',
      contactType: 'sales',
      areaServed: 'TW',
      availableLanguage: ['en', 'zh-Hant']
    },
    sameAs: [
      'https://momas.en.alibaba.com',
      'https://www.linkedin.com/company/sungene-co-ltd'
    ]
  }
  return (
    <html lang={lang}>
      <body className="min-h-screen text-white antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Header />
        {children}
        <Footer />
        <FloatingCTA lang={lang} />
      </body>
    </html>
  )
}
