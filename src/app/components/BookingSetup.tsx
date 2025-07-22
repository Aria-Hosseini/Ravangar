'use client';
import { useState } from 'react';

export function BookingSetup() {
  const [mode, setMode] = useState<'تلفنی' | 'حضوری'>('تلفنی');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [schedule, setSchedule] = useState<
    { date: string; time: string; mode: string }[]
  >([]);

  const handleAddSlot = () => {
    if (date && time) {
      setSchedule((prev) => [...prev, { date, time, mode }]);
      setDate('');
      setTime('');
    }
  };

  return (
    <div className="space-y-6 text-right">
      <div className="flex gap-4">
        {['تلفنی', 'حضوری'].map((type) => (
          <button
            key={type}
            onClick={() => setMode(type as 'تلفنی' | 'حضوری')}
            className={`px-4 py-2 rounded-full border ${
              mode === type ? 'bg-[#9810FA] text-white' : 'text-[#9810FA] border-[#9810FA]'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm text-gray-600">تاریخ</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-600">ساعت</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      <button
        onClick={handleAddSlot}
        className="bg-[#9810FA] text-white px-6 py-2 rounded hover:bg-purple-800 transition"
      >
        ثبت بازه مشاوره
      </button>

      <hr className="my-4" />

      <h3 className="text-[#9810FA] font-semibold">بازه‌های تنظیم‌شده:</h3>
      <ul className="text-sm text-gray-700 space-y-1">
        {schedule.map((slot, i) => (
          <li key={i}>🔸 {slot.date} ساعت {slot.time} ({slot.mode})</li>
        ))}
      </ul>
    </div>
  );
}
