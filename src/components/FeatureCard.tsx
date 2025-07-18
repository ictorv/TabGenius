// components/FeatureCard.tsx
"use client";

import { useState } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:bg-zinc-900/50 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className={`relative w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
          <span className="relative z-10 filter drop-shadow-sm">{icon}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-all duration-300">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Hover arrow */}
      <div className="absolute bottom-6 right-6 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
