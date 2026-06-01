import { ArrowRight } from "lucide-react";
import type { RefObject } from "react";

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
      <div id="horizontal-wrap" ref={horizontalWrapRef} className="horizontal-wrapper">
        <div id="horizontal-panel-0" className="horizontal-panel">
          <div id="panel-content-0" className="panel-content container">
            <span
              className="label"
              style={{ color: "var(--color-brand)", marginBottom: "1.5rem", display: "block" }}
            >
              My approach
            </span>
            <h2 className="heading-lg" style={{ maxWidth: "620px" }}>
              I find{" "}
              <span style={{ color: "var(--color-brand)", fontStyle: "italic" }}>friction.</span>
              <br />
              Then I fix it.
            </h2>
            <p
              className="body-text"
              style={{
                maxWidth: "460px",
                marginTop: "2rem",
                color: "var(--color-light-accent)",
              }}
            >
              高校2年のとき、学食システムの脆弱性に気づき、学校の事務を通じて制作会社へ報告した。後日、複数の指摘を確認した旨の返信をいただいた。セキュリティの知識以上に、自分が使うサービスに責任を持つ姿勢と、適切な手順で伝えることの重要性を学んだ。
            </p>
          </div>
        </div>

        <div id="horizontal-panel-1" className="horizontal-panel">
          <div id="panel-content-1" className="panel-content container">
            <span
              className="label"
              style={{
                color: "var(--color-brand)",
                marginBottom: "1.5rem",
                display: "block",
              }}
            >
              Recognition
            </span>
            <h2 className="heading-lg" style={{ maxWidth: "680px" }}>
              Two works.
              <br />
              One contest.{" "}
              <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>
                A first.
              </span>
            </h2>
            <p
              className="body-text"
              style={{
                maxWidth: "460px",
                marginTop: "2rem",
                color: "rgba(240,236,238,0.6)",
              }}
            >
              U-22プログラミング・コンテスト2025に2作品が同時に事前審査を通過。複数作品の同時通過は大会初と認識している。うち1作品は経済産業大臣賞〈テクノロジー部門〉とアクセンチュア賞を受賞し、もう1作品は現在も学校で実際に運用されている。
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <a
                href="https://u22procon.com/2025/report/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-brand)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  borderBottom: "1px solid var(--color-brand)",
                  paddingBottom: "0.1rem",
                }}
              >
                大会レポートを見る →
              </a>
            </div>
          </div>
        </div>

        <div id="horizontal-panel-2" className="horizontal-panel">
          <div
            id="panel-content-2"
            className="panel-content container"
            style={{ maxWidth: "700px" }}
          >
            <h2 className="heading-lg">
              Now see what
              <br />
              <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>
                I&apos;ve built.
              </span>
            </h2>
            <div style={{ marginTop: "3rem" }}>
              <button
                className="cta-button cta-button--light"
                onClick={() => scrollToSection("works")}
                type="button"
              >
                <span>View projects</span>
                <ArrowRight className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
