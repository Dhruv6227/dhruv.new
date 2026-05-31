import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import {
  Code2,
  Cpu,
  BrainCircuit,
  Cloud,
  Server,
  FileCode,
  Github,
  MonitorCheck,
  ShieldAlert,
  Binary,
  Layers,
  Webhook,
  Database,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

interface Skill {
  name: string;
  category: "core" | "aiml" | "backend" | "tools";
  icon: React.ReactNode;
  level: string;
}

export const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: "Python", category: "core", icon: <Code2 className="h-5 w-5" />, level: "Advanced" },
    { name: "Machine Learning", category: "aiml", icon: <Cpu className="h-5 w-5" />, level: "Intermediate" },
    { name: "Artificial Intelligence", category: "aiml", icon: <BrainCircuit className="h-5 w-5" />, level: "Intermediate" },
    { name: "Cloud Computing", category: "backend", icon: <Cloud className="h-5 w-5" />, level: "Intermediate" },
    { name: "Backend Development", category: "backend", icon: <Server className="h-5 w-5" />, level: "Advanced" },
    { name: "Firebase", category: "tools", icon: <Layers className="h-5 w-5" />, level: "Intermediate" },
    { name: "GitHub", category: "tools", icon: <Github className="h-5 w-5" />, level: "Advanced" },
    { name: "WordPress", category: "tools", icon: <MonitorCheck className="h-5 w-5" />, level: "Intermediate" },
    { name: "Cybersecurity", category: "core", icon: <ShieldAlert className="h-5 w-5" />, level: "Intermediate" },
    { name: "Data Structures & Algorithms", category: "core", icon: <Binary className="h-5 w-5" />, level: "Intermediate" },
    { name: "API Development", category: "backend", icon: <Webhook className="h-5 w-5" />, level: "Advanced" },
    { name: "REST APIs", category: "backend", icon: <FileCode className="h-5 w-5" />, level: "Advanced" },
    { name: "SQL", category: "backend", icon: <Database className="h-5 w-5" />, level: "Intermediate" },
    { name: "Problem Solving", category: "core", icon: <Lightbulb className="h-5 w-5" />, level: "Advanced" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "core":
        return "text-indigo-400 border-indigo-500/10 hover:border-indigo-500/30 hover:shadow-indigo-500/5";
      case "aiml":
        return "text-rose-400 border-rose-500/10 hover:border-rose-500/30 hover:shadow-rose-500/5";
      case "backend":
        return "text-blue-400 border-blue-500/10 hover:border-blue-500/30 hover:shadow-blue-500/5";
      case "tools":
        return "text-emerald-400 border-emerald-500/10 hover:border-emerald-500/30 hover:shadow-emerald-500/5";
      default:
        return "text-neutral-400 border-white/5 hover:border-white/20";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="relative w-full py-24 md:py-32 bg-dark text-white px-6 md:px-12 overflow-hidden border-t border-white/[0.02]">
      {/* Background ambient lighting */}
      <div className="ambient-glow bg-neutral-900 w-[600px] h-[600px] bottom-[-20%] left-[-10%] opacity-15" />
      <div className="ambient-glow bg-neutral-900 w-[500px] h-[500px] top-[10%] right-[-10%] opacity-15" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              <CheckCircle className="h-3.5 w-3.5 text-neutral-400" />
              <span>Competence</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
              My Skills
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-sm md:text-base text-neutral-400 max-w-xl lowercase font-light mb-8">
              a curated toolkit of backend technologies, cloud frameworks, and machine learning models i leverage to solve complex problems.
            </p>
          </FadeIn>
        </div>

        {/* Tech Stack Badges Ribbon */}
        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16 max-w-3xl mx-auto select-none">
            {["Python", "Machine Learning", "AI", "Cloud", "Firebase", "GitHub", "WordPress", "Tensorflow", "Deep Learning", "REST APIs", "SQL"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide text-neutral-300 bg-white/[0.02] border border-white/5 shadow-inner hover:border-white/20 hover:text-white transition-all duration-300"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)"
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden group flex flex-col justify-between p-5 rounded-2xl border bg-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${getCategoryColor(
                skill.category
              )}`}
            >
              {/* Internal abstract card mesh decoration */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 rounded-full bg-white/[0.01] blur-md transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon Container */}
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.05] transition-colors shrink-0">
                  {skill.icon}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors uppercase">
                  {skill.level}
                </span>
              </div>

              {/* Text Block */}
              <div className="mt-8 text-left">
                <span className="text-[9px] font-mono tracking-wider opacity-40 uppercase group-hover:opacity-60 transition-opacity">
                  {skill.category === "core" && "core logic"}
                  {skill.category === "aiml" && "ai & data science"}
                  {skill.category === "backend" && "cloud & system"}
                  {skill.category === "tools" && "platforms & git"}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mt-1 group-hover:text-neutral-200 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
