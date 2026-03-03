import { fetchPostBySlug } from '@/lib/cms'
import RichText from '@/components/RichText'

interface Params { params: { slug: string } }

export async function generateMetadata({ params }: Params) {
  const post = await fetchPostBySlug(params.slug)
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  if (!post) return { title: '文章' }
  return {
    title: `${post.title} | 部落格`,
    description: post.excerpt || undefined,
    alternates: { canonical: `${base}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.coverUrl ? [{ url: post.coverUrl }] : undefined
    }
  }
}

export default async function BlogPostPage({ params }: Params) {
  const post = await fetchPostBySlug(params.slug)
  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">文章不存在</h1>
      </main>
    )
  }
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold">{post.title}</h1>
      {post.publishedAt && <div className="mt-2 text-white/60 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</div>}
      {post.coverUrl && (<img src={post.coverUrl} alt={post.title} className="mt-6 rounded-xl border border-white/10" />)}
      <div className="mt-6 prose prose-invert max-w-none">
        <RichText value={post.content} />
      </div>
    </main>
  )
}
