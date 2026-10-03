import React from "react";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
};

export function FormField({ id, label, required, error, hint, className = "", children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[14px] font-semibold text-navy-800">
        {label}
        {required ?
        <span className="ml-0.5 text-heart-600" aria-hidden="true">
            *
          </span> :

        <span className="ml-1.5 text-xs font-normal text-navy-400">(optional)</span>
        }
      </label>
      {children}
      {error ?
      <p id={`${id}-error`} className="mt-1.5 text-[13px] font-medium text-heart-600" role="alert">
          {error}
        </p> :
      hint ?
      <p id={`${id}-hint`} className="mt-1.5 text-[12.5px] text-navy-400">
          {hint}
        </p> :
      null}
    </div>);

}