import React from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "navy" | "medical" | "outline" | "whatsapp" | "ghost" | "light" | "outlineLight";
type Size = "sm" | "md" | "lg";

type ButtonLinkProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  ariaLabel?: string;
  fullWidth?: boolean;
};

const VARIANTS: Record<Variant, string> = {
  primary: "bg-heart-500 text-white hover:bg-heart-600 shadow-[0_8px_22px_-10px_rgba(230,57,70,0.7)]",
  navy: "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_8px_20px_-10px_rgba(11,31,58,0.6)]",
  medical: "bg-medical-600 text-white hover:bg-medical-700 shadow-[0_8px_20px_-10px_rgba(23,105,170,0.6)]",
  outline: "bg-white text-navy-900 ring-1 ring-inset ring-navy-200 hover:ring-navy-300 hover:bg-navy-50",
  whatsapp: "bg-[#128C4A] text-white hover:bg-[#0F7A40] shadow-[0_8px_20px_-10px_rgba(18,140,74,0.6)]",
  ghost: "text-navy-800 hover:bg-navy-50",
  light: "bg-white text-navy-900 hover:bg-navy-50",
  outlineLight: "text-white ring-1 ring-inset ring-white/30 hover:bg-white/10"
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-[15px] gap-2",
  lg: "h-12 sm:h-[52px] px-6 text-base gap-2"
};

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  type = "button",
  disabled,
  className = "",
  icon,
  iconRight,
  ariaLabel,
  fullWidth
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-200 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? "w-full" : ""} ${className}`;
  const content =
  <>
      {icon && <span className="flex shrink-0 items-center">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex shrink-0 items-center">{iconRight}</span>}
    </>;

  const tap = disabled ? undefined : { scale: 0.97 };

  if (href && !disabled) {
    return (
      <motion.a
        whileTap={tap}
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...external ? { target: "_blank", rel: "noopener noreferrer" } : {}}>
        
        {content}
      </motion.a>);

  }
  return (
    <motion.button whileTap={tap} type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {content}
    </motion.button>);

}