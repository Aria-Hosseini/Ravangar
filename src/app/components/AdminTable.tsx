'use client';

import { useEffect, useState } from 'react';
import AdminRegisterModal from './AdminRegisterModal';

export default function AdminTable() {
  const [admins, setAdmins] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    async function fetchAdmins() {
      try {
        const result = await fetch('/api/admin/list');
        const data = await result.json();
        setAdmins(data);
      } catch (error) {
        console.error('خطا در دریافت لیست ادمین‌ها:', error);
      }
    }

    fetchAdmins();
  }, []);

  return (
    <div className="overflow-x-auto">
    <div className='flex flex-col items-center'>
      <button
        className='py-3 px-4 bg-fuchsia-900 rounded-sm text-sm text-amber-50 mb-3 cursor-pointer hover:bg-fuchsia-800'
        onClick={() => setIsOpen(true)}
      >
        افزودن ادمین
      </button>

      {isOpen && (
        <div
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
        onClick={(e) => {
      if (e.target === e.currentTarget) setIsOpen(false);
        }}
        >
            <div className='w-[500px] max-w-[90vw]'>
                <AdminRegisterModal />
            </div>
        
        </div>
        )}

    </div>
        
      <table className="min-w-full text-sm text-right bg-white shadow-md rounded-lg">
        <thead className="bg-purple-100 text-[#9810FA]">
          <tr>
            <th className="px-4 py-2">تاریخ ایجاد</th> 
            <th className="px-4 py-2">ایمیل</th>
            <th className="px-4 py-2">نام‌خانوادگی</th>
            <th className="px-4 py-2">نام</th>   
          </tr>
        </thead>
        <tbody>
          {admins.map((admin: any) => (
            <tr key={admin.id} className="border-b hover:bg-purple-50 transition">
                <td className="px-4 py-2">
                {new Date(admin.createdAt).toLocaleDateString('fa-IR')}
              </td>
              <td className="px-4 py-2">{admin.email}</td>
              <td className="px-4 py-2">{admin.lastName}</td>
              <td className="px-4 py-2">{admin.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
