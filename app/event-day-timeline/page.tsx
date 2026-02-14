"use client";

import { Highlight } from "@/components/ui/hero-highlight";
import { Cover } from "@/components/ui/cover";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EventDayTimeline() {
  const day1Schedule = [
    { time: "9:00 - 10:00 AM", activity: "Participants Registration" },
    { time: "10:00 - 10:30 AM", activity: "Opening Ceremony & Announcements" },
    { time: "10:30 - 01:30 PM", activity: "Hackathon Begins" },
    { time: "01:30 - 02:30 PM", activity: "Lunch Break" },
    { time: "02:30 - 05:00 PM", activity: "Mentor Screening & Guidance (Round 1)" },
    { time: "05:00 - 05:30 PM", activity: "Tea & Snacks Break" },
    { time: "05:30 - 08:00 PM", activity: "Development Continues" },
    { time: "08:00 - 09:00 PM", activity: "Dinner" },
    { time: "09:00 - 11:00 PM", activity: "Mentor Screening & Guidance (Round 2)" },
    { time: "11:00 - 11:30 PM", activity: "Midnight Fun" },
    { time: "11:30 PM - 12:00 AM", activity: "Coffee/Snacks Break" },
  ];

  const day2Schedule = [
    { time: "12:00 - 03:00 AM", activity: "Mentor Screening & Guidance (Round 3)" },
    { time: "03:00 - 05:00 AM", activity: "Development Continues" },
    { time: "05:00 - 05:30 AM", activity: "Tea/Coffee Break" },
    { time: "07:30 - 08:30 AM", activity: "Breakfast" },
    { time: "08:30 - 10:00 AM", activity: "Development Continues" },
    { time: "10:00 - 10:30 AM", activity: "Submissions" },
    { time: "10:30 AM - 12:00 PM", activity: "Evaluation by Judges" },
    { time: "12:00 PM Onwards", activity: "Winner Announcement & Prize Distribution" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/#timeline"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
      </div>

      <div className="relative py-28">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-20 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              Event Day{" "}
              <PointerHighlight
                rectangleClassName="border-2 border-purple-500"
                pointerClassName="text-purple-500"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Timeline
                </span>
              </PointerHighlight>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Complete schedule for the <Cover className="text-white font-bold">24-hour hackathon</Cover> on{" "}
              <Highlight className="text-white font-bold">11th March 2026</Highlight>
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Day 1 */}
            <div>
              <div className="mb-8">
                <AnimatedGradientText
                  className="text-3xl font-bold mb-4"
                  colorFrom="#a855f7"
                  colorTo="#ec4899"
                  speed={1.5}
                >
                  DAY 1
                </AnimatedGradientText>
                <p className="text-white/60">11th March - Morning to Midnight</p>
              </div>

              <div className="space-y-3">
                {day1Schedule.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="glass p-5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                        </div>
                        <div className="flex-1">
                          <p className="text-purple-400 font-semibold text-sm mb-1">
                            {item.time}
                          </p>
                          <p className="text-white/90 font-medium">
                            {item.activity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <div className="mb-8">
                <AnimatedGradientText
                  className="text-3xl font-bold mb-4"
                  colorFrom="#ec4899"
                  colorTo="#f59e0b"
                  speed={1.5}
                >
                  DAY 2
                </AnimatedGradientText>
                <p className="text-white/60">12th March - Midnight to Afternoon</p>
              </div>

              <div className="space-y-3">
                {day2Schedule.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="glass p-5 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 mt-2 rounded-full bg-pink-500" />
                        </div>
                        <div className="flex-1">
                          <p className="text-pink-400 font-semibold text-sm mb-1">
                            {item.time}
                          </p>
                          <p className="text-white/90 font-medium">
                            {item.activity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-16">
            <div className="relative rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Important Notes</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>All times are in IST (Indian Standard Time)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <Highlight className="text-white font-semibold">Mentor guidance</Highlight> available in three rounds throughout the event
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Meals and refreshments provided at scheduled times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      Final submissions must be completed by{" "}
                      <Cover className="text-white font-semibold">10:30 AM on Day 2</Cover>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
