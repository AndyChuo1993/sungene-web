import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { getLocalizedUrl } from '@/lib/seo'
import { getProduct, PRODUCT_SLUGS, PRODUCT_CATEGORIES } from '@/lib/products'
import { SOLUTIONS, SolutionSlug } from '@/lib/solutions'
import PrintButton from '@/components/PrintButton'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => PRODUCT_SLUGS.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  const p = getProduct(slug)
  if (!p) return {}
  const c = p[lang]
  return {
    title: `${c.name} — Datasheet | SunGene Industrial IoT`,
    description: c.tagline,
    robots: { index: false, follow: true },
    alternates: { canonical: getLocalizedUrl(lang, `/products/${slug}`) },
  }
}

export default async function Datasheet({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  const p = getProduct(slug)
  if (!p) notFound()
  const c = p[lang]
  const sol = SOLUTIONS[p.relatedSolution as SolutionSlug]?.[lang]
  const catLabel = PRODUCT_CATEGORIES.find((k) => k.key === p.category)?.[lang] ?? p.category

  const L = {
    en: { ds: 'Product Datasheet', specs: 'Specifications', apps: 'Typical applications', cat: 'Category', back: 'Back to product', print: 'Save / Print as PDF', note: 'Specifications are for reference and may be updated; confirm the final spec with SunGene before ordering.', contact: 'Inquiries' },
    zh: { ds: '產品規格表', specs: '規格', apps: '常見應用', cat: '類別', back: '返回產品頁', print: '儲存／列印為 PDF', note: '規格僅供參考並可能更新,訂購前請向 SunGene 確認最終規格。', contact: '洽詢' },
  }[lang]

  return (
    <main className="bg-white px-6 pb-20 pt-28 print:pt-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link href={`/${lang}/products/${slug}`} className="text-sm font-medium text-blue-700 hover:underline">← {L.back}</Link>
          <PrintButton label={L.print} />
        </div>

        <article className="rounded-xl border border-gray-200 p-8 print:border-0 print:p-0">
          {/* header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-5">
            <div className="flex items-center gap-3">
              <Image src="/logo/sungene.png" alt="SunGene Industrial IoT" width={40} height={40} className="h-9 w-auto" />
              <div className="leading-tight">
                <div className="text-base font-bold text-blue-900">SunGene</div>
                <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">Industrial IoT</div>
              </div>
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">{L.ds}</div>
          </div>

          {/* title + image */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <Image src={p.image} alt={c.name} fill className="object-cover" sizes="200px" />
            </div>
            <div className="sm:col-span-2">
              <h1 className="text-2xl font-bold text-gray-900">{c.name}</h1>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.tagline}</p>
              <p className="mt-3 text-xs text-gray-500">{L.cat}: <span className="font-medium text-gray-700">{catLabel}</span></p>
            </div>
          </div>

          {/* specs */}
          <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-blue-700">{L.specs}</h2>
          <table className="mt-3 w-full border-collapse text-sm">
            <tbody>
              {c.specs.map((s, i) => (
                <tr key={s.label} className={i % 2 ? 'bg-gray-50' : ''}>
                  <th className="w-2/5 border border-gray-200 px-4 py-2 text-left font-medium text-gray-500">{s.label}</th>
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* applications */}
          {sol && (
            <>
              <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-blue-700">{L.apps}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {sol.capabilities.map((cap) => (
                  <li key={cap} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700">{cap}</li>
                ))}
              </ul>
            </>
          )}

          {/* footer */}
          <div className="mt-8 border-t border-gray-200 pt-5 text-xs text-gray-500">
            <p>{L.contact}: contact@sungeneiot.com · sungeneiot.com</p>
            <p className="mt-1">{L.note}</p>
          </div>
        </article>
      </div>
    </main>
  )
}
