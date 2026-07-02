"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [logs, setLogs] = useState([]);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // 1. DIAGNOSTIC: Log Shift+K detection
      if (e.key === 'K' && e.shiftKey) {
        console.log("SYS_DEBUG: Shift+K detected. State:", isPaletteOpen);
      }

      // 2. THE TRIGGER: Using e.metaKey (Mac) or e.ctrlKey (Windows) + Shift + 'K'
      // Note: When Shift is pressed, e.key becomes uppercase 'K'
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'K') {
        e.preventDefault(); // Stop Browser from opening search/history
        e.stopPropagation(); // Stop other UI components from ignoring this
        console.log("SYS_DEBUG: Toggle command executing...");
        
        setIsPaletteOpen(prev => !prev);
      }
    };

    // 3. CAPTURE: The 'true' argument ensures this fires before the browser's default behavior
    window.addEventListener('keydown', handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [isPaletteOpen]); 

  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
    setLogs(prev => [{ id: Date.now(), timestamp, message }, ...prev].slice(0, 5));
  };

  return (
    <SystemContext.Provider value={{ logs, addLog, isPaletteOpen, setIsPaletteOpen }}>
      {children}
    </SystemContext.Provider>
  );
}

export const useSystem = () => useContext(SystemContext);