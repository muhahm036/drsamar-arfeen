/**
 * Central configuration for Dr. Samar Arfeen's profile and contact details.
 * Leave a value empty until verified — empty values render as clearly-marked placeholders.
 */

/** WhatsApp number in international format, digits only. Leave empty until provided. */
export const WHATSAPP_NUMBER = "";

export const siteConfig = {
  /** Production domain, e.g. "https://www.example.com". Used for canonical URL & structured data. */
  siteUrl: "",
  doctor: {
    name: "Dr. Samar Arfeen",
    credentials: "MBBS, CHPE, FCPS (Cardiology), FSCAI",
    primaryTitle: "Associate Professor of Cardiology",
    secondaryTitle: "Consultant Interventional Cardiologist",
    /** Full URL of a verified professional portrait. Leave empty to show the placeholder frame. */
    portraitUrl: "/doctor_samar.jpg",
  },
  contact: {
    phone: "",
    whatsapp: WHATSAPP_NUMBER,
    email: "",
    location: "",
    timings: "",
  },
  placeholders: {
    phone: "[PHONE]",
    whatsapp: "[WHATSAPP]",
    email: "[EMAIL]",
    location: "[LOCATION]",
    timings: "[TIMINGS]",
  },
  /** Add only verified profile links, e.g. { label: "LinkedIn", url: "https://..." } */
  social: [] as { label: string; url: string }[],
};
