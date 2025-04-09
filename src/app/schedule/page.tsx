const scheduleData = [
  { time: '13:50 ~ 13:55', content: '開会・挨拶' },
  { time: '13:56 ~ 14:01', content: '発表 一人目' },
  { time: '14:04 ~ 14:09', content: '発表 二人目' },
  { time: '14:12 ~ 14:17', content: '発表 三人目' },
  { time: '14:20 ~ 14:25', content: '発表 四人目' },
  { time: '14:28 ~ 14:30', content: '閉会' },
];

export default function Schedule() {
  return (
    <div className="container relative mx-auto px-4 py-12">
      <h1 className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Schedule
      </h1>
      <p className="mb-8 text-center text-lg text-slate-300">
        ものづくり発表会は13:50~から始まります！
      </p>
      <div className="overflow-x-auto">
        <table className="mx-auto w-full max-w-screen-md border-collapse overflow-hidden rounded-lg bg-[#1F1B41]/50">
          <thead className="bg-[#17154B]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Time
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
                <td className="px-6 py-4 text-slate-300">{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
