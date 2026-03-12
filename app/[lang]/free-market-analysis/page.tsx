import { t, Lang } from '@/lib/i18n'
import InquiryForm, { FormField } from '@/components/InquiryForm'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'analysis_title') + ' | SunGene',
    description: t(lang, 'analysis_subtitle'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  const fields: FormField[] = [
    { name: 'company', label: t(lang, 'form_company'), type: 'text', required: true },
    { name: 'name', label: lang === 'zh' ? '聯絡人姓名' : 'Contact Person', type: 'text', required: true },
    { name: 'phone', label: lang === 'zh' ? '手機號碼' : 'Phone Number', type: 'tel', required: true },
    { name: 'product', label: t(lang, 'form_product'), type: 'text', required: true },
    { name: 'market', label: t(lang, 'form_market'), type: 'text', required: true },
    { name: 'currentChannels', label: lang === 'zh' ? '目前主要出口方式' : 'Current Export Channels', type: 'text' },
    { name: 'targetCountry', label: lang === 'zh' ? '想開發的國家' : 'Target Countries', type: 'text' },
    { name: 'goals', label: lang === 'zh' ? '每月預估開發目標' : 'Monthly Growth Goal', type: 'text' },
    { name: 'email', label: t(lang, 'form_email'), type: 'email', required: true },
    { name: 'details', label: lang === 'zh' ? '補充說明' : 'Notes', type: 'textarea', rows: 3 },
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t(lang, 'analysis_title')}</h1>
          <p className="text-xl text-gray-600">{t(lang, 'analysis_subtitle')}</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg border border-gray-100">
          <InquiryForm 
            lang={lang}
            type="Free Analysis"
            fields={fields}
            submitLabel={t(lang, 'form_submit')}
            successTitle={t(lang, 'form_success_title')}
            successDesc={t(lang, 'form_success_desc')}
            errorTitle={t(lang, 'form_error_title')}
            errorDesc={t(lang, 'form_error_desc')}
          />
        </div>

        {/* FAQ Section */}
        <div className="mt-24 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">{lang === 'zh' ? '常見問題' : 'FAQ'}</h2>
          {[
            { 
              q: lang === 'zh' ? 'Q: 分析報告包含什麼內容？' : 'Q: What does the report include?',
              a: lang === 'zh' ? '包含目標市場的進口數據概況、潛在買家類型分析、以及針對您產品的初步開發策略建議。' : 'It includes an overview of import data for target markets, analysis of potential buyer types, and initial outreach strategy recommendations for your product.'
            },
            { 
              q: lang === 'zh' ? 'Q: 需要提供很詳細的產品資料嗎？' : 'Q: Do I need to provide detailed product info?',
              a: lang === 'zh' ? '不需要機密資料。只需提供產品名稱、網址或目錄連結，讓我們了解您的產品定位即可。' : 'No confidential data needed. Just product names, website, or catalog links to help us understand your positioning.'
            },
            { 
              q: lang === 'zh' ? 'Q: 此服務真的免費嗎？' : 'Q: Is this service really free?',
              a: lang === 'zh' ? '是的。我們希望透過這份報告展現 SunGene 的數據能力，讓您在決定合作前先體驗我們的專業度。' : 'Yes. We want to demonstrate SunGene\'s data capabilities through this report, allowing you to experience our professionalism before deciding to cooperate.'
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
