"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [logs, setLogs] = useState([]);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // 1. DIAGNOSTIC: Log every keypress so we see if the browser "steals" the K
      if (e.key === 'k') {
        console.log("SYS_DEBUG: K-key detected. State:", isPaletteOpen);
      }

      // 2. THE TRIGGER: Using e.metaKey (Mac) or e.ctrlKey (Windows)
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'j')) {
        e.preventDefault(); // Stop Browser from opening search/history
        e.stopPropagation(); // Stop other UI components from ignoring this
        console.log("SYS_DEBUG: Toggle command executing...");
        
        setIsPaletteOpen(prev => !prev);
      }
    };

    // 3. CAPTURE: The 'true' argument here is critical. 
    // It makes this listener fire before anyone else.
    window.addEventListener('keydown', handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, []); // Empty dependency array keeps the listener alive forever

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