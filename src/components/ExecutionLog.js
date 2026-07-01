"use client";
import { useSystem } from "../context/SystemContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ExecutionLog() {
  const { logs } = useSystem();
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {logs.map(log => (
          <motion.div 
            key={log.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-charcoal text-white p-2 font-mono text-[10px] border-l-2 border-blueprint shadow-[4px_4px_0px_rgba(0,0,0,0.12)]"
          >
            [{log.timestamp}] INFO: {log.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}