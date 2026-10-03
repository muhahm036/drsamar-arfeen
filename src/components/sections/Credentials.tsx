import React from "react";
import { Reveal } from "../Reveal";
import { credentials } from "../../data/profile";
import { siteConfig } from "../../data/siteConfig";

export function Credentials() {
  return (
    <Reveal className="mt-16">
      <div className="overflow-hidden rounded-[28px] bg-navy-900 text-white shadow-lift">
        <ul className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4" aria-label="Credentials">
          {credentials.map((c, i) =>
          <li key={c.abbr} className={`p-6 sm:p-7 ${i >= 2 ? "sm:border-t sm:border-white/10 lg:border-t-0" : ""}`}>
              <p className="font-display text-2xl font-extrabold tracking-tight text-white">{c.abbr}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-navy-200">{c.name}</p>
              <p className="mt-1 text-[12.5px] font-medium text-teal-300">{c.source}</p>
            </li>
          )}
        </ul>
        <div className="flex flex-col gap-3 border-t border-white/10 bg-white/[0.03] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-300">Professional Identity</p>
          <p className="text-[15px] font-semibold">
            {siteConfig.doctor.primaryTitle}
            <span className="mx-2 text-heart-400" aria-hidden="true">
              ·
            </span>
            <span className="block sm:inline">{siteConfig.doctor.secondaryTitle}</span>
          </p>
        </div>
      </div>
    </Reveal>);

}