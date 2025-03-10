import { useState, useEffect } from 'react';

export default function Gacha() {
  const [titles, setTitles] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    fetch('/lt_gacha.json')
      .then((response) => response.json())
      .then((data) => setTitles(data));
  }, []);

  function drawTitle() {
    if (titles.length === 0) return;
    const randomIndex = Math.floor(Math.random() * titles.length);
    setCurrentTitle(titles[randomIndex].title);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-8">LT ガチャ</h2>
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={drawTitle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ガチャを引く
        </button>
        {currentTitle && (
          <div className="text-2xl text-white font-semibold mt-4 p-4 bg-gray-800 rounded">
            {currentTitle}
          </div>
        )}
      </div>
    </div>
  );
}
