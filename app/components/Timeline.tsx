"use client";

import { Timeline } from "@/components/ui/timeline";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Cover } from "@/components/ui/cover";
import { Highlight } from "@/components/ui/hero-highlight";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export default function TimelineSection() {
  const data = [
    {
      title: "4 Jan",
      content: (
        <div className="space-y-3">
          <h3 className="text-white text-2xl font-bold mb-2">
            Registration Opens
          </h3>
          <p className="text-white/80 text-base leading-relaxed">
            <Highlight className="text-white font-semibold">Register your team for FREE</Highlight> on Unstop platform. Form teams of{" "}
            <Cover className="text-white font-semibold">3-6 members</Cover> and secure your spot for Loop 1.0
          </p>
        </div>
      ),
    },
    {
      title: "17 Feb",
      content: (
        <div className="space-y-3">
          <h3 className="text-white text-2xl font-bold mb-2">
            Registration Deadline
          </h3>
          <p className="text-white/80 text-base leading-relaxed">
            Last day to register for FREE. Make sure all team members are confirmed and details are accurate on{" "}
            <Cover className="text-white font-semibold">Unstop</Cover>
          </p>
        </div>
      ),
    },
    {
      title: "20 Feb",
      content: (
        <div className="space-y-3">
          <h3 className="text-white text-2xl font-bold mb-2">
            Submission Deadline
          </h3>
          <p className="text-white/80 text-base leading-relaxed">
            Final deadline to submit your{" "}
            <Highlight className="text-white font-semibold">PPT presentation</Highlight>,{" "}
            <Highlight className="text-white font-semibold">prototype</Highlight>, and optional video. 
            Use the official template and showcase your innovation clearly
          </p>
        </div>
      ),
    },
    {
      title: "21-28 Feb",
      content: (
        <div className="space-y-3">
          <h3 className="text-white text-2xl font-bold mb-2">
            Evaluation Round
          </h3>
          <p className="text-white/80 text-base leading-relaxed">
            Judges evaluate all submissions based on{" "}
            <Cover className="text-white font-semibold">innovation, technical complexity</Cover>, and clarity. 
            Top teams will be shortlisted for the final hackathon
          </p>
        </div>
      ),
    },
    {
      title: "1 March",
      content: (
        <div className="space-y-3">
          <h3 className="text-white text-2xl font-bold mb-2">
            Results Announced
          </h3>
          <p className="text-white/80 text-base leading-relaxed">
            <AnimatedShinyText className="text-lg font-semibold">
              Shortlisted teams declared!
            </AnimatedShinyText>
            <span className="block mt-2 text-white/70">
              Selected teams will receive confirmation. Registration fee for Grand Finale:{" "}
              <Cover className="text-white font-semibold">₹1,000</Cover>
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "11 March",
      content: (
        <div className="space-y-4">
          <h3 className="text-white text-2xl font-bold mb-2">
            🏆 Final Hackathon
          </h3>
          <p className="text-white/80 text-base leading-relaxed">
            <Highlight className="text-white font-semibold">24-hour offline hackathon</Highlight> at 
            BVCOE, Navi Mumbai. Build, iterate, and present your final solution. 
            Winners take home{" "}
            <Cover className="text-white font-semibold">₹1,00,000 in prizes</Cover>
          </p>
          <Link href="/event-day-timeline">
            <RainbowButton className="mt-4">
              View Event Day Schedule →
            </RainbowButton>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="relative bg-black">
      <Timeline data={data} />
    </section>
  );
}
