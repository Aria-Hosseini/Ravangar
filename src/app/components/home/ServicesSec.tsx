export default function ServicesSec() {
  return (
    <section className="mt-5 mb-5 px-6 max-w-6xl mx-auto text-center">
      <div className="flex items-center justify-center text-3xl text-gray-700 font-bold gap-x-3 mb-3 select-none">
        <i className="fas fa-quote-left text-gray-400"></i>
        <span className="select-none">خدمات ما</span>
        <i className="fas fa-quote-right text-gray-400"></i>
      </div>

      <div dir="rtl" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "مشاوره زنان",
            desc: "مشاوره تخصصی برای مسائل مرتبط با سلامت روان، روابط، فرزندپروری و رشد شخصی زنان.",
            icon: "fa-female",
            image: "/img/women.png",
          },
          {
            title: "مشاوره دختران نوجوان",
            desc: "کمک به مدیریت تغییرات دوران بلوغ، اضطراب، اعتماد به‌نفس و روابط اجتماعی سالم.",
            icon: "fa-child-reaching",
            image: "/img/teen-girl.png",
          },
          {
            title: "مشاوره کودکان",
            desc: "ارزیابی و مشاوره تخصصی برای رشد ذهنی، عاطفی و رفتاری کودکان با رویکرد بازی‌محور.",
            icon: "fa-baby",
            image: "/img/children.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 p-6 rounded-2xl shadow-md transition duration-300 group text-right cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="flex items-center justify-between mb-3">
              <h3
                className="relative text-lg font-bold text-purple-700 transition
                group-hover:text-white group-hover:bg-purple-500 px-2 py-0.5 rounded"
              >
                {item.title}
              </h3>
              <div className="relative">
                <div
                  className="absolute inset-0 w-8 h-8 bg-purple-200 rounded-full scale-0 
                  group-hover:scale-100 transition-transform duration-300"
                ></div>
                <i
                  className={`fas ${item.icon} text-purple-500 text-xl z-10 relative group-hover:text-purple-700`}
                ></i>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
