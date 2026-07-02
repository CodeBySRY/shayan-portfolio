"use client";

import { motion } from "framer-motion";
import TelemetryWidget from "./TelemetryWidget";

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal text-slate py-12 sm:py-16 px-4 sm:px-6 md:px-24 border-t-2 border-blueprint font-mono text-[10px] sm:text-xs">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-12">
        
        {/* System Output Log */}
        <div className="w-full max-w-xl flex flex-col gap-2">
          <div className="flex items-center gap-2 text-eng-green mb-3 sm:mb-4">
            <span className="status-pulse">█</span>
            <span className="font-bold tracking-widest text-[11px] sm:text-xs">SYSTEM.ONLINE</span>
          </div>
          
          <p className="text-sky-400 font-bold text-xs animate-system-pulse">
            <span className="opacity-50">00:</span> &gt; HINT: PRESS [CTRL+K] TO ACCESS SYSTEM COMMANDS
          </p>
          
          <p className="text-steel break-words">
            <span className="opacity-50">01:</span> &gt; INITIALIZING COMMUNICATION PROTOCOL...
          </p>
          <p className="text-steel break-words">
            <span className="opacity-50">02:</span> &gt; CURRENT_STATE: OPEN FOR SOFTWARE ENGINEERING ROLES.
          </p>
          <p className="text-steel break-words">
            <span className="opacity-50">03:</span> &gt; WAITING FOR INPUT...
          </p>
          
          <a 
            href="mailto:shayan.yazdanie@gmail.com" 
            className="mt-5 sm:mt-6 flex sm:inline-flex justify-center items-center gap-2 px-4 py-3 sm:py-2 bg-charcoal border border-steel text-white hover:border-blueprint hover:text-blueprint transition-colors w-full sm:w-fit active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
          >
            &gt; EXECUTE: mailto:shayan.yazdanie@gmail.com
          </a>
        </div>

        {/* System Details */}
        <div className="flex flex-col gap-6 lg:text-right w-full lg:w-auto pt-8 border-t border-steel/30 lg:border-t-0 lg:pt-0">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-end">
            <a 
              href="https://github.com/CodeBySRY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex justify-center items-center gap-2 px-3 py-2 sm:py-1.5 border border-steel hover:border-blueprint hover:text-blueprint transition-colors w-full sm:w-auto"
            >
              <GithubIcon />
              <span>SRC_CTRL</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/shayan-rizwan-yazdanie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex justify-center items-center gap-2 px-3 py-2 sm:py-1.5 border border-steel hover:border-blueprint hover:text-blueprint transition-colors w-full sm:w-auto"
            >
              <LinkedinIcon />
              <span>NET_NODE</span>
            </a>
          </div>
          
          {/* Telemetry Widget Mount Point */}
          <div className="flex lg:justify-end">
            <TelemetryWidget />
          </div>
          
          <div className="flex flex-col gap-1 mt-auto text-[9px] sm:text-[10px]">
            <p>BUILD_VER: Next.js 16.2.9</p>
            <p>SYS_ARCH: Shayan Rizwan Yazdanie</p>
            <p className="text-steel opacity-50 mt-2 sm:mt-0">© {new Date().getFullYear()} ALL PROCESSES COMPLETED.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}