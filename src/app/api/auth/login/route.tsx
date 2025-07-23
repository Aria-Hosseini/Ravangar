import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers'; 

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'اطلاعات ناقص' }, { status: 400 });
  }

  const user = await prisma.users.findUnique({ where: { email } });
  if (!user || !user.password) {
    return NextResponse.json({ error: 'کاربر یا رمز یافت نشد' }, { status: 401 });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return NextResponse.json({ error: 'رمز اشتباه است' }, { status: 401 });
  }

const cookieStore = await cookies();
  cookieStore.set('authToken', 'test-session-token', {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 24, 
  });

  return NextResponse.json({
    success: true,
    user: { id: user.id, name: user.name },
  });
}
