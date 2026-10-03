import { format, parseISO } from "date-fns";
import { WHATSAPP_NUMBER } from "../data/siteConfig";
import { digitsOnly, sanitizeMultiline, sanitizeText } from "./sanitize";
import type { AppointmentFormValues } from "../types/appointment";

export function isWhatsAppConfigured(): boolean {
  return digitsOnly(WHATSAPP_NUMBER).length >= 8;
}

export function buildWhatsAppUrl(message?: string): string | null {
  if (!isWhatsAppConfigured()) return null;
  return `https://wa.me/${digitsOnly(WHATSAPP_NUMBER)}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export const GENERAL_WHATSAPP_MESSAGE =
"Assalam-o-Alaikum, I would like to enquire about an appointment with Dr. Samar Arfeen.";

function formatDate(value: string): string {
  try {
    return format(parseISO(value), "EEEE, d MMMM yyyy");
  } catch {
    return sanitizeText(value, 20);
  }
}

export function buildAppointmentMessage(v: AppointmentFormValues): string {
  const lines = [
  "Assalam-o-Alaikum,",
  "",
  "I would like to request an appointment with Dr. Samar Arfeen.",
  "",
  `Patient Name: ${sanitizeText(v.fullName, 80)}`,
  `Age: ${sanitizeText(v.age, 3)}`,
  `Gender: ${sanitizeText(v.gender, 20)}`,
  `Phone: ${sanitizeText(v.phone, 20)}`,
  `WhatsApp: ${sanitizeText(v.sameAsPhone ? v.phone : v.whatsapp, 20)}`,
  `Preferred Date: ${formatDate(v.preferredDate)}`,
  `Preferred Time: ${sanitizeText(v.preferredTime, 30)}`,
  `Consultation Type: ${sanitizeText(v.consultationType, 20)}`,
  `Reason: ${sanitizeText(v.reason, 120)}`];

  if (v.message.trim()) lines.push(`Additional Message: ${sanitizeMultiline(v.message, 500)}`);
  lines.push("", "Please let me know the available appointment time.", "", "Thank you.");
  return lines.join("\n");
}