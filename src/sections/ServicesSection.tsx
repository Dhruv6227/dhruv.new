import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: "01",
      title: "AI & Machine Learning",
      description:
        "Creation of intelligent systems using machine learning, predictive analytics, computer vision, and AI-powered automation.",
    },
    {
      id: "02",
      title: "Backend Development",
      description:
        "Building scalable APIs, databases, authentication systems, and server-side applications using modern technologies.",
    },
    {
      id: "03",
      title: "Cloud & DevOps",
      description:
        "Deploying and managing cloud-native applications using modern DevOps workflows, automation tools, and infrastructure services.",
    },
    {
      id: "04",
      title: "Deep learning",
      description:
        "Building advanced deep learning solutions using neural networks, computer vision, NLP, and AI-driven models to create intelligent and scalable applications.",
    },
    {
      id: "05",
      title: "Technical Consulting",
      description:
        "Helping startups, students, and organizations transform ideas into practical technology solutions and scalable architectures.",
    },
  ];

  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-white text-black px-6 md:px-12 overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col items-start mb-20 md:mb-28 text-left">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-6">
              <CheckCircle2 className="h-3.5 w-3.5 text-neutral-400" />
              <span>Offerings</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black mb-4 leading-none">
              Services
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-sm md:text-base text-neutral-500 max-w-xl lowercase font-light">
              architecting scalable, performant systems and predictive analytics to solve complex real-world challenges.
            </p>
          </FadeIn>
        </div>

        {/* Editorial Vertical Rows */}
        <div className="flex flex-col w-full border-b border-black/10 select-none">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 md:py-12 border-t border-black/10 transition-colors duration-500 hover:bg-neutral-50/50 px-4 -mx-4 rounded-lg"
            >
              {/* Left Column: Number and Title */}
              <div className="flex items-center gap-6 md:gap-12 w-full md:w-1/2 text-left">
                <span className="text-sm md:text-base font-mono font-medium text-neutral-400 group-hover:text-black transition-colors duration-300">
                  {service.id}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Right Column: Description and Arrow Indicator */}
              <div className="flex items-center justify-between gap-6 w-full md:w-1/2 text-left pl-11 md:pl-0">
                <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-md group-hover:text-neutral-900 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-transparent text-black transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white group-hover:border-black">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
