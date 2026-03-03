import { headers } from 'next/headers'

export default function Hreflang() {
  const h = headers()
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const path = h.get('x-invoke-path') || '/'
  const links = [
    { href: `${site}${path}`, lang: 'zh-Hant' },
    { href: `${site}${path}?lang=en`, lang: 'en' },
  ]
  return (
    <>
      {links.map(l => (
        <link key={l.lang} rel="alternate" hrefLang={l.lang} href={l.href} />
      ))}
    </>
  )
}
