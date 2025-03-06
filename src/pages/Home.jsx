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
            LT大会
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">LTの説明</p>
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
              title: 'サンプル１',
              description:
                'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
            },
            {
              title: 'サンプル２',
              description:
                'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
            },
            {
              title: 'サンプル３',
              description:
                'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
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
              <p className="text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* シェアボタン */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent('サンプル')}&url=${encodeURIComponent(shareURL)}`,
                '_blank'
              )
            }
            className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition-all hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>シェア</span>
          </button>

          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`,
                '_blank'
              )
            }
            className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-4 py-2 text-white transition-all hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>シェア</span>
          </button>

          <button
            onClick={() =>
              window.open(
                `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareURL)}`,
                '_blank'
              )
            }
            className="inline-flex items-center gap-2 rounded-lg bg-[#00B900] px-4 py-2 text-white transition-all hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.02 0C5.378 0 0 4.372 0 9.764c0 4.832 4.282 8.864 10.08 9.634v3.382a.62.62 0 0 0 .3.52.61.61 0 0 0 .62.04c.136-.06 3.342-2.036 4.764-2.934 6.02-.602 10.236-4.608 10.236-9.382C24 4.372 18.662 0 12.02 0z" />
            </svg>
            <span>シェア</span>
          </button>

          <button
            onClick={handleCopyUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white transition-all hover:opacity-90"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
            <span>URLをコピー</span>
          </button>
        </div>
      </main>
    </div>
  );
}
