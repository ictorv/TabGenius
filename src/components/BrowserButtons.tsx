// components/BrowserButtons.tsx
"use client";

import { useState } from "react";

export function BrowserButtons() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleChromeClick = () => {
    // Scroll to top to show browser selection or redirect to Chrome store
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.open("https://chrome.google.com/webstore/detail/tabgenius", "_blank");
    }, 500);
  };

  const handleFirefoxClick = () => {
    // Scroll to top to show browser selection or redirect to Firefox store
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.open("https://addons.mozilla.org/en-US/firefox/addon/tabgenius/", "_blank");
    }, 500);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      {/* Chrome Button with Real Logo */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
        
        <button
          onClick={handleChromeClick}
          className="relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredButton('chrome')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {/* Chrome Logo SVG */}
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zM8.857 20.633c-1.78-1.023-3.157-2.627-3.903-4.597L8.5 12.75c.23 1.252 1.177 2.245 2.393 2.683l-1.893 4.95c-.38.11-.768.196-1.143.25zm6.286 0c-.375-.054-.763-.14-1.143-.25l-1.893-4.95c1.216-.438 2.163-1.431 2.393-2.683l3.546 3.286c-.746 1.97-2.123 3.574-3.903 4.597zM12 16.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm8.795 2.04l-3.546 3.286c-.346-1.89-1.67-3.414-3.464-3.84L16.5 4.5c2.28 1.32 3.864 3.67 4.295 6.54zM7.5 4.5l2.715 5.486c-1.794.426-3.118 1.95-3.464 3.84L3.205 10.54C3.636 7.67 5.22 5.32 7.5 4.5z"/>
          </svg>
          <span>Add to Chrome</span>
          <div className="bg-white/20 rounded-full px-2 py-1 text-xs">Free</div>
        </button>
      </div>

      {/* Firefox Button with Real Logo */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
        
        <button
          onClick={handleFirefoxClick}
          className="relative flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredButton('firefox')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {/* Firefox Logo SVG */}
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.4 18.6c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8c-1.8-1.2-3-3-3.6-5.1C1.2 11.7 1.5 9.9 2.4 8.4c.9-1.5 2.1-2.7 3.6-3.6 1.5-.9 3.3-1.2 5.1-.6 1.8.6 3.3 1.8 4.2 3.6.9 1.8 1.2 3.9.6 5.7-.6 1.8-1.8 3.3-3.6 4.2-.3.15-.6.3-.9.45z"/>
            <path d="M12 3c2.4 0 4.5.9 6.3 2.4-1.8-1.5-4.2-2.4-6.9-2.4-2.7 0-5.1.9-6.9 2.4C6.3 3.9 8.4 3 12 3zm0 18c-2.4 0-4.5-.9-6.3-2.4 1.8 1.5 4.2 2.4 6.9 2.4 2.7 0 5.1-.9 6.9-2.4-1.8 1.5-4.2 2.4-6.9 2.4z"/>
          </svg>
          <span>Add to Firefox</span>
          <div className="bg-white/20 rounded-full px-2 py-1 text-xs">Free</div>
        </button>
      </div>
    </div>
  );
}
