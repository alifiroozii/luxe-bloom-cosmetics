import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || searchParams.get('cat');
    const q = searchParams.get('q');
    const sort = searchParams.get('sort');
    const featured = searchParams.get('featured');
    const bestseller = searchParams.get('bestseller');

    const where = {};

    if (category && category !== 'all') {
      where.categorySlug = category;
    }

    if (q) {
      where.OR = [
        { title: { contains: q } },
        { brand: { contains: q } },
        { description: { contains: q } },
      ];
    }

    if (featured === 'true') {
      where.isSpecialOffer = true;
    }

    if (bestseller === 'true') {
      where.isBestSeller = true;
    }

    let orderBy = { createdAt: 'desc' };
    if (sort === 'price-asc') {
      orderBy = { price: 'asc' };
    } else if (sort === 'price-desc') {
      orderBy = { price: 'desc' };
    } else if (sort === 'rating') {
      orderBy = { rating: 'desc' };
    }

    const products = await prisma.product.findMany({
      where,
      orderBy,
      include: {
        category: true,
      },
    });

    return NextResponse.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error('Error in GET /api/products:', error);
    return NextResponse.json(
      { success: false, error: 'خطا در دریافت لیست محصولات' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, brand, categorySlug, price, originalPrice, discount, shade, volume, image, description } = body;

    if (!title || !price || !categorySlug) {
      return NextResponse.json(
        { success: false, error: 'عنوان، قیمت و دسته‌بندی الزامی هستند' },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        title,
        brand: brand || 'لوکس بلوم',
        categorySlug,
        price: parseFloat(price),
        originalPrice: originalPrice ? parseFloat(originalPrice) : null,
        discount: discount ? parseInt(discount) : null,
        shade,
        volume,
        image: image || 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
        description,
      },
    });

    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/products:', error);
    return NextResponse.json(
      { success: false, error: 'خطا در ثبت محصول جدید' },
      { status: 500 }
    );
  }
}
