import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsApp, LockOutlined, ErrorOutline } from "@mui/icons-material";
import { FormField } from "./FormField";
import { AppointmentConfirmation } from "./AppointmentConfirmation";
import { useAppointmentForm } from "./useAppointmentForm";
import { ButtonLink } from "../ButtonLink";
import { inputClass, inputStateClass } from "../../utils/formStyles";
import { todayISO } from "../../utils/appointmentValidation";
import { consultationReasons, genderOptions, timePreferences } from "../../data/appointment";
import type { AppointmentFormValues } from "../../types/appointment";

export function AppointmentForm() {
  const { values, errors, formError, message, setField, handleSubmit, editRequest, resetForm } = useAppointmentForm();

  const fieldProps = (key: keyof AppointmentFormValues) => ({
    id: `appt-${key}`,
    name: key,
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? `appt-${key}-error` : undefined,
    className: `${inputClass} ${inputStateClass(Boolean(errors[key]))}`
  });

  return (
    <div className="relative rounded-[28px] border border-navy-100 bg-white p-5 shadow-lift sm:p-8">
      <AnimatePresence mode="wait">
        {message ?
        <AppointmentConfirmation key="confirm" message={message} onEdit={editRequest} onReset={resetForm} /> :

        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Appointment request form">
          
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="appt-website">Website</label>
              <input id="appt-website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => setField("website", e.target.value)} />
            </div>

            <fieldset>
              <legend className="font-display text-lg font-bold text-navy-900">Patient details</legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FormField id="appt-fullName" label="Full Name" required error={errors.fullName} className="sm:col-span-2">
                  <input
                  {...fieldProps("fullName")}
                  type="text"
                  autoComplete="name"
                  maxLength={80}
                  value={values.fullName}
                  onChange={(e) => setField("fullName", e.target.value)}
                  placeholder="Patient's full name" />
                
                </FormField>
                <FormField id="appt-phone" label="Phone Number" required error={errors.phone}>
                  <input
                  {...fieldProps("phone")}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={20}
                  value={values.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  placeholder="+92 3XX XXXXXXX" />
                
                </FormField>
                <FormField id="appt-whatsapp" label="WhatsApp Number" required={!values.sameAsPhone} error={errors.whatsapp}>
                  <input
                  {...fieldProps("whatsapp")}
                  type="tel"
                  inputMode="tel"
                  maxLength={20}
                  disabled={values.sameAsPhone}
                  value={values.sameAsPhone ? values.phone : values.whatsapp}
                  onChange={(e) => setField("whatsapp", e.target.value)}
                  placeholder="+92 3XX XXXXXXX" />
                
                  <label className="mt-2 flex items-center gap-2 text-[13px] text-navy-600">
                    <input
                    type="checkbox"
                    checked={values.sameAsPhone}
                    onChange={(e) => setField("sameAsPhone", e.target.checked)}
                    className="h-4 w-4 rounded accent-teal-600" />
                  
                    Same as phone number
                  </label>
                </FormField>
                <FormField id="appt-age" label="Age" required error={errors.age}>
                  <input
                  {...fieldProps("age")}
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={120}
                  value={values.age}
                  onChange={(e) => setField("age", e.target.value.slice(0, 3))}
                  placeholder="Years" />
                
                </FormField>
                <FormField id="appt-gender" label="Gender" required error={errors.gender}>
                  <select {...fieldProps("gender")} value={values.gender} onChange={(e) => setField("gender", e.target.value)}>
                    <option value="">Select</option>
                    {genderOptions.map((g) =>
                  <option key={g}>{g}</option>
                  )}
                  </select>
                </FormField>
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-display text-lg font-bold text-navy-900">Appointment preferences</legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FormField id="appt-preferredDate" label="Preferred Date" required error={errors.preferredDate}>
                  <input {...fieldProps("preferredDate")} type="date" min={todayISO()} value={values.preferredDate} onChange={(e) => setField("preferredDate", e.target.value)} />
                </FormField>
                <FormField id="appt-preferredTime" label="Preferred Time" required error={errors.preferredTime}>
                  <select {...fieldProps("preferredTime")} value={values.preferredTime} onChange={(e) => setField("preferredTime", e.target.value)}>
                    <option value="">Select</option>
                    {timePreferences.map((t) =>
                  <option key={t}>{t}</option>
                  )}
                  </select>
                </FormField>

                <div className="sm:col-span-2">
                  <p id="appt-type-label" className="mb-1.5 text-[14px] font-semibold text-navy-800">
                    New Patient / Follow-up
                    <span className="ml-0.5 text-heart-600" aria-hidden="true">
                      *
                    </span>
                  </p>
                  <div
                  role="radiogroup"
                  aria-labelledby="appt-type-label"
                  aria-describedby={errors.consultationType ? "appt-consultationType-error" : undefined}
                  className="grid grid-cols-2 gap-3">
                  
                    {(["New Patient", "Follow-up"] as const).map((t, i) => {
                    const checked = values.consultationType === t;
                    return (
                      <label
                        key={t}
                        className={`flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 text-[15px] font-semibold transition focus-within:ring-4 focus-within:ring-teal-100 ${
                        checked ?
                        "border-teal-500 bg-teal-50 text-teal-800" :
                        errors.consultationType ?
                        "border-heart-300 text-navy-700" :
                        "border-navy-200 text-navy-700 hover:border-navy-300"}`
                        }>
                        
                          <input
                          id={i === 0 ? "appt-consultationType" : undefined}
                          type="radio"
                          name="consultationType"
                          value={t}
                          checked={checked}
                          onChange={() => setField("consultationType", t)}
                          className="sr-only" />
                        
                          <span className={`h-4 w-4 rounded-full ${checked ? "border-[5px] border-teal-600" : "border-2 border-navy-300"}`} aria-hidden="true" />
                          {t}
                        </label>);

                  })}
                  </div>
                  {errors.consultationType &&
                <p id="appt-consultationType-error" className="mt-1.5 text-[13px] font-medium text-heart-600" role="alert">
                      {errors.consultationType}
                    </p>
                }
                </div>

                <FormField id="appt-reason" label="Reason for Consultation" required error={errors.reason} className="sm:col-span-2">
                  <select {...fieldProps("reason")} value={values.reason} onChange={(e) => setField("reason", e.target.value)}>
                    <option value="">Select a reason</option>
                    {consultationReasons.map((r) =>
                  <option key={r}>{r}</option>
                  )}
                  </select>
                </FormField>
                <FormField
                id="appt-message"
                label="Additional Message"
                error={errors.message}
                hint={`${values.message.length}/500 · Please avoid sharing detailed medical history here.`}
                className="sm:col-span-2">
                
                  <textarea
                  {...fieldProps("message")}
                  rows={3}
                  maxLength={500}
                  value={values.message}
                  onChange={(e) => setField("message", e.target.value)}
                  placeholder="Anything helpful for scheduling" />
                
                </FormField>
              </div>
            </fieldset>

            <div className="mt-6">
              <label className="flex items-start gap-3 text-[14.5px] text-navy-700">
                <input
                id="appt-consent"
                type="checkbox"
                checked={values.consent}
                onChange={(e) => setField("consent", e.target.checked)}
                aria-invalid={Boolean(errors.consent) || undefined}
                aria-describedby={errors.consent ? "appt-consent-error" : undefined}
                className="mt-0.5 h-5 w-5 shrink-0 rounded accent-teal-600" />
              
                <span>
                  I agree to be contacted regarding my appointment request.
                  <span className="ml-0.5 text-heart-600" aria-hidden="true">
                    *
                  </span>
                </span>
              </label>
              {errors.consent &&
            <p id="appt-consent-error" className="mt-1.5 pl-8 text-[13px] font-medium text-heart-600" role="alert">
                  {errors.consent}
                </p>
            }
            </div>

            {formError &&
          <p className="mt-5 flex items-center gap-2 rounded-xl bg-heart-50 px-4 py-3 text-[14px] font-medium text-heart-700" role="alert">
                <ErrorOutline sx={{ fontSize: 18 }} />
                {formError}
              </p>
          }

            <div className="mt-6">
              <ButtonLink type="submit" variant="whatsapp" size="lg" fullWidth icon={<WhatsApp sx={{ fontSize: 20 }} />}>
                Request Appointment on WhatsApp
              </ButtonLink>
              <p className="mt-3 flex items-start justify-center gap-1.5 text-center text-[12.5px] text-navy-400">
                <LockOutlined sx={{ fontSize: 14 }} className="mt-0.5" />
                Your details are not stored on this website — they are only used to prepare your WhatsApp message.
              </p>
            </div>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}