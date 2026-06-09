import Link from 'next/link'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import { Droplets, Zap, Cpu, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = (['en', 'zh'].includes(rawLang) ? rawLang : 'en') as Lang
  return {
    title:
      lang === 'en'
        ? 'Industrial IoT for Remote Monitoring of Water, Energy & Equipment | SunGene'
        : '工業物聯網 — 水、能源與設備遠端監控 | SunGene',
    description:
      lang === 'en'
        ? 'SunGene supplies industrial IoT gateways, sensors, meters and controllers for remote monitoring and data acquisition — Modbus, BACnet, MQTT, RS485, LoRaWAN, NB-IoT and 4G. OEM/ODM welcome.'
        : 'SunGene 提供工業物聯網閘道器、感測器、電錶與控制器，用於遠端監控與數據採集——支援 Modbus、BACnet、MQTT、RS485、LoRaWAN、NB-IoT 與 4G，歡迎 OEM/ODM。',
    alternates: getAlternates(lang),
  }
}

const C = {
  en: {
    heroTitle: 'Remote Monitoring Solutions for Water, Energy and Industrial Equipment',
    heroSub: 'Powered by Industrial IoT technologies including LoRaWAN, NB-IoT and RS485.',
    heroOem: 'OEM & Private Label Ready — for Distributors and System Integrators',
    ctaCatalog: 'Request Product Catalog',
    ctaPartner: 'Become a Partner',
    ctaContact: 'Contact Sales',
    whyTitle: 'Why SunGene',
    why: ['Taiwan Team', 'China Manufacturing', 'OEM Ready', 'Low MOQ', 'English Support', 'Export Experience'],
    cityKicker: 'Smart City & Smart Building',
    cityTitle: 'The field layer that smart cities and smart buildings run on',
    citySub: 'Every smart city and smart building starts with reliable data from the field. Our gateways, sensors and meters are the foundation layer — capturing water, energy and equipment data and streaming it, standardized over LoRaWAN, NB-IoT, RS485 and 4G, into the dashboards, platforms and AI engines that run modern infrastructure.',
    cityCards: [
      { title: 'Smart Water Networks', desc: 'City-wide tank level, pump and leak monitoring for utilities and districts.' },
      { title: 'Smart Energy & Buildings', desc: 'Metering, solar and HVAC/equipment data across campuses and facilities.' },
      { title: 'AI-Ready Data', desc: 'Clean, standardized data streams — ready to feed analytics, digital dashboards and AI-driven optimization as you scale.' },
    ],
    cityVision: 'From field sensors today to AI-driven, data-optimized infrastructure tomorrow — SunGene is the hardware foundation you build on.',
    solutionsKicker: 'Solutions',
    solutionsTitle: 'What we help you monitor',
    water: { title: 'Water Monitoring', desc: 'Tank level, water leak and pump monitoring for utilities and facilities.' },
    energy: { title: 'Energy Monitoring', desc: 'Smart metering, energy data collection and solar site monitoring.' },
    equip: { title: 'Equipment Monitoring', desc: 'Temperature, RS485 data acquisition and alarm notification for remote assets.' },
    learn: 'Learn more',
    techTitle: 'Built on proven industrial connectivity',
    partnerTitle: 'Looking for an Industrial IoT Partner?',
    partnerSub: 'Become a Distributor or System Integrator Partner. OEM and private-label programs available.',
    partnerCta: 'Explore Partner Programs',
  },
  zh: {
    heroTitle: '水、能源與工業設備的遠端監控解決方案',
    heroSub: '採用 LoRaWAN、NB-IoT、RS485 等工業物聯網技術。',
    heroOem: '支援 OEM 與貼牌——專為經銷商與系統整合商打造',
    ctaCatalog: '索取產品型錄',
    ctaPartner: '成為合作夥伴',
    ctaContact: '聯絡業務',
    whyTitle: '為什麼選 SunGene',
    why: ['台灣團隊', '中國製造', 'OEM 製造', '低起訂量', '英文支援', '外銷經驗'],
    cityKicker: '智慧城市與智慧建築',
    cityTitle: '智慧城市與智慧建築運作的現場數據層',
    citySub: '每一個智慧城市與智慧建築,都始於現場可靠的數據。我們的閘道器、感測器與電錶就是最底層的基礎——擷取水、能源與設備數據,並透過 LoRaWAN、NB-IoT、RS485 與 4G 以標準化方式串流到儀表板、平台與 AI 引擎,驅動現代基礎設施。',
    cityCards: [
      { title: '智慧水務網絡', desc: '為自來水與區域提供全城的水位、泵浦與漏水監控。' },
      { title: '智慧能源與建築', desc: '園區與廠辦的計量、太陽能與 HVAC/設備數據。' },
      { title: 'AI-Ready 數據', desc: '乾淨、標準化的數據流——隨規模擴張,可直接餵入分析、數位儀表板與 AI 最佳化。' },
    ],
    cityVision: '從今天的現場感測器,到明天 AI 驅動、數據最佳化的基礎設施——SunGene 是你建構其上的硬體基石。',
    solutionsKicker: '解決方案',
    solutionsTitle: '我們協助您監控的場景',
    water: { title: '水監控', desc: '為自來水與廠務提供水位、漏水與泵浦的遠端監控。' },
    energy: { title: '能源監控', desc: '智慧電錶、能源數據採集與太陽能場域監控。' },
    equip: { title: '設備監控', desc: '溫度、RS485 數據採集與遠端資產的告警通知。' },
    learn: '了解更多',
    techTitle: '建構於成熟的工業連線技術',
    partnerTitle: '正在尋找工業物聯網合作夥伴？',
    partnerSub: '成為經銷商或系統整合商夥伴，並提供 OEM 與貼牌方案。',
    partnerCta: '查看合作方案',
  },
} as const

