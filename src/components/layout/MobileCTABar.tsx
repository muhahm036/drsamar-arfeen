import React from "react";
import { CalendarMonthOutlined, WhatsApp, PhoneOutlined } from "@mui/icons-material";
import { buildWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from "../../utils/whatsapp";
import { getPhoneHref } from "../../utils/contact";

export function MobileCTABar() {
  const whatsapp = buildWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE);
  const phone = getPhoneHref();
  const base = "flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full text-[14px] font-semibold text-white";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-16px_rgba(11,31,58,0.35)] backdrop-blur-xl md:hidden">
      
      <div className="flex gap-2">
        <a href="#appointment" className={`${base} bg-heart-500`}>
          <CalendarMonthOutlined sx={{ fontSize: 18 }} />
          Book
        </a>
        <a
          href={whatsapp ?? "#appointment"}
          {...whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {}}
          className={`${base} bg-[#128C4A]`}>
          
          <WhatsApp sx={{ fontSize: 19 }} />
          WhatsApp
        </a>
        {phone &&
        <a href={phone} className={`${base} bg-navy-900`}>
            <PhoneOutlined sx={{ fontSize: 18 }} />
            Call
          </a>
        }
      </div>
    </nav>);

}