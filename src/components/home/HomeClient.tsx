"use client";

import type { Product } from "@/components/home/data";
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
};

export default function HomeClient({ products }: HomeClientProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const principlesRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setIsLoaded] = useState(false);

  useCustomCursor(cursorRef, { extraSelectors: ".work-card" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const setupScrollAnimations = () => {
        ScrollTrigger.create({
          start: 100,
          onUpdate: (self) => {
            if (navRef.current) {
              if (self.direction === 1 && self.scroll() > 100) {
                navRef.current.classList.add("scrolled");
              } else if (self.scroll() < 100) {
                navRef.current.classList.remove("scrolled");
              }
            }
          },
        });

        if (heroRef.current) {
          const heroContentEl = document.getElementById("hero-content");
          if (heroContentEl) {
            gsap.to(heroContentEl, {
              yPercent: -15,
              opacity: 0.4,
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
        }

        const principlesHeaderEl = document.getElementById("principles-header");
        if (principlesHeaderEl && principlesRef.current) {
          gsap.from(principlesHeaderEl, {
            scrollTrigger: {
              trigger: principlesRef.current,
              start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        const principleCards = principlesRef.current?.querySelectorAll(".principle-card");
        if (principleCards?.length) {
          gsap.from(Array.from(principleCards), {
            scrollTrigger: {
              trigger: principlesRef.current,
              start: "top 70%",
            },
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
            scrollTrigger: {
              trigger: worksSectionEl,
              start: "top 80%",
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });
        }

        const workCardsCollection = worksRef.current?.getElementsByClassName("work-card");
        if (workCardsCollection?.length) {
          const workCards = Array.from(workCardsCollection) as Element[];
          gsap.set(workCards, { autoAlpha: 0, y: 80 });
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

        const footerCta = document.getElementById("footer-cta-title");
        const footerEl = document.getElementById("contact");
        if (footerCta && footerEl) {
          gsap.from(footerCta, {
            scrollTrigger: {
              trigger: footerEl,
              start: "top 80%",
            },
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
        .to(".page-loader-text", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(".page-loader-text", {
          opacity: 0,
          y: -20,
          duration: 0.4,
          delay: 0.5,
          ease: "power2.in",
        })
        .to(".page-loader", {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        })
        .set(".page-loader", { display: "none" });

      const heroTl = gsap.timeline({
        delay: 1.8,
      });

      const greetingEls = [document.getElementById("hero-greeting")].filter(
        Boolean,
      ) as HTMLElement[];
      const titleSpans = [
        document.getElementById("hero-title-span-0"),
        document.getElementById("hero-title-span-1"),
      ].filter(Boolean) as HTMLElement[];
      const subtagEls = [document.getElementById("hero-subtag")].filter(Boolean) as HTMLElement[];
      const taglineEls = [document.getElementById("hero-tagline")].filter(Boolean) as HTMLElement[];
      const actionEls = [document.getElementById("hero-actions")].filter(Boolean) as HTMLElement[];
      const panelStats = Array.from(
        document.getElementById("hero-panel")?.querySelectorAll(".hero-stat") ?? [],
      ) as HTMLElement[];
      const scrollIndicators = [document.getElementById("hero-scroll-indicator")].filter(
        Boolean,
      ) as HTMLElement[];

      heroTl
        .from(greetingEls, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          titleSpans,
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.4",
        )
        .from(
          subtagEls,
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .from(
          taglineEls,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          actionEls,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          panelStats,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          scrollIndicators,
          {
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2",
        );
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

      <SiteNav navRef={navRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <HeroSection heroRef={heroRef} />
      <PrinciplesSection principlesRef={principlesRef} />
      <WorksSection worksRef={worksRef} products={products} />
      <SiteFooter />
    </div>
  );
}
