import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone, email, password, otp } = body;

    if (!phone && !email) {
      return NextResponse.json(
        { success: false, error: 'شماره موبایل یا ایمیل الزامی است' },
        { status: 400 }
      );
    }

    let user;

    if (phone) {
      // In demo environment, any 4-6 digit OTP or standard phone enters
      user = await prisma.user.upsert({
        where: { phone },
        update: {},
        create: {
          phone,
          name: 'کاربر لوکس بلوم',
        },
      });

      return NextResponse.json({
        success: true,
        message: 'ورود با موفقیت انجام شد',
        user: {
          id: user.id,
          phone: user.phone,
          name: user.name,
        },
      });
    }

    if (email) {
      user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
            password: password || 'default_hashed_password',
            name: 'کاربر VIP لوکس بلوم',
          },
        });
      }

      return NextResponse.json({
        success: true,
        message: 'ورود با ایمیل با موفقیت انجام شد',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });
    }
  } catch (error) {
    console.error('Error in POST /api/auth/login:', error);
    return NextResponse.json(
      { success: false, error: 'خطا در فرآیند احراز هویت' },
      { status: 500 }
    );
  }
}
