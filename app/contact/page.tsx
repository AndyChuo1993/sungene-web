import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import ContactClient from './ContactClient'
import BreadcrumbJSONLD from '@/components/BreadcrumbJSONLD'

export async function generateMetadata() {
  const lang = getLang()
  return {
    title: t(lang, 'meta_contact_title'),
    description: t(lang, 'meta_contact_desc'),
  }
}

export default function ContactPage() {
  const lang = getLang()
  return (
    <>
      <BreadcrumbJSONLD items={[
        { name: t(lang, 'nav_home'), url: '/' },
        { name: t(lang, 'nav_contact'), url: '/contact' },
      ]} />
      <ContactClient />
    </>
  )
}