const TECH = ['LoRaWAN', 'NB-IoT', 'RS485', 'Modbus', '4G LTE']

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en', 'zh'].includes(rawLang) ? rawLang : 'en') as Lang
  const c = C[lang]

  const cards = [
    { ...c.water, slug: 'water-monitoring', Icon: Droplets },
    { ...c.energy, slug: 'energy-monitoring', Icon: Zap },
    { ...c.equip, slug: 'equipment-monitoring', Icon: Cpu },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            SunGene Industrial IoT
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{c.heroTitle}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">{c.heroSub}</p>
          <p className="mx-auto mt-4 inline-block rounded-full border border-blue-400/60 px-4 py-1.5 text-sm font-medium text-blue-200">
            {c.heroOem}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/resources`} className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-blue-50">
              {c.ctaCatalog} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${lang}/partners`} className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500">
              {c.ctaPartner} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${lang}/contact?type=quote`} className="inline-flex items-center gap-2 rounded-sm border border-blue-300/70 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800">
              {c.ctaContact} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{c.solutionsKicker}</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">{c.solutionsTitle}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cards.map(({ title, desc, slug, Icon }) => (
              <Link
                key={slug}
                href={`/${lang}/solutions/${slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  {c.learn} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies band */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">{c.techTitle}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TECH.map((tech) => (
              <span key={tech} className="text-lg font-bold tracking-tight text-gray-700">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why SunGene strip */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">{c.whyTitle}</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {c.why.map((w) => (
              <div key={w} className="rounded-lg border border-gray-200 bg-white px-3 py-4 text-sm font-semibold text-gray-700 shadow-sm">
                {w}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart City & Smart Building vision */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{c.cityKicker}</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold">{c.cityTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-blue-100">{c.citySub}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.cityCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium text-blue-200">{c.cityVision}</p>
        </div>
      </section>

      {/* Partner strip */}
      <section className="bg-blue-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">{c.partnerTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{c.partnerSub}</p>
          <Link href={`/${lang}/partners`} className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-blue-50">
            {c.partnerCta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
