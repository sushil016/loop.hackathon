"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Clock, MapPin, Users, Search } from "lucide-react";
import { useState, useMemo } from "react";

interface Team {
  team_id: string;
  team_name: string;
  status: "Shortlisted" | "Waitlist";
  college: string;
  team_leader: string;
}

const shortlistedTeams: Team[] = [
  { team_id: "U93LGX16", team_name: "AlgoSmiths", status: "Shortlisted", college: "Vidyalankar Institute of Technology (VIT), Mumbai", team_leader: "Aashutosh Mahajan" },
  { team_id: "U7PIM535", team_name: "GEONIX", status: "Shortlisted", college: "Vidyalankar Institute Of Technology, Wadala", team_leader: "Arya Suryavanshi" },
  { team_id: "UR980I3D", team_name: "KrushiMitra", status: "Shortlisted", college: "Bharati Vidyapeeth College of Engineering, Navi Mumbai", team_leader: "Gaurav Zore" },
  { team_id: "UR954K8G", team_name: "Drovice", status: "Shortlisted", college: "SIES Graduate School of Technology, Navi Mumbai, Maharashtra", team_leader: "Ujjwal Rai" },
  { team_id: "UZ591IK1", team_name: "dotEXE", status: "Shortlisted", college: "Vidyalankar Institute of Technology", team_leader: "Mohammed Yusuf Sayed" },
  { team_id: "UNOM5642", team_name: "npx create", status: "Shortlisted", college: "Vidyavardhini College of Engineering and Technology", team_leader: "Karan Pawar" },
  { team_id: "UK13P5I1", team_name: "1HP _ CLUTCH", status: "Shortlisted", college: "Thadomal Shahani Engineering College", team_leader: "Junaid Shaikh" },
  { team_id: "UK7C7I06", team_name: "Team Nitrix", status: "Shortlisted", college: "SIES Graduate School of Technology, Navi Mumbai, Maharashtra", team_leader: "Niharika Singh" },
  { team_id: "UM4Q179Z", team_name: "Byte Me", status: "Shortlisted", college: "AP Shah Institute of Technology", team_leader: "Daksh Mulundkar" },
  { team_id: "U4PS288A", team_name: "Meticura", status: "Shortlisted", college: "Vasantdada Patil College of Engineering & VA", team_leader: "Lokesh Konka" },
  { team_id: "U39D83BI", team_name: "Sensors", status: "Shortlisted", college: "Vidyavardhini College of Engineering and Technology, Mumbai", team_leader: "Sahil Mohite" },
  { team_id: "U272KEW8", team_name: "CodeSpark", status: "Shortlisted", college: "TSSM's Bhivarabai Sawant College of Engineering and Research, Pune", team_leader: "Ishani Pawar" },
  { team_id: "UW76HV74", team_name: "Let's Do It", status: "Shortlisted", college: "International Institute of Information Technology (IIIT), Naya Raipur", team_leader: "Aanchal Rajawat" },
  { team_id: "U4WK11D6", team_name: "COLLECTIVE", status: "Shortlisted", college: "Vivekanand Education Society's Institute Of Technology (VESIT), Mumbai", team_leader: "Vipul Khairnar" },
  { team_id: "U4B8TQ25", team_name: "ChidiyaGHAR", status: "Shortlisted", college: "Viva Institute of Technology (VIT), Mumbai", team_leader: "Rudraksh Rakesh Zodage" },
  { team_id: "UG26OW15", team_name: "Git Happens", status: "Shortlisted", college: "Vasantdada Patil College of Engineering & VA", team_leader: "Shrey Gadhave" },
  { team_id: "UR747KW7", team_name: "ORBIT_26", status: "Shortlisted", college: "Vidyalankar Institute of Technology", team_leader: "Atharv Santosh Ghorpade" },
  { team_id: "U9E5VT15", team_name: "InnovateX", status: "Shortlisted", college: "Dwarkadas J. Sanghvi College of Engineering", team_leader: "VEDANT GAWALI" },
  { team_id: "U73UDZ44", team_name: "Astraa", status: "Shortlisted", college: "JVM's Jr. College & Mehta Degree College, Airoli", team_leader: "Megha Gadekar" },
  { team_id: "UY7DB062", team_name: "ZephyrWin", status: "Shortlisted", college: "Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC), Navi Mumbai", team_leader: "Shaikh Nabil Ahmed" },
  { team_id: "U763HSN1", team_name: "Martal Hackers", status: "Shortlisted", college: "Datta Meghe College of Engineering, Airoli, Navi Mumbai", team_leader: "Mithil Kunder" },
  { team_id: "U5P56J4X", team_name: "CODE4VIBE", status: "Shortlisted", college: "Pimpri Chinchwad College of Engineering (PCCOE), Pune", team_leader: "Mayank Pawar" },
  { team_id: "U079XG5F", team_name: "PYRO PROGRAMMERS", status: "Shortlisted", college: "University Departments, Rajasthan Technical University (RTU), Kota", team_leader: "Akshat Srivastava" },
  { team_id: "U2L41IZ9", team_name: "Genztech", status: "Shortlisted", college: "Vishwakarma Institute of Technology, Pune, Maharashtra", team_leader: "Jatin mahire mahire" },
  { team_id: "UHY2L213", team_name: "TeamXNova", status: "Shortlisted", college: "G.V. Acharya Institute of Engineering & Technology (GVAIET), Shelu, Maharashtra", team_leader: "Priyanshu Vishwakarma" },
  { team_id: "URNM3142", team_name: "NEXUS", status: "Shortlisted", college: "Datta Meghe College of Engineering (DMCE), Navi Mumbai", team_leader: "Vedant Sawant" },
  { team_id: "U2SY164P", team_name: "Binary Brains", status: "Shortlisted", college: "SVKM's Dwarkadas J. Sanghvi College of Engineering", team_leader: "Shrutika Parmar" },
  { team_id: "U21CL6R7", team_name: "VIBEGOD", status: "Shortlisted", college: "Bharati Vidyapeeth College of Engineering, Navi Mumbai", team_leader: "Meet Sonawane" },
  { team_id: "U09TQJ63", team_name: "CELESTIALS", status: "Shortlisted", college: "Terna Engineering College (TERNA), Navi Mumbai", team_leader: "Shubham Redkar" },
  { team_id: "U4GU5P65", team_name: "Innovators Quest", status: "Shortlisted", college: "Vellore Institute of Technology (VIT), Vellore", team_leader: "Hanniel Vinu" },
];

