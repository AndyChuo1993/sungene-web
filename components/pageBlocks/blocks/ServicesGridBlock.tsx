import { fetchServices } from '@/lib/cms'

export default async function ServicesGridBlock({ title, subtitle, limit = 100, showBullets = true }: any) {
  const services = await fetchServices()
  const items = (services || []).slice(0, limit)
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-4xl font-semibold">{title}</h2>}
      {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {items.length === 0 ? (
          <div className="text-white/60">尚無 services，請於 CMS 新增</div>
        ) : (
          items.map((s: any) => (
            <div key={s.id} className="rounded-xl border border-white/10 bg-white/5 p-6" id={s.slug || undefined}>
              <div className="text-xl font-semibold">{s.name}</div>
              {s.summary && <p className="mt-2 text-white/80">{s.summary}</p>}
              {showBullets && Array.isArray(s.bullets) && s.bullets.length > 0 && (
                <ul className="mt-3 space-y-2 text-white/80">
                  {s.bullets.map((b: any, idx: number) => <li key={idx}>• {b.text}</li>)}
                </ul>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  )
}
