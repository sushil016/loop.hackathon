"use client";

import Link from "next/link";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Trophy } from "lucide-react";

export default function RegistrationBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 py-2 px-4 shadow-lg">
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {/* Pulse indicator */}
        <span className="animate-pulse flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>

        {/* Animated text */}
        <AnimatedGradientText
          className="text-sm sm:text-base font-bold tracking-wide"
          colorFrom="#ffffff"
          colorTo="#fef08a"
          speed={1}
        >
          🏆 Results Declared — Shortlisted Teams Announced!
        </AnimatedGradientText>

        {/* View Results button */}
        <Link
          href="/result-loop-1.0"
          className="inline-flex items-center gap-1.5 font-semibold text-sm text-black bg-white px-3 py-1 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Trophy className="w-3.5 h-3.5" />
          View Results
        </Link>
      </div>
    </div>
  );
}
