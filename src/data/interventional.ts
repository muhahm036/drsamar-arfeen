import type { PathwayStep, ProcedureExperience } from "../types/content";

export const interventionalSummary =
"Dr. Samar Arfeen has been involved in coronary intervention since his cardiology training and subsequent clinical practice, with experience in diagnostic and therapeutic coronary procedures, including elective and primary PCI.";

export const pathwaySteps: PathwayStep[] = [
{
  label: "Assessment",
  title: "Clinical assessment",
  text: "Clinical history, examination, ECG and non-invasive tests help define symptoms and cardiovascular risk."
},
{
  label: "Angiography",
  title: "Coronary angiography",
  text: "Where indicated, a thin catheter is guided through an artery at the wrist or groin; contrast dye and X-ray imaging show the coronary arteries."
},
{
  label: "Diagnosis",
  title: "Diagnosis",
  text: "Angiography shows whether, and where, a coronary artery is narrowed or blocked, guiding the treatment decision."
},
{
  label: "PCI if indicated",
  title: "PCI when indicated",
  text: "For appropriate patients, a guidewire, balloon and stent are used to open the narrowed artery and restore blood flow."
},
{
  label: "Follow-up",
  title: "Follow-up",
  text: "Ongoing review, medicines as prescribed and cardiovascular risk-factor management support long-term care."
}];


export const procedureExperience: ProcedureExperience[] = [
{
  institution: "Punjab Institute of Cardiology",
  value: 3000,
  description: "Diagnostic and therapeutic coronary procedures",
  period: "Cardiology training and subsequent practice, from 2015",
  items: ["Primary PCI team experience", "Emergency cardiac care", "Diagnostic coronary procedures", "Therapeutic coronary procedures"],
  tone: "navy"
},
{
  institution: "Ali Fatima Hospital",
  value: 900,
  description: "Diagnostic and therapeutic coronary procedures",
  period: "Faculty and clinical practice, since 2021",
  items: ["Elective PCI", "Primary PCI", "Diagnostic procedures", "Cardiac catheterization"],
  tone: "medical"
}];