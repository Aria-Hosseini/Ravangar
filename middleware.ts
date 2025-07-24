import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;
  const isProtected = req.nextUrl.pathname.startsWith('/dashboard');

  if (isProtected) {
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET!);
    } catch (err) {
      return NextResponse.redirect(new URL('/', req.url)); // توکن نامعتبر یا منقضی‌شده
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
