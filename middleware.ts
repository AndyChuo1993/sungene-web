import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SUPPORTED_LANGS, defaultLocale } from '@/lib/i18n'

const locales = SUPPORTED_LANGS
const primaryHost = 'sungenelite.com'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const hostname = (host || '').toLowerCase()
  const pathnameWithoutLocale = pathname.replace(/^\/(zh|cn|en)(?=\/|$)/, '')

  // Canonicalize www → apex (sungenelite.com is the IoT brand domain)
  if (
    hostname &&
    !hostname.includes('localhost') &&
    hostname === `www.${primaryHost}`
  ) {
    const redirectUrl = new URL(request.url)
    redirectUrl.host = primaryHost
    redirectUrl.protocol = 'https:'
    return NextResponse.redirect(redirectUrl, 301)
  }

  // 舊站 410 Gone：已停用的 lead-gen / 包裝盒殘留頁面（注意：不含 /solutions、/products，那是新站正式路由）
  const gonePatterns = [
    '/product', '/cooperation', '/news', '/category', '/tag', '/author',
    '/machines', '/machinery',
    '/services', '/buyers-list', '/buyer-database-building', '/overseas-buyer-lists',
    '/distributor-list', '/distributor-network', '/cold-email-outreach',
    '/export-market-analysis', '/export-marketing', '/market-entry-strategy',
    '/free-market-analysis', '/qualified-b2b-leads', '/linkedin-prospecting',
    '/pricing', '/how-it-works', '/markets', '/faq', '/blog',
    '/case-studies',
  ]
  if (gonePatterns.some(pattern => pathnameWithoutLocale === pattern || pathnameWithoutLocale.startsWith(pattern + '/'))) {
    return new NextResponse(null, { status: 410 })
  }

  // 舊簡中(cn)路由 → 英文
  if (/^\/cn(?=\/|$)/.test(pathname)) {
    return NextResponse.redirect(new URL(pathname.replace(/^\/cn/, '/en'), request.url), 301)
  }

  const matchLang = pathname.match(new RegExp(`^\\/(${locales.join('|')})\\/`))
  const currentLang = matchLang ? matchLang[1] : defaultLocale

  if (pathnameWithoutLocale.startsWith('/about-us')) {
    return NextResponse.redirect(new URL(`/${currentLang}/about`, request.url), 301)
  }
  if (pathnameWithoutLocale.startsWith('/contact-us')) {
    return NextResponse.redirect(new URL(`/${currentLang}/contact`, request.url), 301)
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 301)
    }
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
      301
    )
  }

  const locale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const requestHeaders = new Headers(request.headers)
  if (locale) {
    requestHeaders.set('x-lang', locale)
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
