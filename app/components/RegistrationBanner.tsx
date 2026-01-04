"use client";

import Image from "next/image";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

export default function RegistrationBanner() {
  return (
    <a
      href={UNSTOP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-3 px-4 flex items-center justify-center gap-4 hover:opacity-95 transition-opacity cursor-pointer group"
    >
      <span className="animate-pulse flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
      
      <span className="text-white font-semibold text-xs sm:text-base tracking-wide">
        Registrations are LIVE on Unstop!
      </span>
      
      
      <span className="text-white/80 text-sm group-hover:translate-x-1 transition-transform">
        Register Now →
      </span>
    </a>
  );
}
