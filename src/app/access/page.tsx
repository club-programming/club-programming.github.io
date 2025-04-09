import React from 'react';

export default function Access() {
  return (
    <div className="container relative mx-auto px-4 py-12">
      <h1 className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Access
      </h1>
      <p className="mb-8 text-center text-lg text-slate-300">会場案内</p>

      <div className="mx-auto mb-8 max-w-screen-md overflow-hidden rounded-lg bg-[#1F1B41]/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">開催日時</h2>
        <p className="text-xl text-slate-300">2025年4月27日(日) 13:50 ~</p>
      </div>

      <div className="mx-auto max-w-screen-md overflow-hidden rounded-lg bg-[#1F1B41]/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-white">会場</h2>
        <div className="h-[500px] w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12968.760681485863!2d140.035529!3d35.647686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022821fd52ebfdf%3A0xcec0c09c4bed45e0!2z5bmV5by144Oh44OD44K7!5e0!3m2!1sja!2sjp!4v1742952152257!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
