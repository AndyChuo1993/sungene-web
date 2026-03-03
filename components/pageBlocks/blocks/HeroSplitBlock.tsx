import ParticlesBackground from '@/components/ParticlesBackground'

type Props = {
  title?: string
  subtitle?: string
  description?: string
  bullets?: { text: string }[]
  primaryCta?: { label?: string; url?: string }
  secondaryCta?: { label?: string; url?: string }
  image?: any
  imageAlt?: string
  imageSide?: 'left' | 'right'
  showParticles?: boolean
}

export default function HeroSplitBlock(props: Props) {
  const {
    title,
    subtitle,
    description,
    bullets,
    primaryCta,
    secondaryCta,
    image,
    imageAlt,
    imageSide = 'right',
    showParticles = true
  } = props

  const imageUrl = typeof image === 'string' ? image : image?.url

  const content = (
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
      {subtitle && <p className="mt-3 text-white/90 text-lg">{subtitle}</p>}
      {description && <p className="mt-2 text-white/70">{description}</p>}
      {Array.isArray(bullets) && bullets.length > 0 && (
        <ul className="mt-6 space-y-2 text-white/90">
          {bullets.map((b, i) => <li key={i}>✔ {b.text}</li>)}
        </ul>
      )}
      <div className="mt-8 flex gap-3 flex-wrap">
        {primaryCta?.label && (
          <a href={primaryCta.url || '/contact'} className="rounded-md bg-cyan-500 px-6 py-3 text-black">
            {primaryCta.label}
          </a>
        )}
        {secondaryCta?.label && (
          <a href={secondaryCta.url || '/contact'} className="rounded-md border border-white/20 px-6 py-3">
            {secondaryCta.label}
          </a>
        )}
      </div>
    </div>
  )

  const visual = (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt || title} className="w-full h-[360px] object-cover" />
        ) : (
          <div className="w-full h-[360px] bg-white/5 flex items-center justify-center text-white/60">
            （請在 CMS 選擇圖片）
          </div>
        )}
      </div>
      <div className="absolute -z-10 inset-0 blur-3xl bg-cyan-500/10 rounded-3xl" />
    </div>
  )

  return (
    <section className="relative">
      {showParticles && (
        <div className="absolute inset-0 -z-10 opacity-60">
          <ParticlesBackground />
        </div>
      )}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {imageSide === 'left' ? (
            <>
              {visual}
              {content}
            </>
          ) : (
            <>
              {content}
              {visual}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
