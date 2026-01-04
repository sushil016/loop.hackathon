"use client";

import Link from "next/link";

const tracks = [
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
    description: "Design innovative solutions addressing real-world challenges in cybersecurity, digital forensics, and law enforcement.",
  },
  {
    id: 6,
    title: "Student Innovation",
    description: "Design and prototype a scalable system that resolves a clearly defined inefficiency.",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Problem Tracks
          </h2>
          <p className="text-white/50 max-w-2xl">
            Six core themes guiding all problem statements
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="border border-white/10 p-6 rounded-lg hover:border-white/20 transition-colors"
            >
              {/* Number */}
              <span className="text-white/30 font-mono text-sm">
                {String(track.id).padStart(2, '0')}
              </span>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mt-3 mb-2">
                {track.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* Problem Statements CTA */}
        <div className="mt-16 text-center">
          <div className="border border-white/10 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Innovate?</h3>
            <p className="text-white/50 mb-6">
              View detailed problem statements including Software tracks.
              Register now to secure your spot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/problem-statements"
                className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors"
              >
                View Problem Statements
              </Link>
              <a
                href="https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Register Your Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
