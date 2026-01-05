"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText, Presentation } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Cover } from "@/components/ui/cover";
import { Highlight } from "@/components/ui/hero-highlight";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-2xl">
              LOOP
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative flex-1 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              <PointerHighlight
                rectangleClassName="border-2 border-blue-500"
                pointerClassName="text-blue-500"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Downloads
                </span>
              </PointerHighlight>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Get the <Highlight className="text-white font-semibold">official resources</Highlight> you need for{" "}
              <Cover>Loop Hackathon</Cover>
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Brochure Card */}
            <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 hover:border-blue-500/50 rounded-2xl p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                  <FileText className="w-10 h-10 text-blue-400" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3">
                  Official Brochure
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Complete event details, schedule, and guidelines
                </p>
                
                <a
                  href="/Loop_Brochure.pdf"
                  download
                  className="group/btn inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 w-full"
                >
                  <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                  Download PDF
                </a>
              </div>
            </div>

            {/* PPT Template Card */}
            <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 hover:border-purple-500/50 rounded-2xl p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10">
                  <Presentation className="w-10 h-10 text-purple-400" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3">
                  PPT Template
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Official presentation template for your project
                </p>
                
                <a
                  href="/Loop-PPT.pdf"
                  download
                  className="group/btn inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 w-full"
                >
                  <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  <Highlight className="text-white">Pro Tip</Highlight>
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Review the <Cover>official brochure</Cover> for complete hackathon guidelines and use the{" "}
                  <Cover>PPT template</Cover> to create a professional presentation for your final submission.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <AnimatedGradientText
                className="text-3xl font-bold block mb-2"
                colorFrom="#60a5fa"
                colorTo="#a855f7"
                speed={1.5}
              >
                24 Hours
              </AnimatedGradientText>
              <p className="text-white/50 text-sm">Duration</p>
            </div>
            <div className="text-center">
              <AnimatedGradientText
                className="text-3xl font-bold block mb-2"
                colorFrom="#f59e0b"
                colorTo="#d97706"
                speed={1.5}
              >
                ₹1L+
              </AnimatedGradientText>
              <p className="text-white/50 text-sm">Prize Pool</p>
            </div>
            <div className="text-center">
              <AnimatedGradientText
                className="text-3xl font-bold block mb-2"
                colorFrom="#22c55e"
                colorTo="#16a34a"
                speed={1.5}
              >
                400+
              </AnimatedGradientText>
              <p className="text-white/50 text-sm">Participants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Loop Hackathon · <Cover>Innovation & Robotics Lab</Cover>
          </p>
        </div>
      </footer>
    </div>
  );
}
