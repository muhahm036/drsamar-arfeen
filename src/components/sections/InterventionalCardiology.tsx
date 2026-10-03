import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { CoronaryPathway } from "./CoronaryPathway";
import { interventionalSummary, pathwaySteps } from "../../data/interventional";

export function InterventionalCardiology() {
  return (
    <section id="experience" aria-labelledby="interventional-heading" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-teal-500/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-medical-600/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            id="interventional-heading"
            tone="light"
            eyebrow="Cardiology & Interventional Experience"
            title="Interventional Cardiology" />
          
          <Reveal>
            <p className="mt-4 font-display text-xl font-semibold text-teal-200 sm:text-2xl">
              Experience in Diagnostic and Therapeutic Coronary Intervention
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">{interventionalSummary}</p>
          </Reveal>

          <Reveal className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-300">Coronary care pathway</h3>
            <ol className="mt-4 flex flex-wrap items-center gap-2">
              {pathwaySteps.map((s, i) =>
              <li key={s.label} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[13.5px] font-semibold text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-[11px] font-bold text-navy-950">{i + 1}</span>
                    {s.title}
                  </span>
                  {i < pathwaySteps.length - 1 && <ArrowForward sx={{ fontSize: 16 }} className="text-navy-400" aria-hidden="true" />}
                </li>
              )}
            </ol>
          </Reveal>
        </div>
        <Reveal scale>
          <CoronaryPathway />
        </Reveal>
      </div>
    </section>);

}