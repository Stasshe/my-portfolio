"use client";

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

  return (
    <>
      <nav className={`nav theme-${resolvedTheme}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Stasshe
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/Stasshe"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-link--accent"
            >
              GitHub ↗
            </a>
          </div>

          <button
            className="nav-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {menuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://github.com/Stasshe"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link nav-link--accent"
        >
          GitHub ↗
        </a>
      </div>
    </>
  );
}
