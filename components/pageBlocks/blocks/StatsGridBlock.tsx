export default function StatsGridBlock({ title, stats }: { title?: string; stats?: { value: string; label: string }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {(stats || []).map((s, idx) => (
          <div key={idx} className="rounded-xl bg-white/5 border border-white/10 p-6 text-center text-white">
            <div className="text-4xl font-semibold">{s.value}</div>
            <div className="mt-1 text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
