import { fetchPageByPath } from '@/lib/cms'
import RenderBlocks from '@/components/pageBlocks/RenderBlocks'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const path = `/${params.slug}`
  const page = await fetchPageByPath(path)
  if (!page) return { title: 'Page' }
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const seo = page.seo || {}
  const metaTitle = seo.metaTitle || page.title || 'Page'
  const metaDescription = seo.metaDescription || undefined
  const ogImageUrl = seo.ogImage?.url || undefined
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `${base}${page.path || path}` },
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined
    }
  }
}

export default async function MarketingPage({ params }: { params: { slug: string } }) {
  const path = `/${params.slug}`
  const page = await fetchPageByPath(path)
  if (!page) notFound()
  return (
    <main className="relative">
      <RenderBlocks blocks={page.layout || []} />
    </main>
  )
}
