"use client";

import { ArrowLeft, Shield, Users, Database, Lock, Plane, Brain, Cpu, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const problemTracks = [
  {
    id: 1,
    title: "Build for Failure & Reliability",
    description: "Systems that detect early warning signs, handle degradation, and prevent catastrophic failure.",
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 2,
    title: "Human + Machine Decision Systems",
    description: "Solutions where automation assists humans under uncertainty, without replacing judgment.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Less Data, Better Results",
    description: "Intelligent systems that learn, adapt, or predict with limited, noisy, or incomplete data.",
    icon: Database,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Trust, Safety & Verification",
    description: "Systems that establish authenticity, detect risk, or ensure long-term trust in digital or physical environments.",
    icon: Lock,
    color: "from-purple-500 to-pink-500",
  },
];

const hardwareProblems = [
  {
    id: 1,
    title: "Autonomous Border Surveillance Drone",
    description: "Develop a low-latency drone system capable of detecting intrusions and suspicious activity in remote border regions.",
    focusAreas: ["Night-time detection", "Target tracking", "Secure communication"],
    icon: Plane,
    color: "from-gray-600 to-gray-800",
  },
  {
    id: 2,
    title: "Swarm-Based Area Surveillance",
    description: "Create a coordinated drone swarm that can autonomously divide, scan, and monitor a large area efficiently.",
    focusAreas: [],
    icon: Eye,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 3,
    title: "Autonomous Medical Supply Delivery Drone",
    description: "Design a drone system to deliver medical supplies to remote or traffic-congested areas with minimal human intervention.",
    focusAreas: [],
    icon: Plane,
    color: "from-red-500 to-pink-500",
  },
];

const softwareProblems = [
  {
    id: 1,
    title: "AI-Powered Competitive Exam Performance Analytics Platform",
    description: "Build an intelligent analytics platform that transforms raw competitive exam and mock-test data into personalized, question-level insights and adaptive study recommendations. The system should continuously learn from new test data and clearly show how preparation guidance improves over time.",
    icon: Brain,
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 2,
    title: "AI-Driven Project Intelligence for Engineering Teams",
    description: "Build an intelligent project management system that continuously analyzes tasks and team communication to generate real-time insights, summaries, and alerts—reducing manual reporting and coordination overhead. The system should feel proactive and \"always aware,\" not just a passive task tracker.",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Intelligent Deepfake Detection and Trust Verification System",
    description: "Build an intelligent monitoring system that continuously analyzes structural stress/strain data to detect early signs of fatigue and predict failure risks in critical infrastructure like bridges. The system should convert raw sensor signals into clear, actionable health insights and alerts for proactive maintenance.",
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    title: "Vision-Driven Drone Intelligence Platform",
    description: "Build a real-time drone vision intelligence system that processes monocular RGB video to both avoid obstacles and analyze the environment by detecting, tracking, and counting objects—without using depth sensors or specialized hardware. The system should clearly demonstrate visual perception, decision-making, and analytics using software-only methods.",
    icon: Eye,
    color: "from-green-500 to-teal-500",
  },
];

export default function ProblemStatements() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/loop-logo.png"
                alt="Loop Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold gradient-text">LOOP</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Problem <span className="gradient-text">Statements</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Detailed problem statements will be revealed during the hackathon. 
              Here are the tracks and themes to prepare for.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6" />
          </div>

          {/* Problem Tracks Overview */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Problem <span className="gradient-text">Tracks</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {problemTracks.map((track) => (
                <div
                  key={track.id}
                  className="glass p-6 rounded-2xl card-hover border border-white/5 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center flex-shrink-0`}>
                      <track.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-mono text-blue-400">Track {track.id}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                      <p className="text-gray-400">{track.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hardware Problem Statements */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold">
                Hardware <span className="gradient-text">Problem Tracks</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {hardwareProblems.map((problem, index) => (
                <div
                  key={problem.id}
                  className="glass p-8 rounded-2xl card-hover border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center flex-shrink-0`}>
                      <problem.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-mono">
                          Hardware #{problem.id}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{problem.description}</p>
                      
                      {problem.focusAreas.length > 0 && (
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Focus Areas:</p>
                          <div className="flex flex-wrap gap-2">
                            {problem.focusAreas.map((area, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Software Problem Statements */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <Brain className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold">
                Software <span className="gradient-text">Problem Statements</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {softwareProblems.map((problem) => (
                <div
                  key={problem.id}
                  className="glass p-8 rounded-2xl card-hover border border-white/5 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center flex-shrink-0`}>
                      <problem.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-mono">
                        Problem Statement {problem.id}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{problem.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="glass-strong p-10 rounded-3xl max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Take the Challenge?</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Register your team now and prepare for 24 hours of innovation, 
                learning, and building solutions that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg"
                >
                  Register Now →
                </a>
                <Link
                  href="/"
                  className="btn-secondary px-8 py-4 rounded-full text-white font-semibold text-lg"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
