import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const path = searchParams.get('path') || '/'
  if (!process.env.PREVIEW_SECRET || secret !== process.env.PREVIEW_SECRET) {
    return new NextResponse('Invalid secret', { status: 401 })
  }
  draftMode().enable()
  return NextResponse.redirect(new URL(path, req.url))
}

