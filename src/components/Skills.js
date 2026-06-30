"use client";

import { motion } from "framer-motion";
import { Code2, Blocks, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-8 h-8 mb-6 text-zinc-900" />,
    skills: ["Python", "C++", "JavaScript", "SQL (PostgreSQL, SQLite)", "Verilog", "HTML/CSS"]
  },
  {
    title: "Frameworks",
    icon: <Blocks className="w-8 h-8 mb-6 text-zinc-900" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Streamlit", "Flask", "Pandas", "NumPy", "Raylib"]
  },
  {
    title: "Hardware",
    icon: <Cpu className="w-8 h-8 mb-6 text-zinc-900" />,
    skills: ["FPGA", "Xilinx Artix-7", "Vivado", "Multisim", "SolidWorks", "AutoCAD"]
  },
  {
    title: "Dev Tools",
    icon: <Wrench className="w-8 h-8 mb-6 text-zinc-900" />,
    skills: ["Docker", "AWS (EC2)", "Git", "Linux", "Figma", "Photoshop", "Canva"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-40 px-6 md:px-24 max-w-7xl mx-auto">
      
      <div className="mb-24 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 mb-6">
          Technical Arsenal.
        </h2>
        <p className="text-xl text-zinc-500 max-w-2xl font-medium">
          A comprehensive toolkit spanning full-stack development, hardware engineering, and data science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            className="bg-white p-10 rounded-[2rem] border border-zinc-200/80 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
          >
            {category.icon}
            <h3 className="text-2xl font-bold text-zinc-900 mb-8">{category.title}</h3>
            
            <ul className="space-y-4">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-zinc-600 font-medium">
                  <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full mr-3"></span>
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