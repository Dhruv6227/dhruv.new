import React, { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import { Mail, Phone, Linkedin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Magnet } from "../components/Magnet";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setStatus("sending");
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "85f9a35d-573d-44e8-9751-3c35f52c3d7a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-dark text-white px-6 md:px-12 overflow-hidden border-t border-white/[0.02]">
      {/* Background ambient lighting */}
      <div className="ambient-glow bg-neutral-900 w-[500px] h-[500px] top-[20%] right-[-10%] opacity-15" />
      <div className="ambient-glow bg-neutral-900 w-[400px] h-[400px] bottom-[-10%] left-[-10%] opacity-15" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              <MessageSquare className="h-3.5 w-3.5 text-neutral-400" />
              <span>Contact</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              Let's Build Something<br />Amazing Together
            </h2>
          </FadeIn>
        </div>

        {/* Double Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6 text-left">
              <FadeIn direction="right" delay={0.1}>
                <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-sm mb-6 lowercase">
                  have an interesting project, hackathon idea, or just want to chat backend architecture and machine learning models? drop a message!
                </p>
              </FadeIn>

              {/* Email */}
              <FadeIn direction="right" delay={0.2}>
                <a
                  href="mailto:sharmadhruv26801@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-400 group-hover:text-white group-hover:bg-white/[0.05] transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                      Email me
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      sharmadhruv26801@gmail.com
                    </h4>
                  </div>
                </a>
              </FadeIn>

              {/* Phone */}
              <FadeIn direction="right" delay={0.3}>
                <a
                  href="tel:8750835910"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-400 group-hover:text-white group-hover:bg-white/[0.05] transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                      Call me
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      +91 8750835910
                    </h4>
                  </div>
                </a>
              </FadeIn>

              {/* LinkedIn */}
              <FadeIn direction="right" delay={0.4}>
                <a
                  href="https://www.linkedin.com/in/dhruv-sharma-8092b631b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-400 group-hover:text-white group-hover:bg-white/[0.05] transition-all">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                      Connect
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      linkedin.com/in/dhruv-sharma
                    </h4>
                  </div>
                </a>
              </FadeIn>
            </div>

            {/* Footer sub-meta */}
            <div className="hidden lg:block border-t border-white/[0.04] pt-6 text-left">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                &copy; 2026 Dhruv Sharma &bull; Made with react & tailwind
              </span>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-20 blur-md transition duration-1000 group-hover:opacity-40" />
                
                <form
                  onSubmit={handleSubmit}
                  className="relative glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-6 text-left"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="hello@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Dhruv, let's collaborate on..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Magnet range={60} strength={0.3}>
                      <button
                        type="submit"
                        disabled={status !== "idle"}
                        className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 active:scale-95 disabled:scale-100 disabled:bg-neutral-800 disabled:text-neutral-400`}
                      >
                        {status === "idle" && (
                          <>
                            Send Message
                            <Send className="h-3.5 w-3.5 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                          </>
                        )}
                        {status === "sending" && <span>Processing...</span>}
                        {status === "success" && (
                          <span className="flex items-center gap-1.5 text-emerald-600">
                            Sent Successfully
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                        )}
                        {status === "error" && (
                          <span className="flex items-center gap-1.5 text-rose-500">
                            Failed to Send
                          </span>
                        )}
                      </button>
                    </Magnet>
                  </div>
                </form>
              </div>
            </FadeIn>

            {/* Mobile-only footer sub-meta */}
            <div className="block lg:hidden border-t border-white/[0.04] pt-8 mt-12 text-center">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                &copy; 2026 Dhruv Sharma &bull; Made with react & tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
