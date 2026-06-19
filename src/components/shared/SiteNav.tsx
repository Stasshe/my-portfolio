"use client";

import { cx } from "@/lib/styles";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type SiteNavProps = {
  /** Inner pages start on a white background and use the light header. */
  solid?: boolean;
  /** Explicit theme override. Defaults to "light" unless set to "dark" (used over the dark hero). */
  theme?: "dark" | "light";
  menuOpen?: boolean;
  setMenuOpen?: (isOpen: boolean) => void;
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav({
  solid,
  theme,
  menuOpen: menuOpenProp,
  setMenuOpen: setMenuOpenProp,
}: SiteNavProps) {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const menuOpen = menuOpenProp ?? menuOpenState;
  const setMenuOpen = setMenuOpenProp ?? setMenuOpenState;
  const resolvedTheme = theme ?? (solid ? "light" : "light");
  const isDark = resolvedTheme === "dark";
  const navLinkClass =
    "relative cursor-pointer py-1 font-sans text-[0.78rem] font-medium uppercase tracking-[0.1em] text-inherit transition-colors duration-[400ms] ease-out-expo after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-[width] after:duration-[400ms] after:ease-out-expo hover:after:w-full";

  return (
    <>
      <nav
        className={cx(
          "fixed left-0 top-0 z-[1000] w-full border-b",
          isDark ? "border-line-dark bg-dark text-white" : "border-line bg-light text-dark",
        )}
      >
        <div className="mx-auto flex h-[var(--nav-h)] max-w-[var(--container-max)] items-center justify-between px-[var(--container-pad)]">
          <Link
            href="/"
            className="cursor-pointer font-serif text-[1.2rem] font-bold tracking-[0.01em] text-inherit transition-opacity duration-[400ms] ease-out-expo hover:opacity-60"
          >
            石田尚幹/Stasshe
          </Link>

          <div className="hidden items-center gap-[1.9rem] md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/Stasshe"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(navLinkClass, isDark ? "text-brand" : "text-dark-accent")}
            >
              GitHub ↗
            </a>
          </div>

          <button
            className="relative z-[1001] flex cursor-pointer items-center justify-center p-1 text-inherit md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {menuOpen ? (
              <X className="h-6 w-6 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>
      <div className="h-[var(--nav-h)]" aria-hidden="true" />

      <div
        className={cx(
          "fixed inset-0 z-[999] flex flex-col items-center justify-center gap-[1.8rem] bg-dark text-white transition-opacity duration-[400ms] md:hidden",
          menuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cx(navLinkClass, "text-[1.1rem]")}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://github.com/Stasshe"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(navLinkClass, "text-[1.1rem] text-brand")}
        >
          GitHub ↗
        </a>
      </div>
    </>
  );
}
