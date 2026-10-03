import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArticleOutlined, ExpandMore, OpenInNew } from "@mui/icons-material";
import type { Publication } from "../../types/content";

type PublicationCardProps = {publication: Publication;id: string;};

export function PublicationCard({ publication: p, id }: PublicationCardProps) {
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(p.note || p.doi);
  const citation = `Volume ${p.volume}, Issue ${p.issue}${p.pages ? `, pages ${p.pages}` : ""}`;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal-400 hover:shadow-lift sm:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-medical-50 text-medical-600 transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-medical-600 group-hover:text-white">
          <ArticleOutlined sx={{ fontSize: 22 }} />
        </span>
        <div className="min-w-0 flex-1">
          <span className="inline-flex rounded-full bg-navy-50 px-2.5 py-0.5 text-[12px] font-bold text-navy-700">{p.year}</span>
          <h4 className="mt-2 font-display text-[16.5px] font-bold leading-snug text-navy-900">{p.title}</h4>
        </div>
      </div>

      <dl className="mt-4 space-y-2.5 text-[14px] sm:pl-[60px]">
        <div>
          <dt className="sr-only">Authors</dt>
          <dd className="leading-relaxed text-navy-600">
            {p.authors.map((a, i) =>
            <React.Fragment key={a}>
                {a === "S. Arfeen" ? <strong className="font-semibold text-navy-900">{a}</strong> : a}
                {i < p.authors.length - 1 ? ", " : ""}
              </React.Fragment>
            )}
          </dd>
        </div>
        <div>
          <dt className="sr-only">Journal</dt>
          <dd className="font-semibold italic text-medical-700">{p.journal}</dd>
        </div>
        <div>
          <dt className="sr-only">Volume and issue</dt>
          <dd className="text-navy-500">{citation}</dd>
        </div>
      </dl>

      <AnimatePresence initial={false}>
        {open && hasDetails &&
        <motion.div
          id={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="overflow-hidden sm:pl-[60px]">
          
            <div className="mt-4 space-y-2 rounded-xl bg-surface p-4 text-[13.5px] leading-relaxed text-navy-600">
              {p.doi &&
            <p>
                  <span className="font-semibold text-navy-800">DOI: </span>
                  {p.doi}
                </p>
            }
              {p.note && <p>{p.note}</p>}
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5 sm:pl-[60px]">
        {p.doi &&
        <a
          href={`https://doi.org/${p.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-navy-900 px-4 text-[13px] font-semibold text-white transition hover:bg-medical-700"
          aria-label={`Read publication: ${p.title}`}>
          
            Read Publication
            <OpenInNew sx={{ fontSize: 15 }} />
          </a>
        }
        {hasDetails &&
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="inline-flex h-9 items-center gap-1 rounded-full px-3.5 text-[13px] font-semibold text-navy-700 ring-1 ring-inset ring-navy-200 transition hover:bg-navy-50">
          
            {open ? "Hide details" : "Record details"}
            <ExpandMore sx={{ fontSize: 18 }} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        }
      </div>
    </article>);

}