import { Vazirmatn } from "next/font/google";
import Link from "next/link";
import Accordion from "./components/home/Accordion";
import BlogCard from "./components/home/BlogCard";

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
        
      <Link className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition" href={"/booking"}>رزرو مشاوره</Link>

      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        
      <div className="flex items-center justify-center text-3xl text-gray-700 font-bold mb-1 gap-x-3">
        <i className="fas fa-quote-left text-gray-500"></i>
        <span>خدمات ما</span>
        <i className="fas fa-quote-right text-gray-500"></i>
      </div>

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

        <div className="flex items-center justify-center text-3xl text-gray-700 font-bold mb-1 gap-x-3">
        <i className="fas fa-quote-left text-gray-500"></i>
        <span>آخرین مقالات</span>
        <i className="fas fa-quote-right text-gray-500"></i>
      </div>

          <BlogCard />

      </section>

    
      <section className="bg-purple-600 py-20 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">آماده‌ای قدمی برای سلامت روانت برداری؟</h2>
        <p className="text-lg mb-6">همین حالا شروع کن و با یک مشاور حرفه ای صحبت کن</p>

        <Link className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-purple-100 transition" href={"/booking"}>
        رزرو جلسه مشاوره
        </Link>
        
      </section>
      <div className="flex items-center justify-center text-3xl text-gray-700 font-bold mt-5 mb-1 gap-x-3">
        <i className="fas fa-quote-left text-gray-500"></i>
        <span>سوالات متداول شما</span>
        <i className="fas fa-quote-right text-gray-500"></i>
      </div>

      <section>
        <Accordion />
      </section>
    </main>
  );
}
