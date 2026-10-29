import re
from jsx_cleaner import clean_html_to_jsx

with open('/Users/alifiroozi/ali/motion/motion3/stitch_raw/home.html') as f:
    home_raw = f.read()

m_home = re.search(r'<main[^>]*>(.*?)</main>', home_raw, re.DOTALL)
home_jsx = clean_html_to_jsx(m_home.group(1))

# Tab buttons: replace the entire button tags cleanly
home_jsx = re.sub(
    r'<button[^>]*id="tab-skincare"[^>]*>',
    r'<button className={`tab-btn px-space-lg py-2 rounded-full font-label-md text-label-md transition-all ${activeTab === "skincare" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`} onClick={() => setActiveTab("skincare")}>',
    home_jsx
)
home_jsx = re.sub(
    r'<button[^>]*id="tab-makeup"[^>]*>',
    r'<button className={`tab-btn px-space-lg py-2 rounded-full font-label-md text-label-md transition-all ${activeTab === "makeup" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`} onClick={() => setActiveTab("makeup")}>',
    home_jsx
)
home_jsx = re.sub(
    r'<button[^>]*id="tab-fragrance"[^>]*>',
    r'<button className={`tab-btn px-space-lg py-2 rounded-full font-label-md text-label-md transition-all ${activeTab === "fragrance" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`} onClick={() => setActiveTab("fragrance")}>',
    home_jsx
)

# Tab contents
home_jsx = re.sub(
    r'<div[^>]*id="content-skincare"[^>]*>',
    r'<div className={`tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter ${activeTab === "skincare" ? "" : "hidden"}`} id="content-skincare">',
    home_jsx
)
home_jsx = re.sub(
    r'<div[^>]*id="content-makeup"[^>]*>',
    r'<div className={`tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter ${activeTab === "makeup" ? "" : "hidden"}`} id="content-makeup">',
    home_jsx
)
home_jsx = re.sub(
    r'<div[^>]*id="content-fragrance"[^>]*>',
    r'<div className={`tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter ${activeTab === "fragrance" ? "" : "hidden"}`} id="content-fragrance">',
    home_jsx
)

# Timer replacement
home_jsx = re.sub(r'<span[^>]*id="timerHours"[^>]*>[^<]*</span>',
                  r'<span className="font-headline-lg text-headline-lg text-white font-bold" id="timerHours">{toFarsi(timeLeft.hours)}</span>', home_jsx)
home_jsx = re.sub(r'<span[^>]*id="timerMinutes"[^>]*>[^<]*</span>',
                  r'<span className="font-headline-lg text-headline-lg text-white font-bold" id="timerMinutes">{toFarsi(timeLeft.minutes)}</span>', home_jsx)
home_jsx = re.sub(r'<span[^>]*id="timerSeconds"[^>]*>[^<]*</span>',
                  r'<span className="font-headline-lg text-headline-lg text-white font-bold" id="timerSeconds">{toFarsi(timeLeft.seconds)}</span>', home_jsx)

# Links replacement
home_jsx = re.sub(r'href="#"\s+data-path="catalog"', 'href="/catalog"', home_jsx)
home_jsx = re.sub(r'href="#"\s+data-path="makeup"', 'href="/catalog"', home_jsx)
home_jsx = re.sub(r'href="#"\s+data-path="skincare"', 'href="/catalog?cat=skincare"', home_jsx)
home_jsx = re.sub(r'href="#"\s+data-path="fragrance"', 'href="/catalog?cat=fragrance"', home_jsx)
home_jsx = re.sub(r'href="#"\s+data-path="haircare"', 'href="/catalog?cat=haircare"', home_jsx)
home_jsx = re.sub(r'href="#"\s+data-path="product-dior"', 'href="/product"', home_jsx)
home_jsx = re.sub(r'href="#"\s+data-path="cart"', 'href="/checkout"', home_jsx)

# Clean any remaining onclick
home_jsx = re.sub(r'onclick="[^"]*"', '', home_jsx)

home_page_code = f"""'use client';

import React, {{ useState, useEffect }} from 'react';
import Link from 'next/link';
import {{ useCart }} from '../context/CartContext';

export default function HomePage() {{
  const [activeTab, setActiveTab] = useState('skincare');
  const [timeLeft, setTimeLeft] = useState({{ hours: 14, minutes: 42, seconds: 18 }});
  const {{ addToCart }} = useCart();

  useEffect(() => {{
    const timer = setInterval(() => {{
      setTimeLeft(prev => {{
        if (prev.seconds > 0) return {{ ...prev, seconds: prev.seconds - 1 }};
        if (prev.minutes > 0) return {{ ...prev, minutes: 59, seconds: 59 }};
        if (prev.hours > 0) return {{ hours: prev.hours - 1, minutes: 59, seconds: 59 }};
        return prev;
      }});
    }}, 1000);
    return () => clearInterval(timer);
  }}, []);

  const toFarsi = (n) => {{
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(n).padStart(2, '0').split('').map(d => farsiDigits[parseInt(d)] || d).join('');
  }};

  return (
    <main className="w-full pt-44 bg-surface min-h-screen">
      {home_jsx}
    </main>
  );
}}
"""

with open('/Users/alifiroozi/ali/motion/motion3/src/app/page.jsx', 'w', encoding='utf-8') as f:
    f.write(home_page_code)
print("src/app/page.jsx regenerated cleanly!")
