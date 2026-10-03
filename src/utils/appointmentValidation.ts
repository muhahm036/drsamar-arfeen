import { format } from "date-fns";
import type { AppointmentErrors, AppointmentFormValues } from "../types/appointment";
import { digitsOnly } from "./sanitize";

const NAME_RE = /^[A-Za-z\u00C0-\u024F\u0600-\u06FF .'-]{2,80}$/;
const PHONE_RE = /^\+?[0-9\s()-]{10,20}$/;

function validPhone(v: string): boolean {
  const d = digitsOnly(v);
  return PHONE_RE.test(v.trim()) && d.length >= 10 && d.length <= 15;
}

export function todayISO(): string {
  return format(new Date(), "yyyy-MM-dd");
}

export function validateAppointment(v: AppointmentFormValues): AppointmentErrors {
  const e: AppointmentErrors = {};
  if (!v.fullName.trim()) e.fullName = "Please enter the patient's full name.";else
  if (!NAME_RE.test(v.fullName.trim())) e.fullName = "Use letters only (2–80 characters).";

  if (!v.phone.trim()) e.phone = "Please enter a phone number.";else
  if (!validPhone(v.phone)) e.phone = "Enter a valid phone number (10–15 digits).";

  if (!v.sameAsPhone) {
    if (!v.whatsapp.trim()) e.whatsapp = "Please enter a WhatsApp number.";else
    if (!validPhone(v.whatsapp)) e.whatsapp = "Enter a valid WhatsApp number.";
  }

  const age = Number(v.age);
  if (!v.age.trim()) e.age = "Please enter age.";else
  if (!Number.isInteger(age) || age < 1 || age > 120) e.age = "Enter an age between 1 and 120.";

  if (!v.gender) e.gender = "Please select gender.";
  if (!v.preferredDate) e.preferredDate = "Please choose a preferred date.";else
  if (v.preferredDate < todayISO()) e.preferredDate = "Please choose today or a future date.";
  if (!v.preferredTime) e.preferredTime = "Please choose a preferred time.";
  if (!v.consultationType) e.consultationType = "Please select new patient or follow-up.";
  if (!v.reason) e.reason = "Please select a reason for consultation.";
  if (v.message.length > 500) e.message = "Please keep the message under 500 characters.";
  if (!v.consent) e.consent = "Consent is required to prepare your request.";
  return e;
}