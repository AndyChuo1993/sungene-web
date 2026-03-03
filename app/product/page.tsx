import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import BreadcrumbJSONLD from '@/components/BreadcrumbJSONLD'
import GrowthArchitecture from '@/components/GrowthArchitecture'

export async function generateMetadata() {
  const lang = getLang()
  return {
    title: t(lang, 'meta_product_title'),
    description: t(lang, 'meta_product_desc'),
  }
}

export default function ProductPage() {
  const lang = getLang()
  
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 min-h-screen">
      <BreadcrumbJSONLD items={[
        { name: t(lang, 'nav_home'), url: '/' },
        { name: t(lang, 'nav_product'), url: '/product' },
      ]} />
      <h1 className="text-4xl font-bold mb-8 text-center">{t(lang, 'nav_product')}</h1>
      <p className="mt-2 text-xl text-center text-gray-400 max-w-3xl mx-auto mb-16">{t(lang, 'sol_subtitle')}</p>
      
      <GrowthArchitecture />
    </main>
  )
}
