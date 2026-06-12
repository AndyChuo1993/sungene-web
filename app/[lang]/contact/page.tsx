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
    f_name: 'Your Name', f_company: 'Company', f_email: 'Business Email', f_country: 'Country / Region', f_message: 'Message', f_product: 'Product / Solution of interest',
    reach: 'Other ways to reach us',
    officeTW: 'Taiwan office', opsCN: 'China operations',
  },
  zh: {
    Contact: { title: '聯絡我們', sub: '告訴我們您的監控專案，我們會盡快回覆。', submit: '送出訊息' },
    'Catalog Request': { title: '索取產品型錄', sub: '留下您的聯絡資訊，我們將以電子郵件寄送最新產品型錄。', submit: '索取型錄' },
    'Quote Request': { title: '索取報價', sub: '告訴我們您的需求，我們將為您準備報價。', submit: '索取報價' },
    f_name: '姓名', f_company: '公司名稱', f_email: '公司電子郵件', f_country: '國家 / 地區', f_message: '訊息內容', f_product: '感興趣的產品 / 方案',
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
                { name: 'targetCountry', label: c.f_country, type: 'text' },
                ...(kind === 'Quote Request'
                  ? [{ name: 'productName', label: c.f_product, type: 'text' as const }]
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
