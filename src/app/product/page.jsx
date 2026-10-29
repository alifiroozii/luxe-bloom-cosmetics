'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';

export default function ProductDetailPage() {
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedShade, setSelectedShade] = useState('0N Neutral (پوست روشن و متعادل)');
  const [selectedVolume, setSelectedVolume] = useState('30ml');
  const [priceStr, setPriceStr] = useState('۳٬۲۵۰٬۰۰۰');
  const [unitPrice, setUnitPrice] = useState(3250000);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [activeThumb, setActiveThumb] = useState('main');
  const [productData, setProductData] = useState(null);

  React.useEffect(() => {
    async function loadProduct() {
      try {
        const res = await fetch('/api/products/prod-dior-glow');
        const data = await res.json();
        if (data.success && data.product) {
          setProductData(data.product);
        }
      } catch (err) {
        console.error('Error fetching product from Prisma:', err);
      }
    }
    loadProduct();
  }, []);

  const handleVolumeChange = (vol, pStr, num) => {
    setSelectedVolume(vol);
    setPriceStr(pStr);
    setUnitPrice(num);
  };

  const handleAddToCart = () => {
    addToCart({
      id: `dior-forever-${selectedVolume}-${selectedShade.slice(0, 2)}`,
      title: 'کرم پودر مات و با دوام ۲۴ ساعته دیور فواور',
      brand: 'DIOR',
      shade: `${selectedShade} • ${selectedVolume}`,
      price: unitPrice,
      originalPrice: unitPrice * 1.15,
      quantity: quantity,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGSX1ZeAKBbndAw0Pu6zuNnaTQGx114Yg70n61U',
    });
  };

  const scrollSlider = (direction) => {
    const container = document.getElementById('complementary-slider');
    if (!container) return;
    const amount = direction === 'next' ? -340 : 340;
    container.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <main className="w-full pt-44 bg-surface min-h-screen">
      <div className="flex flex-col w-full">

<section className="max-w-7xl mx-auto w-full px-margin-lg py-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm font-label-md text-label-md text-on-surface-variant">
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs flex-wrap">
<a className="hover:text-primary transition-colors" data-path="home" href="#">خانه</a>
<span className="material-symbols-outlined text-[16px] text-outline rotate-180">chevron_right</span>
<a className="hover:text-primary transition-colors" data-path="makeup" href="#">آرایش صورت</a>
<span className="material-symbols-outlined text-[16px] text-outline rotate-180">chevron_right</span>
<a className="hover:text-primary transition-colors" data-path="foundation" href="#">کرم پودر و بی بی کرم</a>
<span className="material-symbols-outlined text-[16px] text-outline rotate-180">chevron_right</span>
<span className="text-on-surface font-bold">کرم پودر مات دیور فواور</span>
</nav>
<div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-1 rounded-full text-primary">
<span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm font-semibold">موجودی محدود در انبار تهران (تنها ۴ عدد)</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto w-full px-margin-lg pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">

<div className="lg:col-span-6 flex flex-col gap-space-lg order-2 lg:order-1">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm font-bold text-primary tracking-wide">دیور | DIOR</span>
<span className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-space-sm py-0.5 rounded-full font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                اصالت تضمین‌شده
              </span>
</div>
<div className="flex items-center gap-space-xs">
<button className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface hover:text-primary hover:bg-surface-container flex items-center justify-center transition-all shadow-sm" title="افزودن به علاقه‌مندی‌ها">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
<button className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface hover:text-primary hover:bg-surface-container flex items-center justify-center transition-all shadow-sm" title="اشتراک‌گذاری">
<span className="material-symbols-outlined text-[20px]">share</span>
</button>
</div>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold leading-tight mt-space-xs">
            کرم پودر مات و با دوام ۲۴ ساعته دیور فواور
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant font-normal">
            Dior Forever Clean Matte High-Perfection 24H Foundation SPF 20
          </p>
</div>

<div className="flex items-center gap-space-md bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
<div className="flex items-center gap-space-xs text-secondary">
<div className="flex text-secondary">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
</div>
<span className="font-label-lg text-label-lg font-bold text-on-surface mr-1">۴.۸</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">(از ۵)</span>
</div>
<div className="h-4 w-px bg-surface-container-highest"></div>
<a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1" href="#reviews-section">
<span>۱۲۸ نظر ثبت‌شده خریداران</span>
<span className="material-symbols-outlined text-[16px]">arrow_downward</span>
</a>
<div className="h-4 w-px bg-surface-container-highest"></div>
<span className="font-label-sm text-label-sm text-on-surface-variant">۹۴٪ رضایت از ماندگاری</span>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-title-md text-title-md text-on-surface font-semibold">انتخاب طیف رنگی:</span>
<span className="font-title-md text-title-md text-primary font-bold" id="selected-shade-title">{selectedShade}</span>
</div>
<button className="font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">colorize</span>
              راهنمای انتخاب رنگ پوست
            </button>
</div>

<div className="flex items-center gap-space-md flex-wrap pt-space-xs">

<button className="shade-btn group flex flex-col items-center gap-1.5 focus:outline-none" data-shade="0N" onClick={() => setSelectedShade("0N Neutral (پوست روشن و متعادل)")}>
<span className="w-10 h-10 rounded-full shadow-md transition-transform group-hover:scale-110 flex items-center justify-center p-0.5 bg-primary">
<span className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: "#F8EDE3" }}></span>
</span>
<span className="font-label-sm text-label-sm font-bold text-primary">0N</span>
</button>

