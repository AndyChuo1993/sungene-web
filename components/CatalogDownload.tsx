'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Lang } from '@/lib/i18n'
import { Download, Check } from 'lucide-react'

const CATALOG_URL = '/catalog/sungene-industrial-iot-catalog.pdf'

const C = {
  en: {
    name: 'Your Name', company: 'Company', email: 'Business Email',
    submit: 'Get the Catalog (PDF)', sending: 'Sending...',
    okTitle: 'Your catalog is ready', okDesc: 'We have also emailed you the link. Download it below:',
    download: 'Download Catalog (PDF)', invalid: 'Please enter a valid business email.',
    err: 'Something went wrong. Please email contact@sungenelite.com.',
  },
  zh: {
    name: '姓名', company: '公司名稱', email: '公司電子郵件',
    submit: '取得型錄（PDF）', sending: '送出中...',
    okTitle: '型錄已準備好', okDesc: '我們也將連結寄到您的信箱。可在下方下載：',
    download: '下載型錄（PDF）', invalid: '請輸入有效的公司電子郵件。',
    err: '發生錯誤，請來信 contact@sungenelite.com。',
  },
} as const

export default function CatalogDownload({ lang }: { lang: Lang }) {
  const t = C[lang]
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') || '')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError(t.invalid); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Catalog Request',
          name: String(data.get('name') || '') || email,
          company: String(data.get('company') || ''),
          email,
          message: 'Catalog download request',
          pageSource: pathname,
          lang,
          website: String(data.get('website') || ''),
        }),
      })
      const j = await res.json().catch(() => null)
      if (!res.ok || j?.ok === false) throw new Error(j?.error || `HTTP ${res.status}`)
      setDone(true)
    } catch {
      setError(t.err)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{t.okTitle}</h3>
        <p className="mt-2 text-gray-600">{t.okDesc}</p>
        <a
          href={CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-sm bg-blue-900 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800"
        >
          <Download className="h-4 w-4" /> {t.download}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" placeholder={t.name} autoComplete="name" className="w-full rounded-sm border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
        <input name="company" placeholder={t.company} className="w-full rounded-sm border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
      </div>
      <input name="email" type="email" required placeholder={t.email} autoComplete="email" className="w-full rounded-sm border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-blue-900 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-70 sm:w-auto">
        <Download className="h-4 w-4" /> {loading ? t.sending : t.submit}
      </button>
    </form>
  )
}
