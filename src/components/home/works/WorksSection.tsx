import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";
import type { IndexItem, Product } from "../data";

type WorksSectionProps = {
  worksRef: RefObject<HTMLElement | null>;
  products: Product[];
  indexItems: IndexItem[];
  totalProducts: number;
};

export function WorksSection({ worksRef, products, indexItems, totalProducts }: WorksSectionProps) {
  const remaining = Math.max(totalProducts - indexItems.length, 0);

  return (
    <section ref={worksRef} className="works-section" id="works">
      <div className="container">
        <div id="works-header" className="works-header">
          <h2 className="heading-md works-title">代表的な仕事</h2>
          <span className="accent-italic works-sub">Selected work</span>
        </div>
        <div className="works-rule" />

        {products.map((product, i) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className={`work-card${i % 2 === 1 ? " work-card--reverse" : ""}`}
          >
            <div className="work-card-text">
              <span className="work-card-no font-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="heading-sm work-card-title">{product.title}</h3>
              <span className="label work-card-category">{product.category}</span>
              <p className="body-text-sm work-card-description">{product.description}</p>
              <span className="ink-link work-card-link">詳細を見る →</span>
            </div>
            <div className="work-card-visual">
              <div
                className="work-card-image"
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
          </Link>
        ))}
      </div>

      <div className="container works-index-wrap">
        <div className="works-header works-header--index">
          <h2 className="heading-md works-title">プロダクト・インデックス</h2>
          <span className="accent-italic works-sub">{totalProducts}+ projects</span>
        </div>

        <div className="works-index">
          {indexItems.map((item, i) => (
            <Link href={`/products/${item.id}`} key={item.id} className="works-index-row">
              <span className="works-index-no font-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="works-index-title font-serif">{item.title}</span>
              <span className="works-index-cat">{item.category}</span>
            </Link>
          ))}

          {remaining > 0 && (
            <Link href="/products" className="works-index-row works-index-row--more">
              <span className="works-index-no font-accent">—</span>
              <span className="works-index-title font-serif">ほか {remaining} プロダクト</span>
              <span className="works-index-cat works-index-cat--cta">一覧へ →</span>
            </Link>
          )}
        </div>

        <div className="works-cta">
          <Link href="/products" className="cta-button">
            <span>All products</span>
            <ArrowRight className="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
