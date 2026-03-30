import type { RefObject } from "react";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-deco hero-deco-1" />
      <div className="hero-deco hero-deco-2" />
      <div className="hero-deco hero-deco-3" />

      <div className="container hero-content">
        <span className="label hero-greeting">Portfolio of</span>

        <div className="hero-title-line">
          <span className="heading-xl hero-name">Sta</span>
          <span className="heading-xl hero-name-accent">ss</span>
          <span className="heading-xl hero-name">he</span>
        </div>

        <div className="hero-title-line" style={{ marginTop: "0.5rem" }}>
          <span
            className="heading-md"
            style={{ color: "var(--color-light-accent)", fontWeight: 300 }}
          >
            &mdash; design, craft & curiosity
          </span>
        </div>

        <p className="body-text hero-tagline">
          Building thoughtful digital experiences with care for detail, warmth, and a touch of
          playfulness.
        </p>
      </div>

      <div className="hero-scroll-indicator">
        <span className="label" style={{ fontSize: "0.6rem" }}>
          Scroll
        </span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
