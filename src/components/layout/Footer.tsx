import React from "react";
import { BrandMark } from "../BrandMark";
import { ECGLineAnimation } from "../ECGLineAnimation";
import { navItems } from "../../data/navigation";
import { siteConfig } from "../../data/siteConfig";

export function Footer() {
  const { doctor, social } = siteConfig;
  return (
    <footer className="relative overflow-hidden bg-navy-950 pb-24 text-navy-200 md:pb-0">
      <ECGLineAnimation className="absolute inset-x-0 top-0 h-12 opacity-40" tone="light" beats={6} speed={14} strokeWidth={1.2} />
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <BrandMark inverted className="h-12 w-12 shrink-0" />
            <div>
              <p className="font-display text-xl font-extrabold uppercase tracking-[0.06em] text-white">{doctor.name}</p>
              <p className="mt-1 text-sm font-semibold text-teal-300">{doctor.credentials}</p>
              <p className="mt-2 text-[14.5px] text-navy-300">
                {doctor.primaryTitle}
                <span className="mx-2 text-navy-500" aria-hidden="true">
                  ·
                </span>
                {doctor.secondaryTitle}
              </p>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:max-w-md lg:justify-end">
              {navItems.map((n) =>
              <li key={n.id}>
                  <a href={`#${n.id}`} className="text-[14.5px] text-navy-200 transition hover:text-white">
                    {n.label}
                  </a>
                </li>
              )}
            </ul>
            {social.length > 0 &&
            <ul className="mt-5 flex flex-wrap gap-2 lg:justify-end">
                {social.map((s) =>
              <li key={s.url}>
                    <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center rounded-full px-4 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/10">
                  
                      {s.label}
                    </a>
                  </li>
              )}
              </ul>
            }
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl text-[13px] leading-relaxed text-navy-400">
            Information on this website is provided for general educational purposes and does not replace professional medical
            advice, diagnosis or treatment.
          </p>
          <p className="shrink-0 text-[13px] text-navy-400">© 2026 Dr. Samar Arfeen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>);

}