import React from "react";
import { Reveal } from "../Reveal";
import { StatValue } from "../StatValue";
import { snapshotStats } from "../../data/profile";

export function ProfessionalSnapshot() {
  return (
    <section aria-label="Professional snapshot" className="relative z-10 -mt-24 px-4 sm:px-6 lg:px-8">
      <ul className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {snapshotStats.map((s, i) =>
        <Reveal as="li" key={s.description} delay={i * 0.06} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <div className="group h-full rounded-2xl border border-navy-100 bg-white p-5 shadow-lift transition duration-300 hover:-translate-y-1 sm:p-6">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase leading-snug tracking-[0.14em] text-medical-700">{s.title}</p>
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-heart-500 transition group-hover:scale-150" aria-hidden="true" />
              </div>
              <p className="mt-3 font-display text-[30px] font-extrabold leading-none tracking-tight text-navy-900 lg:text-[26px] xl:text-[30px]">
                {s.value !== undefined ? <StatValue value={s.value} suffix={s.suffix} /> : s.text}
              </p>
              <p className="mt-3 text-[13.5px] leading-snug text-navy-500">{s.description}</p>
            </div>
          </Reveal>
        )}
      </ul>
      <p className="mx-auto mt-3 max-w-7xl text-center text-xs text-navy-400">
        Procedure figures refer to different institutions and periods and are shown separately.
      </p>
    </section>);

}