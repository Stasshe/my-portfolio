import { type RefObject } from "react";

type HorizontalSectionProps = {
  horizontalRef: RefObject<HTMLElement | null>;
  horizontalWrapRef: RefObject<HTMLDivElement | null>;
  scrollToSection: (id: string) => void;
};

export function HorizontalSection({
  horizontalRef,
  horizontalWrapRef,
  scrollToSection,
}: HorizontalSectionProps) {
  return (
    <section ref={horizontalRef} className="horizontal-section">
      <div ref={horizontalWrapRef} className="horizontal-wrapper">
        <div className="horizontal-panel">
          <div className="panel-content container">
            <span
              className="label"
              style={{ color: "var(--color-brand)", marginBottom: "1.5rem", display: "block" }}
            >
              What I do
            </span>
            <h2 className="heading-lg" style={{ maxWidth: "600px" }}>
              I design &{" "}
              <span style={{ color: "var(--color-brand)", fontStyle: "italic" }}>
                build
              </span>{" "}
              things for the web.
            </h2>
            <p
              className="body-text"
              style={{
                maxWidth: "450px",
                marginTop: "2rem",
                color: "var(--color-light-accent)",
              }}
            >
              From concept to code, I craft interfaces that feel intuitive,
              expressive, and memorable.
            </p>
          </div>
        </div>

        <div className="horizontal-panel">
          <div className="panel-content container">
            <span
              className="label"
              style={{
                color: "var(--color-brand)",
                marginBottom: "1.5rem",
                display: "block",
              }}
            >
              My philosophy
            </span>
            <h2 className="heading-lg" style={{ maxWidth: "650px" }}>
              Less noise,
              <br />
              more{" "}
              <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>
                resonance.
              </span>
            </h2>
            <p
              className="body-text"
              style={{
                maxWidth: "400px",
                marginTop: "2rem",
                color: "rgba(240,236,238,0.6)",
              }}
            >
              I believe in design that breathes. Space is not emptiness &mdash; it
              is an invitation.
            </p>
          </div>
        </div>

        <div className="horizontal-panel">
          <div
            className="panel-content container"
            style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
          >
            <h2 className="heading-lg">
              Let&apos;s create something{" "}
              <span style={{ fontStyle: "italic" }}>beautiful.</span>
            </h2>
            <div style={{ marginTop: "3rem" }}>
              <button
                className="cta-button cta-button--light"
                onClick={() => scrollToSection("works")}
                type="button"
              >
                <span>View my work</span>
                <span className="arrow">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
