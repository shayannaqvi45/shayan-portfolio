import { motion } from "framer-motion";
import { GraduationCap, Award, Compass, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personalInfo, myProcess, education, softSkills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 bg-[#0c0c0c] border-t border-white/5 overflow-hidden"
    >
      {/* Background decoration elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ff2a2a]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* Left Column: Bio & Academic Info */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.span
              variants={itemVariants}
              className="text-[#ff2a2a] text-xs font-mono tracking-widest uppercase mb-3 block"
            >
              Who I Am
            </motion.span>
            
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6"
            >
              About Me
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-white/70 leading-relaxed text-base mb-8"
            >
              Hi, I'm <span className="text-[#ff2a2a] font-bold">Syed Muhammad Shayan Naqvi</span>. I am a detail-oriented frontend developer currently pursuing my Bachelor of Science in Computer Science at NCBA&E in Lahore, Pakistan. I specialize in building responsive, semantic, and highly interactive user interfaces.
            </motion.p>

            {/* Academic Card */}
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 hover:border-red-500/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#ff2a2a]/10 p-3 rounded-xl text-[#ff2a2a]">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-white/80 text-sm font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/50 font-mono">
                      <span>{edu.duration}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                      {edu.gpa && <span>•</span>}
                      {edu.gpa && <span className="text-[#ff2a2a]">{edu.gpa}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Soft Skills Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span
              variants={itemVariants}
              className="text-[#ff2a2a] text-xs font-mono tracking-widest uppercase mb-3 block"
            >
              Key Characteristics
            </motion.span>
            
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8"
            >
              Personal Attributes
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-black/40 border border-white/5 rounded-2xl p-5 hover:scale-[1.03] hover:border-white/20 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" role="img" aria-label={skill.name}>{skill.icon}</span>
                    <h4 className="text-white font-bold text-base group-hover:text-[#ff2a2a] transition-colors">{skill.name}</h4>
                  </div>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#ff2a2a] text-xs font-mono tracking-widest uppercase mb-2 block"
            >
              {myProcess.badge}
            </motion.span>
            
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4"
            >
              {myProcess.heading}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-white text-sm sm:text-base leading-relaxed"
            >
              {myProcess.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {myProcess.cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[#ff2a2a] text-4xl font-black tracking-tighter opacity-35 block mb-4">
                    {card.number}
                  </span>
                  <h4 className="text-white font-bold text-lg mb-2">{card.title}</h4>
                </div>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-4">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
