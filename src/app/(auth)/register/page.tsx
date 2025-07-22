'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);

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
    <div className="max-w-md mx-auto bg-[#F3E8FF] p-6 rounded-lg shadow">
      <h2 className="text-xl text-[#9810FA] font-bold mb-4 text-center">ثبت‌نام کاربر</h2>

      {done ? (
        <p className="text-green-600 text-center">ثبت‌نام با موفقیت انجام شد! 🎉</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#9810FA] mb-1">نام</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded p-2 focus:ring-2 focus:ring-[#9810FA]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#9810FA] mb-1">ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded p-2 focus:ring-2 focus:ring-[#9810FA]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#9810FA] mb-1">رمز عبور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded p-2 focus:ring-2 focus:ring-[#9810FA]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#9810FA] text-white px-6 py-2 rounded hover:bg-purple-800 transition w-full"
          >
            ثبت‌نام
          </button>
        </form>
      )}
    </div>
  );
}
