import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'

export default function StatsWall() {
  const lang = getLang()
  const items = [
    { num: '10–20', label: t(lang, 'stats_weekly_inquiries') },
    // { num: t(lang, 'stats_pipeline_value_num'), label: t(lang, 'stats_pipeline_value') },
    { num: '3 Days', label: t(lang, 'stats_exec_access') },
    { num: '40%', label: t(lang, 'stats_cac_reduction') },
  ]
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-y border-white/5">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 text-center">
        {items.filter(i => i.num).map(i => (
          <div key={i.label} className="group">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white group-hover:text-cyan-400 transition duration-500 break-words">{i.num}</div>
            <div className="mt-4 text-white/50 text-sm uppercase tracking-widest font-semibold border-t border-white/10 pt-4 group-hover:border-cyan-500/50 transition duration-500">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
