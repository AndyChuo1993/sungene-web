export default function CTABlock({ title, subtitle, buttonLabel, buttonUrl }: any) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        {title && <h2 className="text-3xl font-semibold">{title}</h2>}
        {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
        {buttonLabel && (
          <a href={buttonUrl || '/contact'} className="mt-6 inline-block rounded-md bg-cyan-500 px-6 py-3 text-black">
            {buttonLabel}
          </a>
        )}
      </div>
    </section>
  )
}
