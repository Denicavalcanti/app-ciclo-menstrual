import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  
  // Rotas que não precisam de autenticação
  const publicRoutes = ['/auth', '/']
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname)
  
  // Para rotas públicas, permitir acesso
  if (isPublicRoute) {
    return res
  }
  
  // Para outras rotas, verificar se há token de sessão nos cookies
  const sessionToken = req.cookies.get('sb-access-token')?.value
  const anonUser = req.cookies.get('anon-user')?.value
  
  // Se não há sessão nem usuário anônimo, redirecionar para auth
  if (!sessionToken && !anonUser) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}