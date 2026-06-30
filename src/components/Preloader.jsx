import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Framer Motion presets
  const containerVariants = {
    initial: { y: 0 },
    exit: { 
      y: "-100%",
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const textVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.3 }
    }
  };

  const taglineVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.7,
      transition: { duration: 0.5, delay: 0.9 }
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex flex-col items-center justify-center text-black"
        >
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none"
            >
              Shayan Naqvi
            </motion.h1>
          </div>
          <motion.p
            variants={taglineVariants}
            initial="initial"
            animate="animate"
            className="text-xs sm:text-sm font-mono tracking-widest uppercase opacity-70"
          >
            Portfolio &copy; 2026
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
