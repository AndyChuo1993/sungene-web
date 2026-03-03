'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { t, Lang } from '@/lib/i18n'

type Company = { name: string; country: string; industry: string; size: number; score: number }
const DATA: Company[] = [
  { name: 'NovaTech GmbH', country: 'DE', industry: 'Electronics', size: 500, score: 93 },
  { name: 'BlueWave Trading', country: 'US', industry: 'Home', size: 120, score: 88 },
  { name: 'Shenzhen Apex', country: 'CN', industry: 'Semiconductor', size: 800, score: 96 },
  { name: 'GenAI Labs', country: 'SG', industry: 'AI/Software', size: 60, score: 85 },
  { name: 'Mercury Retail', country: 'UK', industry: 'Retail', size: 250, score: 81 }
]

export default function AIDemo({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const q = query.toLowerCase()
    return DATA
      .map(c => ({
        ...c,
        score: Math.min(99, Math.round(c.score * (q ? 0.9 : 1) + (q && c.name.toLowerCase().includes(q) ? 8 : 0)))
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
  }, [query])
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h3 className="text-2xl font-semibold">{t(lang, 'demo_title')}</h3>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t(lang, 'demo_placeholder')}
          className="w-full md:w-80 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 ring-cyan-400"
        />
      </div>
      <div className="mt-6 grid gap-4">
        {results.map(c => (
          <div key={c.name} className="rounded-xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">{c.name}</div>
                <div className="text-sm text-white/60">{c.country} · {c.industry} · {c.size}人</div>
              </div>
              <div className="text-cyan-400 font-semibold">{c.score}%</div>
            </div>
            <div className="mt-3 h-2 w-full rounded bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${c.score}%` }}
                transition={{ duration: 0.6 }}
                className="h-full bg-cyan-400"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-white/60">{t(lang, 'demo_note')}</div>
    </div>
  )
}
