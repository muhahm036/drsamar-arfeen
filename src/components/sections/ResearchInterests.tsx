import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { researchInterests, researchIntro } from "../../data/researchInterests";

export function ResearchInterests() {
  return (
    <section id="research" aria-labelledby="research-heading" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="research-heading" eyebrow="Research Profile" title="Research & Academic Interests" description={researchIntro} />
        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {researchInterests.map((r, i) =>
          <motion.li
            key={r}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i % 4 * 0.05 }}
            className="group flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-card">
            
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-medical-50 font-display text-[12px] font-extrabold text-medical-700 transition group-hover:bg-medical-600 group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] font-semibold leading-snug text-navy-900">{r}</span>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}