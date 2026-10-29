import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: { products: true },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error('Error in GET /api/categories:', error);
    return NextResponse.json(
      { success: false, error: 'خطا در دریافت دسته‌بندی‌ها' },
      { status: 500 }
    );
  }
}
