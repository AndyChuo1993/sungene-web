import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import InquiryForm from '@/components/InquiryForm'
import { Mail, MessageCircle, Linkedin, Phone } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

type FormKind = 'Contact' | 'Catalog Request' | 'Quote Request'

function resolveKind(type?: string): FormKind {
  if (type === 'catalog') return 'Catalog Request'
  if (type === 'quote') return 'Quote Request'
  return 'Contact'
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title: lang === 'en' ? 'Contact | SunGene Industrial IoT' : '聯絡我們 | SunGene 工業物聯網',
    description:
      lang === 'en'
        ? 'Contact SunGene Industrial IoT for product catalogs, quotes and remote monitoring projects.'
        : '聯絡 SunGene 工業物聯網，索取產品型錄、報價或洽詢遠端監控專案。',
    alternates: getAlternates(lang, '/contact'),
  }
}

const C = {
  en: {
    Contact: { title: 'Contact Us', sub: 'Tell us about your monitoring project and we will get back to you.', submit: 'Send Message' },
    'Catalog Request': { title: 'Request Product Catalog', sub: 'Leave your details and we will email you our latest product catalog.', submit: 'Request Catalog' },
    'Quote Request': { title: 'Request a Quote', sub: 'Tell us what you need and we will prepare a quotation.', submit: 'Request Quote' },
    f_name: 'Your Name',
    f_company: 'Company',
    f_email: 'Business Email',
    f_country: 'Country / Region',
    f_targetCountry: 'Target country / LTE band region',
    f_message: 'Additional notes',
    f_product: 'Product / Solution of interest',
    f_application: 'Application',
    f_scope: 'Sensor list or measured parameters',
    f_platform: 'Gateway / platform requirement',
    f_power: 'Power',
    f_quantity: 'Quantity',
    f_stage: 'Sample / pilot / mass production',
    f_certificates: 'Required certificates',
    f_timeline: 'Timeline',
    reach: 'Other ways to reach us',
    officeTW: 'Taiwan office', opsCN: 'China operations',
  },
  zh: {
    Contact: { title: '聯絡我們', sub: '告訴我們您的監控專案，我們會盡快回覆。', submit: '送出訊息' },
    'Catalog Request': { title: '索取產品型錄', sub: '留下您的聯絡資訊，我們將以電子郵件寄送最新產品型錄。', submit: '索取型錄' },
    'Quote Request': { title: '索取報價', sub: '告訴我們您的需求，我們將為您準備報價。', submit: '索取報價' },
    f_name: '姓名',
    f_company: '公司名稱',
    f_email: '公司電子郵件',
    f_country: '國家 / 地區',
    f_targetCountry: '目標國家 / LTE 頻段區域',
    f_message: '補充說明',
    f_product: '感興趣的產品 / 方案',
    f_application: '應用場景',
    f_scope: '感測器清單或量測參數',
    f_platform: '閘道器 / 平台需求',
    f_power: '供電方式',
    f_quantity: '數量',
    f_stage: '樣品 / 試點 / 量產',
    f_certificates: '需要的認證',
    f_timeline: '時程',
    reach: '其他聯絡方式',
    officeTW: '台灣辦公室', opsCN: '中國營運',
  },
} as const

