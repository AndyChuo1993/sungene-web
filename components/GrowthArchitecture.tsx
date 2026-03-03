import React from 'react'
import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'

export default function GrowthArchitecture() {
  const lang = getLang()
  const steps = [
    { title: t(lang, 'ai_step1_title'), desc: t(lang, 'ai_step1_desc') },
    { title: t(lang, 'ai_step2_title'), desc: t(lang, 'ai_step2_desc') },
    { title: t(lang, 'ai_step3_title'), desc: t(lang, 'ai_step3_desc') },
    { title: t(lang, 'ai_step4_title'), desc: t(lang, 'ai_step4_desc') },
    { title: t(lang, 'ai_step5_title'), desc: t(lang, 'ai_step5_desc') },
    { title: t(lang, 'ai_step6_title'), desc: t(lang, 'ai_step6_desc') },
    { title: t(lang, 'ai_step7_title'), desc: t(lang, 'ai_step7_desc') },
    { title: t(lang, 'ai_step8_title'), desc: t(lang, 'ai_step8_desc') },
    { title: t(lang, 'ai_step9_title'), desc: t(lang, 'ai_step9_desc') },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 bg-gradient-to-b from-[#0B1C2D] to-black/30">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t(lang, 'ai_page_subtitle')}</h2>
        <div className="max-w-3xl mx-auto text-gray-400 text-lg">
            <p className="mb-2">{t(lang, 'ai_intro_p1')}</p>
            <p className="text-cyan-400 font-medium">{t(lang, 'ai_intro_p2')}</p>
        </div>
      </div>
      
      {/* 9-Step Stepper */}
      <div className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group relative flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#0B1C2D] border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold mb-4 group-hover:bg-cyan-500 group-hover:text-black transition duration-300 shadow-lg">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="space-y-12">
            <div className="group border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="text-2xl font-bold text-white mb-6">{t(lang, 'ai_mod1_title')}</h3>
                <ul className="space-y-3">
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod1_li1')}</li>
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod1_li2')}</li>
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod1_li3')}</li>
                </ul>
            </div>
            <div className="group border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="text-2xl font-bold text-white mb-6">{t(lang, 'ai_mod2_title')}</h3>
                <ul className="space-y-3">
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod2_li1')}</li>
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod2_li2')}</li>
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod2_li3')}</li>
                </ul>
            </div>
        </div>
        <div className="space-y-12">
            <div className="group border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="text-2xl font-bold text-white mb-6">{t(lang, 'ai_mod3_title')}</h3>
                <ul className="space-y-3">
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod3_li1')}</li>
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod3_li2')}</li>
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod3_li3')}</li>
                </ul>
            </div>
            <div className="group border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="text-2xl font-bold text-white mb-6">{t(lang, 'ai_mod4_title')}</h3>
                <ul className="space-y-3">
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod4_li1')}</li>
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod4_li2')}</li>
                    <li className="text-gray-400 flex items-center gap-3"><span className="text-cyan-500">●</span> {t(lang, 'ai_mod4_li3')}</li>
                </ul>
            </div>
        </div>
      </div>

      {/* Why & Data */}
      <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-16">
        <div className="bg-white/5 p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">{t(lang, 'ai_why_title')}</h3>
            <ul className="space-y-3 mb-6">
                <li className="text-gray-300 flex items-center gap-3"><span className="text-cyan-500">✔</span> {t(lang, 'ai_why_li1')}</li>
                <li className="text-gray-300 flex items-center gap-3"><span className="text-cyan-500">✔</span> {t(lang, 'ai_why_li2')}</li>
                <li className="text-gray-300 flex items-center gap-3"><span className="text-cyan-500">✔</span> {t(lang, 'ai_why_li3')}</li>
                <li className="text-gray-300 flex items-center gap-3"><span className="text-cyan-500">✔</span> {t(lang, 'ai_why_li4')}</li>
            </ul>
            <p className="text-cyan-400 font-bold border-t border-white/10 pt-4">{t(lang, 'ai_why_note')}</p>
        </div>
        <div className="space-y-8">
             <div className="bg-[#0B1C2D] p-8 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-white mb-6">{t(lang, 'ai_data_title')}</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-cyan-400 font-bold text-lg">{t(lang, 'ai_data_li1')}</div>
                    <div className="text-cyan-400 font-bold text-lg">{t(lang, 'ai_data_li2')}</div>
                    <div className="text-cyan-400 font-bold text-lg">{t(lang, 'ai_data_li3')}</div>
                    <div className="text-cyan-400 font-bold text-lg">{t(lang, 'ai_data_li4')}</div>
                </div>
            </div>
             <div className="bg-white/5 p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">{t(lang, 'ai_sec_title')}</h3>
                <div className="flex flex-wrap gap-4">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">{t(lang, 'ai_sec_li1')}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">{t(lang, 'ai_sec_li2')}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">{t(lang, 'ai_sec_li3')}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">{t(lang, 'ai_sec_li4')}</span>
                </div>
            </div>
        </div>
      </div>
      
    </section>
  )
}
