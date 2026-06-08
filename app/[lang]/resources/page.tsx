import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { getAlternates } from '@/lib/seo'
import CatalogDownload from '@/components/CatalogDownload'
import { FileText } from 'lucide-react'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  return {
    title: lang === 'en' ? 'Resources & Catalog | SunGene Industrial IoT' : '資源與型錄 | SunGene 工業物聯網',
    description:
      lang === 'en'
        ? 'Download the SunGene Industrial IoT product catalog — remote monitoring solutions, controllers and partner programs.'
        : '下載 SunGene 工業物聯網產品型錄——遠端監控方案、控制器與合作夥伴計畫。',
    alternates: getAlternates(lang, '/resources'),
  }
}

const C = {
  en: {
    kicker: 'Resources',
    title: 'Product Catalog',
    intro: 'Get the full SunGene Industrial IoT catalog — solutions, applications, controllers and partner programs in one PDF. Enter your details and we will give you the download and email you the link.',
    card: 'SunGene Industrial IoT — Product Catalog (PDF)',
    cardSub: 'Solutions · Applications · Controllers · Partner & OEM programs',
    more: 'Datasheets, application notes and company profile are being added.',
  },
  zh: {
    kicker: '資源',
    title: '產品型錄',
    intro: '取得完整 SunGene 工業物聯網型錄——方案、應用、控制器與合作夥伴計畫,一份 PDF。填寫資料即可下載,我們也會將連結寄到您的信箱。',
    card: 'SunGene 工業物聯網 — 產品型錄（PDF）',
    cardSub: '方案 · 應用 · 控制器 · 合作夥伴與 OEM 計畫',
    more: 'Datasheets、應用說明與公司簡介陸續新增中。',
  },
} as const

export default async function Resources({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = pickLang(rawLang)
  const c = C[lang]

  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{c.kicker}</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">{c.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{c.intro}</p>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">{c.card}</h2>
              <p className="mt-1 text-sm text-gray-500">{c.cardSub}</p>
            </div>
          </div>
          <CatalogDownload lang={lang} />
        </div>

        <p className="mt-6 text-sm text-gray-500">{c.more}</p>
      </div>
    </main>
  )
}