<button className="shade-btn group flex flex-col items-center gap-1.5 focus:outline-none" data-shade="1W" onClick={() => setSelectedShade("1W Warm (روشن با تناژ طلایی-گرم)")}>
<span className="w-10 h-10 rounded-full shadow-md transition-transform group-hover:scale-110 flex items-center justify-center p-0.5 bg-transparent hover:bg-surface-container-high">
<span className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: "#ECCFBA" }}></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-on-surface">1W</span>
</button>

<button className="shade-btn group flex flex-col items-center gap-1.5 focus:outline-none" data-shade="2CR" onClick={() => setSelectedShade("2CR Cool Rosy (گندمی روشن با تناژ رز خنک)")}>
<span className="w-10 h-10 rounded-full shadow-md transition-transform group-hover:scale-110 flex items-center justify-center p-0.5 bg-transparent hover:bg-surface-container-high">
<span className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: "#E4BEA7" }}></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-on-surface">2CR</span>
</button>

<button className="shade-btn group flex flex-col items-center gap-1.5 focus:outline-none" data-shade="3N" onClick={() => setSelectedShade("3N Neutral (گندمی متوسط طبیعی)")}>
<span className="w-10 h-10 rounded-full shadow-md transition-transform group-hover:scale-110 flex items-center justify-center p-0.5 bg-transparent hover:bg-surface-container-high">
<span className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: "#CCA086" }}></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-on-surface">3N</span>
</button>

