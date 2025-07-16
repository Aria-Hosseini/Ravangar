import { Vazirmatn } from "next/font/google";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-purple-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          آرامش روانی با روان گر
        </h1>
        <p style={{fontFamily : 'Vazirmatn'}} className="font-vazir text-lg text-gray-600 max-w-2xl mx-auto">
          با روان‌گر، ذهنی آرام، زندگی متعادل و مسیر رشد فردی رو تجربه کنید.
        </p>
        <a
          href="#booking"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
        >
          شروع مشاوره
        </a>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">خدمات ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "مشاوره فردی",
              desc: "مشاوره تخصصی برای شناخت بهتر خود، مدیریت اضطراب و بهبود کیفیت زندگی.",
            },
            {
              title: "زوج‌درمانی",
              desc: "حل تعارضات و بهبود روابط عاطفی با راهنمایی روانشناسان حرفه‌ای.",
            },
            {
              title: "تست‌های روانشناسی",
              desc: "ارزیابی دقیق با تست‌های معتبر شخصیت، افسردگی، اضطراب و ...",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-600">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">آخرین مقالات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["استرس و راهکارها", "چگونه با افسردگی مقابله کنیم", "تأثیر گفت‌وگو در روابط"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-purple-100 shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">
                  توضیحی کوتاه درباره مقاله.
                </p>
                <a href="#" className="text-sm text-purple-700 mt-2 inline-block hover:underline">
                  ادامه مطلب
                </a>
              </div>
            )
          )}
        </div>
      </section>

    
      <section className="bg-purple-600 py-20 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">آماده‌ای قدمی برای سلامت روانت برداری؟</h2>
        <p className="text-lg mb-6">الان شروع کن و با یک مشاور حرفه‌ای گفتگو کن.</p>
        <a
          href="#booking"
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-purple-100 transition"
        >
          رزرو جلسه مشاوره
        </a>
      </section>
    </main>
  );
}
