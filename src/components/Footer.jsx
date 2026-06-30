import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personalInfo } = portfolioData;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 py-12 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest text-white/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          &copy; {currentYear} {personalInfo.name} | Built with React &amp; Tailwind
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a2a] transition-colors"
            data-hover="true"
          >
            LINKEDIN
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a2a] transition-colors"
            data-hover="true"
          >
            GITHUB
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#ff2a2a] transition-colors"
            data-hover="true"
          >
            EMAIL
          </a>
        </div>
        
      </div>
    </footer>
  );
}
