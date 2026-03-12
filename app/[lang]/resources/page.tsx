import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: (lang === 'zh' ? '資源中心' : 'Resources') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  const categories = [
    { title: lang === 'zh' ? '外貿開發指南' : 'Export Guide', count: 3 },
    { title: lang === 'zh' ? '市場分析報告' : 'Market Analysis', count: 2 },
    { title: lang === 'zh' ? '成功案例解析' : 'Case Insights', count: 5 },
  ]

  const featured = [
    {
      title: lang === 'zh' ? '2026 德國五金市場採購趨勢報告' : '2026 German Hardware Market Procurement Trends',
      desc: lang === 'zh' ? '深度解析德國前十大進口商的採購偏好與決策流程變遷。' : 'In-depth analysis of purchasing preferences and decision-making shifts of top 10 German importers.',
      date: '2026-02-15',
      category: lang === 'zh' ? '市場分析' : 'Market Analysis'
    },
    {
      title: lang === 'zh' ? '開發信高回覆率的 5 個關鍵架構' : '5 Key Structures for High-Response Cold Emails',
      desc: lang === 'zh' ? '為什麼你的開發信沒人回？拆解經過驗證的 B2B 開發信寫作邏輯。' : 'Why are your emails ignored? Deconstructing proven B2B cold email writing logic.',
      date: '2026-01-20',
      category: lang === 'zh' ? '外貿開發指南' : 'Export Guide'
    },
    {
      title: lang === 'zh' ? '如何繞過總機找到採購決策人？' : 'How to Bypass Gatekeepers to Reach Decision Makers?',
      desc: lang === 'zh' ? '實戰分享：利用 LinkedIn 與數位工具建立精準名單的技巧。' : 'Practical sharing: Techniques for building precise lists using LinkedIn and digital tools.',
      date: '2026-01-10',
      category: lang === 'zh' ? '外貿開發指南' : 'Export Guide'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{lang === 'zh' ? '資源中心' : 'Resources'}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {lang === 'zh' ? '外貿開發知識庫、市場洞察與實戰技巧' : 'Export Knowledge Base, Market Insights, and Practical Tactics'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
            
            {/* Sidebar */}
            <div className="lg:col-span-3 space-y-8">
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{lang === 'zh' ? '分類瀏覽' : 'Categories'}</h3>
                    <ul className="space-y-3">
                        {categories.map((c, i) => (
                            <li key={i} className="flex justify-between items-center text-gray-600 hover:text-blue-600 cursor-pointer transition">
                                <span>{c.title}</span>
                                <span className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-full">{c.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="bg-blue-900 p-6 rounded-sm text-white">
                    <h3 className="font-bold mb-2">{lang === 'zh' ? '訂閱電子報' : 'Subscribe'}</h3>
                    <p className="text-sm text-blue-200 mb-4">{lang === 'zh' ? '每週獲取最新的外貿開發技巧。' : 'Get weekly export tips.'}</p>
                    <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-sm text-gray-900 mb-2 text-sm" />
                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-sm text-sm transition">{lang === 'zh' ? '訂閱' : 'Subscribe'}</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
                <div className="grid md:grid-cols-2 gap-8">
                    {featured.map((post, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-sm hover:shadow-md transition duration-300 flex flex-col">
                            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/10 transition"></div>
                                <div className="text-center p-4">
                                    <div className="text-4xl text-gray-300 font-serif mb-2 font-bold opacity-30">
                                        {post.category === (lang === 'zh' ? '市場分析' : 'Market Analysis') ? 'DATA' : 'GUIDE'}
                                    </div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{post.category}</div>
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-3 mb-3 text-xs">
                                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-sm font-bold">{post.category}</span>
                                    <span className="text-gray-400">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition cursor-pointer">{post.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.desc}</p>
                                <span className="text-blue-600 font-bold text-sm cursor-pointer hover:underline">{lang === 'zh' ? '閱讀更多' : 'Read More'} →</span>
                            </div>
                        </div>
                    ))}
                    
                    {/* Coming Soon Card */}
                    <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-sm flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                        <div className="text-gray-400 font-bold text-lg mb-2">{lang === 'zh' ? '更多內容準備中...' : 'More content coming soon...'}</div>
                        <p className="text-gray-500 text-sm max-w-xs">{lang === 'zh' ? '我們正在整理更多實戰案例與市場數據。' : 'We are compiling more case studies and market data.'}</p>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </main>
  )
}
