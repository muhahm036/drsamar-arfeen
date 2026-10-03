import React from "react";
import { Reveal } from "../Reveal";
import { AnimatedHeart } from "../AnimatedHeart";
import { clinicalApproach, clinicalPillars } from "../../data/profile";

export function ClinicalApproach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <AnimatedHeart className="mx-auto h-20 w-20" showParticles={false} />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Clinical Approach</p>
          <h2 id="approach-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Approach to Cardiac Care
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-display text-xl font-semibold leading-[1.6] text-navy-700 sm:text-2xl">{clinicalApproach}</p>
        </Reveal>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {clinicalPillars.map((p, i) =>
          <Reveal as="li" key={p} delay={i * 0.06}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-navy-100 bg-surface p-4 text-left">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-[13px] font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-navy-800">{p}</span>
              </div>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}