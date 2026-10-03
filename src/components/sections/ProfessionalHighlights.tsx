import React from "react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { StatValue } from "../StatValue";
import { highlights } from "../../data/profile";

export function ProfessionalHighlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-heading" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-medical-600/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="highlights-heading" tone="light" eyebrow="At a Glance" title="Professional Highlights" align="center" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            const wide = i === 0;
            return (
              <Reveal as="li" key={h.title} delay={i % 4 * 0.06} className={wide ? "sm:col-span-2 lg:col-span-1" : ""}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:bg-white/[0.07]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-300 transition group-hover:bg-teal-500 group-hover:text-white">
                      <Icon sx={{ fontSize: 22 }} />
                    </span>
                    {h.value !== undefined &&
                    <span className="font-display text-3xl font-extrabold text-white">
                        <StatValue value={h.value} suffix={h.suffix} />
                      </span>
                    }
                    {h.label && <span className="font-display text-xl font-extrabold text-white">{h.label}</span>}
                  </div>
                  <h3 className="mt-5 font-display text-[17px] font-bold text-white">{h.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-navy-200">{h.description}</p>
                </article>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}