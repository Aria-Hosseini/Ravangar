import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'; // مسیر خروجی Prisma شما

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.users.findMany({
    orderBy: { created_at: 'desc' },
    select: {
      id: true,
      name: true,
      email: true,
      created_at: true,
    },
  });

  return NextResponse.json(users);
}
