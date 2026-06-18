import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SUPPORTED_LANGS, defaultLocale } from '@/lib/i18n'

const locales = SUPPORTED_LANGS
const primaryHost = 'sungeneiot.com'
const legacyHost = 'sungenelite.com'

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const hostname = (host || '').toLowerCase()
  const pathnameWithoutLocale = pathname.replace(/^\/(zh|cn|en)(?=\/|$)/, '')

  // Domain migration: sungenelite.com (and www) to sungeneiot.com, same path + query.
  if (hostname === legacyHost || hostname === `www.${legacyHost}`) {
    const redirectUrl = new URL(request.url)
    redirectUrl.protocol = 'https:'
    redirectUrl.hostname = primaryHost
    redirectUrl.port = ''
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Canonicalize www to apex (sungeneiot.com is the IoT brand domain)
  if (
    hostname &&
    !hostname.includes('localhost') &&
    hostname === `www.${primaryHost}`
  ) {
    const redirectUrl = new URL(request.url)
    redirectUrl.protocol = 'https:'
    redirectUrl.hostname = primaryHost
    redirectUrl.port = ''
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Legacy 410 Gone routes: retired lead-gen/package remnants.
  // Keep /solutions and /products live because those are current IoT routes.
  const gonePatterns = [
    '/product', '/cooperation', '/news', '/category', '/tag', '/author',
    '/machines', '/machinery',
    '/electronics', '/hardware', '/medical', '/packaging', '/industrial',
    '/chemical', '/automotive', '/plastic', '/industrial-equipment',
    '/services', '/buyers-list', '/buyer-database-building', '/overseas-buyer-lists',
    '/distributor-list', '/distributor-network', '/cold-email-outreach',
    '/export-market-analysis', '/export-marketing', '/market-entry-strategy',
    '/free-market-analysis', '/qualified-b2b-leads', '/linkedin-prospecting',
    '/pricing', '/how-it-works', '/market', '/markets', '/faq', '/blog',
    '/case-studies',
    // Former lead-gen landing pages (previously 301 to 410 chains via next.config).
    // now return 410 directly so Google drops them faster. Note: '/resources/blog'
    // and the old article slug below are scoped so the live '/resources' page stays 200.
    '/export-lead-generation', '/distributor-development', '/export-sales-outsourcing',
    '/b2b-lead-generation', '/sales-outsourcing', '/export-outsourcing',
    '/resources/blog', '/resources/cold-email-writing-tips',
    // Removed HVAC controller products (off-core; matches detail + /datasheet sub-paths)
    '/products/fan-coil-thermostat-rs485-lora',
    '/products/fan-coil-controller-0-10v',
    '/products/floor-heating-thermostat-wifi',
  ]
  if (gonePatterns.some(pattern => pathnameWithoutLocale === pattern || pathnameWithoutLocale.startsWith(pattern + '/'))) {
    const response = new NextResponse(null, { status: 410 })
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive')
    return response
  }

  // Legacy Simplified Chinese route to English.
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
