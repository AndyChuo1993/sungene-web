'use client'
import { useEffect, useState } from 'react'
import { t, Lang } from '@/lib/i18n'

function getLangClient(): Lang {
  if (typeof document === 'undefined') return 'zh-Hant'
  const v = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/)?.[1]
  return v === 'en' ? 'en' : 'zh-Hant'
}

type Tab = 'supplier' | 'market' | 'ai' | 'custom'

export default function InquiryForm() {
  const [tab, setTab] = useState<Tab>('supplier')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [lang, setLang] = useState<Lang>('zh-Hant')
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  useEffect(() => {
    setLang(getLangClient())
  }, [])

  useEffect(() => {
    if (!siteKey) return
    const id = 'recaptcha-script'
    if (typeof window === 'undefined') return
    if (document.getElementById(id)) return
    const s = document.createElement('script')
    s.id = id
    s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    document.head.appendChild(s)
    return () => {
      const el = document.getElementById(id)
      if (el) el.remove()
    }
  }, [siteKey])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const form = new FormData(e.currentTarget)
    const typeMap: Record<Tab, string> = {
      supplier: 'Need Supplier',
      market: 'Need Market',
      ai: 'Need AI',
      custom: 'Need Custom'
    }
    const type = typeMap[tab]
    const payload: any = { type }

    payload.name = form.get('name')
    payload.company = form.get('company')
    payload.email = form.get('email')
    payload.phone = form.get('phone')
    payload.message = form.get('message')
    payload.website = form.get('website')

    if (type === 'supplier') {
      payload.productName = form.get('productName')
      payload.quantity = form.get('quantity')
      payload.incoterms = form.get('incoterms')
      payload.targetCountry = form.get('targetCountry')
    } else if (type === 'market') {
      payload.targetMarket = form.get('targetMarket')
      payload.currentChannels = form.get('currentChannels')
      payload.goals = form.get('goals')
    } else if (type === 'ai') {
      payload.topic = form.get('topic')
      payload.integrationType = form.get('integrationType')
      payload.details = form.get('details')
    } else if (type === 'custom') {
      payload.scope = form.get('scope')
      payload.budget = form.get('budget')
      payload.timeline = form.get('timeline')
    }

    if (siteKey && typeof window !== 'undefined' && (window as any).grecaptcha) {
      try {
        await new Promise(resolve => (window as any).grecaptcha.ready(resolve))
        const token = await (window as any).grecaptcha.execute(siteKey, { action: 'inquiry' })
        payload.recaptchaToken = token
      } catch {}
    }

    const res = await fetch('/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })

    setSubmitting(false)
    if (res.ok) {
      setDone(true)
    } else {
      setError(t(lang, 'form_submit_error'))
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-2xl font-semibold">{t(lang, 'form_success_title')}</div>
        <p className="mt-2 text-white/70">{t(lang, 'form_success_desc')}</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="inline-flex rounded-lg bg-white/10 p-1">
        {(['supplier', 'market', 'ai', 'custom'] as Tab[]).map(tKey => (
          <button
            key={tKey}
            onClick={() => setTab(tKey)}
            className={tKey === tab ? 'px-4 py-2 rounded-md bg-cyan-500 text-black' : 'px-4 py-2 rounded-md text-white'}
            type="button"
          >
            {tKey === 'supplier' ? t(lang, 'form_tab_supplier') : 
             tKey === 'market' ? t(lang, 'form_tab_market') : 
             tKey === 'ai' ? t(lang, 'form_tab_ai') : 
             t(lang, 'form_tab_custom')}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        {tab === 'supplier' && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="productName" label={t(lang, 'form_field_productName')} required />
              <Field name="quantity" label={t(lang, 'form_field_quantity')} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="incoterms" label={t(lang, 'form_field_incoterms')} />
              <Field name="targetCountry" label={t(lang, 'form_field_targetCountry')} />
            </div>
          </>
        )}

        {tab === 'market' && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="targetMarket" label={t(lang, 'form_field_targetMarket')} required />
              <Field name="currentChannels" label={t(lang, 'form_field_currentChannels')} />
            </div>
            <Field name="goals" label={t(lang, 'form_field_goals')} />
          </>
        )}

        {tab === 'ai' && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="topic" label={t(lang, 'form_field_topic')} required />
              <Field name="integrationType" label={t(lang, 'form_field_integrationType')} />
            </div>
            <Field name="details" label={t(lang, 'form_field_details')} textarea />
          </>
        )}

        {tab === 'custom' && (
          <>
            <Field name="scope" label={t(lang, 'form_field_scope')} required />
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="budget" label={t(lang, 'form_field_budget')} />
              <Field name="timeline" label={t(lang, 'form_field_timeline')} />
            </div>
          </>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <Field name="name" label={t(lang, 'form_field_name')} required />
          <Field name="company" label={t(lang, 'form_field_company')} />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Field name="email" label={t(lang, 'form_field_email')} type="email" required />
          <Field name="phone" label={t(lang, 'form_field_phone')} required />
        </div>

        <Field name="message" label={t(lang, 'form_field_message')} textarea />

        <button disabled={submitting} className="rounded-md bg-cyan-500 px-6 py-3 text-black hover:bg-cyan-400 disabled:opacity-60">
          {submitting ? t(lang, 'form_submit_sending') : t(lang, 'form_submit_btn')}
        </button>
        {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
      </form>
    </div>
  )
}

function Field(props: { name: string; label: string; required?: boolean; textarea?: boolean; type?: string }) {
  const { name, label, required, textarea, type } = props
  return (
    <label className="block text-sm">
      <span className="text-white/80">{label}{required ? ' *' : ''}</span>
      {textarea ? (
        <textarea name={name} required={required} className="mt-1 w-full rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 ring-cyan-400 min-h-[120px]" />
      ) : (
        <input name={name} required={required} type={type || 'text'} className="mt-1 w-full rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 ring-cyan-400" />
      )}
    </label>
  )
}
