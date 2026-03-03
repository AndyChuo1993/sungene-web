import { fetchIndustries } from '@/lib/cms'

export default async function IndustriesGridBlock({ title = '服務產業', limit = 100 }: any) {
  const items = (await fetchIndustries()).slice(0, limit)
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {items.length === 0 ? (
          <div className="text-white/60">尚無產業資料，請於 CMS 新增 industries</div>
        ) : (
          items.map((i: any) => (
            <div key={i.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{i.name}</div>
              {i.description && <p className="mt-2 text-white/80">{i.description}</p>}
            </div>
          ))
        )}
      </div>
    </section>
  )
}