const waitlistedTeams: Team[] = [
  { team_id: "U23W5B5I", team_name: "Team Dreamers", status: "Waitlist", college: "Vishwakarma Institute Of Technology, Pune", team_leader: "Nihar Thalkar" },
  { team_id: "UC9A33S9", team_name: "Vibe_Coderzz", status: "Waitlist", college: "Dr. Vishwanath Karad MIT World Peace University (MIT-WPU), Pune", team_leader: "Shashwat Holkar" },
  { team_id: "UY8F5G74", team_name: "CodeBreakers", status: "Waitlist", college: "Saraswati College of Engineering", team_leader: "Rutuja Rajesh Patil" },
  { team_id: "UX92Y1C3", team_name: "Tech-Bytes", status: "Waitlist", college: "Dwarkadas J. Sanghvi College of Engineering", team_leader: "Manishkumar Munnalal Gupta" },
  { team_id: "U8NV225J", team_name: "DEV PIRATES", status: "Waitlist", college: "Bhivarabai Sawant College of Engineering & Research, Pune", team_leader: "Aniket Wanave" },
  { team_id: "UGS416Y0", team_name: "SYNTAX SQUAD", status: "Waitlist", college: "N. K. Orchid College of Engineering and Technology", team_leader: "Chetan Basawaraj Shabadi" },
  { team_id: "UK15BX77", team_name: "It Works !", status: "Waitlist", college: "Bharti Vidyapeeth Institute of Management and Information Technology, Navi Mumbai", team_leader: "Amey Hande" },
  { team_id: "U6VP2O78", team_name: "CodeBlooded", status: "Waitlist", college: "Vidyalankar School Of Information Technology", team_leader: "Pratham Yadav" },
  { team_id: "UO31JF69", team_name: "InnoQueens", status: "Waitlist", college: "Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune", team_leader: "Jidnyasa Devendra Patil" },
  { team_id: "U81DUC12", team_name: "HacXcelerate", status: "Waitlist", college: "Datta Meghe College of Engineering, Airoli, Navi Mumbai", team_leader: "Dhanushkar Guin" },
];

