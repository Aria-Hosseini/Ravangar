'use client';
import { useEffect, useState } from 'react';

export default function UserDashboard() {
  const [userName, setUserName] = useState('کاربر عزیز');

  useEffect(() => {
    // اگر اطلاعات کاربر ذخیره شده باشه، نمایش بده
    const savedName = localStorage.getItem('userName');
    if (savedName) setUserName(savedName);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F5FF] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#9810FA] mb-6 text-center">
          خوش آمدید، {userName} 🌟
        </h1>

        {/* کارت‌های اطلاعات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="وضعیت نوبت‌ها" value="۲ نوبت فعال" icon="🗓️" />
          <Card title="پیام‌های دریافتی" value="۵ پیام خوانده‌نشده" icon="💬" />
          <Card title="آخرین مراجعه" value="۱۲ تیر ۱۴۰۳" icon="🕒" />
        </div>

        {/* بخش دسترسی سریع */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-[#9810FA] mb-4">دسترسی سریع:</h2>
          <div className="flex flex-wrap gap-3">
            <QuickButton label="رزرو جدید" href="/booking" />
            <QuickButton label="مشاهده سوابق" href="/sessions" />
            <QuickButton label="تنظیمات حساب" href="/profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

// کامپوننت کارت اطلاعات
function Card({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-right hover:shadow-md transition">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-lg font-semibold text-[#9810FA]">{value}</p>
    </div>
  );
}

// دکمه‌های دسترسی سریع
function QuickButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="bg-[#9810FA] text-white px-4 py-2 rounded-full hover:bg-purple-800 text-sm transition"
    >
      {label}
    </a>
  );
}
