import React from "react";
import { motion } from "framer-motion";
import { WorkOutline, WorkspacePremiumOutlined } from "@mui/icons-material";
import { SectionHeading } from "../SectionHeading";
import { ECGLineAnimation } from "../ECGLineAnimation";
import { journey } from "../../data/journey";

function Connector({ flip = false, className = "" }: {flip?: boolean;className?: string;}) {
  return (
    <svg viewBox="0 0 48 16" className={`h-4 ${className}`} style={flip ? { transform: "scaleX(-1)" } : undefined} aria-hidden="true">
      <path d="M0 8 H14 L17 4 L20 8 H23 L25.5 1 L28.5 15 L31 8 H48" fill="none" stroke="#E63946" strokeOpacity="0.55" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>);

}

export function ProfessionalJourney() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="journey-heading"
          eyebrow="Career Timeline"
          title="Professional Journey"
          description="From house job and internal medicine training to interventional cardiology and academic cardiology."
          align="center" />
        
        <ECGLineAnimation className="mx-auto mt-8 h-8 max-w-md opacity-70" tone="red" beats={3} speed={6} strokeWidth={1.3} />

        <ol className="relative mt-12">
          <motion.div
            className="absolute bottom-6 left-[19px] top-6 w-0.5 origin-top bg-medical-200 md:left-1/2 md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            aria-hidden="true" />
          
          {journey.map((item, i) => {
            const right = i % 2 === 1;
            const Icon = item.milestone ? WorkspacePremiumOutlined : WorkOutline;
            return (
              <motion.li
                key={`${item.period}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative mb-6 last:mb-0 md:grid md:grid-cols-2 md:gap-24">
                
                <span
                  className={`absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full ring-4 ring-surface md:left-1/2 md:-translate-x-1/2 ${
                  item.current ? "bg-heart-500 text-white" : item.milestone ? "bg-teal-500 text-white" : "bg-navy-900 text-teal-300"}`
                  }
                  aria-hidden="true">
                  
                  {item.current && <span className="soft-ping absolute inset-0 rounded-full bg-heart-400" />}
                  <Icon sx={{ fontSize: 19 }} className="relative" />
                </span>

                <div className={`relative pl-16 md:pl-0 ${right ? "md:col-start-2" : ""}`}>
                  <Connector className="absolute left-10 top-8 w-5 md:hidden" />
                  <Connector
                    flip={!right}
                    className={`absolute top-8 hidden w-12 md:block ${right ? "-left-[3.75rem]" : "-right-[3.75rem]"}`} />
                  
                  <article
                    className={`rounded-2xl border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lift sm:p-6 ${
                    item.current ? "border-heart-200 shadow-lift" : "border-navy-100 shadow-card"} ${
                    right ? "" : "md:text-right"}`}>
                    
                    <div className={`flex flex-wrap items-center gap-2 ${right ? "" : "md:justify-end"}`}>
                      <span className="rounded-full bg-medical-50 px-2.5 py-1 text-[12.5px] font-bold text-medical-700">{item.period}</span>
                      {item.current &&
                      <span className="rounded-full bg-heart-50 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-heart-700">Current</span>
                      }
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-navy-900 sm:text-xl">{item.title}</h3>
                    {item.subtitle && <p className="mt-0.5 text-[15px] font-semibold text-teal-700">{item.subtitle}</p>}
                    {item.organization && <p className="mt-1 text-[15px] text-navy-600">{item.organization}</p>}
                    {item.description && <p className="mt-1 text-[14.5px] text-navy-600">{item.description}</p>}
                    {item.tags &&
                    <ul className={`mt-3 flex flex-wrap gap-2 ${right ? "" : "md:justify-end"}`}>
                        {item.tags.map((t) =>
                      <li key={t} className="rounded-full bg-surface px-3 py-1 text-[13px] font-medium text-navy-700 ring-1 ring-navy-100">
                            {t}
                          </li>
                      )}
                      </ul>
                    }
                  </article>
                </div>
              </motion.li>);

          })}
        </ol>
      </div>
    </section>);

}