export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const containerClass =
  "mx-auto w-full max-w-[var(--container-max)] px-[var(--container-pad)]";

export const sectionClass = "relative py-[var(--section-padding)]";

export const labelClass =
  "font-sans text-label font-medium uppercase leading-[1.4] tracking-[0.14em]";

export const headingXlClass =
  "font-serif text-heading-xl font-black leading-[0.98] tracking-[-0.02em]";

export const headingLgClass =
  "font-serif text-heading-lg font-bold leading-[1.18] tracking-[-0.01em]";

export const headingMdClass = "font-serif text-heading-md font-bold leading-[1.28]";

export const headingSmClass = "font-serif text-heading-sm font-bold leading-[1.3]";

export const bodyTextClass = "font-sans text-body-text leading-[1.95]";

export const bodyTextSmClass = "font-sans text-body-text-sm leading-[1.85]";

export const ctaButtonClass =
  "group relative inline-flex items-center gap-[0.65rem] overflow-hidden border-[1.5px] border-dark bg-transparent px-[1.7rem] py-[0.85rem] font-sans text-[0.75rem] font-medium uppercase tracking-[0.12em] text-dark transition-[color,border-color] duration-[400ms] ease-out-expo before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-brand before:transition-transform before:duration-500 before:ease-out-expo hover:border-dark hover:text-dark hover:before:scale-x-100";

export const ctaLightClass = "border-white/40 text-white hover:border-brand hover:text-dark";

export const ctaOutlineClass = "before:hidden hover:bg-brand";

export const ctaContentClass = "relative z-[1]";

export const ctaArrowClass =
  "relative z-[1] transition-transform duration-[400ms] ease-out-expo group-hover:translate-x-1";

export const inkLinkClass =
  "inline-block border-b-2 border-brand pb-0.5 font-sans text-[0.84rem] font-medium text-dark transition-opacity duration-[400ms] ease-out-expo hover:opacity-65";
