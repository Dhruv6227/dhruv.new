import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Magnet } from "./Magnet";

interface ContactButtonProps {
  className?: string;
  text?: string;
  lightTheme?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = "",
  text = "Let's Connect",
  lightTheme = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Magnet range={100} strength={0.35}>
      <a
        href="#contact"
        onClick={handleClick}
        className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 active:scale-95 ${
          lightTheme
            ? "bg-black text-white hover:bg-neutral-800 focus:ring-black/20"
            : "bg-white text-black hover:bg-neutral-200 focus:ring-white/20"
        } ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2 font-semibold tracking-wide text-sm md:text-base">
          {text}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
        <span
          className={`absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            lightTheme
              ? "bg-gradient-to-r from-neutral-800 to-black"
              : "bg-gradient-to-r from-neutral-200 to-white"
          }`}
        />
      </a>
    </Magnet>
  );
};
