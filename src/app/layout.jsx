import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';
import Toast from '../components/Toast';

export const metadata = {
  title: 'لوکس بلوم | فروشگاه آنلاین محصولات آرایشی و بهداشتی اصل',
  description: 'آتلیه تخصصی محصولات آرایشی، عطرهای فاخر و مراقبت پوستی اصل با ضمانت اصالت ۱۰۰٪ و بسته‌بندی لوکس',
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&family=Noto+Serif:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <Toast />
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
