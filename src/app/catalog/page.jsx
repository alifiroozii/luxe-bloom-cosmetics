'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function CatalogPage() {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [selectedSkinType, setSelectedSkinType] = useState('all');
  const [inStockOnly, setInStockOnly] = useState(true);
  const [priceRange, setPriceRange] = useState(6500000);
  const [selectedSort, setSelectedSort] = useState('newest');

  return (
    <main className="w-full pt-44 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
<div className="relative w-full overflow-hidden bg-surface-container-low py-10 px-margin-lg mb-8">
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 font-label-md text-label-md text-primary">
<span className="material-symbols-outlined text-[18px]">spa</span>
<span>آتلیه لوکس بلوم</span>
<span className="text-outline">/</span>
<span className="text-on-surface-variant">کاتالوگ برگزیده آرایشی و بهداشتی</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
          مجموعه فاخر آرایش و مراقبت تخصصی
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
          فرمولاسیون‌های ماندگار، پیگمنت‌های غنی و اکسیرهای جوان‌ساز از معتبرترین برندهای جهان با اصالت تضمین‌شده
        </p>
</div>
<div className="flex items-center gap-3 bg-surface-container-lowest py-2.5 px-4 rounded-2xl shadow-sm self-start md:self-auto">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">workspace_premium</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">تمامی اقلام با لیبل</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">۱۰۰٪ اورجینال و رجیستر شده</span>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-margin-lg w-full mb-16">
<div className="flex flex-col lg:flex-row gap-gutter items-start">
<aside className="w-full lg:w-72 shrink-0 bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-6">
<div className="flex items-center justify-between pb-4">
<div className="flex items-center gap-2 text-on-surface font-title-md text-title-md font-bold">
<span className="material-symbols-outlined text-primary text-[20px]">tune</span>
<span>فیلترهای پیشرفته</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors" id="reset-filters">
            پاک کردن همه
          </button>
</div>
<div className="bg-surface-container-low rounded-xl p-3 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">فقط کالاهای موجود</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">آماده ارسال فوری</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="in-stock-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-surface-container-lowest after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="space-y-3">
<span className="font-label-lg text-label-lg text-on-surface block font-semibold">دسته‌بندی اصلی</span>
<div className="space-y-1.5 font-body-sm text-body-sm">
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<input checked="" className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">کرم پودر و بیس صورت</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">۴۸</span>
</label>
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<input checked="" className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">رژ لب و تینت مخملی</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">۳۶</span>
</label>
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">ریمل و خط چشم آرتیستیک</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">۲۱</span>
</label>
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<input checked="" className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">سرم هیالورونیک و پپتاید</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">۵۴</span>
</label>
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">آبرسان و کرم مغذی شب</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">۲۵</span>
</label>
</div>
</div>
<div className="space-y-3">
<span className="font-label-lg text-label-lg text-on-surface block font-semibold">برندهای برگزیده</span>
<div className="relative">
<span className="material-symbols-outlined text-[16px] text-outline absolute right-3 top-2.5">search</span>
<input className="w-full bg-surface-container-low rounded-xl py-1.5 pr-8 pl-3 font-body-sm text-body-sm text-on-surface focus:outline-none" placeholder="جستجوی برند..." type="text"/>
</div>
<div className="space-y-1.5 font-body-sm text-body-sm max-h-40 overflow-y-auto">
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input checked="" className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">دیور (Dior Beauty)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">۱۸</span>
</label>
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input checked="" className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">هدی بیوتی (Huda Beauty)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">۲۹</span>
</label>
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">فنتی بیوتی (Fenty Beauty)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">۱۴</span>
</label>
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">استی لادر (Estée Lauder)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">۳۲</span>
</label>
<label className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="text-on-surface">اورجینری (The Ordinary)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">۴۲</span>
</label>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">محدوده قیمت</span>
<span className="font-label-sm text-label-sm text-primary font-bold">تومان</span>
</div>
<div className="space-y-2">
<input className="w-full accent-primary cursor-pointer h-1.5 bg-surface-container-high rounded-lg appearance-none" max="6500000" min="300000" type="range" value="4800000"/>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>از ۳۰۰٬۰۰۰</span>
<span className="text-on-surface font-semibold">تا ۴٬۸۰۰٬۰۰۰</span>
</div>
</div>
</div>
<div className="space-y-3">
<span className="font-label-lg text-label-lg text-on-surface block font-semibold">سازگاری با نوع پوست</span>
<div className="flex flex-wrap gap-1.5">
<button className="px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm transition-all shadow-sm">
              همه نوع پوست
            </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all">
              پوست خشک
            </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all">
              پوست مختلط
            </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all">
              پوست چرب
            </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all">
              پوست حساس
            </button>
</div>
</div>
<div className="space-y-3">
<span className="font-label-lg text-label-lg text-on-surface block font-semibold">امتیاز خریداران</span>
<div className="space-y-1 font-body-sm text-body-sm">
<label className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-surface-container-low cursor-pointer">
<input checked="" className="accent-primary" name="rating-filter" type="radio"/>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface">۴ ستاره و بالاتر</span>
</div>
</label>
<label className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-surface-container-low cursor-pointer">
<input className="accent-primary" name="rating-filter" type="radio"/>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-sm text-label-sm text-on-surface">۳ ستاره و بالاتر</span>
</div>
</label>
</div>
</div>
</aside>
<section className="flex-1 w-full space-y-6">
<div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">فیلترهای فعال:</span>
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
<span>کرم پودر</span>
<button className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-error">close</button>
</span>
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
<span>برند: دیور</span>
<button className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-error">close</button>
</span>
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
<span>کالاهای موجود</span>
<button className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-error">close</button>
</span>
<span className="font-label-sm text-label-sm text-outline mr-2">|</span>
<span className="font-label-md text-label-md text-on-surface-variant">
              نمایش <span className="text-primary font-bold">۲۴</span> از <span className="text-on-surface font-bold">۱۸۴</span> کالا
            </span>
</div>
<div className="flex items-center justify-between md:justify-end gap-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">sort</span>
<select className="bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-xl py-2 px-3 focus:outline-none cursor-pointer">
<option>محبوب‌ترین‌ها</option>
<option>جدیدترین محصولات</option>
<option>پرفروش‌ترین‌های ماه</option>
<option>ارزان‌ترین به گران‌ترین</option>
<option>گران‌ترین به ارزان‌ترین</option>
</select>
</div>
<div className="flex items-center bg-surface-container-low rounded-xl p-1">
<button className="p-1.5 rounded-lg bg-surface-container-lowest shadow-sm text-primary flex items-center justify-center" title="نمای ۴ ستونه">
<span className="material-symbols-outlined text-[18px]">grid_view</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" title="نمای لیستی">
<span className="material-symbols-outlined text-[18px]">view_list</span>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
<div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dior Forever Skin Glow Foundation glass bottle resting on beige travertine marble, soft sun rays reflecting on liquid texture, subtle cosmetic powder dust, muted blush and warm alabaster luxury aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMnYPP0978KRakCzNJDfqXOVBWGxDm8VZZVxalg51BKYowAqK8fcl58G9w_uXVb0FPpPOq4xsPny7dux8qi57OqslIGmQXVd6x2MtA4zPJ-Q3CZ2T0scEF71hHxdSxWBdMYjRRvqSd7_i3pswy4_Ad62SeLoJjeLgJ2mO3qR-Qz0iJqHqyBRsmWApk485oMow16-uWesZw47oqy4E080-ae1N3DpUdgeRoCriNwlE"/>
<span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold shadow-sm">
                پرفروش‌ترین
              </span>
<button onClick={() => toggleWishlist("cat-wishlist")} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm wishlist-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-surface-container-lowest/85 backdrop-blur-md px-2 py-1 rounded-full shadow-sm">
<div className="w-3.5 h-3.5 rounded-full bg-[#E8C5A8]" title="Shade 1N"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#DEC0A0]" title="Shade 2N"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#CE9F7A]" title="Shade 3W"></div>
<span className="font-label-sm text-[10px] text-on-surface-variant pr-0.5">+۴</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1 justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">دیور • Dior</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  کرم‌پودر فوراور اسکین گلو ۲۴ ساعته
                </h3>
<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-secondary items-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">۴.۹</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(۱۲۸ نظر)</span>
</div>
</div>
<div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
<div className="flex items-baseline justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline line-through">۴٬۴۵۰٬۰۰۰</span>
<span className="font-title-md text-title-md font-bold text-on-surface">۳٬۹۸۰٬۰۰۰</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
</div>
<button className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span>خرید سریع</span>
</button>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Huda Beauty Power Bullet Matte Lipstick sleek geometric rose gold case with creamy berry wine pigment swatch texture beside it on warm cashmere fabric, high fashion studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzockz8Q43-_J5QzzliAAK_Jzpwc5IZhe_ubGKLqPG0e8iEIIt2Q6WSJJC520QFyf76T83BimWje8Ds81LhUWtsCElFrNTxcJWpa3qGKVmhhDjwhQG0kileZ8FGWXzaT6XCMLeZwv7aqk3Y1S0rSMQL16ZehikC4Gb0VWGJFTzdT3NMZDwG2jcdkrc4V01D79KOCW6Hvgohv8eNQX9ZsvdUi4OcGkEY5Q3xxuF27g"/>
<span className="absolute top-3 right-3 bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shadow-sm">
                مات مخملی
              </span>
<button onClick={() => toggleWishlist("cat-wishlist")} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm wishlist-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-surface-container-lowest/85 backdrop-blur-md px-2 py-1 rounded-full shadow-sm">
<div className="w-3.5 h-3.5 rounded-full bg-[#8A3343]" title="Interview"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#A34E57]" title="Rendez-Vous"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#C26B6E]" title="Ladies Night"></div>
</div>
</div>
<div className="p-4 flex flex-col flex-1 justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">هدی بیوتی • Huda Beauty</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  رژ لب جامد پاور بولت الترا مات
                </h3>
<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-secondary items-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">۴.۸</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(۲۱۰ نظر)</span>
</div>
</div>
<div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
<div className="flex items-baseline justify-between">
<span className="font-title-md text-title-md font-bold text-on-surface">۱٬۸۵۰٬۰۰۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
</div>
<button className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span>خرید سریع</span>
</button>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Minimalist amber pipette dropper glass bottle of hyaluronic acid serum with crystal water droplets and soft botanical eucalyptus shadows on cream stone background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPL2Kb7g7W2dqWRoNdJUdoRQD3zqcr4X_TnJNCLYpx5L-7S5ooI6V7be2hnk7L52gpYsC77aZPSNeQ2Hh5ooZx64tfnT34P5F1IrVNYBJ9W4h5_H3uvqyzuejVu0WBcEsErnZxl9H1Qztl2heFk9UtZNE00p6uFEy_QYvFa4ABsNKNpWUtsR3c_XkJ0iugBiH4ULfZHqmOzq89Bobz7_5O1r_u6bufN3Z7pUztzio"/>
<span className="absolute top-3 right-3 bg-primary-fixed text-on-primary-fixed px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shadow-sm">
                آبرسان عمیق
              </span>
<button onClick={() => toggleWishlist("cat-wishlist")} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm wishlist-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
</div>
<div className="p-4 flex flex-col flex-1 justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">د اوردینری • The Ordinary</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  سرم هیالورونیک اسید ۲٪ به همراه B5
                </h3>
<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-secondary items-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">۴.۷</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(۵۴۰ نظر)</span>
</div>
</div>
<div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
<div className="flex items-baseline justify-between">
<span className="font-title-md text-title-md font-bold text-on-surface">۷۲۰٬۰۰۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
</div>
<button className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span>خرید سریع</span>
</button>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Fenty Beauty Gloss Bomb luminous rose nude lip gloss in octagonal luxury acrylic container with thick rich applicator, glossy light reflection, soft warm ivory and blush highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC00vjcrPgYJ71kEFPlJFyDeM0OZbQKW4yyoapzY9GHwaiAkanRexr7S3XoDIZ8QhoPLfn3GDiN5BytQdyyP26YssrkgI8wDcWv5wmzPHw68PzssStKCYXDeNKsR4v2Xm4nNCl4EL1tJVHvwnQDwIJeeHkQ2ZQbg_LplnVt7qcRlEQlFtzp-M67MaJ0V9sBWvnqvFCH5bV2SRgJeH4_55nNeGKidQO4jPOiRg6WAM"/>
<span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold shadow-sm">
                شاین آینه‌ای
              </span>
<button onClick={() => toggleWishlist("cat-wishlist")} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm wishlist-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-surface-container-lowest/85 backdrop-blur-md px-2 py-1 rounded-full shadow-sm">
<div className="w-3.5 h-3.5 rounded-full bg-[#DF9D8D]" title="Fenty Glow"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#C96B75]" title="Fu$$y"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#E5B5A5]" title="Sweet Mouth"></div>
</div>
</div>
<div className="p-4 flex flex-col flex-1 justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">فنتی بیوتی • Fenty Beauty</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  برق لب شاین گلاس بامب یونیورسال
                </h3>
<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-secondary items-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">۴.۹</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(۳۲۰ نظر)</span>
</div>
</div>
<div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
<div className="flex items-baseline justify-between">
<span className="font-title-md text-title-md font-bold text-on-surface">۱٬۹۲۰٬۰۰۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
</div>
<button className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span>خرید سریع</span>
</button>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Estee Lauder Advanced Night Repair serum brown glass bottle surrounded by gentle golden honey tones, pure scientific cosmetic elegance, luxury warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLsFwc26WsXjwahC2WXJMnO-YKMwB1zUIn4gqDtJUAU11siBGMew5Vk_TRaHYeAbMcZM439ttHa8bubs78Iz6EXP9QQ2Zplj766HQ7lPhV5gaAoo_swk-xZGK_9Enrsp3JNuZXl0zNcQKIJWns4C4uQ_RMLK9m3XSBKyoajqXn4cgAsZc0nNbA-wFaWMMVrey4m4-PzMs5Sm2V_2XP7BAIs59Hmgz4zMyz1LH61v8"/>
<span className="absolute top-3 right-3 bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shadow-sm">
                جوان‌ساز شب
              </span>
<button onClick={() => toggleWishlist("cat-wishlist")} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm wishlist-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
</div>
<div className="p-4 flex flex-col flex-1 justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">استی لادر • Estée Lauder</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  سرم تخصصی بازسازی شب ادونسد نایت ریپیر
                </h3>
<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-secondary items-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">۵.۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(۴۱۵ نظر)</span>
</div>
</div>
<div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
<div className="flex items-baseline justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline line-through">۵٬۸۰۰٬۰۰۰</span>
<span className="font-title-md text-title-md font-bold text-on-surface">۴٬۹۵۰٬۰۰۰</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
</div>
<button className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span>خرید سریع</span>
</button>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dior Diorshow Iconic Overcurl Mascara silver metallic sculpted tube, deep black curved brush wand with ultra volumizing bristles, soft studio rim light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI9w8RIfW0YZU-3-KHyxtdvAoEUuZP1y9b2Tb9y4K8T-NjOiiA3TnEFBwBasNe4hla40V_NWzeYAdJsiiW1-weivnqA39yrdDwbCt8ZYG9eJCQ8OIDiL5WtugmCVN-H2aetquHb_DEi8GoCH6kq2MC-ldVQk-JSxBVg_3vd1riOrPxnV4ekOuhA4kmaFAYM_LT6VIzIO-Jj34EExvm5GrzukoiBecKXvs4tZMuugk"/>
<button onClick={() => toggleWishlist("cat-wishlist")} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm wishlist-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
</div>
<div className="p-4 flex flex-col flex-1 justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">دیور • Dior</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  ریمل حجم‌دهنده و فرکننده دیورشو آیکونیک
                </h3>
<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-secondary items-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">۴.۸</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(۸۸ نظر)</span>
</div>
</div>
<div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
<div className="flex items-baseline justify-between">
<span className="font-title-md text-title-md font-bold text-on-surface">۲٬۳۰۰٬۰۰۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
</div>
<button className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span>خرید سریع</span>
</button>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Huda Beauty Easy Bake Loose Powder frosted rose crystal jar with delicate satin puff and cascading translucent ultrafine setting powder dust" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxqVPHuJk8tu7EdefUo_5J5GGoqVepiD7cRB49R-MGEJHe9Mg540QNHXNbQ65F1txthRMzwNWoEJOphA7sff2iwaMe6_rsbPxg3kXUv_2X2xjIndRqRcKz81Oo_Bz28QRwNKyds93gOco1v-bstchvNgnoJ_64JFGb6O87Nz-YKCuo9y5J8AEXPhcIMIPv2YdwZhetvYmdaZagEDSWipzxDfluJlXlgPVXcEeTAis"/>
<span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold shadow-sm">
                تثبیت آرایش
              </span>
<button onClick={() => toggleWishlist("cat-wishlist")} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm wishlist-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-surface-container-lowest/85 backdrop-blur-md px-2 py-1 rounded-full shadow-sm">
<div className="w-3.5 h-3.5 rounded-full bg-[#F5E6D3]" title="Pound Cake"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#EAD4BA]" title="Banana Bread"></div>
<div className="w-3.5 h-3.5 rounded-full bg-[#F3DCD5]" title="Cherry Blossom"></div>
</div>
</div>
<div className="p-4 flex flex-col flex-1 justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">هدی بیوتی • Huda Beauty</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  پودر بیک و فیکس ایزی بیک فیلتردار
                </h3>
<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-secondary items-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">۴.۹</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(۲۷۵ نظر)</span>
</div>
</div>
<div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
<div className="flex items-baseline justify-between">
<span className="font-title-md text-title-md font-bold text-on-surface">۲٬۶۰۰٬۰۰۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
</div>
<button className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span>خرید سریع</span>
</button>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxury cosmetic facial moisturiser cream jar opened revealing whipped creamy ivory texture with golden spoon accent beside ceramic cup on warm light marble surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZtMu4DwAo7IjUU1ldlLPOIXlO-kGwAL-PFeryjGvkMZjlv9h7COim0YS-VrmyUpViqaXZn2ac_uxjQkAziKeYO5RaLIqs_D2sPue9AUgL4OBE2n6xxMNs5RndjRsrqdfZFsHNbUcVbld0OIm0acrW_sxoZWBifij3vnjUq8RHWnfGcSttruDAYRYaHT9FI-EiCIXCjg_G8MJF_1NM3nz1TejksbtmsrsQnMZZ0JM"/>
<button onClick={() => toggleWishlist("cat-wishlist")} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm wishlist-btn">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
</div>
<div className="p-4 flex flex-col flex-1 justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">استی لادر • Estée Lauder</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  کرم آبرسان سوپریم پلاس سلولار یوث
                </h3>
<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-secondary items-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">۴.۸</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(۱۴۰ نظر)</span>
</div>
</div>
<div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
<div className="flex items-baseline justify-between">
<span className="font-title-md text-title-md font-bold text-on-surface">۴٬۱۰۰٬۰۰۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
</div>
<button className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span>خرید سریع</span>
</button>
</div>
</div>
</div>
</div>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">
            نمایش صفحه ۱ از مجموع ۸ صفحه کاتالوگ
          </span>
<nav aria-label="صفحه‌بندی کاتالوگ" className="flex items-center gap-1.5">
<button className="flex items-center gap-1 px-3 py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface shadow-sm font-label-sm text-label-sm transition-colors opacity-50 cursor-not-allowed">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
<span>قبلی</span>
</button>
<button className="w-9 h-9 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center shadow-sm">
              ۱
            </button>
<button className="w-9 h-9 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
              ۲
            </button>
<button className="w-9 h-9 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
              ۳
            </button>
<span className="w-8 text-center text-outline font-body-sm text-body-sm">...</span>
<button className="w-9 h-9 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
              ۸
            </button>
<button className="flex items-center gap-1 px-3 py-2 rounded-xl bg-surface-container-lowest text-on-surface hover:text-primary shadow-sm font-label-sm text-label-sm transition-colors">
<span>بعدی</span>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
</nav>
</div>
</section>
</div>
</div>

</div>
    </main>
  );
}
