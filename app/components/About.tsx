"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Highlight } from "@/components/ui/hero-highlight";
import { Cover } from "@/components/ui/cover";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { HyperText } from "@/components/ui/hyper-text";
import { ShineBorder } from "@/components/ui/shine-border";
import { ConfettiButton } from "@/components/ui/confetti";
import { RippleButton } from "@/components/ui/ripple-button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-black">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned with Pointer Highlight */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About{" "}
            <PointerHighlight
              rectangleClassName="border-2 border-blue-500"
              pointerClassName="text-blue-500"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                Loop Hackathon
              </span>
            </PointerHighlight>
          </h2>
        </div>

        {/* Main Content - Full Width */}
        <div className="w-full space-y-12 mb-16">
          {/* Content with Highlights */}
          <div className="w-full text-xl text-white/90 leading-relaxed">
            <Highlight className="text-white font-bold">
              Loop
            </Highlight>
            <span> is our annual </span>
            <Highlight className="text-white font-bold">
              24-hour
            </Highlight>
            <span> National Level Hackathon</span>
            <Cover className="text-white font-bold">
               organized by Bharati Vidyapeeth College of Engineering, Navi Mumbai
            </Cover>
            <span>  designed for students who want to solve real-world problems using cutting-edge technology. We focus on innovation beyond basic applications — promoting impactful solutions in automation, AI systems, and cyber security.</span>
          </div>
          
          {/* Quote Block */}
          <div className="relative pl-6 border-l-2 border-blue-500/50 w-full">
            <p className="text-white/70 italic text-lg leading-relaxed">
              What sets Loop apart is its focus on depth over speed. We challenge participants to think in systems — considering failure, iteration, and real-world constraints from day one.
            </p>
          </div>
        </div>

        {/* Event Details Section */}
        <div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Dates */}
            <div className="relative group">
              <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-red-600 rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">Dates:</h3>
                <AnimatedGradientText
                  className="text-2xl font-bold"
                  colorFrom="#f97316"
                  colorTo="#ea580c"
                  speed={1.5}
                >
                  11 March 2026
                </AnimatedGradientText>
              </div>
            </div>

            {/* Prizes - Completely Redesigned */}
            <div className="relative group">
              <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-blue-600 rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-white mb-6">Prize Pool</h3>
                
                {/* Shine Border Card with Confetti */}
                <div className="relative">
                  <ShineBorder
                    shineColor={["#2461fbff", "#f59e0b", "#d97706"]}
                    duration={8}
                    borderWidth={2}
                    className="rounded-2xl"
                  />
                  <div className="relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-5xl font-black text-yellow-400 mb-2">
                      ₹1,00,000
                    </div>
                    
                    <ConfettiButton
                      className="w-full mt-4 bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white font-bold py-2 rounded-lg transition-all"
                      options={{
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#2476fbff", "#edf50bff", "#d97706", "#0cead8ff"],
                      }}
                    >
                      🎉 Celebrate
                    </ConfettiButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Size */}
            <div className="relative group">
              <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-red-600 rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">Team Size</h3>
                <AnimatedGradientText
                  className="text-2xl font-bold"
                  colorFrom="#60a5fa"
                  colorTo="#a855f7"
                  speed={1.5}
                >
                  3 to 6 members
                </AnimatedGradientText>
              </div>
            </div>
          </div>

          {/* Download Resources Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="/Loop-brochure.pdf" download>
              <RippleButton className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                <Download className="w-5 h-5" />
                Official Brochure
              </RippleButton>
            </a>

            <a href="/Loop-PPT.pdf" download>
              <RippleButton className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg bg-white/5">
                <Download className="w-5 h-5" />
                Download PPT Template
              </RippleButton>
            </a>
          </div>

          {/* Registration Fee Info */}
          <div className="relative rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.08] p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <HyperText
                className="text-xl md:text-2xl text-white font-bold leading-relaxed mb-6"
                duration={1000}
                startOnView={true}
              >
                Online registration of Loop is free
              </HyperText>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6" />
              <p className="text-lg md:text-xl text-white/80">
                Registration fee for{" "}
                <Cover>
                  <span className="font-bold text-white">Grand Finale for Shortlisted teams</span>
                </Cover>
                {" "}
                <AnimatedGradientText
                  className="text-2xl font-bold ml-2"
                  colorFrom="#22c55e"
                  colorTo="#16a34a"
                  speed={1.2}
                >
                  ₹1,000/- 
                </AnimatedGradientText>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
