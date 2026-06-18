"use client";

import type { IndexItem, Product } from "@/components/home/data";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteNav } from "@/components/shared/SiteNav";
import { useCustomCursor } from "@/lib/useCustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { HeroSection } from "./hero/HeroSection";
import { PrinciplesSection } from "./principles/PrinciplesSection";
import { WorksSection } from "./works/WorksSection";

gsap.registerPlugin(ScrollTrigger);

type HomeClientProps = {
  products: Product[];
  indexItems: IndexItem[];
  totalProducts: number;
};

export default function HomeClient({ products, indexItems, totalProducts }: HomeClientProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const principlesRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setIsLoaded] = useState(false);

  useCustomCursor(cursorRef, { extraSelectors: ".work-card, .works-index-row" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const setupScrollAnimations = () => {
        if (heroRef.current) {
          const heroContentEl = document.getElementById("hero-content");
          if (heroContentEl) {
            gsap.to(heroContentEl, {
              yPercent: -12,
              opacity: 0.5,
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
        }

        const statBarItems = document.querySelectorAll(".stat-bar-item, .stat-bar-lead");
        if (statBarItems.length) {
          gsap.from(Array.from(statBarItems), {
            scrollTrigger: { trigger: ".stat-bar", start: "top 88%" },
            y: 24,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
          });
        }

        const principlesHeaderEl = document.getElementById("principles-header");
        if (principlesHeaderEl && principlesRef.current) {
          gsap.from(principlesHeaderEl, {
            scrollTrigger: { trigger: principlesHeaderEl, start: "top 85%" },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        const principleCards = principlesRef.current?.querySelectorAll(".principle-card");
        if (principleCards?.length) {
          gsap.from(Array.from(principleCards), {
            scrollTrigger: { trigger: principlesRef.current, start: "top 65%" },
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
          });
        }

        const worksHeaderEl = document.getElementById("works-header");
        const worksSectionEl = document.getElementById("works");
        if (worksHeaderEl && worksSectionEl) {
          gsap.from(worksHeaderEl, {
            scrollTrigger: { trigger: worksSectionEl, start: "top 80%" },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });
        }

        const workCardsCollection = worksRef.current?.getElementsByClassName("work-card");
        if (workCardsCollection?.length) {
          const workCards = Array.from(workCardsCollection) as Element[];
          gsap.set(workCards, { autoAlpha: 0, y: 60 });
          ScrollTrigger.batch(workCards, {
            start: "top 88%",
            once: true,
            onEnter: (batch: Element[]) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                overwrite: "auto",
              });
            },
          });
        }

        const indexRows = worksRef.current?.getElementsByClassName("works-index-row");
        if (indexRows?.length) {
          const rows = Array.from(indexRows) as Element[];
          gsap.set(rows, { autoAlpha: 0, y: 24 });
          ScrollTrigger.batch(rows, {
            start: "top 92%",
            once: true,
            onEnter: (batch: Element[]) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.06,
                overwrite: "auto",
              });
            },
          });
        }

        const footerCta = document.getElementById("footer-cta-title");
        const footerEl = document.getElementById("contact");
        if (footerCta && footerEl) {
          gsap.from(footerCta, {
            scrollTrigger: { trigger: footerEl, start: "top 80%" },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      };

      setupScrollAnimations();

      const loaderTl = gsap.timeline({
        onComplete: () => {
          setIsLoaded(true);
          ScrollTrigger.refresh();
        },
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      loaderTl
        .to(".page-loader-text", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(".page-loader-text", {
          opacity: 0,
          y: -20,
          duration: 0.4,
          delay: 0.5,
          ease: "power2.in",
        })
        .to(".page-loader", { yPercent: -100, duration: 0.8, ease: "power4.inOut" })
        .set(".page-loader", { display: "none" });

      const heroTl = gsap.timeline({ delay: 1.8 });

      const greetingEls = [document.getElementById("hero-greeting")].filter(
        Boolean,
      ) as HTMLElement[];
      const titleSpans = [
        document.getElementById("hero-title-span-0"),
        document.getElementById("hero-title-span-1"),
        document.getElementById("hero-title-span-2"),
      ].filter(Boolean) as HTMLElement[];
      const subtagEls = [document.getElementById("hero-subtag")].filter(Boolean) as HTMLElement[];
      const taglineEls = [document.getElementById("hero-tagline")].filter(Boolean) as HTMLElement[];
      const actionEls = [document.getElementById("hero-actions")].filter(Boolean) as HTMLElement[];
      const scrollIndicators = [document.getElementById("hero-scroll-indicator")].filter(
        Boolean,
      ) as HTMLElement[];

      heroTl
        .from(greetingEls, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(
          titleSpans,
          { y: 80, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1 },
          "-=0.4",
        )
        .from(subtagEls, { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.6")
        .from(taglineEls, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(actionEls, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(scrollIndicators, { opacity: 0, duration: 0.6 }, "-=0.2");
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <div ref={cursorRef} className="custom-cursor" />

      <div className="page-loader">
        <span className="page-loader-text" style={{ opacity: 0, transform: "translateY(20px)" }}>
          Stasshe
        </span>
      </div>

      <SiteNav theme="dark" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <HeroSection heroRef={heroRef} />
      <WorksSection
        worksRef={worksRef}
        products={products}
        indexItems={indexItems}
        totalProducts={totalProducts}
      />
      <PrinciplesSection principlesRef={principlesRef} />
      <SiteFooter />
    </div>
  );
}
