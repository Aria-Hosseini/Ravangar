import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const userId = Number(params.id);

  try {
    await prisma.users.delete({
      where: { id: userId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('خطا در حذف کاربر:', error);
    return NextResponse.json({ error: 'کاربر یافت نشد یا قابل حذف نیست' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { name, email } = await req.json();
  const userId = Number(params.id);

  try {
    const updated = await prisma.users.update({
      where: { id: userId },
      data: { name, email },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('خطا در ویرایش کاربر:', error);
    return NextResponse.json({ error: 'ویرایش ناموفق بود' }, { status: 500 });
  }
}
