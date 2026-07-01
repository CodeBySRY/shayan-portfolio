"use client";
import { useEffect } from 'react';
import { useSystem } from '../context/SystemContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandPalette() {
  const { isPaletteOpen, setIsPaletteOpen } = useSystem();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsPaletteOpen]);

  return (
    <AnimatePresence>
      {isPaletteOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-charcoal/30 backdrop-blur-[2px] flex justify-center pt-20 px-4"
          onClick={() => setIsPaletteOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg bg-paper border-2 border-blueprint p-4 shadow-[8px_8px_0px_rgba(0,0,0,0.12)]">
            <input autoFocus placeholder="SEARCH_SYSTEM_COMMANDS..." className="w-full bg-transparent border-b-2 border-steel outline-none font-mono text-charcoal p-2 uppercase"/>
            <div className="mt-4 flex flex-col gap-2">
                <button onClick={() => setIsPaletteOpen(false)} className="text-left font-mono text-sm hover:bg-blueprint hover:text-white p-2 transition-colors">&gt; /NAV_PROJECTS</button>
                <button onClick={() => setIsPaletteOpen(false)} className="text-left font-mono text-sm hover:bg-blueprint hover:text-white p-2 transition-colors">&gt; /SYSTEM_REBOOT</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}