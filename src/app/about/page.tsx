interface EventDetail {
  label: string;
  value: string;
}

interface ParticipantGroup {
  category: string;
  members: string[];
}

export default function About(): React.ReactElement {
  const eventDetails: EventDetail[] = [
    { label: 'タイトル', value: 'ものづくり発表会〜Create to change〜' },
    {
      label: '企画概要',
      value: 'N 高グループ生、N中等部生による、プログラミング成果発表会',
    },
    { label: '日程', value: '2025年4月27日' },
    { label: '実施時間', value: '13:50 ~ 14:30（40分間）' },
    { label: 'スタジオ', value: '磁石祭ステージ' },
  ];

  const participants: ParticipantGroup[] = [
    {
      category: 'ゲスト',
      members: ['吉村 総一郎さん', '小川 慧さん'],
    },
    {
      category: '発表者',
      members: [
        '石原 佳晴さん',
        '依田 隆之介さん',
        'あかつきゆいとさん',
        '高浜 遼太さん',
      ],
    },
  ];

  return (
    <div className="container relative mx-auto px-4 py-12">
      <h1 className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        About
      </h1>
      <p className="mb-8 text-center text-lg text-slate-300">
        プログラミング成果発表会の詳細をご紹介します
      </p>

      <div className="mx-auto max-w-screen-md space-y-8">
        <div className="rounded-lg border border-slate-800 bg-[#1F1B41]/50 p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">イベント詳細</h2>
          <div className="space-y-4">
            {eventDetails.map((detail) => (
              <div
                key={detail.label}
                className="group grid grid-cols-1 gap-2 border-b border-[#2D2B3B] pb-4 transition-colors hover:bg-[#17154B]/50 sm:grid-cols-4"
              >
                <div className="font-medium text-purple-400">
                  {detail.label}
                </div>
                <div className="text-slate-300 sm:col-span-3">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 bg-[#1F1B41]/50 p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">出演者</h2>
          <div className="space-y-8">
            {participants.map((group) => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-400">
                  {group.category}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.members.map((member) => (
                    <div
                      key={member}
                      className="rounded-lg border border-slate-800 bg-[#17154B]/50 p-4 transition-colors hover:bg-[#17154B]"
                    >
                      <span className="text-slate-300">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
