import type { Metadata } from 'next';
import './globals.css';

// Components
import { Header } from '../components/Header';

// Font
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const metadata: Metadata = {
  title: '磁石祭ZERO ステージ企画「ものづくり発表会 〜Create to change〜」',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className}`}>
        <div className="min-h-screen bg-[#13111C] selection:bg-purple-500/90 selection:text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,#17154B,transparent_45%)] opacity-70" />
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_120%,#1F1B41,transparent_45%)]" />

          <div className="relative">
            <Header />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
