"use client"; 

import { motion, useScroll, useSpring } from "framer-motion";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import DecryptText from "../components/DecryptText";
import ResumeArtifact from "../components/ResumeArtifact"; // Ensure this import is present

// Scroll Progress Helper Component
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blueprint origin-left z-[9999]"
      style={{ scaleX }}
    />
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      
      <main className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-24 max-w-7xl mx-auto pt-28 pb-12 md:pt-20">
        
        <div className="max-w-4xl relative">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-2 sm:gap-4 text-[10px] sm:text-xs font-tech text-slate mb-8 md:absolute md:-top-12 md:left-0 md:mb-0"
          >
            <span className="border border-steel px-2 py-0.5 bg-card whitespace-nowrap">UID: SHAYAN_Y</span>
            <span className="border border-steel px-2 py-0.5 bg-card whitespace-nowrap">ROLE: SYS_ARCHITECT</span>
            <span className="border border-steel px-2 py-0.5 bg-card flex items-center gap-1 whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-eng-green inline-block"></span>
              SYS_ONLINE
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter text-charcoal mb-6">
            <DecryptText text="Shayan Rizwan Yazdanie." />
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.8 }}
            className="text-base sm:text-lg lg:text-xl text-slate leading-relaxed font-medium max-w-2xl border-l-2 border-blueprint pl-4 sm:pl-6"
          >
            <p className="mb-2">Computer Engineering at GIKI.</p>
            <p className="font-mono text-xs sm:text-sm">
              <span className="text-blueprint">&gt;&gt;</span> Architecting zero-trust platforms, high-performance algorithms, and robust cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.0 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="btn-sys w-full sm:w-auto text-center px-8 py-3.5 bg-blueprint text-white text-sm font-tech font-bold hover:bg-blueprint/90 border border-transparent hover:border-amber hover:text-amber"
            >
              EXECUTE: VIEW_WORK
            </a>
            <a 
              href="https://github.com/shayan-yazdanie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-sys w-full sm:w-auto text-center px-8 py-3.5 bg-card text-charcoal border border-steel text-sm font-tech font-bold hover:border-blueprint hover:bg-paper"
            >
              ACCESS: GITHUB
            </a>
          </motion.div>
        </div>
      </main>

      <Projects />
      <Experience />
      <Skills />
      <ResumeArtifact /> 
      <Footer />
    </>
  );
}