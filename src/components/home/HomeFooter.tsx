import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";

type HomeFooterProps = {
  footerRef: RefObject<HTMLElement | null>;
  scrollToSection: (id: string) => void;
};

const navLinkStyle = {
  cursor: "pointer",
  display: "block",
  padding: "0.3rem 0",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  color: "rgba(240,236,238,0.6)",
  transition: "color 0.4s",
} as const;

export function HomeFooter({ footerRef, scrollToSection }: HomeFooterProps) {
  return (
    <footer ref={footerRef} className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-cta">
            <h2 id="footer-cta-title" className="heading-lg footer-cta-title">
              Let&apos;s work <span className="accent">together.</span>
            </h2>
            <div style={{ marginTop: "var(--space-md)" }}>
              <a href="mailto:hello@stasshe.com" className="cta-button cta-button--light">
                <span>Get in touch</span>
                <ArrowRight className="arrow" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Navigate</h4>
              <button type="button" style={navLinkStyle} onClick={() => scrollToSection("hero")}>
                Home
              </button>
              <button type="button" style={navLinkStyle} onClick={() => scrollToSection("works")}>
                Works
              </button>
              <button type="button" style={navLinkStyle} onClick={() => scrollToSection("about")}>
                About
              </button>
              <Link href="/products" style={navLinkStyle}>
                Products
              </Link>
            </div>
            <div className="footer-link-group">
              <h4>Social</h4>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">© 2025 Stasshe. All rights reserved.</span>
          <span className="label" style={{ color: "rgba(240,236,238,0.3)" }}>
            Built with care
          </span>
        </div>
      </div>
    </footer>
  );
}
