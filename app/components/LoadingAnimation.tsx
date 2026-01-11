"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lottie from "lottie-react";
import bikeAnimation from "@/public/Bike Loader.json";

export default function LoadingAnimation() {
  const [isComplete, setIsComplete] = useState(false);
  const [startExit, setStartExit] = useState(false);
  const [startZoomOut, setStartZoomOut] = useState(false);

  useEffect(() => {
    // Start zoom out animation after 2 seconds
    const zoomTimer = setTimeout(() => {
      setStartZoomOut(true);
    }, 2000);

    // Start exit animation after 3 seconds (2s display + 1s zoom)
    const exitTimer = setTimeout(() => {
      setStartExit(true);
    }, 3000);

    // Complete and unmount after 4 seconds (3s + 1s transition)
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
    }, 4000);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (isComplete) return null;

  return (
    <AnimatePresence mode="wait">
      {!startExit && (
        <motion.div
          key="loading"
          initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 50% 50%)" }}
          exit={{ 
            opacity: 0,
            clipPath: "circle(0% at 50% 50%)"
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-950 via-black to-gray-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* SVG Filter for kinetic noise */}
          <svg className="absolute w-0 h-0">
            <defs>
              <filter id="noise">
                <feTurbulence 
                  type="fractalNoise" 
                  baseFrequency="1.2" 
                  numOctaves="4" 
                  stitchTiles="stitch"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="0.2s"
                    values="1.2;1.6;1.2"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="4" />
              </filter>
            </defs>
          </svg>

          {/* Animated background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>

          {/* Container for animation and text with zoom in effect */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ scale: 1 }}
            animate={{ 
              scale: startZoomOut ? 8 : 1,
              opacity: startZoomOut ? 0 : 1
            }}
            transition={{ 
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            {/* Lottie Bike Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                x: [0, -3, 3, -1.5, 1.5, 0, -2, 2, 0],
                rotate: [0, -0.8, 0.8, -0.5, 0.5, 0, -0.3, 0.3, 0]
              }}
              transition={{ 
                scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
                opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
                y: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
                x: { 
                  duration: 0.15, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "linear"
                },
                rotate: { 
                  duration: 0.15, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "linear"
                }
              }}
              className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            >
              <Lottie
                animationData={bikeAnimation}
                loop={true}
                className="w-full h-full"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                x: [0, 2, -2, 1, -1, 0, 1.5, -1.5, 0],
                rotate: [0, 0.5, -0.5, 0.3, -0.3, 0, 0.2, -0.2, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, ease: "easeOut", delay: 0.5 },
                y: { duration: 0.8, ease: "easeOut", delay: 0.5 },
                x: { 
                  duration: 0.18, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "linear"
                },
                rotate: { 
                  duration: 0.18, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "linear"
                }
              }}
              className="relative z-10 mt-2 text-base sm:text-lg md:text-xl font-semibold text-center text-white/80 tracking-wide"
              style={{ 
                textShadow: "0 0 8px rgba(6, 182, 212, 0.3)",
                filter: "url(#noise)"
              }}
            >
              GOING BEYOND INFINITY
            </motion.p>
          </motion.div>

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 5) * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

