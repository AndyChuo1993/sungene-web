import type { Metadata } from 'next'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import { Check, ArrowRight } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title: lang === 'en' ? 'About | SunGene Industrial IoT' : '關於我們 | SunGene 工業物聯網',
    description:
      lang === 'en'
        ? 'SunGene is a Taiwan-based Industrial IoT partner with an ODM/OEM network and China supply chain, serving international customers.'
        : 'SunGene 是台灣為基地的工業物聯網夥伴，擁有 ODM/OEM 網絡與中國供應鏈，服務國際客戶。',
    alternates: getAlternates(lang, '/about'),
  }
}

const C = {
  en: {
    title: 'Taiwan-Based Industrial IoT Partner',
    intro: 'SunGene is an Industrial IoT brand and international channel operator, building ODM/OEM and private-label remote monitoring solutions through global distributor and system-integrator networks — combining international business experience with a China-backed manufacturing network.',
    capTitle: 'What we bring',
    caps: [
      { t: 'ODM / OEM Network', d: 'Access to proven manufacturing partners for gateways, sensors and meters.' },
      { t: 'China Supply Chain', d: 'A China-backed supply network for competitive, scalable production.' },
      { t: 'International Business Experience', d: 'Export-ready processes, documentation and English communication.' },
    ],
    whyTitle: 'Why buy from SunGene?',
    whySub: 'A fair question if you could go direct to a factory. Here is the difference:',
    why: ['Taiwan-based service', 'China manufacturing network', 'Fast OEM support', 'Low MOQ', 'English communication', 'Export experience'],
    companyTitle: 'Company',
    companyIntro: 'Built by a team that has been running businesses since 2014, SunGene launched its Industrial IoT brand in 2023. SunGene Co., Ltd. operates from Taiwan with a China operations base in Xiamen — combining Taiwan-based service and quality control with direct access to the China manufacturing supply chain.',
    locations: [
      { label: 'Taiwan (head office)', name: 'SunGene Co., Ltd.', addr: 'No. 201, Guangfu Rd., Central District, Taichung City, Taiwan', est: 'Established 2023' },
      { label: 'China (operations)', name: 'Xiamen Shangjinlai Trading Co., Ltd. (SunGene)', addr: "Unit 1001-2, Building A1, Yincheng Zhigu, No. 6788-1 Binhai West Ave., Tong'an District, Xiamen, Fujian, China", est: 'Established 2025' },
    ],
    ctaTitle: 'Ready to talk?',
    cta: 'Contact us',
  },
  zh: {
    title: '台灣為基地的工業物聯網夥伴',
    intro: 'SunGene 是工業物聯網品牌與國際通路營運商，透過 ODM/OEM、品牌貼牌、經銷商與系統整合商網路，提供遠端監測與資料採集解決方案——結合國際業務經驗與中國供應鏈製造網絡。',
    capTitle: '我們能提供',
    caps: [
      { t: 'ODM / OEM 網絡', d: '對接成熟的閘道器、感測器與電錶製造夥伴。' },
      { t: '中國供應鏈', d: '以中國供應網絡支援具競爭力且可規模化的生產。' },
      { t: '國際業務經驗', d: '具備外銷流程、文件與英文溝通能力。' },
    ],
    whyTitle: '為什麼向 SunGene 採購？',
    whySub: '如果您能直接找工廠，這是合理的問題。差異在於：',
    why: ['台灣在地服務', '中國製造網絡', '快速 OEM 支援', '低起訂量', '英文溝通', '外銷經驗'],
    companyTitle: '公司資訊',
    companyIntro: '由自 2014 年起經營企業的團隊打造，SunGene 於 2023 年推出工業物聯網品牌。SunGene Co., Ltd. 以台灣為總部，並於中國廈門設有營運據點——結合台灣在地服務與品質把關，以及直連中國製造供應鏈的優勢。',
    locations: [
      { label: '台灣（總部）', name: 'SunGene Co., Ltd.', addr: '台中市中區光復路201號', est: '成立於 2023 年' },
      { label: '中國（營運）', name: '廈門上瑾錸貿易有限公司（SunGene）', addr: '廈門市同安區濱海西大道6788-1號銀城智谷A1棟1001單元之二', est: '成立於 2025 年' },
    ],
    ctaTitle: '準備好聊聊了嗎？',
    cta: '聯絡我們',
  },
} as const

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const c = C[lang]

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900">{c.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-600">{c.intro}</p>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">{c.capTitle}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {c.caps.map((cap) => (
              <div key={cap.t} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">{cap.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{cap.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-gray-50 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900">{c.whyTitle}</h2>
          <p className="mt-2 text-gray-600">{c.whySub}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.why.map((w) => (
              <li key={w} className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
                <Check className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="font-medium text-gray-800">{w}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">{c.companyTitle}</h2>
          <p className="mt-3 leading-relaxed text-gray-600">{c.companyIntro}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {c.locations.map((loc) => (
              <div key={loc.label} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-wide text-blue-700">{loc.label}</div>
                <div className="mt-2 font-bold text-gray-900">{loc.name}</div>
                <div className="mt-1 text-sm leading-relaxed text-gray-600">{loc.addr}</div>
                <div className="mt-2 text-sm text-gray-500">{loc.est}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{c.ctaTitle}</h2>
          <Link href={`/${lang}/contact`} className="mt-6 inline-flex items-center gap-2 rounded-sm bg-blue-900 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800">
            {c.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  )
}
