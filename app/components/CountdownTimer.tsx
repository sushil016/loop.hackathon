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

  if (!mounted) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-12">
      <DecryptorCircle value={timeLeft.days} label="Days" color="#a3e635" />    {/* Lime */}
      <DecryptorCircle value={timeLeft.hours} label="Hours" color="#22d3ee" />   {/* Cyan */}
      <DecryptorCircle value={timeLeft.minutes} label="Mins" color="#e879f9" />  {/* Pink */}
      <DecryptorCircle value={timeLeft.seconds} label="Secs" color="#fb923c" />  {/* Orange */}
    </div>
  );
}

// --- COMPONENT: CIRCULAR QUANTUM SCOPE ---
function DecryptorCircle({ value, label, color }: { value: number; label: string; color: string }) {
  const displayValue = useScrambleText(value);
  
  return (
    <div className="flex flex-col items-center gap-4 group">
      {/* 1. THE CIRCLE CONTAINER */}
      {/* CHANGED: border-white/40 for a much whiter, clearer border */}
      <div className="relative w-28 h-28 md:w-36 md:h-36 bg-black/40 backdrop-blur-xl border-[5px] border-white/40 rounded-full overflow-hidden shadow-2xl">
        
        {/* A. Background Grid */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />

        {/* B. The "Scanner" Beam */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] z-20 shadow-[0_0_10px_currentColor]"
          style={{ backgroundColor: color, color: color }}
        />
        
        {/* C. Circular Tech Borders (Rotating Scope) */}
        <div className="absolute inset-0 z-30 pointer-events-none p-1">
            <svg className="w-full h-full animate-[spin_10s_linear_infinite]">
                <circle 
                    cx="50%" cy="50%" r="45%" 
                    fill="none" 
                    stroke={color} 
                    strokeWidth="1.5"
                    strokeDasharray="40 20 40 150" 
                    strokeLinecap="round"
                    className="opacity-80"
                />
            </svg>
        </div>

        {/* D. Center Glow */}
        <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
        />

        {/* 2. THE TEXT CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span 
            className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-white tabular-nums"
            style={{ 
              textShadow: `0 0 15px ${color}`,
            }}
          >
            {displayValue}
          </span>
        </div>

      </div>

      {/* 3. LABEL */}
      <span 
        className="text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300 group-hover:tracking-[0.5em]"
        style={{ color: color }}
      >
        {label}
      </span>
    </div>
  );
}

// --- HOOK: SCRAMBLE LOGIC ---
function useScrambleText(targetValue: number) {
  const [display, setDisplay] = useState(targetValue < 10 ? `0${targetValue}` : `${targetValue}`);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>/?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let frame = 0;
    const maxFrames = 12; 
    
    const interval = setInterval(() => {
      if (frame >= maxFrames) {
        clearInterval(interval);
        setDisplay(targetValue < 10 ? `0${targetValue}` : `${targetValue}`);
      } else {
        const char1 = chars[Math.floor(Math.random() * chars.length)];
        const char2 = chars[Math.floor(Math.random() * chars.length)];
        setDisplay(`${char1}${char2}`);
        frame++;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [targetValue]);

  return display;
}