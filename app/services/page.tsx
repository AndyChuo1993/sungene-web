import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import BreadcrumbJSONLD from '@/components/BreadcrumbJSONLD'

export async function generateMetadata() {
  const lang = getLang()
  return {
    title: t(lang, 'meta_services_title'),
    description: t(lang, 'meta_services_desc'),
  }
}

export default async function ServicesPage() {
  const lang = getLang()
  
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 min-h-screen">
      <BreadcrumbJSONLD items={[
        { name: t(lang, 'nav_home'), url: '/' },
        { name: t(lang, 'nav_services'), url: '/services' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: t(lang, 'serv_s2_name'), // AI Managed Ops
              description: t(lang, 'serv_s2_target'),
              provider: {
                '@type': 'Organization',
                name: 'SunGene Co., LTD.',
                url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
              },
              serviceType: 'AI Managed Operations',
              areaServed: 'Global'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: t(lang, 'serv_s4_name'), // Outsourcing
              description: t(lang, 'serv_s4_target'),
              provider: {
                '@type': 'Organization',
                name: 'SunGene Co., LTD.',
                url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
              },
              serviceType: 'Sales Outsourcing',
              areaServed: 'Global'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: t(lang, 'serv_s6_name'), // Custom / Full Managed
              description: t(lang, 'serv_s6_target'),
              provider: {
                '@type': 'Organization',
                name: 'SunGene Co., LTD.',
                url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
              },
              serviceType: 'Custom Trade Solutions',
              areaServed: 'Global'
            }
          ])
        }}
      />
      <h1 className="text-4xl font-semibold mt-10">{t(lang, 'serv_page_title')}</h1>
      <p className="mt-2 text-white/70">{t(lang, 'serv_page_subtitle')}</p>
      
      <div className="mt-16">
        {/* Architecture Layer */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-white/10 pb-2">
                {lang === 'zh-Hant' ? '架構層 (Architecture Layer)' : 'Architecture Layer'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* s1 */}
                <div className="rounded-none border border-white/10 bg-white/5 p-8 hover:border-cyan-500/50 transition">
                    <h3 className="text-xl font-bold text-white mb-4">{t(lang, 'serv_s1_name')}</h3>
                    <div className="text-sm text-gray-400 mb-6 font-medium">{t(lang, 'serv_s1_target')}</div>
                    <ul className="space-y-4 mb-8 text-gray-300">
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s1_li1')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s1_li2')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s1_li3')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s1_li4')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s1_li5')}</li>
                    </ul>
                    <div className="pt-6 border-t border-white/10 text-cyan-400 font-bold">
                        {t(lang, 'serv_s1_goal')}
                    </div>
                </div>

                {/* s2 */}
                <div className="rounded-none border border-cyan-500/30 bg-cyan-900/10 p-8 hover:border-cyan-500 transition relative">
                    <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1">POPULAR</div>
                    <h3 className="text-xl font-bold text-white mb-4">{t(lang, 'serv_s2_name')}</h3>
                    <div className="text-sm text-gray-400 mb-6 font-medium">{t(lang, 'serv_s2_target')}</div>
                    <ul className="space-y-4 mb-8 text-gray-300">
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s2_li1')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s2_li2')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s2_li3')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s2_li4')}</li>
                    </ul>
                    <div className="pt-6 border-t border-white/10 text-cyan-400 font-bold">
                        {t(lang, 'serv_s2_goal')}
                    </div>
                </div>

                {/* s3 */}
                <div className="rounded-none border border-white/10 bg-white/5 p-8 hover:border-cyan-500/50 transition">
                    <h3 className="text-xl font-bold text-white mb-4">{t(lang, 'serv_s3_name')}</h3>
                    <div className="text-sm text-gray-400 mb-6 font-medium">{t(lang, 'serv_s3_target')}</div>
                    <ul className="space-y-4 mb-8 text-gray-300">
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s3_li1')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s3_li2')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s3_li3')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s3_li4')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s3_li5')}</li>
                    </ul>
                    <div className="pt-6 border-t border-white/10 text-cyan-400 font-bold whitespace-pre-line">
                        {t(lang, 'serv_s3_goal')}
                    </div>
                </div>
            </div>
        </div>

        {/* Execution Layer */}
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-white/10 pb-2">
                {lang === 'zh-Hant' ? '執行層 (Execution Layer)' : 'Execution Layer'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* s4 */}
                <div className="rounded-none border border-white/10 bg-white/5 p-8 hover:border-cyan-500/50 transition">
                    <h3 className="text-xl font-bold text-white mb-4">{t(lang, 'serv_s4_name')}</h3>
                    <div className="text-sm text-gray-400 mb-6 font-medium">{t(lang, 'serv_s4_target')}</div>
                    <ul className="space-y-4 mb-8 text-gray-300">
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s4_li1')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s4_li2')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s4_li3')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s4_li4')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s4_li5')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s4_li6')}</li>
                    </ul>
                    <div className="pt-6 border-t border-white/10 text-cyan-400 font-bold whitespace-pre-line">
                        {t(lang, 'serv_s4_goal')}
                    </div>
                </div>

                {/* s5 */}
                <div className="rounded-none border border-white/10 bg-white/5 p-8 hover:border-cyan-500/50 transition">
                    <h3 className="text-xl font-bold text-white mb-4">{t(lang, 'serv_s5_name')}</h3>
                    <div className="text-sm text-gray-400 mb-6 font-medium">{t(lang, 'serv_s5_target')}</div>
                    <ul className="space-y-4 mb-8 text-gray-300">
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s5_li1')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s5_li2')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s5_li3')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s5_li4')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s5_li5')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s5_li6')}</li>
                    </ul>
                    <div className="pt-6 border-t border-white/10 text-cyan-400 font-bold whitespace-pre-line">
                        {t(lang, 'serv_s5_goal')}
                    </div>
                </div>

                {/* s6 */}
                <div className="rounded-none border border-white/10 bg-white/5 p-8 hover:border-cyan-500/50 transition">
                    <h3 className="text-xl font-bold text-white mb-4">{t(lang, 'serv_s6_name')}</h3>
                    <div className="text-sm text-gray-400 mb-6 font-medium">{t(lang, 'serv_s6_target')}</div>
                    <ul className="space-y-4 mb-8 text-gray-300">
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s6_li1')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s6_li2')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s6_li3')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s6_li4')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s6_li5')}</li>
                        <li className="flex items-start gap-2"><span className="text-cyan-500">✔</span> {t(lang, 'serv_s6_li6')}</li>
                    </ul>
                    <div className="pt-6 border-t border-white/10 text-cyan-400 font-bold whitespace-pre-line">
                        {t(lang, 'serv_s6_goal')}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
