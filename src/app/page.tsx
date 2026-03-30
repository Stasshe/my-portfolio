"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ───── Data ───── */
const PRODUCTS = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Web Design",
    description: "A bold reimagining of digital storytelling through interactive design.",
    tags: ["Design", "Frontend"],
    gradient: "linear-gradient(135deg, #14A8C7 0%, #273582 100%)",
  },
  {
    id: 2,
    title: "Project Beta",
    category: "Branding",
    description: "Visual identity system that bridges tradition and modernity.",
    tags: ["Branding", "Identity"],
    gradient: "linear-gradient(135deg, #AC5D7B 0%, #273582 100%)",
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "Development",
    description: "Full-stack application built for scale and elegance.",
    tags: ["React", "Node.js"],
    gradient: "linear-gradient(135deg, #8099B2 0%, #14A8C7 100%)",
  },
  {
    id: 4,
    title: "Project Delta",
    category: "UI/UX",
    description: "Experience design focused on delight, usability, and craft.",
    tags: ["UX", "Prototype"],
    gradient: "linear-gradient(135deg, #273582 0%, #AC5D7B 100%)",
  },
];

const MARQUEE_ITEMS = [
  "Design",
  "Development",
  "Branding",
  "Strategy",
  "Creative",
  "Digital",
  "Craft",
  "Experience",
];

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Figma",
  "UI Design",
  "GSAP",
  "CSS",
  "Three.js",
  "Tailwind",
];

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
  const loaderRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ──────────── Page Loader ──────────── */
      const loaderTl = gsap.timeline({
        onComplete: () => setIsLoaded(true),
      });

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

      /* ──────────── Nav scroll effect ──────────── */
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

      /* ──────────── Hero animations ──────────── */
      const heroTl = gsap.timeline({
        delay: 1.8, // after loader
      });

      heroTl
        .from(".hero-greeting", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".hero-title-line span",
          {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.4"
        )
        .from(
          ".hero-tagline",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-scroll-indicator",
          {
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        )
        .from(
          ".hero-deco",
          {
            scale: 0,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=1"
        );

      // Hero parallax on scroll
      if (heroRef.current) {
        gsap.to(".hero-content", {
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

      /* ──────────── Marquee ──────────── */
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

      /* ──────────── Horizontal Scroll ──────────── */
      if (horizontalRef.current && horizontalWrapRef.current) {
        const panels = horizontalWrapRef.current.querySelectorAll(".horizontal-panel");
        const totalWidth = (panels.length - 1) * window.innerWidth;

        gsap.to(horizontalWrapRef.current, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Animate panel contents
        panels.forEach((panel, _i) => {
          const content = panel.querySelector(".panel-content");
          if (content) {
            gsap.from(content, {
              x: 100,
              opacity: 0,
              scrollTrigger: {
                trigger: panel,
                containerAnimation: gsap.getById("horizontalScroll") as gsap.core.Animation | undefined,
                start: "left center",
                end: "center center",
                scrub: true,
              },
            });
          }
        });
      }

      /* ──────────── Works / Products section ──────────── */
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

      gsap.from(".work-card", {
        scrollTrigger: {
          trigger: ".works-grid",
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      /* ──────────── About Section ──────────── */
      gsap.from(".about-label", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 60%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });

      gsap.from(".about-stat", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      });

      gsap.from(".about-skill", {
        scrollTrigger: {
          trigger: ".about-skills",
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: 0.05,
      });

      // About decorative circles parallax
      gsap.to(".about-deco-1", {
        y: -80,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".about-deco-2", {
        y: 60,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* ──────────── Skew / Diagonal Text ──────────── */
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

      /* ──────────── Footer ──────────── */
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

      /* ──────────── Custom cursor ──────────── */
      const moveCursor = (e: MouseEvent) => {
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };
      window.addEventListener("mousemove", moveCursor);

      // Hover effects on interactive elements
      const interactives = document.querySelectorAll("a, button, .work-card, .nav-link");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursorRef.current?.classList.add("hovering");
        });
        el.addEventListener("mouseleave", () => {
          cursorRef.current?.classList.remove("hovering");
        });
      });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
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
      {/* ──── Custom Cursor ──── */}
      <div ref={cursorRef} className="custom-cursor" />

      {/* ──── Page Loader ──── */}
      <div ref={loaderRef} className="page-loader">
        <span
          className="page-loader-text"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          Stasshe
        </span>
      </div>

      {/* ──── Navigation ──── */}
      <nav ref={navRef} className="nav">
        <div className="nav-inner">
          <div
            className="nav-logo"
            onClick={() => scrollToSection("hero")}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            Stasshe
          </div>

          <div className="nav-links">
            <span
              className="nav-link"
              onClick={() => scrollToSection("works")}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              Works
            </span>
            <span
              className="nav-link"
              onClick={() => scrollToSection("about")}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              About
            </span>
            <Link href="/products" className="nav-link">
              Products
            </Link>
          </div>

          <button
            className="nav-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span
              style={{
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ──── Mobile Menu ──── */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <span
          className="nav-link"
          onClick={() => scrollToSection("hero")}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          Home
        </span>
        <span
          className="nav-link"
          onClick={() => scrollToSection("works")}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          Works
        </span>
        <span
          className="nav-link"
          onClick={() => scrollToSection("about")}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          About
        </span>
        <Link href="/products" className="nav-link" onClick={() => setMenuOpen(false)}>
          Products
        </Link>
      </div>

      {/* ────────────────────────────────────── */}
      {/* HERO SECTION */}
      {/* ────────────────────────────────────── */}
      <section ref={heroRef} className="hero" id="hero">
        <div className="hero-deco hero-deco-1" />
        <div className="hero-deco hero-deco-2" />
        <div className="hero-deco hero-deco-3" />

        <div className="container hero-content">
          <span className="label hero-greeting">Portfolio of</span>

          <div className="hero-title-line">
            <span className="heading-xl hero-name">Sta</span>
            <span className="heading-xl hero-name-accent">ss</span>
            <span className="heading-xl hero-name">he</span>
          </div>

          <div className="hero-title-line" style={{ marginTop: "0.5rem" }}>
            <span
              className="heading-md"
              style={{ color: "var(--color-light-accent)", fontWeight: 300 }}
            >
              — design, craft & curiosity
            </span>
          </div>

          <p className="body-text hero-tagline">
            Building thoughtful digital experiences with care for detail, warmth,
            and a touch of playfulness.
          </p>
        </div>

        <div className="hero-scroll-indicator">
          <span className="label" style={{ fontSize: "0.6rem" }}>
            Scroll
          </span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ────────────────────────────────────── */}
      {/* MARQUEE */}
      {/* ────────────────────────────────────── */}
      <div ref={marqueeRef} className="marquee-section">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <div key={`${item}-${i}`} className="marquee-item">
                <span className="dot" />
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* ────────────────────────────────────── */}
      {/* HORIZONTAL SCROLL SECTION */}
      {/* ────────────────────────────────────── */}
      <section ref={horizontalRef} className="horizontal-section">
        <div ref={horizontalWrapRef} className="horizontal-wrapper">
          {/* Panel 1: Intro */}
          <div className="horizontal-panel">
            <div className="panel-content container">
              <span
                className="label"
                style={{ color: "var(--color-brand)", marginBottom: "1.5rem", display: "block" }}
              >
                What I do
              </span>
              <h2 className="heading-lg" style={{ maxWidth: "600px" }}>
                I design &{" "}
                <span style={{ color: "var(--color-brand)", fontStyle: "italic" }}>
                  build
                </span>{" "}
                things for the web.
              </h2>
              <p
                className="body-text"
                style={{
                  maxWidth: "450px",
                  marginTop: "2rem",
                  color: "var(--color-light-accent)",
                }}
              >
                From concept to code, I craft interfaces that feel intuitive,
                expressive, and memorable.
              </p>
            </div>
          </div>

          {/* Panel 2: Philosophy */}
          <div className="horizontal-panel">
            <div className="panel-content container">
              <span
                className="label"
                style={{
                  color: "var(--color-brand)",
                  marginBottom: "1.5rem",
                  display: "block",
                }}
              >
                My philosophy
              </span>
              <h2 className="heading-lg" style={{ maxWidth: "650px" }}>
                Less noise,
                <br />
                more{" "}
                <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>
                  resonance.
                </span>
              </h2>
              <p
                className="body-text"
                style={{
                  maxWidth: "400px",
                  marginTop: "2rem",
                  color: "rgba(240,236,238,0.6)",
                }}
              >
                I believe in design that breathes. Space is not emptiness — it
                is an invitation.
              </p>
            </div>
          </div>

          {/* Panel 3: CTA */}
          <div className="horizontal-panel">
            <div
              className="panel-content container"
              style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
            >
              <h2 className="heading-lg">
                Let&apos;s create something{" "}
                <span style={{ fontStyle: "italic" }}>beautiful.</span>
              </h2>
              <div style={{ marginTop: "3rem" }}>
                <button
                  className="cta-button cta-button--light"
                  onClick={() => scrollToSection("works")}
                  type="button"
                >
                  <span>View my work</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────── */}
      {/* SKEW / DIAGONAL TEXT */}
      {/* ────────────────────────────────────── */}
      <section ref={skewRef} className="skew-section">
        <div className="skew-content">
          <div className="skew-text-row">
            <div className="skew-text">
              <span className="filled">Creative</span>
              &nbsp;&nbsp;&nbsp;
              <span className="stroke">Direction</span>
              &nbsp;&nbsp;&nbsp;
              <span className="italic">& Vision</span>
            </div>
          </div>
          <div className="skew-text-row">
            <div className="skew-text">
              <span className="stroke">Interface</span>
              &nbsp;&nbsp;&nbsp;
              <span className="filled">Design</span>
              &nbsp;&nbsp;&nbsp;
              <span className="italic">Systems</span>
            </div>
          </div>
          <div className="skew-text-row">
            <div className="skew-text">
              <span className="italic">Full-Stack</span>
              &nbsp;&nbsp;&nbsp;
              <span className="filled">Development</span>
              &nbsp;&nbsp;&nbsp;
              <span className="stroke">& Craft</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────── */}
      {/* WORKS / PRODUCTS CARDS */}
      {/* ────────────────────────────────────── */}
      <section ref={worksRef} className="section works-section" id="works">
        <div className="container">
          <div className="works-header">
            <div>
              <span
                className="label"
                style={{ color: "var(--color-brand)", marginBottom: "1rem", display: "block" }}
              >
                Selected Works
              </span>
              <h2 className="heading-lg">
                Things I&apos;ve{" "}
                <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>
                  made.
                </span>
              </h2>
            </div>
            <span className="label works-count">
              {String(PRODUCTS.length).padStart(2, "0")} Projects
            </span>
          </div>

          <div className="works-grid">
            {PRODUCTS.map((product) => (
              <Link
                href="/products"
                key={product.id}
                className="work-card"
              >
                <div className="work-card-visual">
                  <div
                    className="work-card-gradient"
                    style={{ background: product.gradient }}
                  />
                </div>
                <div className="work-card-body">
                  <span className="label work-card-category">
                    {product.category}
                  </span>
                  <h3 className="heading-sm work-card-title">{product.title}</h3>
                  <p className="body-text-sm work-card-description">
                    {product.description}
                  </p>
                </div>
                <div className="work-card-footer">
                  <div className="work-card-tags">
                    {product.tags.map((tag) => (
                      <span key={tag} className="work-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="work-card-arrow">↗</div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
            <Link href="/products" className="cta-button">
              <span>All products</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────── */}
      {/* ABOUT SECTION */}
      {/* ────────────────────────────────────── */}
      <section ref={aboutRef} className="section about-section" id="about">
        <div className="about-deco about-deco-1" />
        <div className="about-deco about-deco-2" />

        <div className="container">
          <div className="about-grid">
            <div>
              <span className="label about-label">About Me</span>
              <h2 className="heading-lg about-title">
                Designer,
                <br />
                developer,
                <br />
                <span className="accent">& dreamer.</span>
              </h2>

              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-number">5+</div>
                  <div className="about-stat-label">Years of experience</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number">30+</div>
                  <div className="about-stat-label">Projects completed</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number">∞</div>
                  <div className="about-stat-label">Cups of coffee</div>
                </div>
              </div>
            </div>

            <div>
              <p className="body-text about-text">
                {/* User will fill this in later */}
              </p>
              <p className="body-text about-text">
                {/* User will fill this in later */}
              </p>

              <div className="about-skills">
                {SKILLS.map((skill) => (
                  <span key={skill} className="about-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────── */}
      {/* FOOTER */}
      {/* ────────────────────────────────────── */}
      <footer ref={footerRef} className="footer" id="contact">
        <div className="container">
          <div className="footer-top">
            <div className="footer-cta">
              <h2 className="heading-lg footer-cta-title">
                Let&apos;s work{" "}
                <span className="accent">together.</span>
              </h2>
              <div style={{ marginTop: "var(--space-md)" }}>
                <a href="mailto:hello@stasshe.com" className="cta-button cta-button--light">
                  <span>Get in touch</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-link-group">
                <h4>Navigate</h4>
                <span
                  style={{ cursor: "pointer", display: "block", padding: "0.3rem 0", fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(240,236,238,0.6)", transition: "color 0.4s" }}
                  onClick={() => scrollToSection("hero")}
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                >
                  Home
                </span>
                <span
                  style={{ cursor: "pointer", display: "block", padding: "0.3rem 0", fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(240,236,238,0.6)", transition: "color 0.4s" }}
                  onClick={() => scrollToSection("works")}
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                >
                  Works
                </span>
                <span
                  style={{ cursor: "pointer", display: "block", padding: "0.3rem 0", fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(240,236,238,0.6)", transition: "color 0.4s" }}
                  onClick={() => scrollToSection("about")}
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                >
                  About
                </span>
                <Link href="/products" style={{ display: "block", padding: "0.3rem 0", fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(240,236,238,0.6)", transition: "color 0.4s" }}>
                  Products
                </Link>
              </div>
              <div className="footer-link-group">
                <h4>Social</h4>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copyright">
              © 2025 Stasshe. All rights reserved.
            </span>
            <span className="label" style={{ color: "rgba(240,236,238,0.3)" }}>
              Built with care
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
