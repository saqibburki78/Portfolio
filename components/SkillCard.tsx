"use client";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  category: string;
}

export default function SkillCard({ icon, name, category }: SkillCardProps) {
  return (
    <div className="skill-card group relative">
      {/* Glassmorphism Card */}
      <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-700/5 backdrop-blur-sm border border-amber-500/20 transition-all duration-500 hover:scale-105 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
        {/* Icon Container */}
        <div className="flex justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>

        {/* Tech Name */}
        <h3 className="text-center text-lg font-bold text-amber-100 mb-1">
          {name}
        </h3>

        {/* Category Badge */}
        <p className="text-center text-xs text-amber-500/70 uppercase tracking-wider">
          {category}
        </p>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-700/0 group-hover:from-amber-500/5 group-hover:to-amber-700/10 transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
}
