import React, { useRef } from "react";
import { motion } from "framer-motion";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { FadeIn } from "../components/FadeIn";
import { Github, Play, Layers, ShieldCheck, Orbit, Award } from "lucide-react";

interface ProjectData {
  title: string;
  category: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  accent: string;
  visual: React.ReactNode;
}

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const projects: ProjectData[] = [
    {
      title: "City Intelligence Platform",
      category: "Hackathon Project",
      description:
        "An AI-powered city monitoring platform combining multimodal citizen reporting, predictive analytics, Firebase integration, and real-time dashboards for intelligent city insights.",
      tags: ["Python", "Machine Learning", "AI", "Firebase", "SQL"],
      github: "https://github.com/sharmadhruv26801/city-intelligence",
      demo: "https://city-intelligence-demo.netlify.app",
      accent: "from-indigo-500/20 to-purple-500/10",
      visual: (
        <div className="w-full h-full flex flex-col justify-between p-4 bg-neutral-950/80 rounded-xl border border-white/5 font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] text-indigo-400">CITY_INTEL // LIVE</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="flex flex-col gap-2 my-auto">
            <div className="flex justify-between text-[10px] text-neutral-400">
              <span>MULTIMODAL REPORTS:</span>
              <span className="text-white">Active (24)</span>
            </div>
            <div className="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
              <div className="bg-indigo-500 h-full w-3/4 animate-pulse" />
            </div>
            <div className="flex justify-between text-[10px] text-neutral-400">
              <span>PREDICTIVE ACCURACY:</span>
              <span className="text-emerald-400 font-bold">96.8%</span>
            </div>
            <div className="flex justify-between text-[10px] text-neutral-400">
              <span>API REQUESTS:</span>
              <span className="text-neutral-200">1.2k / min</span>
            </div>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/10 flex items-center gap-2">
            <Layers className="h-4 w-4 text-purple-400" />
            <span className="text-[9px] text-neutral-300">Firebase sync: synchronized</span>
          </div>
        </div>
      ),
    },
    {
      title: "Advanced Malware Detection System",
      category: "Cybersecurity & Machine Learning",
      description:
        "A machine learning-powered malware detection platform designed to identify suspicious software behavior and improve threat analysis capabilities.",
      tags: ["Python", "Machine Learning", "AI", "Tensorflow", "REST APIs"],
      github: "https://github.com/Dhruv6227/malware-detection/",
      demo: "https://malware-detect-demo.netlify.app",
      accent: "from-rose-500/20 to-red-500/10",
      visual: (
        <div className="w-full h-full flex flex-col justify-between p-4 bg-neutral-950/80 rounded-xl border border-white/5 font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] text-rose-400">SYS_SHIELD // DETECTOR</span>
            <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[8px] font-bold">
              SCANNING
            </span>
          </div>
          <div className="flex flex-col gap-2 my-auto items-center justify-center">
            <ShieldCheck className="h-10 w-10 text-rose-500 animate-pulse" />
            <span className="text-[10px] text-neutral-400 mt-1">No Malware Signatures Detected</span>
          </div>
          <div className="flex justify-between text-[9px] text-neutral-500 border-t border-white/5 pt-2">
            <span>Threat Score: 0.0012</span>
            <span className="text-emerald-400">STATUS: SAFE</span>
          </div>
        </div>
      ),
    },
    {
      title: "Dockbot",
      category: "Artificial Intelligence Application",
      description:
        "An intelligent docking assistant that uses image analysis for autonomous docking in space and Perform Soft capturing easily",
      tags: ["Python", "Deep Learning", "AI", "Tensorflow"],
      github: "https://github.com/Saksham932007/dockbot",
      demo: "https://dockbot-demo.netlify.app",
      accent: "from-purple-500/20 to-blue-500/10",
      visual: (
        <div className="w-full h-full flex flex-col justify-between p-4 bg-neutral-950/80 rounded-xl border border-white/5 font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] text-purple-400">AUTONOMOUS_DOCK // SYSTEM</span>
            <Orbit className="h-4 w-4 text-purple-400 animate-spin" style={{ animationDuration: "12s" }} />
          </div>
          <div className="flex flex-col gap-1.5 my-auto text-left">
            <span className="text-[9px] text-purple-400">TARGET: DOCKING_PORT_B</span>
            <span className="text-[9px] text-neutral-400">DIST: 2.14m | VEL: 0.08m/s</span>
            <span className="text-[9px] text-emerald-400">ALIGNMENT: 99.4% MATCH</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[8px] text-neutral-500 uppercase">soft capturing engaged</span>
            </div>
          </div>
          <div className="bg-white/5 p-1.5 rounded border border-white/10 text-[9px] text-neutral-300 truncate">
            &gt; py dockbot_align.py --capture --soft
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" ref={containerRef} className="relative w-full py-24 md:py-32 bg-dark text-white px-6 md:px-12 overflow-hidden border-t border-white/[0.02]">
      {/* Ambient background glow */}
      <div className="ambient-glow bg-neutral-900 w-[700px] h-[700px] top-[10%] left-[-20%] opacity-15" />
      <div className="ambient-glow bg-neutral-900 w-[600px] h-[600px] bottom-[10%] right-[-20%] opacity-15" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              <Award className="h-3.5 w-3.5 text-neutral-400" />
              <span>Accolades</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
              Featured Projects
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-sm md:text-base text-neutral-400 max-w-xl lowercase font-light">
              a showcase of machine learning pipelines, cybersecurity detection systems, and autonomous space docking controllers built with python and deep learning models.
            </p>
          </FadeIn>
        </div>

        {/* Sticky Cards Column */}
        <div className="flex flex-col gap-12 relative w-full pt-10">
          {projects.map((project, idx) => {
            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={idx}
                total={projects.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Stagger stickiness slightly so they overlap beautiful and leave small edges showing
  const stickyTop = 110 + index * 16; 

  return (
    <div
      ref={cardRef}
      className="sticky w-full max-w-4xl mx-auto"
      style={{
        top: `${stickyTop}px`,
        paddingBottom: `${(total - 1 - index) * 12}px`, // creates extra visual spacing
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        whileHover={{ y: -4 }}
        className={`relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br ${project.accent} p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md flex flex-col md:flex-row justify-between items-stretch gap-8`}
        style={{
          background: "rgba(18, 18, 18, 0.8)",
        }}
      >
        {/* Left Column: Metadata & Tech badge */}
        <div className="w-full md:w-3/5 flex flex-col justify-between items-start text-left">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
              {project.title}
            </h3>
            
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div className="w-full">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono font-medium text-neutral-300 border border-white/5 bg-white/[0.02] px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Live CTA Links */}
            <div className="flex items-center gap-4 select-none">
              <LiveProjectButton
                href={project.github}
                text="Codebase"
                icon={<Github className="h-4 w-4" />}
              />
              <LiveProjectButton
                href={project.demo}
                text="Live Demo"
                icon={<Play className="h-4.5 w-4.5" />}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Code/System simulation */}
        <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto flex items-stretch">
          <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-900/40 border border-white/5 p-2 flex items-stretch">
            {project.visual}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
