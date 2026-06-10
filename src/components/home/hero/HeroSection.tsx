import Link from "next/link";
import type { RefObject } from "react";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

const HIGHLIGHTS = [
  {
    value: "30+",
    label: "Products shipped",
    detail: "ブラウザIDE、学校行事運営システムなどを継続的に開発。",
  },
  {
    value: "2 / 2",
    label: "U-22 2025 — Double pass",
    detail: "Pyxis-CodeCanvas と Celeritas が同時に事前審査通過（大会初）。",
  },
  {
    value: "2",
    label: "Awards — Pyxis-CodeCanvas",
    detail: "経済産業大臣賞〈テクノロジー部門〉/ アクセンチュア賞 同時受賞。",
  },
  {
    value: "2",
    label: "Schools, in production",
    detail: "Pyxis と Celeritas が学校現場で実際に稼働中。",
  },
];

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section ref={heroRef} id="hero" className="hero-section">
      <div className="hero-grid-lines" aria-hidden="true" />

      <div id="hero-content" className="container hero-content">
        <div className="hero-main">
          <span id="hero-greeting" className="label hero-eyebrow">
            Software Builder — Context-Driven Engineering
          </span>

          <h1 className="hero-name">
            <span id="hero-title-span-0" className="hero-name-line">
              Naoki Ishida
            </span>
            <span id="hero-title-span-1" className="hero-name-handle font-mono">
              Stasshe
            </span>
          </h1>

          <p id="hero-subtag" className="heading-md hero-statement">
            身近な不便や制約を見つけ、<span className="accent">使い続けられる</span>
            形まで設計する。
          </p>

          <p id="hero-tagline" className="body-text hero-description">
            TypeScript・React・Next.js
            を中心に、ブラウザ上で動く開発環境や学校現場の運営システムを開発。実装だけでなく、要件・設計・UX・運用までを一続きの問題として扱います。
          </p>

          <div id="hero-actions" className="hero-actions">
            <Link href="/products" className="cta-button">
              <span>View Products</span>
            </Link>
            <Link href="/about" className="cta-button cta-button--outline">
              <span>Philosophy &amp; Background</span>
            </Link>
          </div>
        </div>

        <div id="hero-panel" className="hero-panel" aria-label="Highlights">
          {HIGHLIGHTS.map((item) => (
            <div className="hero-stat" key={item.label}>
              <span className="hero-stat-value font-serif">{item.value}</span>
              <span className="hero-stat-label label">{item.label}</span>
              <p className="hero-stat-detail body-text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="hero-scroll-indicator" className="hero-scroll-indicator">
        <span className="label">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
