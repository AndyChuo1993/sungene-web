import Link from 'next/link'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import HeroSection from '@/components/home/HeroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import ProcessSection from '@/components/home/ProcessSection'
import CasePreview from '@/components/home/CasePreview'
import CTASection from '@/components/home/CTASection'

type PageParams = {
  params: Promise<{ lang?: string }>
}

const HOME_SEO = {
  en: {
    title: 'B2B Export Lead Generation & Distributor Development | SunGene',
    description:
      'SunGene helps companies grow overseas through B2B export lead generation, buyer development, distributor development, and export sales support.',
    keywords: [
      'b2b export lead generation',
      'distributor development',
      'overseas market development',
      'SunGene',
    ],
    h1: 'Build export growth with buyer and distributor development',
    midTitle: 'Build export opportunities with a clearer process',
    midDesc:
      'We help companies identify buyers, develop distributors, and support export execution without building a full in-house export team first.',
    leadBtn: 'Explore Lead Generation',
    contactBtn: 'Talk to SunGene',
  },
  zh: {
    title: '外銷客戶開發與海外買家開發服務 | SunGene',
    description:
      'SunGene 協助企業透過外銷客戶開發、海外買家開發、經銷商開發與外銷銷售支援，拓展海外市場。',
    keywords: [
      '外銷客戶開發',
      '海外買家開發',
      '經銷商開發',
      'SunGene',
    ],
    h1: '用更有效的方法推動企業外銷成長',
    midTitle: '用更清晰的流程建立外銷機會',
    midDesc:
      '我們協助企業識別海外買家、開發經銷商，並支援外銷執行，不必一開始就建立完整內部外銷團隊。',
    leadBtn: '查看客戶開發服務',
    contactBtn: '聯絡 SunGene',
  },
  cn: {
    title: '外贸客户开发与海外买家开发服务 | SunGene',
    description:
      'SunGene 协助企业通过外贸客户开发、海外买家开发、经销商开发与外贸销售支持，拓展海外市场。',
    keywords: [
      '外贸客户开发',
      '海外买家开发',
      '经销商开发',
      'SunGene',
    ],
    h1: '用更有效的方法推动企业外贸增长',
    midTitle: '用更清晰的流程建立外贸机会',
    midDesc:
      '我们协助企业识别海外买家、开发经销商，并支持外贸执行，不必一开始就建立完整内部外贸团队。',
    leadBtn: '查看客户开发服务',
    contactBtn: '联系 SunGene',
  },
} as const

function normalizeLang(lang?: string): Lang {
  if (lang === 'en' || lang === 'zh' || lang === 'cn') return lang
  return 'en'
}

