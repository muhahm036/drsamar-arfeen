import React from "react";
import { motion } from "framer-motion";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { ButtonLink } from "../ButtonLink";
import { WhatsAppButton } from "../WhatsAppButton";
import { ECGLineAnimation } from "../ECGLineAnimation";
import { DoctorProfile } from "./DoctorProfile";
import { siteConfig } from "../../data/siteConfig";
import { heroFocus, heroStatement } from "../../data/profile";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease }
});

export function Hero() {
  const { doctor } = siteConfig;
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_25%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-medical-600/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-500/15 blur-3xl" aria-hidden="true" />
      <ECGLineAnimation className="absolute inset-x-0 bottom-28 h-24 opacity-50 sm:bottom-32" tone="light" beats={4} speed={8} strokeWidth={1.3} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-36 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-44 lg:pt-40">
        <div className="lg:col-span-7">
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-teal-200 backdrop-blur">
            
            <span className="relative flex h-2 w-2">
              <span className="soft-ping absolute inline-flex h-full w-full rounded-full bg-heart-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-heart-500" />
            </span>
            Cardiologist · Interventional Cardiologist
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...rise(0.08)}
            className="mt-6 font-display text-[40px] font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-[68px]">
            
            Dr. Samar <span className="text-teal-300">Arfeen</span>
          </motion.h1>

          <motion.div {...rise(0.16)}>
            <p className="mt-4 text-[15px] font-bold tracking-wide text-teal-200 sm:text-base">{doctor.credentials}</p>
            <div className="mt-4 space-y-1">
              <p className="text-lg font-semibold sm:text-xl">{doctor.primaryTitle}</p>
              <p className="text-lg font-semibold text-navy-200 sm:text-xl">{doctor.secondaryTitle}</p>
            </div>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">{heroStatement}</p>
          </motion.div>

          <motion.div {...rise(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#appointment" size="lg" icon={<CalendarMonthOutlined sx={{ fontSize: 20 }} />}>
              Book an Appointment
            </ButtonLink>
            <WhatsAppButton size="lg" />
          </motion.div>

          <motion.ul {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px] font-medium text-navy-200" aria-label="Clinical focus">
            {heroFocus.map((f, i) =>
            <li key={f} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-heart-400" aria-hidden="true" />}
                {f}
              </li>
            )}
          </motion.ul>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2, ease }} className="lg:col-span-5">
          <DoctorProfile />
        </motion.div>
      </div>
    </section>);

}