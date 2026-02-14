"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { problemTracks } from "@/app/problem-statements/data";

const UNSTOP_LINK =
  "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

export default function ProblemStatements() {
  const totalProblems = problemTracks.reduce(
    (sum, t) => sum + t.problems.length,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-purple-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-orange-600/[0.05] rounded-full blur-[120px]" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-12 z-40 border-b border-white/[0.06] backdrop-blur-2xl bg-black/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              LOOP{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Problem Statements
              </span>
            </h1>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Hero */}
        <div className="mb-16 sm:mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/60 text-xs font-medium tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {problemTracks.length} Tracks &middot; {totalProblems} Problem
            Statements
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="text-white">Problem</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Statements
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Choose a problem statement from any track. Build something that
            matters.
          </p>
        </div>

        {/* All Problem Statements */}
        {problemTracks.map((track) => (
          <div key={track.id} className="mb-16 last:mb-0">
            {/* Track Label */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center`}
              >
                <span className="text-base font-black text-white">
                  {track.id}
                </span>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {track.title}
                </h2>
                <p className="text-white/35 text-xs sm:text-sm mt-0.5">
                  {track.subtitle}
                </p>
              </div>
            </div>

            {/* Problem Cards */}
            <div className="space-y-4">
              {track.problems.map((problem) => (
                <article
                  key={problem.id}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.035] hover:border-white/[0.1] transition-all duration-300 p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Problem Number */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${track.color} opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
                    >
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {problem.id}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Problem Title */}
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 leading-snug group-hover:text-white transition-colors">
                        {problem.title}
                      </h3>

                      {/* Problem Description */}
                      <p className="text-white/45 group-hover:text-white/55 text-sm sm:text-[15px] leading-[1.8] sm:leading-[1.85] transition-colors">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* Guidelines */}
        <section className="mt-20 sm:mt-28">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">&#128161;</span>
              Important Guidelines
            </h2>
            <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-400" />
                <p>
                  <span className="text-white/80 font-medium">
                    Problem tracks
                  </span>{" "}
                  are thematic categories.{" "}
                  <span className="text-white/80 font-medium">
                    Problem statements
                  </span>{" "}
                  are specific challenges within each track.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400" />
                <p>
                  Participants may choose{" "}
                  <span className="text-white/80 font-medium">
                    any problem statement
                  </span>{" "}
                  from any track based on their interests and expertise.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-pink-400" />
                <p>
                  Detailed specifications will be provided during the hackathon
                  kick-off.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-orange-400" />
                <p>
                  Teams are encouraged to propose{" "}
                  <span className="text-white/80 font-medium">
                    innovative solutions
                  </span>{" "}
                  that go beyond the basic requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 sm:mt-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Build?
          </h2>
          <p className="text-white/40 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Register your team on Unstop and start preparing for Loop 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={UNSTOP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-base transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20"
            >
              Register on Unstop &#8594;
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-white/10 text-white/70 px-8 py-3.5 rounded-xl font-medium text-base hover:bg-white/[0.04] hover:text-white hover:border-white/20 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.06] py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/30 text-sm">
            &copy; 2026 Loop Hackathon &middot; Innovation &amp; Robotics Lab, BVCOE Navi Mumbai
          </p>
        </div>
      </footer>
    </div>
  );
}
