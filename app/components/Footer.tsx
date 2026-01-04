"use client";

import Image from "next/image";
import Link from "next/link";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* Logo & Name */}
          <Link href="/" className="inline-flex items-center gap-4 mb-8">
            <Image
              src="/loop-logo.png"
              alt="Loop"
              width={56}
              height={56}
              className="rounded-xl"
            />
            <span className="text-3xl font-bold text-white">LOOP</span>
          </Link>
          
          <p className="text-xl text-white/50 font-light max-w-md mx-auto">
            24-hour National Level Hackathon
          </p>
        </div>

        {/* Contact Organizer */}
        <div className="text-center mb-12">
          <h4 className="text-lg font-semibold text-white mb-4">Contact Organizer</h4>
          <p className="text-xl text-white/70 mb-2">
            Bharati Vidyapeeth College of Engineering, Navi Mumbai
          </p>
          <p className="text-lg text-white/50 mb-4">
            Room No: 211
          </p>
          <a 
            href="tel:+919967612372"
            className="text-xl text-white hover:text-white/70 transition-colors font-medium"
          >
            +91 99676 12372
          </a>
        </div>

        {/* Resources */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Link
            href="/problem-statements"
            className="text-lg text-white hover:text-white/70 transition-colors font-medium"
          >
            Problem Statements
          </Link>
          <Link
            href="/downloads"
            className="text-lg text-white hover:text-white/70 transition-colors font-medium"
          >
            Downloads
          </Link>
          <a
            href={UNSTOP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white hover:text-white/70 transition-colors font-medium"
          >
            Register on Unstop ↗
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.08] pt-8">
          <p className="text-center text-white/30 text-base">
            © 2026 Loop Hackathon · Innovation & Robotics Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
