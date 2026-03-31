"use client";

import { useCustomCursor } from "@/lib/useCustomCursor";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "../components/home/about/AboutSection";
import { MARQUEE_ITEMS, PRODUCTS, SKILLS } from "../components/home/data";
import { HeroSection } from "../components/home/hero/HeroSection";
import { HomeFooter } from "../components/home/HomeFooter";
import { HomeNavigation } from "../components/home/HomeNavigation";
import { HorizontalSection } from "../components/home/HorizontalSection";
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
          const heroContent = heroRef.current.querySelectorAll<HTMLElement>('.hero-content');
          if (heroContent && heroContent.length) {
            gsap.to(heroContent, {
              yPercent: -30,
              opacity: 0.3,
              scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
              },
            });
          }
        }

        if (horizontalRef.current && horizontalWrapRef.current) {
          const panels = horizontalWrapRef.current.querySelectorAll(".horizontal-panel");
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
            const content = panel.querySelector(".panel-content");
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

        gsap.from(".works-header", {
          scrollTrigger: {
            trigger: ".works-section",
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.set(".work-card", { autoAlpha: 0, y: 80 });
        ScrollTrigger.batch(".work-card", {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
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

        if (aboutRef.current) {
          const label = aboutRef.current.querySelector('[data-about="label"]');
          if (label) {
            gsap.from(label, {
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 75%",
              },
              x: -40,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            });
          }

          const title = aboutRef.current.querySelector('[data-about="title"]');
          if (title) {
            gsap.from(title, {
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 70%",
              },
              y: 60,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            });
          }

          const texts = aboutRef.current.querySelectorAll('[data-about="text"]');
          if (texts.length) {
            gsap.from(texts, {
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 60%",
              },
              y: 40,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
            });
          }

          const stats = aboutRef.current.querySelectorAll('[data-about="stat"]');
          const statsTrigger = aboutRef.current.querySelector('[data-about="stats"]') ?? aboutRef.current;
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

          const skills = aboutRef.current.querySelectorAll('[data-about="skill"]');
          const skillsTrigger = aboutRef.current.querySelector('[data-about="skills"]') ?? aboutRef.current;
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

          const deco1 = aboutRef.current.querySelector('[data-about="deco-1"]');
          if (deco1) {
            gsap.to(deco1, {
              y: -80,
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }

          const deco2 = aboutRef.current.querySelector('[data-about="deco-2"]');
          if (deco2) {
            gsap.to(deco2, {
              y: 60,
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
        }

        if (skewRef.current) {
          const rows = skewRef.current.querySelectorAll(".skew-text");
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

        gsap.from(".footer-cta-title", {
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
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

      if (heroRef.current) {
        const greetingEls = heroRef.current.querySelectorAll<HTMLElement>('.hero-greeting');
        const titleSpans = heroRef.current.querySelectorAll<HTMLElement>('.hero-title-line span');
        const taglineEls = heroRef.current.querySelectorAll<HTMLElement>('.hero-tagline');
        const scrollIndicators = heroRef.current.querySelectorAll<HTMLElement>('.hero-scroll-indicator');
        const decoEls = heroRef.current.querySelectorAll<HTMLElement>('.hero-deco');

        heroTl
          .from(greetingEls, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          })
          .from(
            titleSpans,
            {
              y: 120,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.1,
            },
            '-=0.4',
          )
          .from(
            taglineEls,
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.4',
          )
          .from(
            scrollIndicators,
            {
              opacity: 0,
              duration: 0.6,
            },
            '-=0.2',
          )
          .from(
            decoEls,
            {
              scale: 0,
              opacity: 0,
              duration: 1.2,
              ease: 'power2.out',
              stagger: 0.2,
            },
            '-=1',
          );
      } else {
        // Fallback to selector strings if ref is unavailable
        heroTl
          .from('.hero-greeting', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
          .from(
            '.hero-title-line span',
            { y: 120, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.1 },
            '-=0.4',
          )
          .from(
            '.hero-tagline',
            { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.4',
          )
          .from('.hero-scroll-indicator', { opacity: 0, duration: 0.6 }, '-=0.2')
          .from(
            '.hero-deco',
            { scale: 0, opacity: 0, duration: 1.2, ease: 'power2.out', stagger: 0.2 },
            '-=1',
          );
      }

      if (marqueeRef.current) {
        const track = marqueeRef.current.querySelector(".marquee-track");
        if (track) {
          gsap.to(track, {
            xPercent: -50,
            repeat: -1,
            duration: 25,
            ease: "none",
          });
        }
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
