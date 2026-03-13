import { google } from 'googleapis'

type SheetsConfig = {
  sheetId: string
  clientEmail: string
  privateKey: string
  inquiriesTab: string
  articlesTab: string
}

function getConfig(): SheetsConfig | null {
  const sheetId = process.env.GOOGLE_SHEETS_SHEET_ID
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKeyRaw = process.env.GOOGLE_SHEETS_PRIVATE_KEY
  if (!sheetId || !clientEmail || !privateKeyRaw) return null

  const privateKey = privateKeyRaw.replace(/\\n/g, '\n')
  const inquiriesTab = process.env.GOOGLE_SHEETS_INQUIRIES_TAB || 'inquiries'
  const articlesTab = process.env.GOOGLE_SHEETS_ARTICLES_TAB || 'articles'

  return { sheetId, clientEmail, privateKey, inquiriesTab, articlesTab }
}

async function getSheets() {
  const cfg = getConfig()
  if (!cfg) {
    throw new Error('Google Sheets not configured')
  }

  const auth = new google.auth.JWT({
    email: cfg.clientEmail,
    key: cfg.privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  return { sheets, cfg }
}

async function ensureHeaderRow(tab: string, header: string[]) {
  const { sheets, cfg } = await getSheets()
  const firstRow = await sheets.spreadsheets.values.get({
    spreadsheetId: cfg.sheetId,
    range: `${tab}!1:1`,
  })
  const values = firstRow.data.values || []
  if (values.length > 0 && values[0]?.length) return

  await sheets.spreadsheets.values.update({
    spreadsheetId: cfg.sheetId,
    range: `${tab}!1:1`,
    valueInputOption: 'RAW',
    requestBody: { values: [header] },
  })
}

export type InquiryRow = {
  id: string
  date: string
  type: string
  name: string
  company?: string
  email: string
  phone?: string
  message?: string
  productName?: string
  quantity?: string
  incoterms?: string
  targetCountry?: string
  targetMarket?: string
  currentChannels?: string
  goals?: string
  topic?: string
  integrationType?: string
  details?: string
  scope?: string
  budget?: string
  timeline?: string
  pageSource?: string
  lang?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  ref?: string
  ip?: string
}

const INQUIRIES_HEADER = [
  'id',
  'date',
  'type',
  'name',
  'company',
  'email',
  'phone',
  'message',
  'productName',
  'quantity',
  'incoterms',
  'targetCountry',
  'targetMarket',
  'currentChannels',
  'goals',
  'topic',
  'integrationType',
  'details',
  'scope',
  'budget',
  'timeline',
  'pageSource',
  'lang',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'ref',
  'ip',
]

export async function appendInquiry(row: InquiryRow) {
  const { sheets, cfg } = await getSheets()
  await ensureHeaderRow(cfg.inquiriesTab, INQUIRIES_HEADER)

  const values = [
    row.id,
    row.date,
    row.type,
    row.name,
    row.company || '',
    row.email,
    row.phone || '',
    row.message || '',
    row.productName || '',
    row.quantity || '',
    row.incoterms || '',
    row.targetCountry || '',
    row.targetMarket || '',
    row.currentChannels || '',
    row.goals || '',
    row.topic || '',
    row.integrationType || '',
    row.details || '',
    row.scope || '',
    row.budget || '',
    row.timeline || '',
    row.pageSource || '',
    row.lang || '',
    row.utm_source || '',
    row.utm_medium || '',
    row.utm_campaign || '',
    row.ref || '',
    row.ip || '',
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId: cfg.sheetId,
    range: `${cfg.inquiriesTab}!A1`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [values] },
  })
}

