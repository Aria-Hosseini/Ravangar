import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'اطلاعات ناقص' }, { status: 400 });
  }

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin || !admin.password) {
    return NextResponse.json({ error: 'ادمین یا رمز یافت نشد' }, { status: 401 });
  }

  const validPassword = await bcrypt.compare(password, admin.password);
  if (!validPassword) {
    return NextResponse.json({ error: 'رمز اشتباه است' }, { status: 401 });
  }

  const token = jwt.sign(
    { id: admin.id, email: admin.email, role: 'admin' },
    process.env.JWT_SECRET!,
    { expiresIn: '1d' }
  );

  const cookieStore = await cookies();
  cookieStore.set('adminToken', token, {
  httpOnly: true,
  secure: true,
  path: '/',
  maxAge: 60 * 60 * 24,
});


  return NextResponse.json({ success: true });
}
