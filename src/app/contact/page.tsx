"use client";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#9810FA] mb-4">تماس با ما</h1>
          <p dir="rtl" className="text-lg leading-relaxed text-gray-700">
            برای ارتباط با ما، می‌تونید از فرم زیر استفاده کنید یا از طریق اطلاعات تماس درج‌شده اقدام کنید. ما همیشه آماده پاسخگویی هستیم.
          </p>
        </div>

    <form className="bg-[#F3E8FF] p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
            <label dir="rtl" className="block text-sm text-[#9810FA] mb-1">نام کامل</label>
            <input dir="rtl" type="text" className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#9810FA]" />
        </div>

        <div className="col-span-1">
            <label dir="rtl" className="block text-sm text-[#9810FA] mb-1">ایمیل</label>
            <input dir="rtl" type="email" className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#9810FA]" />
        </div>

        <div className="col-span-1">
            <label dir="rtl" className="block text-sm text-[#9810FA] mb-1">شماره تماس</label>
            <input
  dir="rtl"
  type="tel"
  inputMode="numeric"
  pattern="[0-9]*"
  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#9810FA]"
  onKeyDown={(e) => {
    const allowedKeys = [
      'Backspace',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
      'Delete'
    ];
    const isNumberKey = /^\d$/.test(e.key);

    if (!isNumberKey && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  }}
/>

        </div>

        <div className="col-span-2">
            <label dir="rtl" className="block text-sm text-[#9810FA] mb-1">پیام شما</label>
            <textarea dir="rtl" rows={4} className="w-full border rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#9810FA]"></textarea>
        </div>

        <div className="col-span-2 text-left">
            <button type="submit" className="bg-[#9810FA] text-white px-6 py-2 rounded hover:bg-purple-800 transition">
            ارسال پیام
            </button>
        </div>
    </form>



        <div className="mt-12 bg-[#F3E8FF] p-6 rounded-lg shadow-md text-right">
          <h2 className="text-2xl font-semibold text-[#9810FA] mb-4">اطلاعات تماس</h2>
          <p>📧 ایمیل: ahsyny356@gmail.com</p>
          <p>📱 تلفن: 0917-xxx-xxxx</p>
          <p>📍 آدرس: شیراز،صدرا</p>
        </div>

        <div className="mt-12">
        <h2 dir="rtl" className="text-2xl font-semibold text-[#9810FA] mb-4">ما روی نقشه</h2>

        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6989.005477623375!2d52.57914709191477!3d28.853661034883523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1752657634794!5m2!1sfa!2s"
            className="w-full h-[500px] rounded-xl shadow-lg"
        loading="lazy"
        allowFullScreen
        ></iframe>
        </div>
      </div>
    </div>
  );
}
