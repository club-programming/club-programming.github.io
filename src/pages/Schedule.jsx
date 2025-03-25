import React from 'react';

const scheduleData = [
  { time: '13:50', duration: '1:00', content: 'ゲスト着席' },
  { time: '13:51', duration: '4:00', content: 'MC挨拶・ゲスト紹介・挨拶' },
  { time: '13:55', duration: '1:00', content: '発表開始（入場）' },
  { time: '13:56', duration: '5:00', content: '一番目 発表開始' },
  { time: '14:01', duration: '2:00', content: '一番目 FB' },
  { time: '14:03', duration: '1:00', content: '発表者退場 / 入場' },
  { time: '14:04', duration: '5:00', content: '二番目 発表開始' },
  { time: '14:09', duration: '2:00', content: '二番目 FB' },
  { time: '14:11', duration: '1:00', content: '発表者退場 / 入場' },
  { time: '14:12', duration: '5:00', content: '三番目 発表開始' },
  { time: '14:17', duration: '2:00', content: '三番目 FB' },
  { time: '14:19', duration: '1:00', content: '発表者退場 / 入場' },
  { time: '14:20', duration: '5:00', content: '四番目 発表開始' },
  { time: '14:25', duration: '2:00', content: '四番目 FB' },
  { time: '14:27', duration: '1:00', content: '発表者退場 / 入場' },
  { time: '14:28', duration: '2:00', content: '終わりの挨拶' },
];

const Schedule = () => {
  return (
    <div className="container relative mx-auto px-4 py-12">
      <div className="overflow-x-auto">
        <table className="mx-auto w-full max-w-screen-md border-collapse overflow-hidden rounded-lg bg-[#1F1B41]/50">
          <thead className="bg-[#17154B]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Time
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Lap
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Content
              </th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-[#2D2B3B] transition-colors hover:bg-[#17154B]/50"
              >
                <td className="px-6 py-4 text-slate-300">{item.time}</td>
                <td className="px-6 py-4 text-slate-300">{item.duration}</td>
                <td className="px-6 py-4 text-slate-300">{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
