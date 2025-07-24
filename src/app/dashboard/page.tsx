'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
  const [userName, setUserName] = useState('کاربر عزیز');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      router.push('/login');
      return;
    }

    const savedName = localStorage.getItem('userName');
    if (savedName) setUserName(savedName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#F8F5FF] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#9810FA] text-center w-full">
            خوش آمدید، {userName} 🌟
          </h1>
          <button
            onClick={handleLogout}
            className="cursor-pointer whitespace-nowrap text-sm text-gray-500 border border-gray-300 px-4 py-1 rounded hover:text-red-600 hover:border-red-500 transition"
          >
            خروج از حساب
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="وضعیت نوبت‌ها" value="۲ نوبت فعال" iconClass="fa-calendar-check" />
          <Card title="پیام‌های دریافتی" value="۵ پیام خوانده‌نشده" iconClass="fa-envelope-open-text" />
          <Card title="آخرین مراجعه" value="۱۲ تیر ۱۴۰۳" iconClass="fa-clock" />
          <Card title="وضعیت مالی" value="موجودی: ۱۲۰,۰۰۰ تومان" iconClass="fa-wallet" />
          <Card title="پشتیبانی" value="۱ تیکت باز" iconClass="fa-headset" />
          <Card title="امنیت حساب" value="رمز عبور قوی است" iconClass="fa-shield-halved" />
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-bold text-[#9810FA] mb-4">دسترسی سریع:</h2>
          <div className="flex flex-wrap gap-3">
            <QuickButton label="رزرو جدید" href="/booking" />
            <QuickButton label="مشاهده سوابق" href="/sessions" />
            <QuickButton label="تنظیمات حساب" href="/profile" />
            <QuickButton label="پشتیبانی" href="/support" />
            <QuickButton label="تغییر رمز عبور" href="/change-password" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, iconClass }: { title: string; value: string; iconClass: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-right hover:shadow-md transition">
      <div className="text-[#9810FA] text-3xl mb-2">
        <i className={`fas ${iconClass}`}></i>
      </div>
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-lg font-semibold text-[#9810FA]">{value}</p>
    </div>
  );
}

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
