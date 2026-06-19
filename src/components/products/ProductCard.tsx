"use client";

import type { MdxProduct } from "@/lib/mdx";
import { bodyTextSmClass, headingSmClass, labelClass } from "@/lib/styles";
import gsap from "gsap";
import Link from "next/link";
import { memo, useRef, useState } from "react";

export const ProductCard = memo(function ProductCard({ item }: { item: MdxProduct }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const tiltLayerRef = useRef<HTMLDivElement | null>(null);
  const tiltSettersRef = useRef<{
    setRotateX: ReturnType<typeof gsap.quickTo>;
    setRotateY: ReturnType<typeof gsap.quickTo>;
  } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const getTiltSetters = () => {
    if (tiltSettersRef.current) return tiltSettersRef.current;
    if (!tiltLayerRef.current) return null;
    tiltSettersRef.current = {
      setRotateX: gsap.quickTo(tiltLayerRef.current, "rotationX", {
        duration: 0.4,
        ease: "power2.out",
      }),
      setRotateY: gsap.quickTo(tiltLayerRef.current, "rotationY", {
        duration: 0.4,
        ease: "power2.out",
      }),
    };
    return tiltSettersRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const setters = getTiltSetters();
    if (!setters) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    setters.setRotateY(x * 4);
    setters.setRotateX(-y * 4);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const setters = getTiltSetters();
    if (setters) {
      setters.setRotateY(0);
      setters.setRotateX(0);
    }
  };

  const bgStyle: React.CSSProperties = item.thumbnail
    ? {
        backgroundImage: `url(${item.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: "linear-gradient(135deg,#f3f4f6,#e5e7eb)" };

  const col = item.colSpan ?? 1;
  const row = item.rowSpan ?? 1;
  const sizeClass = col === 2 ? (row === 2 ? "span-lg" : "span-md") : "span-sm";

  return (
    <div
      ref={cardRef}
      className={`products-grid-item ${sizeClass} ${isHovered ? "hovered" : ""} ${item.alwaysShowSummary ? "always-show-summary" : ""}`}
      style={{
        gridColumn: `span ${col}`,
        gridRow: `span ${row}`,
        ...(item.textColor ? ({ "--card-text-color": item.textColor } as React.CSSProperties) : {}),
      }}
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
              <span className={`products-grid-item-year ${labelClass}`}>
                {item.date?.slice(0, 4)}
              </span>
              {item.pinned && <span className="products-grid-item-pin">★ Pinned</span>}
              <span className={`products-grid-item-category ${labelClass}`}>{item.category}</span>
            </div>

            <div className="products-grid-item-bottom">
              <h3 className={`products-grid-item-title ${headingSmClass}`}>{item.title}</h3>
              <p className={`products-grid-item-summary ${bodyTextSmClass}`}>{item.summary}</p>
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
});
