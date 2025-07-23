'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      setDone(true);
      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert('خطا در ثبت‌نام');
    }
  };

  return (
    <div dir='rtl' className="max-w-md mx-auto mb-16 mt-16 bg-gradient-to-br from-white via-[#f3e8ff] to-white p-8 rounded-3xl shadow-xl border border-purple-200 backdrop-blur-sm ">
      <h2 className="text-2xl text-[#9810FA] font-extrabold mb-6 text-center tracking-wide">
        ثبت‌نام کاربر
      </h2>

      {done ? (
        <p className="text-green-600 text-center bg-green-50 py-2 px-4 rounded shadow-sm">
          ثبت‌نام با موفقیت انجام شد! 🎉
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-right">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#9810FA] font-medium">نام</label>
            <input
              type="text"
              dir='rtl'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="نام کاربری شما"
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
              placeholder="ایمیل شما"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9810FA] transition-all duration-200"
            />
          </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#9810FA] font-medium">رمز عبور</label>
          <div className="relative">
        <input
         dir="rtl"
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
            ثبت‌نام
          </button>

          <span className='text-sm flex-row-reverse items-center justify-center'>حساب کاربری دارید؟<Link className='text-sm text-fuchsia-700 ' href={'/login'} > وارد شوید </Link>  </span>

        </form>
      )}
    </div>
  );
}
