import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Videos", href: "#videos" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-black tracking-widest text-white hover:text-[#ff2a2a] transition-colors"
          >
            S. SHAYAN NAQVI
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative group text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="flex items-center gap-1 bg-[#ff2a2a] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
            >
              Hire Me <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-0 w-full bg-[#ff2a2a] z-30 shadow-2xl md:hidden overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-black hover:text-white transition-colors py-2 border-b border-black/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-black text-[#ff2a2a] text-sm font-bold uppercase tracking-widest py-3 rounded-full hover:bg-black/80 transition-colors"
              >
                Hire Me <ArrowUpRight size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
