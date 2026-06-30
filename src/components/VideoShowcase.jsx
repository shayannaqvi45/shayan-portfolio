import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, VolumeX, Maximize, PlayCircle, PauseCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function VideoShowcase() {
  const { videoShowcase } = portfolioData;
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef(null);

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const requestFullscreen = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.requestFullscreen) {
        modalVideoRef.current.requestFullscreen();
      } else if (modalVideoRef.current.webkitRequestFullscreen) {
        modalVideoRef.current.webkitRequestFullscreen();
      } else if (modalVideoRef.current.msRequestFullscreen) {
        modalVideoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <section
      id="videos"
      className="relative py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
    >
      {/* Visual background lights */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#ff2a2a]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#ff2a2a] text-xs font-mono tracking-widest uppercase mb-2 block"
          >
            {videoShowcase.badge}
          </motion.span>
          
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4"
          >
            {videoShowcase.heading}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-white text-sm sm:text-base leading-relaxed"
          >
            {videoShowcase.description}
          </motion.p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoShowcase.videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredCardId(video.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={() => {
                setActiveVideo(video);
                setIsPlaying(true);
                setIsMuted(false);
              }}
              className="group relative bg-black/40 border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-[#ff2a2a]/30 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(255,42,42,0.1)] transition-all duration-500"
            >
              {/* Media Wrapper */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                {/* Play icon overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#ff2a2a] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,42,42,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="ml-1" />
                  </div>
                </div>

                {/* Looping video preview on hover OR static thumbnail */}
                {hoveredCardId === video.id ? (
                  <video
                    src={video.url}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Text Info */}
              <div className="p-6 relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {video.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 text-[#ff2a2a] text-[9px] font-bold uppercase tracking-wider rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-white text-lg font-bold mb-2 uppercase group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {video.title}
                </h4>
                <p className="text-white/60 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-black/95 z-[999] flex items-center justify-center p-4 md:p-12"
          >
            {/* Close Trigger (Clicks Backdrop) */}
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />

            {/* Video Player Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              {/* Top Controls Bar */}
              <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent z-20">
                <h4 className="text-white font-bold text-sm md:text-base uppercase truncate pr-4">
                  {activeVideo.title}
                </h4>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-white/60 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors"
                  data-hover="true"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Video Tag */}
              <div className="aspect-video w-full flex items-center justify-center bg-black">
                <video
                  ref={modalVideoRef}
                  src={activeVideo.url}
                  className="w-full h-full object-contain"
                  autoPlay
                  playsInline
                  onClick={togglePlay}
                  onEnded={() => setIsPlaying(false)}
                />
              </div>

              {/* Custom Control Bar Overlay */}
              <div className="p-4 bg-zinc-950 flex items-center justify-between gap-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-[#ff2a2a] transition-colors"
                    data-hover="true"
                  >
                    {isPlaying ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="text-white/80 hover:text-white transition-colors"
                    data-hover="true"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>

                <div className="text-[10px] md:text-xs text-white/40 font-mono tracking-wider uppercase">
                  Cloud Hosted Stream • Direct MP4
                </div>

                <button
                  onClick={requestFullscreen}
                  className="text-white/80 hover:text-white transition-colors"
                  data-hover="true"
                  title="Fullscreen"
                >
                  <Maximize size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
