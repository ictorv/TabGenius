"use client";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  const initials = author.split(' ').map(name => name[0]).join('');
  
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:bg-white/10 group">
      <div className="mb-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          &quot;{quote}&quot;
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          {initials}
        </div>
        <div>
          <div className="text-white font-semibold">{author}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
}
