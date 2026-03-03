'use client'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'zh-Hant' | 'en'>('zh-Hant')
  useEffect(() => {
    const v = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/)?.[1]
    if (v === 'en') setLang('en')
  }, [])
  const toggle = () => {
    const to = lang === 'zh-Hant' ? 'en' : 'zh-Hant'
    const u = new URL(window.location.href)
    u.pathname = u.pathname // keep path
    u.searchParams.set('to', to)
    fetch(`/api/lang?to=${encodeURIComponent(to)}&return=${encodeURIComponent(u.pathname + u.search)}`).then(() => {
      setTimeout(() => window.location.reload(), 100)
    })
  }
  return (
    <button onClick={toggle} className="text-white/80 hover:text-white" aria-label="language switch">
      {lang === 'zh-Hant' ? '繁中' : 'EN'}
    </button>
  )
}
