
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { cookies } from 'next/headers'
import { appendArticles, isSheetsConfigured } from '@/lib/googleSheets'

export async function POST(req: Request) {
  const cookieStore = cookies()
  const adminCookie = cookieStore.get('admin')
  
  if (adminCookie?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()

    const date = body.date || new Date().toISOString().split('T')[0]
    const image = body.image || '/articles/lead-gen-guide.svg'

    const slugify = (s: string) =>
      String(s)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

    const id = body.id || slugify(body.title || body.titleEn || body.titleZh || '')
    if (!id) return NextResponse.json({ error: 'Missing id/slug' }, { status: 400 })

    const normalizeContent = (raw: any): string[] => {
      if (Array.isArray(raw)) return raw.filter(Boolean).map(String)
      if (typeof raw === 'string') return raw.split('\n\n').map(s => s.trim()).filter(Boolean)
      return []
    }

    const toRow = (lang: 'zh' | 'en', title: string, category: string, contentRaw: any) => ({
      id,
      lang,
      title,
      category,
      date,
      image,
      content: normalizeContent(contentRaw),
      sections: undefined,
    })

    const rows: any[] = []

    if (body.zh && body.en) {
      if (!body.zh.title || !body.zh.content || !body.en.title || !body.en.content) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
      }
      rows.push(toRow('zh', body.zh.title, body.zh.category || '外貿開發指南', body.zh.content))
      rows.push(toRow('en', body.en.title, body.en.category || 'Export Guide', body.en.content))
    } else {
      if (!body.title || !body.content || !body.lang) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
      }
      const lang = body.lang === 'zh' ? 'zh' : 'en'
      rows.push(toRow(lang, body.title, body.category || (lang === 'zh' ? '外貿開發指南' : 'Export Guide'), body.content))
    }

    if (isSheetsConfigured()) {
      await appendArticles(rows)
      return NextResponse.json({ success: true, id })
    }

    const filePath = path.join(process.cwd(), 'data/articles.json')
    let articles = []
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      try {
        articles = JSON.parse(fileContent)
      } catch {
        articles = []
      }
    }
    articles.push(...rows)
    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2))

    return NextResponse.json({ success: true, id })
  } catch (error) {
    console.error('Create article error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
