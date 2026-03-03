import Link from 'next/link'
import { fetchPosts } from '@/lib/cms'
import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'

export async function generateMetadata() {
  const lang = getLang()
  return {
    title: t(lang, 'meta_blog_title'),
    description: t(lang, 'meta_blog_desc'),
  }
}

export default async function BlogIndexPage() {
  const posts = await fetchPosts()
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">最新文章</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {posts.length === 0 ? (
          <div className="text-white/60">尚無文章，請於後台新增 posts</div>
        ) : (
          posts.map((p: any) => (
            <article key={p.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </div>
              {p.excerpt && <p className="mt-2 text-white/80">{p.excerpt}</p>}
              {p.publishedAt && <div className="mt-2 text-white/60 text-sm">{new Date(p.publishedAt).toLocaleDateString()}</div>}
            </article>
          ))
        )}
      </div>
    </main>
  )
}
