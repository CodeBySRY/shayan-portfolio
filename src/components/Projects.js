"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 22 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const projectsData = [
  {
    title: "LogiTrack PK",
    date: "Sep 2024 - May 2028",
    description: "Architected a Zero Trust supply chain platform deployed via Docker on AWS EC2. Features 4-tier RBAC securing 100% of ACID transactions and processes 10,000+ records with sub-second latency.",
    tech: ["Python", "PostgreSQL", "Streamlit", "Docker", "AWS"],
    github: "#",
    live: "#"
  },
  {
    title: "CareSync Hub",
    date: "Dec 2025 - Jun 2026",
    description: "Engineered a Raylib-based management system. Built a Binary Search Tree for O(log n) doctor lookups and a 1000-bucket Hash Table for O(1) patient access with an overlap-detection scheduling algorithm.",
    tech: ["C++", "Raylib", "SQLite3"],
    github: "#",
    live: "#"
  },
  {
    title: "EduMate Study Platform",
    date: "Feb 2025",
    description: "Developed a responsive full-stack application integrating the Google Search API to autonomously extract content. Automated flashcard creation, generating 200+ sets and saving users 70% of prep time.",
    tech: ["React.js", "Flask", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Real Estate Market Analysis",
    date: "Dec 2024",
    description: "Processed 53,000+ property records using quantile-based statistical filtering. Mapped pricing trends across 9 major cities to deliver actionable market insights.",
    tech: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-40 px-6 md:px-24 max-w-7xl mx-auto">
      
      <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 mb-6"
        >
          Selected Works.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-xl text-zinc-500 max-w-2xl font-medium"
        >
          A collection of full-stack platforms, autonomous systems, and data-driven solutions engineered for scale.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
            className="group relative bg-white p-12 rounded-[2.5rem] border border-zinc-200/80 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">{project.title}</h3>
                  <p className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">{project.date}</p>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-zinc-400 hover:text-zinc-900 transition-transform hover:scale-110 duration-300">
                    <GithubIcon size={26} />
                  </a>
                  <a href={project.live} className="text-zinc-400 hover:text-zinc-900 transition-transform hover:scale-110 duration-300">
                    <ArrowUpRight size={28} />
                  </a>
                </div>
              </div>
              <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-prose">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-5 py-2.5 bg-white border border-zinc-200 text-zinc-600 text-sm font-bold rounded-xl cursor-default transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-800/10 hover:bg-slate-800 hover:text-blue-50 hover:border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}