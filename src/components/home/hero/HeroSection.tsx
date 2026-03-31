import type { RefObject } from "react";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div
        className="hero-deco hero-deco-1 absolute rounded-full pointer-events-none opacity-10 w-[600px] h-[600px] bg-[var(--color-brand)] -top-[200px] -right-[200px]"
      />
      <div
        className="hero-deco hero-deco-2 absolute rounded-full pointer-events-none opacity-10 w-[400px] h-[400px] bg-[var(--color-dark-accent)] -bottom-[100px] -left-[100px]"
      />
      <div
        className="hero-deco hero-deco-3 absolute rounded-full pointer-events-none opacity-10 w-[200px] h-[200px] bg-[var(--color-dark)] top-[30%] right-[15%]"
      />

      <div className="container hero-content relative z-10 py-32">
        <span className="label hero-greeting text-[var(--color-light-accent)] mb-8 block">Portfolio of</span>

        <div className="hero-title-line overflow-hidden">
          <span className="heading-xl hero-name inline-block">Sta</span>
          <span className="heading-xl hero-name-accent inline-block text-[var(--color-brand)] italic">ss</span>
          <span className="heading-xl hero-name inline-block">he</span>
        </div>

        <div className="hero-title-line mt-2">
          <span className="heading-md text-[var(--color-light-accent)] font-[300]">
            &mdash; design, craft & curiosity
          </span>
        </div>

        <p className="body-text hero-tagline mt-16 text-[var(--color-light-accent)] max-w-[500px]">
          Building thoughtful digital experiences with care for detail, warmth, and a touch of
          playfulness.
        </p>
      </div>

      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-light-accent)]">
        <span className="label text-[0.6rem]">Scroll</span>
        <div className="hero-scroll-line w-px h-[60px] bg-gradient-to-b from-[var(--color-brand)] to-transparent animate-pulse-slow" />
      </div>
    </section>
  );
}
