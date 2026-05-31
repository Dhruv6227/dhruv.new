import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Magnet } from "./Magnet";

interface LiveProjectButtonProps {
  href: string;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  text = "Live Demo",
  icon,
  className = "",
}) => {
  return (
    <Magnet range={60} strength={0.25}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10 flex items-center gap-1.5 font-semibold text-neutral-300 group-hover:text-white transition-colors">
          {icon && <span className="text-neutral-400 group-hover:text-white transition-colors">{icon}</span>}
          {text}
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
        </span>
      </a>
    </Magnet>
  );
};
