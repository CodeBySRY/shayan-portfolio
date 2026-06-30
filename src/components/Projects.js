"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const technicalModules = [
  {
    id: "MOD-01",
    title: "LogiTrack PK",
    deploymentStatus: "ONLINE",
    buildVer: "v2.4.1",
    architectureSummary: "Zero Trust supply chain platform deployed via Docker containers on AWS EC2 instances.",
    engineeringImpact: "Processed 10,000+ records with sub-second latency. Implemented 4-tier RBAC securing 100% of ACID transactions.",
    technicalChallenges: "Ensuring ACID compliance across distributed data nodes while maintaining high throughput for real-time tracking.",
    tech: ["Python", "PostgreSQL", "Docker", "AWS EC2", "Streamlit"],
    github: "https://github.com/CodeBySRY/freight-tracker",
    live: "https://www.youtube.com/watch?v=s94jQhKt8MM",
    featured: true
  },
  {
    id: "MOD-02",
    title: "CareSync Hub",
    deploymentStatus: "COMPILED",
    buildVer: "v1.1.0",
    architectureSummary: "Raylib-based localized management GUI interfacing with a highly optimized embedded SQLite3 datastore.",
    engineeringImpact: "Achieved O(log n) doctor lookups via BST and O(1) patient access through a custom 1000-bucket Hash Table.",
    technicalChallenges: "Developing a memory-safe overlap-detection scheduling algorithm strictly using standard C++.",
    tech: ["C++", "Raylib", "SQLite3", "Data Structures"],
    github: "https://github.com/CodeBySRY/CareSync-Hub",
    live: "#"
  },
  {
    id: "MOD-03",
    title: "EduMate Extraction Engine",
    deploymentStatus: "ACTIVE",
    buildVer: "v1.0.5",
    architectureSummary: "Full-stack decoupled architecture: React front-end communicating with a Flask API bound to the Google Search API.",
    engineeringImpact: "Automated the generation of 200+ flashcard sets, reducing manual user preparation time by approximately 70%.",
    technicalChallenges: "Handling API rate limits and structuring unstructured web payload data into deterministic JSON flashcards.",
    tech: ["React.js", "Flask", "Google API", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    id: "MOD-04",
    title: "Real Estate Analytics Pipeline",
    deploymentStatus: "EXECUTED",
    buildVer: "v3.0.0",
    architectureSummary: "Batch processing statistical pipeline filtering large-scale CSV datasets using NumPy and Pandas.",
    engineeringImpact: "Cleaned and processed 53,000+ property records using precise quantile-based statistical filtering.",
    technicalChallenges: "Optimizing memory allocation during matrix operations on 50k+ row datasets across 9 city parameters.",
    tech: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/CodeBySRY/real-estate-analysis",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 md:px-24 max-w-7xl mx-auto">
      
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[2px] w-8 sm:w-12 bg-blueprint"></span>
          <span className="sys-label !mb-0 text-blueprint">System Registry</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal mb-4">
          Deployed Systems
        </h2>
        <p className="text-base sm:text-lg text-slate max-w-2xl font-mono text-sm">
          // Indexing production-grade platforms, operational algorithms, and data pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {technicalModules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
            className={`group flex flex-col bg-card border border-steel shadow-panel transition-all duration-150 ease-out hover:border-blueprint ${
              module.featured ? "border-l-4 border-l-blueprint" : ""
            }`}
          >
            {/* Header / Meta - Flex wrap for mobile safety */}
            <div className="flex flex-wrap gap-2 justify-between items-center border-b border-steel p-3 sm:p-4 bg-paper/50">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-tech text-[10px] font-bold text-charcoal px-2 py-1 bg-steel/30">
                  {module.id}
                </span>
                <span className="font-tech text-[9px] sm:text-[10px] text-slate">
                  {module.buildVer}
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {module.deploymentStatus === "ONLINE" || module.deploymentStatus === "ACTIVE" ? (
                  <span className="status-pulse text-[8px] sm:text-[10px]">●</span>
                ) : (
                  <span className="text-slate text-[8px] sm:text-[10px]">○</span>
                )}
                <span className={`font-tech text-[9px] sm:text-[10px] ${
                  module.deploymentStatus === "ONLINE" || module.deploymentStatus === "ACTIVE" 
                    ? "text-eng-green" 
                    : "text-slate"
                }`}>
                  STATUS: {module.deploymentStatus}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-6 lg:p-8 flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight break-words">{module.title}</h3>
                
                <div className="flex gap-3">
                  {module.github !== "#" && (
                    <a href={module.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-amber transition-colors duration-150" aria-label="GitHub Repository">
                      <GithubIcon size={20} />
                    </a>
                  )}
                  {module.live !== "#" && (
                    <a href={module.live} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-amber transition-colors duration-150" aria-label="Live Deployment">
                      <ArrowUpRight size={22} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-slate">
                <div>
                  <span className="sys-label">Architecture</span>
                  <p className="leading-relaxed">{module.architectureSummary}</p>
                </div>
                <div>
                  <span className="sys-label">Engineering Impact</span>
                  <p className="leading-relaxed">{module.engineeringImpact}</p>
                </div>
                <div>
                  <span className="sys-label">Technical Constraints</span>
                  <p className="leading-relaxed">{module.technicalChallenges}</p>
                </div>
              </div>
            </div>

            {/* Footer / Tech Stack */}
            <div className="p-3 sm:p-4 border-t border-steel bg-paper/30 flex flex-wrap gap-1.5 sm:gap-2">
              {module.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 border border-steel text-slate font-mono text-[9px] sm:text-[10px] transition-colors duration-150 hover:bg-slate hover:text-white whitespace-nowrap"
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