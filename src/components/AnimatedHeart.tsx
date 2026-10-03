import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedHeartProps = {className?: string;showParticles?: boolean;};

const HEART =
"M100 62 C82 52 54 56 46 82 C38 110 56 142 92 170 C97 174 103 174 108 170 C144 140 162 110 154 82 C146 56 118 52 100 62 Z";
const AORTA = "M104 62 C104 36 120 22 140 24 C156 26 164 38 162 54";
const PULMONARY = "M90 64 C86 46 74 36 60 38";
const LAD = "M108 72 C116 98 116 132 103 162";
const LCX = "M110 72 C130 78 146 92 148 112";
const RCA = "M95 70 C74 76 60 94 61 118 C62 138 77 152 94 160";

/** Premium line-art heart with coronary branches, gentle pulse and blood-flow particles. */
export function AnimatedHeart({ className = "", showParticles = true }: AnimatedHeartProps) {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 1.4, delay, ease: "easeInOut" }
  });

  return (
    <svg viewBox="30 14 140 166" className={className} aria-hidden="true" focusable="false">
      <circle cx="100" cy="112" r="56" fill="none" stroke="#E63946" strokeOpacity="0.28" className="pulse-ring" />
      <g className="heartbeat">
        <path d={HEART} fill="#E63946" fillOpacity="0.1" />
        <motion.path d={HEART} fill="none" stroke="#F36A74" strokeWidth="1.8" strokeLinejoin="round" {...draw(0)} />
        <motion.path d={AORTA} fill="none" stroke="#97AFCD" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.55" {...draw(0.2)} />
        <motion.path d={PULMONARY} fill="none" stroke="#79B1DE" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.45" {...draw(0.3)} />
        {[LAD, LCX, RCA].map((d, i) =>
        <motion.path key={d} d={d} fill="none" stroke="#FCA0A7" strokeWidth="1.6" strokeLinecap="round" {...draw(0.5 + i * 0.15)} />
        )}
      </g>
      {showParticles &&
      !reduce &&
      [LAD, LCX, RCA].flatMap((d, i) =>
      [0, 1.3].map((offset) =>
      <circle key={`${i}-${offset}`} r="1.8" fill="#FFE1E3">
              <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${offset + i * 0.4}s`} path={d} />
            </circle>
      )
      )}
    </svg>);

}