import { Lang } from '@/lib/i18n'
import fs from 'node:fs'
import path from 'node:path'
import { appendArticles, isSheetsConfigured, listArticles, type ArticleRow } from '@/lib/googleSheets'

export type Article = {
  id: string
  title: string
  category: string
  date: string
  image: string
  content: string[]
  sections?: { heading: string; content: string[] }[]
}

type CacheEntry = {
  ts: number
  rows: ArticleRow[]
}

function getCache(): CacheEntry | null {
  const g = globalThis as any
  return g.__sungene_articles_cache || null
}

function setCache(entry: CacheEntry) {
  const g = globalThis as any
  g.__sungene_articles_cache = entry
}

async function readAllArticleRows(): Promise<ArticleRow[]> {
  if (isSheetsConfigured()) {
    const cached = getCache()
    if (cached && Date.now() - cached.ts < 60_000) return cached.rows
    const rows = await listArticles()
    if (!rows.length) {
      const seed = readFromLocalFile()
      if (seed.length) {
        try {
          await appendArticles(seed)
          setCache({ ts: Date.now(), rows: seed })
          return seed
        } catch {
          // Ignore seed errors and fall through
        }
      }
    }
    setCache({ ts: Date.now(), rows })
    return rows
  }

  return readFromLocalFile()
}

function readFromLocalFile(): ArticleRow[] {
  const filePath = path.join(process.cwd(), 'data/articles.json')
  if (!fs.existsSync(filePath)) return []
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const parsed = JSON.parse(fileContent)
    return Array.isArray(parsed) ? (parsed as ArticleRow[]) : []
  } catch {
    return []
  }
}

export async function getArticles(lang: Lang): Promise<Article[]> {
  const rows = await readAllArticleRows()
  return rows
    .filter(r => r.lang === lang)
    .map(r => ({
      id: r.id,
      title: r.title,
      category: r.category,
      date: r.date,
      image: r.image,
      content: r.content,
      sections: r.sections,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticle(lang: Lang, id: string): Promise<Article | undefined> {
  const rows = await readAllArticleRows()
  const r = rows.find(x => x.lang === lang && x.id === id)
  if (!r) return undefined
  return {
    id: r.id,
    title: r.title,
    category: r.category,
    date: r.date,
    image: r.image,
    content: r.content,
    sections: r.sections,
  }
}