function getHomeSeo(lang?: string) {
  return HOME_SEO[normalizeLang(lang)]
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const data = getHomeSeo(safeLang)

  // 判斷目前的 base url 應該是哪個
  // 由於這是 generateMetadata，無法直接拿到 request header 的 host，
  // 所以我們根據 safeLang 來決定 canonical 應該指去哪裡，確保 self-canonical
  const baseUrl = safeLang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'

  return {
    title: data.title,
    description: data.description,
    keywords: [...data.keywords],
    alternates: {
      canonical: `${baseUrl}/${safeLang}`,
      languages: {
        'zh-CN': 'https://sungene.net/cn',
        'zh-TW': 'https://sungenelite.com/zh',
        'en': 'https://sungene.net/en',
        'x-default': 'https://sungene.net/cn',
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${baseUrl}/${safeLang}`,
      siteName: 'SunGene',
      type: 'website',
      locale: safeLang === 'zh' ? 'zh_TW' : safeLang === 'cn' ? 'zh_CN' : 'en_US',
      images: [
        {
          url: '/og/og.png',
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: ['/og/og.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const data = getHomeSeo(safeLang)
  const baseUrl = safeLang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene',
    url: `${baseUrl}/${safeLang}`,
    logo: `${baseUrl}/logo/sungene.png`,
    description: data.description,
    sameAs: [],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType:
      safeLang === 'en'
        ? 'B2B Export Lead Generation and Distributor Development'
        : safeLang === 'cn'
        ? 'B2B外贸客户开发与经销商开发'
        : 'B2B 外銷客戶開發與經銷商開發',
    provider: {
      '@type': 'Organization',
      name: 'SunGene',
      url: baseUrl,
    },
    areaServed: 'Global',
    description: data.description,
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <HeroSection lang={safeLang} />
      <ServicesPreview lang={safeLang} />

      <section className="bg-blue-50 py-16 border-y border-blue-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.midTitle}</h2>
            <p className="text-gray-600">{data.midDesc}</p>
          </div>
          <div className="flex gap-4">
            <Link
              href={`/${safeLang}/services/export-lead-generation`}
              className="bg-white text-blue-900 border border-blue-200 font-bold py-3 px-6 rounded-sm hover:bg-blue-50 transition"
            >
              {data.leadBtn}
            </Link>
            <Link
              href={`/${safeLang}/contact`}
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-sm hover:bg-blue-500 transition shadow-md"
            >
              {data.contactBtn}
            </Link>
          </div>
        </div>
      </section>

      <WhyUs lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <CasePreview lang={safeLang} />
      <CTASection lang={safeLang} />

      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            {safeLang === 'en' ? 'Service Comparison' : safeLang === 'cn' ? '服务比较' : '服務比較'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left w-1/6">{safeLang === 'en' ? 'Feature' : safeLang === 'cn' ? '比较项目' : '比較專案'}</th>
                  <th className="p-4 text-left w-1/4">{safeLang === 'en' ? 'Export Lead Generation' : safeLang === 'cn' ? '外贸客户开发' : '外銷客戶開發'}</th>
                  <th className="p-4 text-left w-1/4">{safeLang === 'en' ? 'Distributor Development' : safeLang === 'cn' ? '经销商开发' : '經銷商開發'}</th>
                  <th className="p-4 text-left w-1/4">{safeLang === 'en' ? 'Export Sales Outsourcing' : safeLang === 'cn' ? '外贸业务外包' : '外銷業務外包'}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">{safeLang === 'en' ? 'Goal' : safeLang === 'cn' ? '目标' : '目標'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'Find buyers & generate qualified inquiries' : safeLang === 'cn' ? '找到海外买家并产出合格询价' : '找到海外買家並產出合格詢價'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'Sign partners & build coverage' : safeLang === 'cn' ? '找到并签下通路伙伴，建立覆盖' : '找到並簽下通路夥伴，建立覆蓋'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'Systematize export sales & follow-up' : safeLang === 'cn' ? '把外贸开发与跟进做成可交付系统' : '把外銷開發與跟進做成可交付系統'}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">{safeLang === 'en' ? 'Process' : safeLang === 'cn' ? '流程' : '流程'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'ICP → List → Outreach → Cadence → Triage' : safeLang === 'cn' ? '理想客户 → 名单 → 信息 → 跟进节奏 → 回复分类' : '理想客戶 → 名單 → 訊息 → 跟進節奏 → 回覆分類'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'Map → Channels → Partners → Terms → Sign' : safeLang === 'cn' ? '市场分层 → 通路地图 → 伙伴名单 → 合作方案 → 推进签约' : '市場分層 → 通路地圖 → 夥伴名單 → 合作方案 → 推進簽約'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'List + Outreach + Follow-up + Qualification + Handover' : safeLang === 'cn' ? '名单＋开发＋跟进＋初步资格审核＋询价交付' : '名單＋開發＋跟進＋初步資格審核＋詢價交付'}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">{safeLang === 'en' ? 'Deliverables' : safeLang === 'cn' ? '交付内容' : '交付內容'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'Verified List (Excel) + Inquiry Summaries' : safeLang === 'cn' ? '可用名单（Excel）＋询价整理' : '可用名單（Excel）＋詢價整理'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'Trackable List + Terms Framework + Meetings' : safeLang === 'cn' ? '可追踪通路名单＋合作条件框架＋会议' : '可追蹤通路名單＋合作條件框架＋會議'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'Continuous Qualified Inquiries + Pipeline' : safeLang === 'cn' ? '合格询价持续交付＋可追踪 pipeline' : '合格詢價持續交付＋可追蹤 pipeline'}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">{safeLang === 'en' ? 'Contract Term' : safeLang === 'cn' ? '合约期' : '合約期'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? '1 Year' : safeLang === 'cn' ? '1 年' : '1 年'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? '1 Year' : safeLang === 'cn' ? '1 年' : '1 年'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? '1 Year' : safeLang === 'cn' ? '1 年' : '1 年'}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">{safeLang === 'en' ? 'Timeline' : safeLang === 'cn' ? '交付时程' : '交付時程'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? '4–8 Weeks (varies by market)' : safeLang === 'cn' ? '4–8 周（视市场/产业）' : '4–8 週（視市場/產業）'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? '12–18 Weeks (sourcing + negotiation)' : safeLang === 'cn' ? '12-18 周（找人＋谈条件）' : '12-18 週（找人＋談條件）'}</td>
                  <td className="p-4 text-gray-700">{safeLang === 'en' ? 'Monthly Delivery Reviews' : safeLang === 'cn' ? '每月交付讨论（同步所有开发进度）' : '每月交付討論（同步所有開發進度）'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}