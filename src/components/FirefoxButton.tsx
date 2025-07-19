// components/FirefoxButton.tsx
"use client";

import { useState } from "react";

export function FirefoxButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleFirefoxInstall = () => {
    window.open("https://addons.mozilla.org/en-US/firefox/addon/tabgenius/", "_blank");
  };

  return (
    <button
      onClick={handleFirefoxInstall}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full max-w-[180px] mx-auto overflow-hidden"
    >
      {/* Firefox Icon - smaller */}
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="flex-shrink-0"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169-.284-.37-.546-.6-.78a5.987 5.987 0 0 0-4.568-2.08c-.63 0-1.238.1-1.81.28-.572.18-1.095.44-1.55.77-.456.33-.846.72-1.158 1.16-.312.44-.545.92-.69 1.42-.145.5-.21 1.02-.19 1.54.02.52.12 1.03.3 1.51.18.48.44.92.77 1.31.33.39.72.73 1.16.99.44.26.92.45 1.42.56.5.11 1.02.14 1.54.09.52-.05 1.03-.17 1.51-.36.48-.19.92-.46 1.31-.8.39-.34.73-.74.99-1.19.26-.45.45-.94.56-1.45.11-.51.14-1.04.09-1.57-.05-.53-.17-1.05-.36-1.54z" />
      </svg>

      <span className="text-sm font-semibold">Add to Firefox</span>

      {/* Subtle hover effect */}
      <div className={`absolute inset-0 bg-white/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
}
