import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  const navLinks = [
    { href: `/${lang}/solutions`, label: t(lang, 'nav_solutions') },
    { href: `/${lang}/products`, label: t(lang, 'nav_products') },
    { href: `/${lang}/applications`, label: lang === 'en' ? 'Applications' : '應用場景' },
    { href: `/${lang}/industries`, label: lang === 'en' ? 'Industries' : '產業應用' },
    { href: `/${lang}/resources`, label: lang === 'en' ? 'Catalog' : '型錄' },
    { href: `/${lang}/partners`, label: t(lang, 'nav_partners') },
    { href: `/${lang}/about`, label: t(lang, 'nav_about') },
    { href: `/${lang}/contact`, label: t(lang, 'nav_contact') },
  ]

  const blurb =
    lang === 'en'
      ? 'SunGene Industrial IoT supplies remote monitoring and data acquisition solutions for water, energy and industrial equipment, with OEM/ODM support and a Taiwan-based, China-backed supply network.'
      : 'SunGene 工業物聯網提供水、能源與工業設備的遠端監控與數據採集方案，具備 OEM/ODM 支援與台灣為基地、中國供應鏈為後盾的供貨網絡。'

  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="mb-1 text-xl font-bold">SunGene Industrial IoT</h3>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              {t(lang, 'brand_tagline')}
            </p>
            <p className="mb-6 max-w-md leading-relaxed text-gray-400">{blurb}</p>
            <div className="space-y-1.5 text-sm text-gray-400">
              <div className="font-semibold text-white/90">SunGene Co., Ltd.</div>
              <div>
                {lang === 'en'
                  ? 'Taiwan office: No. 201, Guangfu Rd., Central Dist., Taichung City, Taiwan'
                  : '台灣（總部）：台中市中區光復路201號'}
              </div>
              <div>
                {lang === 'en'
                  ? "China operations: Unit 1001-2, Bldg A1, Yincheng Zhigu, No. 6788-1 Binhai West Ave., Tong'an Dist., Xiamen"
                  : '中國（營運）：廈門市同安區濱海西大道6788-1號銀城智谷A1棟1001單元之二'}
              </div>
              <div>Email: contact@sungenelite.com · Tel: +886 4 3703 2705</div>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">{lang === 'en' ? 'Explore' : '探索'}</h4>
            <ul className="space-y-3 text-gray-400">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2026 SunGene Co., Ltd. {t(lang, 'footer_rights')}
        </div>
      </div>
    </footer>
  )
}
