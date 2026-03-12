import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '客戶名單開發服務 | Lead Generation | SunGene',
  description: '專業 B2B 海外買家名單建立服務。透過海關數據、產業資料庫與人工篩選，為您提供精準的決策者聯絡方式。',
  keywords: '客戶名單開發, B2B名單, 海外買家資料, 決策人聯絡方式, 潛在客戶名單',
  openGraph: {
    title: '客戶名單開發服務 | Lead Generation | SunGene',
    description: '專業 B2B 海外買家名單建立服務。為您提供精準的決策者聯絡方式。',
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
          <div className="inline-block bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
             {lang === 'zh' ? '客戶名單開發' : 'Lead Generation Service'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '不再為「找不到客戶」煩惱' : 'Stop Worrying About "Finding Clients"'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh' 
              ? '我們為您建立高精準度的海外買家名單，包含關鍵決策者的直接聯絡方式。' 
              : 'We build high-precision overseas buyer lists for you, including direct contact details of key decision-makers.'}
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
                         ? '許多企業在外貿開發時，花費大量時間在網路上搜尋客戶，卻往往只找到無效的 Info 信箱或總機電話。SunGene 的名單開發服務，結合了數據科技與人工驗證，協助您直接鎖定目標市場的潛在買家。'
                         : 'Many companies waste time searching for clients online, only to find generic info emails. SunGene combines data technology with manual verification to help you target potential buyers directly.'}
                    </p>
                    <ul className="space-y-4 list-none pl-0">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-2">✓</span>
                            <span>
                                <strong>{lang === 'zh' ? '精準決策人定位' : 'Decision Maker Targeting'}</strong>: 
                                {lang === 'zh' ? ' 鎖定採購經理、研發總監、執行長等關鍵角色。' : ' Targeting Purchasing Managers, R&D Directors, CEOs.'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-2">✓</span>
                            <span>
                                <strong>{lang === 'zh' ? '多維度數據驗證' : 'Multi-dimensional Verification'}</strong>: 
                                {lang === 'zh' ? ' 交叉比對 LinkedIn、公司官網、海關數據，確保資料準確。' : ' Cross-referencing LinkedIn, websites, and customs data.'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-2">✓</span>
                            <span>
                                <strong>{lang === 'zh' ? '客製化篩選條件' : 'Custom Filtering'}</strong>: 
                                {lang === 'zh' ? ' 根據產業、規模、地區、進口量等條件篩選。' : ' Filtering by industry, size, region, import volume.'}
                            </span>
                        </li>
                    </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '為什麼選擇我們？' : 'Why Choose Us?'}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '節省 80% 時間' : 'Save 80% Time'}</h4>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '讓業務團隊專注於溝通，而不是找資料。' : 'Let sales focus on communication, not research.'}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-green-600">
                        <h4 className="font-bold text-gray-900 mb-2">{lang === 'zh' ? '資料準確率 95%+' : '95%+ Accuracy'}</h4>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '嚴格的驗證流程，降低退信率。' : 'Strict verification to minimize bounce rates.'}</p>
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '常見問題' : 'FAQ'}</h3>
                <div className="space-y-4 mb-12">
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '名單包含哪些欄位？' : 'What fields are included?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '通常包含：公司名稱、網址、國家、聯絡人姓名、職稱、Email、LinkedIn 個人頁面連結（若有）。' : 'Typically includes: Company Name, Website, Country, Contact Person, Title, Email, LinkedIn Profile (if available).'}
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '最少需要購買多少筆？' : 'Minimum order quantity?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '我們建議專案啟動至少以 500 筆為單位，這樣才能有足夠的樣本數進行測試與優化。' : 'We recommend starting with at least 500 leads to have a sufficient sample size for testing and optimization.'}
                        </div>
                    </details>
                </div>

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-blue-50 p-8 rounded-sm border border-blue-100 sticky top-24">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{lang === 'zh' ? '索取名單範本' : 'Get Sample List'}</h3>
                    <p className="text-blue-800 mb-6 text-sm">
                        {lang === 'zh' ? '想確認資料品質？填寫表單，我們將寄送一份去識別化的名單範本給您參考。' : 'Want to check quality? Fill the form to get a de-identified sample list.'}
                    </p>
                    <Link href={`/${lang}/contact`} className="block w-full bg-blue-600 text-white font-bold py-3 rounded-sm hover:bg-blue-700 transition text-center">
                        {lang === 'zh' ? '聯繫我們索取' : 'Contact to Get Sample'}
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}
