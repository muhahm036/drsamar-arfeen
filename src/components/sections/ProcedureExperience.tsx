import React from "react";
import { CheckCircleOutline, AccessTimeOutlined } from "@mui/icons-material";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { StatValue } from "../StatValue";
import { ECGLineAnimation } from "../ECGLineAnimation";
import { procedureExperience } from "../../data/interventional";

export function ProcedureExperience() {
  return (
    <section aria-labelledby="procedures-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="procedures-heading"
          eyebrow="Procedural Experience"
          title="Coronary Procedure Experience"
          description="Documented procedural experience, shown separately for each institution and period."
          align="center" />
        
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {procedureExperience.map((p, i) =>
          <Reveal key={p.institution} delay={i * 0.08} scale>
              <article
              className={`relative h-full overflow-hidden rounded-[28px] p-7 text-white shadow-lift sm:p-10 ${p.tone === "navy" ? "bg-navy-900" : "bg-medical-700"}`}>
              
                <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
                <ECGLineAnimation className="absolute inset-x-0 top-[38%] h-20 opacity-25" tone="light" beats={3} speed={6} />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">Experience associated with</p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-[28px]">{p.institution}</h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] text-navy-200">
                    <AccessTimeOutlined sx={{ fontSize: 16 }} />
                    {p.period}
                  </p>
                  <div className="mt-10">
                    <p className="text-sm font-semibold text-navy-200">More than</p>
                    <p className="font-display text-6xl font-extrabold leading-none tracking-tight sm:text-7xl">
                      <StatValue value={p.value} suffix="+" />
                    </p>
                    <p className="mt-3 text-[15px] font-medium text-white/90">{p.description}</p>
                  </div>
                  <ul className="mt-8 grid gap-2.5 border-t border-white/15 pt-6 sm:grid-cols-2">
                    {p.items.map((item) =>
                  <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-white/90">
                        <CheckCircleOutline sx={{ fontSize: 18 }} className="shrink-0 text-teal-300" />
                        {item}
                      </li>
                  )}
                  </ul>
                </div>
              </article>
            </Reveal>
          )}
        </div>
        <p className="mt-5 text-center text-[13px] text-navy-400">
          The two figures relate to different institutions and periods and are not combined.
        </p>
      </div>
    </section>);

}