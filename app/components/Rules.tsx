"use client";

import { 
  Users, 
  FileText, 
  Shield, 
  Video, 
  Eye, 
  MessageSquare, 
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react";

const rules = [
  {
    icon: Users,
    title: "Eligibility",
    items: [
      "Any Undergraduate pursuing Bachelor's Degree in any field",
      "Team Size: 4 - 6 members only",
      "Inter-college team participation is allowed",
    ],
  },
  {
    icon: FileText,
    title: "Submission Requirements",
    items: [
      "Prepare a PowerPoint/Canva presentation using official template",
      "Submit Final PPT on Unstop dashboard",
      "Include Prototype (code repo, screenshots, or demo)",
      "Optional: Video presentation explaining the solution",
      "Deadline: 30th January 2026",
    ],
  },
  {
    icon: Shield,
    title: "Originality & Authenticity",
    items: [
      "All submitted content must be original work",
      "Created by the participating team only",
      "Plagiarism will result in disqualification",
    ],
  },
  {
    icon: Video,
    title: "Prototype & Video Guidelines",
    items: [
      "Prototype should clearly demonstrate core idea",
      "Video should be concise and clear",
      "Explain problem, solution, and demo",
      "Follow time limit in submission guidelines",
      "Working prototype = higher evaluation scores",
    ],
  },
  {
    icon: Eye,
    title: "Evaluation Process",
    items: [
      "Based on PPT, Prototype, and Video",
      "Criteria: Innovation, Originality, Technical Complexity",
      "Judge's decision is final and binding",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication & Updates",
    items: [
      "Updates via registered email & Unstop platform",
      "Team leaders must check regularly",
      "Official announcements only through these channels",
    ],
  },
];

const dosAndDonts = {
  dos: [
    "Register your team before the deadline",
    "Read all guidelines carefully",
    "Build a working prototype",
    "Maintain professional conduct",
    "Check emails and Unstop regularly",
  ],
  donts: [
    "Share problem statements outside the event",
    "Submit plagiarized content",
    "Exceed team size limits",
    "Miss submission deadlines",
    "Engage in any form of misconduct",
  ],
};

export default function Rules() {
  return (
    <section id="rules" className="relative py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Rules & <span className="gradient-text">Guidelines</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Please read and follow all rules to ensure a fair and enjoyable experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {rules.map((rule, index) => (
            <div key={rule.title} className="glass p-6 rounded-2xl card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <rule.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold">{rule.title}</h3>
              </div>
              <ul className="space-y-2">
                {rule.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-blue-400 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Confidentiality Notice */}
        {/* <div className="glass-strong p-6 rounded-2xl border border-yellow-500/30 mb-16">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Confidentiality & Fair Play</h3>
              <p className="text-gray-400 text-sm">
                Participants must not share, publish, or disclose any problem statements, evaluation materials, 
                or solutions outside the scope of the event. Any breach of confidentiality or attempt to gain 
                unfair advantage will result in immediate disqualification.
              </p>
            </div>
          </div>
        </div> */}

   
          
          {/* <div className="glass p-6 rounded-2xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold text-green-400">Do's</h3>
            </div>
            <ul className="space-y-3">
              {dosAndDonts.dos.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Don'ts */}
          {/* <div className="glass p-6 rounded-2xl border border-red-500/30">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-red-400">Don'ts</h3>
            </div>
            <ul className="space-y-3">
              {dosAndDonts.donts.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div> */}
        

        {/* Code of Conduct */}
        {/* <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Code of Conduct</h3>
            <p className="text-gray-400 text-sm mb-4">
              By submitting entries for the Online Evaluation Round of Loop, participants confirm 
              that they have read, understood, and agreed to abide by all the terms and conditions.
            </p>
            <p className="text-gray-400 text-sm">
              Participants are expected to maintain professional and ethical conduct throughout the event. 
              Any form of misconduct or violation may lead to disqualification.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
