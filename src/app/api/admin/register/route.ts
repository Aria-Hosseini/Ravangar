import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { firstName, lastName, email, password } = await req.json();

  if (!email || !password || !firstName || !lastName) {
    return NextResponse.json({ error: 'اطلاعات ناقص' }, { status: 400 });
  }

  const exist = await prisma.admin.findUnique({ where: { email } });
  if (exist) {
    return NextResponse.json({ error: 'ایمیل قبلاً ثبت شده' }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newAdmin = await prisma.admin.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    success: true,
    admin: {
      id: newAdmin.id,
      email: newAdmin.email,
      name: `${newAdmin.firstName} ${newAdmin.lastName}`,
    },
  });
}
