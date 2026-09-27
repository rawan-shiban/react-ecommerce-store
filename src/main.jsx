// استيراد StrictMode لتفعيل التحذيرات الإضافية في بيئة التطوير
import { StrictMode } from 'react'

// استيراد createRoot (API الحديث في React 18 لربط التطبيق بالـ DOM)
import { createRoot } from 'react-dom/client'

// استيراد الأنماط العامة للتطبيق (Side Effect Import)
import './index.css'

// استيراد المكوّن الجذري للتطبيق
import App from './App.jsx'

// ⚠️ استيراد مكرّر (غير ضروري) - يمكن حذفه
import React from 'react'

// ⚠️ استيراد مكرّر (غير ضروري) - يمكن حذفه
import ReactDOM from 'react-dom/client'

// استيراد BrowserRouter لتفعيل التوجيه (Routing) في التطبيق
import { BrowserRouter } from 'react-router-dom'

// استيراد CartProvider لتوفير حالة سلة التسوق لكل المكوّنات
import CartProvider from './components/context/CartContext.jsx'


// إنشاء جذر React وربطه بعنصر HTML يحمل id="root" ثم بدء الرسم
ReactDOM.createRoot(document.getElementById('root')).render(

  // StrictMode: يفعّل تحذيرات إضافية في Development فقط
  <React.StrictMode>

    {/* BrowserRouter: يغلّف التطبيق لتفعيل التنقل (SPA) */}
    {/* basename='/': المسار الأساسي للتطبيق */}
    <BrowserRouter basename='/'>

      {/* CartProvider: يوفّر حالة السلة لكل المكوّنات الأبناء */}
      <CartProvider>

        {/* App: المكوّن الجذري للتطبيق */}
        <App />

      </CartProvider>

    </BrowserRouter>

  </React.StrictMode>,
)