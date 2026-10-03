import React from "react";
import { motion } from "framer-motion";
import { FavoriteBorder, WhatsApp, PhoneOutlined } from "@mui/icons-material";
import { buildWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from "../../utils/whatsapp";
import { getPhoneHref } from "../../utils/contact";

type FloatItem = {label: string;href: string;external?: boolean;icon: React.ReactNode;className: string;};

export function FloatingContact() {
  const whatsapp = buildWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE);
  const phone = getPhoneHref();

  const items: FloatItem[] = [
  { label: "Appointment", href: "#appointment", icon: <FavoriteBorder sx={{ fontSize: 22 }} />, className: "bg-heart-500 hover:bg-heart-600" },
  {
    label: "WhatsApp",
    href: whatsapp ?? "#appointment",
    external: Boolean(whatsapp),
    icon: <WhatsApp sx={{ fontSize: 23 }} />,
    className: "bg-[#128C4A] hover:bg-[#0F7A40]"
  },
  ...(phone ? [{ label: "Call", href: phone, icon: <PhoneOutlined sx={{ fontSize: 21 }} />, className: "bg-navy-900 hover:bg-navy-800" }] : [])];


  return (
    <motion.ul
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40 hidden flex-col gap-2.5 md:flex"
      aria-label="Quick contact">
      
      {items.map((item) =>
      <li key={item.label}>
          <a
          href={item.href}
          {...item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}}
          className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lift transition focus-visible:ring-4 focus-visible:ring-teal-200 ${item.className}`}
          aria-label={item.label}>
          
            {item.icon}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.label}
            </span>
          </a>
        </li>
      )}
    </motion.ul>);

}