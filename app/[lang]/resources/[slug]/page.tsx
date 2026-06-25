import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Lang, SUPPORTED_LANGS } from '@/lib/i18n'
import { breadcrumbLd, faqLd, getAlternates, getLocalizedUrl, itemListLd } from '@/lib/seo'
import { RESOURCES, RESOURCE_SLUGS, ResourceSlug } from '@/lib/resources'

function pickLang(raw: string): Lang {
  return (['en', 'zh'].includes(raw) ? raw : 'en') as Lang
}

function isSlug(slug: string): slug is ResourceSlug {
  return (RESOURCE_SLUGS as string[]).includes(slug)
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) => RESOURCE_SLUGS.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) return {}
  const resource = RESOURCES[slug].content[lang]
  const title = `${resource.title} | SunGene Industrial IoT`

  return {
    title,
    description: resource.description,
    alternates: getAlternates(lang, `/resources/${slug}`),
    openGraph: {
      title,
      description: resource.description,
      url: getLocalizedUrl(lang, `/resources/${slug}`),
      type: 'article',
      siteName: 'SunGene Industrial IoT',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: resource.title }],
    },
    twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  }
}

export default async function ResourceDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params
  const lang = pickLang(rawLang)
  if (!isSlug(slug)) notFound()

  const resource = RESOURCES[slug].content[lang]
  const url = getLocalizedUrl(lang, `/resources/${slug}`)
  const L = {
    en: {
      back: 'All resources',
      intent: 'Best fit',
      keyPoints: 'Key points',
      products: 'Relevant products',
      technologies: 'Technologies',
      related: 'Related pages',
      faq: 'FAQ',
      quote: 'Discuss a Project',
      catalog: 'Request Catalog',
    },
    zh: {
      back: '全部資源',
      intent: '適用情境',
      keyPoints: '重點整理',
      products: '相關產品',
      technologies: '相關技術',
      related: '相關頁面',
      faq: '常見問題',
      quote: '討論專案',
      catalog: '索取型錄',
    },
  }[lang]

  const breadcrumbSchema = breadcrumbLd([
    { name: lang === 'en' ? 'Home' : '首頁', url: getLocalizedUrl(lang) },
    { name: lang === 'en' ? 'Resources' : '資源', url: getLocalizedUrl(lang, '/resources') },
    { name: resource.title, url },
  ])
  const itemListSchema = itemListLd(resource.relatedLinks.map((link) => ({ name: link.label, url: getLocalizedUrl(lang, link.href) })))
  const faqSchema = faqLd(resource.faqs)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: resource.title,
    description: resource.description,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'SunGene Industrial IoT' },
    publisher: { '@type': 'Organization', name: 'SunGene Industrial IoT' },
    about: resource.technologies,
    mentions: resource.products,
  }

  return (
    <main className="px-6 pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="mx-auto max-w-4xl">
        <Link href={`/${lang}/resources`} className="text-sm font-medium text-blue-700 hover:underline">
          {L.back}
        </Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          {lang === 'en' ? 'Industrial IoT resource' : '工業 IoT 資源'}
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900">{resource.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-600">{resource.description}</p>

        <section className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-800">{L.intent}</h2>
          <p className="mt-3 leading-relaxed text-blue-950">{resource.intent}</p>
        </section>

        <div className="mt-12 space-y-10">
          {resource.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-gray-700">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{L.keyPoints}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {resource.bullets.map((point) => (
              <li key={point} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                <span className="text-sm leading-relaxed text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{L.products}</h2>
            <ul className="mt-4 space-y-2">
              {resource.products.map((product) => (
                <li key={product} className="rounded-md bg-gray-50 px-4 py-2 text-sm text-gray-800">
                  {product}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{L.technologies}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {resource.technologies.map((tech) => (
                <li key={tech} className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-700">
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{L.related}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {resource.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                className="inline-flex items-center gap-2 rounded-sm border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-800"
              >
                {link.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{L.faq}</h2>
          <div className="mt-4 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
            {resource.faqs.map((item) => (
              <div key={item.q} className="p-5">
                <h3 className="font-semibold text-gray-900">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl bg-blue-900 p-8 text-center text-white">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/contact?type=quote`} className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-semibold text-blue-900 transition hover:bg-blue-50">
              {L.quote} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${lang}/resources`} className="inline-flex items-center gap-2 rounded-sm border border-blue-400 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800">
              {L.catalog}
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
