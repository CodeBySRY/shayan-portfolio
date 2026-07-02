"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [logs, setLogs] = useState([]);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Logic for Ctrl + Shift + K
      // We use stopImmediatePropagation to ensure the browser doesn't steal the event
      if ((e.metaKey || e.ctrlKey) && e.key === '`') {
        e.preventDefault();
        e.stopImmediatePropagation(); 
        setIsPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, []); // Empty dependency array ensures listener is bound once and remains stable

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