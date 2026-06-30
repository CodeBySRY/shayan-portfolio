"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Head of Research and Development",
    organization: "Team Swift",
    date: "Oct 2025 - Present",
    description: "Co-developed an autonomous fixed-wing aircraft for the Pakistan UAS Competition 2025. Architected primary navigation systems and authored the comprehensive Qualification Test Plan for the Critical Design Review."
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
    description: "Competed in the Columbia IV 2025 tournament against Stanford, Yale, and Duke. Directed marketing initiatives that drove 51,000+ post views in a single month."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
          Experience & Leadership
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl">
          Driving technical innovation and leading cross-functional teams.
        </p>
      </div>

      <div className="relative border-l border-zinc-200 ml-3 md:ml-4">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="mb-12 ml-10 relative"
          >
            {/* The Timeline Dot */}
            <span className="absolute -left-12.25 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-zinc-900"></span>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-2xl font-bold text-zinc-900">{item.role}</h3>
              <span className="text-sm font-semibold text-zinc-400 mt-1 md:mt-0 bg-zinc-100 px-3 py-1 rounded-full w-fit">
                {item.date}
              </span>
            </div>
            
            <h4 className="text-lg font-medium text-zinc-800 mb-4">{item.organization}</h4>
            <p className="text-zinc-600 leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}