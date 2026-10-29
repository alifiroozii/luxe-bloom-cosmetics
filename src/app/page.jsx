'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('skincare');
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 18 });
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toFarsi = (n) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(n).padStart(2, '0').split('').map(d => farsiDigits[parseInt(d)] || d).join('');
  };

  return (
    <main className="w-full pt-44 bg-surface min-h-screen">
      <div className="flex flex-col w-full">

<section className="relative w-full -mt-6 pb-space-xl overflow-hidden">

<div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 left-10 w-80 h-80 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-margin-lg">
<div className="relative rounded-3xl overflow-hidden bg-surface-container-low shadow-xl">

<div className="relative min-h-[580px] w-full flex items-center" id="heroCarousel">

<div className="hero-slide active absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-between p-space-xl transition-opacity duration-700 opacity-100 z-10">
<div className="lg:w-1/2 flex flex-col justify-center gap-space-md z-20 pr-space-md">
<div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md w-fit">
<span className="material-symbols-outlined text-[16px]">arrow_back_ios_new</span>
<span>کالکشن اشرافی پاییز و زمستان ۲۰۲۵</span>
</div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
                تجربه زیبایی اصیل <br/>
<span className="text-primary font-serif">با لوکس بلوم</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                آمیزه‌ای از عصاره‌های نادر گیاهی و علم درماتولوژی نوین. ما اصالت و شکوه را در بطری‌های دست‌ساز و شیدهای اختصاصی برای شما گرد هم آورده‌ایم.
              </p>
<div className="flex items-center gap-space-md mt-space-sm">
<button className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-space-xs">
<span>مشاهده کالکشن جدید</span>
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</button>
<button className="bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-lg text-label-lg px-7 py-3.5 rounded-full transition-all">
                  تخفیف‌های فصلی
                </button>
</div>

<div className="flex items-center gap-space-lg pt-space-lg">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary font-bold">۱۰۰٪</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">تضمین اصالت پاریسی</span>
</div>
<div className="w-px h-8 bg-outline-variant"></div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary font-bold">+۴۵,۰۰۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">مشتری وفادار در خاورمیانه</span>
</div>
<div className="w-px h-8 bg-outline-variant"></div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary font-bold">۴.۹ / ۵</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">رضایت کارشناسان آرایشی</span>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full h-full relative flex items-center justify-center p-space-md">
<div className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="High-fashion portrait of an elegant Persian model with radiant dewy skin, wearing bespoke nude-rose velvet lipstick and glowing golden highlight, soft studio natural daylight, warm dusty rose and cream background, ultra luxury aesthetic, 8k commercial photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGSX1ZeAKBbndAw0Pu6zuNnaTQGxgYaGc3gv7Uq6S_KGWd-Pyp7oxtHdLgF3wvdkje1ThA4DdI50P8tP4vi7iHB9cPeFNjTxNS74l0FMcmN36TLzTF0BeuM8-eq01f7dGrApjlhUiZJfRckSPTeojP7wkO1e5MoBZEqlcs2bqCho1cA8iWvbdco9uPblDz4WW9yjxYIeTHTG55QJ9YzRrhPeaAKsZhi2VpAXZVFyo"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 right-6 left-6 p-space-md rounded-xl bg-surface/85 backdrop-blur-md flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-primary block">پیشنهاد برگزیده روز</span>
<span className="font-title-md text-title-md text-on-surface font-bold">اکسیر جوان‌ساز رُز سلطنتی</span>
</div>
<span className="font-label-lg text-label-lg font-bold text-on-surface bg-surface-container-high px-space-sm py-1 rounded-full">۳٬۸۵۰٬۰۰۰ ت</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-12 z-30 flex items-center gap-space-xs">
<button className="w-8 h-2 rounded-full bg-primary transition-all"></button>
<button className="w-2.5 h-2 rounded-full bg-outline-variant hover:bg-primary transition-all"></button>
<button className="w-2.5 h-2 rounded-full bg-outline-variant hover:bg-primary transition-all"></button>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-margin-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
<div>
<span className="font-label-md text-label-md text-primary tracking-widest block mb-space-xs">دسته‌بندی‌های ممتاز</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">انتخاب بر اساس نیاز پوست و زیبایی</h2>
</div>
<a className="font-label-lg text-label-lg text-primary hover:text-primary-container inline-flex items-center gap-space-xs transition-colors mt-space-sm md:mt-0" href="#">
<span>مشاهده تمامی دسته‌بندی‌ها</span>
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter">

<a className="group flex flex-col items-center text-center p-space-md rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<div className="w-28 h-28 rounded-full overflow-hidden mb-space-md p-1 bg-surface-container-high group-hover:scale-105 transition-transform duration-300">
<img className="w-full h-full object-cover rounded-full" data-alt="Close up aesthetic jar of nourishing organic facial moisturiser surrounded by gentle botanical droplets and rose water, soft warm studio lighting, luxury clean cosmetic packaging" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqI1DJJPdlxrv49rk_v9it9rkXmFzw4sVLL0znmmCnolik2r5QktyHqmSL259KFVP5ZxvrdZemurV2NfynnoutBrOeN0nU2SLiLY6MOIxUp9EtjcBcO8cg8ueZ0Fqik-IF5QqHnwlLF5cY2Mm3D9tRwFIjJrhQjwBtldTYmEdCLeq1eaPlpaiOql5oHDRkK0lQY49k2roJnwTgRSMwKy7MgAlAlxdehH3b_IQaymE"/>
</div>
<span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors font-semibold">مراقبت از پوست</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">+۱۲۸ محصول تخصصی</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<div className="w-28 h-28 rounded-full overflow-hidden mb-space-md p-1 bg-surface-container-high group-hover:scale-105 transition-transform duration-300">
<img className="w-full h-full object-cover rounded-full" data-alt="Frosted glass bottle of high-end liquid foundation with pipette, smooth satin beige foundation smear beside it, warm alabaster marble background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwzPQWhBALVKUtJrOO4sMCRfR9D7qZmXCFsPH9eioLgpTrUzdGQSRCWsQyNsBfi5vEP0fOnWBipwFCfr9d8sUuSmUIJh2iiK16vkPGYTjyVNTnQhos1Wv4bzw2BHDLbPA_br2K9ykIx4t6hUTV015ktdhU6wbisnh0ZVjjrKKg3On3jKjcXpfDWq5x0XlNPnpQWPXi-21-uDfel8EorZCPunN2wtFQjZ_rUZBZnrY"/>
</div>
<span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors font-semibold">کرم پودر و آرایش</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">+۸۴ شید رنگی</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<div className="w-28 h-28 rounded-full overflow-hidden mb-space-md p-1 bg-surface-container-high group-hover:scale-105 transition-transform duration-300">
<img className="w-full h-full object-cover rounded-full" data-alt="Luxury matte velvet lipsticks uncapped showing deep dusty rose and terracotta tones, textured ribbed metallic case, high fashion beauty still life" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB93dRyXNfZ6pC-h13vOwJ_eJSk_snV7wntghHJ9yBM9whVAbdTLzNHZV8CZ3F8eLmMjpIu0HXkxm2NaxvwowiD_XDm_toOJckXxfM3xJiPQ9PHW3ya4cYxX90jh0lS3RACOZgAu71bhaKDtbwPysleXJeE-xD9QorTu3A4B1lf4zfAPGYwg1VqG2JyQOVaMa-r2wlptPy50n1nooAwJWEzk6nj_p3Yl2oe3p4XfU4"/>
</div>
<span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors font-semibold">رژ لب و آرایش لب</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">+۶۵ طیف بافت مخملین</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<div className="w-28 h-28 rounded-full overflow-hidden mb-space-md p-1 bg-surface-container-high group-hover:scale-105 transition-transform duration-300">
<img className="w-full h-full object-cover rounded-full" data-alt="Chic faceted amber crystal perfume bottle with gold atomizer cap, delicate amber liquid reflecting warm afternoon sun, high-end niche perfumery presentation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj-sASOMQQYmY1FyTQyLQ0y5xZrKo1v2DYCuTiGEp7OfQKdaP9alGoI3zy1e0f2zlnp9qcmzCMTAcDgBJ21JeLCXwLEju8vZWynL-gEDbhb5IGTGo5lx915E2JGFiljdnQJaebrBOKl4PlX1RH3oqdnOmgm1h6-CITjsvUfe05J8rf14k4FXSEfjMLlibMqrqLyTgX4bi_EVMr8gIyNRLg9yPqLluZpNEZDlYpYkY"/>
</div>
<span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors font-semibold">عطرهای لوکس</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">+۱۱۰ رایحه نیش و اصل</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<div className="w-28 h-28 rounded-full overflow-hidden mb-space-md p-1 bg-surface-container-high group-hover:scale-105 transition-transform duration-300">
<img className="w-full h-full object-cover rounded-full" data-alt="Dark emerald luxury serum dropper bottle with golden collar, pure hyaluronic acid droplet falling, clinical luxury dermatology concept" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDXYpvSkadkzDRHni8WJcRTGtfYWfGKGoqXYeiwRt0Usz9Mytz2LOH1DsOmvoZ4mfjPBXgtEXmOSowji8YLO5T9FqGMRcbC6tsxtmKDd8u3GAl-ijy7X3RfrogTBTWeR4i7nmCpgcl_IU0UlQ7CzXZc68EJ7rh6ty0BMH8Gq0DtM1nNIc5lKnXIWX1fxO_EA9bvyBkifaoQABlLQOtkIJ0CHlKKF-vCpEYki6gwA8"/>
</div>
<span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors font-semibold">سرم ضد پیری</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">+۴۲ فرمول جوانساز</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<div className="w-28 h-28 rounded-full overflow-hidden mb-space-md p-1 bg-surface-container-high group-hover:scale-105 transition-transform duration-300">
<img className="w-full h-full object-cover rounded-full" data-alt="Nourishing botanical hair oil bottle alongside silk hair wrap and argan tree flowers, warm cashmere atmosphere, spa wellness luxury" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpCFP7FKclnovk6_-UTRxgy1JkD1lgHzNCqtpc-uNIH42wxiaa90AgCjqiJ4NpEcLgPAj0VZNgzc_c8rcm43jzu24XSAg-nj3bhP--JoeDz00nwu4BcEHQ7t2lBUHg0638jDP_P485ePuiFy9Zh-02-HbF1kPhIGq4XxxHGW7Lmac8U8wuGM79ldyl0yWbqkf32Li56zL7gwPsKICCU2Hi3tQEA28nQFU_GbdzWto"/>
</div>
<span className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors font-semibold">ماسک و مراقبت مو</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">+۳۹ ترمیم‌کننده عمیق</span>
</a>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-margin-lg">

<div className="flex flex-col lg:flex-row lg:items-center justify-between mb-space-xl bg-primary text-on-primary rounded-3xl p-space-xl shadow-lg relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/10 blur-xl"></div>
<div className="relative z-10 flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[28px] text-secondary-fixed">bolt</span>
<span className="font-label-md text-label-md bg-white/20 px-space-md py-1 rounded-full text-white">فرصت محدود آتلیه</span>
</div>
<h2 className="font-headline-lg text-headline-lg font-bold">پیشنهادات شگفت‌انگیز اشرافی</h2>
<p className="font-body-md text-body-md text-primary-fixed leading-relaxed">تخفیف‌های استثنایی تا سقف ۴۵٪ روی کلکسیون معتبرترین خانه‌های زیبایی اروپا</p>
</div>

<div className="relative z-10 flex items-center gap-space-sm mt-space-md lg:mt-0 font-display-hero">
<div className="flex flex-col items-center bg-inverse-surface/40 backdrop-blur-md rounded-2xl px-space-md py- space-sm min-w-[70px]">
<span className="font-headline-lg text-headline-lg text-white font-bold" id="timerHours">{toFarsi(timeLeft.hours)}</span>
<span className="font-label-sm text-label-sm text-white/70">ساعت</span>
</div>
<span className="text-white font-bold text-headline-lg">:</span>
<div className="flex flex-col items-center bg-inverse-surface/40 backdrop-blur-md rounded-2xl px-space-md py- space-sm min-w-[70px]">
<span className="font-headline-lg text-headline-lg text-white font-bold" id="timerMinutes">{toFarsi(timeLeft.minutes)}</span>
<span className="font-label-sm text-label-sm text-white/70">دقیقه</span>
</div>
<span className="text-white font-bold text-headline-lg">:</span>
<div className="flex flex-col items-center bg-inverse-surface/40 backdrop-blur-md rounded-2xl px-space-md py- space-sm min-w-[70px]">
<span className="font-headline-lg text-headline-lg text-white font-bold" id="timerSeconds">{toFarsi(timeLeft.seconds)}</span>
<span className="font-label-sm text-label-sm text-white/70">ثانیه</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="group flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative">
<div className="absolute top-space-md right-space-md z-10 bg-error text-on-error font-label-md text-label-md px-2.5 py-1 rounded-full font-bold shadow-sm">
            ۳۰٪-
          </div>
<button className="absolute top-space-md left-space-md z-10 w-9 h-9 rounded-full bg-surface/80 hover:bg-surface text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-space-md">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxury night repair serum bottle with golden pipette dropper on smooth stone pedestal with soft warm shadows, premium cosmetics editorial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCCBMH256Bk6Awng8JkDSRYuvju22CpPNy-aUtNVmmzFVGVzOw4eYfR0_HATD7Vhfgr1t3nrWF2CiOggq8PD0mpKQUNZeTezuRoCB9TJVHWVCt34XSWFWvGj4KiQi4IA8g-kjibwMey0CbXXoJWFlZENrK97-EhaaRGosKZYWVsohVfPfosVQfAJR2GGsXASu66KWtacfU0h1-9kRKvr7vAjpN5vby5F9guIB8-qg"/>
</div>
<div className="flex items-center gap-space-xs mb-space-xs">
<div className="flex items-center text-amber-500 text-label-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">(۴.۸)</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold mb-1">استی لادر (Estée Lauder)</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-md line-clamp-1">سرم ترمیم شبانه پیشرفته ۵۰ میل</h3>
<div className="mt-auto pt-space-sm flex items-end justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline line-through">۴٬۹۰۰٬۰۰۰ تومان</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">۳٬۴۳۰٬۰۰۰ <span className="font-label-sm text-label-sm font-normal text-on-surface">تومان</span></span>
</div>
</div>

<div className="mt-space-md mb-space-sm">
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ width: "72%" }}></div>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant mt-1 block">تنها ۶ عدد در انبار باقیست</span>
</div>
<button className="w-full bg-inverse-surface hover:bg-primary text-inverse-on-surface hover:text-on-primary py-2.5 rounded-full font-label-md text-label-md transition-all flex items-center justify-center gap-space-xs mt-space-xs">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
<span>افزودن به سبد خرید</span>
</button>
</div>

