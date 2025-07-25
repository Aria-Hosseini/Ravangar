// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('adminToken')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}

// فقط مسیرهای زیر رو بررسی کن
export const config = {
  matcher: ['/admin/dashboard'],
};
