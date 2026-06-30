"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Next.js's optimized routing component

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-24 h-20 flex items-center justify-between">
        
        {/* Logo */}
<Link href="/" className="text-xl font-extrabold tracking-tighter text-zinc-900 no-underline">
  SY.
</Link>

        {/* Desktop Navigation */}
{/* Desktop Navigation */}
<div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
  <Link href="#projects" className="hover:text-zinc-900 transition-colors">
    Projects
  </Link>
  <Link href="#experience" className="hover:text-zinc-900 transition-colors">
    Experience
  </Link>
  <Link href="#skills" className="hover:text-zinc-900 transition-colors">
    Skills
  </Link>
          
          {/* Call to Action Button */}
          <a 
            href="mailto:shayan.yazdanie@gmail.com" 
            className="px-6 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors shadow-sm"
          >
            Get in touch
          </a>
        </div>

      </div>
    </motion.nav>
  );
}