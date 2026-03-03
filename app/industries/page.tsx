import { fetchIndustries, fetchPageByPath } from '@/lib/cms'
import RenderBlocks from '@/components/pageBlocks/RenderBlocks'
import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const lang = getLang()
  const title = lang === 'en' ? 'Industries We Serve | SunGene' : '服務產業 | 我們的覆蓋'
  return {
    title,
    description: lang === 'en' ? 'Industries we cover' : '我們的覆蓋範圍'
  }
}

export default async function IndustriesPage() {
  const lang = getLang()
  const page = await fetchPageByPath('/industries')
  if (page?.layout && Array.isArray(page.layout) && page.layout.length > 0) {
    return (
      <main className="relative">
        <RenderBlocks blocks={page.layout} />
      </main>
    )
  }
  const items = await fetchIndustries()
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">{t(lang, 'ind_page_title')}</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {items.length === 0 ? (
          <div className="text-white/60">{t(lang, 'ind_no_data')}</div>
        ) : (
          items.map((i: any) => (
            <div key={i.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{i.name}</div>
              {i.description && <p className="mt-2 text-white/80">{i.description}</p>}
            </div>
          ))
        )}
      </div>
    </main>
  )
}
