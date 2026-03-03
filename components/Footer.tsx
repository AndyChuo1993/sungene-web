import Link from 'next/link'
import Image from 'next/image'
import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'

export default function Footer() {
  const lang = getLang()
  return (
    <footer className="border-t border-white/5 mt-24 bg-[#0B1C2D]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Manifesto */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/logo/sungene.png" alt="SunGene Co., LTD." width={32} height={32} />
              <div className="text-white font-bold text-xl tracking-wide">SunGene Co., LTD.</div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              {t(lang, 'brand_manifesto')}
            </p>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SunGene Co., LTD.
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">{t(lang, 'footer_platform')}</h4>
              <div className="space-y-4">
                <Link href="/solutions" className="block text-gray-400 hover:text-cyan-400 transition">{t(lang, 'footer_solutions')}</Link>
                <Link href="/product" className="block text-gray-400 hover:text-cyan-400 transition">{t(lang, 'footer_ai_engine')}</Link>
                <Link href="/case-studies" className="block text-gray-400 hover:text-cyan-400 transition">{t(lang, 'footer_case_studies')}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">{t(lang, 'footer_company')}</h4>
              <div className="space-y-4">
                <Link href="/about" className="block text-gray-400 hover:text-cyan-400 transition">{t(lang, 'footer_about')}</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-cyan-400 transition">{t(lang, 'footer_contact')}</Link>
                <Link href="/services" className="block text-gray-400 hover:text-cyan-400 transition">{t(lang, 'footer_services')}</Link>
              </div>
            </div>
          </div>

          {/* Contact & Map */}
          <div className="space-y-6 text-right md:text-left">
             <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm md:text-left">{t(lang, 'footer_headquarters')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t(lang, 'footer_address_1')}</p>
              <p>{t(lang, 'footer_address_2')}</p>
              <p className="hover:text-white transition"><a href="tel:0437032705">+886 4-37032705</a></p>
              <p className="text-sm text-gray-600">{t(lang, 'footer_tax_id')}</p>
            </div>
            <div className="pt-4">
               <a className="text-cyan-500 hover:text-cyan-300 transition text-sm font-semibold uppercase tracking-wider border-b border-cyan-500/30 pb-1" href="https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E4%B8%AD%E5%B8%82%E4%B8%AD%E5%8D%80%E5%85%89%E5%BE%A9%E8%B7%AF201%E8%99%9F" target="_blank">
                {t(lang, 'footer_maps')}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm tracking-widest uppercase">
          {t(lang, 'footer_signature')}
        </div>
      </div>
    </footer>
  )
}
