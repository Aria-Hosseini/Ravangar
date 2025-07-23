'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookingSetup } from '@/app/components/BookingSetup';
import { UsersTable } from '@/app/components/UsersTable';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'users' | 'sessions' | 'requests'| 'booking'>('requests');

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      router.push('/admin/login');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <h1 className="text-3xl font-bold text-[#9810FA] mb-6 text-center">داشبورد مدیریت</h1>

      {/* تب‌های بالای صفحه */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => setActiveTab('requests')}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            activeTab === 'requests'
              ? 'bg-[#9810FA] text-white'
              : 'bg-white text-[#9810FA] border-[#9810FA]'
          } transition`}
        >
          📩 درخواست‌ها
        </button>
        <button
          onClick={() => setActiveTab('sessions')}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            activeTab === 'sessions'
              ? 'bg-[#9810FA] text-white'
              : 'bg-white text-[#9810FA] border-[#9810FA]'
          } transition`}
        >
          🕒 نشست‌ها
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            activeTab === 'users'
              ? 'bg-[#9810FA] text-white'
              : 'bg-white text-[#9810FA] border-[#9810FA]'
          } transition`}
        >
          👤 کاربران
        </button>

        <button
        onClick={() => setActiveTab('booking')}
        className={`px-4 py-2 rounded-full text-sm font-medium border ${
        activeTab === 'booking' ? 'bg-[#9810FA] text-white' : 'bg-white text-[#9810FA] border-[#9810FA]'} transition`}
        >
         🗓️ اعلام رزرو
        </button>

      </div>

      {/* محتوا بر اساس تب فعال */}
      <div className="bg-white rounded-lg shadow p-4 md:p-6">
        {activeTab === 'requests' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#9810FA]">📩 درخواست‌های مشاوره</h2>
            <p className="text-gray-600">اینجا لیست درخواست‌های ارسالی نمایش داده خواهد شد.</p>
          </div>
        )}

        {activeTab === 'sessions' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#9810FA]">🕒 نشست‌های رزرو شده</h2>
            <p className="text-gray-600">لیست نشست‌های رزرو شده و زمان‌های آن‌ها نمایش داده خواهد شد.</p>
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#9810FA]">👤 کاربران ثبت‌نام‌شده</h2>
            <UsersTable />
          </div>
        )}
      </div>
      {activeTab === 'booking' && (
        <div>
         <h2 className="text-xl font-bold mb-4 text-[#9810FA]">🗓️ تنظیم زمان‌های مشاوره</h2>
         <BookingSetup />
         </div>
        )}



      <div className="text-center mt-8">
        <button
          onClick={() => {
            localStorage.removeItem('isAdmin');
            router.push('/admin/login');
          }}
          className="cursor-pointer text-sm text-gray-500 hover:text-red-500 transition border-2 p-2 rounded-md"
        >
          خروج از داشبورد مدیریت
        </button>
      </div>
    </div>
  );
}
