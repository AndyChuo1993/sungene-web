import Link from 'next/link'
import Image from 'next/image'
import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const lang = getLang()
  const links = [
    { href: '/', label: t(lang, 'nav_home') },
    { href: '/solutions', label: t(lang, 'nav_solutions') },
    { href: '/services', label: t(lang, 'nav_services') },
    { href: '/product', label: t(lang, 'nav_product') },
    { href: '/case-studies', label: t(lang, 'nav_cases') },
    { href: '/about', label: t(lang, 'nav_about') },
    { href: '/contact', label: t(lang, 'nav_contact') },
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold flex items-center gap-2">
          <Image src="/logo/sungene.png" alt="SunGene Co., LTD." width={28} height={28} />
          <span>SunGene Co., LTD.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="/contact" className="rounded-md bg-cyan-500 px-6 py-3 text-black font-bold text-lg hover:bg-cyan-400 transition shadow-lg">{t(lang, 'cta_inquiry')}</Link>
        </div>
      </div>
    </header>
  )
}
