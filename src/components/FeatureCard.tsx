"use client";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:bg-white/10 hover:scale-105">
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <span className="text-3xl">{icon}</span>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}
