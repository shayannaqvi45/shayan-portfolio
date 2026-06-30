import { motion } from "framer-motion";
import { Award, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section
      id="certifications"
      className="relative py-24 px-6 md:px-12 w-full overflow-hidden bg-[#0a0a0a] border-t border-white/5 bg-grid-mesh text-white"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#ff2a2a]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#ff2a2a] text-xs font-mono tracking-widest uppercase mb-2 block"
          >
            Achievements
          </motion.span>
          
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight"
          >
            Certifications
          </motion.h3>
        </div>

        {/* Certifications Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-[1.03] hover:bg-white/10 hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 group flex flex-col items-center text-center justify-between min-h-[220px]"
              >
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#ff2a2a]/10 text-[#ff2a2a] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#ff2a2a] group-hover:text-white transition-all duration-300">
                    <Award size={24} />
                  </div>

                  {/* Title */}
                  <h4 className="text-white font-black text-lg mb-2 uppercase leading-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {cert.name}
                  </h4>

                  {/* Issuer */}
                  <p className="text-white/60 font-medium text-sm mb-4">
                    {cert.issuer}
                  </p>
                </div>

                {/* Details Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-[11px] font-mono text-white/40">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.duration}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {cert.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
