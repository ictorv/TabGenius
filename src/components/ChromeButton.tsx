"use client";

import { useState } from "react";

export function ChromeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      aria-label="Add TabGenius to Chrome"
      onClick={() =>
        window.open("https://chrome.google.com/webstore/detail/advanced-tab-manager/your-extension-id", "_blank")
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative flex items-center justify-center gap-3
        bg-white border border-zinc-200 rounded-xl shadow-md
        px-6 py-3 font-semibold text-zinc-800
        transition-all duration-200
        hover:shadow-lg
        hover:border-emerald-300
        focus:ring-2 focus:ring-blue-200
        overflow-hidden
        w-full max-w-[220px]
      `}
      style={{
        // Subtle top border gradient on hover
        boxShadow: isHovered
          ? "0 2px 24px 0 rgba(0,180,255,0.15), 0 1.5px 0 0 #a7f3d0 inset"
          : undefined,
        borderTop: isHovered
          ? "3px solid #38bdf8"
          : undefined,
      }}
    >
      <span
        className="relative flex items-center z-10"
      >
        {/* Chrome icon, colored */}
        <span className="mr-2 flex items-center">
          <svg width="22" height="22" viewBox="0 0 512 512" fill="none" aria-hidden="true">
            <circle cx="256" cy="256" r="256" fill="#F2F2F2"/>
            <path d="M478.5 187H266V297h120c-18.7 51.8-67.9 88-124 88-67.4 0-122-54.6-122-122 0-22 5.8-42.6 16-60.3l-52-89.8C60.9 157.3 38 204.5 38 256c0 120.8 97.2 218 218 218 106.9 0 196.6-77.3 214.6-179l-52-89.8a121.6 121.6 0 0 0-22.1-18.2z" fill="#34A853"/>
            <path d="M266 38c49.5 0 95.2 16.2 132 43.1L378.1 140C354 124.7 326.2 115 297 115c-56 0-105.3 36.2-124 88H73.5C104.2 91.8 186.1 38 266 38z" fill="#EA4335"/>
            <path d="M482.7 355l-52-89.8C420.2 264.3 427 241.1 427 216c0-45.1-38.9-82-89-87V38.1c87.8 6.3 154 82.3 154 177.9 0 40.1-13.2 77.1-36.3 106.1z" fill="#FBBC05"/>
            <circle cx="266" cy="256" r="63" fill="#4285F4"/>
            <circle cx="266" cy="256" r="35" fill="#fff"/>
          </svg>
        </span>
        <span className="font-semibold">Add to Chrome</span>
      </span>
      {/* Animated background shine on hover */}
      <span className={`
        absolute left-0 top-0 h-full w-full
        pointer-events-none
        bg-gradient-to-r from-white/0 via-emerald-100/70 to-white/0
        skew-x-12
        ${isHovered ? 'animate-shine' : ''}
        transition-opacity
      `}></span>

      {/* Soft badge appears on hover */}
      <span
        className={`
          absolute left-1/2 -bottom-9 -translate-x-1/2 px-3 py-1 rounded-lg text-emerald-700 bg-emerald-50/90
          shadow text-xs font-semibold
          transition-all duration-200
          ${isHovered ? 'opacity-100 translate-y-2 pointer-events-auto' : 'opacity-0 translate-y-0 pointer-events-none'}
        `}
      >
        ✨ Free Installation
      </span>

      {/* Style for shine animation */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-120%) skewX(12deg);}
            60% { transform: translateX(100%) skewX(12deg);}
            100% { transform: translateX(120%) skewX(12deg);}
          }
          .animate-shine {
            animation: shine 1.2s cubic-bezier(.77,0,.175,1) 1;
            opacity: 1 !important;
          }
        `}
      </style>
    </button>
  );
}
