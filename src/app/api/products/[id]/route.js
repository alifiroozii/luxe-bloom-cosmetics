import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'محصول مورد نظر یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(`Error in GET /api/products/[id]:`, error);
    return NextResponse.json(
      { success: false, error: 'خطا در دریافت اطلاعات محصول' },
      { status: 500 }
    );
  }
}
