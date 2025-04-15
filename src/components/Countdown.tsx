'use client';

import { useEffect, useState } from 'react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-04-27T13:50:00+09:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-center w-fit mx-auto rounded-xl px-4 border border-slate-800 bg-slate-900/50">
      <div className="p-4">
        <div className="text-3xl font-bold text-purple-500">
          {timeLeft.days}
        </div>
        <div className="text-sm text-slate-400">日</div>
      </div>
      <div className=" p-4">
        <div className="text-3xl font-bold text-purple-500">
          {timeLeft.hours}
        </div>
        <div className="text-sm text-slate-400">時間</div>
      </div>
      <div className=" p-4">
        <div className="text-3xl font-bold text-purple-500">
          {timeLeft.minutes}
        </div>
        <div className="text-sm text-slate-400">分</div>
      </div>
      <div className=" p-4">
        <div className="text-3xl font-bold text-purple-500">
          {timeLeft.seconds}
        </div>
        <div className="text-sm text-slate-400">秒</div>
      </div>
    </div>
  );
}
