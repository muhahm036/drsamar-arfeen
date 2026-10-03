export type ConsultationType = "New Patient" | "Follow-up" | "";

export type AppointmentFormValues = {
  fullName: string;
  phone: string;
  whatsapp: string;
  sameAsPhone: boolean;
  age: string;
  gender: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: ConsultationType;
  reason: string;
  message: string;
  consent: boolean;
  /** Honeypot field — must remain empty. */
  website: string;
};

export type AppointmentErrors = Partial<Record<keyof AppointmentFormValues, string>>;