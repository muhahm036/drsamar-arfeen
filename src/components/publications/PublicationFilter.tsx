import React from "react";
import { motion } from "framer-motion";

type PublicationFilterProps = {
  years: number[];
  active: number | "all";
  counts: Record<string, number>;
  onChange: (year: number | "all") => void;
};

/** Horizontally swipeable year filter. */
export function PublicationFilter({ years, active, counts, onChange }: PublicationFilterProps) {
  const options: (number | "all")[] = ["all", ...years];
  return (
    <div className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="flex w-max gap-1 rounded-full border border-navy-100 bg-white p-1 shadow-card" role="group" aria-label="Filter publications by year">
        {options.map((o) => {
          const selected = active === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              aria-pressed={selected}
              className={`relative h-10 rounded-full px-4 text-sm font-semibold transition-colors sm:px-5 ${selected ? "text-white" : "text-navy-600 hover:text-navy-900"}`}>
              
              {selected &&
              <motion.span layoutId="pub-filter" className="absolute inset-0 rounded-full bg-navy-900" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
              }
              <span className="relative">
                {o === "all" ? "All" : o}
                <span className={`ml-1.5 text-xs ${selected ? "text-teal-300" : "text-navy-400"}`}>{counts[String(o)]}</span>
              </span>
            </button>);

        })}
      </div>
    </div>);

}