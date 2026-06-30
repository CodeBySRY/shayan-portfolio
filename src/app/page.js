"use client"; 

import { motion } from "framer-motion";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto pt-20">
        
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter text-zinc-900 mb-6"
          >
            Shayan Rizwan Yazdanie.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-2xl text-zinc-600 leading-relaxed font-medium max-w-2xl"
          >
            Computer Engineering at GIKI. Architecting zero-trust platforms, high-performance algorithms, and elegant digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-colors shadow-sm"
            >
              View My Work
            </a>
            <a 
              href="https://github.com/shayan-yazdanie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 text-sm font-semibold rounded-full hover:bg-zinc-50 transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </main>

      <Projects />
      <Experience />
      <Skills />
      
    </>
  );
}