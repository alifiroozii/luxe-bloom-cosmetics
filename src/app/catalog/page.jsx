'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function CatalogPage() {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(true);

  // Fetch products from Prisma backend API
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCategory !== 'all') params.append('cat', selectedCategory);
        if (selectedSort !== 'newest') params.append('sort', selectedSort);
        if (searchQuery.trim()) params.append('q', searchQuery.trim());

        const res = await fetch(`/api/products?${params.toString()}`);
        const data = await res.json();
        if (data.success && data.products) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [selectedCategory, selectedSort, searchQuery]);

  const categories = [
    { name: 'همه محصولات', slug: 'all', count: 184 },
    { name: 'کرم پودر و بیس صورت', slug: 'face-foundation', count: 48 },
    { name: 'رژ لب و تینت مخملی', slug: 'lips-tint', count: 36 },
    { name: 'ریمل و خط چشم آرتیستیک', slug: 'mascara-eyeliner', count: 21 },
    { name: 'سرم هیالورونیک و پپتاید', slug: 'serum-skincare', count: 54 },
    { name: 'پودر بیک و فیکس', slug: 'loose-powder', count: 16 },
    { name: 'کرم آبرسان و مرطوب‌کننده', slug: 'face-cream', count: 25 },
  ];

  const formatPrice = (p) => (p || 0).toLocaleString('fa-IR');

  return (
    <main className="w-full pt-44 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        {/* Banner */}
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
                فرمولاسیون‌های ماندگار، پیگمنت‌های غنی و اکسیرهای جوان‌ساز از معتبرترین برندهای جهان با اتصال به دیتابیس اختصاصی
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

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-margin-lg w-full mb-16">
          <div className="flex flex-col lg:flex-row gap-gutter items-start">
            
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 shrink-0 bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2 text-on-surface font-title-md text-title-md font-bold">
                  <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                  <span>فیلترهای پیشرفته</span>
                </div>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setSelectedSort('newest'); }}
                  className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors"
                >
                  پاک کردن همه
                </button>
              </div>

              {/* In-stock toggle */}
              <div className="bg-surface-container-low rounded-xl p-3 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-medium">فقط کالاهای موجود</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">آماده ارسال فوری</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="sr-only peer"
                    type="checkbox"
                  />
                  <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-surface-container-lowest after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <span className="font-label-lg text-label-lg text-on-surface block font-semibold">دسته‌بندی اصلی</span>
                <div className="space-y-1.5 font-body-sm text-body-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full flex items-center justify-between p-2 rounded-xl transition-colors text-right ${
                        selectedCategory === cat.slug
                          ? 'bg-primary-fixed text-primary font-bold'
                          : 'hover:bg-surface-container-low text-on-surface'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">
                          {selectedCategory === cat.slug ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <span>{cat.name}</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Search */}
              <div className="space-y-3">
                <span className="font-label-lg text-label-lg text-on-surface block font-semibold">جستجو در محصولات</span>
                <div className="relative">
                  <span className="material-symbols-outlined text-[16px] text-outline absolute right-3 top-2.5">search</span>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface-container-low rounded-xl py-1.5 pr-8 pl-3 font-body-sm text-body-sm text-on-surface focus:outline-none"
                    placeholder="نام کالا، برند یا مشخصه..."
                    type="text"
                  />
                </div>
              </div>
            </aside>

            {/* Main Product Grid Section */}
            <section className="flex-1 w-full space-y-6">
              {/* Filter bar */}
              <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">فیلتر فعال:</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    <span>
                      {categories.find((c) => c.slug === selectedCategory)?.name || 'همه دسته‌ها'}
                    </span>
                    {selectedCategory !== 'all' && (
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-error"
                      >
                        close
                      </button>
                    )}
                  </span>
                  <span className="font-label-sm text-label-sm text-outline mr-2">|</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    تعداد: <span className="text-primary font-bold">{products.length}</span> کالا در پایگاه داده
                  </span>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline text-[18px]">sort</span>
                    <select
                      value={selectedSort}
                      onChange={(e) => setSelectedSort(e.target.value)}
                      className="bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded-xl py-2 px-3 focus:outline-none cursor-pointer"
                    >
                      <option value="newest">جدیدترین محصولات</option>
                      <option value="rating">محبوب‌ترین‌ها (بیشترین امتیاز)</option>
                      <option value="price-asc">ارزان‌ترین به گران‌ترین</option>
                      <option value="price-desc">گران‌ترین به ارزان‌ترین</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Cards */}
              {loading ? (
                <div className="bg-surface-container-lowest p-16 rounded-2xl text-center flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-[48px] text-primary animate-spin mb-3">sync</span>
                  <span className="font-title-md text-on-surface font-semibold">در حال بارگذاری اطلاعات از دیتابیس لوکس بلوم...</span>
                </div>
              ) : products.length === 0 ? (
                <div className="bg-surface-container-lowest p-16 rounded-2xl text-center flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-[48px] text-outline mb-3">search_off</span>
                  <span className="font-title-md text-on-surface font-semibold">هیچ محصولی با این مشخصات یافت نشد</span>
                  <button
                    onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                    className="mt-4 text-primary font-label-md hover:underline"
                  >
                    نمایش تمام محصولات
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
                  {products.map((product) => {
                    let parsedShades = [];
                    try {
                      if (product.shades) parsedShades = JSON.parse(product.shades);
                    } catch (e) {}

                    return (
                      <div
                        key={product.id}
                        className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
                          <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            alt={product.title}
                            src={product.image}
                          />
                          {product.isBestSeller && (
                            <span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold shadow-sm">
                              پرفروش‌ترین
                            </span>
                          )}
                          {product.discount && (
                            <span className="absolute top-3 left-12 bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shadow-sm">
                              {product.discount}٪ تخفیف
                            </span>
                          )}
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              {wishlist.includes(product.id) ? 'favorite' : 'favorite_border'}
                            </span>
                          </button>

                          {parsedShades.length > 0 && (
                            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-surface-container-lowest/85 backdrop-blur-md px-2 py-1 rounded-full shadow-sm">
                              {parsedShades.slice(0, 3).map((sh, idx) => (
                                <div
                                  key={idx}
                                  className="w-3.5 h-3.5 rounded-full border border-black/10"
                                  style={{ backgroundColor: sh.color }}
                                  title={sh.name}
                                ></div>
                              ))}
                              {parsedShades.length > 3 && (
                                <span className="font-label-sm text-[10px] text-on-surface-variant pr-0.5">
                                  +{parsedShades.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">
                              {product.brand}
                            </span>
                            <Link href="/product">
                              <h3 className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors cursor-pointer">
                                {product.title}
                              </h3>
                            </Link>
                            <div className="flex items-center gap-1 mt-1.5">
                              <div className="flex text-secondary items-center">
                                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                  star
                                </span>
                              </div>
                              <span className="font-label-sm text-label-sm font-bold text-on-surface">
                                {product.rating || '۵.۰'}
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant">
                                ({product.reviewsCount || 100} نظر)
                              </span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-surface-container-low flex flex-col gap-3">
                            <div className="flex items-baseline justify-between">
                              <div className="flex flex-col">
                                {product.originalPrice && (
                                  <span className="font-label-sm text-label-sm text-outline line-through">
                                    {formatPrice(product.originalPrice)}
                                  </span>
                                )}
                                <span className="font-title-md text-title-md font-bold text-on-surface">
                                  {formatPrice(product.price)}
                                </span>
                              </div>
                              <span className="font-label-sm text-label-sm text-on-surface-variant">تومان</span>
                            </div>
                            <button
                              onClick={() => addToCart({
                                id: product.id,
                                title: product.title,
                                brand: product.brand,
                                price: product.price,
                                originalPrice: product.originalPrice,
                                shade: product.shade || (parsedShades[0]?.name ?? 'استاندارد'),
                                image: product.image,
                              })}
                              className="w-full py-2.5 rounded-full bg-inverse-surface hover:bg-primary text-surface-container-lowest font-label-md text-label-md transition-all flex items-center justify-center gap-2 shadow-sm"
                            >
                              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                              <span>خرید سریع</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
