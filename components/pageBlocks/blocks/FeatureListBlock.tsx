export default function FeatureListBlock({ title, items }: { title?: string; items?: { text: string }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <ul className="mt-4 grid md:grid-cols-2 gap-3 text-white/90">
        {(items || []).map((i, idx) => (
          <li key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
            ✔ {i.text}
          </li>
        ))}
      </ul>
    </section>
  )
}
