"use client";
import { useState } from 'react';
import { useSystem } from '../context/SystemContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandPalette() {
  const { isPaletteOpen, setIsPaletteOpen } = useSystem();
  const [input, setInput] = useState('');

  const commands = [
    { label: "/NAV_PROJECTS", action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "/NAV_EXPERIENCE", action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "/NAV_SKILLS", action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "/SYSTEM_REBOOT", action: () => window.location.reload() },
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = commands.find(c => c.label === input.toUpperCase());
      if (command) {
        command.action();
        setIsPaletteOpen(false);
        setInput('');
      } else {
        setInput('COMMAND_NOT_FOUND');
        setTimeout(() => setInput(''), 1000);
      }
    }
  };

  if (!isPaletteOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-charcoal/30 backdrop-blur-[2px] flex justify-center pt-20 px-4" onClick={() => setIsPaletteOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg bg-paper border-2 border-blueprint p-4 shadow-[8px_8px_0px_rgba(0,0,0,0.12)]">
        <input 
          autoFocus 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="SEARCH_SYSTEM_COMMANDS..." 
          className="w-full bg-transparent border-b-2 border-steel outline-none font-mono text-charcoal p-2 uppercase"
        />
        <div className="mt-4 flex flex-col gap-2">
          {commands.map((cmd) => (
            <div key={cmd.label} className="text-left font-mono text-sm text-slate p-2 border-b border-steel/10">
              &gt; {cmd.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}