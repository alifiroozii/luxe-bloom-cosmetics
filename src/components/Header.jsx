'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount, subtotal, formatPrice, wishlist } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه دسته‌ها');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/catalog?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      router.push('/catalog');
    }
  };

  const navLinks = [
    { label: 'صفحه اصلی', href: '/', pathId: 'home' },
    { label: 'آرایش صورت', href: '/catalog', pathId: 'makeup' },
    { label: 'مراقبت از پوست', href: '/catalog?cat=skincare', pathId: 'skincare' },
    { label: 'عطر و ادکلن', href: '/catalog?cat=fragrance', pathId: 'fragrance' },
    { label: 'مراقبت از مو', href: '/catalog?cat=haircare', pathId: 'haircare' },
    { label: 'پیشنهادات شگفت‌انگیز', href: '/#special-offers', pathId: 'special-offers' },
    { label: 'برندها', href: '/#brands', pathId: 'brands' },
    { label: 'مجله زیبایی', href: '/#journal', pathId: 'beauty-magazine' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(138,72,83,0.06)]">
      {/* Top Banner */}
      <div className="bg-primary text-on-primary py-2 px-margin-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-label-sm text-label-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[16px]">local_shipping</span>
            <span>ارسال رایگان برای خریدهای بالای ۱٬۵۰۰٬۰۰۰ تومان در سراسر کشور</span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[15px]">verified</span>
              تضمین اصالت صددرصدی
            </span>
            <span className="opacity-50">|</span>
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[15px]">support_agent</span>
              پشتیبانی اختصاصی ۲۴ ساعته
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="h-20 max-w-7xl mx-auto px-margin-lg flex items-center justify-between gap-gutter">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-space-lg group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-fixed shadow-sm group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-7 h-7" fill="none">
              <circle cx="50" cy="50" r="44" stroke="#8a4853" strokeWidth="2.5" opacity="0.4"/>
              <path d="M50 16 C55 35, 65 45, 84 50 C65 55, 55 65, 50 84 C45 65, 35 55, 16 50 C35 45, 45 35, 50 16 Z" fill="#8a4853"/>
              <path d="M50 26 C53 38, 62 47, 74 50 C62 53, 53 62, 50 74 C47 62, 38 53, 26 50 C38 47, 47 38, 50 26 Z" fill="#b76e79"/>
              <circle cx="50" cy="50" r="5" fill="#f4ebe1"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
              لوکس بلوم
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider">
              Luxe Bloom Cosmetics
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-space-lg">
          <form onSubmit={handleSearch} className="flex items-center bg-surface-container-low rounded-full px-space-md py-space-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)] border border-outline-variant/30 focus-within:border-primary/50 transition-colors">
            <button type="submit" className="text-outline hover:text-primary transition-colors flex items-center">
              <span className="material-symbols-outlined ml-space-sm text-[20px]">search</span>
            </button>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
              placeholder="جستجوی عطر، سرم پوستی، کرم‌پودر یا برند..."
              type="text"
            />
            <div className="h-4 w-px bg-outline-variant mx-space-sm"></div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent font-label-sm text-label-sm text-on-surface-variant focus:outline-none cursor-pointer pr-space-xs"
            >
              <option>همه دسته‌ها</option>
              <option>آرایش صورت</option>
              <option>مراقبت پوست</option>
              <option>عطر و ادکلن</option>
              <option>مراقبت مو</option>
            </select>
          </form>
        </div>

        {/* User Utilities: Wishlist, Cart, Profile */}
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-sm pl-space-md">
            {/* Wishlist */}
            <Link
              href="/catalog"
              title="علاقه‌مندی‌ها"
              className="relative p-space-sm rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[22px]">favorite</span>
              <span className="absolute top-1 left-1 bg-primary text-on-primary font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {wishlist.length}
              </span>
            </Link>

            {/* Cart Button */}
            <Link
              href="/checkout"
              className="flex items-center gap-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface py-2 px-space-md rounded-full transition-all border border-outline-variant/40"
            >
              <div className="relative flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[22px]">shopping_bag</span>
                <span className="absolute -top-1 -right-1 bg-primary-container text-on-primary-container font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center leading-none font-bold">
                  {itemCount}
                </span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant">سبد خرید</span>
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  {formatPrice(subtotal)} تومان
                </span>
              </div>
            </Link>
          </div>

          {/* User Profile / Login Link */}
          <Link
            href="/login"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-sm hover:opacity-90 transition-opacity"
            title="ورود به حساب کاربری"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </Link>
        </div>
      </div>

      {/* Secondary Category Navigation */}
      <div className="bg-surface-container-lowest/80 backdrop-blur-md border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin-lg">
          <nav className="flex items-center justify-between py-2">
            <div className="flex items-center gap-space-sm font-label-md text-label-md overflow-x-auto no-scrollbar">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href.split('?')[0]);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-space-md py-1.5 transition-all rounded-full whitespace-nowrap ${
                      isActive
                        ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm shrink-0 pr-space-md">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              <span>مشاوره تخصصی پوست</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
