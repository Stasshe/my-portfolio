import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";
import type { Product } from "../data";

type WorksSectionProps = {
  worksRef: RefObject<HTMLElement | null>;
  products: Product[];
};

export function WorksSection({ worksRef, products }: WorksSectionProps) {
  return (
    <section ref={worksRef} className="section works-section" id="works">
      <div className="container">
        <div id="works-header" className="works-header">
          <div>
            <span
              className="label"
              style={{ color: "var(--color-brand)", marginBottom: "1rem", display: "block" }}
            >
              Selected Works
            </span>
            <h2 className="heading-lg">
              Things I&apos;ve{" "}
              <span style={{ color: "var(--color-dark-accent)", fontStyle: "italic" }}>made.</span>
            </h2>
          </div>
          <span className="label works-count">
            {String(products.length).padStart(2, "0")} Projects
          </span>
        </div>

        <div className="works-grid">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="work-card">
              <div className="work-card-visual">
                <div
                  className="work-card-gradient"
                  style={
                    product.thumbnail
                      ? {
                          backgroundImage: `url(${product.thumbnail})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : { background: product.gradient }
                  }
                />
              </div>
              <div className="work-card-body">
                <span className="label work-card-category">{product.category}</span>
                <h3 className="heading-sm work-card-title">{product.title}</h3>
                <p className="body-text-sm work-card-description">{product.description}</p>
              </div>
              <div className="work-card-footer">
                <div className="work-card-tags">
                  {product.tags.map((tag) => (
                    <span key={tag} className="work-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="work-card-arrow">
                  <ArrowUpRight />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
          <Link href="/products" className="cta-button">
            <span>All products</span>
            <ArrowRight className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
