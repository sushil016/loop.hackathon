"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Cover } from "@/components/ui/cover";
import { Highlight } from "@/components/ui/hero-highlight";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { ShineBorder } from "@/components/ui/shine-border";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

const loadingStates = [
  {
    text: "Loading Problem Tracks",
  },
  {
    text: "Loading Problem Statements",
  },
  {
    text: "More Problem Statements Coming Soon",
  },
];

const problemTracks = [
  {
    id: 1,
    title: "Build for Failure & Reliability",
    description: "Systems that detect early warning signs, handle degradation, and prevent catastrophic failure.",
  },
  {
    id: 2,
    title: "Human + Machine Decision Systems",
    description: "Solutions where automation assists humans under uncertainty, without replacing judgment.",
  },
  {
    id: 3,
    title: "Less Data, Better Results",
    description: "Systems that detect early warning signs, handle degradation, and prevent catastrophic failure.",
  },
  {
    id: 4,
    title: "Trust, Safety & Verification",
    description: "Systems that establish authenticity, detect risk, or ensure long-term trust in digital or physical environments.",
  },
  {
    id: 5,
    title: "Cybersecurity & Law Enforcement Innovation",
    description: "Design innovative solutions addressing real-world challenges in cybersecurity, digital forensics, and law enforcement. Ideas may focus on crime prevention, threat detection, privacy, surveillance analytics, or data integrity, using modern technologies to create secure, ethical, and scalable impact.",
  },
  {
    id: 6,
    title: "Student Innovation",
    description: "Design and prototype a scalable system that resolves a clearly defined inefficiency, demonstrating a measurable improvement in performance, cost, or user experience.",
    constraint: "The system must demonstrate behavior under at least one imperfect condition (noise, delay, partial failure, ambiguity, or misuse), not just ideal inputs.",
  },
];

// const hardwareProblems = [
//   {
//     id: 1,
//     title: "Autonomous Border Surveillance Drone",
//     description: "Develop a low-latency drone system capable of detecting intrusions and suspicious activity in remote border regions.",
//     focusAreas: ["Night-time detection", "Target tracking", "Secure communication"],
//   },
//   {
//     id: 2,
//     title: "Swarm-Based Area Surveillance",
//     description: "Create a coordinated drone swarm that can autonomously divide, scan, and monitor a large area efficiently.",
//     focusAreas: [],
//   },
//   {
//     id: 3,
//     title: "Autonomous Medical Supply Delivery Drone",
//     description: "Design a drone system to deliver medical supplies to remote or traffic-congested areas with minimal human intervention.",
//     focusAreas: [],
//   },
// ];

const softwareProblems = [
  {
    id: 1,
    title: "AI-Powered Competitive Exam Performance Analytics Platform",
    description: "Build an intelligent analytics platform that transforms raw competitive exam and mock-test data into personalized, question-level insights and adaptive study recommendations.",
  },
  {
    id: 2,
    title: "AI-Driven Project Intelligence for Engineering Teams",
    description: "Build an intelligent project management system that continuously analyzes tasks and team communication to generate real-time insights, summaries, and alerts.",
  },
  {
    id: 3,
    title: "Intelligent Deepfake Detection and Trust Verification System",
    description: "Build an intelligent monitoring system that continuously analyzes structural stress/strain data to detect early signs of fatigue and predict failure risks in critical infrastructure like bridges. The system should convert raw sensor signals into clear, actionable health insights and alerts for proactive maintenance.",
  },
  {
    id: 4,
    title: "Vision-Only Drone Intelligence for Obstacle Avoidance & Real-Time Video Analytics",
    description: "Create an AI-powered drone intelligence system that operates exclusively on monocular RGB video feeds, without relying on depth sensors or additional hardware. The system should enable a drone to perceive its environment visually and autonomously avoid obstacles in real time, while simultaneously processing live video streams to detect, track, and count objects of interest.",
  },
  {
    id: 5,
    title: "Intelligent Drone Perception, Tracking & Autonomous Navigation",
    description: "Build an intelligent drone system capable of real-time video analytics, vision-based target tracking, and autonomous path planning in dynamic environments. The system should process live drone video feeds to detect, track, and count objects of interest, while simultaneously maintaining a robust visual lock on moving targets, even in the presence of occlusion, motion blur, and rapid motion. In parallel, an autonomous navigation component should be developed where a reinforcement learning-based agent learns to plan optimal flight paths within a simulated environment containing dynamic obstacles.",
  },
];

