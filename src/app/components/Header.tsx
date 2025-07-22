import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={"/"}>
         <div className="text-2xl font-bold text-purple-700">
          روان گر
        </div>
        </Link>
       
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

        <div className="flex items-center space-x-4">
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

          <Link className="font-Vazir bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition shadow-md" href={"/booking"}>رزرو مشاوره</Link>
         
        </div>
      </div>
    </header>
  );
}
