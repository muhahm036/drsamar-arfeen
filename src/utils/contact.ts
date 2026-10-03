import { siteConfig } from "../data/siteConfig";
import { digitsOnly } from "./sanitize";

export type ContactKey = "phone" | "whatsapp" | "email" | "location" | "timings";

export function getPhoneHref(): string | null {
  const digits = digitsOnly(siteConfig.contact.phone);
  return digits.length >= 7 ? `tel:+${digits}` : null;
}

export function getEmailHref(): string | null {
  const email = siteConfig.contact.email.trim();
  return email.includes("@") ? `mailto:${email}` : null;
}

export function contactValue(key: ContactKey): {value: string;isPlaceholder: boolean;} {
  const raw = siteConfig.contact[key].trim();
  return raw ? { value: raw, isPlaceholder: false } : { value: siteConfig.placeholders[key], isPlaceholder: true };
}

export function getSiteUrl(): string {
  if (siteConfig.siteUrl) return siteConfig.siteUrl.replace(/\/$/, "");
  return typeof window !== "undefined" ? window.location.origin : "";
}