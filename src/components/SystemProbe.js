"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SystemProbe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target;
      setIsHovering(target.tagName === 'BUTTON' || target.tagName === 'A');
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center"
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
    >
      {/* The Probe Icon */}
      <div className={`w-6 h-6 border-2 ${isHovering ? 'border-eng-green' : 'border-blueprint'} flex items-center justify-center bg-white/50 backdrop-blur-sm transition-colors duration-300`}>
        <div className={`w-2 h-2 ${isHovering ? 'bg-eng-green shadow-[0_0_10px_#2D6A4F]' : 'bg-blueprint'} transition-colors duration-300`} />
      </div>
    </motion.div>
  );
}