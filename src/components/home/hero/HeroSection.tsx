import Link from "next/link";
import type { RefObject } from "react";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

const STATS = [
  { value: "30+", label: "プロダクト開発" },
  { value: "2作品", label: "U-22 同時通過" },
  { value: "経産大臣賞", label: "+ アクセンチュア賞 同時受賞" },
];

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <>
      <section ref={heroRef} id="hero" className="hero-section">
        <div id="hero-content" className="container hero-content">
          <h1 className="hero-headline">
            <span id="hero-title-span-0" className="hero-headline-line">
              <span className="hero-headline-accent">現場</span>に向き合い、<br />判断し、
            </span>
            <span id="hero-title-span-1" className="hero-headline-line">
              <span className="hero-headline-accent">使われ続ける</span><br />ものをつくる。
            </span>
          </h1>

          <div className="hero-lower">
            <div id="hero-subtag" className="hero-index">
              <span className="hero-index-no font-accent">No.01</span>
              <span className="accent-italic hero-index-sub">
                A practice in restraint &amp; judgment
              </span>
            </div>

            <div className="hero-lower-right">
              <p id="hero-tagline" className="body-text hero-description">
                身近な不便や制約を見つけ、実用性と保守性を重視して課題解決に取り組んできました。単に動くものを作るのではなく、実際の利用者が安心して使い続けられる状態まで設計することを大切にしています。
              </p>

              <div id="hero-actions" className="hero-actions">
                <Link href="/products" className="cta-button cta-button--light">
                  <span>View Products</span>
                </Link>
                <Link href="/about" className="cta-button cta-button--light cta-button--outline">
                  <span>Philosophy &amp; Background</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="hero-scroll-indicator" className="hero-scroll-indicator">
          <span className="label">Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section >

      <section className="stat-bar" aria-label="In numbers">
        <div className="container stat-bar-inner">
          <span className="accent-italic stat-bar-lead">In numbers —</span>
          {STATS.map((stat) => (
            <span className="stat-bar-item" key={stat.label}>
              <b className="stat-bar-value font-serif">{stat.value}</b>
              <span className="stat-bar-label">{stat.label}</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
