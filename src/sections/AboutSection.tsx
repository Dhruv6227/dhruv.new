import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/ContactButton";
import { FadeIn } from "../components/FadeIn";
import { User, Target, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  const bioText =
    "I am Dhruv Sharma, a BCA student, AI and     Cloud enthusiast, backend developer, and    hackathon participant. I enjoy building            intelligent applications using Python,               machine learning, cloud technologies, and modern web tools. My interests include AI,    cloud computing, cybersecurity, and                real-world problem solving. I am constantly learning, building projects, and                             collaborating with communities to create       innovative technology solutions.";

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-dark text-white px-6 md:px-12 overflow-hidden">
      {/* Background soft lighting */}
      <div className="ambient-glow bg-neutral-800 w-[500px] h-[500px] top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        
        {/* Left Column: Title and focus areas */}
        <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              <User className="h-3.5 w-3.5 text-neutral-400" />
              <span>Identity</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              About Me
            </h2>
          </FadeIn>

          <div className="w-full h-[1px] bg-white/[0.08] my-6 hidden lg:block" />

          {/* Core values cards */}
          <div className="hidden lg:flex flex-col gap-4 w-full">
            <FadeIn direction="right" delay={0.3}>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <Target className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-white tracking-wider">The Goal</h4>
                  <p className="text-xs text-neutral-500 mt-1 lowercase font-light">
                    building intelligent solutions to bridge AI algorithms with stable, production-ready cloud APIs.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <Sparkles className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-white tracking-wider">The Drive</h4>
                  <p className="text-xs text-neutral-500 mt-1 lowercase font-light">
                    constantly learning, coding in hackathons, and collaborating to build real-world software products.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right Column: Reveal Bio Paragraph */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
          {/* Scroll reveal Bio paragraph */}
          <AnimatedText
            text={bioText}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-neutral-100 mb-12 select-none"
          />

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center gap-6">
              <ContactButton text="Get in touch" className="shadow-lg shadow-white/5" />
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
                scroll to view skills &bull; or click to chat
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
