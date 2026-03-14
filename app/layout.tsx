import '../styles/globals.css'
import React from 'react'
import { headers } from 'next/headers'

export const metadata = {
  title: 'SunGene',
  description: 'SunGene website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const h = await headers()
  const lang = h.get('x-lang') === 'zh' ? 'zh' : 'en'
  return (
    <html lang={lang === 'zh' ? 'zh-Hant' : 'en'}>
      <body className="min-h-screen bg-white text-gray-900 antialiased font-sans">{children}</body>
    </html>
  )
}
