import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceComparison from '@/components/ServiceComparison'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: t(lang, 'service_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
    keywords:
      lang === 'zh'
        ? ['外銷客戶開發', '經銷商開發', '外貿業務外包', '海外買家名單', '出口市場分析']
        : ['export lead generation', 'distributor development', 'export sales outsourcing', 'overseas buyers', 'market analysis'],
    openGraph: {
      title: t(lang, 'service_title') + ' | SunGene',
      description: t(lang, 'meta_home_desc'),
      images: ['/og/og.png'],
    },
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        zh: '/zh/services',
        en: '/en/services',
        'x-default': '/zh/services',
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const pageUrl = `${baseUrl}/${lang}/services`

  type Card = { href: string; title: string; desc: string; tags?: string[] }

  const core: Card[] = [
    {
      href: `/${lang}/services/export-lead-generation`,
      title: lang === 'zh' ? '外銷客戶開發' : 'Export Lead Generation',
      desc:
        lang === 'zh'
          ? '一年期合作，持續為製造業建立海外買家名單、開發節奏與合格詢盤。'
          : 'A one-year engagement to build overseas buyer lists, outreach cadence, and qualified inquiries for manufacturers.',
      tags: lang === 'zh' ? ['製造業', '海外買家', '詢盤'] : ['Manufacturers', 'Overseas buyers', 'Leads'],
    },
    {
      href: `/${lang}/services/distributor-development`,
      title: lang === 'zh' ? '經銷商開發' : 'Distributor Development',
      desc:
        lang === 'zh'
          ? '一年期合作，持續建立海外經銷商名單、合作條件與市場推進節奏。'
          : 'A one-year engagement to build distributor lists, channel terms, and market-entry progression.',
      tags: lang === 'zh' ? ['通路', '代理', '市場落地'] : ['Channels', 'Partners', 'Market entry'],
    },
    {
      href: `/${lang}/services/export-sales-outsourcing`,
      title: lang === 'zh' ? '外貿業務外包' : 'Export Sales Outsourcing',
      desc:
        lang === 'zh'
          ? '一年期合作，你專注報價與出貨，其餘外貿開發與跟進由我們持續執行。'
          : 'A one-year engagement where you focus on quoting and shipping while we run outreach and follow-ups.',
      tags: lang === 'zh' ? ['不擴編', 'SOP', '交付'] : ['No hiring', 'SOP', 'Delivery'],
    },
  ]

  const searchIntentLabels =
    lang === 'zh'
      ? ['外貿客戶開發', '如何找到海外買家', '如何找到經銷商', '國際買家名單', '外銷內容行銷']
      : ['export lead generation', 'find overseas buyers', 'find distributors', 'international buyers', 'b2b export marketing']

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: lang === 'zh' ? '外銷服務總覽' : 'Export Services Overview',
    url: pageUrl,
    hasPart: core.map((item) => ({
      '@type': 'Service',
      name: item.title,
      url: `${baseUrl}${item.href}`,
      description: item.desc,
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={servicesSchema} />
      <section className="bg-gray-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            {lang === 'zh' ? '三個核心服務，對應三種外貿增長需求' : 'Three core services for three export growth needs'}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            {lang === 'zh'
              ? '如果你要找海外買家、建立經銷通路，或想在不擴編的前提下持續開發海外市場，這裡可以直接找到對應方案。'
              : 'Whether you need overseas buyers, channel partners, or a managed export sales workflow without hiring first, you can choose the right service here.'}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/contact`} className="rounded-sm bg-white px-8 py-3 font-bold text-blue-900 transition hover:bg-gray-100">
              {lang === 'zh' ? '預約諮詢' : 'Book Consultation'}
            </Link>
            <Link href={`/${lang}/export-market-analysis`} className="rounded-sm border border-white/40 bg-transparent px-8 py-3 font-bold text-white transition hover:bg-white/10">
              {lang === 'zh' ? '免費出口市場分析' : 'Free Export Market Analysis'}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {core.map((x, i) => (
              <Link key={i} href={x.href} className="block rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md">
                <div className="text-lg font-bold text-gray-900">{x.title}</div>
                <div className="mt-2 leading-7 text-gray-600">{x.desc}</div>
                {x.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {x.tags.map((tag, j) => (
                      <span key={j} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-6 font-medium text-blue-900">{lang === 'zh' ? '了解更多 →' : 'Learn more →'}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {lang === 'zh' ? '先確認你目前最需要哪一種合作' : 'Start with the service that fits your current stage'}
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                {lang === 'zh'
                  ? '如果你缺的是穩定買家來源，就先看外貿客戶開發；如果你想找在地通路，就看經銷商開發；如果你缺的是整體執行人力，就看外貿業務外包。'
                  : 'If you need a steadier flow of buyers, start with export lead generation. If you need local channel partners, review distributor development. If execution bandwidth is the gap, look at sales outsourcing.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={core[0].href} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800">
                  {lang === 'zh' ? '看外銷客戶開發' : 'View Export Lead Gen'}
                </Link>
                <Link href={core[1].href} className="inline-flex items-center justify-center rounded-sm border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50">
                  {lang === 'zh' ? '看經銷商開發' : 'View Distributor Dev'}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ServiceComparison lang={lang} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {lang === 'zh' ? '不確定選哪個？先看差異表' : 'Not sure which one? Start with the comparison'}
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                {lang === 'zh'
                  ? '外貿客戶開發解決「海外買家名單與詢盤交付」；經銷商開發解決「通路夥伴與經銷合作」；外貿業務外包解決「不擴編也能穩定開發與跟進」。'
                  : 'Lead gen delivers buyer lists and qualified inquiries. Distributor development builds partner pipelines. Sales outsourcing runs end-to-end outreach and follow-ups without hiring.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={core[0].href} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800">
                  {lang === 'zh' ? '看外貿客戶開發' : 'Export Lead Gen'}
                </Link>
                <Link href={core[1].href} className="inline-flex items-center justify-center rounded-sm border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50">
                  {lang === 'zh' ? '看經銷商開發' : 'Distributor Dev'}
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '常見需求關鍵字' : 'Common search intents'}</div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {searchIntentLabels.map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={`/${lang}/blog/how-to-find-overseas-buyers`} className="font-medium text-blue-900 hover:underline">
                  {lang === 'zh' ? '先看指南文章 →' : 'Read the guide →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{lang === 'zh' ? '先拿一份出口市場分析，再決定怎麼做' : 'Get a market analysis first, then decide your plan'}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-slate-200">
            {lang === 'zh'
              ? '提交產品與目標市場，我們會回覆市場切入方式、買家角色與可行的外貿開發路徑。'
              : 'Submit your product and markets. We’ll reply with entry approach, buyer roles, and a feasible lead-gen path.'}
          </p>
          <Link href={`/${lang}/export-market-analysis`} className="inline-block rounded-sm bg-white px-10 py-4 text-lg font-bold text-blue-900 shadow-lg transition duration-300 hover:bg-gray-100">
            {t(lang, 'cta_analysis')}
          </Link>
        </div>
      </section>
    </main>
  )
}
