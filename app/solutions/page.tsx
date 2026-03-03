import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import BreadcrumbJSONLD from '@/components/BreadcrumbJSONLD'
import Image from 'next/image'
import RenderBlocks from '@/components/pageBlocks/RenderBlocks'
import { fetchPageByPath } from '@/lib/cms'

export async function generateMetadata() {
  const lang = getLang()
  return {
    title: t(lang, 'meta_solutions_title'),
    description: t(lang, 'meta_solutions_desc'),
  }
}

const blocks = [
  {
    title: '為採購商',
    points: ['全球尋源與比價', '驗貨與合規', '交付節點可視化', '風險預警']
  },
  {
    title: '為供應商',
    points: ['渠道拓展與客群分析', '報價自動化', '樣品追蹤', '客戶跟進節奏']
  },
  {
    title: '為工廠/貿易商',
    points: ['名單生成與觸達', '話術模板與回覆優化', 'CRM 流程配置', 'AI 自動化與資料管線']
  }
]

export default async function SolutionsPage() {
  const lang = getLang()
  const page = await fetchPageByPath('/solutions')
  if (page?.layout && Array.isArray(page.layout) && page.layout.length > 0) {
    return (
      <main className="relative">
        <RenderBlocks blocks={page.layout} />
      </main>
    )
  }
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <Image src="/sever/sever.jpg" alt="Solutions" width={1600} height={800} className="w-full h-auto" priority />
      </div>
      <BreadcrumbJSONLD items={[
        { name: t(lang, 'nav_home'), url: '/' },
        { name: t(lang, 'nav_solutions'), url: '/solutions' },
      ]} />
      <h1 className="text-4xl font-semibold mt-10">{t(lang, 'sol_page_title')}</h1>
      <p className="mt-2 text-white/70">{t(lang, 'sol_page_subtitle')}</p>
      
      <div className="mt-10 prose prose-invert max-w-none text-gray-300">
        <p className="text-xl leading-relaxed font-light">{t(lang, 'sol_intro_p1')}</p>
        <p className="text-lg leading-relaxed">{t(lang, 'sol_intro_p2')}</p>
      </div>

      <div className="mt-16 space-y-16">
        <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4">{t(lang, 'sol_s1_title')}</h2>
            <p className="text-gray-400 mb-6">{t(lang, 'sol_s1_desc')}</p>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s1_li1')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s1_li2')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s1_li3')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s1_li4')}</li>
            </ul>
            <div className="bg-white/5 p-4 border-l-2 border-cyan-500 text-gray-300 italic">{t(lang, 'sol_s1_note')}</div>
        </section>

        <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4">{t(lang, 'sol_s2_title')}</h2>
            <p className="text-gray-400 mb-6">{t(lang, 'sol_s2_desc')}</p>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s2_li1')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s2_li2')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s2_li3')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s2_li4')}</li>
            </ul>
            <div className="bg-white/5 p-4 border-l-2 border-cyan-500 text-gray-300 italic">{t(lang, 'sol_s2_note')}</div>
        </section>

        <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4">{t(lang, 'sol_s3_title')}</h2>
            <p className="text-gray-400 mb-6">{t(lang, 'sol_s3_desc')}</p>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s3_li1')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s3_li2')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s3_li3')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s3_li4')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s3_li5')}</li>
            </ul>
            <div className="bg-white/5 p-4 border-l-2 border-cyan-500 text-gray-300 italic">{t(lang, 'sol_s3_note')}</div>
        </section>

        <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4">{t(lang, 'sol_s4_title')}</h2>
            <p className="text-gray-400 mb-6">{t(lang, 'sol_s4_desc')}</p>
            <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s4_li1')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s4_li2')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s4_li3')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s4_li4')}</li>
                <li className="flex items-start gap-2"><span className="text-cyan-500">•</span> {t(lang, 'sol_s4_li5')}</li>
            </ul>
            <div className="bg-white/5 p-4 border-l-2 border-cyan-500 text-gray-300 italic">{t(lang, 'sol_s4_note')}</div>
        </section>

        <section className="mt-20 p-8 border border-white/10 bg-[#0B1C2D]/50">
            <h2 className="text-2xl font-bold text-white mb-4">{t(lang, 'sol_outcome_title')}</h2>
            <p className="text-gray-400 mb-6">{t(lang, 'sol_outcome_desc')}</p>
            <ul className="grid md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-3"><span className="text-cyan-500 text-xl">✔</span> {t(lang, 'sol_outcome_li1')}</li>
                <li className="flex items-center gap-3"><span className="text-cyan-500 text-xl">✔</span> {t(lang, 'sol_outcome_li2')}</li>
                <li className="flex items-center gap-3"><span className="text-cyan-500 text-xl">✔</span> {t(lang, 'sol_outcome_li3')}</li>
                <li className="flex items-center gap-3"><span className="text-cyan-500 text-xl">✔</span> {t(lang, 'sol_outcome_li4')}</li>
            </ul>
            <div className="text-center text-lg font-medium text-white/90 border-t border-white/10 pt-6">
                {t(lang, 'sol_outcome_note')}
            </div>
        </section>
      </div>
    </main>
  )
}
