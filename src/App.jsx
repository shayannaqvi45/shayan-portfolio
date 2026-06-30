import { useState } from "react";
import MouseFollower from "./components/MouseFollower";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import VideoShowcase from "./components/VideoShowcase";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* Dynamic Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {loadingComplete && (
        <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden selection:bg-[#ff2a2a] selection:text-white">
          {/* Custom Cursor Follower */}
          <MouseFollower />

          {/* Navigation */}
          <Navbar />

          {/* Core Content */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <VideoShowcase />
            <Certifications />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
