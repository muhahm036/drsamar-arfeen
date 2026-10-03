import type { JourneyItem } from "../types/content";

export const journey: JourneyItem[] = [
  {
    period: "2010 – 2011",
    title: "House Officer",
    description: "Rotations",
    tags: ["Oncology", "Pulmonology", "Medicine"],
  },
  {
    period: "2011 – 2013",
    title: "Medical Officer",
    subtitle: "Pediatric Medicine",
  },
  {
    period: "2013 – 2015",
    title: "Post Graduate Resident",
    subtitle: "Internal Medicine",
    organization: "Lahore General Hospital",
  },
  {
    period: "2015 – 2018",
    title: "Post Graduate Resident",
    subtitle: "Cardiology",
    organization: "Punjab Institute of Cardiology",
  },
  {
    period: "May 2019",
    title: "Fellowship Exit Examination",
    description: "Successfully completed Fellowship Exit Examination.",
    milestone: true,
  },
  {
    period: "2021 – 2026",
    title: "Assistant Professor of Cardiology",
    organization: "Abu Umara Medical and Dental College / Ali Fatima Hospital",
  },
  {
    period: "September 2026 – Present",
    title: "Associate Professor of Cardiology",
    organization: "Abu Umara Medical and Dental College / Ali Fatima Hospital",
    current: true,
  },
].reverse();
