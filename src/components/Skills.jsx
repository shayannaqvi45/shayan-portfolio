import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff2a2a]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#ff2a2a] text-xs font-mono tracking-widest uppercase mb-2 block"
          >
            Capabilities
          </motion.span>
          
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight"
          >
            Technical Skills
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.03] hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={skill.name}>
                    {skill.icon}
                  </span>
                  <h4 className="text-white font-bold text-base group-hover:text-[#ff2a2a] transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-white/40 group-hover:text-white transition-colors">
                  {skill.level}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-[#ff2a2a]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
