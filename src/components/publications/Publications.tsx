import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { PublicationFilter } from "./PublicationFilter";
import { PublicationCard } from "./PublicationCard";
import { publicationYears, publications } from "../../data/publications";

export function Publications() {
  const [year, setYear] = useState<number | "all">("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: publications.length };
    publicationYears.forEach((y) => c[String(y)] = publications.filter((p) => p.year === y).length);
    return c;
  }, []);

  const grouped = useMemo(() => {
    const years = year === "all" ? [...publicationYears] : [year];
    return years.map((y) => ({ year: y, items: publications.filter((p) => p.year === y) })).filter((g) => g.items.length);
  }, [year]);

  return (
    <section id="publications" aria-labelledby="publications-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="publications-heading"
            eyebrow="Peer-Reviewed Work"
            title="Research Publications"
            description={`${publications.length} cardiovascular research publications, listed with full titles and authorship.`} />
          
          <Reveal>
            <PublicationFilter years={publicationYears} active={year} counts={counts} onChange={setYear} />
          </Reveal>
        </div>

        <div className="mt-12 space-y-12">
          <AnimatePresence mode="popLayout">
            {grouped.map((g) =>
            <motion.div
              key={g.year}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}>
              
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="font-display text-3xl font-extrabold text-navy-900">{g.year}</h3>
                  <span className="h-px flex-1 bg-navy-100" aria-hidden="true" />
                  <span className="text-sm font-medium text-navy-400">
                    {g.items.length} {g.items.length === 1 ? "publication" : "publications"}
                  </span>
                </div>
                <ul className="grid items-stretch gap-4 lg:grid-cols-2">
                  {g.items.map((p, i) =>
                <li key={p.title}>
                      <PublicationCard publication={p} id={`pub-${g.year}-${i}`} />
                    </li>
                )}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="mt-10 text-center text-[13px] text-navy-400">
          “Read Publication” links are shown only where a verified DOI is available.
        </p>
      </div>
    </section>);

}