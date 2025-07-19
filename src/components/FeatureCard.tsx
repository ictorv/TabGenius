"use client";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:bg-white/10 hover:scale-105 text-center">
      {/* Centered Icon Container */}
      <div className="flex justify-center mb-6">
        <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl group-hover:shadow-emerald-500/25 relative overflow-hidden`}>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shine"></div>
          
          {/* Icon with better styling */}
          <span className="text-4xl relative z-10 drop-shadow-lg">{icon}</span>
        </div>
      </div>
      
      {/* Centered Title */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Centered Description */}
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 max-w-sm mx-auto">
        {description}
      </p>

      {/* Subtle bottom accent */}
      <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
    </div>
  );
}
