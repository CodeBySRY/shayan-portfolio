"use client";
import { createContext, useContext, useState } from 'react';

const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [logs, setLogs] = useState([]);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

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