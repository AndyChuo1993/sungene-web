import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceComparison from '@/components/ServiceComparison'
import { Users, FileSpreadsheet, Target, BarChart3, ShieldCheck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: '目標客戶研究服務 | Target Customer Research | SunGene',
  description: '建立精準海外潛在客戶資料庫，幫助業務團隊快速接觸目標買家。',
  keywords: '目標客戶研究, 海外客戶名單, B2B名單, 採購決策人, 潛在客戶資料庫',
  openGraph: {
    title: '目標客戶研究服務 | Target Customer Research | SunGene',
    description: '建立精準海外潛在客戶資料庫，幫助業務團隊快速接觸目標買家。',
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
             {lang === 'zh' ? '目標客戶研究服務' : 'Target Customer Research Service'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'zh' ? '目標客戶研究服務' : 'Target Customer Research Service'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {lang === 'zh'
              ? '建立精準海外潛在客戶資料庫\n幫助業務團隊快速接觸目標買家'
              : 'Build a precise overseas prospect database\nso your sales team can reach target buyers faster'}
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
        <div className="mx-auto max-w-7xl px-6">
             <Breadcrumbs 
                 lang={lang} 
                 items={[
                     { label: lang === 'zh' ? '服務介紹' : 'Services', href: `/${lang}/services` },
                     { label: lang === 'zh' ? '目標客戶研究服務' : 'Target Customer Research', href: `/${lang}/services/lead-generation` }
                 ]} 
             />

            <div className="grid lg:grid-cols-12 gap-16 mt-8">
                <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '我們做什麼' : 'What We Do'}</h2>
                <div className="prose prose-lg text-gray-600 mb-12">
                    <p>
                        {lang === 'zh' 
                         ? '我們為企業建立精準的海外潛在客戶資料庫。'
                         : 'We build a precise overseas prospect database for manufacturers.'}
                    </p>
                    <p>
                        {lang === 'zh'
                         ? '透過市場分析與多來源資料整合，篩選出符合產品定位的目標客戶與採購決策人。'
                         : 'Through market analysis and multi-source data integration, we screen target customers and procurement decision-makers that match your positioning.'}
                    </p>
                    <p>
                        {lang === 'zh'
                         ? '所有資料經過人工與系統雙重驗證，確保客戶資料可直接用於業務開發。'
                         : 'All records are double-verified by systems and manual checks so the database is ready for outbound use.'}
                    </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '服務內容' : 'Service Scope'}</h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {[ 
                      lang === 'zh' ? '目標市場分析' : 'Target market analysis',
                      lang === 'zh' ? '目標客戶篩選' : 'Target customer screening',
                      lang === 'zh' ? '採購決策人識別' : 'Decision-maker identification',
                      lang === 'zh' ? '客戶資料建立' : 'Customer database building',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start p-4 border border-gray-100 rounded-lg bg-gray-50">
                        <span className="mt-1 text-blue-600">●</span>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who it is for */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '適合對象' : 'Best Fit'}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                      <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{lang === 'zh' ? '已有業務團隊的企業' : 'Companies with Sales Teams'}</h4>
                        <p className="text-sm text-gray-600 mt-1">{lang === 'zh' ? '缺乏精準海外客戶資料，導致開發效率低。' : 'Lack precise overseas data and struggle to scale outreach.'}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
                      <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{lang === 'zh' ? '需要快速接觸目標買家的企業' : 'Teams Needing Faster Buyer Access'}</h4>
                        <p className="text-sm text-gray-600 mt-1">{lang === 'zh' ? '希望以資料庫方式快速觸達採購決策人。' : 'Need a database-driven way to reach decision-makers quickly.'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '交付內容' : 'Deliverables'}</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                      <FileSpreadsheet className="w-10 h-10 text-green-600" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '海外目標客戶資料庫（Excel）' : 'Overseas Target Customer Database (Excel)'}</h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          {lang === 'zh' ? '資料包含：公司名稱、採購決策人、職位、Email、LinkedIn、公司網站。' : 'Includes: company name, decision-maker, title, email, LinkedIn, and website.'}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                      <Users className="w-10 h-10 text-blue-600" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '採購決策人識別' : 'Decision-maker Identification'}</h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          {lang === 'zh' ? '鎖定採購決策人與對應職位，提升觸達效率。' : 'Identify procurement decision-makers and relevant titles to improve reach.'}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 flex items-start gap-4">
                      <ShieldCheck className="w-10 h-10 text-indigo-600" />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{lang === 'zh' ? '可直接用於開發的資料' : 'Outbound-ready Data'}</h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          {lang === 'zh' ? '資料經過人工與系統驗證，交付後可直接用於業務開發。' : 'Double-verified by systems and manual checks to be ready for outreach.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '合作流程' : 'Workflow'}</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex gap-3"><span className="font-bold text-blue-600">1</span><span>{lang === 'zh' ? '客戶提供產品與目標市場' : 'You provide product info and target market(s)'}</span></li>
                    <li className="flex gap-3"><span className="font-bold text-blue-600">2</span><span>{lang === 'zh' ? '我們建立客戶篩選條件' : 'We define screening criteria'}</span></li>
                    <li className="flex gap-3"><span className="font-bold text-blue-600">3</span><span>{lang === 'zh' ? '客戶資料研究與驗證' : 'Research and verify customer records'}</span></li>
                    <li className="flex gap-3"><span className="font-bold text-blue-600">4</span><span>{lang === 'zh' ? '海外客戶資料庫交付' : 'Deliver the overseas customer database'}</span></li>
                  </ol>
                </div>

                <div className="mb-12 rounded-lg border border-gray-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-bold text-gray-900">{lang === 'zh' ? '執行週期' : 'Duration'}</div>
                      <div className="text-gray-600">{lang === 'zh' ? '一年' : '1 Year'}</div>
                    </div>
                  </div>
                </div>

                {/* Expected Results */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '預期成效' : 'Expected Results'}</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">95%+</div>
                      <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? 'Email 有效性' : 'Email Validity'}</div>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                      <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '目標客群吻合' : 'ICP Match'}</div>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                      <div className="text-sm font-medium text-gray-900">{lang === 'zh' ? '節省搜尋時間' : 'Time Saved'}</div>
                    </div>
                  </div>
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
                
                {/* Service Comparison */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '服務方案比較' : 'Service Comparison'}</h3>
                    <ServiceComparison lang={lang} />
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
                            {lang === 'zh' ? '資料包含：公司名稱、採購決策人、職位、Email、LinkedIn、公司網站。' : 'Includes: company name, decision-maker, title, email, LinkedIn, and website.'}
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
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '資料是合法的嗎？' : 'Is the data legal?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '是的。我們僅收集公開商業資訊（Public Business Data），符合 GDPR (B2B Legitimate Interest) 與各國隱私法規。' : 'Yes. We only collect public business data, compliant with GDPR (B2B Legitimate Interest) and international privacy laws.'}
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{lang === 'zh' ? '適合我的產業嗎？' : 'Is it suitable for my industry?'}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                            {lang === 'zh' ? '我們服務過機械、電子、紡織、化工、食品等多個產業。只要您的目標客戶是 B2B 企業，我們就能協助開發。' : 'We have served machinery, electronics, textile, chemical, food, and more. As long as your target is B2B, we can help.'}
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
        </div>
      </section>
    </main>
  )
}
