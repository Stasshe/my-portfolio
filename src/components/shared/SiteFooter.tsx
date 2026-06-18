import {
  containerClass,
  ctaArrowClass,
  ctaButtonClass,
  ctaContentClass,
  ctaLightClass,
  headingLgClass,
} from "@/lib/styles";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteFooter() {
  const footerLinkClass =
    "block py-[0.3rem] font-sans text-[0.9rem] text-white/60 transition-colors duration-[400ms] ease-out-expo hover:text-brand";

  return (
    <footer
      className="bg-dark py-[var(--space-xl)] pb-[var(--space-md)] text-white/85"
      id="contact"
    >
      <div className={containerClass}>
        <div className="mb-[var(--space-xl)] flex flex-wrap items-start justify-between gap-[var(--space-lg)]">
          <div className="max-w-[640px]">
            <h2
              id="footer-cta-title"
              className={`${headingLgClass} mb-[var(--space-md)] text-white`}
            >
              現場に向き合い、
              <span className="font-accent font-normal italic text-brand">使われ続ける</span>
              ものを。
            </h2>
            <div className="mt-[var(--space-md)]">
              <a href="mailto:hello@stasshe.com" className={`${ctaButtonClass} ${ctaLightClass}`}>
                <span className={ctaContentClass}>Get in touch</span>
                <ArrowRight className={ctaArrowClass} size={16} />
              </a>
            </div>
          </div>

          <div className="flex gap-[var(--space-xl)] max-md:gap-[var(--space-lg)]">
            <div>
              <h4 className="mb-[var(--space-sm)] font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-dark">
                Navigate
              </h4>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="mb-[var(--space-sm)] font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-dark">
                Connect
              </h4>
              <a
                href="https://github.com/Stasshe"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLinkClass}
              >
                GitHub
              </a>
              <a href="mailto:hello@stasshe.com" className={footerLinkClass}>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[var(--space-sm)] border-t border-line-dark pt-[var(--space-md)]">
          <span className="font-serif text-[1.7rem] font-bold text-white">石田尚幹</span>
          <span className="font-sans text-[0.72rem] tracking-[0.06em] text-muted-dark">
            © 2026 Stasshe — Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
