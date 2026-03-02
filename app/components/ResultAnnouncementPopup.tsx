"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Trophy, Sparkles } from "lucide-react";

export default function ResultAnnouncementPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Small delay so it appears after the loading screen
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 400);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-400 ${
        isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={`relative w-full max-w-lg rounded-3xl overflow-hidden transition-all duration-500 ${
          isClosing ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {/* Animated border glow */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-80 animate-pulse" />

        <div className="relative bg-black rounded-3xl p-1">
          <div className="relative rounded-[22px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 text-white/70" />
            </button>

            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-500/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-500/20 rounded-full blur-[80px]" />
            </div>

            {/* Content */}
            <div className="relative p-8 sm:p-10 text-center">
              {/* Trophy icon */}
              <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/30">
                <Trophy className="w-10 h-10 text-white" />
              </div>

              {/* Sparkle badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-5">
                <Sparkles className="w-3 h-3" />
                Announcement
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                Loop 1.0 Results{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Announced!
                </span>
              </h2>

              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                The shortlisted teams for Loop 1.0 Grand Finale on{" "}
                <span className="text-white/80 font-medium">11th March 2026</span>{" "}
                have been announced. Check if your team made it!
              </p>

              {/* CTA */}
              <Link
                href="/result-loop-1.0"
                onClick={handleClose}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold text-base transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/25"
              >
                <Trophy className="w-4 h-4" />
                View Results
              </Link>

              <button
                onClick={handleClose}
                className="block mx-auto mt-4 text-white/30 hover:text-white/60 text-sm transition-colors cursor-pointer"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
