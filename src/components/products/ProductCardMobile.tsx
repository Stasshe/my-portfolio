"use client";

import type { MdxProduct } from "@/lib/mdx";
import { bodyTextSmClass, headingSmClass, labelClass } from "@/lib/styles";
import Link from "next/link";
import { memo } from "react";

export const ProductCardMobile = memo(function ProductCardMobile({ item }: { item: MdxProduct }) {
  const bgStyle: React.CSSProperties = item.thumbnail
    ? {
        backgroundImage: `url(${item.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: "linear-gradient(135deg,#f3f4f6,#e5e7eb)" };

  return (
    <div
      className={`products-grid-item span-sm ${item.alwaysShowSummary ? "always-show-summary" : ""}`}
      style={
        item.textColor
          ? ({ "--card-text-color": item.textColor } as React.CSSProperties)
          : undefined
      }
    >
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
  );
});