<button className="shade-btn group flex flex-col items-center gap-1.5 focus:outline-none" data-shade="4W" onClick={() => setSelectedShade("4W Warm (سبزه جذاب و کاراملی)")}>
<span className="w-10 h-10 rounded-full shadow-md transition-transform group-hover:scale-110 flex items-center justify-center p-0.5 bg-transparent hover:bg-surface-container-high">
<span className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: "#B68B6E" }}></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-on-surface">4W</span>
</button>
</div>
<div className="bg-surface-container-low px-space-md py-space-sm rounded-xl flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span>بافت مایع بر پایه عصاره گل بنفشه و زنبق با ماندگاری کامل در برابر تعریق و گرما.</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-sm">
<span className="font-title-md text-title-md text-on-surface font-semibold">حجم محصول:</span>
<div className="grid grid-cols-2 gap-space-md">
<button className={`vol-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all ${selectedVolume === "30ml" ? "bg-primary text-on-primary shadow-sm" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => handleVolumeChange("30ml", "۳٬۲۵۰٬۰۰۰", 3250000)}>
<div className="flex items-center justify-between w-full">
<span className="font-title-md text-title-md font-bold">۳۰ میلی‌لیتر (استاندارد)</span>
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<span className="font-label-sm text-label-sm opacity-90 mt-1">مناسب مصرف روزانه ۴ تا ۶ ماه</span>
</button>
<button className={`vol-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all ${selectedVolume === "50ml" ? "bg-primary text-on-primary shadow-sm" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => handleVolumeChange("50ml", "۴٬۷۸۰٬۰۰۰", 4780000)}>
<div className="flex items-center justify-between w-full">
<span className="font-title-md text-title-md font-bold">۵۰ میلی‌لیتر (صرفه‌جویی)</span>
<span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full font-bold">ارزش خرید بالا</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">حجم اختصاصی پرفروش</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-md flex flex-col gap-space-lg">
<div className="flex items-center justify-between flex-wrap gap-space-md">
<div>
<div className="flex items-center gap-space-xs font-label-md text-label-md text-outline">
<span>قیمت اصلی:</span>
<span className="line-through">۳٬۸۵۰٬۰۰۰ تومان</span>
<span className="bg-primary-fixed text-on-primary-fixed font-bold px-2 py-0.5 rounded-full font-label-sm text-label-sm">۱۵٪ تخفیف ویژه</span>
</div>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-md text-headline-md font-bold text-primary" id="display-price">{priceStr}</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">تومان</span>
</div>
</div>

<div className="flex items-center bg-surface-container-low rounded-full p-1 shadow-inner">
<button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">remove</span>
</button>
<span className="font-label-md text-label-md font-bold text-on-surface px-space-md" id="qty-val">{quantity.toLocaleString("fa-IR")}</span>
<button onClick={() => setQuantity(q => q + 1)} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>

<div className="flex items-center gap-space-md">
<button onClick={handleAddToCart} className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-label-lg py-3.5 px-space-xl rounded-full transition-all shadow-md flex items-center justify-center gap-space-xs">
<span className="material-symbols-outlined text-[22px] transition-transform group-hover:-translate-x-1">shopping_bag</span>
<span>افزودن به سبد خرید لوکس</span>
</button>
<button className="bg-surface-container-high hover:bg-primary-fixed text-on-surface hover:text-on-primary-fixed p-4 rounded-full transition-all flex items-center justify-center shadow-sm" title="خرید مستقیم در ۱ ثانیه">
<span className="material-symbols-outlined text-[22px]">flash_on</span>
</button>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
<div className="w-9 h-9 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm shrink-0">
<span className="material-symbols-outlined text-[20px]">local_shipping</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">ارسال اکسپرس رایگان</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">تحویل امروز در تهران و کرج</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
<div className="w-9 h-9 rounded-full bg-surface-container-lowest text-secondary flex items-center justify-center shadow-sm shrink-0">
<span className="material-symbols-outlined text-[20px]">workspace_premium</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">بچ‌کد اختصاصی فرانسه</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">تضمین اصالت با سریال نامبر</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col gap-space-md order-1 lg:order-2">

<div className="relative w-full aspect-[4/5] rounded-3xl bg-surface-container-lowest overflow-hidden shadow-md flex items-center justify-center group">

<img alt="کرم پودر دیور فواور" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" data-alt="High luxury Dior Forever Matte Foundation frosted glass bottle with deep navy velvet cap, resting on natural warm sandstone marble in a warm editorial atelier studio lighting, soft rose tinted reflections, hyper-realistic, macro product photography" id="main-product-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe37TEnJG1TYkNymGEtB21fvt8cYCef5_7IXYTN0o07ErqycAywfLrxJMmtaFKfQzdZNRKAweJACT5jwpYTPDWuUUBBP9TPLT21fGUrHEyHw04-dNqV0fdycfIgf8KtcDCa3TG2IMzE_M_yS00bxmpV1FBMGxDz7sI4_s18l4khQ67kRSXwz_5BIte8tk-lMAWknq2YCapvINsS81L2qI9Cbi51HweTCYVvHnjAVM"/>

<div className="absolute top-space-md right-space-md bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-primary text-[18px] animate-spin">360</span>
<span>نمای ۳۶۰ درجه و زوم ماکرو</span>
</div>

<div className="absolute top-space-md left-space-md bg-primary text-on-primary px-space-md py-1 rounded-full font-label-sm text-label-sm font-semibold shadow-md">
            جلوه مات مخملی (Matte)
          </div>

<button className="absolute bottom-space-md left-space-md w-11 h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface flex items-center justify-center shadow-sm hover:bg-surface-container-lowest transition-all" title="بزرگ‌نمایی تصویر">
<span className="material-symbols-outlined text-[22px]">zoom_in</span>
</button>

<div className="absolute bottom-space-md right-space-md bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-2 rounded-2xl shadow-sm flex items-center gap-space-sm max-w-xs">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
<span className="material-symbols-outlined text-[16px]">spa</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold text-on-surface">ترکیب ۸۶٪ عصاره گیاهی</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">محافظت‌کننده پوست با اس‌پی‌اف ۲۰</span>
</div>
</div>
</div>

<div className="grid grid-cols-5 gap-space-sm">

<button className="thumb-btn aspect-square rounded-2xl bg-surface-container-lowest p-1 shadow-sm transition-all outline-2 outline-primary" onClick={() => setActiveThumb("main")}>
<img alt="نمای روبرو دیور فواور" className="w-full h-full object-cover rounded-xl" data-alt="Frontal shot of Dior Forever foundation bottle with elegant Christian Dior silver embossed lettering on beige backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCny3L7q7FA0hhqkmOKHQhQBUzcCe4dMkrJXDOfuxaLmIr1jfTDwFmxMJ5g1oY-qi7PLBh4ScMYbey9aX92lTJR34Ci41Woc2o2Wgvt1LV0cPtWwTqJzxDBUh80VVeV6d3BDgSzZdRGBagVcGfrCnDgUygKbUGgy-T2NBF1PSqL_PbrF2InSNZd5j9QQoTcHXwPNMBChzWe8TvxAepnE-OWiz36eyuyqjkAx6hWsNo"/>
</button>

<button className="thumb-btn aspect-square rounded-2xl bg-surface-container-lowest p-1 shadow-sm transition-all hover:opacity-90" onClick={() => setActiveThumb("angle")}>
<img alt="نمای زاویه‌دار" className="w-full h-full object-cover rounded-xl" data-alt="Side angle perspective of Dior luxury foundation glass packaging showing pump dispenser and cap texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATElr1udpviPGRTjmIXhzxsOogZrskxIaLjCahOLLgPJ_DizaT7OZGc_rcduASKTtvYwAXYpsKonynpfsExh99Vr06fGApCps7tY_DUcHqtzX5SKmvMKPiF24s55WJIyjXZVABMYw2F5v_ZYimm_pXojleFL3fPJkmV4rEHa-MR0OqSFTiO9SnxixkF5PGGsdLtavU0Hyb5Y8ynYHxX7p59ZhkF7GfkYIYDHFG3HQ"/>
</button>

<button className="thumb-btn aspect-square rounded-2xl bg-surface-container-lowest p-1 shadow-sm transition-all hover:opacity-90" onClick={() => setActiveThumb("texture")}>
<img alt="بافت مایع مخملی" className="w-full h-full object-cover rounded-xl" data-alt="Macro close-up liquid drop and smooth creamy texture of velvet foundation being smeared on frosted glass dish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfYo_xQc6moYNWTaTX7LCAfHvUjHI5TnewCHE3S0UB9O7hj28xufImUjKP8ivkt8CQF1qOuOuMCCJkUg3Y5HyBOAnmg9SsXpNHl7AZBg65eNMtQ_OmS4xzKWlsEPrcJNkzNJTW0lfFk8-AthOrgChN-ppI0cLfpAZk6virYGG5VVWHN6u16oq6uJ9ysf8iN5x5sFI2o3HDzCggbNgAi_SCiVreQ-gEYaZK4E2ftAw"/>
</button>

<button className="thumb-btn aspect-square rounded-2xl bg-surface-container-lowest p-1 shadow-sm transition-all hover:opacity-90" onClick={() => setActiveThumb("skin")}>
<img alt="سواچ روی پوست طبیعی" className="w-full h-full object-cover rounded-xl" data-alt="Five smooth foundation shade stripes swatched side by side on arm of Iranian woman with glowing healthy complexion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXjdkT-Z3wF_fORcpHQchaNQhdDaedUp9NkRu9J6wVv3JsQRYR5WGHLHwiOZEF3-Uv49WgwkIM04cfLnOT03QFeWTxl2KP2ta6KmadQ-rYZKHTl11dj19fgbm5szv9_xcEgOwya3KEBFHvjq3ZFg-tYwo7-bNOu0VW--zjSpg9KlZucIw3UL0MJDlsKKOhXai-LUrtvUxuBsCQKUnfDcmAst4wDngcRi-B-3rDRBI"/>
</button>

<button className="thumb-btn aspect-square rounded-2xl bg-surface-container-lowest p-1 shadow-sm transition-all hover:opacity-90" onClick={() => setActiveThumb("box")}>
<img alt="جعبه و بسته‌بندی اورجینال" className="w-full h-full object-cover rounded-xl" data-alt="Dior navy and silver couture embossed product packaging box sitting gracefully next to open foundation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWSgkhe_fm3NtwKapE9_7JYl7jpXxmC-e6mZFOCO-LXbGojo9t61dAx35gRIrhkL53r69QFCOhC6GwFdNXgyLkgmBQzdkyRdD2gBrb0Z0qxKKyC_bhVNm3GZFpw2JT9003js5jwQL_9qZUrNlF1fT7HVFxggtTQCoRir6KBdZoiG6wHSywJazCFApaO1pchtOZ96gPDBVT-03CAlILk4Jhc8Y9StEP_OE7AKRLhSo"/>
</button>
</div>

<div className="bg-gradient-to-l from-primary/10 via-surface-container-lowest to-surface-container-lowest p-space-md rounded-2xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[24px]">palette</span>
</div>
<div>
<span className="font-title-md text-title-md font-bold text-on-surface block">تست مجازی هوشمند رنگ روی چهره</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">دوربین سلفی خود را روشن کنید و رنگ متناسب با تناژ پوستتان را ببینید.</span>
</div>
</div>
<button className="bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary px-space-md py-2 rounded-full font-label-md text-label-md transition-all shrink-0">
            اجرای تست AR
          </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto w-full px-margin-lg py-space-xl" id="reviews-section">

<div className="flex items-center gap-space-sm overflow-x-auto pb-space-sm">
<button id="tab-btn-specs" className={`tab-btn px-space-lg py-3 rounded-full font-label-md text-label-md transition-all ${activeTab === "specs" ? "bg-inverse-surface text-on-primary shadow-sm font-bold" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => setActiveTab("specs")}>
        مشخصات فنی و اصالت
      </button>
<button id="tab-btn-how-to-use" className={`tab-btn px-space-lg py-3 rounded-full font-label-md text-label-md transition-all ${activeTab === "how-to-use" ? "bg-inverse-surface text-on-primary shadow-sm font-bold" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => setActiveTab("how-to-use")}>
        راهنمای مصرف و نکات آرایشی
      </button>
<button id="tab-btn-ingredients" className={`tab-btn px-space-lg py-3 rounded-full font-label-md text-label-md transition-all ${activeTab === "ingredients" ? "bg-inverse-surface text-on-primary shadow-sm font-bold" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => setActiveTab("ingredients")}>
        ترکیبات و فرمولاسیون زیستی
      </button>
<button id="tab-btn-reviews" className={`tab-btn px-space-lg py-3 rounded-full font-label-md text-label-md transition-all ${activeTab === "reviews" ? "bg-inverse-surface text-on-primary shadow-sm font-bold" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => setActiveTab("reviews")}>
<span>نظرات خریداران</span>
<span className="bg-primary-fixed text-on-primary-fixed px-1.5 py-0.2 rounded-full text-label-sm font-bold">۱۲۸</span>
</button>
</div>

<div id="tab-content-specs" className={`tab-pane ${activeTab === "specs" ? "" : "hidden"}`}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">برند سازنده</span>
<span className="font-title-md text-title-md font-bold text-on-surface">کریستین دیور (Christian Dior Paris)</span>
<span className="font-body-sm text-body-sm text-secondary">فرانسه - پاریس</span>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">پوشانندگی و فینیشینگ</span>
<span className="font-title-md text-title-md font-bold text-on-surface">کاور متوسط رو به کامل (قابل ارتقا)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">مات مخملی طبیعی بدون حس سنگینی</span>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">فاکتور محافظت در برابر آفتاب</span>
<span className="font-title-md text-title-md font-bold text-on-surface">SPF 20 - PA+++</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">محافظت در برابر اشعه‌های UVA و UVB</span>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">نوع پوست سازگار</span>
<span className="font-title-md text-title-md font-bold text-on-surface">پوست‌های نرمال، مختلط و چرب</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">فرمول غیر کومدوژنیک (Non-comedogenic)</span>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">ماندگاری بالینی</span>
<span className="font-title-md text-title-md font-bold text-on-surface">۲۴ ساعت ماندگاری پیوسته</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">مقاوم در برابر تعریق، رطوبت و تماس ماسک</span>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">شماره پروانه بهداشتی و اصالت</span>
<span className="font-title-md text-title-md font-bold text-on-surface">IRC: 14820948301844</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">همراه با برچسب اصالت سازمان غذا و دارو</span>
</div>
</div>
</div>

<div id="tab-content-how-to-use" className={`tab-pane ${activeTab === "how-to-use" ? "" : "hidden"}`}>
<div className="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
            ۱
          </div>
<span className="font-title-md text-title-md font-bold text-on-surface">آماده‌سازی پوست (Prepping)</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            قبل از اعمال، پوست را به کمک سرم آبرسان و مرطوب‌کننده ملایم تازه کنید. اجازه دهید کرم مرطوب‌کننده ۲ دقیقه جذب شود.
          </p>
</div>
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
            ۲
          </div>
<span className="font-title-md text-title-md font-bold text-on-surface">نحوه زدن و بلند کردن (Blending)</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            یک پمپ کامل از کرم‌پودر را روی پشت دست بریزید. با استفاده از براش متراکم فونداسیون یا بیوتی بلندر نمدار، از مرکز چهره به سمت بیرون پخش نمایید.
          </p>
</div>
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
            ۳
          </div>
<span className="font-title-md text-title-md font-bold text-on-surface">تثبیت نهایی (Setting)</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            در نواحی تی‌زون (پیشانی و بینی) از مقدار بسیار کمی پودر ترنسلوسنت دیور برای مات‌ماندن مخملی تا پایان شب استفاده نمایید.
          </p>
</div>
</div>
</div>

<div id="tab-content-ingredients" className={`tab-pane ${activeTab === "ingredients" ? "" : "hidden"}`}>
<div className="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm flex flex-col gap-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[30px]">eco</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">فرمولاسیون پاک با ۸۶٪ پایه عصاره‌های گلی</span>
<p className="font-body-md text-body-md text-on-surface-variant">عاری از پارابن، روغن‌های معدنی سنگین و فتالات با احترام به پوست و طبیعت</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-surface-container-low p-space-md rounded-2xl">
<span className="font-title-md text-title-md font-bold text-primary block mb-1">عصاره گل بنفشه فرنگی (Wild Pansy)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">تقویت سیستم آب‌رسانی طبیعی پوست و جلوگیری از خط افتادن کرم‌پودر دور خطوط خنده.</p>
</div>
<div className="bg-surface-container-low p-space-md rounded-2xl">
<span className="font-title-md text-title-md font-bold text-primary block mb-1">عصاره میوه گل رز (Rose Hip)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">محافظت‌کننده آنتی‌اکسیدانی و جمع‌کننده ملایم منافذ باز پوست در طول روز.</p>
</div>
<div className="bg-surface-container-low p-space-md rounded-2xl">
<span className="font-title-md text-title-md font-bold text-primary block mb-1">عصاره گل زنبق فلورانسی (Iris Extract)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">محافظت در برابر آسیب‌های ناشی از اشعه نور آبی نمایشگرها و آلودگی شهری.</p>
</div>
</div>
<div className="font-body-sm text-body-sm text-outline leading-loose bg-surface-container-low/50 p-space-md rounded-xl">
          Aqua (Water), Methyl Trimethicone, Isododecane, Alcohol, Butylene Glycol, Titanium Dioxide, Peg-9 Polydimethylsiloxyethyl Dimethicone, Ethylhexyl Methoxycinnamate, Iris Florentina Root Extract, Viola Tricolor Extract, Rosa Multiflora Fruit Extract.
        </div>
</div>
</div>

<div id="tab-content-reviews" className={`tab-pane ${activeTab === "reviews" ? "" : "hidden"}`}>
<div className="flex flex-col gap-space-xl">

<div className="bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
<div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
<span className="font-display-hero text-display-hero text-on-surface font-bold leading-none">۴.۸</span>
<div className="flex text-secondary my-space-xs">
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
</div>
<span className="font-body-md text-body-md text-on-surface-variant">براساس ۱۲۸ بازخورد ثبت شده</span>
<button className="mt-space-md bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 px-space-lg rounded-full transition-all shadow-sm">
              ثبت تجربه و نظر شما
            </button>
</div>

<div className="lg:col-span-8 flex flex-col gap-space-xs">
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
<span className="w-12">۵ ستاره</span>
<div className="flex-1 h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{ width: "86%" }}></div>
</div>
<span className="w-10 text-left font-bold text-on-surface">۸۶٪</span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
<span className="w-12">۴ ستاره</span>
<div className="flex-1 h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{ width: "10%" }}></div>
</div>
<span className="w-10 text-left font-bold text-on-surface">۱۰٪</span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
<span className="w-12">۳ ستاره</span>
<div className="flex-1 h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{ width: "۳%" }}></div>
</div>
<span className="w-10 text-left font-bold text-on-surface">۳٪</span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
<span className="w-12">۲ ستاره</span>
<div className="flex-1 h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{ width: "۱%" }}></div>
</div>
<span className="w-10 text-left font-bold text-on-surface">۱٪</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-bold text-on-surface">تصاویر ارسالی خریداران (تست رنگ و بافت روی پوست)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">نمایش ۴۴ عکس تایید شده</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-sm">
<div className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
<img alt="عکس ارسالی کاربر" className="w-full h-full object-cover" data-alt="Customer selfie holding the foundation bottle showing flawlessly mattified finish on olive Persian skin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtZJdyWqKrvqorb6DVJzbgik7O2RHFJc_iriDjFlsFa7z_2Y4ChWkyjAGlOwB_0VXW8X1TQCVQBxwQF0m1jwCUz_ox3Toc-FrhB0_ZuAKp3nPbRzC91ry0r_9K7X-13vn0WTOs3CsapxjSIpNoj6sdUUm1vc26UxUY2shLIIjIkS4ste-FGDyuUHBt3_jNtjYVg1bJ0UFcXnwXTuZ_CZd5yS61QXhkm5vuBr11XFM"/>
</div>
<div className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
<img alt="سواچ نور طبیعی" className="w-full h-full object-cover" data-alt="Close up wrist swatch showing shade 1W and 2CR in natural daylight by buyer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfoW1o0NQmrorF_Xksbn6htwGhRp-nLy5c8Pr42gTYEgnMzcNjvpeZOO_2OZIJKAKVTFj7a1Bt6R0l2aRTKoFCvx2b-KmdykG06iqLuyViD6DaqUMVpsHeUoJwwKxOfhjXkRbKSvnP37ANn__5EktljLCKO-8AzxKuL1sr7Hl9FPqKfDO0bgFR0o0Z1P5RmJf0kc2TIb0WuqZDdCTy9RuOMXGFBeFe2VM9Rd7TEg"/>
</div>
<div className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
<img alt="میز آرایش خریدار" className="w-full h-full object-cover" data-alt="Luxury vanity mirror setup with Dior forever matte foundation and powder brush" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyO-9G93yTtoh5qjJJfzxYDTM0onoRWepEEdrThwfIE8xHGd2CtANa16Bxd2aPpq4FWLoTt0rlJ4NV43kby1S3hc78Q4RBtBzWYi_zyaAOclTrplGhN4mXXd_2ad5uMy_DxvFcPTm59UtAQQZ3NuQBX4seXeSAdrMVttRm6aRodRACHGqLSlEs1Mgnr1vpRoppjEhwSWDLDSD74wPqv-XmqTpkaYeV5oc_jsG3yvQ"/>
</div>
<div className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
<img alt="قبل و بعد کاور" className="w-full h-full object-cover" data-alt="Before and after cheek coverage showing invisible pores and redness cancellation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAinLTf3efDnN5lxkm1-TJWmR6sru4VaYbU661wgUiExGMze18kfSibdafoU3DqgiPku0wctrSpKulQ5I8UXC05OMWukWFNJTb-b2iBrLj7RvxfS3cb5P35uVhgpPJftK25M6Ag9EO1kowxrYBn5uU5fNGmVj10YFeejBJRY7Vj9bBOutxPflClPBbdv8efmHUI5yk9m9zgMuxd1NjIx5dskjMPv3D2UGODie5Mrs0"/>
</div>
<div className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
<img alt="آنباکسینگ بسته‌بندی" className="w-full h-full object-cover" data-alt="Unboxing video still shot of Luxe Bloom packaged Dior foundation with ribbons" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-nh6gGsVuKzqhoL9iwmqEhltZ102iblnWvCLZ3E8snpAYxbkbH3i9RcG-irDDPTh1AhVcYmerZpRxf6azzc76vf1LdfsWg7cn81XOQLz34wOhuYl0AKDFuECnBZNRJS5orrI_kge13S14FmO_HFdSa3PdRMLqoQ2pL6A_4Z3AzTJIZR9j2LlPH1BujXNSZxmmVgQ3HwIvHMzJQKJDHJeIPy6rnZkYto9t6jdslGM"/>
</div>
<div className="aspect-square rounded-2xl bg-surface-container-low flex flex-col items-center justify-center text-primary hover:bg-surface-container transition-colors cursor-pointer">
<span className="material-symbols-outlined text-[32px]">photo_library</span>
<span className="font-label-sm text-label-sm mt-1 font-bold">+۳۹ تصویر دیگر</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed font-bold flex items-center justify-center">
                    س.م
                  </div>
<div>
<span className="font-label-lg text-label-lg font-bold text-on-surface block">سارا محتشمی</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
                      خریدار شماره رنگ 1W
                    </span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">۳ روز پیش</span>
</div>
<div className="flex text-secondary mt-1">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-space-xs">
                واقعاً ارزش هزینه کردن رو داره! پوست من مختلطه و هر کرم‌پودری بعد از ۳ ساعت براق می‌شد یا می‌ماسید. این نسخه دیور تا شب کاملاً مخملی و مات موند بدون این که حس خشکی یا کیکی بده. ارسال لوکس بلوم هم با بسته‌بندی عطرآگین شگفت‌انگیز بود.
              </p>
</div>
<div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>آیا این نظر مفید بود؟</span>
<div className="flex items-center gap-space-md">
<button className="flex items-center gap-1 hover:text-primary"><span className="material-symbols-outlined text-[16px]">thumb_up</span> (۱۴)</button>
<button className="flex items-center gap-1 hover:text-error"><span className="material-symbols-outlined text-[16px]">thumb_down</span> (۰)</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold flex items-center justify-center">
                    ن.ر
                  </div>
<div>
<span className="font-label-lg text-label-lg font-bold text-on-surface block">نیلوفر رادمهر</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
                      خریدار شماره رنگ 0N
                    </span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">۱ هفته پیش</span>
</div>
<div className="flex text-secondary mt-1">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-space-xs">
                بچ کد اصالت فرانسه رو در سایت چک‌فرش بررسی کردم و دقیقاً اورجینال با تاریخ تولید ۲۰۲۴ بود. رنگ 0N برای پوست‌های روشن و سفید برفی بهترین انتخابه چون تن زردی یا قرمزی نامتقارن نداره. بافتش بسیار سبکه.
              </p>
</div>
<div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>آیا این نظر مفید بود؟</span>
<div className="flex items-center gap-space-md">
<button className="flex items-center gap-1 hover:text-primary"><span className="material-symbols-outlined text-[16px]">thumb_up</span> (۱۹)</button>
<button className="flex items-center gap-1 hover:text-error"><span className="material-symbols-outlined text-[16px]">thumb_down</span> (۱)</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto w-full px-margin-lg py-space-xl">
<div className="flex items-end justify-between mb-space-lg">
<div>
<span className="font-label-sm text-label-sm text-primary font-bold tracking-wider block mb-1">تکمیل‌کننده آرایش بی‌نقص دیور</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">محصولات پیشنهادی مکمل و هماهنگ</h2>
</div>
<div className="flex items-center gap-space-sm">
<button onClick={() => scrollSlider("next")} className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface shadow-sm transition-all">
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<button onClick={() => scrollSlider("prev")} className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface shadow-sm transition-all">
<span className="material-symbols-outlined text-[20px]">arrow_back</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter" id="complementary-slider">

<div className="bg-surface-container-lowest p-space-md rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative aspect-square rounded-2xl bg-surface-container-low overflow-hidden mb-space-md">
<img alt="پرایمر مات‌کننده دیور" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dior Forever Skin Veil Primer bottle on warm beige stone base, soft focus minimalist luxury background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC66Bb4aN4Rfg_xn3k9SLK76xtN0mloVIlj8r1gTQahNZNarH5xDFVZjZlTGCzMTdVnZXa_8MoOX8DGAZEIOzF_cZ2VGMSGVa736mhANOUbgT6YUXwT84QvSWKebaGREaIlEqp-KOFgNxdsrZZ6eEIh-LPGusDzVWiOleEgyaurQRUFBJKW9kW_cYDo6YrTsJj-TP8YT6DsXvJ9x1CiDjomnlxpawhY47WOiuE4Ehg"/>
<span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-0.5 rounded-full font-label-sm text-label-sm text-on-surface">گام اول آرایش</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">دیور | DIOR</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mt-1">پرایمر مات‌کننده و آبرسان دیور اسکین ویل</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">ماندگاری فونداسیون را تا ۲۴ ساعت افزایش داده و منافذ پوست را محو می‌کند.</p>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-sm">
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">۲٬۱۵۰٬۰۰۰ تومان</span>
</div>
<button className="w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary flex items-center justify-center transition-all shadow-sm" title="افزودن سریع">
<span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative aspect-square rounded-2xl bg-surface-container-low overflow-hidden mb-space-md">
<img alt="پودر فیکس کوشن دیور" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dior Forever Cushion Powder compact case in couture quilted lid, loose setting powder with puff applicator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApEFP3_9nBapai0wzdQd7MOEsf34HHt1KGxAtxBsUgRgtoYYQ-mJCpzaew8-03-muZbwsfBkl42nnTYLUzWKLbboZ9r8p14NFw4c0t2a4Jv9SjttqKKmSz_Cywg1tqnKGChKV_N0DGUydP-TsA2fRg69Jbm0cgtbcks7Mc7x7OO6f8vLkjeZN65od7Cfrgo-p-bwo68ML9-_QAdZAuP8s8cGq8kzyTecYxFMr-H7w"/>
<span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-0.5 rounded-full font-label-sm text-label-sm text-on-surface">تثبیت نهایی</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">دیور | DIOR</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mt-1">پودر فیکس شیشه‌ای کوشن دیور کوتور</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">پودر فوق‌العاده نرم با بافت آب‌پایه برای جلوگیری کامل از خطوط زیر چشم.</p>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-sm">
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">۲٬۸۹۰٬۰۰۰ تومان</span>
</div>
<button className="w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary flex items-center justify-center transition-all shadow-sm" title="افزودن سریع">
<span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative aspect-square rounded-2xl bg-surface-container-low overflow-hidden mb-space-md">
<img alt="براش حرفه‌ای فونداسیون دیور" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dior Backstage Full Coverage Fluid Foundation Brush No 12 professional angled bristles on dark marble" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmaOg2Gu72sA-oQAAdP0BSSUrUXpAQUHXKLv3XYkOoTkFXAXS2R0oIUsPhyzwvDjzRtEj4jQNRBudHsNFrcL3VrvCTAbLPrLynWnix4u9VGnXVTZGpXc70HQjfyzoNsBoFJuwIelfP7VQu8vmmy9eXAWCNsM61pW8JCY_Elh97sMVPDliG8peNjrZ3Ymuix5OLIh51kPO5m-7-T5v_Hh5bcv5nz-Sac1_BJtG3444"/>
<span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-0.5 rounded-full font-label-sm text-label-sm text-on-surface">ابزار تخصصی</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">دیور | DIOR</span>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mt-1">براش فونداسیون حرفه‌ای دیور شماره ۱۲</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">طراحی ارگونومیک با الیاف متراکم و بسیار نرم برای پوشش‌دهی آینه‌ای بدون رگه.</p>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-sm">
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">۱٬۸۰۰٬۰۰۰ تومان</span>
</div>
<button className="w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary flex items-center justify-center transition-all shadow-sm" title="افزودن سریع">
<span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
</button>
</div>
</div>
</div>
</section>


</div>
    </main>
  );
}
