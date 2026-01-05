"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Highlight } from "@/components/ui/hero-highlight";
import { Cover } from "@/components/ui/cover";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-28 bg-black">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Partner with{" "}
            <PointerHighlight
              rectangleClassName="border-2 border-yellow-500"
              pointerClassName="text-yellow-500"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
                Loop
              </span>
            </PointerHighlight>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl">
            Connect with the next generation of tech innovators and showcase your brand
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Why Sponsor */}
          <div>
            <div className="text-xl text-white/90 leading-relaxed mb-12">
              <span>Join </span>
              <Highlight className="text-white font-bold">
                Loop 1.0
              </Highlight>
              <span> as a sponsor and gain direct access to </span>
              <Cover className="text-white font-bold">
                400+ talented developers and innovators
              </Cover>
              <span> from across India. Get </span>
              <Highlight className="text-white font-bold">
                24-hour brand exposure
              </Highlight>
              <span> during this </span>
              <Cover className="text-white font-bold">
                National Level Hackathon
              </Cover>
              <span>.</span>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <AnimatedGradientText
                  className="text-5xl font-bold mb-3"
                  colorFrom="#0048ffff"
                  colorTo="#f91616ff"
                  speed={1.5}
                >
                  400+
                </AnimatedGradientText>
                <p className="text-white/60 text-lg">Participants Expected</p>
              </div>
              <div className="text-center">
                <AnimatedGradientText
                  className="text-5xl font-bold mb-3"
                  colorFrom="#0d00ffff"
                  colorTo="#fb0000ff"
                  speed={1.5}
                >
                  24hrs
                </AnimatedGradientText>
                <p className="text-white/60 text-lg">Brand Visibility</p>
              </div>
              <div className="text-center">
                <AnimatedGradientText
                  className="text-5xl font-bold mb-3"
                  colorFrom="#0015ffff"
                  colorTo="#ff0000ff"
                  speed={1.5}
                >
                  National
                </AnimatedGradientText>
                <p className="text-white/60 text-lg">Level Reach</p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
              Key Benefits
            </h3>
            <div className="pl-8 space-y-6">
              <div className="text-xl text-white/90 leading-relaxed">
                <Highlight className="text-white font-bold">Brand visibility</Highlight>
                <span> on all event materials, website, and communications. </span>
                <Cover className="text-white font-bold">Direct talent access</Cover>
                <span> to recruit skilled developers. Opportunity to </span>
                <Highlight className="text-white font-bold">judge projects</Highlight>
                <span> and </span>
                <Cover className="text-white font-bold">showcase your products</Cover>
                <span> to tech-savvy participants.</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <div className="relative rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] p-8 md:p-12 overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Interested in Sponsoring?
                </h3>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Multiple sponsorship tiers available. Contact us to discuss partnership opportunities
                  and customize your sponsorship package
                </p>
                <a href="mailto:loop.hackathon26@gmail.com?subject=Sponsorship%20Inquiry%20-%20Loop%20Hackathon">
                  <RainbowButton className="text-lg px-8 py-4">
                    Contact for Sponsorship
                  </RainbowButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}