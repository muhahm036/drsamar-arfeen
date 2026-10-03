import React from "react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { EmergencyNotice } from "../EmergencyNotice";
import { AppointmentForm } from "./AppointmentForm";
import { bookingSteps } from "../../data/appointment";

export function AppointmentSection() {
  return (
    <section id="appointment" aria-labelledby="appointment-heading" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,#000_20%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="appointment-heading"
            eyebrow="Patient Appointment"
            title="Book an Appointment"
            description="Request a consultation with Dr. Samar Arfeen for cardiovascular assessment and management." />
          
          <ol className="mt-10 space-y-4">
            {bookingSteps.map((s, i) =>
            <Reveal as="li" key={s.title} delay={i * 0.06} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[15.5px] font-semibold text-navy-900">{s.title}</h3>
                  <p className="text-[14.5px] text-navy-600">{s.text}</p>
                </div>
              </Reveal>
            )}
          </ol>
          <EmergencyNotice className="mt-10" />
        </div>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <AppointmentForm />
        </Reveal>
      </div>
    </section>);

}