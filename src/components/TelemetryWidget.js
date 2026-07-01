"use client";
import { useEffect, useState } from 'react';

export default function TelemetryWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/system-status').then(res => res.json()).then(setData);
  }, []);

  if (!data) return <div className="font-mono text-[10px] text-slate animate-pulse">SYS_INIT...</div>;

  return (
    <div className="font-mono text-[10px] text-slate border-l-2 border-eng-green pl-2 flex gap-4 uppercase">
      <span>STATUS: <span className="text-eng-green">{data.status}</span></span>
      <span>UPTIME: {data.uptime}</span>
    </div>
  );
}