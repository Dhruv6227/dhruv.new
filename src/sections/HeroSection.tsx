import React from "react";
import { ContactButton } from "../components/ContactButton";
import { FadeIn } from "../components/FadeIn";
import { Cpu, Cloud, Database } from "lucide-react";
import profileImage from "../../Dhruv.webp";

export const HeroSection: React.FC = () => {
  // Configurable profile image placeholder

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-dark text-white px-6 py-8 md:px-12 md:py-10">
      {/* Background ambient lighting */}
      <div className="ambient-glow bg-indigo-500 w-[500px] h-[500px] top-[-10%] left-[-10%]" />
      <div className="ambient-glow bg-blue-500 w-[400px] h-[400px] bottom-[10%] right-[-10%]" />

      {/* 1. GLASS NAVBAR */}
      <header className="relative z-50 w-full flex items-center justify-between py-4">
        <FadeIn direction="none" delay={0.1}>
          <a href="#" className="text-xl md:text-2xl font-black tracking-widest text-white uppercase group">
            DS<span className="text-neutral-500 group-hover:text-white transition-colors duration-300">.</span>
          </a>
        </FadeIn>

        <nav className="hidden sm:flex items-center gap-8 rounded-full border border-white/5 bg-white/[0.02] px-6 py-2.5 backdrop-blur-md">
          {["about", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => handleNavClick(e, link)}
              className="text-xs md:text-sm font-medium uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        <FadeIn direction="none" delay={0.2}>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 select-none">
              Available for work
            </span>
          </div>
        </FadeIn>
      </header>

      {/* 2. HERO CONTENT AREA */}
      <div className="relative z-10 my-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 pb-8 lg:py-0">
        
        {/* Left column: Text */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left select-none">
          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6 backdrop-blur-sm">
              <Cpu className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
              <span>AI & Cloud Specialist</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} duration={1}>
            <h1 className="hero-heading text-[12vw] sm:text-[9vw] lg:text-[7.5vw] font-black uppercase tracking-tighter leading-[0.85] select-none">
              Hi, i'm dhruv
            </h1>
          </FadeIn>
        </div>

        {/* Right column: Premium Floating Portrait Card */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <FadeIn direction="up" delay={0.4} duration={1}>
            <div className="relative group">
              {/* Outer soft glowing rings */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 opacity-30 blur-lg transition duration-1000 group-hover:opacity-60 group-hover:duration-200" />
              
              {/* Core card frame */}
              <div className="relative overflow-hidden rounded-2xl glass-panel p-3 w-[260px] sm:w-[280px] md:w-[320px] aspect-[4/5] flex flex-col justify-between transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative w-full h-[85%] rounded-xl overflow-hidden bg-neutral-900">
                  <img
                    src={profileImage}
                    alt="Dhruv Sharma"
                    className="w-full h-full object-cover filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                    onError={(e) => {
                      // Fallback inside error state
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="h-[12%] flex items-center justify-between px-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                    SYS_ACTIVE_01
                  </span>
                  <div className="flex gap-2">
                    <Cloud className="h-3 w-3 text-neutral-600 hover:text-white transition-colors" />
                    <Database className="h-3 w-3 text-neutral-600 hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 3. HERO BOTTOM DETAILS */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-white/[0.04]">
        
        {/* Bottom Left: Bio statement */}
        <div className="w-full md:w-1/2">
          <FadeIn direction="up" delay={0.5} duration={0.8}>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-neutral-400 tracking-wide max-w-lg lowercase">
              an ai and cloud enthusiast focused on building intelligent solutions, scalable backend systems, and impactful tech products
            </p>
          </FadeIn>
        </div>

        {/* Bottom Right: CTA Action */}
        <div className="w-full md:w-auto flex md:justify-end select-none">
          <FadeIn direction="up" delay={0.6} duration={0.8}>
            <ContactButton text="Let's Connect" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
