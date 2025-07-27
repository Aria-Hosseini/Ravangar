'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
  { title: 'چگونه می‌توانم وقت مشاوره آنلاین رزرو کنم؟', content: 'برای رزرو وقت مشاوره، کافیست وارد حساب کاربری خود شوید، سپس از بخش «رزرو مشاوره»، مشاور مورد نظر، تاریخ و ساعت مناسب را انتخاب کرده و فرآیند پرداخت را تکمیل کنید. بلافاصله لینک جلسه برای شما ارسال می‌شود.' },
  { title: 'آیا مشاوره‌ها فقط مخصوص زنان و دختران نوجوان است؟', content: 'بله، خدمات این وب‌اپلیکیشن به‌صورت تخصصی برای بانوان و دختران نوجوان طراحی شده تا در فضایی امن و حرفه‌ای بتوانند مسائل خود را با مشاوران متخصص در میان بگذارند.' },
  { title: 'آیا امکان لغو یا تغییر زمان مشاوره وجود دارد؟', content: 'بله، تا ۲۴ ساعت قبل از زمان مشاوره، می‌توانید از طریق پنل کاربری خود جلسه را لغو کرده یا به زمان دیگری منتقل کنید. پس از این مدت، امکان لغو وجود نخواهد داشت.' },
  { title: 'مشاوره‌ها در چه زمینه‌هایی ارائه می‌شوند؟', content: 'مشاوره‌ها در حوزه‌هایی مانند سلامت روان، اضطراب، افسردگی، بلوغ و تغییرات نوجوانی، روابط خانوادگی، فرزندپروری، و توانمندسازی زنان ارائه می‌شوند. می‌توانید با توجه به نیاز خود، مشاور مناسب را انتخاب کنید.' },
  
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-12 px-4 md:px-8 py-12 max-w-7xl mx-auto select-none">
      <div className="flex-1 space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="cursor-pointer w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 text-gray-800 font-medium text-lg"
            >
              <motion.span
                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-purple-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </motion.span>
              <span>{item.title}</span>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="px-5 pb-4 text-gray-600 text-base leading-relaxed"
                    dir="rtl"
                  >
                    {item.content}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex-1 hidden md:block">
        <img
          src="/img/imgAcc.png"
          alt="Accordion visual"
          className="rounded-2xl shadow-lg w-150 h-auto object-cover"
        />
      </div>
    </div>
  );
}
