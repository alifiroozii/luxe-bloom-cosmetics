import re
import os
from jsx_cleaner import clean_html_to_jsx

with open('/Users/alifiroozi/ali/motion/motion3/stitch_raw/catalog.html') as f:
    raw_html = f.read()

m = re.search(r'<main[^>]*>(.*?)</main>', raw_html, re.DOTALL)
jsx_body = clean_html_to_jsx(m.group(1))

# Links
jsx_body = re.sub(r'href="#"\s+data-path="home"', 'href="/"', jsx_body)
jsx_body = re.sub(r'href="#"\s+data-path="product-dior"', 'href="/product"', jsx_body)
jsx_body = re.sub(r'href="#"\s+data-path="cart"', 'href="/checkout"', jsx_body)

# Replace product link cards to /product
jsx_body = re.sub(r'href="#"\s+className="group', 'href="/product" className="group', jsx_body)
jsx_body = re.sub(r'<a\s+className="block\s+overflow-hidden"\s+href="#"', r'<Link className="block overflow-hidden" href="/product"', jsx_body)

# Products list for add to cart
products = [
    {"id": "cat-1", "title": "کرم‌پودر فوراور اسکین گلو ۲۴ ساعته", "brand": "DIOR", "price": 4100000, "shade": "2N Neutral"},
    {"id": "cat-2", "title": "رژ لب جامد پاور بولت الترا مات", "brand": "HUDA BEAUTY", "price": 1850000, "shade": "Interview"},
    {"id": "cat-3", "title": "سرم هیالورونیک اسید ۲٪ به همراه B5", "brand": "THE ORDINARY", "price": 1150000, "shade": "۳۰ میل"},
    {"id": "cat-4", "title": "برق لب شاین گلاس بامب یونیورسال", "brand": "FENTY BEAUTY", "price": 1980000, "shade": "Fenty Glow"},
    {"id": "cat-5", "title": "سرم تخصصی بازسازی شب ادونسد نایت ریپیر", "brand": "ESTEE LAUDER", "price": 4850000, "shade": "۵۰ میل"},
    {"id": "cat-6", "title": "ریمل حجم‌دهنده و فرکننده دیورشو آیکونیک", "brand": "DIOR", "price": 2650000, "shade": "مشکی عمیق"},
    {"id": "cat-7", "title": "پودر بیک و فیکس ایزی بیک فیلتردار", "brand": "HUDA BEAUTY", "price": 2400000, "shade": "Pound Cake"},
    {"id": "cat-8", "title": "کرم آبرسان سوپریم پلاس سلولار یوث", "brand": "ESTEE LAUDER", "price": 5200000, "shade": "۵۰ میل"},
]

counter = 0
def add_to_cart_repl(match):
    global counter
    p = products[counter % len(products)]
    counter += 1
    return f'<button onClick={{() => addToCart({{ id: "{p["id"]}", title: "{p["title"]}", brand: "{p["brand"]}", price: {p["price"]}, shade: "{p["shade"]}" }})}} className="{match.group(1)}">{match.group(2)}</button>'

jsx_body = re.sub(
    r'<button\s+className="([^"]*bg-primary[^"]*)"\s*>([^<]*افزودن به سبد[^<]*)</button>',
    add_to_cart_repl,
    jsx_body
)

# Wishlist button clicks
jsx_body = re.sub(
    r'<button\s+className="([^"]*wishlist-btn[^"]*)"[^>]*>',
    r'<button onClick={() => toggleWishlist("cat-wishlist")} className="\1">',
    jsx_body
)

# Clean any remaining onclick
jsx_body = re.sub(r'onclick="[^"]*"', '', jsx_body)

os.makedirs('/Users/alifiroozi/ali/motion/motion3/src/app/catalog', exist_ok=True)

catalog_page_code = f"""'use client';

import React, {{ useState }} from 'react';
import Link from 'next/link';
import {{ useCart }} from '../../context/CartContext';

export default function CatalogPage() {{
  const {{ addToCart, toggleWishlist, wishlist }} = useCart();
  const [selectedSkinType, setSelectedSkinType] = useState('all');
  const [inStockOnly, setInStockOnly] = useState(true);
  const [priceRange, setPriceRange] = useState(6500000);
  const [selectedSort, setSelectedSort] = useState('newest');

  return (
    <main className="w-full pt-44 bg-surface min-h-screen">
      {jsx_body}
    </main>
  );
}}
"""

with open('/Users/alifiroozi/ali/motion/motion3/src/app/catalog/page.jsx', 'w', encoding='utf-8') as f:
    f.write(catalog_page_code)

print("src/app/catalog/page.jsx regenerated cleanly!")
