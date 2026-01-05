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
  const [activeSection, setActiveSection] = useState<string>("");

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

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
              src="/loop-logo2.png"
              alt="Loop Logo"
              width={48}
              height={48}
              className="rounded-lg md:w-16 md:h-16"
            />
          </Link>

          {/* Desktop Navigation - Moved to right side */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-lg font-semibold transition-all duration-300 relative group ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 shadow-[0_0_8px_rgba(59,130,246,0.5)] ${
                    activeSection === link.href
                      ? "w-full shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                      : "w-0 group-hover:w-full group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
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
                  className={`text-left py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-white bg-white/10 translate-x-1"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:translate-x-1"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      </nav>
    </div>
  );
}
