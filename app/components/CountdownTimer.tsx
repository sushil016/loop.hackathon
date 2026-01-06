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
        <div className="text-white bg-transparent p-2">
            <h3 className="text-left text-base md:text-lg font-semibold mb-2">
                Hackathon Begins In
            </h3>

            <div className="flex gap-5 md:gap-8 text-3xl md:text-4xl lg:text-5xl font-black justify-start">
                <div>
                    {String(timeLeft.days).padStart(2, "0")}
                    <span className="block text-[10px] font-medium opacity-80">Days</span>
                </div>

            <div>
                {String(timeLeft.hours).padStart(2, "0")}
                <span className="block text-[10px] opacity-80">Hours</span>
            </div>

            <div>
                {String(timeLeft.minutes).padStart(2, "0")}
                <span className="block text-[10px] opacity-80">Minutes</span>
            </div>

            <div>
                {String(timeLeft.seconds).padStart(2, "0")}
                <span className="block text-[10px] opacity-80">Seconds</span>
            </div>
        </div>

        <p className="text-left text-xs mt-3 opacity-90">
            Friday • 20 February 2026
        </p>
    </div>
  );
}
