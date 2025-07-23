'use client';

import { useState } from 'react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [visitorRelation, setVisitorRelation] = useState<string | null>(null);
  const [severity, setSeverity] = useState<string | null>(null);
  const [hasHistory, setHasHistory] = useState<string | null>(null);
  const [hasAcceptedGuide, setHasAcceptedGuide] = useState(false);

  return (
    <div className="min-h-screen px-4 py-12 bg-white text-gray-800">
      <div className="max-w-xl mx-auto text-center transition-opacity duration-300 animate-fade">
        <p className="text-sm text-gray-500 mb-2">مرحله {step} از 6</p>
        <h1 className="text-4xl font-bold text-[#9810FA] mb-6">درخواست مشاوره</h1>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-lg">لطفاً نوع مشاوره را انتخاب کنید:</p>
            <div className="flex flex-col space-y-3">
              {['مشاوره کودکان', 'مشاوره نوجوانان', 'مشاوره زنان'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setStep(2);
                  }}
                  className="bg-purple-100 text-purple-700 py-2 rounded hover:bg-purple-200 transition"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && selectedType && (
          <div className="space-y-4">
            <p className="text-lg">روش مشاوره مدنظر شما چیست؟</p>
            <div className="flex flex-col space-y-3">
              {['حضوری', 'تلفنی'].map((method) => (
                <button
                  key={method}
                  onClick={() => {
                    setSelectedMethod(method);
                    setStep(3);
                  }}
                  className="bg-purple-100 text-purple-700 py-2 rounded hover:bg-purple-200 transition"
                >
                  {method}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="mt-6 text-sm text-gray-500 hover:text-[#9810FA] transition">
              ⬅ بازگشت به مرحله قبل
            </button>
          </div>
        )}

        {step === 3 && selectedMethod && (
          <div className="space-y-4">
            <p className="text-lg">آیا مراجعه‌کننده خود شما هستید یا یکی از نزدیکان؟</p>
            <div className="flex flex-col space-y-3">
              {['خودم هستم', 'یکی از نزدیکانم'].map((who) => (
                <button
                  key={who}
                  onClick={() => {
                    setVisitorRelation(who);
                    setStep(4);
                  }}
                  className="bg-purple-100 text-purple-700 py-2 rounded hover:bg-purple-200 transition"
                >
                  {who}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="mt-6 text-sm text-gray-500 hover:text-[#9810FA] transition">
              ⬅ بازگشت به مرحله قبل
            </button>
          </div>
        )}

        {step === 4 && visitorRelation && (
          <div className="space-y-4">
            <p className="text-lg">میزان حاد بودن مشکل را مشخص کنید:</p>
            <div className="flex flex-col space-y-3">
              {['کم', 'متوسط', 'زیاد'].map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    setSeverity(level);
                    setStep(5);
                  }}
                  className="bg-purple-100 text-purple-700 py-2 rounded hover:bg-purple-200 transition"
                >
                  {level}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(3)} className="mt-6 text-sm text-gray-500 hover:text-[#9810FA] transition">
              ⬅ بازگشت به مرحله قبل
            </button>
          </div>
        )}

        {step === 5 && severity && (
          <div className="space-y-4">
            <p className="text-lg">آیا قبلاً سابقه مراجعه به مشاور داشته‌اید؟</p>
            <div className="flex flex-col space-y-3">
              {['بله', 'خیر'].map((answer) => (
                <button
                  key={answer}
                  onClick={() => {
                    setHasHistory(answer);
                    setStep(6);
                  }}
                  className="bg-purple-100 text-purple-700 py-2 rounded hover:bg-purple-200 transition"
                >
                  {answer}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(4)} className="mt-6 text-sm text-gray-500 hover:text-[#9810FA] transition">
              ⬅ بازگشت به مرحله قبل
            </button>
          </div>
        )}

        {step === 6 && hasHistory && (
          <div className="mt-8 bg-[#F3E8FF] p-6 rounded-lg shadow text-right space-y-6 animate-fade">
            {!hasAcceptedGuide ? (
              <>
                <h2 className="text-xl font-semibold text-[#9810FA] mb-4">قبل از ادامه لطفاً توجه کنید:</h2>
                <p className="text-sm leading-7 text-gray-700">
                  اطلاعات شما با دقت بررسی خواهد شد. لطفاً فرم را با دقت پر کنید تا فرآیند مشاوره دقیق‌تر و بهتر انجام شود. در صورت نیاز، از
                  طریق شماره تماس ثبت‌شده با شما تماس گرفته خواهد شد.
                </p>
                <button
                  onClick={() => setHasAcceptedGuide(true)}
                  className="bg-[#9810FA] text-white px-6 py-2 rounded hover:bg-purple-800 transition"
                >
                  متوجه شدم، ادامه دهید
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="block mt-6 text-sm text-gray-500 hover:text-[#9810FA] transition"
                >
                  ⬅ بازگشت به مرحله قبل
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-[#9810FA] mb-4">اطلاعات مشاوره شما</h2>
                <ul className="text-sm text-gray-600 leading-7">
                  <li>نوع مشاوره: {selectedType}</li>
                  <li>روش مشاوره: {selectedMethod}</li>
                  <li>مراجعه‌کننده: {visitorRelation}</li>
                  <li>شدت مشکل: {severity}</li>
                  <li>سابقه مشاوره: {hasHistory}</li>
                </ul>

                <form className="space-y-4 text-right">
                  <div>
                    <label className="block text-sm text-[#9810FA] mb-1">نام کامل</label>
                    <input type="text" className="w-full border rounded p-2 focus:ring-2 focus:ring-[#9810FA]" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#9810FA] mb-1">شماره تماس</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="w-full border rounded p-2 focus:ring-2 focus:ring-[#9810FA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#9810FA] mb-1">توضیحات یا سوال شما</label>
                    <textarea rows={3} className="w-full border rounded p-2 resize-none focus:ring-2 focus:ring-[#9810FA]" />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#9810FA] text-white px-6 py-2 rounded hover:bg-purple-800 transition"
                  >
                    ارسال درخواست
                  </button>
                </form>

                <button
                  onClick={() => setHasAcceptedGuide(false)}
                  className="mt-6 text-sm text-gray-500 hover:text-[#9810FA] transition"
                >
                  ⬅ بازگشت به راهنمای قبل از فرم
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