export default function ProblemStatements() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 6 seconds (2 seconds per step) on every visit
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Multi-Step Loader */}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000}
        loop={false}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-2xl">
              LOOP
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <PointerHighlight
              rectangleClassName="border-2 border-blue-500"
              pointerClassName="text-blue-500"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Problem Statements
              </span>
            </PointerHighlight>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Review the <Highlight className="text-white font-semibold">tracks</Highlight> and{" "}
            <Highlight className="text-white font-semibold">problem statements</Highlight> below.{" "}
            <Cover>Detailed specifications</Cover> will be provided during the hackathon.
          </p>
        </div>

        {/* Problem Tracks Section */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Problem <Cover>Tracks</Cover>
            </h2>
            <AnimatedGradientText
              className="text-lg"
              colorFrom="#60a5fa"
              colorTo="#a855f7"
              speed={1.5}
            >
              Six core themes guiding all problem statements
            </AnimatedGradientText>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {problemTracks.map((track) => (
              <div key={track.id} className="relative">
                <ShineBorder
                  shineColor={["#60a5fa", "#a855f7", "#ec4899"]}
                  duration={10}
                  borderWidth={2}
                  className="rounded-2xl"
                />
                <div className="relative bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-shrink-0 self-start">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                        <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400">
                          {track.id}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                        {track.title}
                      </h3>
                      <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                        {track.description}
                      </p>
                      {track.constraint && (
                        <div className="mt-4 p-3 sm:p-4 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
                          <p className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">⚡ Constraint</p>
                          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                            {track.constraint}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Software Problems Section */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Software <Cover>Problem Statements</Cover>
            </h2>
            <AnimatedGradientText
              className="text-lg"
              colorFrom="#f97316"
              colorTo="#ea580c"
              speed={1.5}
            >
              AI, analytics, and intelligent systems
            </AnimatedGradientText>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {softwareProblems.map((problem) => (
              <div key={problem.id} className="relative">
                <ShineBorder
                  shineColor={["#f97316", "#ea580c", "#dc2626"]}
                  duration={12}
                  borderWidth={2}
                  className="rounded-2xl"
                />
                <div className="relative bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-shrink-0 self-start">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                        <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-400">
                          {problem.id}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                        {problem.title}
                      </h3>
                      <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mb-24">
          <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center bg-white/[0.02]">
            <div className="text-6xl mb-4">🚀</div>
            <AnimatedGradientText
              className="text-2xl font-bold mb-2"
              colorFrom="#22c55e"
              colorTo="#16a34a"
              speed={1.2}
            >
              More Problems Coming Soon!
            </AnimatedGradientText>
            <p className="text-white/50 mt-2">Stay tuned for additional challenges</p>
          </div>
        </section>

        {/* Important Note */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <Highlight className="text-white">Important Note</Highlight>
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                <Cover>Problem tracks</Cover> are designed for{" "}
                <Highlight className="text-white font-semibold">student thinking and innovation</Highlight>{" "}
                while Problem Statements are short product-oriented examples.
              </p>
              <p>
                Participants may choose either a track or a problem statement, and there is{" "}
                <Highlight className="text-white font-semibold">no fixed mapping or evaluation difference</Highlight>{" "}
                between them—choose what best fits your idea.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="border-t border-white/10 pt-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to <Cover>Participate</Cover>?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Register your team on <Highlight className="text-white font-semibold">Unstop</Highlight> to participate in the hackathon.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={UNSTOP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RainbowButton className="text-lg px-10 py-4">
                  Register on Unstop →
                </RainbowButton>
              </a>
              <Link href="/">
                <button className="inline-flex items-center justify-center border-2 border-white/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Loop Hackathon · <Cover>Innovation & Robotics Lab</Cover>
          </p>
        </div>
      </footer>
    </div>
  );
}
