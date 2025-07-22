'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
      router.push('/dashboard'); 
    } else {
      setError(data.error || 'اطلاعات ورود نادرست است');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl text-[#9810FA] font-bold mb-4 text-center">ورود کاربر</h2>

      <form onSubmit={handleLogin} className="space-y-4 text-right">
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

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
          ورود
        </button>
      </form>
    </div>
  );
}
