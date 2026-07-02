"use client";

import { motion } from "framer-motion";
import { Code2, Blocks, Cpu, Wrench } from "lucide-react";

const systemCapabilities = [
  {
    class: "SYS.LANG",
    title: "Core Languages",
    icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />,
    specs: ["Python", "C++", "JavaScript", "SQL (Pg/SQLite)", "Verilog", "HTML/CSS"],
    version: "v4.0"
  },
  {
    class: "SYS.FRMWK",
    title: "Frameworks & Libs",
    icon: <Blocks className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />,
    specs: ["React.js", "Next.js", "Tailwind", "Streamlit", "Flask", "Pandas", "Raylib"],
    version: "v3.2"
  },
  {
    class: "SYS.HW",
    title: "Hardware Architecture",
    icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />,
    specs: ["FPGA", "Xilinx Artix-7", "Vivado", "Multisim", "SolidWorks", "AutoCAD"],
    version: "v2.1"
  },
  {
    class: "SYS.DEV",
    title: "Development Tools",
    icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />,
    specs: ["Docker", "AWS (EC2)", "Git", "Linux", "Figma", "Vercel"],
    version: "v5.0"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 md:px-24 max-w-7xl mx-auto border-t border-steel/50">
      
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[2px] w-8 sm:w-12 bg-charcoal"></span>
          <span className="sys-label !mb-0 text-charcoal">Resource Allocation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal mb-4">
          System Capabilities
        </h2>
        <p className="text-base sm:text-lg text-slate max-w-2xl font-mono text-sm">
          // Available toolchains, hardware interfaces, and software frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {systemCapabilities.map((cap, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
            className="group bg-card border border-steel p-5 sm:p-6 transition-all duration-150 ease-out hover:border-blueprint shadow-sm hover:shadow-panel"
          >
            <div className="flex justify-between items-start mb-5 sm:mb-6 border-b border-steel/30 pb-3 sm:pb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-paper border border-steel group-hover:border-blueprint group-hover:bg-blueprint/5 transition-colors">
                  {cap.icon}
                </div>
                <span className="font-tech text-[9px] sm:text-[10px] text-slate">{cap.class}</span>
              </div>
              <span className="font-tech text-[9px] sm:text-[10px] text-slate bg-paper px-1.5 border border-steel/50">{cap.version}</span>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-charcoal mb-4 sm:mb-6">{cap.title}</h3>
            
            <ul className="space-y-2 sm:space-y-3">
              {cap.specs.map((spec, i) => (
                <li key={i} className="flex items-center text-slate font-mono text-[11px] sm:text-xs">
                  <span className="text-blueprint opacity-50 mr-2">›</span>
                  <span className="break-words w-full">{spec}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}