'use client'
import { useEffect, useRef } from 'react'

type Props = {
  color?: string
  count?: number
  className?: string
}

export default function ParticlesBackground({ color = '#00E5FF', count = 80, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight
    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 0.5
    }))
    let raf = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
      ctx.clearRect(0, 0, w, h)
      for (let p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            const alpha = 1 - d / 120
            ctx.strokeStyle = color + Math.round(alpha * 255).toString(16).padStart(2, '0')
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    loop()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [color, count])
  return <canvas ref={canvasRef} className={className ? className + ' w-full h-full' : 'w-full h-full'} />
}
