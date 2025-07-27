'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* لوگو + دکمه‌های ورود/ثبت‌نام یا پنل کاربری در موبایل */}
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <div className="text-2xl font-bold text-purple-700">روان گر</div>
          </Link>

          {/* دکمه‌ها فقط در موبایل */}
          <div className="flex items-center gap-2 md:hidden">
            {isLoggedIn ? (
              <Link href={"/dashboard"}>
              <button className="text-md text-gray-500 border cursor-pointer border-gray-300 px-3 py-1 rounded-sm hover:text-purple-600 hover:border-purple-500 transition flex items-center gap-2">
                <i className="fas fa-user"></i>
                پنل کاربری
              </button>
            </Link>
            ) : (
              <>
                <Link href={"/login"}>
                  <button className="text-purple-700 border border-purple-600 px-3 py-1 rounded hover:bg-purple-50 transition cursor-pointer">
                  ورود
                </button>
                </Link>
                <Link href={"/register"}>
                  <button className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition shadow-md cursor-pointer">
                  ثبت‌نام
                </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* دکمه همبرگر موبایل */}
        <button
          className="md:hidden text-purple-700 text-xl"
          onClick={() => setShowMobileMenu(true)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex space-x-6 ml-50">
          <Link href={"/"}>
            <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">خانه</button>
          </Link>
          <Link href={"/aboute"}>
            <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">درباره</button>
          </Link>
          <Link href={"/contact"}>
            <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">راه ارتباطی</button>
          </Link>
          <Link href={"/services"}>
            <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">خدمات</button>
          </Link>
          <Link href={"/blog"}>
            <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">مقالات</button>
          </Link>
        </nav>

        {/* دکمه‌های ورود/ثبت‌نام در دسکتاپ */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Link href={"/dashboard"}>
              <button className="text-md text-gray-500 border cursor-pointer border-gray-300 px-4 py-2 rounded-sm hover:text-purple-600 hover:border-purple-500 transition flex items-center gap-2">
                <i className="fas fa-user"></i>
                پنل کاربری
              </button>
            </Link>
          ) : (
            <>
              <Link href={"/login"}>
                <button className="text-purple-700 border border-purple-600 px-5 py-2 rounded hover:bg-purple-50 transition cursor-pointer">
                  ورود
                </button>
              </Link>
              <Link href={"/register"}>
                <button className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition shadow-md cursor-pointer">
                  ثبت‌نام
                </button>
              </Link>
            </>
          )}
          <Link className="font-Vazir bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition shadow-md" href={"/booking"}>
            رزرو مشاوره
          </Link>
        </div>
      </div>

      {/* منوی موبایل بازشو */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${showMobileMenu ? 'bg-black/40' : 'pointer-events-none'}`} onClick={(e) => {
        if (e.target === e.currentTarget) setShowMobileMenu(false);
      }}>
        <div className={`bg-white w-64 h-full shadow-lg absolute top-0 right-0 p-6 flex flex-col text-right space-y-4 transform transition-all duration-300 ${
          showMobileMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <button className="self-end text-gray-400 hover:text-purple-600" onClick={() => setShowMobileMenu(false)}>
            <i className="fas fa-times"></i>
          </button>

          <Link href="/" className="text-gray-700 hover:text-purple-700">خانه</Link>
          <Link href="/aboute" className="text-gray-700 hover:text-purple-700">درباره</Link>
          <Link href="/contact" className="text-gray-700 hover:text-purple-700">راه ارتباطی</Link>
          <Link href="/services" className="text-gray-700 hover:text-purple-700">خدمات</Link>
          <Link href="/blog" className="text-gray-700 hover:text-purple-700">مقالات</Link>

          {isLoggedIn ? (
            <Link href="/dashboard" className="text-purple-600 font-semibold">پنل کاربری</Link>
          ) : (
            <>
              <Link href="/login" className="text-purple-600">ورود</Link>
              <Link href="/register" className="text-purple-600">ثبت‌نام</Link>
            </>
          )}

          <Link href="/booking" className="bg-purple-600 text-white py-2 px-4 rounded-xl mt-4 hover:bg-purple-700 transition">
            رزرو مشاوره
          </Link>
        </div>
      </div>
    </header>
  );
}