export default async function Contact({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ type?: string }>
}) {
  const { lang: rawLang } = await params
  const { type } = await searchParams
  const lang = pickLang(rawLang)
  const kind = resolveKind(type)
  const c = C[lang]
  const k = c[kind]

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h1 className="text-4xl font-bold text-gray-900">{k.title}</h1>
          <p className="mt-3 text-lg text-gray-600">{k.sub}</p>
          <div className="mt-8 max-w-2xl">
            <InquiryForm
              lang={lang}
              type={kind}
              submitLabel={k.submit}
              fields={[
                { name: 'name', label: c.f_name, type: 'text', required: true, autoComplete: 'name' },
                { name: 'company', label: c.f_company, type: 'text' },
                { name: 'email', label: c.f_email, type: 'email', required: true, autoComplete: 'email' },
                {
                  name: 'targetCountry',
                  label: kind === 'Quote Request' ? c.f_targetCountry : c.f_country,
                  type: 'text',
                  required: kind === 'Quote Request',
                  placeholder: lang === 'en' ? 'e.g. South Africa / LTE B3, B8, B20 if known' : '例如：南非 / 已知 LTE B3、B8、B20',
                },
                ...(kind === 'Quote Request'
                  ? [
                      { name: 'productName', label: c.f_product, type: 'text' as const, placeholder: lang === 'en' ? 'e.g. 4G LTE gateway + RS485 sensors' : '例如：4G LTE 閘道器 + RS485 感測器' },
                      {
                        name: 'topic',
                        label: c.f_application,
                        type: 'select' as const,
                        required: true,
                        placeholder: lang === 'en' ? 'Select application' : '選擇應用',
                        options:
                          lang === 'en'
                            ? [
                                { value: 'water', label: 'Water' },
                                { value: 'agriculture', label: 'Agriculture' },
                                { value: 'energy', label: 'Energy' },
                                { value: 'weather', label: 'Weather' },
                                { value: 'equipment', label: 'Equipment' },
                                { value: 'other', label: 'Other' },
                              ]
                            : [
                                { value: 'water', label: '水務' },
                                { value: 'agriculture', label: '農業' },
                                { value: 'energy', label: '能源' },
                                { value: 'weather', label: '氣象' },
                                { value: 'equipment', label: '設備' },
                                { value: 'other', label: '其他' },
                              ],
                      },
                      {
                        name: 'scope',
                        label: c.f_scope,
                        type: 'textarea' as const,
                        rows: 3,
                        placeholder: lang === 'en' ? 'e.g. water level, pH, EC, weather, power meter, pump status' : '例如：水位、pH、EC、氣象、電表、泵浦狀態',
                      },
                      {
                        name: 'integrationType',
                        label: c.f_platform,
                        type: 'textarea' as const,
                        rows: 3,
                        placeholder: lang === 'en' ? 'e.g. MQTT, Modbus TCP, customer cloud, dashboard, ChirpStack' : '例如：MQTT、Modbus TCP、客戶雲、儀表板、ChirpStack',
                      },
                      {
                        name: 'powerRequirement',
                        label: c.f_power,
                        type: 'select' as const,
                        placeholder: lang === 'en' ? 'Select power source' : '選擇供電方式',
                        options:
                          lang === 'en'
                            ? [
                                { value: 'mains', label: 'Mains power' },
                                { value: 'solar', label: 'Solar' },
                                { value: 'battery', label: 'Battery' },
                                { value: 'hybrid', label: 'Hybrid / not sure' },
                              ]
                            : [
                                { value: 'mains', label: '市電' },
                                { value: 'solar', label: '太陽能' },
                                { value: 'battery', label: '電池' },
                                { value: 'hybrid', label: '混合 / 尚未確定' },
                              ],
                      },
                      { name: 'quantity', label: c.f_quantity, type: 'text' as const, placeholder: lang === 'en' ? 'e.g. 2 samples, 50 pcs pilot, 500 pcs/year' : '例如：2 台樣品、50 台試點、每年 500 台' },
                      {
                        name: 'productionStage',
                        label: c.f_stage,
                        type: 'select' as const,
                        placeholder: lang === 'en' ? 'Select project stage' : '選擇專案階段',
                        options:
                          lang === 'en'
                            ? [
                                { value: 'sample', label: 'Sample evaluation' },
                                { value: 'pilot', label: 'Pilot project' },
                                { value: 'mass-production', label: 'Mass production' },
                              ]
                            : [
                                { value: 'sample', label: '樣品評估' },
                                { value: 'pilot', label: '試點專案' },
                                { value: 'mass-production', label: '量產' },
                              ],
                      },
                      { name: 'certificates', label: c.f_certificates, type: 'text' as const, placeholder: lang === 'en' ? 'e.g. CE, RED, RoHS, FCC, other' : '例如：CE、RED、RoHS、FCC、其他' },
                      { name: 'timeline', label: c.f_timeline, type: 'text' as const, placeholder: lang === 'en' ? 'e.g. samples in July, pilot in Q3' : '例如：7 月樣品、Q3 試點' },
                    ]
                  : []),
                { name: 'message', label: c.f_message, type: 'textarea', rows: 4, required: kind === 'Contact' },
              ]}
            />
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-lg font-bold text-gray-900">{c.reach}</h2>
            <ul className="mt-6 space-y-5 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-700" />
                <a href="mailto:contact@sungeneiot.com" className="hover:text-blue-700">contact@sungeneiot.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                <span>
                  <a href="tel:+886437032705" className="hover:text-blue-700">+886 4 3703 2705</a>
                  <span className="ml-2 text-xs font-medium uppercase tracking-wide text-gray-400">{c.officeTW}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                <span>
                  <a href="https://wa.me/8618144132078" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                    WhatsApp: +86 181 4413 2078
                  </a>
                  <span className="ml-2 text-xs font-medium uppercase tracking-wide text-gray-400">{c.opsCN}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span>WeChat: 1814413278 <span className="ml-2 text-xs font-medium uppercase tracking-wide text-gray-400">{c.opsCN}</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 flex-shrink-0 text-blue-700" />
                <a href="https://www.linkedin.com/company/108298466/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}
