"use client";

import { motion } from "framer-motion";

const executionLog = [
  {
    role: "Head of Research and Development",
    organization: "Team Swift",
    timestamp: "[2025-10 : PRESENT]",
    description: "Co-developed an autonomous fixed-wing aircraft for the Pakistan UAS Competition 2025. Architected primary navigation systems and authored the comprehensive Qualification Test Plan.",
    tags: ["LEADERSHIP", "R&D", "AUTONOMOUS SYSTEMS"]
  },
  {
    role: "Tech and Coverage Team Member",
    organization: "Association of Computing Machinery (ACM)",
    timestamp: "[2024-10 : PRESENT]",
    description: "Designed data-driven promotional materials for Softcom 2025, driving a 35% increase in event registrations and expanding digital reach to 10,000+ targeted students.",
    tags: ["OPERATIONS", "DATA STRATEGY"]
  },
  {
    role: "Head of Marketing and Debater",
    organization: "GIKI Debate Team",
    timestamp: "[2024-10 : PRESENT]",
    description: "Competed in the Columbia IV 2025 tournament. Directed marketing initiatives that drove 51,000+ post views in a single month through high-impact content strategy.",
    tags: ["LEADERSHIP", "STRATEGY"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 md:px-24 max-w-7xl mx-auto border-t border-steel/50">
      
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[2px] w-8 sm:w-12 bg-charcoal"></span>
          <span className="sys-label !mb-0 text-charcoal">System Process Tree</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal mb-4">
          Execution Log
        </h2>
        <p className="text-base sm:text-lg text-slate max-w-2xl font-mono text-sm">
          // Tracking operational history, leadership deployments, and strategic initiatives.
        </p>
      </div>

      {/* Reduced left margin on mobile to maximize content width */}
      <div className="relative border-l border-steel ml-2 sm:ml-4 lg:ml-8">
        {/* Active process line */}
        <motion.div 
          className="absolute left-[-1px] top-0 w-[1px] bg-charcoal"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.0, ease: "linear" }}
        />
        
        {executionLog.map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, delay: index * 0.1, ease: "easeOut" }}
            className="mb-12 sm:mb-16 ml-6 sm:ml-8 lg:ml-12 relative group"
          >
            {/* Process Node Marker - Adjusted offset for mobile */}
            <div className="absolute -left-[29px] sm:-left-[37px] lg:-left-[53px] top-1.5 flex h-3 w-3 items-center justify-center bg-paper border border-steel group-hover:border-blueprint group-hover:bg-blueprint transition-colors duration-150" />
            
            <div className="flex flex-col mb-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <span className="font-tech text-[10px] sm:text-xs text-blueprint whitespace-nowrap">{log.timestamp}</span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {log.tags.map((tag, i) => (
                    <span key={i} className={`font-tech text-[8px] sm:text-[9px] px-1.5 py-0.5 border whitespace-nowrap ${
                      tag === "LEADERSHIP" ? "border-amber text-amber bg-amber/5" : "border-steel text-slate"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
                {log.role}
              </h3>
              <h4 className="text-xs sm:text-sm font-mono text-slate mt-1 break-words">@ {log.organization}</h4>
            </div>
            
            <p className="text-xs sm:text-sm text-slate leading-relaxed max-w-2xl mt-3 sm:mt-4 border-l-2 border-steel/30 pl-3 sm:pl-4 group-hover:border-steel transition-colors">
              {log.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}