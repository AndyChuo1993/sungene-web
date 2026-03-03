import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const langParam = url.searchParams.get('lang')

  // If ?lang=en or ?lang=zh-Hant is present
  if (langParam === 'en' || langParam === 'zh-Hant') {
    // Remove lang param for the clean URL
    url.searchParams.delete('lang')
    
    // Create redirect response
    const response = NextResponse.redirect(url)
    
    // Set the cookie on the redirect response
    // This ensures the next request (to the clean URL) carries the cookie
    response.cookies.set('lang', langParam, { 
        path: '/', 
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax'
    })
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
