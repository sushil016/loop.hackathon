"use client";

// import { Calendar, MapPin, Clock, ArrowRight, FileText, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Full-size Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/loop-logo.png"
          alt=""
          width={800}
          height={800}
          className="opacity-[0.03] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] object-contain"
          priority
        />
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full mb-12 animate-fade-in-up">
          <span className="text-sm font-medium text-white/80 tracking-wide">24 hours National Level Hackathon</span>
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        </div>

        {/* LOOP Text */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-6 animate-fade-in-up delay-100 tracking-tight">
          LOOP
        </h1>

        {/* Tagline */}
        <p className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 animate-fade-in-up delay-200">
          <span className="font-normal text-white">Build</span>
          <span className="text-white/30 mx-4">·</span>
          <span className="font-normal text-white">Break</span>
          <span className="text-white/30 mx-4">·</span>
          <span className="font-normal text-white">Refine</span>
        </p>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/50 font-light mb-12 max-w-xl mx-auto animate-fade-in-up delay-300">
          24-hour offline hackathon focused on building systems that matter
        </p>

        {/* Social Media Links */}
        

        {/* Event Info - Minimal Text */}
        <div className="flex flex-wrap justify-center gap-6 mb-14 animate-fade-in-up delay-400">
          <div className="flex items-center gap-2 text-white/70">
            <span className="text-sm font-medium">20 Feb 2026</span>
          </div>
          <div className="w-px h-5 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/70">
            <span className="text-sm font-medium">24 Hours</span>
          </div>
          <div className="w-px h-5 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/70">
            <span className="text-sm font-medium">BVCOE, Navi Mumbai</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
          <a
            href={UNSTOP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            Register Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <Link
            href="/problem-statements"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Problem Statements
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12 animate-fade-in-up delay-500">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">₹1L+</p>
            <p className="text-white/40 text-sm font-medium tracking-wide uppercase">Prize Pool</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">24</p>
            <p className="text-white/40 text-sm font-medium tracking-wide uppercase">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">3-6</p>
            <p className="text-white/40 text-sm font-medium tracking-wide uppercase">Per Team</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">100+</p>
            <p className="text-white/40 text-sm font-medium tracking-wide uppercase">Teams</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 ">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-14 animate-fade-in-up delay-350">
          <a
            href="https://instagram.com/loop.hackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">loop.hackathon</span>
          </a>
          <a
            href="https://loop-hackathon.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span className="text-sm font-medium">loop-hackathon.vercel.app</span>
          </a>
          <a
            href="mailto:loop.hackathon@bvcoenm.edu.in"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm font-medium">loop.hackathon@bvcoenm.edu.in</span>
          </a>
        </div>
      </div>
    </section>
  );
}
