import React from "react";
import { ECGLineAnimation } from "./ECGLineAnimation";

type ECGDividerProps = {tone?: "teal" | "red" | "blue";background?: string;};

/** Subtle animated ECG rule used between selected sections. */
export function ECGDivider({ tone = "teal", background = "bg-white" }: ECGDividerProps) {
  return (
    <div className={`${background} px-4 sm:px-6 lg:px-8`} aria-hidden="true">
      <ECGLineAnimation className="mx-auto h-10 max-w-5xl opacity-60" tone={tone} beats={5} speed={10} strokeWidth={1.2} />
    </div>);

}