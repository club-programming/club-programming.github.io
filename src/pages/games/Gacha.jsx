import { useState, useEffect } from 'react';

export default function Gacha() {
  const [templates, setTemplates] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    fetch('/lt_gacha.json')
      .then((response) => response.json())
      .then((data) => setTemplates(data));
  }, []);

  function drawTitle() {
    if (templates.length === 0) return;

    // Select the main title randomly
    const randomTemplate =
      templates[Math.floor(Math.random() * templates.length)];

    // Select a sub-word randomly
    const randomWord =
      randomTemplate.words[
        Math.floor(Math.random() * randomTemplate.words.length)
      ];

    // Embed the sub-word into the main title
    const finalTitle = randomTemplate.main.replace('{{word}}', randomWord);

    setCurrentTitle(finalTitle);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-8 text-3xl font-bold text-white">LT ガチャ</h2>
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={drawTitle}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          ガチャを引く
        </button>
        {currentTitle && (
          <div className="mt-4 rounded bg-gray-800 p-4 text-2xl font-semibold text-white">
            {currentTitle}
          </div>
        )}
      </div>
    </div>
  );
}
