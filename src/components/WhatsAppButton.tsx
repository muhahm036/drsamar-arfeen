import React from "react";
import { WhatsApp } from "@mui/icons-material";
import { ButtonLink } from "./ButtonLink";
import { buildWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from "../utils/whatsapp";

type WhatsAppButtonProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "whatsapp" | "outline" | "outlineLight";
  className?: string;
  fullWidth?: boolean;
};

/** Opens WhatsApp when the number is configured; otherwise scrolls to the WhatsApp appointment form. */
export function WhatsAppButton({ label = "WhatsApp", size = "md", variant = "whatsapp", className, fullWidth }: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE);
  return (
    <ButtonLink
      href={url ?? "#appointment"}
      external={Boolean(url)}
      variant={variant}
      size={size}
      icon={<WhatsApp sx={{ fontSize: size === "sm" ? 17 : 20 }} />}
      className={className}
      fullWidth={fullWidth}>
      
      {label}
    </ButtonLink>);

}