import { SiX, SiFacebook, SiLine } from '@icons-pack/react-simple-icons';
import { ClipboardCopy } from 'lucide-react';

export default function Home() {
  const shareURL = new URL(
    window.location.origin + window.location.pathname
  ).toString();

  function handleCopyUrl() {
    navigator.clipboard.writeText(shareURL).then(() => {
      alert('URLをコピーしました');
    });
  }

  return (
    <div className="relative">
      {/* ヘッダーセクション */}
      <main className="container mx-auto px-4 py-20">
        {/* ヒーローセクション */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            ものづくり発表会
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            〜Create to change〜
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <button className="rounded-lg bg-purple-500 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:bg-purple-600 hover:shadow-purple-500/35">
              詳細を見る
            </button>
            <button className="rounded-lg border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition-all duration-300 hover:border-purple-500/50 hover:text-white">
              サンプル
            </button>
          </div>
        </div>

        {/* フィーチャーセクション */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: '部活動の様子',
              description: (
                <p className="text-sm leading-6 text-slate-400">
                  プログラミング部の普段の様子
                  <button
                    onClick={() =>
                      window.open(
                        'https://sites.google.com/nnn.ac.jp/computer/home',
                        '_blank'
                      )
                    }
                    className="mt-2 block w-full rounded-lg bg-purple-500 px-4 py-2 text-white transition-all duration-300 hover:bg-purple-600"
                  >
                    閲覧する（学内向け）
                  </button>
                </p>
              ),
            },
            {
              title: 'ものづくり発表会',
              description: (
                <p className="text-sm leading-6 text-slate-400">
                  今年のものづくり発表会のオンライン会場
                  <button
                    onClick={() =>
                      window.open(
                        'https://www.nnn.ed.nico/courses/168/chapters/2226/lessons/482532975',
                        '_blank'
                      )
                    }
                    className="mt-2 block w-full rounded-lg bg-purple-500 px-4 py-2 text-white transition-all duration-300 hover:bg-purple-600"
                  >
                    閲覧する
                  </button>
                </p>
              ),
            },
            {
              title: 'アーカイブ',
              description: (
                <p className="text-sm leading-6 text-slate-400">
                  去年のアーカイブ
                  <button
                    onClick={() =>
                      window.open(
                        'https://www.nnn.ed.nico/courses/168/chapters/2226/lessons/482532975',
                        '_blank'
                      )
                    }
                    className="mt-2 block w-full rounded-lg bg-purple-500 px-4 py-2 text-white transition-all duration-300 hover:bg-purple-600"
                  >
                    閲覧する（学内向け）
                  </button>
                </p>
              ),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-purple-500/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                <div className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              {feature.description}
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        {/* lt紹介セクション */}
        <div className="mt-24 flex flex-col items-center text-center">
          <h1 className="bg-gradient-to-l from-violet-600 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent">
            OVERVIEW
          </h1>
          <h2 className="text-2x1 mt-1 pb-4 text-slate-400">大会概要</h2>
          <div class="relative w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <p class="block whitespace-pre-wrap text-sm font-light leading-normal text-slate-200">
              N高グループ生、N中等部生による、プログラミングで作られた成果物の発表会です！5分という短い
              <br />
              時間にぎゅっと詰め込まれた様々な作品たちの魅力を是非！お楽しみください！
            </p>
          </div>
        </div>
        {/* シェアボタン */}
        <div className="mt-24 flex flex-col items-center text-center">
          <h1 className="bg-gradient-to-l from-violet-600 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent">
            SHARE
          </h1>
          <h2 className="text-2x1 mt-1 pb-4 text-slate-400">
            イベントをシェアしよう！
          </h2>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent('サンプル')}&url=${encodeURIComponent(shareURL)}`,
                  '_blank'
                )
              }
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:text-white"
            >
              <SiX className="h-5 w-5" />
            </button>

            <button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`,
                  '_blank'
                )
              }
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:text-white"
            >
              <SiFacebook className="h-5 w-5" />
            </button>

            <button
              onClick={() =>
                window.open(
                  `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareURL)}`,
                  '_blank'
                )
              }
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:text-white"
            >
              <SiLine className="h-5 w-5" />
            </button>

            <button
              onClick={handleCopyUrl}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:text-white"
            >
              <ClipboardCopy className="h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
