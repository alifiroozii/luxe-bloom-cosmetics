import os

checkout_page_code = '''\'use client\';

import React, { useState } from \'react\';
import Link from \'next/link\';
import { useCart } from \'../../context/CartContext\';

export default function CheckoutPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    shipping,
    total,
    formatPrice,
    addToCart,
  } = useCart();

  const [promoCode, setPromoCode] = useState(\'\');
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim()) {
      setPromoApplied(true);
    }
  };

  const handleProceedToPayment = () => {
    if (items.length === 0) return;
    setOrderPlaced(true);
  };

  const crossSellProducts = [
    {
      id: \'cross-1\',
      title: \'بالم لب ترمیم‌کننده شی باتر\',
      brand: \'L’OCCITANE\',
      price: 220000,
      shade: \'۱۰ میلی‌لیتر • عصاره طبیعی شی\',
      image: \'https://lh3.googleusercontent.com/aida-public/AB6AXuB93dRyXNfZ6pC-h13vOwJ_eJSk_s87034c56e35\',
    },
    {
      id: \'cross-2\',
      title: \'ماسک ورقی آبرسان قوی هیالورونیک\',
      brand: \'DR.JART+\',
      price: 150000,
      shade: \'تک عددی • فرمول آبرسانی عمیق\',
      image: \'https://lh3.googleusercontent.com/aida-public/AB6AXuDwzPQWhBALVKUtJrOO4sMCRfR9D7a3e7F\',
    },
    {
      id: \'cross-3\',
      title: \'کرم دست عصاره بهارنارنج و گل سرخ\',
      brand: \'CHANEL\',
      price: 290000,
      shade: \'۵۰ میلی‌لیتر • بافت سبک ابریشمی\',
      image: \'https://lh3.googleusercontent.com/aida-public/AB6AXuDqI1DJJPdlxrv49rk_v9it9rkXmF5333G2Wc8gWzD_o5r2gC7f607rU\',
    },
    {
      id: \'cross-4\',
      title: \'اسپری آب انگور التیام‌بخش پوست\',
      brand: \'CAUDALIE\',
      price: 380000,
      shade: \'۷۵ میلی‌لیتر • تسکین‌دهنده التهاب\',
      image: \'https://lh3.googleusercontent.com/aida-public/AB6AXuBGSX1ZeAKBbndAw0Pu6zuNnaTQGx114Yg70n61U\',
    },
  ];

  return (
    <main className="w-full pt-44 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        <div className="max-w-7xl mx-auto w-full px-margin-lg py-space-xl">
          {/* Header Box & Stepper */}
          <div className="mb-space-xl bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-outline-variant/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-gutter">
              <div className="flex items-center gap-space-sm">
                <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                </span>
                <div>
                  <h1 className="font-headline-md text-headline-md text-on-surface font-bold">سبد خرید اختصاصی</h1>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">بررسی و تکمیل سفارش‌های منتخب آتلیه لوکس بلوم</p>
                </div>
              </div>
              <div className="flex items-center gap-space-md w-full md:w-auto justify-end">
                <div className={`flex items-center gap-space-xs font-label-md text-label-md ${checkoutStep === 1 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${checkoutStep === 1 ? 'bg-primary text-on-primary' : 'bg-surface-container-high'}`}>۱</span>
                  <span>سبد خرید</span>
                </div>
                <div className="w-10 h-0.5 bg-outline-variant"></div>
                <div className={`flex items-center gap-space-xs font-label-md text-label-md ${checkoutStep === 2 ? 'text-primary font-bold' : 'text-tertiary opacity-60'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${checkoutStep === 2 ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>۲</span>
                  <span>اطلاعات ارسال</span>
                </div>
                <div className="w-10 h-0.5 bg-outline-variant"></div>
                <div className={`flex items-center gap-space-xs font-label-md text-label-md ${checkoutStep === 3 ? 'text-primary font-bold' : 'text-tertiary opacity-60'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${checkoutStep === 3 ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>۳</span>
                  <span>پرداخت امن</span>
                </div>
              </div>
            </div>
          </div>

          {orderPlaced ? (
            <div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm border border-primary/20 text-center flex flex-col items-center justify-center my-12">
              <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[48px]">check_circle</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">سفارش شما با موفقیت ثبت گردید!</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg">
                کد پیگیری سفارش: <span className="font-bold text-primary">LX-{Math.floor(100000 + Math.random() * 900000)}</span>. بسته‌بندی نفیس شما توسط آتلیه لوکس بلوم آماده‌سازی شده و از طریق پیک اختصاصی ارسال خواهد شد.
              </p>
              <div className="flex gap-space-md">
                <Link href="/" className="bg-primary hover:bg-primary-container text-on-primary font-label-md px-space-xl py-3 rounded-full transition-all">
                  بازگشت به صفحه اصلی
                </Link>
                <Link href="/catalog" className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md px-space-xl py-3 rounded-full transition-all">
                  مشاهده کاتالوگ محصولات
                </Link>
              </div>
            </div>
          ) : (
            /* Cart Grid: Items (Col 8) + Summary (Col 4) */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
              {/* Items List */}
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                {items.length === 0 ? (
                  <div className="bg-surface-container-lowest p-space-xl rounded-2xl text-center flex flex-col items-center justify-center py-16 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-[64px] text-outline mb-space-md">remove_shopping_cart</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">سبد خرید شما در حال حاضر خالی است</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">محصولات مورد نظر خود را از کاتالوگ یا صفحه اصلی انتخاب نمایید.</p>
                    <Link href="/catalog" className="bg-primary text-on-primary font-label-md px-space-xl py-3 rounded-full hover:bg-primary-container transition-all">
                      مشاهده کاتالوگ محصولات
                    </Link>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-center justify-between gap-space-lg bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-outline-variant/20 hover:border-outline-variant/60 transition-colors"
                    >
                      {/* Product Image & Details */}
                      <div className="flex items-center gap-space-lg w-full sm:w-auto">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-surface-container-low shrink-0 border border-outline-variant/30">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1 text-right">
                          <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">{item.brand}</span>
                          <h2 className="font-title-md text-title-md text-on-surface font-bold">{item.title}</h2>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">{item.shade}</span>
                          <div className="flex items-center gap-space-md mt-1 sm:hidden">
                            <span className="font-title-md text-title-md font-bold text-on-surface">{formatPrice(item.price * item.quantity)} تومان</span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Adjuster & Action */}
                      <div className="flex items-center justify-between sm:justify-end gap-space-xl w-full sm:w-auto pt-space-sm sm:pt-0 border-t sm:border-t-0 border-outline-variant/20">
                        {/* Stepper */}
                        <div className="flex items-center bg-surface-container-low rounded-full px-space-xs py-1 border border-outline-variant/30">
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                            title="افزایش تعداد"
                          >
                            <span className="material-symbols-outlined text-[18px]">add</span>
                          </button>
                          <span className="font-label-md text-label-md font-bold text-on-surface px-space-md min-w-[24px] text-center">
                            {item.quantity.toLocaleString(\'fa-IR\')}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                            title="کاهش تعداد"
                          >
                            <span className="material-symbols-outlined text-[18px]">remove</span>
                          </button>
                        </div>

                        {/* Price Desktop */}
                        <div className="hidden sm:flex flex-col text-left min-w-[120px]">
                          <span className="font-title-md text-title-md font-bold text-on-surface">{formatPrice(item.price * item.quantity)} تومان</span>
                          {item.quantity > 1 && (
                            <span className="font-body-sm text-body-sm text-on-surface-variant">واحد: {formatPrice(item.price)}</span>
                          )}
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:text-error hover:bg-error-container/20 transition-colors"
                          title="حذف از سبد"
                        >
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}

                {/* Return to Shop Link */}
                <div className="flex items-center justify-between pt-space-sm">
                  <Link href="/catalog" className="flex items-center gap-space-xs text-primary font-label-md hover:underline">
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    <span>بازگشت به کاتالوگ و ادامه خرید</span>
                  </Link>
                  {items.length > 0 && (
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      تعداد کل کالاها: {items.reduce((s, i) => s + i.quantity, 0).toLocaleString(\'fa-IR\')} قلم
                    </span>
                  )}
                </div>
              </div>

              {/* Order Summary (Col 4) */}
              <div className="lg:col-span-4 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-md">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold pb-space-sm border-b border-outline-variant/20">
                    خلاصه پیش‌فاکتور
                  </h2>

                  {/* Summary Rows */}
                  <div className="flex flex-col gap-space-sm font-body-md text-body-md">
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span>مجموع قیمت کالاها:</span>
                      <span className="font-semibold text-on-surface">{formatPrice(subtotal)} تومان</span>
                    </div>

                    <div className="flex items-center justify-between text-primary">
                      <span>تخفیف ویژه باشگاه مشتریان:</span>
                      <span className="font-bold">-{formatPrice(discount)} تومان</span>
                    </div>

                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span>هزینه بسته‌بندی و ارسال:</span>
                      <span className="font-semibold text-on-surface">
                        {shipping === 0 ? (
                          <span className="text-primary font-bold">رایگان (لوکس بلوم)</span>
                        ) : (
                          `${formatPrice(shipping)} تومان`
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Promo Code Form */}
                  <div className="pt-space-sm border-t border-outline-variant/20">
                    <form onSubmit={handleApplyPromo} className="flex items-center bg-surface-container-low rounded-full p-1 border border-outline-variant/30 focus-within:border-primary/50 transition-colors">
                      <input
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="کد تخفیف (مثلاً LUXE20)"
                        className="w-full bg-transparent px-space-md font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none text-right"
                      />
                      <button
                        type="submit"
                        className="bg-primary hover:bg-primary-container text-on-primary font-label-sm px-space-md py-1.5 rounded-full transition-all shrink-0"
                      >
                        اعمال کد
                      </button>
                    </form>
                    {promoApplied && (
                      <span className="text-primary text-xs mt-1 block pr-2">✓ کد تخفیف با موفقیت ثبت شد.</span>
                    )}
                  </div>

                  {/* Final Total */}
                  <div className="pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                    <div>
                      <span className="font-title-md text-title-md font-bold text-on-surface block">مبلغ قابل پرداخت:</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">شامل مالیات و عوارض ارزش‌افزوده</span>
                    </div>
                    <span className="font-headline-md text-headline-md font-bold text-primary">
                      {formatPrice(total)} تومان
                    </span>
                  </div>

                  {/* Checkout CTA */}
                  <button
                    onClick={handleProceedToPayment}
                    disabled={items.length === 0}
                    className="w-full bg-primary hover:bg-primary-container disabled:opacity-50 text-on-primary font-label-lg py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-space-xs mt-space-sm"
                  >
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                    <span>تکمیل اطلاعات و ادامه پرداخت</span>
                  </button>

                  {/* Trust Micro-Badges */}
                  <div className="grid grid-cols-3 gap-space-xs pt-space-sm text-center font-label-sm text-[11px] text-on-surface-variant">
                    <div className="flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-primary">verified_user</span>
                      <span>درگاه امن بانکی</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-primary">security</span>
                      <span>رمزنگاری SSL</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-primary">published_with_changes</span>
                      <span>۷ روز ضمانت</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cross-Sell Recommendations Section */}
          <section className="mt-space-xl pt-space-lg border-t border-outline-variant/20">
            <div className="flex items-center justify-between mb-space-lg">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  محصولات پیشنهادی لحظه خرید (تکمیل سبد)
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  محصولات مکمل مراقبتی با سایز مسافرتی و قیمت استثنایی
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {crossSellProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/20 hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-space-sm">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low">
                      <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-primary font-bold uppercase">{prod.brand}</span>
                      <h3 className="font-title-md text-title-md text-on-surface font-bold mt-1 line-clamp-1">{prod.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{prod.shade}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-md mt-space-sm border-t border-outline-variant/10">
                    <span className="font-title-md text-title-md font-bold text-on-surface">{formatPrice(prod.price)} تومان</span>
                    <button
                      onClick={() => addToCart(prod)}
                      className="bg-primary hover:bg-primary-container text-on-primary font-label-sm px-space-md py-1.5 rounded-full transition-all flex items-center gap-1 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                      <span>افزودن</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
'''

os.makedirs('/Users/alifiroozi/ali/motion/motion3/src/app/checkout', exist_ok=True)
with open('/Users/alifiroozi/ali/motion/motion3/src/app/checkout/page.jsx', 'w', encoding='utf-8') as f:
    f.write(checkout_page_code)

print("src/app/checkout/page.jsx written successfully!")
