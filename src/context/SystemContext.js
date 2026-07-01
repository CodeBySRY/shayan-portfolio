"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [logs, setLogs] = useState([]);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  // GLOBAL KEY LISTENER: Always active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []); // Empty dependency array = runs once on mount

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