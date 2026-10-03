import React from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { aboutFacts, aboutParagraphs } from "../../data/profile";
import { images } from "../../data/images";

export function About() {
  const [lead, ...rest] = aboutParagraphs;
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal scale className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[28px] bg-navy-100 shadow-lift">
              <img src={images.clinicalDetail.src} alt={images.clinicalDetail.alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]" />
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {aboutFacts.map((f) =>
              <div key={f.label} className="rounded-2xl border border-navy-100 bg-surface p-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400">{f.label}</dt>
                  <dd className="mt-1.5 text-[14px] font-semibold leading-snug text-navy-900">{f.value}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading id="about-heading" eyebrow="Biography" title="About Dr. Samar Arfeen" />
          <Reveal>
            <p className="mt-8 font-display text-xl font-semibold leading-[1.55] text-navy-900 sm:text-[22px]">{lead}</p>
          </Reveal>
          <div className="mt-8 space-y-6 border-l-2 border-teal-100 pl-6 text-[17px] leading-[1.8] text-navy-700">
            {rest.map((p, i) =>
            <Reveal key={p} delay={0.04 * i}>
                <p>{p}</p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

}