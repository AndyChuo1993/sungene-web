const RAW_CMS_URL = process.env.NEXT_PUBLIC_CMS_URL
const CMS_URL = RAW_CMS_URL ? RAW_CMS_URL.replace(/\/$/, '') : undefined

async function cmsJson(path: string) {
  if (!CMS_URL) return null
  try {
    const r = await fetch(`${CMS_URL}${path}`, { next: { revalidate: 60 } })
    if (!r.ok) return null
    return r.json()
  } catch {
    return null
  }
}

export async function fetchHomeHero() {
  const data = await cmsJson('/api/globals/home-hero')
  if (data && Array.isArray(data.slides)) {
    return {
      slides: data.slides.map((s: any) => ({
        id: s.id || s.title,
        title: s.title,
        subtitle: s.subtitle,
        ctaLabel: s.ctaLabel,
        ctaUrl: s.ctaUrl,
        imageUrl: s.image?.url,
        videoUrl: s.videoUrl || undefined
      }))
    }
  }
  return {
    slides: [
      {
        id: 's1',
        title: 'AI 驅動的一站式全球貿易平台',
        subtitle: '連接全球採購商與供應商，以數據與智能實現高效拓展',
        ctaLabel: '聯繫我們',
        ctaUrl: '/contact',
        imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
      },
      {
        id: 's2',
        title: '全球採購協助',
        subtitle: '端到端尋源、驗貨與合規把關，讓採購更穩定可靠',
        ctaLabel: '了解服務',
        ctaUrl: '/services#procurement',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop'
      },
        {
        id: 's3',
        title: 'AI 外貿拓展平台',
        subtitle: '運用大數據與智能打分，快速鎖定高匹配客戶',
        ctaLabel: '開始探索',
        ctaUrl: '/services#ai',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop'
      }
    ]
  }
}

export async function fetchHomeStats() {
  const data = await cmsJson('/api/globals/home-stats')
  if (data) return data
  return { countriesServed: 30, aiMatchRate: 92, suppliers: 1200, clients: 350 }
}

export async function fetchModules() {
  const data = await cmsJson('/api/globals/modules')
  if (data) return data
  return { procurementEnabled: true, aiPlatformEnabled: true, odmOemEnabled: true }
}

export async function fetchHomepage() {
  const data = await cmsJson('/api/globals/homepage')
  if (data && Array.isArray(data.sections)) return data.sections
  return null
}

export async function fetchPartners() {
  const data = await cmsJson('/api/partners?limit=50')
  if (data && Array.isArray(data.docs)) {
    return data.docs.map((d: any) => ({
      id: d.id,
      name: d.name,
      logoUrl: d.logo?.url || null,
      website: d.website || null
    }))
  }
  return []
}

export async function fetchCaseStudies() {
  const data = await cmsJson('/api/case-studies?limit=20&sort=-createdAt')
  if (data && Array.isArray(data.docs)) {
    return data.docs.map((d: any) => ({
      id: d.id,
      title: d.title,
      slug: d.slug,
      industry: d.industry,
      summary: d.summary,
      result: d.result,
      images: Array.isArray(d.images) ? d.images.map((i: any) => i?.image?.url).filter(Boolean) : []
    }))
  }
  return []
}

export async function fetchCaseStudyById(id: string) {
  const data = await cmsJson(`/api/case-studies/${encodeURIComponent(id)}`)
  if (!data || !data.id) return null
  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    industry: data.industry,
    summary: data.summary,
    result: data.result,
    content: data.content,
    images: Array.isArray(data.images) ? data.images.map((i: any) => i?.image?.url).filter(Boolean) : []
  }
}

export async function fetchCaseStudyBySlug(slug: string) {
  const q = `/api/case-studies?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`
  const data = await cmsJson(q)
  const d = data?.docs?.[0]
  if (!d) return null
  return {
    id: d.id,
    title: d.title,
    slug: d.slug,
    industry: d.industry,
    summary: d.summary,
    result: d.result,
    content: d.content,
    images: Array.isArray(d.images) ? d.images.map((i: any) => i?.image?.url).filter(Boolean) : []
  }
}

export async function fetchPosts() {
  const data = await cmsJson('/api/posts?limit=20&sort=-publishedAt')
  if (data && Array.isArray(data.docs)) {
    return data.docs.map((d: any) => ({
      id: d.id,
      title: d.title,
      slug: d.slug,
      excerpt: d.excerpt,
      coverUrl: d.cover?.url || null,
      publishedAt: d.publishedAt,
      content: d.content
    }))
  }
  return []
}

export async function fetchPostBySlug(slug: string) {
  const data = await cmsJson(`/api/posts?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`)
  const d = data?.docs?.[0]
  if (!d) return null
  return {
    id: d.id,
    title: d.title,
    slug: d.slug,
    excerpt: d.excerpt,
    coverUrl: d.cover?.url || null,
    publishedAt: d.publishedAt,
    content: d.content
  }
}

export async function fetchAbout() {
  const data = await cmsJson('/api/globals/about-page')
  if (data) return data
  return null
}

export async function fetchIndustries() {
  const data = await cmsJson('/api/industries?limit=100')
  if (data && Array.isArray(data.docs)) {
    return data.docs
  }
  return []
}

export async function fetchServices() {
  const data = await cmsJson('/api/services?limit=100')
  if (data && Array.isArray(data.docs)) {
    return data.docs
  }
  return []
}

export async function fetchBranding() {
  const data = await cmsJson('/api/globals/branding')
  if (!data) return null
  return {
    siteName: data.siteName || null,
    logoUrl: data.logo?.url || null,
    faviconUrl: data.favicon?.url || null
  }
}

export async function fetchPageByPath(path: string) {
  if (!path) return null
  let p = path.trim()
  if (!p.startsWith('/')) p = '/' + p
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)
  const q =
    `/api/pages?` +
    `where[status][equals]=published&` +
    `where[path][equals]=${encodeURIComponent(p)}` +
    `&limit=1&depth=2`
  const data = await cmsJson(q)
  const doc = data?.docs?.[0]
  return doc || null
}

export async function fetchAllPagePaths() {
  const data = await cmsJson('/api/pages?where[status][equals]=published&limit=1000&sort=-updatedAt')
  if (data && Array.isArray(data.docs)) {
    return data.docs
      .map((d: any) => ({ path: d.path, updatedAt: d.updatedAt }))
      .filter((x: any) => typeof x.path === 'string' && x.path.startsWith('/'))
  }
  return []
}

export async function fetchAllPostSlugs() {
  const data = await cmsJson('/api/posts?limit=1000&sort=-publishedAt')
  if (data && Array.isArray(data.docs)) {
    return data.docs.map((d: any) => ({
      slug: d.slug,
      updatedAt: d.updatedAt,
      publishedAt: d.publishedAt
    })).filter((d: any) => !!d.slug)
  }
  return []
}

export async function fetchAllCaseStudySlugs() {
  const data = await cmsJson('/api/case-studies?limit=1000&sort=-updatedAt')
  if (data && Array.isArray(data.docs)) {
    return data.docs.map((d: any) => ({
      slug: d.slug,
      updatedAt: d.updatedAt
    })).filter((d: any) => !!d.slug)
  }
  return []
}
