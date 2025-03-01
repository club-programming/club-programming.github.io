export default function Home() {
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
      </main>
    </div>
  );
}
