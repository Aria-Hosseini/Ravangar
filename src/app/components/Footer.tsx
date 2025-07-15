export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">روان‌یار</h2>
          <p className="text-sm leading-relaxed">
            همراه شما برای داشتن زندگی بهتر، آرامش روانی و رشد شخصی. با بهترین مشاوران در کنار شما هستیم.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">لینک‌های مفید</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">خانه</a></li>
            <li><a href="#services" className="hover:underline">خدمات</a></li>
            <li><a href="#blog" className="hover:underline">مقالات</a></li>
            <li><a href="#contact" className="hover:underline">تماس با ما</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">ما را دنبال کنید</h3>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a href="#" className="hover:text-gray-300">اینستاگرام</a>
            <a href="#" className="hover:text-gray-300">تلگرام</a>
            <a href="#" className="hover:text-gray-300">لینکدین</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-purple-500 pt-4 text-center text-sm text-purple-100">
        © {new Date().getFullYear()} روان‌یار - تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
