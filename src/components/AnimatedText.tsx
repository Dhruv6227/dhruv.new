import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 60%"],
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={`flex flex-wrap leading-relaxed select-none ${className}`}>
      {characters.map((char, charIndex) => {
        const start = charIndex / characters.length;
        const end = (charIndex + 1) / characters.length;
        
        return (
          <Character key={charIndex} progress={scrollYProgress} range={[start, end]}>
            {char}
          </Character>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  if (children === " ") {
    return <span className="inline-block">&nbsp;</span>;
  }
  
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-10 text-white/5 select-none">{children}</span>
      <motion.span style={{ opacity }} className="text-neutral-100 transition-colors">
        {children}
      </motion.span>
    </span>
  );
};
