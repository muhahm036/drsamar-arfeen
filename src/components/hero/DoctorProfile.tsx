import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeart } from "../AnimatedHeart";
import { ECGLineAnimation } from "../ECGLineAnimation";
import { siteConfig } from "../../data/siteConfig";

const ARC_A = "M30 210 C30 110 110 30 210 30";
const ARC_B = "M390 210 C390 310 310 390 210 390";

/** Hero portrait with navy frame, coronary-inspired arcs, heart and ECG accents. */
export function DoctorProfile() {
  const { doctor } = siteConfig;
  const reduce = useReducedMotion();
  console.log(doctor.portraitUrl);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[440px]">
      <svg
        viewBox="0 0 420 420"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="210"
          cy="210"
          r="206"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
        />
        <circle
          cx="210"
          cy="210"
          r="186"
          fill="none"
          stroke="rgba(99,207,217,0.18)"
          strokeDasharray="2 7"
        />
        <motion.path
          d={ARC_A}
          fill="none"
          stroke="#E63946"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
        />

        <motion.path
          d={ARC_B}
          fill="none"
          stroke="#16A6B6"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
        />

        {!reduce &&
          [
            { d: ARC_A, c: "#FCA0A7", b: "0s" },
            { d: ARC_B, c: "#9FE4EA", b: "1.2s" },
          ].map((p) => (
            <circle key={p.b} r="3" fill={p.c}>
              <animateMotion
                dur="3.4s"
                repeatCount="indefinite"
                begin={p.b}
                path={p.d}
              />
            </circle>
          ))}
      </svg>

      <div className="absolute inset-[11%] overflow-hidden rounded-full bg-gradient-to-br from-navy-600 via-navy-800 to-navy-950 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/15">
        {doctor.portraitUrl ? (
          <img
            src={doctor.portraitUrl}
            alt={`Portrait of ${doctor.name}`}
            className="h-full w-full object-cover"
            loading="eager"
          />
        ) : (
          <div
            className="relative flex h-full w-full items-end justify-center"
            role="img"
            aria-label="Professional portrait placeholder"
          >
            <div
              className="bg-grid-dark absolute inset-0 opacity-60"
              aria-hidden="true"
            />
            <svg
              viewBox="0 0 200 200"
              className="relative h-[86%] w-[86%]"
              aria-hidden="true"
            >
              <circle cx="100" cy="76" r="33" fill="#2F4C74" />
              <path
                d="M30 200 C30 148 62 120 100 120 C138 120 170 148 170 200 Z"
                fill="#2F4C74"
              />
              <path
                d="M84 122 L100 156 L116 122"
                fill="none"
                stroke="#43648F"
                strokeWidth="3"
              />
              <path
                d="M70 138 C64 158 70 174 84 178"
                fill="none"
                stroke="#16A6B6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle
                cx="86"
                cy="179"
                r="5"
                fill="none"
                stroke="#16A6B6"
                strokeWidth="3"
              />
            </svg>
            <span className="absolute top-[20%] rounded-full bg-white/10 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-navy-200">
              Portrait
            </span>
          </div>
        )}
      </div>

      <div className="absolute -left-2 bottom-[6%] flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-2.5 pr-4 shadow-lift backdrop-blur-xl sm:-left-8">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-950/60">
          <AnimatedHeart className="h-12 w-12" />
        </span>
        <span className="leading-tight">
          <span className="block text-[13px] font-bold text-white">
            Coronary Intervention
          </span>
          <span className="block text-xs text-navy-200">
            Elective & Primary PCI
          </span>
        </span>
      </div>

      <div className="absolute -right-1 top-[8%] w-36 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-lift backdrop-blur-xl sm:-right-6 sm:w-40">
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-teal-300">
          Since 2015
        </span>
        <span className="block text-[13px] font-bold text-white">
          Cardiology
        </span>
        <ECGLineAnimation
          className="mt-1.5 h-6"
          tone="red"
          beats={2}
          speed={3}
          strokeWidth={1.6}
        />
      </div>
    </div>
  );
}
