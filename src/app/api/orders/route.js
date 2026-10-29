import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error('Error in GET /api/orders:', error);
    return NextResponse.json(
      { success: false, error: 'خطا در دریافت لیست سفارشات' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      customerPhone,
      customerName,
      customerAddress,
      customerCity,
      customerPostalCode,
      items,
      paymentMethod = 'ONLINE',
      shipping = 0,
    } = body;

    if (!customerPhone) {
      return NextResponse.json(
        { success: false, error: 'شماره تماس خریدار الزامی است' },
        { status: 400 }
      );
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'سبد خرید خالی است' },
        { status: 400 }
      );
    }

    // Calculate subtotal
    const subtotal = items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
    const total = subtotal + (shipping || 0);

    // Generate unique order number
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const orderNumber = `LB-${randomSuffix}`;

    // Find or create user by phone
    let user = await prisma.user.findUnique({
      where: { phone: customerPhone },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          phone: customerPhone,
          name: customerName || null,
        },
      });
    }

    // Create Order and OrderItems in database transaction
    const newOrder = await prisma.order.create({
      data: {
        orderNumber,
        customerPhone,
        customerName: customerName || user.name || 'مشتری لوکس بلوم',
        customerAddress,
        customerCity,
        customerPostalCode,
        subtotal,
        shipping,
        total,
        status: 'PAID', // In demo/sandbox mode mark as paid
        paymentMethod,
        userId: user.id,
        items: {
          create: items.map((item) => ({
            productId: item.id && item.id.startsWith('prod-') ? item.id : null,
            title: item.title,
            price: parseFloat(item.price),
            quantity: parseInt(item.quantity || 1),
            shade: item.shade || null,
            image: item.image || null,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'سفارش شما با موفقیت ثبت شد',
      order: newOrder,
    }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/orders:', error);
    return NextResponse.json(
      { success: false, error: 'خطا در ثبت سفارش' },
      { status: 500 }
    );
  }
}
