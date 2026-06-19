"use client";

import type { MdxProduct } from "@/lib/mdx";
import { bodyTextClass, containerClass, cx, headingMdClass, labelClass } from "@/lib/styles";
import { useCustomCursor } from "@/lib/useCustomCursor";
import { useIsMobile } from "@/lib/useIsMobile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductCardMobile } from "./ProductCardMobile";

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
  const isMobile = useIsMobile();

  useCustomCursor(cursorRef, { extraSelectors: ".products-grid-item" });

  const filteredProducts = useMemo(() => {
    const filtered = initialProducts.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        (item.summary || "").toLowerCase().includes(q) ||
        (item.tags || []).some((t) => t.toLowerCase().includes(q)) ||
        (item.category || "").toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    const byDateDesc = (a: MdxProduct, b: MdxProduct) => (b.date ?? "").localeCompare(a.date ?? "");

    const pinned = filtered.filter((it) => it.pinned).sort(byDateDesc);
    const rest = filtered.filter((it) => !it.pinned).sort(byDateDesc);

    return [...pinned, ...rest];
  }, [initialProducts, activeCategory, searchQuery]);
  const productAnimationKey = filteredProducts.map((item) => item.id).join("|");

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
    if (!productAnimationKey) return;

    const ctx = gsap.context(() => {
      const items = pageRef.current?.querySelectorAll(".products-grid-item") ?? [];
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 20, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.04, ease: "power3.out" },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [productAnimationKey]);

  return (
    <div ref={pageRef} className="relative min-h-screen bg-light">
      <div ref={cursorRef} className="custom-cursor" />

      <div className="sticky top-[var(--nav-h)] z-[200] border-b border-line bg-light/95 py-[0.9rem] backdrop-blur-2xl">
        <div className={containerClass}>
          <div className="flex flex-wrap items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-3">
            <div className="flex flex-wrap gap-1.5 max-sm:w-full max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:pb-1 max-sm:[scrollbar-width:none] [&::-webkit-scrollbar]:max-sm:hidden">
              {initialCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={cx(
                    "inline-flex items-center gap-1.5 border px-4 py-2 font-sans text-[0.7rem] font-medium uppercase tracking-[0.1em] transition-[color,background-color,border-color] duration-[400ms] ease-out-expo max-sm:flex-shrink-0 max-sm:whitespace-nowrap",
                    activeCategory === cat
                      ? "border-dark bg-brand text-dark"
                      : "border-transparent text-light-accent hover:border-dark hover:text-dark",
                  )}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            <div
              className={cx(
                "flex items-center gap-2 overflow-hidden border transition-[max-width,opacity,padding] duration-500 ease-out-expo max-sm:w-full",
                searchOpen
                  ? "max-w-[360px] border-dark px-[0.9rem] py-[0.35rem] opacity-100 max-sm:max-w-full"
                  : "max-w-0 border-transparent p-0 opacity-0",
              )}
            >
              <input
                type="text"
                className="min-w-0 w-full border-0 bg-transparent font-sans text-[0.78rem] tracking-[0.02em] text-dark outline-none placeholder:text-light-accent/70"
                placeholder="Search by name, tag, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="inline-flex items-center justify-center border border-dark px-4 py-[0.45rem] font-sans text-[0.7rem] font-medium uppercase tracking-[0.1em] text-dark transition-[color,background-color] duration-[400ms] ease-out-expo hover:bg-brand"
                onClick={toggleSearch}
                aria-label="Toggle search"
              >
                {searchOpen ? "Close" : "Search"}
              </button>
            </div>

            <div className="whitespace-nowrap text-light-accent max-sm:self-end">
              <span className={labelClass}>
                - {String(filteredProducts.length).padStart(2, "0")} items
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[var(--space-lg)] pb-[var(--space-xl)]">
        <div className={containerClass}>
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) =>
                isMobile ? (
                  <ProductCardMobile key={item.id} item={item} />
                ) : (
                  <ProductCard key={item.id} item={item} />
                ),
              )
            ) : (
              <div className="col-span-full px-[var(--space-md)] py-[var(--space-xl)] text-center">
                <span className={headingMdClass}>No projects found.</span>
                <p className={bodyTextClass}>Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
