import React from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as = "h2",
  id
}: SectionHeadingProps) {
  const Heading = as;
  const centered = align === "center";
  const light = tone === "light";
  return (
    <Reveal className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow &&
      <p
        className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? "text-teal-300" : "text-teal-700"}`
        }>
        
          <svg viewBox="0 0 28 12" className="h-3 w-7" aria-hidden="true">
            <path
            d="M0 6 H8 L10 3 L12 6 H14 L15.5 0.5 L17.5 11.5 L19 6 H28"
            fill="none"
            stroke={light ? "#F36A74" : "#E63946"}
            strokeWidth="1.6"
            strokeLinejoin="round" />
          
          </svg>
          {eyebrow}
        </p>
      }
      <Heading
        id={id}
        className={`font-display text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px] ${
        light ? "text-white" : "text-navy-900"}`
        }>
        
        {title}
      </Heading>
      {description &&
      <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-navy-200" : "text-navy-600"}`}>
          {description}
        </p>
      }
    </Reveal>);

}