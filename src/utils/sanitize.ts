/** Removes control characters, markup-significant characters and collapses whitespace. */
export function sanitizeText(input: string, maxLength = 200): string {
  return input.
  replace(/[\u0000-\u001F\u007F]/g, " ").
  replace(/[<>`{}]/g, "").
  replace(/\s+/g, " ").
  trim().
  slice(0, maxLength);
}

/** Same as sanitizeText but preserves single line breaks. */
export function sanitizeMultiline(input: string, maxLength = 600): string {
  return input.
  replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, " ").
  replace(/[<>`{}]/g, "").
  replace(/[ \t]+/g, " ").
  replace(/\n{3,}/g, "\n\n").
  trim().
  slice(0, maxLength);
}

export function digitsOnly(input: string): string {
  return input.replace(/[^\d]/g, "");
}