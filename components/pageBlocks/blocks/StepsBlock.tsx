export default function StepsBlock({ title, items }: { title?: string; items?: { title: string; desc?: string }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <ol className="mt-6 space-y-3">
        {(items || []).map((s, idx) => (
          <li key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="text-lg font-semibold">{idx + 1}. {s.title}</div>
            {s.desc && <div className="text-white/70 mt-1">{s.desc}</div>}
          </li>
        ))}
      </ol>
    </section>
  )
}
