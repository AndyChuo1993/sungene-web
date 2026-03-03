export default function PricingPlansBlock({ title = '方案', plans = [] as any[] }: { title?: string; plans?: any[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {plans.length === 0 ? (
          <div className="text-white/60">尚無方案，請於 CMS 新增</div>
        ) : (
          plans.map((p: any, idx: number) => (
            <div key={idx} className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${p.highlight ? 'ring-1 ring-cyan-500/40' : ''}`}>
              <div className="text-xl font-semibold">{p.name}</div>
              {p.desc && <div className="mt-2 text-white/70">{p.desc}</div>}
              {Array.isArray(p.features) && p.features.length > 0 && (
                <ul className="mt-3 space-y-2 text-white/80">
                  {p.features.map((f: any, i: number) => <li key={i}>• {f.text}</li>)}
                </ul>
              )}
              {p.ctaLabel && (
                <a href={p.ctaUrl || '/contact'} className="mt-6 inline-block rounded-md bg-cyan-500 px-4 py-2 text-black">
                  {p.ctaLabel}
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  )
}
