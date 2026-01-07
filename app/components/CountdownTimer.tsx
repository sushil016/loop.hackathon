"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  // Target Date: Feb 20, 2026
  const targetDate = new Date("2026-02-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="flex justify-center items-center gap-6 py-8">
      {/* Timer Container */}
      <div className="flex gap-4 md:gap-6 text-left">
        <TimeUnit value={timeLeft.days} label="Days" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}

// Sub-component for individual time units
function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        key={value}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 5, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* The Number */}
        <span className="text-4xl md:text-5xl font-bold font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tabular-nums">
          {value < 10 ? `0${value}` : value}
        </span>
      </motion.div>
      
      {/* The Label */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-medium mt-1">
        {label}
      </span>
    </div>
  );
}

// The colon separator
function Separator() {
  return (
    <div className="flex flex-col justify-start pt-2">
      <span className="text-2xl md:text-3xl text-white/20 font-light">:</span>
    </div>
  );
}