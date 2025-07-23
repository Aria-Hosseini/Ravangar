'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('userToken', data.token || 'test-token');
      window.location.href = '/dashboard';
    } else {
      setError(data.error || 'اطلاعات ورود نادرست است');
    }
  };

  return (
    <div className="bg-">
    <div className="max-w-md mx-auto mb-16 mt-16 bg-gradient-to-br from-white via-[#f3e8ff] to-white p-8 rounded-3xl shadow-xl border border-purple-200 backdrop-blur-sm">
      <h2 className="text-2xl text-[#9810FA] font-extrabold mb-6 text-center tracking-wide">
        ورود به حساب کاربری
      </h2>

      <form onSubmit={handleLogin} className="space-y-6 text-right">
        {error && (
          <p className="text-red-500 text-sm text-center bg-red-100 py-2 px-4 rounded shadow-sm">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#9810FA] font-medium">ایمیل</label>
          <input
            dir='rtl'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
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
          className="w-full cursor-pointer bg-[#9810FA] text-white font-semibold py-2.5 rounded-lg hover:bg-[#7d0fd0] transition-all duration-300 shadow-md"
        >
          ورود
        </button>

        <span className='text-sm flex-row-reverse items-center justify-center'>حساب کاربری ندارید؟<Link className='text-sm text-fuchsia-700 ' href={'/register'} >ثبت نام کنید</Link>  </span>
      </form>
    </div>
    </div>
  );
}
