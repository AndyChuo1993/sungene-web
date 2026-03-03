import type { MetadataRoute } from 'next'
import { fetchAllPostSlugs, fetchAllCaseStudySlugs, fetchAllPagePaths } from '@/lib/cms'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const STATIC_LAST_MOD = new Date('2025-01-01T00:00:00Z')
  const [pages, posts, cases] = await Promise.all([fetchAllPagePaths(), fetchAllPostSlugs(), fetchAllCaseStudySlugs()])
  
  const pageEntries: MetadataRoute.Sitemap = pages.flatMap((p: any) => {
    const url = base + p.path
    const lastModified = p.updatedAt ? new Date(p.updatedAt) : STATIC_LAST_MOD
    return [
      { url, lastModified },
      { url: `${url}${url.includes('?') ? '&' : '?'}lang=en`, lastModified }
    ]
  })

  const blogEntries: MetadataRoute.Sitemap = posts.flatMap((p: any) => {
    const url = `${base}/blog/${p.slug}`
    const lastModified = p.updatedAt ? new Date(p.updatedAt) : (p.publishedAt ? new Date(p.publishedAt) : STATIC_LAST_MOD)
    return [
      { url, lastModified },
      { url: `${url}?lang=en`, lastModified }
    ]
  })

  const caseEntries: MetadataRoute.Sitemap = cases.flatMap((c: any) => {
    const url = `${base}/case-studies/${c.slug}`
    const lastModified = c.updatedAt ? new Date(c.updatedAt) : STATIC_LAST_MOD
    return [
      { url, lastModified },
      { url: `${url}?lang=en`, lastModified }
    ]
  })

  return [...pageEntries, ...blogEntries, ...caseEntries]
}
