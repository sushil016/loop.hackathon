"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const eventDate = new Date("2026-02-20T00:00:00");

  const calculateTime = () => {
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();

    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white text-center bg-black/50 p-4 rounded-lg backdrop-blur-md">
      <div className="flex gap-4 text-lg font-bold">
        <div>
          {timeLeft.days} <span className="text-sm">Days</span>
        </div>
        <div>
          {timeLeft.hours} <span className="text-sm">Hours</span>
        </div>
        <div>
          {timeLeft.minutes} <span className="text-sm">Min</span>
        </div>
        <div>
          {timeLeft.seconds} <span className="text-sm">Sec</span>
        </div>
      </div>
      <div className="text-xs mt-1">Friday • 20 Feb 2026</div>
    </div>
  );
}
