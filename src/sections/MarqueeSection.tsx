import React from "react";
import { Terminal, Database, LineChart, Cpu, Award, Zap, Code, Shield } from "lucide-react";

interface ShowcaseItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  detail: string;
  accent: string;
}

export const MarqueeSection: React.FC = () => {
  const items: ShowcaseItem[] = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "AI Model Dashboard",
      category: "Artificial Intelligence",
      detail: "accuracy: 98.4% | latency: 8ms",
      accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Cloud Infrastructure",
      category: "AWS & Kubernetes",
      detail: "active nodes: 12 | uptime: 99.9%",
      accent: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "FastAPI Backend Layer",
      category: "API Development",
      detail: "POST /v1/predict -> 200 OK",
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Real-time Analytics",
      category: "Monitoring",
      detail: "1,240 req/sec | memory: 42%",
      accent: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "City Intelligence Platform",
      category: "Hackathon Champion",
      detail: "Rank: 1st | Category: Smart City",
      accent: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Malware Behavior Engine",
      category: "Cybersecurity",
      detail: "threat score: 0.02 | safe",
      accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    },
    {
      icon: <Terminal className="h-5 w-5" />,
      title: "Dockbot Space Assist",
      category: "Deep Learning NLP",
      detail: "target: ISS | capture: success",
      accent: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Predictive Analytics Pip",
      category: "Machine Learning",
      detail: "epochs: 100 | loss: 0.0014",
      accent: "text-orange-400 border-orange-500/20 bg-orange-500/5",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-dark overflow-hidden flex flex-col gap-6 select-none border-y border-white/[0.03]">
      {/* Soft gradient masks on left/right for smooth fade out */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

      {/* Row 1: Leftward moving marquee */}
      <div className="flex w-max gap-6 overflow-hidden">
        <div className="flex gap-6 shrink-0 animate-marquee-slow">
          {items.map((item, idx) => (
            <MarqueeCard key={`row1-a-${idx}`} item={item} />
          ))}
        </div>
        <div className="flex gap-6 shrink-0 animate-marquee-slow">
          {items.map((item, idx) => (
            <MarqueeCard key={`row1-b-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2: Rightward moving marquee */}
      <div className="flex w-max gap-6 overflow-hidden">
        <div className="flex gap-6 shrink-0 animate-marquee-reverse-slow">
          {[...items].reverse().map((item, idx) => (
            <MarqueeCard key={`row2-a-${idx}`} item={item} />
          ))}
        </div>
        <div className="flex gap-6 shrink-0 animate-marquee-reverse-slow">
          {[...items].reverse().map((item, idx) => (
            <MarqueeCard key={`row2-b-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MarqueeCard: React.FC<{ item: ShowcaseItem }> = ({ item }) => {
  return (
    <div className={`flex items-center gap-4 rounded-xl border px-5 py-4 w-[280px] sm:w-[320px] transition-colors duration-300 hover:border-white/10 ${item.accent}`}>
      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 shrink-0">
        {item.icon}
      </div>
      <div className="text-left overflow-hidden">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase tracking-wider opacity-55 font-mono truncate">
            {item.category}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-current animate-ping shrink-0" />
        </div>
        <h3 className="text-sm md:text-base font-semibold text-white tracking-wide truncate mt-0.5">
          {item.title}
        </h3>
        <p className="text-[11px] font-mono opacity-65 truncate mt-1">
          {item.detail}
        </p>
      </div>
    </div>
  );
};
