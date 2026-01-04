import Link from "next/link";

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <section className="flex-1 flex items-center justify-center py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-16"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Download Official Brochure and PPT
          </h1>
          
          <p className="text-lg text-white/50 mb-16">
            Get the resources you need for Loop Hackathon
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/Loop_Brochure.pdf"
              download
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Official Brochure
            </a>

            <a
              href="/Loop-PPT.pdf"
              download
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              PPT Template
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/30 text-sm">
            © 2026 Loop Hackathon · Innovation & Robotics Lab
          </p>
        </div>
      </footer>
    </div>
  );
}
