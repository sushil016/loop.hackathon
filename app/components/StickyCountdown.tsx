"use client";

import { useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

// Registration deadline - February 4, 2026
const COUNTDOWN_FROM = "2026-02-04T23:59:59";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function StickyCountdown() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 backdrop-blur-sm shadow-lg">
      <div className="relative mx-auto max-w-7xl px-4 py-2">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
          aria-label="Close countdown"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Countdown Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          {/* Title */}
          <div className="text-white font-bold text-sm md:text-base lg:text-lg whitespace-nowrap">
            🚨 Registration Ends In:
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-1 md:gap-2">
            <CountdownItem unit="Day" text="Days" />
            <span className="text-white font-bold text-lg md:text-xl">:</span>
            <CountdownItem unit="Hour" text="Hrs" />
            <span className="text-white font-bold text-lg md:text-xl">:</span>
            <CountdownItem unit="Minute" text="Mins" />
            <span className="text-white font-bold text-lg md:text-xl">:</span>
            <CountdownItem unit="Second" text="Secs" />
          </div>

          {/* CTA Button */}
          <a
            href="https://unstop.com/o/lN0MAwv?lb=SbO6K1eZ&utm_medium=Share&utm_source=shortUrl"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block ml-4 px-4 py-1.5 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap text-sm"
          >
            Register Now →
          </a>
        </div>
      </div>
    </div>
  );
}

const CountdownItem = ({ unit, text }: { unit: string; text: string }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className="flex flex-col items-center justify-center gap-0.5">
      <div className="relative overflow-hidden text-center min-w-[40px] md:min-w-[50px]">
        <span
          ref={ref}
          className="block text-xl md:text-2xl lg:text-3xl font-black text-white tabular-nums"
        >
          {time.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-medium text-white/90 uppercase">
        {text}
      </span>
    </div>
  );
};

// Custom hook for countdown timer with animations
const useTimer = (unit: string) => {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Initial calculation
    handleCountdown();
    
    // Set up interval
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (distance > 0) {
      if (unit === "Day") {
        newTime = Math.floor(distance / DAY);
      } else if (unit === "Hour") {
        newTime = Math.floor((distance % DAY) / HOUR);
      } else if (unit === "Minute") {
        newTime = Math.floor((distance % HOUR) / MINUTE);
      } else {
        newTime = Math.floor((distance % MINUTE) / SECOND);
      }
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};
