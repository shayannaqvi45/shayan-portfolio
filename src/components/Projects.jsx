import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 bg-[#0c0c0c] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff2a2a]/2 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#ff2a2a] text-xs font-mono tracking-widest uppercase mb-2 block"
          >
            My Work
          </motion.span>
          
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight"
          >
            Featured Projects
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 group flex flex-col justify-between min-h-[500px]"
            >
              <div>
                {/* Card Header (Number & Flagship Badge) */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#ff2a2a] text-4xl font-black tracking-tighter opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                    {project.number}
                  </span>
                  {project.badge && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] font-bold uppercase tracking-wider rounded-full">
                      <ShieldCheck size={12} />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-white text-xl sm:text-2xl font-black mb-4 uppercase group-hover:text-[#ff2a2a] transition-colors duration-300 leading-tight">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techTags.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] sm:text-xs font-mono text-white/50 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 w-full">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all duration-300"
                    data-hover="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Code
                  </a>

                  {project.links.demo && project.links.demo !== "#" ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#ff2a2a] text-white hover:bg-red-600 hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all duration-300"
                      data-hover="true"
                    >
                      Demo
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center bg-white/5 text-white/30 border border-white/5 cursor-not-allowed text-xs font-bold uppercase tracking-wider py-3 rounded-xl"
                    >
                      Demo Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
