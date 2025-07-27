"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function NavigationHandler() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // close drawer on mobile click
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
        ${isScrolled ? "bg-white/95 shadow-lg border-zinc-100 backdrop-blur-xl" : "bg-white/70 border-transparent"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Image
              src="/icon128.png"
              alt="TabGenius Logo"
              width={32}
              height={32}
              onClick={scrollToTop}
              className="cursor-pointer hover:scale-105 transition-transform"
            />
            <div onClick={scrollToTop} className="cursor-pointer flex items-center gap-2 select-none">
              <span className="text-xl font-bold text-zinc-900 tracking-tight">TabGenius</span>
              <span className="ml-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">
                Beta
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              onClick={() => scrollToSection("features")}
              className="text-zinc-600 hover:text-emerald-600 transition-colors cursor-pointer font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => scrollToSection("pricing")}
              className="text-zinc-600 hover:text-emerald-600 transition-colors cursor-pointer font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => scrollToSection("testimonials")}
              className="text-zinc-600 hover:text-emerald-600 transition-colors cursor-pointer font-medium"
            >
              Reviews
            </a>
            <button
              onClick={() => scrollToSection("download")}
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Get Started Free
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-zinc-800"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 shadow-lg rounded-b-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              <a
                href="#features"
                onClick={() => scrollToSection("features")}
                className="block px-4 py-3 text-zinc-600 hover:text-emerald-600 font-medium rounded-lg transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => scrollToSection("pricing")}
                className="block px-4 py-3 text-zinc-600 hover:text-emerald-600 font-medium rounded-lg transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                onClick={() => scrollToSection("testimonials")}
                className="block px-4 py-3 text-zinc-600 hover:text-emerald-600 font-medium rounded-lg transition-colors"
              >
                Reviews
              </a>
              <button
                onClick={() => scrollToSection("download")}
                className="w-full text-left bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-4 py-3 rounded-lg font-semibold mt-2 shadow hover:shadow-md transition-all duration-200"
              >
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
