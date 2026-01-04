"use client";

// import { Target, Users, Trophy, Rocket, Brain, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    title: "₹1,00,000+",
    subtitle: "Prize Pool",
    description: "Compete for exciting cash prizes and exclusive goodies",
  },
  {
    title: "100+",
    subtitle: "Participants",
    description: "Network with innovators and industry experts",
  },
  {
    title: "24 Hours",
    subtitle: "Non-Stop",
    description: "Intensive coding, mentoring, and building",
  },
  {
    title: "Real Impact",
    subtitle: "Solutions",
    description: "Build systems that solve actual problems",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-black">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">About the Event</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What is Loop?
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A hackathon that values depth over speed
          </p>
        </div>

        {/* Main Content - Two Column */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-white/80 leading-relaxed">
                Loop is a <span className="text-white font-semibold">24-hour National Level Hackathon</span> designed 
                for students who want to solve real-world problems using cutting-edge technology.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                We focus on innovation beyond basic applications — promoting impactful solutions in automation, 
                robotics, AI systems, and smart infrastructure.
              </p>
            </div>
            
            {/* Quote Block */}
            <div className="relative pl-6 border-l-2 border-blue-500/50">
              <p className="text-white/70 italic text-lg leading-relaxed">
                "What sets Loop apart is its focus on depth over speed. We challenge participants to 
                think in systems — considering failure, iteration, and real-world constraints from day one."
              </p>
            </div>

            {/* Key Point */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <p className="text-xl font-medium text-white">
                It's not about building fast — it's about building right.
              </p>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-white mb-1">{item.title}</p>
                <p className="text-white/40 text-sm font-medium uppercase tracking-wide mb-3">{item.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Can Participate */}
        <div className="relative rounded-3xl bg-white/[0.02] border border-white/[0.05] p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Who Can Participate?</h3>
              <p className="text-white/50">Open to undergraduate students from any discipline</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <p className="text-4xl font-bold text-white mb-3">UG</p>
              <p className="text-white/40 text-sm font-medium uppercase tracking-wide mb-2">Students</p>
              <p className="text-white/50 text-sm">Any undergraduate pursuing Bachelor's Degree</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <p className="text-4xl font-bold text-white mb-3">3-6</p>
              <p className="text-white/40 text-sm font-medium uppercase tracking-wide mb-2">Members</p>
              <p className="text-white/50 text-sm">Team size requirement for participation</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <p className="text-4xl font-bold text-white mb-3">Any</p>
              <p className="text-white/40 text-sm font-medium uppercase tracking-wide mb-2">College</p>
              <p className="text-white/50 text-sm">Inter-college team formation allowed</p>
            </div>
          </div>
        </div>

        {/* Organizer */}
        <div className="text-center mt-16">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-3">Organized By</p>
          <p className="text-xl font-semibold text-white mb-1">Innovation & Robotics Lab</p>
          <p className="text-white/50">Bharati Vidyapeeth College of Engineering, Navi Mumbai</p>
        </div>
      </div>
    </section>
  );
}
