import { ArrowRight } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-cta">
            <h2 id="footer-cta-title" className="heading-lg footer-cta-title">
              現場に向き合い、<span className="accent">使われ続ける</span>ものを。
            </h2>
            <div style={{ marginTop: "var(--space-md)" }}>
              <a href="mailto:hello@stasshe.com" className="cta-button cta-button--light">
                <span>Get in touch</span>
                <ArrowRight className="arrow" size={16} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Navigate</h4>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="footer-link-group">
              <h4>Connect</h4>
              <a href="https://github.com/Stasshe" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="mailto:hello@stasshe.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-name">石田尚幹</span>
          <span className="footer-copyright">© 2026 Stasshe — Portfolio</span>
        </div>
      </div>
    </footer>
  );
}
