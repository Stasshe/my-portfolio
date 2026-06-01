"use client";

import type { MdxProduct } from "@/lib/mdx";
import { useCustomCursor } from "@/lib/useCustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  initialProducts: MdxProduct[];
  initialCategories: string[];
};

export default function ProductsClient({ initialProducts, initialCategories }: Props) {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  useCustomCursor(cursorRef, { extraSelectors: ".products-grid-item" });

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((item) => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          q === "" ||
          item.title.toLowerCase().includes(q) ||
          (item.summary || "").toLowerCase().includes(q) ||
          (item.tags || []).some((t) => t.toLowerCase().includes(q)) ||
          (item.category || "").toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const sizeA = (a.colSpan ?? 1) * (a.rowSpan ?? 1);
        const sizeB = (b.colSpan ?? 1) * (b.rowSpan ?? 1);
        if (sizeB !== sizeA) return sizeB - sizeA;
        return (b.year ?? "").localeCompare(a.year ?? "");
      });
  }, [initialProducts, activeCategory, searchQuery]);

  const handleCategoryClick = useCallback((cat: string) => {
    setActiveCategory(cat);
    setSearchQuery("");
    setSearchOpen(false);
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev);
  }, []);

  // animate on mount / filter
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = pageRef.current?.querySelectorAll(".products-grid-item") ?? [];
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 20, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.04, ease: "power3.out" },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [filteredProducts]);

  return (
    <div ref={pageRef} className="products-page">
      <div ref={cursorRef} className="custom-cursor" />

      <div className="products-filter-bar">
        <div className="container">
          <div className="products-filter-inner">
            <div className="products-categories">
              {initialCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`products-category-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            <div className={`products-search-bar ${searchOpen ? "open" : ""}`}>
              <input
                type="text"
                className="products-search-input"
                placeholder="Search by name, tag, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="products-search-toggle"
                onClick={toggleSearch}
                aria-label="Toggle search"
              >
                {searchOpen ? "Close" : "Search"}
              </button>
            </div>

            <div className="products-count">
              <span className="label">{String(filteredProducts.length).padStart(2, "0")} items</span>
            </div>
          </div>
        </div>
      </div>

      <div className="products-grid-container">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => <ProductCard key={item.id} item={item} />)
            ) : (
              <div className="products-empty">
                <span className="heading-md">No projects found.</span>
                <p className="body-text">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ item }: { item: MdxProduct }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const tiltLayerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const tiltLayer = tiltLayerRef.current;
    if (!tiltLayer) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    gsap.to(tiltLayer, {
      rotateY: x * 4,
      rotateX: -y * 4,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const tiltLayer = tiltLayerRef.current;
    if (tiltLayer) {
      gsap.to(tiltLayer, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
    }
  };

  const bgStyle: React.CSSProperties = item.thumbnail
    ? { backgroundImage: `url(${item.thumbnail})`, backgroundSize: "cover", backgroundPosition: "center" }
    : { background: "linear-gradient(135deg,#f3f4f6,#e5e7eb)" };

  const col = item.colSpan ?? 1;
  const row = item.rowSpan ?? 1;
  const sizeClass = col <= 2 ? "span-sm" : col <= 3 ? "span-md" : "span-lg";

  return (
    <div
      ref={cardRef}
      className={`products-grid-item ${sizeClass} ${isHovered ? "hovered" : ""} ${item.alwaysShowSummary ? "always-show-summary" : ""}`}
      style={{ gridColumn: `span ${col}`, gridRow: `span ${row}`, ...(item.textColor ? { "--card-text-color": item.textColor } as React.CSSProperties : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={tiltLayerRef} className="products-grid-item-tilt-layer">
        <div className="products-grid-item-bg" style={bgStyle}>
          <div className="products-grid-item-noise" />
        </div>

        <Link href={`/products/${item.id}`} className="products-grid-item-content-link">
          <div className="products-grid-item-content">
            <div className="products-grid-item-top">
              <span className="products-grid-item-year label">{item.year}</span>
              <span className="products-grid-item-category label">{item.category}</span>
            </div>

            <div className="products-grid-item-bottom">
              <h3 className="products-grid-item-title heading-sm">{item.title}</h3>
              <p className="products-grid-item-summary body-text-sm">{item.summary}</p>
              <div className="products-grid-item-tags">
                {(item.tags || []).map((tag) => (
                  <span key={tag} className="products-grid-item-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>

        <div className="products-grid-item-border" />
      </div>
    </div>
  );
}
