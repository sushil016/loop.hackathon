"use client";

import { 
  Mail, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github,
  Heart,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-300" },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Tracks", href: "#tracks" },
  { name: "Prizes", href: "#prizes" },
  { name: "Rules", href: "#rules" },
  { name: "FAQ", href: "#faq" },
  { name: "Problem Statements", href: "/problem-statements" },
];

const legalLinks = [
  { name: "Code of Conduct", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black/80 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/loop-logo.png"
                alt="Loop Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="text-3xl font-bold gradient-text">LOOP</span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              A 24-hour National Level Hackathon focused on depth over speed. 
              Build. Break. Refine. Join us to innovate and create impactful solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:loop.hackathon26@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  loop.hackathon26@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  Bharati Vidyapeeth College of Engineering,<br />
                  Navi Mumbai, Maharashtra
                </span>
              </li>
            </ul>

            {/* Register CTA */}
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full text-white font-medium text-sm mt-6"
            >
              Register Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © 2026 Loop Hackathon. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
              by Innovation & Robotics Lab
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
