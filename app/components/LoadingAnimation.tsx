"use client";

import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phases = ["Building", "Breaking", "Refining"];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    // Phase text animation
    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(phaseInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      {/* Infinity Symbol Animation */}
      <div className="relative w-32 h-16 sm:w-40 sm:h-20 mb-12">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Infinity path - base (dim) */}
          <path
            d="M25 25C25 16.716 31.716 10 40 10C48.284 10 55 16.716 55 25C55 33.284 61.716 40 70 40C78.284 40 85 33.284 85 25C85 16.716 78.284 10 70 10C61.716 10 55 16.716 55 25C55 33.284 48.284 40 40 40C31.716 40 25 33.284 25 25Z"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Infinity path - animated glow */}
          <path
            d="M25 25C25 16.716 31.716 10 40 10C48.284 10 55 16.716 55 25C55 33.284 61.716 40 70 40C78.284 40 85 33.284 85 25C85 16.716 78.284 10 70 10C61.716 10 55 16.716 55 25C55 33.284 48.284 40 40 40C31.716 40 25 33.284 25 25Z"
            stroke="url(#infinityGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-infinity-draw"
            style={{
              strokeDasharray: 200,
              strokeDashoffset: 200,
            }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Orbiting dot */}
        <div className="absolute inset-0">
          <div 
            className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(59,130,246,0.6)] animate-orbit-infinity"
            style={{
              position: 'absolute',
              offsetPath: 'path("M32 20C32 13.373 37.373 8 44 8C50.627 8 56 13.373 56 20C56 26.627 61.373 32 68 32C74.627 32 80 26.627 80 20C80 13.373 74.627 8 68 8C61.373 8 56 13.373 56 20C56 26.627 50.627 32 44 32C37.373 32 32 26.627 32 20Z")',
              offsetDistance: '0%',
            }}
          />
        </div>
      </div>

      {/* Phase Text */}
      <div className="h-8 mb-8 overflow-hidden">
        <div 
          className="transition-transform duration-300 ease-out"
          style={{ transform: `translateY(-${currentPhase * 32}px)` }}
        >
          {phases.map((phase, index) => (
            <p
              key={phase}
              className={`h-8 text-lg sm:text-xl font-light tracking-widest text-center ${
                index === currentPhase ? 'text-white' : 'text-white/30'
              }`}
            >
              {phase}
              <span className="animate-pulse">...</span>
            </p>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-48 sm:w-64 h-px bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="mt-4 text-white/30 text-xs font-mono tracking-wider">
        {progress}%
      </p>

      {/* Subtle tagline */}
      <p className="absolute bottom-8 text-white/20 text-xs tracking-[0.3em] uppercase">
        Iteration in progress
      </p>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes infinityDraw {
          0% {
            stroke-dashoffset: 200;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -200;
          }
        }
        
        @keyframes orbitInfinity {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }
        
        .animate-infinity-draw {
          animation: infinityDraw 2.5s ease-in-out infinite;
        }
        
        .animate-orbit-infinity {
          animation: orbitInfinity 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
