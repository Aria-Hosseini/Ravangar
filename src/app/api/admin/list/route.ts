import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const admins = await prisma.admin.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(admins);
}