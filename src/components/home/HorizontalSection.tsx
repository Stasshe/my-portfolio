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
              Operating Model
            </span>
            <h2 className="heading-lg" style={{ maxWidth: "620px" }}>
              Constraints become
              <br />
              <span style={{ color: "var(--color-brand)", fontStyle: "italic" }}>
                product requirements.
              </span>
            </h2>
            <p
              className="body-text"
              style={{
                maxWidth: "560px",
                marginTop: "2rem",
                color: "var(--color-light-accent)",
              }}
            >
              端末の制約、短い準備期間、現場の例外処理、利用者の不安。実装前にそれらを整理し、機能の正しさだけでなく、変更しやすさと運用時の信頼性まで設計対象にします。
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
              Evidence
            </span>
            <h2 className="heading-lg" style={{ maxWidth: "680px" }}>
              Contest results
              <br />
              and live operation.{" "}
              <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>
                Both matter.
              </span>
            </h2>
            <p
              className="body-text"
              style={{
                maxWidth: "560px",
                marginTop: "2rem",
                color: "rgba(240,236,238,0.6)",
              }}
            >
              U-22プログラミング・コンテスト2025では、Pyxis-CodeCanvas と Celeritas
              の2作品が同時に事前審査を通過。Pyxis
              は経済産業大臣賞〈テクノロジー部門〉とアクセンチュア賞を受賞し、Celeritas
              は学校行事の運営システムとして実運用されています。
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
          <div id="panel-content-2" className="panel-content container">
            <span
              className="label"
              style={{
                color: "var(--color-brand)",
                marginBottom: "1.5rem",
                display: "block",
              }}
            >
              AI Era
            </span>
            <h2 className="heading-lg" style={{ maxWidth: "760px" }}>
              Code generation is fast.
              <br />
              <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>
                Context still decides quality.
              </span>
            </h2>
            <p
              className="body-text"
              style={{
                maxWidth: "620px",
                marginTop: "2rem",
                color: "rgba(240,236,238,0.6)",
              }}
            >
              AI
              に任せる部分と、人間が判断する部分を分ける。目的、利用者、過去の設計判断、将来の変更、性能と安全性のトレードオフを見て、生成されたコードを批判的に評価する側に立ちます。
            </p>
          </div>
        </div>

        <div id="horizontal-panel-3" className="horizontal-panel">
          <div
            id="panel-content-3"
            className="panel-content container"
            style={{ maxWidth: "700px" }}
          >
            <h2 className="heading-lg">
              Read the work,
              <br />
              <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>
                not just the claim.
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
