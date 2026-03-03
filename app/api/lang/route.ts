import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const to = searchParams.get('to') === 'en' ? 'en' : 'zh-Hant'
  const ret = searchParams.get('return') || '/'
  const res = NextResponse.redirect(new URL(ret, req.url))
  res.cookies.set('lang', to, { path: '/', httpOnly: false, sameSite: 'lax', maxAge: 60 * 60 * 24 * 365 })
  return res
}
