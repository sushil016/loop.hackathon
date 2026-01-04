"use client";

import { useState } from "react";
// Icons removed

const faqs = [
  {
    question: "Who can participate in Loop Hackathon?",
    answer: "Any undergraduate student pursuing a Bachelor's degree in any field can participate. Teams must consist of 3-6 members, and inter-college team formation is allowed.",
  },
  {
    question: "How do I register my team?",
    answer: "Teams can register through the Unstop platform. The team leader should create an account, form a team, and complete the registration before the deadline (30th January 2026).",
  },
  {
    question: "What is the registration fee?",
    answer: "Registration details and fees will be announced on the Unstop platform. Please check the official registration page for the most up-to-date information.",
  },
  {
    question: "Is it an online or offline hackathon?",
    answer: "Loop is a 24-hour OFFLINE hackathon. All participants must be physically present at Bharati Vidyapeeth College of Engineering, Navi Mumbai on 20th February 2026.",
  },
  {
    question: "What should we bring to the hackathon?",
    answer: "Bring your laptops, chargers, and any hardware if you're working on embedded systems. We'll provide food, snacks, and a comfortable workspace. Don't forget your student ID!",
  },
  {
    question: "Will problem statements be provided?",
    answer: "Yes, detailed problem statements will be released during the hackathon. You can choose from multiple tracks including AI/ML, Automation, Smart Infrastructure, Healthcare, and more.",
  },
  {
    question: "What are the submission requirements?",
    answer: "Teams must submit a PowerPoint/Canva presentation, a working prototype (code repository, screenshots, or demo), and an optional video presentation explaining the solution.",
  },
  {
    question: "How will projects be evaluated?",
    answer: "Projects will be evaluated based on Innovation & Originality, Technical Complexity, Practical Relevance, and Presentation Quality. Submissions without working prototypes may receive lower scores.",
  },
  {
    question: "Are there any restrictions on tech stack?",
    answer: "No specific tech stack restrictions. You're free to use any programming languages, frameworks, or tools that best suit your solution. Hardware projects using Arduino, Raspberry Pi, etc. are welcome.",
  },
  {
    question: "Will food and accommodation be provided?",
    answer: "Food (lunch, dinner, breakfast, and snacks) will be provided throughout the 24-hour hackathon. Accommodation is not provided, but you can rest at the venue during the event.",
  },
  {
    question: "Can we work on a pre-existing project?",
    answer: "No. All work must be original and created during the hackathon. Pre-existing projects or code written before the event is not allowed and will result in disqualification.",
  },
  {
    question: "How do I contact the organizers?",
    answer: "You can reach us at loop.hackathon@bvcoenm.edu.in for any queries. Official updates will be shared via registered email IDs and the Unstop platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-white/40 text-sm uppercase tracking-[0.3em] mb-4">
            Support
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Questions & Answers
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Everything you need to know about participating in Loop
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-0 border-t border-white/[0.08]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/[0.08]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-start justify-between text-left group"
              >
                <div className="flex items-start gap-6">
                  <span className="text-white/20 text-sm font-mono mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-lg font-medium transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <span className={`text-2xl text-white/30 transition-transform duration-300 ml-4 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 pl-12">
                  <p className="text-white/50 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <p className="text-white/40 text-sm mb-6">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:loop.hackathon@bvcoenm.edu.in"
                className="text-white hover:text-white/70 transition-colors"
              >
                loop.hackathon@bvcoenm.edu.in
              </a>
              <span className="hidden sm:block text-white/20">·</span>
              <a
                href="https://instagram.com/loop.hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors"
              >
                @loop.hackathon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
