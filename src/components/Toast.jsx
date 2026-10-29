'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-space-sm bg-surface-container-lowest text-on-surface py-3 px-space-lg rounded-full shadow-[0_8px_30px_rgba(138,72,83,0.18)] border border-primary/30 animate-bounce">
      <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
      <span className="font-label-md text-label-md text-on-surface">{toastMessage}</span>
    </div>
  );
}
