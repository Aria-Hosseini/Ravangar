import Link from "next/link";
import Accordion from "./components/home/Accordion";
import BlogCard from "./components/home/BlogCard";
import ServicesSec from "./components/home/ServicesSec";
import PresentSec from "./components/home/PresentSec";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-purple-50 py-12 px-6 text-center select-none">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          آرامش روانی با روان گر
        </h1>
        <p style={{fontFamily : 'Vazirmatn'}} className="font-vazir text-lg text-gray-600 max-w-2xl mx-auto">
          با روان‌گر، ذهنی آرام، زندگی متعادل و مسیر رشد فردی رو تجربه کنید.
        </p>
        
      <Link className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition" href={"/booking"}>رزرو مشاوره</Link>

      </section>
      
      <ServicesSec />

      <PresentSec />

      <BlogCard />

      <section className="bg-purple-600 py-20 px-6 text-center text-white select-none">
        <h2 className="text-3xl font-bold mb-4">آماده‌ای قدمی برای سلامت روانت برداری؟</h2>
        <p className="text-lg mb-6">همین حالا شروع کن و با یک مشاور حرفه ای صحبت کن</p>

        <Link className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-purple-100 transition" href={"/booking"}>
        رزرو جلسه مشاوره
        </Link>
        
      </section>
      <div className="flex items-center justify-center text-3xl text-gray-700 font-bold mt-5 mb-1 gap-x-3 select-none">
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
