import IshiharaYoshiharu from '../../assets/ishihara_yoshiharu.png';
import TakahamaRyota from '../../assets/takahama_ryota.png';
import YodaRyunosuke from '../../assets/yoda_ryunosuke.png';
import Akatsukiyuito from '../../assets/akatsuki_yuito.png';

import Image from 'next/image';

export default function Speakers() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-4xl font-bold text-transparent">
          Speaker
        </h1>
        <p className="mt-4 text-lg">登壇者の皆さんのご紹介</p>
        <div className="speakers-bg-p mt-24 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 lg:grid-cols-2">
          {[
            {
              name: '石原佳晴',
              overview: 'N高等学校8期生',
              introduction: 'Flutterが好きです',
              enthusiasm: '楽しみ、頑張る',
              images: IshiharaYoshiharu,
            },
            {
              name: '高浜遼太',
              overview: 'N高等学校9期生',
              introduction:
                'こんにちは！哲学とか、絵を描くことが好きです！\nプログラミングはもっと好きです！',
              enthusiasm:
                '聞いている人に期待感を持ってもらえるような、そんな発表がしたいです！\nよろしくお願いします！',
              images: TakahamaRyota,
            },
            {
              name: '依田隆之介',
              overview: 'N中等部,中学2年生',
              introduction:
                '依田隆之介です。好きな食べ物はたこ焼きで、普段はプログラミングをしています。',
              enthusiasm:
                'LT大会で、色々な人に聞いていただけるように頑張ります！',
              images: YodaRyunosuke,
            },
            {
              name: '谷豊',
              overview: 'S高等学校4期生',
              introduction:
                '主にWebアプリケーションなどを開発しています。UniProjectというサークルの運営をしています。',
              enthusiasm:
                'うまく話せるかはわかりませんが、精一杯プログラミングに興味を持っていただけるよう頑張ります！',
              images: Akatsukiyuito,
            },
          ].map((feature, i) => (
            <div key={i} className="p-7 lg:p-3">
              <div className="items-top gap-4 text-center lg:flex lg:text-left">
                {feature.images ? (
                  <Image
                    alt="Speaker"
                    className="mb-4 h-full flex-shrink-0 rounded-lg bg-white object-cover object-center lg:w-1/2"
                    src={feature.images}
                  />
                ) : (
                  <div className="flex h-auto w-full flex-shrink-0 items-center justify-center rounded-lg text-2xl font-medium text-white lg:w-1/2">
                    Coming soon...
                  </div>
                )}
                <div className="w-full whitespace-pre-wrap">
                  <h3 className="text-gray-300">{feature.overview}</h3>
                  <h2 className="mb-2 border-purple-500 text-2xl font-bold text-white lg:border-b-2">
                    {feature.name}
                  </h2>
                  <ul className="mb-3">
                    <li>
                      <h4 className="text-white-900 text-lg font-medium">
                        自己紹介
                      </h4>
                      <p className="text-gray-300">{feature.introduction}</p>
                    </li>
                    <li>
                      <h4 className="text-white-900 text-lg font-medium">
                        意気込み
                      </h4>
                      <p className="text-gray-300">{feature.enthusiasm}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
