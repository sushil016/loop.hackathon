"use client";

import { Target, Users, Trophy, Lightbulb, Rocket, Brain } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "₹1,00,000+ Prize Pool",
    description: "Win exciting cash prizes and goodies",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with like-minded innovators and industry experts",
  },
  {
    icon: Brain,
    title: "Learning Experience",
    description: "Gain hands-on experience with cutting-edge technologies",
  },
  {
    icon: Rocket,
    title: "Innovation Focus",
    description: "Focus on depth over speed, building scalable solutions",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Loop</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Loop is a <span className="text-blue-400 font-semibold">24-hour National Level Hackathon</span> aimed at 
              encouraging students to solve real-world and institutional problems using advanced technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The event focuses on innovation beyond basic application development, promoting impactful solutions 
              in <span className="text-cyan-400">automation</span>, <span className="text-blue-400">robotics</span>, 
              <span className="text-cyan-400"> AI systems</span>, and <span className="text-blue-400">smart infrastructure</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Participants will collaborate, ideate, and build solutions that have practical relevance and future scalability.
            </p>
            
            <div className="glass p-6 rounded-2xl mt-8">
              <p className="text-gray-300 italic">
                "What sets Loop apart is its focus on <span className="text-blue-400 font-semibold">depth over speed</span>. 
                Rather than encouraging surface-level prototypes, the hackathon challenges participants to think in systems—considering 
                failure, iteration, scalability, and real-world constraints from the very beginning."
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
              <p className="text-xl font-semibold text-gray-200">
                Loop is not just about building fast — it's about <span className="gradient-text">building right</span>.
              </p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass p-6 rounded-2xl card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="glass p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-bold">Who Can Participate?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/5">
              <p className="text-4xl font-bold gradient-text mb-2">UG Students</p>
              <p className="text-gray-400">Any undergraduate pursuing Bachelor's Degree in any field</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5">
              <p className="text-4xl font-bold gradient-text mb-2">4-6 Members</p>
              <p className="text-gray-400">Team size requirement for participation</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5">
              <p className="text-4xl font-bold gradient-text mb-2">Inter-College</p>
              <p className="text-gray-400">Team participation across colleges is allowed</p>
            </div>
          </div>
        </div>

        {/* Organizer */}
        <div className="text-center mt-12">
          <p className="text-gray-500">Organized By</p>
          <p className="text-xl font-semibold gradient-text">Innovation & Robotics Lab</p>
          <p className="text-gray-400">Bharati Vidyapeeth College of Engineering, Navi Mumbai</p>
        </div>
      </div>
    </section>
  );
}
