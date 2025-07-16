export default function About() {
  return (
    <div className="bg-white text-gray-800 h-full px-4 py-15">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#9810FA] mb-4">درباره من</h1>
        <p dir="rtl" className="text-lg leading-relaxed">
          به وب‌سایت مشاوره و روانشناسی خوش آمدید. من مشاور متخصصی هستم با تجربه در زمینه‌های سلامت روان، رشد فردی، و بهبود کیفیت زندگی. هدفم اینه که با ایجاد فضایی امن، آرام و قابل اعتماد، همراه شما باشم در مسیر شناخت بهتر خودتون و رسیدن به آرامش ذهنی.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#F3E8FF] p-6 rounded-lg shadow">
          <h2 dir="rtl" className="text-2xl font-semibold text-[#9810FA] mb-2">تخصص‌ها</h2>
          <ul dir="rtl" className="list-disc list-inside text-right text-gray-700">
            <li>مشاوره فردی و زوجی</li>
            <li>درمان اضطراب و افسردگی</li>
            <li>آموزش مهارت‌های ارتباطی</li>
          </ul>
        </div>
        <div className="bg-[#F3E8FF] p-6 rounded-lg shadow">
          <h2 dir="rtl" className="text-2xl font-semibold text-[#9810FA] mb-2">دستاوردها</h2>
          <ul dir="rtl" className="list-disc list-inside text-right text-gray-700">
            <li>بیش از ۱۰ سال تجربه کاری</li>
            <li>همکاری با مراکز روانشناسی معتبر</li>
            <li>سخنران سمینارهای آموزشی</li>
          </ul>
        </div>
      </div>

      {/* افتخارات */}
<div className="mt-12 max-w-3xl mx-auto">
  <h2 dir="rtl" className="text-2xl font-semibold text-[#9810FA] mb-4 text-right">افتخارات</h2>
  <ul dir="rtl" className="list-disc list-inside text-right text-gray-700 bg-[#F3E8FF] p-6 rounded-lg shadow">
    <li>دریافت لوح تقدیر از انجمن روانشناسان ایران</li>
    <li>انتخاب به عنوان مشاور برتر در جشنواره ملی سلامت روان</li>
    <li>منتخب برای ارائه در کنفرانس بین‌المللی روان‌درمانی</li>
  </ul>
</div>

{/* مدارک و مجوزها */}
<div className="mt-12 max-w-3xl mx-auto">
  <h2 dir="rtl" className="text-2xl font-semibold text-[#9810FA] mb-4 text-right">مدارک و مجوزها</h2>
  <div className="bg-[#F3E8FF] p-6 rounded-lg shadow text-right text-gray-700">
    <p>مجوز رسمی از سازمان نظام روانشناسی ایران</p>
    <p className="mt-2">گواهی دوره تخصصی روان‌درمانی از دانشگاه تهران</p>
    <p className="mt-2">مدرک CBT از انجمن درمان شناختی رفتاری اروپا</p>
  </div>
</div>

{/* تحصیلات */}
<div className="mt-12 max-w-3xl mx-auto">
  <h2 dir="rtl" className="text-2xl font-semibold text-[#9810FA] mb-4 text-right">تحصیلات</h2>
  <div className="bg-[#F3E8FF] p-6 rounded-lg shadow text-right text-gray-700">
    <p>کارشناسی ارشد روانشناسی بالینی – دانشگاه تهران</p>
    <p className="mt-2">کارشناسی روانشناسی – دانشگاه علامه طباطبایی</p>
  </div>
</div>

    </div>
  );
}
