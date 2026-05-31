import React from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  viewTrigger?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  viewTrigger = true,
}) => {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 40, x: 0 };
      case "down":
        return { y: -40, x: 0 };
      case "left":
        return { x: 40, y: 0 };
      case "right":
        return { x: -40, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={viewTrigger ? { opacity: 1, x: 0, y: 0 } : undefined}
      animate={!viewTrigger ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={viewTrigger ? { once: true, margin: "-100px" } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // premium custom cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