<div className="group flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative">
<div className="absolute top-space-md right-space-md z-10 bg-error text-on-error font-label-md text-label-md px-2.5 py-1 rounded-full font-bold shadow-sm">
            ۴۵٪-
          </div>
<button className="absolute top-space-md left-space-md z-10 w-9 h-9 rounded-full bg-surface/80 hover:bg-surface text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-space-md">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxury French perfume flacon with delicate silver mist atomizer in warm silk fabric background, high end sensual fragrance bottle photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcICgdl8IGd8Ktu08mUGsELBKtDuxL9zei5AxKdKvmMeuGU2IhswbznyURB0SCxLlNlKjt-7y_XeHOUGJzveWMEmMKoWOU5HYnXElvTItY_mgWXYC--X6obRHRUgJJIKnHwogngjKyF-yOr0Qw4zH5ZiL6na0nQH341oUo224S-pk9ffIu838iwYKLN-3UopSLd4w420WbP_mYLKqsOrau8_bzh4EierOQXWaL3fI"/>
</div>
<div className="flex items-center gap-space-xs mb-space-xs">
<div className="flex items-center text-amber-500 text-label-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">(۵.۰)</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold mb-1">دیور (Maison Christian Dior)</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-md line-clamp-1">ادو پرفیوم میس دیور رز ان رز</h3>
<div className="mt-auto pt-space-sm flex items-end justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline line-through">۸٬۲۰۰٬۰۰۰ تومان</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">۴٬۵۱۰٬۰۰۰ <span className="font-label-sm text-label-sm font-normal text-on-surface">تومان</span></span>
</div>
</div>
<div className="mt-space-md mb-space-sm">
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ width: "88%" }}></div>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant mt-1 block">تنها ۲ عدد در انبار باقیست</span>
</div>
<button className="w-full bg-inverse-surface hover:bg-primary text-inverse-on-surface hover:text-on-primary py-2.5 rounded-full font-label-md text-label-md transition-all flex items-center justify-center gap-space-xs mt-space-xs">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
<span>افزودن به سبد خرید</span>
</button>
</div>

