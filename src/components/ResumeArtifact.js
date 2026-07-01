"use client";
import { useSystem } from "../context/SystemContext";

export default function ResumeArtifact() {
  // 1. Hook into the system kernel
  const { addLog } = useSystem();

  return (
    <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto border-t-2 border-steel">
      <div className="bg-white border-2 border-steel p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.12)] flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold font-mono text-charcoal uppercase tracking-widest">
            // DATA_ARTIFACT: RESUME_PDF
          </h3>
          <p className="text-slate font-mono text-sm mt-2">
            STABLE_BUILD_DATE: 2026_07_01 | FORMAT: PDF | SIZE: 110KB
          </p>
        </div>
        <a 
          href="/your-resume.pdf" 
          download
          // 2. The missing Event Listener that triggers the Log
          onClick={() => addLog("DATA_ARTIFACT_REQUESTED: RESUME_PDF")}
          className="px-8 py-4 bg-blueprint text-white font-bold font-mono uppercase tracking-widest border-2 border-blueprint hover:bg-charcoal hover:border-charcoal transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          EXECUTE_DOWNLOAD
        </a>
      </div>
    </section>
  );
}