"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Head of Research and Development",
    organization: "Team Swift",
    date: "Oct 2025 - Present",
    description: "Co-developed an autonomous fixed-wing aircraft for the Pakistan UAS Competition 2025. Architected primary navigation systems and authored the comprehensive Qualification Test Plan."
  },
  {
    role: "Tech and Coverage Team Member",
    organization: "Association of Computing Machinery (ACM)",
    date: "Oct 2024 - Present",
    description: "Designed data-driven promotional materials for Softcom 2025, driving a 35% increase in event registrations and expanding digital reach to 10,000+ targeted students."
  },
  {
    role: "Head of Marketing and Debater",
    organization: "GIKI Debate Team",
    date: "Oct 2024 - Present",
    description: "Competed in the Columbia IV 2025 tournament. Directed marketing initiatives that drove 51,000+ post views in a single month through high-impact content strategy."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-40 px-6 md:px-24 max-w-7xl mx-auto">
      
      <div className="mb-24">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 mb-6">
          Experience & Leadership.
        </h2>
        <p className="text-xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
          Driving technical innovation and leading cross-functional teams across engineering and competitive platforms.
        </p>
      </div>

      {/* Editorial Timeline Container */}
      <div className="relative border-l border-zinc-200 ml-4">
        {/* The "Drawing" line effect */}
        <motion.div 
          className="absolute left-[-1px] top-0 w-[2px] bg-zinc-900"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            className="mb-20 ml-10 relative"
          >
            {/* Interactive Timeline Dot */}
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="absolute -left-[51px] top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white border-4 border-zinc-900 
                         transition-all duration-300 ease-out 
                         hover:bg-green-500 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] cursor-pointer"
            />
            
            <div className="flex flex-col mb-4">
              <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">{item.role}</h3>
              <div className="flex items-center gap-4 mt-2">
                <h4 className="text-lg font-semibold text-zinc-900">{item.organization}</h4>
                <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
            </div>
            
            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}