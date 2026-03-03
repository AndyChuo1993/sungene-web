import { t, Lang } from '@/lib/i18n'

type Card = { title: string; desc: string; href: string }
export default function SectionCards({ cards, lang }: { cards: Card[], lang: Lang }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map(c => (
        <a key={c.title} href={c.href} className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition">
          <div className="text-xl font-semibold text-white">{c.title}</div>
          <div className="mt-2 text-white/70">{c.desc}</div>
          <div className="mt-6 text-cyan-400 group-hover:text-cyan-300">{t(lang, 'learn_more')}</div>
        </a>
      ))}
    </div>
  )
}
