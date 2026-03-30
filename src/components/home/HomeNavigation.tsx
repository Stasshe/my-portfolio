import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";

type HomeNavigationProps = {
  navRef: RefObject<HTMLElement | null>;
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
};

export function HomeNavigation({
  navRef,
  menuOpen,
  setMenuOpen,
  scrollToSection,
}: HomeNavigationProps) {
  return (
    <>
      <nav ref={navRef} className="nav">
        <div className="nav-inner">
          <button type="button" className="nav-logo" onClick={() => scrollToSection("hero")}>
            Stasshe
          </button>

          <div className="nav-links">
            <button type="button" className="nav-link" onClick={() => scrollToSection("works")}>
              Works
            </button>
            <button type="button" className="nav-link" onClick={() => scrollToSection("about")}>
              About
            </button>
            <Link href="/products" className="nav-link">
              Products
            </Link>
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
        <button type="button" className="nav-link" onClick={() => scrollToSection("hero")}>
          Home
        </button>
        <button type="button" className="nav-link" onClick={() => scrollToSection("works")}>
          Works
        </button>
        <button type="button" className="nav-link" onClick={() => scrollToSection("about")}>
          About
        </button>
        <Link href="/products" className="nav-link" onClick={() => setMenuOpen(false)}>
          Products
        </Link>
      </div>
    </>
  );
}
