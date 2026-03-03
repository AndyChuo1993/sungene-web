'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Slide = {
  id: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaUrl?: string
  imageUrl?: string
  videoUrl?: string
}

type Props = {
  slides: Slide[]
  autoplayMs?: number
}

export default function Hero({ slides, autoplayMs = 5000 }: Props) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), autoplayMs)
    return () => clearInterval(t)
  }, [slides.length, autoplayMs])
  const current = slides[index]
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        {current.videoUrl ? (
          <video key={current.id} className="w-full h-full object-cover" src={current.videoUrl} autoPlay muted loop playsInline />
        ) : (
          <img key={current.id} className="w-full h-full object-cover" src={current.imageUrl} alt={current.title} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex h-full items-center justify-center text-center px-6"
          >
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">{current.title}</h1>
              <p className="mt-4 text-lg md:text-2xl text-white/80">{current.subtitle}</p>
              {current.ctaLabel && current.ctaUrl ? (
                <a href={current.ctaUrl} className="inline-block mt-8 px-6 py-3 rounded-md bg-cyan-500 text-black hover:bg-cyan-400 transition">
                  {current.ctaLabel}
                </a>
              ) : null}
              <div className="mt-6 flex justify-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIndex(i)}
                    className={i === index ? 'h-2 w-8 rounded-full bg-white' : 'h-2 w-8 rounded-full bg-white/40'}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
