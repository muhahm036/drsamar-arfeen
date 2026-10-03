import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { pathwaySteps } from "../../data/interventional";

const HEART =
"M200 362 C130 322 72 262 72 190 C72 132 110 102 150 102 C176 102 192 114 200 132 C208 114 224 102 250 102 C290 102 328 132 328 190 C328 262 270 322 200 362 Z";
const AORTA = "M206 140 C206 72 244 40 290 40 C332 40 352 72 352 120 L352 392";
const LM = "M207 142 C214 152 222 160 230 165";
const LAD = "M230 165 C250 210 245 270 210 340";
const LCX = "M230 165 C280 175 315 205 318 250";
const RCA = "M196 146 C150 160 105 190 100 240 C98 280 140 320 185 345";
const CATHETER = "M352 392 L352 120 C352 72 332 40 290 40 C244 40 206 72 206 138 C206 148 214 156 226 163";
const ECG = "M96 196 H140 L146 188 L152 196 H160 L166 160 L173 222 L179 196 H196 L206 184 L216 196 H304";
const L = { x: 241, y: 209 };

/** Animated pathway: Assessment → Angiography → Diagnosis → PCI when indicated → Follow-up. */
export function CoronaryPathway() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-100px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || paused || reduce) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % pathwaySteps.length), 4200);
    return () => window.clearInterval(id);
  }, [inView, paused, reduce]);

  const show = (visible: boolean, delay = 0, duration = 1.2) => ({
    initial: false as const,
    animate: { pathLength: visible ? 1 : 0, opacity: visible ? 1 : 0 },
    transition: { pathLength: { duration, delay, ease: "easeInOut" }, opacity: { duration: 0.3, delay: visible ? delay : 0 } }
  });
  const fade = (visible: boolean, delay = 0) => ({
    initial: false as const,
    animate: { opacity: visible ? 1 : 0 },
    transition: { duration: 0.4, delay: visible ? delay : 0 }
  });

  const current = pathwaySteps[step];
  const arteries = step >= 1;
  const catheter = step >= 1 && step <= 3;
  const lesion = step === 2;
  const stented = step >= 3;

  return (
    <div ref={ref} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">
      <div className="relative mx-auto aspect-square w-full max-w-[400px]">
        <svg viewBox="40 20 340 380" className="h-full w-full" role="img" aria-labelledby="pathway-title pathway-desc">
          <title id="pathway-title">Simplified coronary care pathway illustration</title>
          <desc id="pathway-desc">
            Step {step + 1} of {pathwaySteps.length}: {current.title}. {current.text}
          </desc>
          <g className={step === 0 || step === 4 ? "heartbeat" : ""}>
            <path d={HEART} fill="#E63946" fillOpacity={0.1} stroke="#F36A74" strokeOpacity={0.7} strokeWidth={2} />
          </g>
          <path d={AORTA} fill="none" stroke="#2F4C74" strokeWidth={18} strokeLinecap="round" />
          <text x="300" y="28" fill="#97AFCD" fontSize="11" fontWeight={600}>
            Aorta
          </text>

          {/* Assessment ECG */}
          <motion.path d={ECG} fill="none" stroke="#63CFD9" strokeWidth={2} strokeLinejoin="round" {...show(step === 0, 0.1, 1)} />

          {/* Coronary arteries */}
          {[LM, LAD, LCX, RCA].map((d, i) =>
          <motion.path key={d} d={d} fill="none" stroke="#FCA0A7" strokeWidth={4} strokeLinecap="round" {...show(arteries, i * 0.12)} />
          )}
          <motion.g {...fade(arteries, 0.6)}>
            <text x="252" y="300" fill="#FFC8CC" fontSize="11" fontWeight={600}>
              LAD
            </text>
            <text x="300" y="268" fill="#FFC8CC" fontSize="11" fontWeight={600}>
              LCx
            </text>
            <text x="84" y="262" fill="#FFC8CC" fontSize="11" fontWeight={600}>
              RCA
            </text>
          </motion.g>

          <motion.path d={CATHETER} fill="none" stroke="#E2EAF3" strokeWidth={3} strokeLinecap="round" {...show(catheter, 0.2, 1.5)} />
          <motion.g {...fade(step === 1, 1.2)}>
            <text x="362" y="330" fill="#E2EAF3" fontSize="11" fontWeight={600} transform="rotate(-90 362 330)">
              Catheter
            </text>
          </motion.g>

          {/* Narrowing */}
          <motion.g {...fade(lesion, 0.3)}>
            <circle cx={L.x} cy={L.y} r={13} fill="none" stroke="#F5B83D" strokeWidth={1.5} className="pulse-ring" />
            <ellipse cx={L.x} cy={L.y} rx={5.5} ry={8} fill="#F5B83D" transform={`rotate(-5 ${L.x} ${L.y})`} />
            <text x={L.x + 16} y={L.y + 4} fill="#F5B83D" fontSize="11" fontWeight={700}>
              Narrowing
            </text>
          </motion.g>

          {/* Guidewire */}
          <motion.path
            d={LAD}
            fill="none"
            stroke="#C3D2E5"
            strokeWidth={1.2}
            initial={false}
            animate={{ pathLength: step === 3 ? 0.55 : 0, opacity: step === 3 ? 1 : 0 }}
            transition={{ pathLength: { duration: 0.9, delay: 0.3 }, opacity: { duration: 0.2 } }} />
          

          {/* Stent */}
          <motion.g
            initial={false}
            animate={{ opacity: stented ? 1 : 0, scale: stented ? 1 : 0.6 }}
            transition={{ duration: 0.5, delay: stented ? 0.6 : 0 }}
            style={{ transformOrigin: `${L.x}px ${L.y}px` }}>
            
            <g transform={`rotate(-5 ${L.x} ${L.y})`}>
              <rect x={L.x - 5} y={L.y - 14} width={10} height={28} rx={2} fill="none" stroke="#63CFD9" strokeWidth={1.6} />
              {[-8, -2, 4, 10].map((o) =>
              <path key={o} d={`M${L.x - 5} ${L.y + o - 3} L${L.x + 5} ${L.y + o + 3}`} stroke="#63CFD9" strokeWidth={1.1} />
              )}
            </g>
            <text x={L.x + 16} y={L.y + 4} fill="#63CFD9" fontSize="11" fontWeight={700}>
              Stent
            </text>
          </motion.g>

          {stented &&
          !reduce &&
          [LAD, LCX, RCA].flatMap((d, i) =>
          [0, 0.9].map((b) =>
          <circle key={`${i}-${b}`} r={2.6} fill="#CEF2F5">
                  <animateMotion dur="2s" repeatCount="indefinite" begin={`${b + i * 0.3}s`} path={d} />
                </circle>
          )
          )}
        </svg>
      </div>

      <div className="mt-2 min-h-[118px]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
              Step {step + 1} of {pathwaySteps.length}
            </p>
            <h4 className="mt-1.5 font-display text-lg font-bold text-white">{current.title}</h4>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-navy-200">{current.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 grid grid-cols-5 gap-1" role="group" aria-label="Pathway steps">
        {pathwaySteps.map((s, i) =>
        <button
          key={s.label}
          type="button"
          onClick={() => {
            setStep(i);
            setPaused(true);
          }}
          aria-pressed={step === i}
          className={`rounded-xl px-1 py-2.5 text-center transition ${step === i ? "bg-white/10" : "hover:bg-white/5"}`}>
          
            <span className="block h-1 overflow-hidden rounded-full bg-white/10">
              <span className={`block h-full rounded-full transition-all duration-500 ${i <= step ? "w-full bg-teal-400" : "w-0"}`} />
            </span>
            <span className={`mt-2 block text-[10.5px] font-semibold leading-tight sm:text-xs ${step === i ? "text-white" : "text-navy-300"}`}>
              {s.label}
            </span>
          </button>
        )}
      </div>
      <p className="mt-4 text-center text-[11.5px] text-navy-400">Simplified illustration for general education — not to scale.</p>
    </div>);

}