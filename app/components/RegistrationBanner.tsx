"use client";

import Image from "next/image";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

export default function RegistrationBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 py-1 px-4 flex items-center justify-center gap-4 shadow-lg">
      <span className="animate-pulse flex h-2 w-2 relative">
        {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span> */}
          {/* //<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span> */}
      </span>
      
      <AnimatedGradientText
        className="text-sm sm:text-lg font-bold tracking-wide"
        colorFrom="#ddff00ff"
        colorTo="#ff9100ff"
        speed={2}
      >
        Registrations are LIVE on
      </AnimatedGradientText>
      
      <a
        href={UNSTOP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex font-semibold text-[15px] text-black items-center  bg-white px-2 py-1 rounded-[8px] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      > 
        <Image
          src="/unstop1.png"
          alt="Unstop"
          width={70}
          height={24}
          className="h-6 w-auto"
        />
      </a>
    </div>
  );
}
