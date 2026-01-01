"use client";

import { Shield, Users, Database, Lock } from "lucide-react";
import Link from "next/link";

const tracks = [
  {
    icon: Shield,
    title: "Build for Failure & Reliability",
    description: "Systems that detect early warning signs, handle degradation, and prevent catastrophic failure.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Human + Machine Decision Systems",
    description: "Solutions where automation assists humans under uncertainty, without replacing judgment.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Less Data, Better Results",
    description: "Intelligent systems that learn, adapt, or predict with limited, noisy, or incomplete data.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Lock,
    title: "Trust, Safety & Verification",
    description: "Systems that establish authenticity, detect risk, or ensure long-term trust in digital or physical environments.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Hackathon <span className="gradient-text">Tracks</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your challenge category and build innovative solutions that matter
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className="group glass p-6 rounded-2xl card-hover relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${track.color}`}
              />

              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <track.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {track.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {track.description}
              </p>

              {/* Arrow indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${track.color} flex items-center justify-center`}>
                  <span className="text-white text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Problem Statements CTA */}
        <div className="mt-16 text-center">
          <div className="glass-strong p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
            <p className="text-gray-400 mb-6">
              View detailed problem statements including Hardware and Software tracks.
              Register now to secure your spot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/problem-statements"
                className="inline-flex items-center gap-2 btn-secondary px-8 py-3 rounded-full text-white font-semibold"
              >
                View Problem Statements
                <span className="text-lg">→</span>
              </Link>
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary px-8 py-3 rounded-full text-white font-semibold"
              >
                Register Your Team
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
