import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.users.findUnique({ where: { email } });

  if (!user || user.password !== password) {
    return NextResponse.json({ error: 'ایمیل یا رمز اشتباه است' }, { status: 401 });
  }

  return NextResponse.json({ success: true, user });
}
