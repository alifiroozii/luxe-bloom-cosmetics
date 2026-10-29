'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const initialItems = [
  {
    id: 'cart-1',
    title: 'سرم جوان‌ساز اکسیر ارکیده پریمیوم',
    brand: 'GERLAIN LUXE',
    shade: '۳۰ میلی‌لیتر • عصاره ارکیده سیاه',
    price: 1250000,
    originalPrice: 1450000,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqI1DJJPdlxrv49rk_v9it9rkXmF5333G2Wc8gWzD_o5r2gC7f607rU',
  },
  {
    id: 'cart-2',
    title: 'رژ لب مخملی ساتن پیور کوتور',
    brand: 'YVES SAINT LAURENT',
    shade: 'کد ۰۱ • قرمز کلاسیک پاریسی',
    price: 1200000,
    originalPrice: 1350000,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwzPQWhBALVKUtJrOO4sMCRfR9D7a3e7F',
  }
];

export function CartProvider({ children }) {
  const [items, setItems] = useState(initialItems);
  const [wishlist, setWishlist] = useState(['fav-1', 'fav-2', 'fav-3', 'fav-4']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id || `prod-${Date.now()}`,
          title: product.title,
          brand: product.brand || 'LUXE BLOOM',
          shade: product.shade || 'استاندارد',
          price: product.price || 1200000,
          originalPrice: product.originalPrice || (product.price ? product.price * 1.15 : 1400000),
          quantity: product.quantity || 1,
          image: product.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGSX1ZeAKBbndAw0Pu6zuNnaTQGx114Yg70n61U',
        }
      ];
    });
    showToast(`«${product.title}» با موفقیت به سبد خرید اضافه شد.`);
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal > 1500000 ? 150000 : 0;
  const shipping = subtotal > 1500000 ? 0 : 45000;
  const total = subtotal - discount + (items.length > 0 ? shipping : 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (val) => {
    return new Intl.NumberFormat('fa-IR').format(val);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        wishlist,
        toggleWishlist,
        subtotal,
        discount,
        shipping,
        total,
        itemCount,
        formatPrice,
        isCartOpen,
        setIsCartOpen,
        toastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
