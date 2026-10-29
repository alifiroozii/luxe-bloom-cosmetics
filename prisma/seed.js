const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('--- شروع سید کردن پایگاه داده لوکس بلوم ---');

  // Categories
  const categories = [
    { name: 'کرم پودر و بیس صورت', slug: 'face-foundation', icon: 'face' },
    { name: 'رژ لب و تینت مخملی', slug: 'lips-tint', icon: 'brush' },
    { name: 'ریمل و خط چشم آرتیستیک', slug: 'mascara-eyeliner', icon: 'visibility' },
    { name: 'سرم هیالورونیک و پپتاید', slug: 'serum-skincare', icon: 'water_drop' },
    { name: 'پودر بیک و فیکس', slug: 'loose-powder', icon: 'grain' },
    { name: 'کرم آبرسان و مرطوب‌کننده', slug: 'face-cream', icon: 'spa' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, icon: cat.icon },
      create: cat,
    });
  }
  console.log('✔ دسته‌بندی‌ها با موفقیت ایجاد شدند.');

  // Products
  const products = [
    {
      id: 'prod-dior-glow',
      title: 'کرم‌پودر فوراور اسکین گلو ۲۴ ساعته',
      brand: 'دیور • Dior',
      categorySlug: 'face-foundation',
      price: 3980000,
      originalPrice: 4450000,
      discount: 11,
      shade: '2N - بژ طبیعی',
      shades: JSON.stringify([
        { code: '1N', name: 'بژ عاجی خیلی روشن', color: '#E8C5A8' },
        { code: '2N', name: 'بژ طبیعی خنثی', color: '#DEC0A0' },
        { code: '3W', name: 'بژ گندمی گرم', color: '#CE9F7A' },
        { code: '0CR', name: 'روشن رزی مات', color: '#F3DCD5' },
      ]),
      volume: '۳۰ میل',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMnYPP0978KRakCzNJDfqXOVBWGxDm8VZZVxalg51BKYowAqK8fcl58G9w_uXVb0FPpPOq4xsPny7dux8qi57OqslIGmQXVd6x2MtA4zPJ-Q3CZ2T0scEF71hHxdSxWBdMYjRRvqSd7_i3pswy4_Ad62SeLoJjeLgJ2mO3qR-Qz0iJqHqyBRsmWApk485oMow16-uWesZw47oqy4E080-ae1N3DpUdgeRoCriNwlE',
      rating: 4.9,
      reviewsCount: 128,
      isSpecialOffer: true,
      isBestSeller: true,
      stock: 15,
      description: 'کرم‌پودر ۲۴ ساعته درخشان دیور با پوشش متوسط تا کامل و آبرسانی عمیق با بافت سبک و لطیف، پیگمنت‌های غنی و اکسیرهای جوان‌ساز با ماندگاری بالا.',
    },
    {
      id: 'prod-huda-matte',
      title: 'رژ لب جامد پاور بولت الترا مات',
      brand: 'هدی بیوتی • Huda Beauty',
      categorySlug: 'lips-tint',
      price: 1850000,
      originalPrice: null,
      discount: null,
      shade: 'Interview',
      shades: JSON.stringify([
        { code: 'Interview', name: 'هلویی گرم', color: '#8A3343' },
        { code: 'Rendez-Vous', name: 'رزی تیره', color: '#A34E57' },
        { code: 'Ladies Night', name: 'قرمز شرابی', color: '#C26B6E' },
      ]),
      volume: '۳ گرم',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzockz8Q43-_J5QzzliAAK_Jzpwc5IZhe_ubGKLqPG0e8iEIIt2Q6WSJJC520QFyf76T83BimWje8Ds81LhUWtsCElFrNTxcJWpa3qGKVmhhDjwhQG0kileZ8FGWXzaT6XCMLeZwv7aqk3Y1S0rSMQL16ZehikC4Gb0VWGJFTzdT3NMZDwG2jcdkrc4V01D79KOCW6Hvgohv8eNQX9ZsvdUi4OcGkEY5Q3xxuF27g',
      rating: 4.8,
      reviewsCount: 210,
      isSpecialOffer: false,
      isBestSeller: false,
      stock: 25,
      description: 'رژ لب پیگمنت خالص هدی بیوتی با جلوه کاملا مات و بافت مخملی بدون ایجاد خشکی روی لب.',
    },
    {
      id: 'prod-ordinary-ha',
      title: 'سرم هیالورونیک اسید ۲٪ به همراه B5',
      brand: 'د اوردینری • The Ordinary',
      categorySlug: 'serum-skincare',
      price: 720000,
      originalPrice: null,
      discount: null,
      shade: null,
      shades: null,
      volume: '۳۰ میل',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPL2Kb7g7W2dqWRoNdJUdoRQD3zqcr4X_TnJNCLYpx5L-7S5ooI6V7be2hnk7L52gpYsC77aZPSNeQ2Hh5ooZx64tfnT34P5F1IrVNYBJ9W4h5_H3uvqyzuejVu0WBcEsErnZxl9H1Qztl2heFk9UtZNE00p6uFEy_QYvFa4ABsNKNpWUtsR3c_XkJ0iugBiH4ULfZHqmOzq89Bobz7_5O1r_u6bufN3Z7pUztzio',
      rating: 4.7,
      reviewsCount: 540,
      isSpecialOffer: false,
      isBestSeller: true,
      stock: 40,
      description: 'آبرسان چند لایه با ۳ وزن مولکولی هیالورونیک اسید و ویتامین B5 جهت رفع دهیدراتگی پوست.',
    },
    {
      id: 'prod-fenty-gloss',
      title: 'برق لب شاین گلاس بامب یونیورسال',
      brand: 'فنتی بیوتی • Fenty Beauty',
      categorySlug: 'lips-tint',
      price: 1920000,
      originalPrice: null,
      discount: null,
      shade: 'Fenty Glow',
      shades: JSON.stringify([
        { code: 'Fenty Glow', name: 'نود درخشان', color: '#DF9D8D' },
        { code: 'Fu$$y', name: 'صورتی شاین', color: '#C96B75' },
        { code: 'Sweet Mouth', name: 'هلویی ملایم', color: '#E5B5A5' },
      ]),
      volume: '۹ میل',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC00vjcrPgYJ71kEFPlJFyDeM0OZbQKW4yyoapzY9GHwaiAkanRexr7S3XoDIZ8QhoPLfn3GDiN5BytQdyyP26YssrkgI8wDcWv5wmzPHw68PzssStKCYXDeNKsR4v2Xm4nNCl4EL1tJVHvwnQDwIJeeHkQ2ZQbg_LplnVt7qcRlEQlFtzp-M67MaJ0V9sBWvnqvFCH5bV2SRgJeH4_55nNeGKidQO4jPOiRg6WAM',
      rating: 4.9,
      reviewsCount: 320,
      isSpecialOffer: false,
      isBestSeller: false,
      stock: 18,
      description: 'برق لب حجم‌دهنده و شفاف فنتی بیوتی غنی‌شده با کره روغن شی برای نهایت درخشش و نرمی.',
    },
    {
      id: 'prod-estee-anr',
      title: 'سرم تخصصی بازسازی شب ادونسد نایت ریپیر',
      brand: 'استی لادر • Estée Lauder',
      categorySlug: 'serum-skincare',
      price: 4950000,
      originalPrice: 5800000,
      discount: 15,
      shade: null,
      shades: null,
      volume: '۵۰ میل',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLsFwc26WsXjwahC2WXJMnO-YKMwB1zUIn4gqDtJUAU11siBGMew5Vk_TRaHYeAbMcZM439ttHa8bubs78Iz6EXP9QQ2Zplj766HQ7lPhV5gaAoo_swk-xZGK_9Enrsp3JNuZXl0zNcQKIJWns4C4uQ_RMLK9m3XSBKyoajqXn4cgAsZc0nNbA-wFaWMMVrey4m4-PzMs5Sm2V_2XP7BAIs59Hmgz4zMyz1LH61v8',
      rating: 5.0,
      reviewsCount: 415,
      isSpecialOffer: true,
      isBestSeller: true,
      stock: 12,
      description: 'اکسیر ضدپیری و ترمیم‌کننده سلولی شبانه با تکنولوژی انحصاری Chronolux.',
    },
    {
      id: 'prod-dior-mascara',
      title: 'ریمل حجم‌دهنده و فرکننده دیورشو آیکونیک',
      brand: 'دیور • Dior',
      categorySlug: 'mascara-eyeliner',
      price: 2300000,
      originalPrice: null,
      discount: null,
      shade: '090 Black',
      shades: null,
      volume: '۱۰ میل',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI9w8RIfW0YZU-3-KHyxtdvAoEUuZP1y9b2Tb9y4K8T-NjOiiA3TnEFBwBasNe4hla40V_NWzeYAdJsiiW1-weivnqA39yrdDwbCt8ZYG9eJCQ8OIDiL5WtugmCVN-H2aetquHb_DEi8GoCH6kq2MC-ldVQk-JSxBVg_3vd1riOrPxnV4ekOuhA4kmaFAYM_LT6VIzIO-Jj34EExvm5GrzukoiBecKXvs4tZMuugk',
      rating: 4.8,
      reviewsCount: 88,
      isSpecialOffer: false,
      isBestSeller: false,
      stock: 22,
      description: 'برس منحنی نمادین برای حالت‌دهی و فر کردن مژه‌ها تا ۲۴ ساعت بدون ریزش و سیاهی.',
    },
    {
      id: 'prod-huda-powder',
      title: 'پودر بیک و فیکس ایزی بیک فیلتردار',
      brand: 'هدی بیوتی • Huda Beauty',
      categorySlug: 'loose-powder',
      price: 2600000,
      originalPrice: null,
      discount: null,
      shade: 'Pound Cake',
      shades: JSON.stringify([
        { code: 'Pound Cake', name: 'بژ پوند کیک', color: '#F5E6D3' },
        { code: 'Banana Bread', name: 'موزی بنانا برد', color: '#EAD4BA' },
        { code: 'Cherry Blossom', name: 'صورتی شکوفه', color: '#F3DCD5' },
      ]),
      volume: '۲۰ گرم',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxqVPHuJk8tu7EdefUo_5J5GGoqVepiD7cRB49R-MGEJHe9Mg540QNHXNbQ65F1txthRMzwNWoEJOphA7sff2iwaMe6_rsbPxg3kXUv_2X2xjIndRqRcKz81Oo_Bz28QRwNKyds93gOco1v-bstchvNgnoJ_64JFGb6O87Nz-YKCuo9y5J8AEXPhcIMIPv2YdwZhetvYmdaZagEDSWipzxDfluJlXlgPVXcEeTAis',
      rating: 4.9,
      reviewsCount: 275,
      isSpecialOffer: false,
      isBestSeller: false,
      stock: 16,
      description: 'پودر بیک فوق‌العاده نرم با افکت بلورینگ فیلتر اینستاگرام برای ماندگاری مادام‌العمر آرایش.',
    },
    {
      id: 'prod-estee-cream',
      title: 'کرم آبرسان سوپریم پلاس سلولار یوث',
      brand: 'استی لادر • Estée Lauder',
      categorySlug: 'face-cream',
      price: 4100000,
      originalPrice: null,
      discount: null,
      shade: null,
      shades: null,
      volume: '۵۰ میل',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZtMu4DwAo7IjUU1ldlLPOIXlO-kGwAL-PFeryjGvkMZjlv9h7COim0YS-VrmyUpViqaXZn2ac_uxjQkAziKeYO5RaLIqs_D2sPue9AUgL4OBE2n6xxMNs5RndjRsrqdfZFsHNbUcVbld0OIm0acrW_sxoZWBifij3vnjUq8RHWnfGcSttruDAYRYaHT9FI-EiCIXCjg_G8MJF_1NM3nz1TejksbtmsrsQnMZZ0JM',
      rating: 4.8,
      reviewsCount: 140,
      isSpecialOffer: false,
      isBestSeller: false,
      stock: 10,
      description: 'کرم مرطوب‌کننده و لیفتینگ تخصصی غنی‌شده با عصاره گیاه مورینگا جهت تحریک کلاژن‌سازی پوست.',
    },
  ];

  for (const prod of products) {
    await prisma.product.upsert({
      where: { id: prod.id },
      update: prod,
      create: prod,
    });
  }
  console.log('✔ محصولات با موفقیت در دیتابیس ثبت شدند.');

  // Create demo user
  const demoUser = await prisma.user.upsert({
    where: { phone: '09123456789' },
    update: {},
    create: {
      phone: '09123456789',
      email: 'client@luxebloom.ir',
      name: 'مشتری وی‌آی‌پی لوکس بلوم',
    },
  });
  console.log(`✔ کاربر پیش‌فرض با شناسه ${demoUser.id} ثبت شد.`);

  console.log('--- سیدینگ با موفقیت کامل شد ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
