"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Custom GitHub SVG Icon
const GithubIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

// Custom LinkedIn SVG Icon
const LinkedinIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-24 px-6 md:px-24 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Left Side: Call to Action */}
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            Let's build something exceptional.
          </motion.h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
            Currently open for software engineering roles and freelance opportunities. Feel free to reach out.
          </p>
          
          <a 
            href="mailto:shayan.yazdanie@gmail.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            <Mail size={18} />
            shayan.yazdanie@gmail.com
          </a>
        </div>

        {/* Right Side: Links & Socials */}
        <div className="flex flex-col gap-6 md:text-right">
          <div className="flex gap-4 md:justify-end">
            <a 
              href="https://github.com/shayan-yazdanie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shayan-rizwan-yazdanie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
          
          <div className="text-zinc-500 text-sm font-medium">
            <p>© {new Date().getFullYear()} Shayan Rizwan Yazdanie.</p>
            <p className="mt-1">Designed & Built in Next.js</p>
          </div>
        </div>

      </div>
    </footer>
  );
}