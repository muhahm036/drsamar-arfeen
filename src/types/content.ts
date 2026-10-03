import type { SvgIconComponent } from "@mui/icons-material";

export type NavItem = {label: string;id: string;};

export type Stat = {
  value?: number;
  suffix?: string;
  text?: string;
  title: string;
  description: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: SvgIconComponent;
};

export type Highlight = FeatureCard & {value?: number;suffix?: string;label?: string;};

export type Credential = {abbr: string;name: string;source: string;};

export type EducationItem = {
  period: string;
  title: string;
  institution: string;
  note?: string;
};

export type JourneyItem = {
  period: string;
  title: string;
  subtitle?: string;
  organization?: string;
  description?: string;
  tags?: string[];
  current?: boolean;
  milestone?: boolean;
};

export type PathwayStep = {label: string;title: string;text: string;};

export type ProcedureExperience = {
  institution: string;
  value: number;
  description: string;
  period: string;
  items: string[];
  tone: "navy" | "medical";
};

export type Publication = {
  year: number;
  title: string;
  authors: string[];
  journal: string;
  volume: string;
  issue: string;
  pages?: string;
  doi?: string;
  note?: string;
};