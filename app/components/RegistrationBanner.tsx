"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { useAnimate } from "motion/react";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Unit = "Day" | "Hour" | "Minute" | "Second";

export default function RegistrationBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 py-2 px-4 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        {/* Pulse indicator */}
        {/* <span className="animate-pulse flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span> */}
        
        {/* Animated text */}
        <AnimatedGradientText
          className="text-sm sm:text-base font-bold tracking-wide"
          colorFrom="#d1f11cff"
          colorTo="#fa2e2eff"
          speed={1}
        >
          Registration Ends In:
        </AnimatedGradientText>
        
        {/* Countdown */}
        <div className="flex items-center gap-1 sm:gap-2">
          <CountdownItem unit="Day" text="days" />
          <span className="text-white font-bold text-lg">:</span>
          <CountdownItem unit="Hour" text="hrs" />
          <span className="text-white font-bold text-lg">:</span>
          <CountdownItem unit="Minute" text="mins" />
          <span className="text-white font-bold text-lg">:</span>
          <CountdownItem unit="Second" text="secs" />
        </div>
        
        {/* Register button */}
        <a
          href={UNSTOP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex font-semibold text-[15px] text-black items-center bg-white px-2 py-1 rounded-[8px] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        > Register now →
          <Image
            src="/unstop1.png"
            alt="Unstop"
            width={70}
            height={24}
            className="h-6 w-auto"
          />
        </a>
      </div>
    </div>
  );
}

const CountdownItem = ({ unit, text }: { unit: Unit; text: string }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className="flex items-center gap-1">
      <div className="relative flex items-center justify-center overflow-hidden">
        <span
          ref={ref}
          className="block text-sm sm:text-base md:text-lg font-bold text-white tabular-nums"
        >
          {time}
        </span>
      </div>
      <span className="text-xs sm:text-sm font-medium text-blue-100 capitalize">
        {text}
      </span>
    </div>
  );
};

const useTimer = (unit: Unit) => {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState("00");

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date("2026-02-17T23:59:59");
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (distance > 0) {
      switch (unit) {
        case "Day":
          newTime = Math.floor(distance / DAY);
          break;
        case "Hour":
          newTime = Math.floor((distance % DAY) / HOUR);
          break;
        case "Minute":
          newTime = Math.floor((distance % HOUR) / MINUTE);
          break;
        case "Second":
          newTime = Math.floor((distance % MINUTE) / SECOND);
          break;
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
      setTime(newTime.toString().padStart(2, "0"));

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
