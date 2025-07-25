'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminRegisterModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/admin/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (res.ok) {
      setDone(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } else {
      alert('خطا در ثبت‌نام ادمین');
    }
  };

  return (
    <div dir='rtl' className="max-w-md mx-auto mb-16 mt-16 bg-gradient-to-br from-white via-[#f3e8ff] to-white p-8 rounded-3xl shadow-xl border border-purple-200 backdrop-blur-sm ">
      <h2 className="text-2xl text-[#9810FA] font-extrabold mb-6 text-center tracking-wide">
        ثبت‌نام ادمین
      </h2>

      {done ? (
        <>
          <p className="text-green-600 text-center py-2 px-4 rounded mb-10 mt-10 flex items-center justify-center gap-2">
            <i className="fas fa-circle-check text-green-600 text-lg"></i>
            ثبت‌نام با موفقیت انجام شد!
          </p>
          <div className="flex justify-center">
            <Link href="/admin/login">
              <button className="cursor-pointer px-6 py-2 bg-fuchsia-700 text-white hover:shadow-2xl text-sm rounded-md shadow-sm transition duration-200">
                وارد شوید
              </button>
            </Link>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-right">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#9810FA] font-medium">نام</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="نام"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9810FA] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#9810FA] font-medium">نام خانوادگی</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="نام خانوادگی"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9810FA] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#9810FA] font-medium">ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ایمیل ادمین"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9810FA] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#9810FA] font-medium">رمز عبور</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-4 focus:outline-none focus:ring-2 focus:ring-[#9810FA] transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-[#9810FA] hover:text-[#7d0fd0]"
              >
                {showPassword ? 'مخفی' : 'نمایش'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#9810FA] cursor-pointer text-white font-semibold py-2.5 rounded-lg hover:bg-[#7d0fd0] transition-all duration-300 shadow-md"
          >
            ثبت‌نام ادمین
          </button>

          
        </form>
      )}
    </div>
  );
}
