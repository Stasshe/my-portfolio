"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { type RefObject, useState } from "react";

type SiteNavProps = {
  navRef?: RefObject<HTMLElement | null>;
  /** Pages without a transparent hero should render the nav background from the start. */
  solid?: boolean;
  menuOpen?: boolean;
  setMenuOpen?: (isOpen: boolean) => void;
};

const NAV_LINKS = [
  { href: "/products", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav({
  navRef,
  solid,
  menuOpen: menuOpenProp,
  setMenuOpen: setMenuOpenProp,
}: SiteNavProps) {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const menuOpen = menuOpenProp ?? menuOpenState;
  const setMenuOpen = setMenuOpenProp ?? setMenuOpenState;
  return (
    <>
      <nav ref={navRef} className={`nav${solid ? " scrolled" : ""}`}>
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
      </div>
    </>
  );
}
