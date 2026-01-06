"use client";

import { useState } from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { RainbowButton } from "@/components/ui/rainbow-button";

const faqs = [
  {
    question: "Who can participate in Loop Hackathon?",
    answer: "Any undergraduate student pursuing a Bachelor's degree in any field can participate. Teams must consist of 4-6 members, and inter-college team formation is allowed.",
  },
  {
    question: "How do I register my team?",
    answer: "Teams can register through the Unstop platform. The team leader should create an account, form a team, and complete the registration before the deadline (31st January 2026).",
  },
  {
    question: "Is it an online or offline hackathon?",
    answer: "Loop is a 24-hour OFFLINE hackathon. All participants must be physically present at Bharati Vidyapeeth College of Engineering, Navi Mumbai on 20th February 2026.",
  },
  {
    question: "What should we submit for the online round?",
    answer: "Teams must submit a PowerPoint/Canva presentation using the official template, a working prototype (code repository, screenshots, or demo), and an optional video presentation explaining the solution. Submission deadline is 4th February 2026.",
  },
  {
    question: "How will projects be evaluated?",
    answer: "Projects will be evaluated based on Innovation & Originality, Technical Complexity, Practical Relevance, and Presentation Quality. Submissions with working prototypes receive higher scores.",
  },
];

const allFaqs = [
  ...faqs,
  {
    question: "What is the registration fee?",
    answer: "Online registration is free. Registration fee for Grand Finale (offline hackathon) is ₹400/- per team.",
  },
  {
    question: "Will problem statements be provided?",
    answer: "Yes, detailed problem statements will be released with registration. You can choose from multiple tracks including AI/ML, Automation, Smart Infrastructure, Healthcare, and more.",
  },
  {
    question: "What should we bring to the hackathon?",
    answer: "Bring your laptops, chargers, and any hardware if you're working on embedded systems. We'll provide food, snacks, and a comfortable workspace. Don't forget your student ID!",
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
    answer: "You can reach us at loop.hackathon26@gmail.com for any queries. Official updates will be shared via registered email IDs and the Unstop platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? allFaqs : faqs;

  // Reset openIndex when toggling showAll to prevent index mismatch
  const handleShowAllToggle = () => {
    setShowAll(!showAll);
    setOpenIndex(null);
  };

  return (
    <section id="faq" className="relative py-28 bg-black">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Questions &{" "}
            <PointerHighlight
              rectangleClassName="border-2 border-green-500"
              pointerClassName="text-green-500"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                Answers
              </span>
            </PointerHighlight>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl">
            Everything you need to know about participating in Loop
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-0 border-t border-white/[0.08]">
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/[0.08]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-start justify-between text-left group cursor-pointer"
              >
                <div className="flex items-start gap-6 flex-1">
                  <span className="text-white/20 text-sm font-mono mt-1 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <span className={`text-2xl text-white/30 transition-transform duration-300 ml-4 flex-shrink-0 ${
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
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="mt-12 text-center">
          <RainbowButton 
            onClick={handleShowAllToggle} 
            className="px-8 py-3"
          >
            {showAll ? "See Less FAQs" : "See More FAQs"}
          </RainbowButton>
        </div>

        {/* Contact Section */}
        
      </div>
    </section>
  );
}
