function App() {
  return (
    <div className="min-h-screen bg-[#13111C] selection:bg-purple-500/90 selection:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,#17154B,transparent_45%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_120%,#1F1B41,transparent_45%)]" />

      <div className="relative">
        {/* ヘッダーセクション */}
        <header className="py-6">
          <nav className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
                プログラミング部
              </h1>
              <div className="space-x-8">
                {['会場', '登壇者', 'タイムスケジュール'].map((item) => (
                  <button
                    key={item}
                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </header>

        {/* メインコンテンツ */}
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
    </div>
  );
}

export default App;
