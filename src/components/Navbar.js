"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importing the Hamburger and Close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-zinc-200"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-24 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold tracking-tighter text-zinc-900 no-underline relative z-50">
            SY.
          </Link>

          {/* Desktop Navigation (Remains unchanged) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
            <Link href="#projects" className="hover:text-zinc-900 transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-zinc-900 transition-colors">Experience</Link>
            <Link href="#skills" className="hover:text-zinc-900 transition-colors">Skills</Link>
            <a 
              href="mailto:shayan.yazdanie@gmail.com" 
              className="px-6 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors shadow-sm"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden relative z-50 p-2 -mr-2 text-zinc-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            {['Projects', 'Experience', 'Skills'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // Closes menu when clicked
                className="text-3xl font-semibold tracking-tight text-zinc-900 border-b border-zinc-100 pb-4"
              >
                {item}
              </Link>
            ))}
            <a 
              href="mailto:shayan.yazdanie@gmail.com" 
              className="mt-4 px-8 py-4 bg-zinc-900 text-white text-center font-semibold rounded-full active:scale-95 transition-transform"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}