export default function ResultPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"shortlisted" | "waitlist">("shortlisted");

  const filteredShortlisted = useMemo(
    () =>
      shortlistedTeams.filter(
        (t) =>
          t.team_name.toLowerCase().includes(search.toLowerCase()) ||
          t.college.toLowerCase().includes(search.toLowerCase()) ||
          t.team_leader.toLowerCase().includes(search.toLowerCase()) ||
          t.team_id.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const filteredWaitlisted = useMemo(
    () =>
      waitlistedTeams.filter(
        (t) =>
          t.team_name.toLowerCase().includes(search.toLowerCase()) ||
          t.college.toLowerCase().includes(search.toLowerCase()) ||
          t.team_leader.toLowerCase().includes(search.toLowerCase()) ||
          t.team_id.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const activeTeams = activeTab === "shortlisted" ? filteredShortlisted : filteredWaitlisted;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-600/[0.06] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-orange-600/[0.06] rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-green-600/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-12 z-40 border-b border-white/[0.06] backdrop-blur-2xl bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Results Announced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Loop 1.0
              </span>
            </h1>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Hero */}
        <div className="mb-12 sm:mb-16 text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-8">
            <Trophy className="w-3.5 h-3.5" />
            Loop 1.0 Results
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="text-white">Shortlisted</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Teams
            </span>
          </h1> */}

          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-8">
            Congratulations to all the teams selected for the Loop 1.0 Grand Finale!
          </p>

          {/* Event Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>11th March 2026</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>BVCOE, Navi Mumbai</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <span>{shortlistedTeams.length} Shortlisted &middot; {waitlistedTeams.length} Waitlisted</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search by team, college, or leader..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-yellow-500/40 focus:ring-1 focus:ring-yellow-500/20 transition-all"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-white/[0.04] border border-white/[0.06] p-1">
            <button
              onClick={() => setActiveTab("shortlisted")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "shortlisted"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              <span className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Shortlisted ({filteredShortlisted.length})
              </span>
            </button>
            <button
              onClick={() => setActiveTab("waitlist")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "waitlist"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Waitlist ({filteredWaitlisted.length})
              </span>
            </button>
          </div>
        </div>

        {/* Teams Table */}
        <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
          {/* Table Header */}
          <div className="hidden lg:grid lg:grid-cols-[50px_100px_1fr_1fr_1.8fr_110px] bg-white/[0.04] border-b border-white/[0.08] px-6 py-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">#</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Team ID</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Team Name</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Team Leader</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">College</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 text-right">Status</span>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/[0.04]">
            {activeTeams.map((team, idx) => (
              <div
                key={`${team.team_id}-${idx}`}
                className="group hover:bg-white/[0.03] transition-colors"
              >
                {/* Desktop Row */}
                <div className="hidden lg:grid lg:grid-cols-[50px_100px_1fr_1fr_1.8fr_110px] items-center px-6 py-4">
                  {/* # */}
                  <span className="text-base font-bold text-white/50">
                    {idx + 1}
                  </span>

                  {/* Team ID */}
                  <span className="font-mono text-sm text-white/40 tracking-wide">
                    {team.team_id}
                  </span>

                  {/* Team Name */}
                  <span className="text-base font-semibold text-white pr-4">
                    {team.team_name}
                  </span>

                  {/* Leader */}
                  <span className="text-sm text-white/60 pr-4">
                    {team.team_leader}
                  </span>

                  {/* College */}
                  <span className="text-sm text-white/45 pr-4 leading-snug">
                    {team.college}
                  </span>

                  {/* Status */}
                  <div className="flex justify-end">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        team.status === "Shortlisted"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}
                    >
                      {team.status}
                    </span>
                  </div>
                </div>

                {/* Mobile Card */}
                <div className="lg:hidden p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                        activeTab === "shortlisted"
                          ? "bg-gradient-to-br from-yellow-500 to-orange-500 text-white"
                          : "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white truncate">{team.team_name}</h3>
                        <span
                          className={`flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            team.status === "Shortlisted"
                              ? "bg-green-500/10 text-green-400 border border-green-500/20"
                              : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          }`}
                        >
                          {team.status}
                        </span>
                      </div>
                      <p className="text-white/45 text-sm mb-2 line-clamp-2">{team.college}</p>
                      <div className="flex items-center gap-3 text-xs text-white/40">
                        <span className="font-mono bg-white/[0.04] px-1.5 py-0.5 rounded">{team.team_id}</span>
                        <span className="text-white/15">|</span>
                        <span>{team.team_leader}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeTeams.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/30 text-lg">No teams found matching &quot;{search}&quot;</p>
          </div>
        )}

        {/* Info Section */}
        <section className="mt-16 sm:mt-24">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">📋</span>
              Important Information
            </h2>
            <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-yellow-400" />
                <p>
                  <span className="text-white/80 font-medium">Shortlisted teams</span>{" "}
                  are confirmed for the Grand Finale on 11th March 2026 at BVCOE, Navi Mumbai.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-400" />
                <p>
                  <span className="text-white/80 font-medium">Waitlisted teams</span>{" "}
                  may be promoted if any shortlisted team withdraws. Stay tuned for updates.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-400" />
                <p>
                  Shortlisted teams are required to pay a registration fee of{" "}
                  <span className="text-white/80 font-medium">₹1,000/-</span> per team for the Grand Finale.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400" />
                <p>
                  For any queries, reach out to us through our official communication channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 sm:mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/70 px-8 py-3.5 rounded-xl font-medium text-base hover:bg-white/[0.04] hover:text-white hover:border-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.06] py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/30 text-sm">
            &copy; 2026 Loop Hackathon &middot; Innovation &amp; Robotics Lab, BVCOE Navi Mumbai
          </p>
        </div>
      </footer>
    </div>
  );
}
