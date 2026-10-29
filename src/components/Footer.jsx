'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-margin-lg">
        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter mb-space-xl py-space-lg rounded-2xl bg-surface-container-lowest px-space-lg shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-outline-variant/20">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <span className="font-title-md text-title-md text-on-surface block font-bold">ضمانت اصالت ۱۰۰٪</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">تضمین سلامت و رجیستری معتبر کالا</span>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <div>
              <span className="font-title-md text-title-md text-on-surface block font-bold">ارسال سریع و مطمئن</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">تحویل اکسپرس در بسته‌بندی لوکس</span>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
              <span className="material-symbols-outlined text-[24px]">headset_mic</span>
            </div>
            <div>
              <span className="font-title-md text-title-md text-on-surface block font-bold">پشتیبانی ۲۴ ساعته</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">مشاوره و پاسخگویی تمام ایام هفته</span>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center text-on-primary-fixed shrink-0">
              <span className="material-symbols-outlined text-[24px]">cached</span>
            </div>
            <div>
              <span className="font-title-md text-title-md text-on-surface block font-bold">ضمانت بازگشت وجه</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">امکان تعویض تا ۷ روز کاری</span>
            </div>
          </div>
        </div>

        {/* Links & Newsletter Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-lg mb-space-xl">
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-md text-headline-md text-primary font-bold">لوکس بلوم</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">| آتلیه تخصصی زیبایی</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
              لوکس بلوم مجموعه‌ای برگزیده از فاخرترین محصولات آرایشی، عطر‌های نیش و مراقبت تخصصی پوست را با تکیه بر اصالت، استانداردهای لوکس جهانی و تجربه خریدی آرامش‌بخش برای شما به ارمغان می‌آورد.
            </p>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">call</span>
                <span>تلفن تماس: ۰۲۱-۸۸۹۹۰۰۲۲</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                <span>نشانی: تهران، جردن، بلوار نلسون ماندلا، برج آریا، طبقه ۸</span>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="md:col-span-2 flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">دسترسی سریع</span>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/catalog">محصولات آرایشی</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/catalog?cat=skincare">مراقبت پوستی</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/catalog?cat=fragrance">عطرهای دست‌ساز</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/#special-offers">پیشنهادات ویژه</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="/#journal">مجله لوکس بلوم</Link>
          </div>

          {/* Customer Service */}
          <div className="md:col-span-2 flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">خدمات مشتریان</span>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#orders">پیگیری سفارش</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#return-policy">رویه بازگرداندن کالا</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#terms">قوانین و مقررات</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#faq">پرسش‌های متداول</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#contact">ارتباط با ما</a>
          </div>

          {/* Newsletter & Trust Symbols */}
          <div className="md:col-span-4 flex flex-col gap-space-md">
            <span className="font-title-md text-title-md text-on-surface font-semibold">خبرنامه آتلیه زیبایی</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              با عضویت در خبرنامه، از آخرین تخفیف‌های محرمانه و توصیه‌های زیبایی مطلع شوید.
            </p>

            {subscribed ? (
              <div className="bg-primary/10 text-primary p-3 rounded-full text-center font-label-md text-label-md">
                ✓ سپاسگزاریم! ایمیل شما با موفقیت ثبت گردید.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center bg-surface-container rounded-full p-1.5 focus-within:ring-2 focus-within:ring-primary/20 border border-outline-variant/30">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-space-md font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none text-right"
                  placeholder="ایمیل خود را وارد نمایید..."
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-md text-label-md px-space-lg py-2 rounded-full transition-all flex items-center gap-space-xs shrink-0 shadow-sm"
                >
                  <span>ثبت نام</span>
                </button>
              </form>
            )}

            <div className="mt-space-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant block mb-space-xs">
                مجوزها و نمادهای اعتماد الکترونیکی:
              </span>
              <div className="flex items-center gap-space-md">
                <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-outline shadow-sm border border-outline-variant/30 hover:border-primary/40 transition-colors" title="نماد اعتماد الکترونیکی">
                  <span className="material-symbols-outlined text-[32px] text-primary">shield</span>
                </div>
                <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-outline shadow-sm border border-outline-variant/30 hover:border-primary/40 transition-colors" title="نشان ملی ثبت رسانه‌های دیجیتال">
                  <span className="material-symbols-outlined text-[32px] text-secondary">workspace_premium</span>
                </div>
                <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-outline shadow-sm border border-outline-variant/30 hover:border-primary/40 transition-colors" title="سیب سلامت و اصالت بهداشت">
                  <span className="material-symbols-outlined text-[32px] text-primary">health_and_safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-space-lg mt-space-lg border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between font-body-sm text-body-sm text-on-surface-variant gap-space-md">
          <p>© ۲۰۲۶ لوکس بلوم (Luxe Bloom Cosmetics). تمامی حقوق برای این فروشگاه محفوظ است.</p>
          <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
            <a className="hover:text-primary transition-colors" href="#privacy">حریم خصوصی</a>
            <span>•</span>
            <a className="hover:text-primary transition-colors" href="#terms">شرایط استفاده</a>
            <span>•</span>
            <a className="hover:text-primary transition-colors" href="#sitemap">نقشه سایت</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
