import { MetadataRoute } from 'next'
import { SUPPORTED_LANGS } from '@/lib/i18n'
import { getLocalizedUrl } from '@/lib/seo'
import { PRODUCT_SLUGS } from '@/lib/products'
import { APPLICATION_SLUGS } from '@/lib/applications'
import { INDUSTRY_SLUGS } from '@/lib/industries'

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = SUPPORTED_LANGS

  const routes = [
    '',
    '/solutions',
    '/solutions/water-monitoring',
    '/solutions/energy-monitoring',
    '/solutions/equipment-monitoring',
    '/products',
    ...PRODUCT_SLUGS.map((s) => `/products/${s}`),
    '/applications',
    ...APPLICATION_SLUGS.map((s) => `/applications/${s}`),
    '/industries',
    ...INDUSTRY_SLUGS.map((s) => `/industries/${s}`),
    '/resources',
    '/partners',
    '/about',
    '/contact',
  ]

  const sitemap: MetadataRoute.Sitemap = []
  const lastMod = new Date('2026-06-08')

  routes.forEach((route) => {
    langs.forEach((lang) => {
      sitemap.push({
        url: getLocalizedUrl(lang, route),
        lastModified: lastMod,
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
