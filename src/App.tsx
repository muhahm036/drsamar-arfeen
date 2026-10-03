import React from "react";
import { MotionConfig } from "framer-motion";
import { usePageMeta } from "./hooks/usePageMeta";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingContact } from "./components/layout/FloatingContact";
import { MobileCTABar } from "./components/layout/MobileCTABar";
import { StructuredData } from "./components/layout/StructuredData";
import { Hero } from "./components/hero/Hero";
import { ProfessionalSnapshot } from "./components/sections/ProfessionalSnapshot";
import { About } from "./components/sections/About";
import { Expertise } from "./components/sections/Expertise";
import { InterventionalCardiology } from "./components/sections/InterventionalCardiology";
import { ProcedureExperience } from "./components/sections/ProcedureExperience";
import { ProfessionalJourney } from "./components/sections/ProfessionalJourney";
import { EducationTimeline } from "./components/sections/EducationTimeline";
import { AcademicProfile } from "./components/sections/AcademicProfile";
import { ClinicalApproach } from "./components/sections/ClinicalApproach";
import { ResearchInterests } from "./components/sections/ResearchInterests";
import { Publications } from "./components/publications/Publications";
import { ProfessionalHighlights } from "./components/sections/ProfessionalHighlights";
import { AppointmentSection } from "./components/appointment/AppointmentSection";
import { Contact } from "./components/sections/Contact";
import { ECGDivider } from "./components/ECGDivider";

export function App() {
  usePageMeta({
    title: "Dr. Samar Arfeen | Associate Professor of Cardiology & Consultant Interventional Cardiologist",
    description:
    "Dr. Samar Arfeen is an Associate Professor of Cardiology and Consultant Interventional Cardiologist with experience in coronary intervention, cardiac catheterization, acute cardiac care, medical education and cardiovascular research.",
    path: "/",
    type: "profile"
  });

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen w-full flex-col bg-white">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          
          Skip to content
        </a>
        <StructuredData />
        <Navbar />
        <main id="main" className="flex-1">
          <Hero />
          <ProfessionalSnapshot />
          <About />
          <Expertise />
          <InterventionalCardiology />
          <ProcedureExperience />
          <ProfessionalJourney />
          <EducationTimeline />
          <AcademicProfile />
          <ClinicalApproach />
          <ResearchInterests />
          <Publications />
          <ECGDivider />
          <ProfessionalHighlights />
          <AppointmentSection />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
        <MobileCTABar />
      </div>
    </MotionConfig>);

}