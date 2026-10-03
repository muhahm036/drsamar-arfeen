import {
  HubOutlined,
  PersonSearchOutlined,
  ShowChart,
  BoltOutlined,
  FavoriteBorder,
  LocalHospitalOutlined,
  SensorsOutlined,
  HealthAndSafetyOutlined,
  MonitorHeartOutlined } from
"@mui/icons-material";
import type { FeatureCard } from "../types/content";

export const expertise: FeatureCard[] = [
{
  title: "Interventional Cardiology",
  description: "Diagnostic and therapeutic catheter-based management of coronary disease.",
  icon: HubOutlined
},
{
  title: "Coronary Angiography",
  description: "Evaluation of coronary arteries through cardiac catheterization.",
  icon: PersonSearchOutlined
},
{
  title: "Percutaneous Coronary Intervention",
  description: "Catheter-based coronary intervention for appropriate patients.",
  icon: ShowChart
},
{
  title: "Primary PCI",
  description: "Emergency coronary intervention in appropriate acute myocardial infarction cases.",
  icon: BoltOutlined
},
{
  title: "Coronary Artery Disease",
  description: "Assessment and management of patients with coronary artery disease.",
  icon: FavoriteBorder
},
{
  title: "Acute Coronary Syndromes",
  description: "Clinical evaluation and management of acute coronary syndromes.",
  icon: LocalHospitalOutlined
},
{
  title: "Cardiac Catheterization",
  description: "Diagnostic and therapeutic cardiac catheterization procedures.",
  icon: SensorsOutlined
},
{
  title: "Preventive Cardiology",
  description: "Assessment of cardiovascular risk factors and prevention strategies.",
  icon: HealthAndSafetyOutlined
},
{
  title: "Clinical Cardiology",
  description: "Comprehensive cardiovascular assessment and management.",
  icon: MonitorHeartOutlined
}];