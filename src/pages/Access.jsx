import React from 'react';

export default function Access() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-8 text-4xl font-bold">アクセス</h1>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">開催日時</h2>
        <p className="text-xl">2025年4月27日(日) 13:50 ~</p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">会場</h2>
        <div className="h-[600px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12968.760681485863!2d140.035529!3d35.647686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022821fd52ebfdf%3A0xcec0c09c4bed45e0!2z5bmV5by144Oh44OD44K7!5e0!3m2!1sja!2sjp!4v1742952152257!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
