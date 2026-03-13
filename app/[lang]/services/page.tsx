import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'service_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  const services = [
    {
      id: 'lead-gen',
      title: lang === 'zh' ? '目標客戶研究' : 'Target Customer Research',
      desc:
        lang === 'zh'
          ? '建立精準的海外潛在客戶資料庫，幫助業務團隊快速接觸目標買家。'
          : 'Build a precise overseas prospect database so your sales team can reach target buyers faster.',
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      who: lang === 'zh' 
        ? ['已有業務團隊，但缺乏精準海外客戶資料的企業']
        : ['Companies with a sales team but lacking precise overseas customer data'],
      what: lang === 'zh'
        ? ['目標市場分析', '目標客戶篩選', '採購決策人識別', '客戶資料建立']
        : ['Target market analysis', 'Target customer screening', 'Procurement decision-maker identification', 'Customer data building'],
      deliverables: lang === 'zh'
        ? [
            '海外目標客戶資料庫（Excel）',
            '資料包含：公司名稱、採購決策人、職位、Email、LinkedIn、公司網站',
          ]
        : [
            'Overseas target customer database (Excel)',
            'Includes: company name, decision-maker, title, email, LinkedIn, website',
          ],
      result: lang === 'zh'
        ? ['建立可直接使用的海外客戶資料庫', '幫助業務團隊快速接觸目標買家']
        : ['Deliver a ready-to-use overseas prospect database', 'Help your sales team reach target buyers faster'],
    },
    {
      id: 'outreach',
      title: lang === 'zh' ? '海外客戶開發' : 'Outbound Customer Development',
      desc:
        lang === 'zh'
          ? '建立穩定運作的海外客戶開發流程，持續獲取潛在客戶詢盤。'
          : 'Build a stable outbound process that continuously generates overseas inquiries.',
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      who: lang === 'zh'
        ? ['希望持續獲得海外詢盤的企業']
        : ['Companies that want a steady flow of overseas inquiries'],
      what: lang === 'zh'
        ? ['海外客戶開發策略', '客戶開發郵件撰寫', '郵件發送與跟進', '客戶回覆處理', '詢盤整理與交付']
        : ['Outbound strategy', 'Email copywriting', 'Sending & follow-ups', 'Reply handling', 'Inquiry consolidation & delivery'],
      deliverables: lang === 'zh'
        ? [
            '海外客戶詢盤',
            '每個詢盤包含：客戶公司、聯絡方式、需求資訊、對話記錄',
          ]
        : [
            'Overseas customer inquiries',
            'Each inquiry includes: company, contact, requirements, conversation record',
          ],
      result: lang === 'zh'
        ? ['持續獲取海外客戶詢盤', '將有效需求整理並交付企業跟進']
        : ['Continuously generate overseas inquiries', 'Deliver organized and actionable conversations'],
    },
    {
      id: 'outsourcing',
      title: lang === 'zh' ? '外貿業務外包' : 'Sales Outsourcing',
      desc:
        lang === 'zh'
          ? '由專業團隊負責海外客戶開發與業務跟進，企業只需專注產品與交付。'
          : 'A professional team runs outbound and follow-ups so you can focus on product and delivery.',
      imageIcon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
      who: lang === 'zh'
        ? ['沒有外貿團隊', '外貿人手不足', '希望解放業務團隊專注成交的企業']
        : ['No export team', 'Understaffed export function', 'Want to free up sales to focus on closing'],
      what: lang === 'zh'
        ? ['客戶開發', '郵件溝通', '詢盤處理', '客戶跟進', '潛在客戶管理']
        : ['Outbound prospecting', 'Email communication', 'Inquiry handling', 'Customer follow-up', 'Pipeline management'],
      deliverables: lang === 'zh'
        ? [
            '除報價與出貨外的所有外貿業務行為',
            '包括：客戶開發、客戶跟進、郵件往來、詢盤管理、潛在客戶管理',
          ]
        : [
            'All export sales activities except quotation and shipping',
            'Includes: prospecting, follow-ups, emails, inquiry handling, pipeline management',
          ],
      result: lang === 'zh'
        ? ['企業只需負責報價與出貨，其餘外貿工作由我們完成', '建立可持續的海外客戶開發與跟進系統']
        : ['You handle quotation and shipping; we run everything else', 'Build a sustainable export development system'],
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{lang === 'zh' ? '海外客戶開發解決方案' : 'Overseas Customer Development Solutions'}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto whitespace-pre-line">
            {lang === 'zh'
              ? '從目標市場研究到客戶開發，再到完整外貿業務外包，\n我們幫助企業建立可持續的海外客戶開發系統。'
              : 'From target market research to outbound customer development and full sales outsourcing,\nwe help you build a sustainable overseas customer development system.'}
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {lang === 'zh' ? '選擇適合您的服務模式' : 'Choose the Right Service Model'}
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    {lang === 'zh' ? '我們提供彈性的合作方案，滿足不同階段的企業需求。' : 'Flexible solutions for every stage of your business growth.'}
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b-2 border-gray-200">
                            <th className="p-4 md:p-6 font-bold text-gray-900 w-1/4"></th>
                            <th className="p-4 md:p-6 font-bold text-blue-900 text-lg w-1/4 text-center border-l border-gray-200 bg-blue-50/50">
                                {lang === 'zh' ? '目標客戶研究' : 'Target Customer Research'}
                            </th>
                            <th className="p-4 md:p-6 font-bold text-green-900 text-lg w-1/4 text-center border-l border-gray-200 bg-green-50/50">
                                {lang === 'zh' ? '海外客戶開發' : 'Outbound Customer Development'}
                            </th>
                            <th className="p-4 md:p-6 font-bold text-indigo-900 text-lg w-1/4 text-center border-l border-gray-200 bg-indigo-50/50">
                                {lang === 'zh' ? '外貿業務外包' : 'Sales Outsourcing'}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            {
                                label: lang === 'zh' ? '適合對象' : 'Best For',
                                c1: lang === 'zh' ? '已有業務團隊，但缺乏精準海外客戶資料的企業' : 'Has sales team, lacks precise overseas data',
                                c2: lang === 'zh' ? '希望持續獲得海外詢盤的企業' : 'Wants steady overseas inquiries',
                                c3: lang === 'zh' ? '沒有外貿團隊／人手不足／希望解放業務團隊專注成交的企業' : 'No team / understaffed / free up sales to close'
                            },
                            {
                                label: lang === 'zh' ? '核心價值' : 'Core Value',
                                c1: lang === 'zh' ? '建立精準的海外潛在客戶資料庫，幫助業務快速接觸目標買家' : 'Build a precise prospect database for faster reach',
                                c2: lang === 'zh' ? '建立穩定運作的海外客戶開發流程，持續獲取詢盤' : 'Build a stable outbound process to generate inquiries',
                                c3: lang === 'zh' ? '專業團隊負責開發與跟進，企業專注產品與交付' : 'We run outbound & follow-up; you focus on delivery'
                            },
                            {
                                label: lang === 'zh' ? '交付內容' : 'Deliverables',
                                c1: lang === 'zh' ? '海外目標客戶資料庫（Excel）' : 'Overseas target customer database (Excel)',
                                c2: lang === 'zh' ? '海外客戶詢盤（含對話記錄）' : 'Overseas inquiries (with conversation records)',
                                c3: lang === 'zh' ? '除報價與出貨外的所有外貿業務行為' : 'All export sales activities except quotation and shipping'
                            },
                            {
                                label: lang === 'zh' ? '執行週期' : 'Duration',
                                c1: lang === 'zh' ? '一年' : '1 Year',
                                c2: lang === 'zh' ? '一年' : '1 Year',
                                c3: lang === 'zh' ? '一年以上' : '1 Year+'
                            }
                        ].map((row, idx) => (
                            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="p-4 md:p-6 font-bold text-gray-900 bg-gray-50/30">{row.label}</td>
                                <td className="p-4 md:p-6 text-gray-600 text-center border-l border-gray-100 font-medium">{row.c1}</td>
                                <td className="p-4 md:p-6 text-gray-600 text-center border-l border-gray-100 font-medium">{row.c2}</td>
                                <td className="p-4 md:p-6 text-gray-600 text-center border-l border-gray-100 font-medium">{row.c3}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="p-4 md:p-6 bg-gray-50/30"></td>
                            <td className="p-4 md:p-6 text-center border-l border-gray-100">
                                <Link href={`/${lang}/services/lead-generation`} className="text-blue-600 font-bold hover:underline text-sm">
                                    {lang === 'zh' ? '了解更多' : 'Learn More'} →
                                </Link>
                            </td>
                            <td className="p-4 md:p-6 text-center border-l border-gray-100">
                                <Link href={`/${lang}/services/cold-outreach`} className="text-green-600 font-bold hover:underline text-sm">
                                    {lang === 'zh' ? '了解更多' : 'Learn More'} →
                                </Link>
                            </td>
                            <td className="p-4 md:p-6 text-center border-l border-gray-100">
                                <Link href={`/${lang}/services/sales-outsourcing`} className="text-indigo-600 font-bold hover:underline text-sm">
                                    {lang === 'zh' ? '了解更多' : 'Learn More'} →
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Services List */}
      <div className="py-12">
        {services.map((s, idx) => (
          <section key={s.id} className={`py-24 ${idx % 2 !== 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100`}>
            <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Title & Main Desc */}
              <div className="lg:col-span-4">
                <div className="w-24 h-24 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-8">
                  {s.imageIcon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    <Link href={`/${lang}/services/${s.id === 'lead-gen' ? 'lead-generation' : s.id === 'outreach' ? 'cold-outreach' : 'sales-outsourcing'}`} className="hover:text-blue-600 transition">
                        {s.title}
                    </Link>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-blue-500 pl-4">
                  {s.desc}
                </p>
                <div className="flex flex-col gap-3">
                    <Link href={`/${lang}/services/${s.id === 'lead-gen' ? 'lead-generation' : s.id === 'outreach' ? 'cold-outreach' : 'sales-outsourcing'}`} className="inline-block bg-white border border-blue-900 text-blue-900 font-bold py-3 px-8 rounded-sm hover:bg-blue-50 transition duration-300 text-center">
                    {lang === 'zh' ? '了解更多' : 'Learn More'}
                    </Link>
                    <Link href={`/${lang}/contact`} className="inline-block bg-blue-900 text-white font-bold py-3 px-8 rounded-sm hover:bg-blue-800 transition duration-300 text-center">
                    {lang === 'zh' ? '諮詢此服務' : 'Inquire Now'}
                    </Link>
                </div>
              </div>

              {/* Right Column: Detailed Breakdown */}
              <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                
                {/* Who is this for */}
                <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-100 pb-2">
                    {lang === 'zh' ? '適合對象' : 'Who is this for?'}
                  </h3>
                  <ul className="space-y-3">
                    {s.who.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2 mt-1">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What we do */}
                <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-100 pb-2">
                    {lang === 'zh' ? '我們做什麼' : 'What we do'}
                  </h3>
                  <ul className="space-y-3">
                    {s.what.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2 mt-1">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-blue-50 p-8 rounded-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4 uppercase tracking-wide border-b border-blue-200 pb-2">
                    {lang === 'zh' ? '交付內容' : 'Deliverables'}
                  </h3>
                  <ul className="space-y-3">
                    {s.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start text-blue-800 font-medium">
                        <span className="text-blue-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="bg-green-50 p-8 rounded-sm border border-green-100">
                  <h3 className="text-lg font-bold text-green-900 mb-4 uppercase tracking-wide border-b border-green-200 pb-2">
                    {lang === 'zh' ? '預期成果' : 'Key Results'}
                  </h3>
                  <ul className="space-y-3">
                    {s.result.map((item, i) => (
                      <li key={i} className="flex items-start text-green-800 font-medium">
                        <span className="text-green-600 mr-2">★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{lang === 'zh' ? '常見問題' : 'FAQ'}</h2>
          <div className="space-y-6">
            {[
              { 
                q: lang === 'zh' ? 'Q: SunGene 適合哪些類型的企業？' : 'Q: Who is SunGene suitable for?',
                a: lang === 'zh' ? '我們最適合擁有成熟產品與製造能力，但缺乏海外業務團隊或希望加速外貿開發的製造商與供應商。' : 'We are best suited for manufacturers and suppliers with mature products but lacking an overseas sales team or wishing to accelerate export growth.'
              },
              { 
                q: lang === 'zh' ? 'Q: 你們是代發信公司嗎？' : 'Q: Are you just an email blasting service?',
                a: lang === 'zh' ? '不是。我們提供的是全流程的外貿開發服務，包含精準名單建立、決策人鎖定、客製化開發內容撰寫以及商務詢盤跟進。' : 'No. We provide full-cycle export development services, including precise list building, decision-maker targeting, customized outreach, and inquiry follow-up.'
              },
              { 
                q: lang === 'zh' ? 'Q: 多久可以看到成效？' : 'Q: How long to see results?',
                a: lang === 'zh' ? '通常在專案啟動後 1-2 個月內會開始收到潛在客戶的回覆與詢盤。具體時間取決於產品類型與目標市場的競爭程度。' : 'Typically, you will start receiving responses and inquiries within 1-2 months of project launch, depending on product type and market competition.'
              },
              { 
                q: lang === 'zh' ? 'Q: 資料會保密嗎？會簽署 NDA 嗎？' : 'Q: Is my data confidential? Do you sign NDAs?',
                a: lang === 'zh' ? '是的，我們非常重視客戶隱私。在合作開始前，我們會簽署保密協議 (NDA)，確保您的商業機密與客戶資料受到完整保護。' : 'Yes, we take privacy seriously. We sign an NDA before cooperation begins to ensure your trade secrets and client data are fully protected.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t(lang, 'hero_cta_start')}</h2>
          <Link href={`/${lang}/free-market-analysis`} className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
            {t(lang, 'cta_analysis')}
          </Link>
        </div>
      </section>
    </main>
  )
}
