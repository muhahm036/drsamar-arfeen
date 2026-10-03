import {
  AccessTimeOutlined,
  HubOutlined,
  BoltOutlined,
  WorkOutline,
  SchoolOutlined,
  ScienceOutlined,
  ArticleOutlined,
  MonitorHeartOutlined,
  WorkspacePremiumOutlined } from
"@mui/icons-material";
import type { Credential, FeatureCard, Highlight, Stat } from "../types/content";

export const heroStatement =
"Cardiologist and interventional cardiology specialist with extensive experience in coronary intervention, cardiac catheterization, acute cardiac care, medical education and cardiovascular research.";

export const heroFocus: string[] = ["Cardiology", "Interventional Cardiology", "Coronary Intervention"];

export const snapshotStats: Stat[] = [
{
  value: 3000,
  suffix: "+",
  title: "Diagnostic & Therapeutic Coronary Procedures",
  description: "More than 3,000 diagnostic and therapeutic coronary procedures at Punjab Institute of Cardiology."
},
{
  value: 900,
  suffix: "+",
  title: "Diagnostic & Therapeutic Coronary Procedures",
  description: "More than 900 diagnostic and therapeutic coronary procedures at Ali Fatima Hospital."
},
{ text: "Since 2015", title: "Cardiology Career", description: "Beginning with fellowship training in Cardiology." },
{ text: "2026", title: "FSCAI", description: "Society for Cardiovascular Angiography and Interventions, USA." },
{ text: "Associate Professor", title: "Cardiology", description: "Associate Professor of Cardiology." }];


export const aboutParagraphs: string[] = [
"Dr. Samar Arfeen is an Associate Professor of Cardiology and Consultant Interventional Cardiologist with professional experience spanning clinical cardiology, coronary intervention, acute cardiac care, medical education and cardiovascular research.",
"His career in cardiology began in 2015 with fellowship training in Cardiology at Punjab Institute of Cardiology, where he developed experience in the management of cardiovascular disease and coronary intervention.",
"Following his fellowship training, he became involved in emergency cardiac care and the Primary PCI team. He has subsequently performed more than 3,000 diagnostic and therapeutic coronary procedures at Punjab Institute of Cardiology.",
"Since 2021, he has also served as teaching faculty at Abu Umara Medical and Dental College / Ali Fatima Hospital, where he contributed to the development of cardiac catheterization services while continuing clinical cardiology, interventional procedures, undergraduate teaching and curriculum development.",
"His professional interests include coronary artery disease, acute coronary syndromes, primary PCI, percutaneous coronary intervention, coronary angiography, cardiac catheterization and cardiovascular risk assessment."];


export const aboutFacts: {label: string;value: string;}[] = [
{ label: "Credentials", value: "MBBS, CHPE, FCPS (Cardiology), FSCAI" },
{ label: "Current role", value: "Associate Professor of Cardiology" },
{ label: "Clinical role", value: "Consultant Interventional Cardiologist" },
{ label: "Cardiology since", value: "2015" }];


export const credentials: Credential[] = [
{ abbr: "MBBS", name: "Bachelor of Medicine, Bachelor of Surgery", source: "Faisalabad Medical University" },
{ abbr: "FCPS (Cardiology)", name: "Fellowship in Cardiology", source: "College of Physicians and Surgeons of Pakistan" },
{ abbr: "CHPE", name: "Certificate in Health Professions Education", source: "Superior University Lahore" },
{ abbr: "FSCAI", name: "Fellow of the Society for Cardiovascular Angiography and Interventions", source: "SCAI, USA" }];


export const academicIntro =
"In addition to clinical practice, Dr. Samar Arfeen is involved in undergraduate medical education, curriculum development, teaching and training of MBBS students.";

export const academicItems: FeatureCard[] = [
{ title: "Medical Education", description: "Teaching undergraduate medical students.", icon: SchoolOutlined },
{ title: "Curriculum Development", description: "Participation in development and delivery of medical education.", icon: ArticleOutlined },
{
  title: "Clinical Teaching",
  description: "Integrating clinical cardiology experience into undergraduate medical training.",
  icon: MonitorHeartOutlined
},
{
  title: "Health Professions Education",
  description: "Certificate in Health Professions Education obtained in 2026.",
  icon: WorkspacePremiumOutlined
}];


export const clinicalApproach =
"Effective cardiovascular care combines careful clinical assessment, evidence-informed decision making, appropriate diagnostic evaluation and clear communication with patients.";

export const clinicalPillars: string[] = [
"Careful clinical assessment",
"Evidence-informed decision making",
"Appropriate diagnostic evaluation",
"Clear communication with patients"];


export const highlights: Highlight[] = [
{
  label: "Since 2015",
  title: "Cardiology Since 2015",
  description: "Professional cardiology career beginning with fellowship training.",
  icon: AccessTimeOutlined
},
{
  value: 3000,
  suffix: "+",
  title: "3000+ Procedures",
  description: "More than 3,000 diagnostic and therapeutic coronary procedures at Punjab Institute of Cardiology.",
  icon: HubOutlined
},
{
  value: 900,
  suffix: "+",
  title: "900+ Procedures",
  description: "More than 900 diagnostic and therapeutic coronary procedures at Ali Fatima Hospital.",
  icon: HubOutlined
},
{ title: "Primary PCI Experience", description: "Experience as part of a Primary PCI team.", icon: BoltOutlined },
{
  title: "Academic Career",
  description: "Progression from Assistant Professor to Associate Professor of Cardiology.",
  icon: WorkOutline
},
{
  title: "Medical Education",
  description: "Experience in undergraduate teaching, curriculum development and clinical training.",
  icon: SchoolOutlined
},
{ title: "Research", description: "Multiple cardiovascular research publications.", icon: ScienceOutlined }];