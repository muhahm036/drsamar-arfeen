import React from "react";
import { motion } from "framer-motion";
import { SchoolOutlined } from "@mui/icons-material";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Credentials } from "./Credentials";
import { education } from "../../data/education";

export function EducationTimeline() {
  return (
    <section id="education" aria-labelledby="education-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="education-heading"
          eyebrow="Academic Record"
          title="Education & Qualifications"
          description="Medical degree, specialist training in cardiology and professional qualifications." />
        

        <ol className="relative mt-14 grid gap-4 md:grid-cols-5 md:gap-3">
          <motion.div
            className="absolute left-[23px] top-0 h-full w-0.5 origin-top bg-teal-200 md:left-0 md:top-[23px] md:h-0.5 md:w-full md:origin-left"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            aria-hidden="true" />
          
          {education.map((e, i) =>
          <Reveal as="li" key={`${e.period}-${e.title}`} delay={i * 0.1} className="relative pl-16 md:pl-0">
              <span className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-teal-300 md:relative">
                <SchoolOutlined sx={{ fontSize: 20 }} />
              </span>
              <div className="h-full rounded-2xl border border-navy-100 bg-surface p-5 transition hover:border-teal-200 hover:bg-white hover:shadow-card md:mt-5">
                <p className="text-[13px] font-bold text-medical-700">{e.period}</p>
                <h3 className="mt-2 font-display text-[16.5px] font-bold leading-snug text-navy-900">{e.title}</h3>
                <p className="mt-1.5 text-[14px] leading-snug text-navy-600">{e.institution}</p>
                {e.note && <p className="mt-1 text-[13px] italic text-navy-400">{e.note}</p>}
              </div>
            </Reveal>
          )}
        </ol>

        <Credentials />
      </div>
    </section>);

}