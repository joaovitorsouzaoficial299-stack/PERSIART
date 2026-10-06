"use client";
import React from "react";
import { motion } from "motion/react";

export function FloatingPathsBackground({ position, children, className = "" }: {
  position: number; children: React.ReactNode; className?: string;
}) {
  const paths = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`
  }));
  return <div className={`relative w-full overflow-hidden ${className}`}>
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <svg className="h-full w-full" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => <motion.path key={path.id} d={path.d} stroke="currentColor"
          strokeWidth={0.5 + path.id * 0.03} initial={{ pathLength: .2, opacity: .2 }}
          animate={{ pathLength: 1, opacity: [.12, .45, .12], pathOffset: [0, 1, 0] }}
          transition={{ duration: 18 + path.id % 8, repeat: Infinity, ease: "linear" }} />)}
      </svg>
    </div>
    {children}
  </div>;
}