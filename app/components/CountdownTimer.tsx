"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import infinityAnimation from "@/public/infinity loop animation.json";

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Small Infinity Loop with Transparent Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-128 h-64"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Lottie Animation */}
          <Lottie
            animationData={infinityAnimation}
            loop={true}
            style={{
              width: '100%',
              height: '100%',
              filter: 'brightness(3) contrast(2) invert(1)',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
