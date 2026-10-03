import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, PhoneOutlined, ContentCopy, Check, EditOutlined, InfoOutlined, WhatsApp, Refresh } from "@mui/icons-material";
import { ButtonLink } from "../ButtonLink";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import { getPhoneHref } from "../../utils/contact";
import { siteConfig } from "../../data/siteConfig";

type AppointmentConfirmationProps = {
  message: string;
  onEdit: () => void;
  onReset: () => void;
};

export function AppointmentConfirmation({ message, onEdit, onReset }: AppointmentConfirmationProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(message);
  const phoneHref = getPhoneHref();

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="text-center">
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
        
        <CheckCircle sx={{ fontSize: 36 }} />
      </motion.span>
      <h3 ref={headingRef} tabIndex={-1} className="mt-5 font-display text-2xl font-extrabold text-navy-900 focus:outline-none">
        Appointment Request Prepared
      </h3>
      <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-navy-600">
        {whatsappUrl ?
        "WhatsApp has opened with your request. Please send the message — you will be contacted with available appointment times." :
        "Your appointment request message is ready. Please send it on WhatsApp to request an appointment."}
      </p>

      <div className="mt-6 rounded-2xl border border-navy-100 bg-surface p-4 text-left">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Message preview</p>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-navy-700 ring-1 ring-navy-200 transition hover:bg-white">
            
            {copied ? <Check sx={{ fontSize: 14 }} /> : <ContentCopy sx={{ fontSize: 14 }} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="max-h-56 overflow-auto whitespace-pre-wrap font-sans text-[13.5px] leading-relaxed text-navy-800">{message}</pre>
      </div>

      {!whatsappUrl &&
      <p className="mt-4 flex items-start gap-2 rounded-xl bg-navy-50 p-3 text-left text-[13px] text-navy-600">
          <InfoOutlined sx={{ fontSize: 17 }} className="mt-0.5 shrink-0" />
          The WhatsApp number ({siteConfig.placeholders.whatsapp}) has not been configured yet. Copy the message above and send it once
          the number is available.
        </p>
      }

      <div className={`mt-6 grid gap-2.5 ${phoneHref ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        <ButtonLink href={whatsappUrl ?? undefined} external disabled={!whatsappUrl} variant="whatsapp" fullWidth icon={<WhatsApp sx={{ fontSize: 19 }} />}>
          Open WhatsApp
        </ButtonLink>
        {phoneHref &&
        <ButtonLink href={phoneHref} variant="navy" fullWidth icon={<PhoneOutlined sx={{ fontSize: 18 }} />}>
            Call
          </ButtonLink>
        }
        <ButtonLink variant="outline" fullWidth icon={<Refresh sx={{ fontSize: 18 }} />} onClick={onReset}>
          New request
        </ButtonLink>
      </div>
      <button type="button" onClick={onEdit} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-600 hover:text-navy-900">
        <EditOutlined sx={{ fontSize: 16 }} />
        Edit request
      </button>
      <p className="mt-4 text-[12.5px] text-navy-400">This form creates an appointment request only. It is not an appointment confirmation.</p>
    </motion.div>);

}