import re
import os
from jsx_cleaner import clean_html_to_jsx

with open('/Users/alifiroozi/ali/motion/motion3/stitch_raw/product.html') as f:
    raw_html = f.read()

m = re.search(r'<main[^>]*>(.*?)</main>', raw_html, re.DOTALL)
jsx_body = clean_html_to_jsx(m.group(1))

# Breadcrumbs
jsx_body = re.sub(r'href="#"\s+data-path="home"', 'href="/"', jsx_body)
jsx_body = re.sub(r'href="#"\s+data-path="catalog"', 'href="/catalog"', jsx_body)
jsx_body = re.sub(r'href="#"\s+data-path="makeup"', 'href="/catalog"', jsx_body)

# Shade title text element
jsx_body = re.sub(
    r'<span[^>]*id="selected-shade-title"[^>]*>[^<]*</span>',
    r'<span className="font-title-md text-title-md text-primary font-bold" id="selected-shade-title">{selectedShade}</span>',
    jsx_body
)

# Replace shade onclicks
jsx_body = re.sub(
    r'onclick="changeShade\(\'([^\']+)\'[^)]*\)"',
    r'onClick={() => setSelectedShade("\1")}',
    jsx_body
)

# Volume buttons: replace cleanly
jsx_body = re.sub(
    r'<button[^>]*selectVolume\(this,\s*\'30ml\',\s*\'([^\']+)\'\)[^>]*>',
    r'<button className={`vol-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all ${selectedVolume === "30ml" ? "bg-primary text-on-primary shadow-sm" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => handleVolumeChange("30ml", "\1", 3250000)}>',
    jsx_body
)
jsx_body = re.sub(
    r'<button[^>]*selectVolume\(this,\s*\'50ml\',\s*\'([^\']+)\'\)[^>]*>',
    r'<button className={`vol-btn px-space-md py-2 rounded-full font-label-md text-label-md transition-all ${selectedVolume === "50ml" ? "bg-primary text-on-primary shadow-sm" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => handleVolumeChange("50ml", "\1", 4780000)}>',
    jsx_body
)

# Quantity adjuster
jsx_body = re.sub(
    r'<button[^>]*adjustQty\(-1\)[^>]*>',
    r'<button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">',
    jsx_body
)
jsx_body = re.sub(
    r'<button[^>]*adjustQty\(1\)[^>]*>',
    r'<button onClick={() => setQuantity(q => q + 1)} className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">',
    jsx_body
)
jsx_body = re.sub(
    r'<span[^>]*id="qty-val"[^>]*>[^<]*</span>',
    r'<span className="font-label-md text-label-md font-bold text-on-surface px-space-md" id="qty-val">{quantity.toLocaleString("fa-IR")}</span>',
    jsx_body
)

# Display price element
jsx_body = re.sub(
    r'<span[^>]*id="display-price"[^>]*>[^<]*</span>',
    r'<span className="font-headline-md text-headline-md font-bold text-primary" id="display-price">{priceStr}</span>',
    jsx_body
)

# Add to cart button
jsx_body = re.sub(
    r'<button[^>]*addToCartAnimate\(\)[^>]*>',
    r'<button onClick={handleAddToCart} className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-label-lg py-3.5 px-space-xl rounded-full transition-all shadow-md flex items-center justify-center gap-space-xs">',
    jsx_body
)

# Tab buttons: replace cleanly
for tab_id in ['specs', 'how-to-use', 'ingredients', 'reviews']:
    jsx_body = re.sub(
        r'<button[^>]*id="tab-btn-' + tab_id + r'"[^>]*>',
        r'<button id="tab-btn-' + tab_id + r'" className={`tab-btn px-space-lg py-3 rounded-full font-label-md text-label-md transition-all ${activeTab === "' + tab_id + r'" ? "bg-inverse-surface text-on-primary shadow-sm font-bold" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`} onClick={() => setActiveTab("' + tab_id + r'")}>',
        jsx_body
    )

# Tab panes visibility
for tab_id in ['specs', 'how-to-use', 'ingredients', 'reviews']:
    jsx_body = re.sub(
        r'<div[^>]*id="tab-content-' + tab_id + r'"[^>]*>',
        r'<div id="tab-content-' + tab_id + r'" className={`tab-pane ${activeTab === "' + tab_id + r'" ? "" : "hidden"}`}>',
        jsx_body
    )

# Slider buttons
jsx_body = re.sub(
    r'<button[^>]*scrollComplementary\(\'prev\'\)[^>]*>',
    r'<button onClick={() => scrollSlider("prev")} className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface shadow-sm transition-all">',
    jsx_body
)
jsx_body = re.sub(
    r'<button[^>]*scrollComplementary\(\'next\'\)[^>]*>',
    r'<button onClick={() => scrollSlider("next")} className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface shadow-sm transition-all">',
    jsx_body
)

# Thumbnails onclick
jsx_body = re.sub(
    r'onclick="setMainImage\(this,\s*\'([^\']+)\'\)"',
    r'onClick={() => setActiveThumb("\1")}',
    jsx_body
)

# Clean any remaining onclick
jsx_body = re.sub(r'onclick="[^"]*"', '', jsx_body)

os.makedirs('/Users/alifiroozi/ali/motion/motion3/src/app/product', exist_ok=True)

product_page_code = f"""'use client';

import React, {{ useState }} from 'react';
import Link from 'next/link';
import {{ useRouter }} from 'next/navigation';
import {{ useCart }} from '../../context/CartContext';

export default function ProductDetailPage() {{
  const router = useRouter();
  const {{ addToCart }} = useCart();

  const [selectedShade, setSelectedShade] = useState('0N Neutral (پوست روشن و متعادل)');
  const [selectedVolume, setSelectedVolume] = useState('30ml');
  const [priceStr, setPriceStr] = useState('۳٬۲۵۰٬۰۰۰');
  const [unitPrice, setUnitPrice] = useState(3250000);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [activeThumb, setActiveThumb] = useState('main');

  const handleVolumeChange = (vol, pStr, num) => {{
    setSelectedVolume(vol);
    setPriceStr(pStr);
    setUnitPrice(num);
  }};

  const handleAddToCart = () => {{
    addToCart({{
      id: `dior-forever-${{selectedVolume}}-${{selectedShade.slice(0, 2)}}`,
      title: 'کرم پودر مات و با دوام ۲۴ ساعته دیور فواور',
      brand: 'DIOR',
      shade: `${{selectedShade}} • ${{selectedVolume}}`,
      price: unitPrice,
      originalPrice: unitPrice * 1.15,
      quantity: quantity,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGSX1ZeAKBbndAw0Pu6zuNnaTQGx114Yg70n61U',
    }});
  }};

  const scrollSlider = (direction) => {{
    const container = document.getElementById('complementary-slider');
    if (!container) return;
    const amount = direction === 'next' ? -340 : 340;
    container.scrollBy({{ left: amount, behavior: 'smooth' }});
  }};

  return (
    <main className="w-full pt-44 bg-surface min-h-screen">
      {jsx_body}
    </main>
  );
}}
"""

with open('/Users/alifiroozi/ali/motion/motion3/src/app/product/page.jsx', 'w', encoding='utf-8') as f:
    f.write(product_page_code)

print("src/app/product/page.jsx regenerated cleanly!")
