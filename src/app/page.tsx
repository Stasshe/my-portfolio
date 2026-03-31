"use client";

import { useCustomCursor } from "@/lib/useCustomCursor";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { HomeFooter } from "../components/home/HomeFooter";
import { HomeNavigation } from "../components/home/HomeNavigation";
import { HorizontalSection } from "../components/home/HorizontalSection";
import { AboutSection } from "../components/home/about/AboutSection";
import { MARQUEE_ITEMS, PRODUCTS, SKILLS } from "../components/home/data";
import { HeroSection } from "../components/home/hero/HeroSection";
import { MarqueeSection } from "../components/home/marquee/MarqueeSection";
import { SkewSection } from "../components/home/skew/SkewSection";
import { WorksSection } from "../components/home/works/WorksSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLElement>(null);
  const horizontalWrapRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skewRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
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
              yPercent: -30,
              opacity: 0.3,
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
        }

        if (horizontalRef.current && horizontalWrapRef.current) {
          const panels = Array.from(horizontalWrapRef.current.children) as HTMLElement[];
          const getTotalWidth = () => (panels.length - 1) * window.innerWidth;

          gsap.to(horizontalWrapRef.current, {
            x: () => -getTotalWidth(),
            ease: "none",
            scrollTrigger: {
              trigger: horizontalRef.current,
              start: "top top",
              end: () => `+=${getTotalWidth()}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          panels.forEach((panel) => {
            const content = panel.firstElementChild as HTMLElement | null;
            if (content) {
              gsap.from(content, {
                x: 100,
                opacity: 0,
                scrollTrigger: {
                  trigger: panel,
                  start: "left center",
                  end: "center center",
                  scrub: true,
                },
              });
            }
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

        if (aboutRef.current) {
          const aboutEl = aboutRef.current;
          const label = document.getElementById("about-label");
          if (label) {
            gsap.from(label, {
              scrollTrigger: {
                trigger: aboutEl,
                start: "top 75%",
              },
              x: -40,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            });
          }

          const title = document.getElementById("about-title");
          if (title) {
            gsap.from(title, {
              scrollTrigger: {
                trigger: aboutEl,
                start: "top 70%",
              },
              y: 60,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            });
          }

          const texts = [
            document.getElementById("about-text-0"),
            document.getElementById("about-text-1"),
          ].filter(Boolean) as HTMLElement[];
          if (texts.length) {
            gsap.from(texts, {
              scrollTrigger: {
                trigger: aboutEl,
                start: "top 60%",
              },
              y: 40,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
            });
          }

          const stats = ["about-stat-0", "about-stat-1", "about-stat-2"]
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];
          const statsTrigger = document.getElementById("about-stats") ?? aboutEl;
          if (stats.length) {
            gsap.from(stats, {
              scrollTrigger: {
                trigger: statsTrigger,
                start: "top 85%",
              },
              y: 40,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.1,
            });
          }

          const skillsContainer = document.getElementById("about-skills");
          const skills = skillsContainer
            ? (Array.from(skillsContainer.children) as HTMLElement[])
            : [];
          const skillsTrigger = skillsContainer ?? aboutEl;
          if (skills.length) {
            gsap.from(skills, {
              scrollTrigger: {
                trigger: skillsTrigger,
                start: "top 90%",
              },
              scale: 0.8,
              opacity: 0,
              duration: 0.4,
              immediateRender: false,
              ease: "back.out(1.7)",
              stagger: 0.05,
            });
          }

          const deco1 = document.getElementById("about-deco-1");
          if (deco1) {
            gsap.to(deco1, {
              y: -80,
              scrollTrigger: {
                trigger: aboutEl,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }

          const deco2 = document.getElementById("about-deco-2");
          if (deco2) {
            gsap.to(deco2, {
              y: 60,
              scrollTrigger: {
                trigger: aboutEl,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
        }

        if (skewRef.current) {
          const rows = [
            document.getElementById("skew-text-0"),
            document.getElementById("skew-text-1"),
            document.getElementById("skew-text-2"),
          ].filter(Boolean) as HTMLElement[];
          rows.forEach((row, i) => {
            gsap.from(row, {
              x: i % 2 === 0 ? -200 : 200,
              opacity: 0,
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                end: "top 40%",
                scrub: 1,
              },
            });
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

      // ScrollTrigger のセットアップは即時に行う（loader に依存させない）
      setupScrollAnimations();

      const loaderTl = gsap.timeline({
        onComplete: () => {
          setIsLoaded(true);
          // loader 完了後は単一の refresh で十分
          ScrollTrigger.refresh();
        },
      });

      // フォント読み込み完了時にも refresh
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
        document.getElementById("hero-title-span-2"),
      ].filter(Boolean) as HTMLElement[];
      const subtagEls = [document.getElementById("hero-subtag")].filter(Boolean) as HTMLElement[];
      const taglineEls = [document.getElementById("hero-tagline")].filter(Boolean) as HTMLElement[];
      const scrollIndicators = [document.getElementById("hero-scroll-indicator")].filter(
        Boolean,
      ) as HTMLElement[];
      const decoEls = [
        document.getElementById("hero-deco-1"),
        document.getElementById("hero-deco-2"),
        document.getElementById("hero-deco-3"),
      ].filter(Boolean) as HTMLElement[];

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
            y: 120,
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
          scrollIndicators,
          {
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2",
        )
        .from(
          decoEls,
          {
            scale: 0,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=1",
        );

      const marqueeTrack = document.getElementById("marquee-track");
      if (marqueeTrack) {
        gsap.to(marqueeTrack, {
          xPercent: -50,
          repeat: -1,
          duration: 25,
          ease: "none",
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      gsap.to(window, {
        scrollTo: { y: el, offsetY: 0 },
        duration: 1.2,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div ref={mainRef}>
      <div ref={cursorRef} className="custom-cursor" />

      <div className="page-loader">
        <span className="page-loader-text" style={{ opacity: 0, transform: "translateY(20px)" }}>
          Stasshe
        </span>
      </div>

      <HomeNavigation
        navRef={navRef}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection heroRef={heroRef} />
      <MarqueeSection marqueeRef={marqueeRef} items={MARQUEE_ITEMS} />
      <HorizontalSection
        horizontalRef={horizontalRef}
        horizontalWrapRef={horizontalWrapRef}
        scrollToSection={scrollToSection}
      />
      <SkewSection skewRef={skewRef} />
      <WorksSection worksRef={worksRef} products={PRODUCTS} />
      <AboutSection aboutRef={aboutRef} skills={SKILLS} />
      <HomeFooter footerRef={footerRef} scrollToSection={scrollToSection} />
    </div>
  );
}
