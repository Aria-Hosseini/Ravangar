export default function PresentSec() {
  return (
    <section className="py-20 px-6 bg-purple-50 text-center select-none">
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center">
          <div className="text-gray-700 text-6xl font-extrabold">+100</div>
          <div className="text-gray-600 text-lg font-medium flex items-center gap-2 mt-2">
            <i className="fa-regular fa-calendar-check text-gray-600 text-2xl"></i>
            جلسه برگزارشده
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-gray-700 text-6xl font-extrabold">95%</div>
          <div className="text-gray-600 text-lg font-medium flex items-center gap-2 mt-2">
            <i className="fa-regular fa-face-laugh-beam text-gray-600 text-2xl"></i>
            رضایت مراجعه کنندگان
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-gray-700 text-6xl font-extrabold">+120</div>
          <div className="text-gray-600 text-lg font-medium flex items-center gap-2 mt-2">
            <i className="fa-solid fa-users text-gray-600 text-2xl"></i>
            مراجعه‌کننده تا امروز
          </div>
        </div>
      </div>
    </section>
  );
}
