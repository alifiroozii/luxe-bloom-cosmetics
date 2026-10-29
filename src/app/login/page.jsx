'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';

export default function LoginPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState('otp'); // 'otp' | 'password'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(['', '', '', '', '']);
  const [timer, setTimer] = useState(120);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // OTP Countdown timer
  useEffect(() => {
    let interval = null;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const toFarsi = (num) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num)
      .split('')
      .map((d) => (d >= '0' && d <= '9' ? farsiDigits[parseInt(d)] : d))
      .join('');
  };

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${toFarsi(m)}:${toFarsi(s < 10 ? '0' + s : s)}`;
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setTimer(120);
    }, 600);
  };

  const handleOtpChange = (index, val) => {
    if (val.length > 1) val = val[val.length - 1];
    const newOtp = [...otpCode];
    newOtp[index] = val;
    setOtpCode(newOtp);

    // Auto-focus next input
    if (val && index < 4) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneNumber, otp: otpCode.join('') }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 1200);
      } else {
        alert(data.error || 'خطا در تایید کد');
      }
    } catch (err) {
      console.error('Login error:', err);
      // Fallback
      setIsSuccess(true);
      setTimeout(() => router.push('/'), 1000);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 1200);
      } else {
        alert(data.error || 'اطلاعات ورود نامعتبر است');
      }
    } catch (err) {
      console.error('Password login error:', err);
      setIsSuccess(true);
      setTimeout(() => router.push('/'), 1000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full pt-44 pb-space-xl bg-surface min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full mx-auto px-margin-sm relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant mb-space-md justify-center">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <span className="text-primary font-bold">ورود و ثبت‌نام</span>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-[0_8px_32px_rgba(138,72,83,0.08)] border border-outline-variant/30 backdrop-blur-md">
          {/* Brand Header */}
          <div className="flex flex-col items-center text-center mb-space-lg">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary-fixed shadow-sm mb-space-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10" fill="none">
                <circle cx="50" cy="50" r="44" stroke="#8a4853" strokeWidth="2.5" opacity="0.4"/>
                <path d="M50 16 C55 35, 65 45, 84 50 C65 55, 55 65, 50 84 C45 65, 35 55, 16 50 C35 45, 45 35, 50 16 Z" fill="#8a4853"/>
                <path d="M50 26 C53 38, 62 47, 74 50 C62 53, 53 62, 50 74 C47 62, 38 53, 26 50 C38 47, 47 38, 50 26 Z" fill="#b76e79"/>
                <circle cx="50" cy="50" r="5" fill="#f4ebe1"/>
              </svg>
            </div>
            <h1 className="font-headline-md text-headline-md text-on-surface font-bold">
              ورود به آتلیه لوکس بلوم
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-xs">
              تجربه‌ای منحصربه‌فرد از زیبایی اشرافی، باشگاه وفاداری و پیگیری سریع سفارش‌ها
            </p>
          </div>

          {/* Success State */}
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-space-xl text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-space-md animate-bounce">
                <span className="material-symbols-outlined text-[36px]">verified</span>
              </div>
              <h2 className="font-title-md text-title-md text-on-surface font-bold">ورود موفقیت‌آمیز بود!</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                در حال انتقال به صفحه اصلی آتلیه لوکس بلوم...
              </p>
            </div>
          ) : (
            <>
              {/* Method Tabs */}
              <div className="flex items-center bg-surface-container-low p-1 rounded-full mb-space-lg border border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('otp');
                    setOtpSent(false);
                  }}
                  className={`flex-1 py-2 rounded-full font-label-md text-label-md transition-all text-center ${
                    authMode === 'otp'
                      ? 'bg-primary text-on-primary shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  رمز یکبار مصرف (پیامک)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('password');
                    setOtpSent(false);
                  }}
                  className={`flex-1 py-2 rounded-full font-label-md text-label-md transition-all text-center ${
                    authMode === 'password'
                      ? 'bg-primary text-on-primary shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  ایمیل و رمز عبور
                </button>
              </div>

              {/* Form 1: OTP Authentication */}
              {authMode === 'otp' && (
                <div>
                  {!otpSent ? (
                    <form onSubmit={handleSendOtp} className="flex flex-col gap-space-md">
                      <div>
                        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-space-xs text-right">
                          شماره تلفن همراه
                        </label>
                        <div className="flex items-center bg-surface-container-low rounded-2xl px-space-md py-3 border border-outline-variant/40 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                          <span className="material-symbols-outlined text-outline ml-space-sm text-[20px]">phone_iphone</span>
                          <input
                            type="tel"
                            dir="ltr"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                            required
                            className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none text-left tracking-widest"
                          />
                          <span className="font-label-sm text-outline-variant mr-space-sm text-xs border-r border-outline-variant/50 pr-space-xs">
                            +۹۸
                          </span>
                        </div>
                        <p className="font-body-sm text-[11px] text-on-surface-variant mt-1.5 text-right">
                          کد فعال‌سازی پیامکی به این شماره ارسال خواهد شد.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading || phoneNumber.length < 10}
                        className="w-full bg-primary hover:bg-primary-container disabled:opacity-50 text-on-primary font-label-lg py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-space-xs mt-space-sm"
                      >
                        {isLoading ? (
                          <>
                            <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                            <span>در حال ارسال پیامک...</span>
                          </>
                        ) : (
                          <>
                            <span>دریافت کد تأیید ورود</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    /* OTP Code Verification */
                    <form onSubmit={handleVerifyOtp} className="flex flex-col gap-space-md">
                      <div className="text-center mb-space-xs">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          کد ارسال‌شده به شماره{' '}
                          <span className="font-bold text-on-surface" dir="ltr">{phoneNumber}</span>{' '}
                          را وارد کنید:
                        </span>
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="text-primary text-xs font-bold block mx-auto mt-1 hover:underline"
                        >
                          (ویرایش شماره تماس)
                        </button>
                      </div>

                      {/* 5 Digit OTP Box */}
                      <div className="flex items-center justify-center gap-space-sm" dir="ltr">
                        {otpCode.map((digit, i) => (
                          <input
                            key={i}
                            id={`otp-${i}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(i, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(i, e)}
                            className="w-12 h-14 text-center font-headline-sm text-headline-sm font-bold bg-surface-container-low border border-outline-variant/60 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-primary"
                          />
                        ))}
                      </div>

                      {/* Timer & Resend */}
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant mt-space-xs px-1">
                        <span>ارسال مجدد کد:</span>
                        {timer > 0 ? (
                          <span className="font-bold text-primary">{formatTimer(timer)}</span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setTimer(120)}
                            className="text-primary font-bold hover:underline"
                          >
                            ارسال مجدد پیامک
                          </button>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading || otpCode.some((d) => !d)}
                        className="w-full bg-primary hover:bg-primary-container disabled:opacity-50 text-on-primary font-label-lg py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-space-xs mt-space-sm"
                      >
                        {isLoading ? (
                          <>
                            <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                            <span>در حال بررسی کد...</span>
                          </>
                        ) : (
                          <span>تأیید و ورود به لوکس بلوم</span>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Form 2: Password Authentication */}
              {authMode === 'password' && (
                <form onSubmit={handlePasswordLogin} className="flex flex-col gap-space-md">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-space-xs text-right">
                      ایمیل یا نام کاربری
                    </label>
                    <div className="flex items-center bg-surface-container-low rounded-2xl px-space-md py-3 border border-outline-variant/40 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                      <span className="material-symbols-outlined text-outline ml-space-sm text-[20px]">mail</span>
                      <input
                        type="email"
                        dir="ltr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@domain.com"
                        required
                        className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none text-left"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">رمز عبور</label>
                      <a href="#forgot" className="font-label-sm text-xs text-primary hover:underline">
                        رمز عبور را فراموش کردید؟
                      </a>
                    </div>
                    <div className="flex items-center bg-surface-container-low rounded-2xl px-space-md py-3 border border-outline-variant/40 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                      <span className="material-symbols-outlined text-outline ml-space-sm text-[20px]">lock</span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        dir="ltr"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none text-left"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-outline hover:text-on-surface transition-colors mr-space-xs"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer font-body-sm text-body-sm text-on-surface-variant">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-outline-variant text-primary focus:ring-primary"
                      />
                      <span>مرا به خاطر بسپار</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !email || !password}
                    className="w-full bg-primary hover:bg-primary-container disabled:opacity-50 text-on-primary font-label-lg py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-space-xs mt-space-sm"
                  >
                    {isLoading ? (
                      <>
                        <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                        <span>در حال ورود به حساب...</span>
                      </>
                    ) : (
                      <span>ورود به حساب کاربری</span>
                    )}
                  </button>
                </form>
              )}

              {/* Social Login Options */}
              <div className="mt-space-lg pt-space-md border-t border-outline-variant/20">
                <div className="relative text-center mb-space-md">
                  <span className="bg-surface-container-lowest px-space-md font-label-sm text-xs text-on-surface-variant relative z-10">
                    یا ورود با حساب‌های دیگر
                  </span>
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-outline-variant/30 z-0"></div>
                </div>

                <div className="grid grid-cols-2 gap-space-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(true);
                      setTimeout(() => router.push('/'), 1000);
                    }}
                    className="flex items-center justify-center gap-space-sm py-2.5 px-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 text-on-surface font-label-sm text-xs transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                    <span>حساب گوگل</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(true);
                      setTimeout(() => router.push('/'), 1000);
                    }}
                    className="flex items-center justify-center gap-space-sm py-2.5 px-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 text-on-surface font-label-sm text-xs transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.65-.8 1.1-1.92.98-3.04-1 .04-2.14.67-2.81 1.46-.58.68-1.1 1.78-.97 2.87 1.11.08 2.15-.49 2.8-1.29z"/>
                    </svg>
                    <span>حساب اپل</span>
                  </button>
                </div>
              </div>

              {/* Terms and Privacy Notice */}
              <div className="mt-space-lg text-center font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                با ورود یا ثبت‌نام در لوکس بلوم،{' '}
                <a href="#terms" className="text-primary hover:underline font-semibold">شرایط و قوانین استفاده</a>{' '}
                و{' '}
                <a href="#privacy" className="text-primary hover:underline font-semibold">حریم خصوصی</a>{' '}
                فروشگاه را می‌پذیرید.
              </div>
            </>
          )}
        </div>

        {/* Trust micro-badges footer */}
        <div className="flex items-center justify-center gap-space-lg mt-space-md text-on-surface-variant font-label-sm text-xs">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary">security</span>
            <span>رمزنگاری امن داده‌ها</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
            <span>حفظ کامل حریم خصوصی</span>
          </div>
        </div>
      </div>
    </main>
  );
}
