import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import InquiryForm from '@/components/InquiryForm'
import { Handshake, Cpu, Tag, Check } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title: lang === 'en' ? 'Partner Programs | SunGene Industrial IoT' : '合作夥伴計畫 | SunGene 工業物聯網',
    description:
      lang === 'en'
        ? 'Become a distributor, system integrator or OEM partner of SunGene Industrial IoT. OEM support, low MOQ, fast response and export experience.'
        : '成為 SunGene 工業物聯網的經銷商、系統整合商或 OEM 合作夥伴。提供 OEM 支援、低起訂量、快速回應與外銷經驗。',
    alternates: getAlternates(lang, '/partners'),
  }
}

const C = {
  en: {
    kicker: 'Partners',
    title: 'Build your Industrial IoT business with SunGene',
    intro: 'Most of our customers reach the field through partners. If you sell, integrate or specify monitoring systems, we want to work with you.',
    programs: [
      { Icon: Handshake, title: 'Distributor Program', desc: 'Resell SunGene gateways, sensors and meters in your region with distributor pricing and stock support.' },
      { Icon: Cpu, title: 'System Integrator Program', desc: 'Specify and integrate our devices into your monitoring projects with technical and documentation support.' },
      { Icon: Tag, title: 'OEM / Private Label Program', desc: 'Put your brand on proven hardware with flexible MOQ and ODM/OEM customization.' },
    ],
    whyTitle: 'Why partner with SunGene',
    why: ['OEM Support', 'Low MOQ', 'Export Experience', 'Fast Response', 'Flexible Product Portfolio'],
    formTitle: 'Become a Partner',
    formIntro: 'Tell us about your business and the programs you are interested in.',
    submit: 'Submit Partner Inquiry',
  },
  zh: {
    kicker: '合作夥伴',
    title: '與 SunGene 一起拓展工業物聯網業務',
    intro: '我們大多數的客戶都是透過合作夥伴觸及現場。若您從事監控系統的銷售、整合或規格指定，我們希望與您合作。',
    programs: [
      { Icon: Handshake, title: '經銷商計畫', desc: '在您的區域轉售 SunGene 閘道器、感測器與電錶，享經銷價與備貨支援。' },
      { Icon: Cpu, title: '系統整合商計畫', desc: '將我們的設備整合進您的監控專案，提供技術與文件支援。' },
      { Icon: Tag, title: 'OEM / 貼牌計畫', desc: '以成熟硬體掛上您的品牌，提供彈性起訂量與 ODM/OEM 客製。' },
    ],
    whyTitle: '為什麼選擇 SunGene',
    why: ['OEM 支援', '低起訂量', '外銷經驗', '快速回應', '彈性產品組合'],
    formTitle: '成為合作夥伴',
    formIntro: '請告訴我們您的業務以及感興趣的合作計畫。',
    submit: '送出合作洽詢',
  },
} as const

export default async function Partners({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const c = C[lang]

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{c.kicker}</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">{c.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{c.intro}</p>
        </header>

        {/* Programs */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {c.programs.map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-gray-900">{title}</h2>
              <p className="mt-3 leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        {/* Why partner */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">{c.whyTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.why.map((w) => (
              <li key={w} className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3">
                <Check className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="font-medium text-gray-800">{w}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Form */}
        <section id="apply" className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-2xl font-bold text-gray-900">{c.formTitle}</h2>
          <p className="mt-2 text-gray-600">{c.formIntro}</p>
          <div className="mt-8 max-w-2xl">
            <InquiryForm
              lang={lang}
              type="Partner Inquiry"
              submitLabel={c.submit}
              fields={[
                { name: 'name', label: lang === 'en' ? 'Your Name' : '姓名', type: 'text', required: true, autoComplete: 'name' },
                { name: 'company', label: lang === 'en' ? 'Company' : '公司名稱', type: 'text', required: true },
                { name: 'email', label: lang === 'en' ? 'Business Email' : '公司電子郵件', type: 'email', required: true, autoComplete: 'email' },
                { name: 'targetCountry', label: lang === 'en' ? 'Country / Region' : '國家 / 地區', type: 'text' },
                { name: 'message', label: lang === 'en' ? 'Which program(s) and what do you sell or integrate?' : '感興趣的計畫，以及您銷售或整合的項目', type: 'textarea', rows: 4, required: true },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
