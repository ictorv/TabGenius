// components/ChromeButton.tsx
"use client";

import { useState } from "react";

export function ChromeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block group">
      {/* Outer glow */}
      <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
      
      <a
        href="https://chrome.google.com/webstore/detail/advanced-tab-manager/your-extension-id"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden text-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Chrome icon */}
        <div className="relative z-10 flex items-center">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 backdrop-blur-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-8.5h10l-5 8.5zm2-7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg>
          </div>
          <span className="font-black tracking-wide">Add to Chrome</span>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-70" />
      </a>
      
      {/* Success indicator */}
      <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        ✨ Free Installation
      </div>
    </div>
  );
}