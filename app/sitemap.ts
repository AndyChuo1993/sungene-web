import { MetadataRoute } from 'next'
import { SUPPORTED_LANGS } from '@/lib/i18n'
import { getLocalizedUrl } from '@/lib/seo'
import { PRODUCT_SLUGS } from '@/lib/products'
import { SOLUTION_SLUGS } from '@/lib/solutions'
import { KIT_SLUGS } from '@/lib/kits'
import { APPLICATION_SLUGS } from '@/lib/applications'
import { INDUSTRY_SLUGS } from '@/lib/industries'
import { RESOURCE_SLUGS } from '@/lib/resources'

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = SUPPORTED_LANGS

  const routes = [
    '',
    '/solutions',
    ...SOLUTION_SLUGS.map((s) => `/solutions/${s}`),
    '/products',
    ...PRODUCT_SLUGS.map((s) => `/products/${s}`),
    '/kits',
    ...KIT_SLUGS.map((s) => `/kits/${s}`),
    '/applications',
    ...APPLICATION_SLUGS.map((s) => `/applications/${s}`),
    '/industries',
    ...INDUSTRY_SLUGS.map((s) => `/industries/${s}`),
    '/resources',
    ...RESOURCE_SLUGS.map((s) => `/resources/${s}`),
    '/partners',
    '/about',
    '/contact',
  ]

  const sitemap: MetadataRoute.Sitemap = []
  // Build-time stamp: routes regenerate on each deploy, which only happens on content change.
  const lastMod = new Date()

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
