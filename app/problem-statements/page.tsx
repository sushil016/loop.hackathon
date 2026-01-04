import Link from "next/link";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

const problemTracks = [
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
    description: "Design innovative solutions addressing real-world challenges in cybersecurity, digital forensics, and law enforcement. Ideas may focus on crime prevention, threat detection, privacy, surveillance analytics, or data integrity, using modern technologies to create secure, ethical, and scalable impact.",
  },
  {
    id: 6,
    title: "Student Innovation",
    description: "Design and prototype a scalable system that resolves a clearly defined inefficiency, demonstrating a measurable improvement in performance, cost, or user experience.",
    constraint: "The system must demonstrate behavior under at least one imperfect condition (noise, delay, partial failure, ambiguity, or misuse), not just ideal inputs.",
  },
];

// const hardwareProblems = [
//   {
//     id: 1,
//     title: "Autonomous Border Surveillance Drone",
//     description: "Develop a low-latency drone system capable of detecting intrusions and suspicious activity in remote border regions.",
//     focusAreas: ["Night-time detection", "Target tracking", "Secure communication"],
//   },
//   {
//     id: 2,
//     title: "Swarm-Based Area Surveillance",
//     description: "Create a coordinated drone swarm that can autonomously divide, scan, and monitor a large area efficiently.",
//     focusAreas: [],
//   },
//   {
//     id: 3,
//     title: "Autonomous Medical Supply Delivery Drone",
//     description: "Design a drone system to deliver medical supplies to remote or traffic-congested areas with minimal human intervention.",
//     focusAreas: [],
//   },
// ];

const softwareProblems = [
  {
    id: 1,
    title: "AI-Powered Competitive Exam Performance Analytics Platform",
    description: "Build an intelligent analytics platform that transforms raw competitive exam and mock-test data into personalized, question-level insights and adaptive study recommendations.",
  },
  {
    id: 2,
    title: "AI-Driven Project Intelligence for Engineering Teams",
    description: "Build an intelligent project management system that continuously analyzes tasks and team communication to generate real-time insights, summaries, and alerts.",
  },
  {
    id: 3,
    title: "Intelligent Deepfake Detection and Trust Verification System",
    description: "Build an intelligent monitoring system that continuously analyzes structural stress/strain data to detect early signs of fatigue and predict failure risks in critical infrastructure like bridges. The system should convert raw sensor signals into clear, actionable health insights and alerts for proactive maintenance.",
  },
  {
    id: 4,
    title: "Vision-Only Drone Intelligence for Obstacle Avoidance & Real-Time Video Analytics",
    description: "Create an AI-powered drone intelligence system that operates exclusively on monocular RGB video feeds, without relying on depth sensors or additional hardware. The system should enable a drone to perceive its environment visually and autonomously avoid obstacles in real time, while simultaneously processing live video streams to detect, track, and count objects of interest.",
  },
  {
    id: 5,
    title: "Intelligent Drone Perception, Tracking & Autonomous Navigation",
    description: "Build an intelligent drone system capable of real-time video analytics, vision-based target tracking, and autonomous path planning in dynamic environments. The system should process live drone video feeds to detect, track, and count objects of interest, while simultaneously maintaining a robust visual lock on moving targets, even in the presence of occlusion, motion blur, and rapid motion. In parallel, an autonomous navigation component should be developed where a reinforcement learning-based agent learns to plan optimal flight paths within a simulated environment containing dynamic obstacles.",
  },
];

export default function ProblemStatements() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl">
              LOOP
            </Link>
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Problem Statements
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Review the tracks and problem statements below. Detailed specifications will be provided during the hackathon.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-2">Problem Tracks</h2>
          <p className="text-white/40 text-sm mb-8">Six core themes guiding all problem statements</p>
          
          <div className="border border-white/10 rounded-lg overflow-hidden">
            {problemTracks.map((track, index) => (
              <div
                key={track.id}
                className={`p-6 ${index !== problemTracks.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <div className="flex gap-4">
                  <span className="text-white/30 font-mono text-sm w-8 flex-shrink-0">
                    {String(track.id).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {track.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {track.description}
                    </p>
                    {track.constraint && (
                      <div className="mt-3">
                        <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Constraint</p>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {track.constraint}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-2">Hardware Problem Statements</h2>
          <p className="text-white/40 text-sm mb-8">Physical systems and embedded solutions</p>
          
          <div className="space-y-6">
            {hardwareProblems.map((problem) => (
              <div
                key={problem.id}
                className="border border-white/10 rounded-lg p-6"
              >
                <div className="flex gap-4">
                  <span className="text-white/30 font-mono text-sm w-8 flex-shrink-0">
                    H{problem.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {problem.description}
                    </p>
                    
                    {problem.focusAreas.length > 0 && (
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Focus Areas</p>
                        <p className="text-white/60 text-sm">
                          {problem.focusAreas.join(' / ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-2">Software Problem Statements</h2>
          <p className="text-white/40 text-sm mb-8">AI, analytics, and intelligent systems</p>
          
          <div className="space-y-6">
            {softwareProblems.map((problem) => (
              <div
                key={problem.id}
                className="border border-white/10 rounded-lg p-6"
              >
                <div className="flex gap-4">
                  <span className="text-white/30 font-mono text-sm w-8 flex-shrink-0">
                    S{problem.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="border border-white/10 rounded-lg p-6 text-center">
            <p className="text-white/40 text-sm">More Problems Coming Soon!</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-4">Note</h2>
          <div className="border border-white/10 rounded-lg p-6 space-y-4">
            <p className="text-white/50 text-sm leading-relaxed">
              Problem tracks are designed for student thinking and innovation while Problem Statements are short product-oriented examples.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Participants may choose either a track or a problem statement, and there is no fixed mapping or evaluation difference between them—choose what best fits your idea.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 pt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Participate?
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Register your team on Unstop to participate in the hackathon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={UNSTOP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Register on Unstop
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/30 text-sm">
            2026 Loop Hackathon - Innovation and Robotics Lab
          </p>
        </div>
      </footer>
    </div>
  );
}