<div className="group flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative">
<div className="absolute top-space-md right-space-md z-10 bg-error text-on-error font-label-md text-label-md px-2.5 py-1 rounded-full font-bold shadow-sm">
            ۳۵٪-
          </div>
<button className="absolute top-space-md left-space-md z-10 w-9 h-9 rounded-full bg-surface/80 hover:bg-surface text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-space-md">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High end luxury eyeshadow palette with golden rose, terracotta and champagne powders open on marble backdrop with soft dustings of shimmer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxYzFEm1FuaUt6GduaYWsxpGFXzgEeDxEk46PAWYZmQfc7-OWwixWJMLhHGQ7TPINlwhYp9eOzV9IrzOnWMmMIADBMtndKht5bsw3N7c-zHhMTa4WU1k_hQQWw4Q-5TEOq0_oZRQlkMHWokFFZ1_s3S2wiw6Z78yQsRJQyn_6eIm_xpcSr1_fSLhIpJx5v6SPoyKB86WfG_rH2PhrmpkJg7Qr9Lh57x5Dbgm3bN7o"/>
</div>
<div className="flex items-center gap-space-xs mb-space-xs">
<div className="flex items-center text-amber-500 text-label-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]">star</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">(۴.۷)</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold mb-1">شارلوت تیلبری (Charlotte Tilbury)</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-md line-clamp-1">پالت سایه پیلو تاک ۱۲ رنگی لوکس</h3>
<div className="mt-auto pt-space-sm flex items-end justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline line-through">۳٬۶۰۰٬۰۰۰ تومان</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">۲٬۳۴۰٬۰۰۰ <span className="font-label-sm text-label-sm font-normal text-on-surface">تومان</span></span>
</div>
</div>
<div className="mt-space-md mb-space-sm">
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ width: "50%" }}></div>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant mt-1 block">تنها ۹ عدد در انبار باقیست</span>
</div>
<button className="w-full bg-inverse-surface hover:bg-primary text-inverse-on-surface hover:text-on-primary py-2.5 rounded-full font-label-md text-label-md transition-all flex items-center justify-center gap-space-xs mt-space-xs">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
<span>افزودن به سبد خرید</span>
</button>
</div>

