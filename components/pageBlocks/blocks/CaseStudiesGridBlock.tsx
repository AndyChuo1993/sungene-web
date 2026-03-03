import Link from 'next/link'
import { fetchCaseStudies } from '@/lib/cms'

export default async function CaseStudiesGridBlock({ title = '成功案例', limit = 6, showResult = true }: any) {
  const items = (await fetchCaseStudies()).slice(0, limit)
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.length === 0 ? (
          <div className="text-white/60">尚無案例資料，請於 CMS 新增 case-studies</div>
        ) : (
          items.map((c: any) => (
            <article key={c.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold">
                <Link href={`/case-studies/${c.slug}`}>{c.title}</Link>
              </div>
              {c.summary && <p className="mt-2 text-white/80">{c.summary}</p>}
              {showResult && c.result && <div className="mt-2 text-cyan-400">{c.result}</div>}
            </article>
          ))
        )}
      </div>
    </section>
  )
}
