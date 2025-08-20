import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  const homeUrl = new URL('/', request.url)
  const signInUrl = new URL('/auth/sign-in', request.url)

  const token = request.cookies.get('token')

  if (!token && pathname === '/') {
    return Response.redirect(signInUrl)
  }

  if (token && pathname.includes('/auth')) {
    return Response.redirect(homeUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/'],
}