<div className="group flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative">
<div className="absolute top-space-md right-space-md z-10 bg-error text-on-error font-label-md text-label-md px-2.5 py-1 rounded-full font-bold shadow-sm">
            ۳۰٪-
          </div>
<button className="absolute top-space-md left-space-md z-10 w-9 h-9 rounded-full bg-surface/80 hover:bg-surface text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-space-md">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxury hydration face cream jar with reflective rose gold lid set against delicate pink orchid flowers and fresh clean dew drops" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe_ftQboAK_HLooVn2i2SEKEAs6KXwXjczSxIMjTyTk3vG5XjQL_bcEMwgkex0IRrl_gxjzVnkwTCnNTCfkDRt_vXjt_mgya9kRk6p8trUHw9T4W_JCQREVNK2I81xHuhWWm2DOg7_CRFc4QWelZfRCyCIyQy3cGlklkSUh9QaIC9GnNEOceoeuXoJbCpdrNFgMBCAXK2xRrOBcF6vHLCMqiQKk2ij68bas7RGOH8"/>
</div>
<div className="flex items-center gap-space-xs mb-space-xs">
<div className="flex items-center text-amber-500 text-label-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">(۴.۹)</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold mb-1">کلینیک (Clinique)</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-md line-clamp-1">کرم آبرسان ۱۰۰ ساعته مویسچر سرج</h3>
<div className="mt-auto pt-space-sm flex items-end justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline line-through">۲٬۷۰۰٬۰۰۰ تومان</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">۱٬۸۹۰٬۰۰۰ <span className="font-label-sm text-label-sm font-normal text-on-surface">تومان</span></span>
</div>
</div>
<div className="mt-space-md mb-space-sm">
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ width: "65%" }}></div>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant mt-1 block">تنها ۸ عدد در انبار باقیست</span>
</div>
<button className="w-full bg-inverse-surface hover:bg-primary text-inverse-on-surface hover:text-on-primary py-2.5 rounded-full font-label-md text-label-md transition-all flex items-center justify-center gap-space-xs mt-space-xs">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
<span>افزودن به سبد خرید</span>
</button>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-margin-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
<div>
<span className="font-label-md text-label-md text-primary tracking-widest block mb-space-xs">محبوب‌ترین‌های فصل</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">پرفروش‌ترین محصولات آتلیه لوکس بلوم</h2>
</div>

