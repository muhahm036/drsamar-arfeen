import React from "react";
import { useCountUp } from "../hooks/useCountUp";

type StatValueProps = {value: number;suffix?: string;className?: string;};

export function StatValue({ value, suffix = "", className = "" }: StatValueProps) {
  const { ref, value: current } = useCountUp(value);
  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={`${value.toLocaleString()}${suffix}`}>
      <span aria-hidden="true">
        {current.toLocaleString()}
        {suffix}
      </span>
    </span>);

}