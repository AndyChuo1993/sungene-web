import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['zh', 'en']
const defaultLocale = 'en'

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const m = pathname.match(/^\/(zh|en)(?:\/(.*))?$/)
  if (m) {
    const lang = m[1]
    const rest = `/${m[2] || ''}`.replace(/\/$/, '')

    const serviceOld = rest.match(/^\/(export-lead-generation|distributor-development|export-sales-outsourcing)$/)
    if (serviceOld) {
      const url = request.nextUrl.clone()
      url.pathname = `/${lang}/services/${serviceOld[1]}`
      return NextResponse.redirect(url, 301)
    }

    const marketOld = rest.match(/^\/market\/([^/]+)$/)
    if (marketOld) {
      const url = request.nextUrl.clone()
      url.pathname = `/${lang}/markets/${marketOld[1]}`
      return NextResponse.redirect(url, 301)
    }

    const industryOld = rest.match(/^\/industry\/([^/]+)$/)
    if (industryOld) {
      const url = request.nextUrl.clone()
      url.pathname = `/${lang}/industries/${industryOld[1]}`
      return NextResponse.redirect(url, 301)
    }

    if (rest === '/free-market-analysis') {
      const url = request.nextUrl.clone()
      url.pathname = `/${lang}/export-market-analysis`
      return NextResponse.redirect(url, 301)
    }

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-lang', lang)
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
