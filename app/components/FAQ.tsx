"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who can participate in Loop Hackathon?",
    answer: "Any undergraduate student pursuing a Bachelor's degree in any field can participate. Teams must consist of 4-6 members, and inter-college team formation is allowed.",
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
    answer: "You can reach us at loop.hackathon26@gmail.com for any queries. Official updates will be shared via registered email IDs and the Unstop platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-black/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "border border-blue-500/30" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-medium pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pl-18">
                  <div className="ml-12 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl">
            <HelpCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Can't find what you're looking for? Reach out to us directly!
            </p>
            <a
              href="mailto:loop.hackathon26@gmail.com"
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full text-white font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
