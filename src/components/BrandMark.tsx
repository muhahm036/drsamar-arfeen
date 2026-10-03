import React from "react";

type BrandMarkProps = {className?: string;inverted?: boolean;};

export function BrandMark({ className = "h-10 w-10", inverted = false }: BrandMarkProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-xl ${
      inverted ? "bg-white/10 ring-1 ring-white/15" : "bg-navy-900"} ${
      className}`}
      aria-hidden="true">
      
      <svg viewBox="0 0 40 40" className="h-[70%] w-[70%]">
        <path
          d="M20 33 C12 27 6 22 6 15 C6 10.5 9.5 7 13.5 7 C16.4 7 18.6 8.6 20 11 C21.4 8.6 23.6 7 26.5 7 C30.5 7 34 10.5 34 15 C34 22 28 27 20 33 Z"
          fill="none"
          stroke="#E0314B"
          strokeWidth="2.2"
          strokeLinejoin="round" />
        
        <path
          d="M3 20 L12 20 L14.5 16.5 L17 20 L19 20 L21 12 L23.5 26 L25.5 20 L37 20"
          fill="none"
          stroke="#72CFD5"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round" />
        
      </svg>
    </span>);

}