export async function listInquiries(): Promise<InquiryRow[]> {
  const { sheets, cfg } = await getSheets()
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: cfg.sheetId,
    range: `${cfg.inquiriesTab}!A:AB`,
  })

  const values = res.data.values || []
  if (values.length <= 1) return []

  const header = values[0]
  const rows = values.slice(1)

  const idx = (key: string) => header.indexOf(key)
  const read = (r: string[], key: string) => {
    const i = idx(key)
    return i >= 0 ? r[i] : ''
  }

  return rows
    .filter(r => r.length)
    .map(r => ({
      id: read(r, 'id') || '',
      date: read(r, 'date') || '',
      type: read(r, 'type') || '',
      name: read(r, 'name') || '',
      company: read(r, 'company') || undefined,
      email: read(r, 'email') || '',
      phone: read(r, 'phone') || undefined,
      message: read(r, 'message') || undefined,
      productName: read(r, 'productName') || undefined,
      quantity: read(r, 'quantity') || undefined,
      incoterms: read(r, 'incoterms') || undefined,
      targetCountry: read(r, 'targetCountry') || undefined,
      targetMarket: read(r, 'targetMarket') || undefined,
      currentChannels: read(r, 'currentChannels') || undefined,
      goals: read(r, 'goals') || undefined,
      topic: read(r, 'topic') || undefined,
      integrationType: read(r, 'integrationType') || undefined,
      details: read(r, 'details') || undefined,
      scope: read(r, 'scope') || undefined,
      budget: read(r, 'budget') || undefined,
      timeline: read(r, 'timeline') || undefined,
      pageSource: read(r, 'pageSource') || undefined,
      lang: read(r, 'lang') || undefined,
      utm_source: read(r, 'utm_source') || undefined,
      utm_medium: read(r, 'utm_medium') || undefined,
      utm_campaign: read(r, 'utm_campaign') || undefined,
      ref: read(r, 'ref') || undefined,
      ip: read(r, 'ip') || undefined,
    }))
    .filter(r => r.id && r.email)
}

export type ArticleRow = {
  id: string
  lang: 'zh' | 'en'
  title: string
  category: string
  date: string
  image: string
  content: string[]
  sections?: { heading: string; content: string[] }[]
}

const ARTICLES_HEADER = ['id', 'lang', 'title', 'category', 'date', 'image', 'content', 'sections']

export async function appendArticles(rows: ArticleRow[]) {
  const { sheets, cfg } = await getSheets()
  await ensureHeaderRow(cfg.articlesTab, ARTICLES_HEADER)

  const values = rows.map(r => [
    r.id,
    r.lang,
    r.title,
    r.category,
    r.date,
    r.image,
    JSON.stringify(r.content || []),
    JSON.stringify(r.sections || []),
  ])

  await sheets.spreadsheets.values.append({
    spreadsheetId: cfg.sheetId,
    range: `${cfg.articlesTab}!A1`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  })
}

export async function listArticles(): Promise<ArticleRow[]> {
  const { sheets, cfg } = await getSheets()
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: cfg.sheetId,
    range: `${cfg.articlesTab}!A:H`,
  })
  const values = res.data.values || []
  if (values.length <= 1) return []
  const header = values[0]
  const rows = values.slice(1)
  const idx = (key: string) => header.indexOf(key)
  const read = (r: string[], key: string) => {
    const i = idx(key)
    return i >= 0 ? r[i] : ''
  }

  return rows
    .filter(r => r.length)
    .map((r): ArticleRow | null => {
      const id = read(r, 'id')
      const lang = read(r, 'lang') as 'zh' | 'en'
      const title = read(r, 'title')
      const category = read(r, 'category')
      const date = read(r, 'date')
      const image = read(r, 'image')
      if (!id || (lang !== 'zh' && lang !== 'en') || !title) return null
      const contentRaw = read(r, 'content')
      const sectionsRaw = read(r, 'sections')
      let content: string[] = []
      let sections: { heading: string; content: string[] }[] | undefined
      try {
        content = contentRaw ? JSON.parse(contentRaw) : []
      } catch {
        content = contentRaw ? [contentRaw] : []
      }
      try {
        const parsed = sectionsRaw ? JSON.parse(sectionsRaw) : []
        sections = Array.isArray(parsed) && parsed.length ? parsed : undefined
      } catch {
        sections = undefined
      }
      return { id, lang, title, category, date, image, content, sections }
    })
    .filter((x): x is ArticleRow => Boolean(x))
}

export function isSheetsConfigured() {
  return Boolean(getConfig())
}

