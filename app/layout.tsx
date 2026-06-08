import '../styles/globals.css'
import React from 'react'
import { headers } from 'next/headers'

export const metadata = {
  title: 'SunGene Industrial IoT | Remote Monitoring & Data Acquisition',
  description:
    'SunGene Industrial IoT supplies remote monitoring and data acquisition solutions for water, energy and industrial equipment, using LoRaWAN, NB-IoT, RS485 and 4G LTE.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const h = await headers()
  const lang = h.get('x-lang')
  const htmlLang = lang === 'en' ? 'en' : 'zh-Hant'

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">{children}</body>
    </html>
  )
}
