"use client";

import Link from "next/link";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { Cover } from "@/components/ui/cover";

export default function Footer() {
  return (
    <footer className="relative bg-black">
      <div className="max-w-full mx-auto">
        {/* Single Blue Card - Rounded Top Corners Only */}
        <div className="bg-[#0210d9] rounded-t-[3rem] px-8 sm:px-12 lg:px-20 py-12">
          
          {/* Top Grid - 3 Columns */}
          <div className="grid md:grid-cols-3 gap-12 mb-10">
            {/* Quote - Left */}
            <div className="flex items-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                <Cover>Innovation Beyond Speed</Cover><br />
                <Cover>Solutions Beyond Code</Cover>
              </p>
            </div>

            {/* Contact Organizers - Center */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Contact Organizers</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold text-lg">Sushil Sahani</p>
                  <a 
                    href="tel:+919967612372"
                    className="text-white/80 hover:text-white transition-colors text-lg"
                  >
                    +91 99676 12372
                  </a>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Rudra Sawant</p>
                  <a 
                    href="tel:+919967612372"
                    className="text-white/80 hover:text-white transition-colors text-lg"
                  >
                    +91 99676 12372
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media - Right */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Connect With Us</h4>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="mailto:loop.hackathon26@gmail.com"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[#0349fc] px-3 py-2 rounded-lg text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Email
                  </span>
                </a>
                
                <a
                  href="https://instagram.com/loop.hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[#0349fc] px-3 py-2 rounded-lg text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Instagram
                  </span>
                </a>
                
                <a
                  href="https://twitter.com/loop_hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[#0349fc] px-3 py-2 rounded-lg text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Twitter
                  </span>
                </a>
                
                <a
                  href="https://linkedin.com/company/loop-hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[#0349fc] px-3 py-2 rounded-lg text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    LinkedIn
                  </span>
                </a>
                
                <a
                  href="https://discord.gg/loophackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all"
                  aria-label="Discord"
                >
                  <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[#0349fc] px-3 py-2 rounded-lg text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Discord
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Address - Full Width */}
          <div className="mb-10">
            <h4 className="text-2xl font-bold text-white mb-4">Our Address</h4>
            <address className="not-italic text-white/90 text-lg leading-relaxed text-center">
              Bharati Vidyapeeth College of Engineering, Room No: 211, C.B.D Belapur, Sector 7, Navi Mumbai - 400614, Maharashtra, India
            </address>
          </div>

          {/* Bottom Links */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/80 text-base">
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-white transition-colors font-medium">
                  Terms & Conditions
                </Link>
                <span>·</span>
                <Link href="#" className="hover:text-white transition-colors font-medium">
                  Privacy Policy
                </Link>
              </div>
              <p className="text-center">
                Designed & Developed by <span className="text-white font-semibold">Technical Team of Robotics Club</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
