import { fetchPartners } from '@/lib/cms'

export default async function PartnersGridBlock({ title = '合作夥伴', limit = 12 }: any) {
  const partners = (await fetchPartners()).slice(0, limit)
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.length === 0 ? (
          <div className="text-white/60">尚無夥伴資料，請於 CMS 新增 partners</div>
        ) : (
          partners.map((p: any) => (
            <a key={p.id} href={p.website || undefined} className="rounded-xl border border-white/10 bg-white/5 p-4 items-center flex justify-center">
              {p.logoUrl ? <img src={p.logoUrl} alt={p.name} className="h-12 object-contain" /> : <div className="text-white/70">{p.name}</div>}
            </a>
          ))
        )}
      </div>
    </section>
  )
}
