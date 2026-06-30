import { motion } from "framer-motion";
import { ArrowDown, Mail, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personalInfo, taglines } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  const socialLinks = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: personalInfo.linkedin,
      label: "LinkedIn"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      href: personalInfo.github,
      label: "GitHub"
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${personalInfo.email}`,
      label: "Email"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-20 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden bg-grid-mesh"
    >
      {/* Red Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#ff2a2a]/5 rounded-full blur-[160px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full flex flex-col items-center justify-center text-center relative z-10"
      >
        {/* Profile Avatar */}
        <motion.div
          variants={itemVariants}
          className="relative mb-6 group cursor-pointer"
          data-hover="true"
        >
          {/* Inner pulsating glow */}
          <div className="absolute -inset-1 bg-[#ff2a2a]/30 rounded-full blur-md group-hover:bg-[#ff2a2a]/50 group-hover:blur-lg transition-all duration-500" />
          <img
            src="/avatar.jpg"
            alt={personalInfo.name}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-white/10 group-hover:border-[#ff2a2a] object-cover relative z-10 transition-all duration-500 shadow-2xl hover:scale-105"
          />
        </motion.div>

        {/* Hello Greeting */}
        <motion.span
          variants={itemVariants}
          className="text-[#ff2a2a] text-sm md:text-base font-mono font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Hi, my name is
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.85]"
        >
          Shayan Naqvi
        </motion.h1>

        {/* Highlight Role */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-4xl md:text-5xl font-black text-stroke-white text-white/90 uppercase tracking-wide mb-6"
        >
          {personalInfo.role}
        </motion.h2>

        {/* Short Statement */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-8"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Taglines Ticker */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 text-xs sm:text-sm font-mono tracking-wider text-white/40 uppercase"
        >
          {taglines.map((tag, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {idx > 0 && <span className="text-[#ff2a2a]">•</span>}
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Buttons / CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#ff2a2a] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/10 font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 text-center"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links & Resume */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 text-white/50"
        >
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2"
              aria-label={social.label}
              data-hover="true"
            >
              {social.icon}
            </a>
          ))}
          <div className="w-[1px] h-6 bg-white/10" />
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#ff2a2a] transition-colors p-2"
            data-hover="true"
          >
            <FileText size={18} />
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Arrow Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}
