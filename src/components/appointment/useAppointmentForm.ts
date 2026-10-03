import { useRef, useState, type FormEvent } from "react";
import type { AppointmentErrors, AppointmentFormValues } from "../../types/appointment";
import { validateAppointment } from "../../utils/appointmentValidation";
import { buildAppointmentMessage, buildWhatsAppUrl } from "../../utils/whatsapp";

const FIELD_ORDER: (keyof AppointmentFormValues)[] = [
"fullName",
"phone",
"whatsapp",
"age",
"gender",
"preferredDate",
"preferredTime",
"consultationType",
"reason",
"message",
"consent"];


const initialValues = (): AppointmentFormValues => ({
  fullName: "",
  phone: "",
  whatsapp: "",
  sameAsPhone: true,
  age: "",
  gender: "",
  preferredDate: "",
  preferredTime: "",
  consultationType: "",
  reason: "",
  message: "",
  consent: false,
  website: ""
});

const MIN_FILL_MS = 2500;
const RESUBMIT_COOLDOWN_MS = 4000;

export function useAppointmentForm() {
  const [values, setValues] = useState<AppointmentFormValues>(initialValues);
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const mountedAt = useRef(Date.now());
  const lastSubmit = useRef(0);

  function setField<K extends keyof AppointmentFormValues>(key: K, value: AppointmentFormValues[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (attempted) setErrors(validateAppointment(next));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAttempted(true);
    const now = Date.now();

    if (values.website) {
      setFormError("We couldn't process this request. Please try again.");
      return;
    }
    if (now - mountedAt.current < MIN_FILL_MS || now - lastSubmit.current < RESUBMIT_COOLDOWN_MS) {
      setFormError("Please take a moment to review your details, then submit again.");
      return;
    }
    lastSubmit.current = now;

    const errs = validateAppointment(values);
    setErrors(errs);
    const first = FIELD_ORDER.find((k) => errs[k]);
    if (first) {
      setFormError("Please review the highlighted fields.");
      document.getElementById(`appt-${first}`)?.focus();
      return;
    }
    setFormError(null);
    const text = buildAppointmentMessage(values);
    setMessage(text);
    const url = buildWhatsAppUrl(text);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }

  function editRequest() {
    setMessage(null);
  }

  function resetForm() {
    setValues(initialValues());
    setErrors({});
    setAttempted(false);
    setFormError(null);
    setMessage(null);
    mountedAt.current = Date.now();
  }

  return { values, errors, formError, message, setField, handleSubmit, editRequest, resetForm };
}