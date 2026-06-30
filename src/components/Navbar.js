"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-steel shadow-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 h-16 flex items-center justify-between">
          
          {/* System Identity */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/" className="text-lg sm:text-xl font-extrabold tracking-tighter text-blueprint no-underline relative z-50">
              SY_SYS.
            </Link>
            <span className="hidden sm:block border-l border-steel pl-4 font-tech text-[10px] text-slate">
              ENV: PRODUCTION // V3.1
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-xs font-tech text-slate">
            <Link href="#projects" className="hover:text-blueprint transition-colors">MODULES</Link>
            <Link href="#experience" className="hover:text-blueprint transition-colors">EXECUTION_LOG</Link>
            <Link href="#skills" className="hover:text-blueprint transition-colors">CAPABILITIES</Link>
            <a 
              href="mailto:shayan.yazdanie@gmail.com" 
              className="btn-sys px-4 py-1.5 bg-charcoal text-white border border-charcoal hover:bg-blueprint hover:border-blueprint transition-colors"
            >
              INIT_CONTACT
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:flex relative z-[60] p-2 -mr-2 text-charcoal hover:text-blueprint transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* Mobile Slide-out Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-charcoal/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "circOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 sm:w-80 bg-paper border-l border-steel shadow-panel flex flex-col pt-24 px-6 md:hidden"
            >
              <div className="flex flex-col flex-grow">
                <span className="font-tech text-[10px] text-slate border-b border-steel pb-2 mb-4">SYSTEM.NAV_MENU</span>
                
                <div className="flex flex-col gap-2">
                  {['PROJECTS', 'EXPERIENCE', 'SKILLS'].map((item) => (
                    <Link 
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-tech text-charcoal hover:text-blueprint transition-colors py-3 border-b border-steel/30"
                    >
                      &gt; {item}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-auto pb-8">
                  <a 
                    href="mailto:shayan.yazdanie@gmail.com" 
                    className="btn-sys flex w-full justify-center px-6 py-3 bg-charcoal text-white font-tech text-sm active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                  >
                    INIT_CONTACT
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}