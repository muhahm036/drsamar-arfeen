import React, { useMemo } from "react";
import { buildEcgPath } from "../utils/ecg";

type ECGLineAnimationProps = {
  className?: string;
  tone?: "teal" | "red" | "light" | "blue";
  beats?: number;
  strokeWidth?: number;
  /** Seconds per full loop. */
  speed?: number;
  animated?: boolean;
};

const TONES = {
  teal: { stroke: "#16A6B6", glow: "ecg-glow" },
  red: { stroke: "#E63946", glow: "ecg-glow-red" },
  light: { stroke: "#63CFD9", glow: "ecg-glow" },
  blue: { stroke: "#1769AA", glow: "ecg-glow-blue" }
};

/** Continuously scrolling ECG trace (P wave, QRS complex, T wave). Pure CSS animation. */
export function ECGLineAnimation({
  className = "",
  tone = "teal",
  beats = 4,
  strokeWidth = 1.5,
  speed = 7,
  animated = true
}: ECGLineAnimationProps) {
  const path = useMemo(() => buildEcgPath(beats, 200, 50, 1), [beats]);
  const { stroke, glow } = TONES[tone];

  const svg =
  <svg viewBox={`0 0 ${beats * 200} 100`} preserveAspectRatio="none" className={`h-full w-1/2 shrink-0 ${glow}`} aria-hidden="true" focusable="false">
      <path
      d={path}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke" />
    
    </svg>;


  return (
    <div className={`pointer-events-none overflow-hidden ecg-mask ${className}`} aria-hidden="true">
      <div className={`flex h-full w-[200%] ${animated ? "ecg-scroll" : ""}`} style={animated ? { animationDuration: `${speed}s` } : undefined}>
        {svg}
        {svg}
      </div>
    </div>);

}