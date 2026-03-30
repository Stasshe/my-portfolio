import Link from "next/link";
import { type RefObject } from "react";

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
          <div
            className="nav-logo"
            onClick={() => scrollToSection("hero")}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            Stasshe
          </div>

          <div className="nav-links">
            <span
              className="nav-link"
              onClick={() => scrollToSection("works")}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              Works
            </span>
            <span
              className="nav-link"
              onClick={() => scrollToSection("about")}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              About
            </span>
            <Link href="/products" className="nav-link">
              Products
            </Link>
          </div>

          <button
            className="nav-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span
              style={{
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <span
          className="nav-link"
          onClick={() => scrollToSection("hero")}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          Home
        </span>
        <span
          className="nav-link"
          onClick={() => scrollToSection("works")}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          Works
        </span>
        <span
          className="nav-link"
          onClick={() => scrollToSection("about")}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          About
        </span>
        <Link href="/products" className="nav-link" onClick={() => setMenuOpen(false)}>
          Products
        </Link>
      </div>
    </>
  );
}
