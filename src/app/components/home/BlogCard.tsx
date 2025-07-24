export default function BlogCard (){
    return(
        <>
        
      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-8">
      {[
      {
        title: "استرس و راهکارها",
        image: "/img/imgtest.jpg",
      },
      {
        title: "چگونه با افسردگی مقابله کنیم",
        image: "/img/imgtest.jpg",
      },
      {
        title: "تأثیر گفت‌وگو در روابط",
        image: "/img/imgtest.jpg",
      },
        ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl overflow-hidden shadow group transition-all duration-300 hover:shadow-xl"
      >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-purple-700 mb-2">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
          توضیحی کوتاه درباره مقاله که کاربران را به خواندن بیشتر ترغیب می‌کند.
        </p>
        <a
          href="#"
          className="inline-block text-sm text-purple-600 hover:underline font-medium"
        >
          ادامه مطلب →
        </a>
        </div>
        </div>
      ))}
      </div>
        </>
    )
}