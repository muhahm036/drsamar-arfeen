import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { academicIntro, academicItems } from "../../data/profile";

export function AcademicProfile() {
  return (
    <section id="academic" aria-labelledby="academic-heading" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading id="academic-heading" eyebrow="Medical Education" title="Academic & Teaching Profile" description={academicIntro} />
          <Reveal className="mt-10 rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">Academic progression</h3>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex-1 rounded-xl bg-surface p-4">
                <p className="text-[12.5px] font-bold text-medical-700">2021 – 2026</p>
                <p className="mt-1 text-[14.5px] font-semibold leading-snug text-navy-900">Assistant Professor of Cardiology</p>
              </div>
              <ArrowForward sx={{ fontSize: 20 }} className="shrink-0 text-heart-500" aria-hidden="true" />
              <div className="flex-1 rounded-xl bg-navy-900 p-4 text-white">
                <p className="text-[12.5px] font-bold text-teal-300">Sept 2026 – Present</p>
                <p className="mt-1 text-[14.5px] font-semibold leading-snug">Associate Professor of Cardiology</p>
              </div>
            </div>
          </Reveal>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {academicItems.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal as="li" key={a.title} delay={i * 0.06}>
                <article className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lift sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-500 group-hover:text-white">
                    <Icon sx={{ fontSize: 24 }} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{a.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{a.description}</p>
                </article>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}