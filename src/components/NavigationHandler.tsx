"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

export function NavigationHandler() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
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
            <div onClick={scrollToTop} className="cursor-pointer">
              <span className="text-xl font-bold text-white">TabGenius</span>
              <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                Beta
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={() => scrollToSection('features')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={() => scrollToSection('pricing')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              onClick={() => scrollToSection('testimonials')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Reviews
            </a>
            <button
              onClick={() => scrollToSection('download')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
            >
              Get Started Free
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#features" 
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-zinc-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-zinc-400 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-zinc-400 hover:text-white transition-colors"
              >
                Reviews
              </a>
              <button
                onClick={() => scrollToSection('download')}
                className="w-full text-left bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
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
