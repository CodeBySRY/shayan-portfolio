"use client";

import { motion } from "framer-motion";
import { Code2, Blocks, Cpu, Wrench } from "lucide-react";

// Grouping your skills logically for better readability
const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 mb-4 text-zinc-900" />,
    skills: ["Python", "C++", "JavaScript", "SQL (PostgreSQL, SQLite)", "Verilog", "HTML/CSS"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Blocks className="w-6 h-6 mb-4 text-zinc-900" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Streamlit", "Flask", "Pandas", "NumPy", "Raylib"]
  },
  {
    title: "Hardware & Engineering",
    icon: <Cpu className="w-6 h-6 mb-4 text-zinc-900" />,
    skills: ["FPGA", "Xilinx Artix-7", "Vivado", "Multisim", "SolidWorks", "AutoCAD"]
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="w-6 h-6 mb-4 text-zinc-900" />,
    skills: ["Docker", "AWS (EC2)", "Git", "Linux", "Figma", "Photoshop", "Canva"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-24 max-w-7xl mx-auto bg-zinc-50/50 rounded-3xl my-12">
      
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
          Technical Arsenal
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto md:mx-0">
          A comprehensive toolkit spanning full-stack development, hardware engineering, and data processing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
          >
            {category.icon}
            <h3 className="text-xl font-bold text-zinc-900 mb-6">{category.title}</h3>
            
            <ul className="space-y-3">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-zinc-600 font-medium">
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  );
}