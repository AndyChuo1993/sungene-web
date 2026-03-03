type Props = {
  title?: string
  subtitle?: string
  columns?: '2' | '3' | '4'
  cards?: Array<{
    title: string
    desc?: string
    bullets?: { text: string }[]
    icon?: string
    image?: any
    href?: string
    linkLabel?: string
    highlight?: boolean
  }>
}

export default function CardGridBlock({ title, subtitle, columns = '3', cards }: Props) {
  const colClass =
    columns === '2' ? 'md:grid-cols-2'
    : columns === '4' ? 'md:grid-cols-4'
    : 'md:grid-cols-3'
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
      <div className={`mt-8 grid gap-6 ${colClass}`}>
        {(cards || []).map((c, idx) => {
          const imageUrl = typeof c.image === 'string' ? null : c.image?.url
          const Wrapper: any = c.href ? 'a' : 'div'
          return (
            <Wrapper
              key={idx}
              href={c.href || undefined}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/50 transition ${c.highlight ? 'ring-1 ring-cyan-500/40' : ''}`}
            >
              <div className="flex items-start gap-3">
                {c.icon && <div className="text-2xl">{c.icon}</div>}
                <div className="text-xl font-semibold">{c.title}</div>
              </div>
              {imageUrl && <img src={imageUrl} alt={c.title} className="mt-4 rounded-xl border border-white/10" />}
              {c.desc && <p className="mt-3 text-white/80">{c.desc}</p>}
              {Array.isArray(c.bullets) && c.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-white/80">
                  {c.bullets.map((b, i) => <li key={i}>• {b.text}</li>)}
                </ul>
              )}
              {c.href && <div className="mt-6 text-cyan-400">{c.linkLabel || '了解更多 →'}</div>}
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}