<div className="flex items-center gap-space-xs bg-surface-container-low p-1.5 rounded-full mt-space-md md:mt-0">
<button className={`tab-btn px-space-lg py-2 rounded-full font-label-md text-label-md transition-all ${activeTab === "skincare" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`} onClick={() => setActiveTab("skincare")}>
            مراقبت از پوست
          </button>
<button className={`tab-btn px-space-lg py-2 rounded-full font-label-md text-label-md transition-all ${activeTab === "makeup" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`} onClick={() => setActiveTab("makeup")}>
            آرایش و زیبایی
          </button>
<button className={`tab-btn px-space-lg py-2 rounded-full font-label-md text-label-md transition-all ${activeTab === "fragrance" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`} onClick={() => setActiveTab("fragrance")}>
            عطرهای نیش
          </button>
</div>
</div>

<div className={`tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter ${activeTab === "skincare" ? "" : "hidden"}`} id="content-skincare">

<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Premium eye cream concentrate jar with rose quartz applicator wand, minimalist skincare still life" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7epdxHgbMqic9L3REsZnyM9vCtBSFDooeMNS0VGOo-itfbgc5P6wzqWwxYmr6_X5JypTldhXdy6BmPBtDfqfb6joeYNYYI3vZowJcKqbUcI8P2NrS-VXDO8rrtLM2HoGY1Tn_SaOE_S9jlLNV-ntW-hWSJ38DuobDrWJwC7f11atIaK2UG0x4tRwH1d-biNPFhCDj5m3TaJi284zxeHAV0h_31OMG6Z8b_X1CPE8"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">سرم دور چشم کافئین</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">کنسانتره رفع تیرگی و خطوط</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۴.۹ (۱۴۳ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۱٬۶۵۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>

<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Niacinamide soothing serum in translucent matte glass bottle with golden lettering and soft natural sunlight casting gentle shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkVQXVAUrqTYUYZkgphWoZIEYqkOiibAT0yDQuxzAw04ImVOwCBHtD5i3n0d7IsvUobGXIVmkl-v1xIi1YH5wewrYqJBKRFGSRVujws9nOA-vy22JWtko4nxj643qlTxF6fNz4gdRqYQyAf1LUx1_fH-gAZqk1mhS0wFngaVxyBB3YLxucy-PNe1AJ24yL7NYwV84f5RCM3OwSu-X4UlVLcnmXNsMkTwtk6a3eUKc"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">سرم نیاسینامید و روی</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">تنظیم‌کننده منافذ و ضد لک</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۴.۸ (۲۸۷ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۹۸۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>

<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Sunscreen fluid luxury fluid pump bottle with golden emblem in light breezy atmosphere next to delicate silk drapery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCujr8DIAt4XlMAEOGKPr8qBmKtoOw4T2IYgUawGvoO02DCs9ApyHQdIriYVmr7XmM6a7NCn_nXY9ubBkNmvlNQLSRfpQxeSYPdEqXMbJYQgeKwFaswhiffgjkqbAhLjG_iR2uKwdlUnq3u-ZYiSV2I0nAH5cZdDHacbcV1ZWi_5D8FNF3Z00froSKXXsOse6rA1U_XvXDmrpJW-Ir2COOtgk_OAt8LhzTRx0ATAXo"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">فلوئید ضد آفتاب بی‌رنگ</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">محافظ نامرئی SPF 50+</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۴.۹ (۵۲۰ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۱٬۴۲۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>
</div>

<div className={`tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter ${activeTab === "makeup" ? "" : "hidden"}`} id="content-makeup">
<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Huda Beauty faux filter luminous foundation bottle with exquisite satin finish swatch on mirror" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqRzU4jAkPqbmm5fxokjB8I6m0BgRTLSH-xOsVgEmDpEgIrh5sRRroTO5V10ow8hw5Kb5JO-weCjYD4AXHzFTZFwNOiGvUbU7ZGH1-4LYexwxApj2XJcf9HZVVS3zJ-ga1a6PKXUf3OEuEtBMMuJyH0YN3EDZDARK9Epj5u2Nw01Sjuw79IfmucVzb3gP268R-I50tIls5-3E3uDVjvcTsdYcqF2CczTtsZdXHIYw"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">کرم پودر فیلتر لوکس</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">پوشش کامل مات مخملی</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۴.۹ (۳۱۰ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۲٬۱۰۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>
<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Luxury longwear volumizing mascara with sleek gold wand brush and dark velvet pigments" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzhN_ZxCsx89aASw-wl95lXmDzoy5CgIFxHQ5wdGRDuPYg5pcZdiBH6-GXKaILqzzTLBcxp5xqFnCrfMdsZQVC_7rmGgTjx-lD9Z_TtSUj_JEutuHLtbATLajoPVtO0kQ_e2OV9d1w0Qs9-loon8cjkgPVVh_WCAfmRLYX_uB1wN_VnN5iva-ZulGy-YCV4PEZ6mJ9Spt1JFWYFfHqRUJPTt8NNgYYaw4BeJG2H0I"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">ریمل حجم‌دهنده ابریشمی</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">تفکیک مژه و بدون ریزش</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۴.۸ (۱۹۲ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۱٬۳۸۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>
<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Highlighter liquid drops wand applicator revealing shimmering pearlescent champagne glow on clean aesthetic glass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxjtFsPbwXpYKk7x9kQyB_dUQW76Ezsaty0bypk35G9TthXregNmxIBEJPUuXlA9_3UgJn_IAHJaAu4TAuKnZUxm8qFJ_iF-5tUxcqU40Izm-g3U9Tt8P-2t3POK8lv_56t7DM2aao8KdCHmZaQLDwa233tQjjjUhji_ef2NXYed-ugTr4jIZ0u1nVpmKiW75sIMTJWOin8NTOyeLhWzjENjqRqAR_UyMY9vpqv8U"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">هایلایتر مایع مرواریدی</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">درخشش طبیعی و ماندگار</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۴.۷ (۱۶۰ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۱٬۷۵۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>
</div>

<div className={`tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter ${activeTab === "fragrance" ? "" : "hidden"}`} id="content-fragrance">
<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Maison Francis Kurkdjian Baccarat Rouge bottle inspired niche crystal glass luxury red tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRa48zfIQBSBX6hayJiFRL5mXOJJz0UO3vZOThkBhvVb00cTXvc8rO7N3RmSzbnylZlSxk7CIztP4QdLitRu-8LGdCBFJMwkG3FGPWOWAPyt15JYo5A41HiZxW7DoDi1rt-NhsCo_LOp9O5JQ3X-de8G6DqgLv4dywppDYNVqZfGpOUB1F1eM7L0_YImzVAVAA-tE3LTCZx4k65lSTwY-UUY3ifWEA7-T_siAniiQ"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">عطر نیش روژ باکارات</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">طبع گرم و شیرین کهربایی</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۵.۰ (۴۱۰ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۱۲٬۵۰۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>
<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Tom Ford style dark luxury square perfume bottle with black truffle and rare orchid notes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvxINSf2EG8o6LG21lBkVlHssi9tLZn-q-XO390vaAbMhzvlpU9NJIEzUObCpxZRs3zOd_BoDoFVOX7VcxabSKb0eehTA5KabIX65RxHFAIwE3oPYfAi4zp0iwXdaUnDDBy8m8Ne9_JHC4R9GkBsUB1qlDhpFHj_Wzg7B8LblHaSoassyn4EcF6zt0NSQRvAA_BVOMc1zOJ6rL4YOSDZ5dx8ubN4xaWllbM3IYbCs"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">ادو پرفیوم بلک ارکید</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">رایحه لوکس مرموز و سنگین</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۴.۹ (۱۸۵ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۹٬۴۰۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>
<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group">
<div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container-low shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Jo Malone style transparent minimalist cologne bottle with silver cap surrounded by delicate English pear and white freesia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCexAdhNSj37iLLw-dfQhzjK7-sjbUc1j_G6aeY0Q36rZ8dA_KyDlBPTwy9tb8KdBjJqR-nodIkT08dbFZoo3D_eenXDI9I_LYnuqWZaeHp-PP8Dza4ueiQ3Fg0STfFOg0BmUc3LDTLK6NF4DY5WjM7M0gCulWVW4qv0cvYK4Z7EZkdrAAKCgWTi0OkdcYvxwyA3XdBE9MKsaP6caeoYKClhkNKrCjFjuKESN5tTPI"/>
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">کلن گلابی انگلیسی و فریزیا</span>
<h4 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">خنک، ملایم و نشاط‌آور</h4>
<div className="flex items-center gap-space-xs my-1">
<span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-sans">۴.۸ (۲۹۰ نظر)</span>
</div>
<div className="flex items-center justify-between mt-space-xs">
<span className="font-label-lg text-label-lg font-bold text-primary">۵٬۸۰۰٬۰۰۰ ت</span>
<button className="w-8 h-8 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface-container-low/60">
<div className="max-w-7xl mx-auto px-margin-lg">
<div className="text-center max-w-xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md text-primary tracking-widest block mb-space-xs">همکاری رسمی</span>
<h2 className="font-headline-md text-headline-md text-on-surface">خانه‌های معتبر زیبایی جهان</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">تأمین مستقیم و بی‌واسطه از برترین برندهای بین‌المللی با بارکد و هولوگرام رسمی</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter items-center">

<div className="flex flex-col items-center justify-center p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm hover:shadow-md cursor-pointer">
<span className="font-headline-sm text-headline-sm tracking-widest font-serif text-on-surface group-hover:text-primary transition-colors">CHANEL</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">شنل پاریس</span>
</div>

<div className="flex flex-col items-center justify-center p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm hover:shadow-md cursor-pointer">
<span className="font-headline-sm text-headline-sm tracking-widest font-serif text-on-surface group-hover:text-primary transition-colors">DIOR</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">کریستین دیور</span>
</div>

<div className="flex flex-col items-center justify-center p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm hover:shadow-md cursor-pointer">
<span className="font-headline-sm text-headline-sm tracking-widest font-serif text-on-surface group-hover:text-primary transition-colors">HUDA</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">هدی بیوتی</span>
</div>

<div className="flex flex-col items-center justify-center p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm hover:shadow-md cursor-pointer">
<span className="font-headline-sm text-headline-sm tracking-widest font-serif text-on-surface group-hover:text-primary transition-colors">ESTÉE</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">استی لادر</span>
</div>

<div className="flex flex-col items-center justify-center p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm hover:shadow-md cursor-pointer">
<span className="font-headline-sm text-headline-sm tracking-widest font-serif text-on-surface group-hover:text-primary transition-colors">CLINIQUE</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">کلینیک</span>
</div>

<div className="flex flex-col items-center justify-center p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all group shadow-sm hover:shadow-md cursor-pointer">
<span className="font-headline-sm text-headline-sm tracking-widest font-serif text-on-surface group-hover:text-primary transition-colors">CHARLOTTE</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">شارلوت تیلبری</span>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-margin-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
<div>
<span className="font-label-md text-label-md text-primary tracking-widest block mb-space-xs">ژورنال تخصصی لوکس بلوم</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">رازهای زیبایی و جدیدترین ترندهای روز</h2>
</div>
<a className="font-label-lg text-label-lg text-primary hover:text-primary-container inline-flex items-center gap-space-xs transition-colors mt-space-sm md:mt-0" href="#">
<span>ورود به مجله زیبایی</span>
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<article className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="relative w-full aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Sensual beauty model with glossy glass skin applying botanical serum drops, editorial lighting, warm tone luxury magazine layout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGFBvjAc3UHO-wX6d1Kq-ArqUDD2utP_uZNU0cx0vhQJsPob3l8STE5Bgkm9yglJ_j6TXYm_iaGtcNMqxEzi1BFKfvw6GUjnEmulNkmv0Jyi-oCbzzIEOeADPDwSdWYUWNX04eaSvOPa5-fMc8qZJ4zG3buyS1Op8RLjRahDk3e8A5E_VfqSh0fPQk030Q5LZhhkdWo1KuD-9zTPuv9TV1uxr4VU9iDEMn8DSw8zM"/>
<div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface">
              مراقبت پوستی
            </div>
</div>
<div className="p-space-lg flex flex-col flex-1">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mb-space-xs">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span>۲۰ آبان ۱۴۰۳</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span>۵ دقیقه مطالعه</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors mb-space-sm leading-snug">
              ترند پوست شیشه‌ای (Glass Skin): راهنمای مرحله‌به‌مرحله هیدراتاسیون عمیق
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-md">
              چگونه بدون استفاده از لایه‌های سنگین کرم‌پودر، به درخشش طبیعی، شفافیت ابریشمی و بافت یکدست دست پیدا کنیم؟
            </p>
<div className="mt-auto pt-space-sm border-t-0 flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1">
                ادامه مطلب <span className="material-symbols-outlined text-[16px]">arrow_back</span>
</span>
</div>
</div>
</article>

<article className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="relative w-full aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Chic woman backstage fashion show with velvet burgundy lipstick and soft brown eyeliner looking into vanity mirror" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADay5CmZJdMjLal796DT4Qk7343TmXhE4tJda6GzgicezXG0zNphCeUIhQM1jkG8OAXqpnm1g2FhETcK9Qff4d7vTzZ-787xCf977vdFARZT9KlL8xpNhBUSHngIxORw0XCU2dsLeI7mPOdUeMAbfcJ-U1fZyeE0WyUNk6sqq6x1MwS1Trps_XmPNqds1kWl4fUJk0GAhBCy262sfLEGxPrik1SIY8D_1uLapOF70"/>
<div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface">
              آرایش و استایل
            </div>
</div>
<div className="p-space-lg flex flex-col flex-1">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mb-space-xs">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span>۱۵ آبان ۱۴۰۳</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span>۷ دقیقه مطالعه</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors mb-space-sm leading-snug">
              پالت رنگ‌های پاییزی؛ کدام تناژ رژ لب متناسب با تن‌پوش پوستی شماست؟
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-md">
              بررسی پیگمنت‌های سرد و گرم با توصیه‌های رسمی میکاپ آرتیست‌های کمپانی شارلوت تیلبری برای فصول سرد.
            </p>
<div className="mt-auto pt-space-sm border-t-0 flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1">
                ادامه مطلب <span className="material-symbols-outlined text-[16px]">arrow_back</span>
</span>
</div>
</div>
</article>

<article className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="relative w-full aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxury perfume lab with glass beakers, dried flowers and amber oil extraction in soft romantic sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwUo31thAf-5H5_kPKlIgNtOCwu05b1xQnTxlqkjts4lHJ7vSyOH8RxEvW-KyAzfbYPteZtC-ixbYzjRG9XpKF1KpCUA141zKCKAk22xshIEGIz7GvOKLYMmHZ8ZiQoB0MFxP-gVqOHqE5pLY7yzfA0uJZoFFnDGaum3atCv3ZZNfrgoyU0rrDk92mMBENa7DBgfmqLhSwuwKfxM3jncK-AqiXJ7JlQwTdyTo3vjo"/>
<div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface">
              دنیای عطر
            </div>
</div>
<div className="p-space-lg flex flex-col flex-1">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mb-space-xs">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span>۰۸ آبان ۱۴۰۳</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span>۴ دقیقه مطالعه</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors mb-space-sm leading-snug">
              جادوی نت‌های شرقی؛ رمزگشایی از ماندگاری خارق‌العاده عطرهای نیش
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-md">
              چرا ترکیب چوب صندل، عود و کهربا همچنان پادشاه بلامنازع رایحه‌های لوکس و سلطنتی زمستانه است؟
            </p>
<div className="mt-auto pt-space-sm border-t-0 flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1">
                ادامه مطلب <span className="material-symbols-outlined text-[16px]">arrow_back</span>
</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface-container-lowest">
<div className="max-w-7xl mx-auto px-margin-lg">
<div className="p-space-xl rounded-3xl bg-surface-container-low shadow-sm grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md">
<span className="material-symbols-outlined text-[28px]">verified_user</span>
</div>
<div className="flex flex-col">
<h4 className="font-title-md text-title-md text-on-surface font-bold mb-1">ضمانت اصالت ۱۰۰٪</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              تمامی کالاها با برچسب اصالت سازمان غذا و دارو و ضمانت تعویض بدون قید و شرط ارائه می‌شوند.
            </p>
</div>
</div>
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-md">
<span className="material-symbols-outlined text-[28px]">history</span>
</div>
<div className="flex flex-col">
<h4 className="font-title-md text-title-md text-on-surface font-bold mb-1">۷ روز ضمانت بازگشت</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              در صورت عدم باز شدن پلمپ بهداشتی کالا، تا هفت روز امکان ارجاع و استرداد وجه فراهم است.
            </p>
</div>
</div>
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 shadow-md">
<span className="material-symbols-outlined text-[28px]">local_shipping</span>
</div>
<div className="flex flex-col">
<h4 className="font-title-md text-title-md text-on-surface font-bold mb-1">ارسال رایگان بالای ۵۰۰ هزار تومان</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              تحویل اکسپرس در سراسر کشور با بسته‌بندی هاردباکس محافظ ضد ضربه و معطر.
            </p>
</div>
</div>
</div>
</div>
</section>


</div>
    </main>
  );
}
