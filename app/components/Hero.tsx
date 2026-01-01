"use client";

import { Calendar, MapPin, Clock, ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Registrations Open</span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6 animate-fade-in-up delay-100">
          <Image
            src="/loop-logo.png"
            alt="Loop Logo"
            width={120}
            height={120}
            className="rounded-2xl"
            priority
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in-up delay-100">
          <span className="gradient-text glow-text">LOOP</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 mb-6 animate-fade-in-up delay-200">
          <span className="text-blue-400">Build</span>
          <span className="text-gray-500 mx-3">.</span>
          <span className="text-cyan-400">Break</span>
          <span className="text-gray-500 mx-3">.</span>
          <span className="text-blue-400">Refine</span>
        </p>

        {/* Theme */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
          24 Hours Offline National Level Hackathon
        </p>

        {/* Event Details Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-400">
          <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3 card-hover">
            <Calendar className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <p className="text-xs text-gray-500">Date</p>
              <p className="text-sm font-medium">20th February 2026</p>
            </div>
          </div>

          <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3 card-hover">
            <Clock className="w-5 h-5 text-cyan-400" />
            <div className="text-left">
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-medium">24 Hours</p>
            </div>
          </div>

          <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3 card-hover">
            <MapPin className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <p className="text-xs text-gray-500">Venue</p>
              <p className="text-sm font-medium">Bharati Vidyapeeth College of Engineering, Navi Mumbai</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2 animate-pulse-glow"
          >
            Register Now
            <ArrowRight className="w-5 h-5" />
          </a>

          <Link
            href="/problem-statements"
            className="btn-secondary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            View Problem Statements
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-500">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold gradient-text">₹1,00,000</p>
            <p className="text-gray-500 text-sm mt-1">Prize Pool</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold gradient-text">24</p>
            <p className="text-gray-500 text-sm mt-1">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold gradient-text">4-6</p>
            <p className="text-gray-500 text-sm mt-1">Team Members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold gradient-text">100+</p>
            <p className="text-gray-500 text-sm mt-1">Expected Teams</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
          <div className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
