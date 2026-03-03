import { getLang } from '@/lib/i18n-server'
import { t } from '@/lib/i18n'

export default function Problems() {
  const lang = getLang()
  
  const content = lang === 'en' ? {
    title: 'Problems We Solve',
    card1: { title: 'Traditional Trade Issues', list: ['Unstable client sources', 'High manpower dependency', 'Unable to scale'] },
    card2: { title: 'SunGene Solution', list: ['AI Prospect Analysis', 'Automated outreach flow', 'Structured conversion management'] },
    card3: { title: 'Outcome', list: ['Stable inquiries', 'Precise matching', 'Sustainable expansion'] }
  } : {
    title: '我們解決的問題',
    card1: { title: '傳統外貿困境', list: ['客戶來源不穩定', '人力依賴高', '無法規模化'] },
    card2: { title: 'SunGene 解法', list: ['AI 名單分析', '自動化開發流程', '結構化轉化管理'] },
    card3: { title: '成果', list: ['穩定詢盤', '精準匹配', '可持續擴張'] }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold">{content.title}</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-xl font-semibold mb-3">{content.card1.title}</div>
          <ul className="space-y-2 text-white/80">
            {content.card1.list.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-xl font-semibold mb-3">{content.card2.title}</div>
          <ul className="space-y-2 text-white/80">
            {content.card2.list.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-xl font-semibold mb-3">{content.card3.title}</div>
          <ul className="space-y-2 text-white/80">
            {content.card3.list.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
