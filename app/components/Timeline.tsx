"use client";

import { Clock } from "lucide-react";

const timelineData = [
  { day: "DAY 1", time: "9:00 - 10:00 AM", activity: "Participants Registration", type: "registration" },
  { day: "DAY 1", time: "10:00 - 10:30 AM", activity: "Opening Ceremony & Announcements", type: "ceremony" },
  { day: "DAY 1", time: "10:30 - 01:30 PM", activity: "Hackathon Begins", type: "hacking" },
  { day: "DAY 1", time: "01:30 - 02:30 PM", activity: "Lunch Break", type: "break" },
  { day: "DAY 1", time: "02:30 - 05:00 PM", activity: "Mentor Screening & Guidance (Round 1)", type: "mentor" },
  { day: "DAY 1", time: "05:00 - 05:30 PM", activity: "Tea & Snacks Break", type: "break" },
  { day: "DAY 1", time: "05:30 - 08:00 PM", activity: "Development Continues", type: "hacking" },
  { day: "DAY 1", time: "08:00 - 09:00 PM", activity: "Dinner", type: "break" },
  { day: "DAY 1", time: "09:00 - 11:00 PM", activity: "Mentor Screening & Guidance (Round 2)", type: "mentor" },
  { day: "DAY 1", time: "11:00 - 11:30 PM", activity: "Midnight Fun", type: "fun" },
  { day: "DAY 1", time: "11:30 - 12:00 AM", activity: "Coffee/Snacks Break", type: "break" },
  { day: "DAY 2", time: "12:00 - 03:00 AM", activity: "Mentor Screening & Guidance (Round 3)", type: "mentor" },
  { day: "DAY 2", time: "03:00 - 05:00 AM", activity: "Development Continues", type: "hacking" },
  { day: "DAY 2", time: "05:00 - 05:30 AM", activity: "Tea/Coffee Break", type: "break" },
  { day: "DAY 2", time: "07:30 - 08:30 AM", activity: "Breakfast", type: "break" },
  { day: "DAY 2", time: "08:30 - 10:00 AM", activity: "Development Continues", type: "hacking" },
  { day: "DAY 2", time: "10:00 - 10:30 AM", activity: "Submissions", type: "submission" },
  { day: "DAY 2", time: "10:30 - 12:00 PM", activity: "Evaluation by Judges", type: "judging" },
  { day: "DAY 2", time: "12:00 PM Onwards", activity: "Winner Announcement & Prize Distribution", type: "ceremony" },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "registration":
      return "border-green-500 bg-green-500/10";
    case "ceremony":
      return "border-yellow-500 bg-yellow-500/10";
    case "hacking":
      return "border-blue-500 bg-blue-500/10";
    case "break":
      return "border-gray-500 bg-gray-500/10";
    case "mentor":
      return "border-purple-500 bg-purple-500/10";
    case "fun":
      return "border-pink-500 bg-pink-500/10";
    case "submission":
      return "border-orange-500 bg-orange-500/10";
    case "judging":
      return "border-red-500 bg-red-500/10";
    default:
      return "border-blue-500 bg-blue-500/10";
  }
};

const getTypeDotColor = (type: string) => {
  switch (type) {
    case "registration": return "bg-green-500";
    case "ceremony": return "bg-yellow-500";
    case "hacking": return "bg-blue-500";
    case "break": return "bg-gray-500";
    case "mentor": return "bg-purple-500";
    case "fun": return "bg-pink-500";
    case "submission": return "bg-orange-500";
    case "judging": return "bg-red-500";
    default: return "bg-blue-500";
  }
};

export default function Timeline() {
  const day1Events = timelineData.filter((e) => e.day === "DAY 1");
  const day2Events = timelineData.filter((e) => e.day === "DAY 2");

  return (
    <section id="timeline" className="relative py-24 bg-gradient-to-b from-black/50 to-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            24 hours of intense coding, learning, and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: "Registration", color: "bg-green-500" },
            { label: "Ceremony", color: "bg-yellow-500" },
            { label: "Hacking", color: "bg-blue-500" },
            { label: "Break", color: "bg-gray-500" },
            { label: "Mentoring", color: "bg-purple-500" },
            { label: "Submission", color: "bg-orange-500" },
            { label: "Judging", color: "bg-red-500" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Day 1 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-xl font-bold gradient-text">DAY 1</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent" />
            </div>
            
            <div className="space-y-4">
              {day1Events.map((event, index) => (
                <div
                  key={index}
                  className={`relative glass p-4 rounded-xl border-l-4 ${getTypeStyles(event.type)} card-hover`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-1.5 ${getTypeDotColor(event.type)}`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <p className="font-medium">{event.activity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-xl font-bold gradient-text">DAY 2</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent" />
            </div>
            
            <div className="space-y-4">
              {day2Events.map((event, index) => (
                <div
                  key={index}
                  className={`relative glass p-4 rounded-xl border-l-4 ${getTypeStyles(event.type)} card-hover`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-1.5 ${getTypeDotColor(event.type)}`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <p className="font-medium">{event.activity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="mt-16 glass p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Important Dates</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/5">
              <p className="text-sm text-gray-500 mb-1">Registration Deadline</p>
              <p className="text-xl font-bold gradient-text">30th January 2026</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <p className="text-sm text-gray-500 mb-1">Hackathon Date</p>
              <p className="text-xl font-bold gradient-text">20th February 2026</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <p className="text-sm text-gray-500 mb-1">Mode</p>
              <p className="text-xl font-bold gradient-text">Offline (On-Site)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
