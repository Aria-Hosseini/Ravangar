import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-700">
          روان گر
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href={"/"}>
          <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">خانه</button>
          </Link>

          <Link href={"/aboute"}>
          <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">درباره</button>
          </Link>

          <Link href={"/contact"}>
          <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">راه ارتباطی</button>
          </Link>
          
          <Link href={"/aboute"}>
          <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">خدمات</button>
          </Link>
          
          <Link href={"/aboute"}>
          <button className="text-gray-700 hover:text-purple-700 transition cursor-pointer">مقالات</button>
          </Link>
          
        </nav>

        <a
          href="#booking"
          className="font-Vazir bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition shadow-md"
        >
          رزرو مشاوره
        </a>
      </div>
    </header>
  );
}
