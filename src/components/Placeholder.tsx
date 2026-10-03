import React from "react";

type PlaceholderProps = {value: string;isPlaceholder: boolean;light?: boolean;};

/** Renders configured contact info, or a clearly-marked placeholder token. */
export function Placeholder({ value, isPlaceholder, light = false }: PlaceholderProps) {
  if (!isPlaceholder) return <span>{value}</span>;
  return (
    <span
      className={`inline-flex rounded-md px-1.5 py-0.5 font-mono text-[13px] ${
      light ? "bg-white/10 text-navy-200" : "bg-navy-50 text-navy-500"}`
      }
      title="To be provided">
      
      {value}
    </span>);

}