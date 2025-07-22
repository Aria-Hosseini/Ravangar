import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'اطلاعات ناقص' }, { status: 400 });
  }

  const exist = await prisma.users.findUnique({ where: { email } });
  if (exist) {
    return NextResponse.json({ error: 'ایمیل قبلاً ثبت شده' }, { status: 409 });
  }

  const newUser = await prisma.users.create({
    data: { name, email, password },
  });

  return NextResponse.json({ success: true, user: newUser });
}
