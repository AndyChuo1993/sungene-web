import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function FloatingCTA({ lang }: { lang: Lang }) {
  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50">
      <Link
        href="/contact"
        className="rounded-l-xl bg-cyan-500 text-black px-6 py-4 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-400 transition-colors font-bold text-lg writing-vertical-lr md:writing-horizontal-tb md:px-8 md:py-4 flex items-center gap-2"
        aria-label={t(lang, 'floating_cta')}
      >
        <span>{t(lang, 'floating_cta')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  )
}
