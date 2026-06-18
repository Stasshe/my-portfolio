import {
  bodyTextClass,
  containerClass,
  ctaButtonClass,
  ctaContentClass,
  ctaLightClass,
  ctaOutlineClass,
  labelClass,
} from "@/lib/styles";
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
      <section
        ref={heroRef}
        id="hero"
        className="hero-section relative overflow-hidden bg-dark pt-[clamp(3.25rem,6vh,5rem)] pb-[clamp(3rem,7vh,5rem)] text-white max-sm:pt-[clamp(4rem,10vh,5.75rem)]"
      >
        <div id="hero-content" className={`${containerClass} relative z-[1]`}>
          <h1 className="font-serif text-[clamp(2.5rem,8.2vw,7.75rem)] font-black leading-[0.98] tracking-[-0.02em] max-sm:text-[clamp(2.6rem,11vw,3.1rem)] max-sm:leading-[1.06] max-[380px]:text-[2.15rem]">
            <span id="hero-title-span-0" className="block whitespace-nowrap">
              <span className="text-brand">現場</span>に向き合い、
              <br />
              判断し、
            </span>
            <span id="hero-title-span-1" className="block whitespace-nowrap">
              <span className="text-brand">使われ続ける</span>
              <br />
              ものをつくる。
            </span>
          </h1>

          <div className="mt-[clamp(2.5rem,5vw,3.5rem)] grid grid-cols-[1fr_1.7fr] items-end gap-[clamp(2rem,5vw,3.5rem)] max-[900px]:grid-cols-1 max-[900px]:items-start max-[900px]:gap-7">
            <div
              id="hero-subtag"
              className="font-accent text-[1.05rem] leading-[1.6] text-muted-dark"
            >
              <span className="block text-white">No.01</span>
              <span className="block font-accent italic">
                A practice in restraint &amp; judgment
              </span>
            </div>

            <div>
              <p id="hero-tagline" className={`${bodyTextClass} max-w-[46em] text-white/80`}>
                身近な不便や制約を見つけ、実用性と保守性を重視して課題解決に取り組んできました。単に動くものを作るのではなく、実際の利用者が安心して使い続けられる状態まで設計することを大切にしています。
              </p>

              <div
                id="hero-actions"
                className="mt-[clamp(1.75rem,3vw,2.5rem)] flex flex-wrap gap-4"
              >
                <Link href="/products" className={`${ctaButtonClass} ${ctaLightClass}`}>
                  <span className={ctaContentClass}>View Products</span>
                </Link>
                <Link
                  href="/about"
                  className={`${ctaButtonClass} ${ctaLightClass} ${ctaOutlineClass}`}
                >
                  <span className={ctaContentClass}>Philosophy &amp; Background</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="hero-scroll-indicator"
          className="relative z-[1] mt-[clamp(2.5rem,5vh,3.5rem)] flex flex-col items-center gap-2 text-muted-dark max-sm:hidden"
        >
          <span className={labelClass}>Scroll</span>
          <div className="h-11 w-px bg-gradient-to-b from-brand to-transparent" />
        </div>
      </section>

      <section
        className="stat-bar border-b-2 border-dark bg-brand text-dark"
        aria-label="In numbers"
      >
        {/* Desktop / tablet: static wrapped row */}
        <div
          className={`${containerClass} hidden min-h-[76px] flex-wrap items-center gap-x-11 gap-y-4 py-0 sm:flex`}
        >
          <span className="stat-bar-lead font-accent text-base italic text-dark-accent">
            In numbers —
          </span>
          {STATS.map((stat) => (
            <span
              className="stat-bar-item inline-flex items-baseline gap-2 text-[1.05rem]"
              key={stat.label}
            >
              <b className="font-serif text-[1.6rem] font-black leading-none">{stat.value}</b>
              <span className="text-dark/80">{stat.label}</span>
            </span>
          ))}
        </div>

        {/* Mobile: fixed-height horizontal marquee (avoids vertical overflow) */}
        <div className="flex min-h-[76px] items-center overflow-hidden sm:hidden">
          {[0, 1].map((track) => (
            <div
              key={track}
              aria-hidden={track === 1}
              className="flex shrink-0 animate-stat-marquee items-center gap-x-8 whitespace-nowrap pr-8"
            >
              <span className="font-accent text-base italic text-dark-accent">In numbers —</span>
              {STATS.map((stat) => (
                <span
                  className="inline-flex items-baseline gap-2 text-[1.05rem]"
                  key={`${track}-${stat.label}`}
                >
                  <b className="font-serif text-[1.6rem] font-black leading-none">{stat.value}</b>
                  <span className="text-dark/80">{stat.label}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
