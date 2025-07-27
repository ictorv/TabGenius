"use client";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string; // e.g. "from-cyan-100 to-blue-100"
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow text-center">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-3xl shadow-sm`}>
          <span className="relative z-10">{icon}</span>
        </div>
      </div>
      {/* Title */}
      <h3 className="text-xl font-bold text-zinc-900 mb-3">
        {title}
      </h3>
      {/* Description */}
      <p className="text-zinc-600 leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
      {/* Static pastel bottom accent */}
      <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100 rounded-full" />
    </div>
  );
}
