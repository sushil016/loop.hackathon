"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UNSTOP_LINK = "https://unstop.com/p/loop-10-24-hr-national-level-hackathon-bharati-vidyapeeth-college-of-engineering-bvcoe-navi-mumbai-1617554";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Tracks", href: "#tracks" },
  { name: "Prizes", href: "#prizes" },
  { name: "Rules", href: "#rules" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-12 left-0 right-0 z-50 px-4 md:flex md:justify-center">
      <nav
        className={`transition-all duration-300 md:rounded-full rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md w-full py-3 ${
          scrolled ? "md:w-[70%] md:py-2" : "md:w-[80%]"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/loop-logo.png"
              alt="Loop Logo"
              width={48}
              height={48}
              className="rounded-lg md:w-16 md:h-16"
            />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </button>

            {/* Register Button (Desktop) */}
            <a
              href={UNSTOP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block btn-primary px-6 py-2 rounded-full text-white font-medium text-sm"
            >
              Register Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg glass"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-2 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a
                href={UNSTOP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-full text-white font-medium text-center mt-2"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
      </nav>
    </div>
  );
}
