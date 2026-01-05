"use client";

// import { Calendar, MapPin, Clock, ArrowRight, FileText, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { RippleButton } from "@/components/ui/ripple-button";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion } from "motion/react";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        {/* <Image
          src="/loop-hero-background.png"
          alt=""
          fill
          className="object-cover"
          priority
        /> */}
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/10 opacity-20" />
        <Image
          src="/homepage2.jpeg"
          alt=""
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full mb-12 animate-fade-in-up">
          <AnimatedGradientText 
            className="text-sm font-semibold tracking-wide"
            colorFrom="#60a5fa"
            colorTo="#a855f7"
            speed={1.5}
          >
            24 hours National Level Hackathon
          </AnimatedGradientText>
        </div>

        {/* LOOP Text Image */}
        <div className="mb-6 animate-fade-in-up delay-100">
          <Image
            src="/loop-text.png"
            alt="LOOP"
            width={600}
            height={200}
            className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto mx-auto"
            priority
          />
        </div>

        {/* Animated Tagline with LayoutTextFlip */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-12 animate-fade-in-up delay-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <LayoutTextFlip
            text="Where Innovation Meets"
            words={["Reality", "Impact", "Systems", "Excellence"]}
            duration={2500}
          />
        </motion.div>

        {/* Event Countdown Clock - Placeholder for now */}
        <div className="mb-12 animate-fade-in-up delay-300">
          {/* Add your countdown clock component here */}
          <p className="text-white/60 text-sm">Event countdown clock coming soon...</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <RainbowButton asChild size="lg">
            <a
              href={UNSTOP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-base min-w-[240px]"
            >
              <Image
                src="/unstop-logo.png"
                alt="Unstop"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Register on Unstop
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </RainbowButton>

          <RippleButton
            onClick={() => window.location.href = '/problem-statements'}
            className="inline-flex items-center justify-center gap-2 border border-white/20 bg-transparent text-white px-2 py-[10px] rounded-2xl font-semibold text-base hover:bg-white/5 hover:border-white/30 transition-all duration-300 min-w-[240px]"
            rippleColor="rgba(101, 163, 230, 0.3)"
          >
            Problem Statements
          </RippleButton>
        </div>
      </div>
      
      
    </section>
  );
}
