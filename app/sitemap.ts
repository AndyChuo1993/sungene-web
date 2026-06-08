import { MetadataRoute } from 'next'
import { SUPPORTED_LANGS } from '@/lib/i18n'
import { getLocalizedUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = SUPPORTED_LANGS

  // MVP routes only. Products / Industries / Applications / Resources added in batch 2.
  const routes = [
    '',
    '/solutions',
    '/solutions/water-monitoring',
    '/solutions/energy-monitoring',
    '/solutions/equipment-monitoring',
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
