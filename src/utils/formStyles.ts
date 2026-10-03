export const inputClass =
"block w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-navy-900 placeholder:text-navy-300 shadow-sm transition focus:outline-none focus:ring-4 disabled:bg-navy-50";

export const inputStateClass = (hasError: boolean) =>
hasError ?
"border-heart-400 focus:border-heart-500 focus:ring-heart-100" :
"border-navy-200 hover:border-navy-300 focus:border-teal-500 focus:ring-teal-100";