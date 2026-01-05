"use client";

import { ShineBorder } from "@/components/ui/shine-border";
import { Highlight } from "@/components/ui/hero-highlight";
import { Cover } from "@/components/ui/cover";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function Rules() {
  return (
    <section id="rules" className="relative py-28 bg-black">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Rules &{" "}
            <PointerHighlight
              rectangleClassName="border-2 border-cyan-500"
              pointerClassName="text-cyan-500"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                Guidelines
              </span>
            </PointerHighlight>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl">
            Essential guidelines to ensure a fair and impactful hackathon experience
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Eligibility */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
              Eligibility
            </h3>
            <div className="pl-8 text-xl text-white/90 leading-relaxed">
              <Highlight className="text-white font-bold">
                Any Undergraduate
              </Highlight>
              <span> pursuing Bachelor's Degree in any field can participate. Team size must be </span>
              <Highlight className="text-white font-bold">
                3 to 6 members
              </Highlight>
              <span> only. </span>
              <Cover className="text-white font-bold">
                Inter-college teams are welcome
              </Cover>
              <span>.</span>
            </div>
          </div>

          {/* Submission Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Submission Requirements
            </h3>
            <div className="pl-8 space-y-6">
              <div className="text-xl text-white/90 leading-relaxed">
                <span>Submissions open from </span>
                <Highlight className="text-white font-bold">
                  20th January
                </Highlight>
                <span>. Prepare a </span>
                <Highlight className="text-white font-bold">
                  PowerPoint/Canva presentation
                </Highlight>
                <span> using the official template and submit your </span>
                <Cover className="text-white font-bold">
                  Final PPT on Unstop dashboard
                </Cover>
                <span>. Include </span>
                <Highlight className="text-white font-bold">
                  Prototype
                </Highlight>
                <span> (code repo, screenshots, or demo). Video presentation is optional.</span>
              </div>
              
              {/* Deadline Card */}
              <div className="inline-block">
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-red-500/30">
                  <AnimatedGradientText
                    className="text-xl font-bold"
                    colorFrom="#ef4444"
                    colorTo="#f97316"
                    speed={1.5}
                  >
                    Deadline: 30th January 2026
                  </AnimatedGradientText>
                </div>
              </div>
            </div>
          </div>

          {/* Evaluation */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
              Evaluation Process
            </h3>
            <div className="pl-8 text-xl text-white/90 leading-relaxed">
              <span>Evaluation based on </span>
              <Highlight className="text-white font-bold">
                PPT, Prototype, and Video
              </Highlight>
              <span>. Key criteria include </span>
              <Cover className="text-white font-bold">
                Innovation, Originality, and Technical Complexity
              </Cover>
              <span>. Working prototype receives higher evaluation scores. Judge's decision is </span>
              <Highlight className="text-white font-bold">
                final and binding
              </Highlight>
              <span>.</span>
            </div>
          </div>

          {/* Originality */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
              Originality & Authenticity
            </h3>
            <div className="pl-8">
              <div className="text-xl text-white/90 leading-relaxed mb-6">
                <span>All submitted content must be </span>
                <Highlight className="text-white font-bold">
                  original work
                </Highlight>
                <span> created by the participating team only. </span>
                <Cover className="text-white font-bold">
                  Plagiarism will result in disqualification
                </Cover>
                <span>.</span>
              </div>

              {/* Warning Card */}
              <div className="inline-block">
                <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-yellow-500/30">
                  <p className="text-yellow-400 font-semibold">
                    ⚠️ Any breach of confidentiality or unfair advantage will result in immediate disqualification
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Communication */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
              Communication & Updates
            </h3>
            <div className="pl-8 text-xl text-white/90 leading-relaxed">
              <span>All updates will be sent via </span>
              <Highlight className="text-white font-bold">
                registered email & Unstop platform
              </Highlight>
              <span>. Team leaders must </span>
              <Cover className="text-white font-bold">
                check regularly
              </Cover>
              <span> for official announcements.</span>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-16">
            <div className="relative rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 text-center">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  By submitting entries for Loop, participants confirm that they have read, understood, and agreed to abide by all the{" "}
                  <Cover>
                    <span className="font-bold text-white">terms and conditions</span>
                  </Cover>
                  . For detailed guidelines, please refer to the official rulebook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
