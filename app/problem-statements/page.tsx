"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Cover } from "@/components/ui/cover";
import { Highlight } from "@/components/ui/hero-highlight";
import { problemTracks } from "@/app/problem-statements/data";
import type { Track, Problem } from "@/app/problem-statements/data";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

export default function ProblemStatements() {
  const [expandedProblems, setExpandedProblems] = useState<{ [key: string]: boolean }>({});

  const toggleProblem = (trackId: number, problemId: number) => {
    const key = `${trackId}-${problemId}`;
    setExpandedProblems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-16 sm:top-20 md:top-16 z-40 border-b border-white/10 backdrop-blur-xl bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              LOOP <span className="text-blue-400">Problem Statements</span>
            </h1>
            <Link
              href="/"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Page Header */}
        <div className="mb-16 sm:mb-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Problem Statements 2026
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-6">
            Explore <Highlight className="text-white font-semibold">4 tracks</Highlight> with{" "}
            <Highlight className="text-white font-semibold">18 problem statements</Highlight> spanning{" "}
            <Cover>AI, Healthcare, Automation, Security & More</Cover>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium">
              🏥 Healthcare
            </div>
            <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">
              🎓 Education
            </div>
            <div className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-sm font-medium">
              🌾 Agritech
            </div>
            <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-300 text-sm font-medium">
              🔒 Security
            </div>
            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium">
              🤖 AI/ML
            </div>
          </div>
        </div>

        {/* Problem Tracks */}
        <div className="space-y-16 sm:space-y-20">
          {problemTracks.map((track) => (
            <section key={track.id} className="scroll-mt-24">
              {/* Track Header */}
              <div className="mb-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center shadow-2xl border-2 border-white/10`}>
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      {track.id}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                      {track.title}
                    </h2>
                    <p className="text-white/70 text-base sm:text-lg italic leading-relaxed">
                      {track.subtitle}
                    </p>
                  </div>
                </div>
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${track.color} opacity-30`}></div>
              </div>

              {/* Problems in Track */}
              <div className="grid gap-4 sm:gap-6">
                {track.problems.map((problem) => {
                  const key = `${track.id}-${problem.id}`;
                  const isExpanded = expandedProblems[key];

                  return (
                    <div
                      key={problem.id}
                      className={`relative group rounded-2xl border-2 ${track.borderColor} bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm transition-all duration-500 ${track.hoverGlow} hover:border-opacity-80 ${isExpanded ? 'shadow-2xl' : 'shadow-lg'}`}
                    >
                      <div className="p-6 sm:p-8">
                        {/* Problem Header */}
                        <div className="flex items-start gap-4 sm:gap-5 mb-4">
                          <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg`}>
                            {problem.id}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                              {problem.title}
                            </h3>
                            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                              {problem.description}
                            </p>
                          </div>
                        </div>

                        {/* Expand/Collapse Button */}
                        {problem.details && (
                          <button
                            onClick={() => toggleProblem(track.id, problem.id)}
                            className={`mt-5 px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                              isExpanded 
                                ? `bg-gradient-to-r ${track.color} text-white shadow-md` 
                                : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                            }`}
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Hide Details
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                Show Details
                              </>
                            )}
                          </button>
                        )}

                        {/* Expanded Details */}
                        {isExpanded && problem.details && (
                          <div className={`mt-6 pt-6 border-t-2 ${track.borderColor} animate-in fade-in slide-in-from-top-2 duration-500`}>
                            <div className="bg-white/[0.03] rounded-xl p-5 sm:p-6">
                              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                <span className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${track.color}`}></span>
                                Detailed Requirements
                              </h4>
                              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                                {problem.details}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Important Note */}
        <section className="mt-20 sm:mt-28">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-blue-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">💡</span>
              Important Guidelines
            </h2>
            <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <p>
                  <span className="text-white font-semibold">Problem tracks</span> are thematic categories designed to inspire innovation, while <span className="text-white font-semibold">problem statements</span> are specific challenges within each track.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <p>
                  Participants may choose <Cover>any problem statement</Cover> from any track based on their interests and expertise.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-400 font-bold mt-1">•</span>
                <p>
                  <Highlight className="text-white font-semibold">Detailed specifications and requirements</Highlight> will be provided during the hackathon kick-off.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 font-bold mt-1">•</span>
                <p>
                  Teams are encouraged to propose <span className="text-white font-semibold">innovative solutions</span> that go beyond the basic requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 sm:mt-24 text-center">
          <div className="inline-block mb-6">
            <AnimatedGradientText
              className="text-2xl sm:text-3xl font-bold"
              colorFrom="#60a5fa"
              colorTo="#a855f7"
              speed={1.5}
            >
              Ready to Build?
            </AnimatedGradientText>
          </div>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Register your team on <span className="text-white font-semibold">Unstop</span> and start preparing for Loop 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={UNSTOP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Register on Unstop →
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8 sm:py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Loop Hackathon · <span className="text-white/60">Innovation & Robotics Lab, BVCOE Navi Mumbai</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
