import { Lang } from '@/lib/i18n'

const DEFAULT_SITE_URL = 'https://sungenelite.com'
const DEFAULT_LANG: Lang = 'en'

function normalizePath(path = '') {
  if (!path) return ''
  return path.startsWith('/') ? path : `/${path}`
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
}

export function getLocalizedUrl(lang: Lang, path = '') {
  return `${getSiteUrl()}/${lang}${normalizePath(path)}`
}

export function getLanguageAlternates(path = '') {
  const normalizedPath = normalizePath(path)
  const siteUrl = getSiteUrl()

  return {
    'zh-TW': `${siteUrl}/zh${normalizedPath}`,
    en: `${siteUrl}/en${normalizedPath}`,
    'x-default': `${siteUrl}/${DEFAULT_LANG}${normalizedPath}`,
  }
}

export function getAlternates(lang: Lang, path = '') {
  return {
    canonical: getLocalizedUrl(lang, path),
    languages: getLanguageAlternates(path),
  }
}

/** BreadcrumbList JSON-LD. Pass items in order (Home first). */
export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

/** FAQPage JSON-LD from question/answer pairs. */
export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

/** Product JSON-LD built from the catalog spec table. */
export function productLd(opts: {
  name: string
  description: string
  image: string
  url: string
  category?: string
  specs?: { label: string; value: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    image: opts.image.startsWith('http') ? opts.image : `${getSiteUrl()}${opts.image}`,
    url: opts.url,
    ...(opts.category ? { category: opts.category } : {}),
    brand: { '@type': 'Brand', name: 'SunGene Industrial IoT' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Industrial IoT' },
    ...(opts.specs && opts.specs.length
      ? {
          additionalProperty: opts.specs.map((s) => ({
            '@type': 'PropertyValue',
            name: s.label,
            value: s.value,
          })),
        }
      : {}),
  }
}
