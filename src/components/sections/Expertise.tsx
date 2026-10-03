import React from "react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { expertise } from "../../data/expertise";

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="expertise-heading"
          eyebrow="Clinical Focus"
          title="Areas of Expertise"
          description="Clinical and interventional cardiology, with a focus on coronary artery disease and catheter-based coronary care." />
        
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => {
            const Icon = e.icon;
            const featured = i === 0;
            return (
              <Reveal as="li" key={e.title} delay={i % 3 * 0.06}>
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7 ${
                  featured ? "border-navy-900 bg-navy-900 text-white" : "border-navy-100 bg-white shadow-card hover:border-teal-200"}`
                  }>
                  
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-teal-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-105 ${
                    featured ? "bg-white/10 text-teal-300" : "bg-medical-50 text-medical-600"}`
                    }>
                    
                    <Icon sx={{ fontSize: 24 }} />
                  </span>
                  <h3 className={`mt-5 font-display text-lg font-bold leading-snug ${featured ? "text-white" : "text-navy-900"}`}>{e.title}</h3>
                  <p className={`mt-2 text-[15px] leading-relaxed ${featured ? "text-navy-200" : "text-navy-600"}`}>{e.description}</p>
                </article>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}