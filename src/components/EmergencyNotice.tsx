import React from "react";
import { InfoOutlined } from "@mui/icons-material";
import { Reveal } from "./Reveal";

type EmergencyNoticeProps = {className?: string;};

export function EmergencyNotice({ className = "" }: EmergencyNoticeProps) {
  return (
    <Reveal className={className}>
      <aside role="note" aria-labelledby="emergency-heading" className="relative overflow-hidden rounded-2xl border border-heart-100 bg-white p-5 shadow-card">
        <div className="absolute inset-y-0 left-0 w-1 bg-heart-500" aria-hidden="true" />
        <div className="flex gap-4 pl-1">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-heart-50 text-heart-600">
            <InfoOutlined sx={{ fontSize: 21 }} />
          </span>
          <div>
            <h3 id="emergency-heading" className="font-display text-base font-extrabold text-navy-900">
              Medical Emergency?
            </h3>
            <p className="mt-1 text-[14.5px] leading-relaxed text-navy-600">
              If you are experiencing severe or sudden chest pain, difficulty breathing, fainting or other potentially serious
              symptoms, seek emergency medical care immediately rather than waiting for an outpatient appointment.
            </p>
          </div>
        </div>
      </aside>
    </Reveal>);

}