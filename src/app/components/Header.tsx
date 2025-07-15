export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-700">
          روان‌یار
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-purple-700 transition">
            خانه
          </a>
          <a href="#services" className="text-gray-700 hover:text-purple-700 transition">
            خدمات
          </a>
          <a href="#blog" className="text-gray-700 hover:text-purple-700 transition">
            مقالات
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-700 transition">
            ارتباط با ما
          </a>
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
