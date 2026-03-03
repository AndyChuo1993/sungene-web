import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import BreadcrumbJSONLD from '@/components/BreadcrumbJSONLD'

export async function generateMetadata() {
  const lang = getLang()
  return {
    title: t(lang, 'meta_about_title'),
    description: t(lang, 'meta_about_desc'),
  }
}

export default function AboutPage() {
  const lang = getLang()
  
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 min-h-screen">
      <BreadcrumbJSONLD items={[
        { name: t(lang, 'nav_home'), url: '/' },
        { name: t(lang, 'nav_about'), url: '/about' },
      ]} />
      <h1 className="text-4xl font-bold mb-8">{t(lang, 'about_title')}</h1>
      
      {/* Three-line Summary */}
      <div className="mb-16 border-l-4 border-cyan-500 pl-6 py-2">
        <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
          {t(lang, 'about_summary_1')}<br />
          {t(lang, 'about_summary_2')}<br />
          {t(lang, 'about_summary_3')}
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-white">{t(lang, 'about_desc')}</h2>
        <p className="text-xl leading-relaxed mb-12 border-l-4 border-cyan-500 pl-6">
          {t(lang, 'about_desc_text')}
        </p>

        <h2 className="text-2xl font-bold mb-4 text-white">{t(lang, 'about_overview')}</h2>
        <p className="text-lg leading-relaxed mb-12">
          {t(lang, 'about_overview_text')}
        </p>

        {/* Data Wall */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-white/10 py-12">
            <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">{t(lang, 'about_stats_countries')}</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">200+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">{t(lang, 'about_stats_clients')}</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">600+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">{t(lang, 'about_stats_orders')}</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Multi</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">{t(lang, 'about_stats_industries')}</div>
            </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white">{t(lang, 'about_direction')}</h2>
        <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3"><span className="text-cyan-500">✔</span> {t(lang, 'about_direction_1')}</li>
            <li className="flex items-center gap-3"><span className="text-cyan-500">✔</span> {t(lang, 'about_direction_2')}</li>
            <li className="flex items-center gap-3"><span className="text-cyan-500">✔</span> {t(lang, 'about_direction_3')}</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
                <h2 className="text-2xl font-bold mb-6 text-white">{t(lang, 'about_results')}</h2>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">★</span>
                        <span>{t(lang, 'about_results_1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">★</span>
                        <span>{t(lang, 'about_results_2')}</span>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-6 text-white">{t(lang, 'about_tech')}</h2>
                <p className="text-gray-400 leading-relaxed">
                    {t(lang, 'about_tech_text')}
                </p>
            </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-white">{t(lang, 'about_core')}</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white/5 p-8 border border-white/10">
                <p className="text-lg">{t(lang, 'about_core_1')}</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
                <p className="text-lg">{t(lang, 'about_core_2')}</p>
            </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-900/20 to-transparent p-10 border-l-4 border-cyan-500 mb-16">
            <h2 className="text-2xl font-bold mb-4 text-white">{t(lang, 'about_goal')}</h2>
            <p className="text-xl italic text-gray-300">
                "{t(lang, 'about_goal_text')}"
            </p>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">{t(lang, 'faq_title')}</h2>
        <div className="grid gap-4">
          <details className="group rounded-none border border-white/10 bg-white/5 p-6 open:bg-white/10 transition duration-300">
            <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between text-white group-open:text-cyan-400">
              {t(lang, 'faq_compliance_q')}
              <span className="text-cyan-500 text-xl group-open:rotate-180 transition">+</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {t(lang, 'faq_compliance_a')}
            </p>
          </details>
          
          <details className="group rounded-none border border-white/10 bg-white/5 p-6 open:bg-white/10 transition duration-300">
            <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between text-white group-open:text-cyan-400">
              {t(lang, 'faq_integration_q')}
              <span className="text-cyan-500 text-xl group-open:rotate-180 transition">+</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {t(lang, 'faq_integration_a')}
            </p>
          </details>

          <details className="group rounded-none border border-white/10 bg-white/5 p-6 open:bg-white/10 transition duration-300">
            <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between text-white group-open:text-cyan-400">
              {t(lang, 'faq_deployment_q')}
              <span className="text-cyan-500 text-xl group-open:rotate-180 transition">+</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {t(lang, 'faq_deployment_a')}
            </p>
          </details>

          <details className="group rounded-none border border-white/10 bg-white/5 p-6 open:bg-white/10 transition duration-300">
            <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between text-white group-open:text-cyan-400">
              {t(lang, 'faq_roi_measure_q')}
              <span className="text-cyan-500 text-xl group-open:rotate-180 transition">+</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {t(lang, 'faq_roi_measure_a')}
            </p>
          </details>
          
          <details className="group rounded-none border border-white/10 bg-white/5 p-6 open:bg-white/10 transition duration-300">
            <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between text-white group-open:text-cyan-400">
              {t(lang, 'faq_difference_q')}
              <span className="text-cyan-500 text-xl group-open:rotate-180 transition">+</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {t(lang, 'faq_difference_a')}
            </p>
          </details>

          <details className="group rounded-none border border-white/10 bg-white/5 p-6 open:bg-white/10 transition duration-300">
            <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between text-white group-open:text-cyan-400">
              {t(lang, 'faq_enterprise_q')}
              <span className="text-cyan-500 text-xl group-open:rotate-180 transition">+</span>
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {t(lang, 'faq_enterprise_a')}
            </p>
          </details>
        </div>
      </section>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: t(lang, 'faq_compliance_q'),
                acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_compliance_a') },
              },
              {
                '@type': 'Question',
                name: t(lang, 'faq_integration_q'),
                acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_integration_a') },
              },
              {
                '@type': 'Question',
                name: t(lang, 'faq_deployment_q'),
                acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_deployment_a') },
              },
              {
                '@type': 'Question',
                name: t(lang, 'faq_roi_measure_q'),
                acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_roi_measure_a') },
              },
              {
                '@type': 'Question',
                name: t(lang, 'faq_difference_q'),
                acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_difference_a') },
              },
              {
                '@type': 'Question',
                name: t(lang, 'faq_enterprise_q'),
                acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_enterprise_a') },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
