import Hero from '@/components/Hero'

type Props = {
  autoplayMs?: number
  slides?: any[]
}

export default function HeroCarouselBlock({ autoplayMs = 5000, slides }: Props) {
  const mapped = Array.isArray(slides)
    ? slides.map((s: any, idx: number) => ({
        id: s.id || `${idx}`,
        title: s.title,
        subtitle: s.subtitle,
        ctaLabel: s.ctaLabel,
        ctaUrl: s.ctaUrl,
        imageUrl: s.image?.url,
        videoUrl: s.videoUrl || undefined,
      }))
    : []

  if (mapped.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-white/70">Hero Carousel 沒有 slides，請到 CMS 編輯</div>
      </section>
    )
  }
  return <Hero slides={mapped} autoplayMs={autoplayMs} />
}
