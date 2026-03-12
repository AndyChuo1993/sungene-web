import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '海外客戶開發服務 | Cold Outreach | SunGene',
  description: '系統化的外貿客戶開發服務，透過高回覆率的開發信 (Cold Email) 與 LinkedIn 社交銷售，協助企業建立商務對話。',
  keywords: '海外客戶開發, 外貿開發信, Cold Email, LinkedIn開發, 主動式銷售',
  openGraph: {
    title: '海外客戶開發服務 | Cold Outreach | SunGene',
    description: '系統化的外貿客戶開發服務，透過高回覆率的開發信 (Cold Email) 與 LinkedIn 社交銷售。',
    type: 'website',
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <div className="inline-block bg-green-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
             {lang === 'zh' ? '海外客戶開發' : 'Cold Outreach Service'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '主動出擊，建立商務連結' : 'Proactive Outreach, Building Connections'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '透過系統化的 Cold Email 與 LinkedIn 開發流程，讓潛在客戶看見您的產品價值。' 
              : 'Systematic Cold Email and LinkedIn outreach processes to showcase your product value to prospects.'}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={`/${lang}/free-market-analysis`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition">
                {t(lang, 'cta_analysis')}
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '服務內容' : 'Service Details'}</h2>
                <div className="prose prose-lg text-gray-600 mb-12">
                    <p>
                        {lang === 'zh' 
                         ? '開發信寄出後石沉大海？這是大多數外貿企業的痛點。SunGene 的開發服務不僅僅是發送郵件，而是透過精心設計的文案、多波段跟進策略以及 A/B 測試，找出最有效的溝通方式。'
                         : 'Cold emails ignored? SunGene goes beyond sending emails. We use crafted copy, multi-touch follow-ups, and A/B testing to find the most effective communication strategy.'}
                    </p>
                    <ul className="space-y-4 list-none pl-0">
                        <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-2">✓</span>
                            <span>
                                <strong>{lang === 'zh' ? '客製化文案撰寫' : 'Custom Copywriting'}</strong>: 
                                {lang === 'zh' ? ' 針對不同職位（採購 vs 工程師）設計不同的切入點。' : ' Tailored angles for different roles (Purchasing vs Engineer).'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-2">✓</span>
                            <span>
                                <strong>{lang === 'zh' ? '多波段自動化跟進' : 'Automated Follow-ups'}</strong>: 
                                {lang === 'zh' ? ' 建立 4-7 封信件序列，顯著提升回覆率。' : ' 4-7 email sequences to boost reply rates significantly.'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-2">✓</span>
                            <span>
                                <strong>{lang === 'zh' ? 'LinkedIn 社交銷售' : 'LinkedIn Social Selling'}</strong>: 
                                {lang === 'zh' ? ' 建立專業形象，透過私訊建立更親近的商務關係。' : ' Building professional image and closer relationships via DM.'}
                            </span>
                        </li>
                    </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '為什麼選擇我們？' : 'Why Choose Us?'}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '平均開信率 40%+' : '40%+ Open Rate'}</h4>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '遠高於業界平均，確保訊息被看見。' : 'Far above industry average, ensuring visibility.'}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-green-600">
                        <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '拒絕罐頭訊息' : 'No Generic Spam'}</h4>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '高度個性化的內容，建立信任感。' : 'Highly personalized content builds trust.'}</p>
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '常見問題' : 'FAQ'}</h3>
                <div className="space-y-4 mb-12">
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '這算是發垃圾信嗎？' : 'Is this spamming?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '不是。我們發送的是針對特定對象的高相關性商務信件 (Cold Email)，並非大量群發的垃圾郵件 (Spam)。我們會嚴格遵守各國的反垃圾郵件法規。' : 'No. We send highly relevant business emails (Cold Email) to specific targets, not mass spam. We strictly adhere to anti-spam regulations.'}
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '可以用我們公司的名義發送嗎？' : 'Send on our behalf?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '可以。我們可以協助設定專屬的發信域名，讓收件人看到的是來自貴公司的郵件，提升專業度與信任感。' : 'Yes. We can help set up a dedicated sending domain so recipients see emails coming from your company, enhancing professionalism and trust.'}
                        </div>
                    </details>
                </div>

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-green-50 p-8 rounded-sm border border-green-100 sticky top-24">
                    <h3 className="text-xl font-bold text-green-900 mb-4">{lang === 'zh' ? '預約策略諮詢' : 'Strategy Consultation'}</h3>
                    <p className="text-green-800 mb-6 text-sm">
                        {lang === 'zh' ? '不確定如何開始？與我們的外貿顧問聊聊您的產品與目標市場。' : 'Not sure where to start? Talk to our consultants about your product and target market.'}
                    </p>
                    <Link href={`/${lang}/contact`} className="block w-full bg-green-600 text-white font-bold py-3 rounded-sm hover:bg-green-700 transition text-center">
                        {lang === 'zh' ? '預約免費諮詢' : 'Book Free Consultation'}
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}
