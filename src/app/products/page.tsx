"use client";

import { useCustomCursor } from "@/lib/useCustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Search, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ProductItem } from "../../components/products/data";
import { CATEGORIES, PRODUCT_ITEMS } from "../../components/products/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useCustomCursor(cursorRef, { extraSelectors: ".products-grid-item" });

  const filteredProducts = useMemo(() => {
    return PRODUCT_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = useCallback((category: string) => {
    setActiveCategory(category);
    setSearchQuery("");
    setSearchOpen(false);
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => {
      if (!prev) {
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      return !prev;
    });
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".products-page-header", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      // Filter bar entrance
      gsap.from(".products-filter-bar", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.4,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Animate grid items on filter change
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = document.querySelectorAll(".products-grid-item");
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 40, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          overwrite: "auto",
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [filteredProducts]);

  return (
    <div ref={pageRef} className="products-page">
      <div ref={cursorRef} className="custom-cursor" />

      {/* Navigation */}
      <nav className="products-nav">
        <div className="products-nav-inner">
          <Link href="/" className="products-back-link">
            <ArrowLeft size={18} />
            <span className="label">Back</span>
          </Link>
          <Link href="/" className="nav-logo" style={{ color: "var(--color-dark)" }}>
            Stasshe
          </Link>
          <div className="products-nav-right">
            <button
              type="button"
              className="products-search-toggle"
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div ref={headerRef} className="products-page-header">
        <div className="container">
          <span
            className="label"
            style={{ color: "var(--color-brand)", marginBottom: "1rem", display: "block" }}
          >
            Products & Works
          </span>
          <h1 className="heading-xl products-page-title">
            Every
            <br />
            <span className="products-title-accent">thing</span>{" "}
            <span className="products-title-italic">I craft.</span>
          </h1>
          <p className="body-text products-page-subtitle">
            A collection of projects, experiments, and explorations.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="products-filter-bar">
        <div className="container">
          <div className="products-filter-inner">
            <div className="products-categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`products-category-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <span>{cat}</span>
                  {activeCategory === cat && <span className="category-dot" />}
                </button>
              ))}
            </div>

            <div className={`products-search-bar ${searchOpen ? "open" : ""}`}>
              <Search size={14} className="products-search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                className="products-search-input"
                placeholder="Search by name, tag, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="products-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="products-count">
              <span className="label">
                {String(filteredProducts.length).padStart(2, "0")} item
                {filteredProducts.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div ref={gridContainerRef} className="products-grid-container">
        <div className="container">
          <div ref={gridRef} className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => <ProductCard key={item.id} item={item} />)
            ) : (
              <div className="products-empty">
                <span className="heading-md" style={{ color: "var(--color-light-accent)" }}>
                  No projects found.
                </span>
                <p
                  className="body-text"
                  style={{ color: "var(--color-light-accent)", marginTop: "1rem" }}
                >
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="products-footer">
        <div className="container">
          <div className="products-footer-inner">
            <Link href="/" className="cta-button">
              <span>Back to Home</span>
              <ArrowLeft className="arrow" size={16} />
            </Link>
            <span className="footer-copyright">© 2025 Stasshe. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ item }: { item: ProductItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    gsap.to(cardRef.current, {
      rotateY: x * 4,
      rotateX: -y * 4,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`products-grid-item ${isHovered ? "hovered" : ""}`}
      style={{
        gridColumn: `span ${item.colSpan}`,
        gridRow: `span ${item.rowSpan}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail / Gradient background */}
      <div className="products-grid-item-bg" style={{ background: item.gradient }}>
        <div className="products-grid-item-noise" />
      </div>

      {/* Content overlay */}
      <div className="products-grid-item-content">
        <div className="products-grid-item-top">
          <span className="products-grid-item-year label">{item.year}</span>
          <span className="products-grid-item-category label">{item.category}</span>
        </div>

        <div className="products-grid-item-bottom">
          <h3 className="products-grid-item-title heading-sm">{item.title}</h3>
          <p className="products-grid-item-summary body-text-sm">{item.summary}</p>
          <div className="products-grid-item-tags">
            {item.tags.map((tag) => (
              <span key={tag} className="products-grid-item-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover border effect */}
      <div className="products-grid-item-border" />
    </div>
  );
}
