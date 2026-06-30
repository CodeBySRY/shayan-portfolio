"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper border-b-2 border-steel shadow-[4px_4px_0px_rgba(0,0,0,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 h-20 flex items-center justify-between">

          {/* System Identity */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/" className="text-xl font-extrabold tracking-tighter text-blueprint no-underline">
              SY_SYS.
            </Link>
            <span className="hidden sm:block border-l-2 border-steel pl-4 font-mono text-[10px] text-slate uppercase tracking-widest">
              ENV: PRODUCTION // V3.1
            </span>
          </div>

          {/* Desktop Navigation: Explicitly hidden on mobile, flex on md+ */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs font-bold text-slate uppercase tracking-wider">
            <Link href="#projects" className="hover:text-blueprint transition-colors relative group">
              MODULES
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blueprint transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="#experience" className="hover:text-blueprint transition-colors relative group">
              EXECUTION_LOG
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blueprint transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="#skills" className="hover:text-blueprint transition-colors relative group">
              CAPABILITIES
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blueprint transition-all duration-300 group-hover:w-full" />
            </Link>
            <a
              href="mailto:shayan.yazdanie@gmail.com"
              className="px-6 py-2 bg-charcoal text-white border-2 border-charcoal hover:bg-blueprint hover:border-blueprint transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              INIT_CONTACT
            </a>
          </div>

          {/* Mobile Menu Toggle: Explicitly visible on mobile, hidden on md+ */}
          <button
            className="flex md:hidden relative z-[60] p-2 -mr-2 text-charcoal hover:text-blueprint transition-colors"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-charcoal/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "circOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-paper border-l-2 border-steel flex flex-col pt-24 px-8 md:hidden"
            >
              <div className="flex flex-col flex-grow">
                <span className="font-mono text-[10px] text-slate border-b-2 border-steel pb-4 mb-8 uppercase tracking-widest">
                  SYS.NAV_MENU
                </span>

                <div className="flex flex-col gap-6">
                  {['PROJECTS', 'EXPERIENCE', 'SKILLS'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold font-mono text-charcoal hover:text-blueprint transition-colors border-b border-steel/30 pb-2"
                    >
                      &gt; {item}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pb-12">
                  <a
                    href="mailto:shayan.yazdanie@gmail.com"
                    className="flex w-full justify-center px-6 py-3 bg-charcoal text-white font-mono text-sm font-bold uppercase tracking-widest"
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