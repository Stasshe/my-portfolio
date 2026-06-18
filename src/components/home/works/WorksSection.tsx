import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";
import {
  bodyTextSmClass,
  containerClass,
  ctaArrowClass,
  ctaButtonClass,
  ctaContentClass,
  headingMdClass,
  headingSmClass,
  inkLinkClass,
  labelClass,
  cx,
} from "@/lib/styles";
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
    <section
      ref={worksRef}
      className="bg-light py-[clamp(4rem,9vw,8rem)] pb-[clamp(3rem,6vw,5rem)] text-dark"
      id="works"
    >
      <div className={containerClass}>
        <div id="works-header" className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
          <h2 className={`${headingMdClass} text-dark`}>代表的な仕事</h2>
          <span className="font-accent text-base italic text-light-accent">Selected work</span>
        </div>
        <div className="mb-[clamp(1.5rem,3vw,2.5rem)] h-0.5 bg-dark" />

        {products.map((product, i) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="work-card group grid cursor-pointer grid-cols-[0.85fr_1fr] items-center gap-[clamp(2rem,5vw,3.5rem)] border-b border-line py-[clamp(2.5rem,5vw,3.5rem)] max-md:grid-cols-1 max-md:gap-6"
          >
            <div className={cx(i % 2 === 1 && "order-2 max-md:order-none")}>
              <span className="block font-accent text-[clamp(2.4rem,4vw,3.6rem)] leading-none text-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={`${headingSmClass} mt-3 text-dark`}>{product.title}</h3>
              <span className={`${labelClass} mt-2 block text-dark-accent`}>{product.category}</span>
              <p className={`${bodyTextSmClass} mt-3 max-w-[42em] text-light-accent`}>
                {product.description}
              </p>
              <span className={`${inkLinkClass} mt-5`}>詳細を見る →</span>
            </div>
            <div
              className={cx(
                "aspect-[16/10] overflow-hidden border-2 border-dark bg-[#f3f3f3]",
                i % 2 === 1 && "order-1 max-md:order-none",
              )}
            >
              <div
                className="h-full w-full transition-transform duration-[600ms] ease-out-expo group-hover:scale-[1.04]"
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

      <div className={`${containerClass} mt-[clamp(3rem,7vw,6rem)]`}>
        <div className="mb-[clamp(1.25rem,2.5vw,1.75rem)] flex flex-wrap items-baseline justify-between gap-4">
          <h2 className={`${headingMdClass} text-dark`}>プロダクト・インデックス</h2>
          <span className="font-accent text-base italic text-light-accent">{totalProducts}+ projects</span>
        </div>

        <div className="border-t-2 border-dark">
          {indexItems.map((item, i) => (
            <Link
              href={`/products/${item.id}`}
              key={item.id}
              className="works-index-row grid grid-cols-[60px_1fr_auto] items-center gap-6 border-b border-line py-[1.1rem] transition-[padding-left,background-color] duration-[400ms] ease-out-expo hover:bg-[rgba(var(--color-brand-rgb),0.12)] hover:pl-3 max-md:grid-cols-[36px_1fr] max-md:gap-x-4 max-md:gap-y-3"
            >
              <span className="font-accent text-base text-light-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold text-dark">
                {item.title}
              </span>
              <span className="font-sans text-[0.78rem] text-light-accent max-md:col-start-2">
                {item.category}
              </span>
            </Link>
          ))}

          {remaining > 0 && (
            <Link
              href="/products"
              className="works-index-row grid grid-cols-[60px_1fr_auto] items-center gap-6 border-b border-line py-[1.1rem] transition-[padding-left,background-color] duration-[400ms] ease-out-expo hover:bg-[rgba(var(--color-brand-rgb),0.12)] hover:pl-3 max-md:grid-cols-[36px_1fr] max-md:gap-x-4 max-md:gap-y-3"
            >
              <span className="font-accent text-base text-light-accent">—</span>
              <span className="font-serif text-[clamp(1.1rem,1.8vw,1.35rem)] font-normal text-light-accent">
                ほか {remaining} プロダクト
              </span>
              <span className="bg-brand px-3 py-1.5 font-sans text-[0.78rem] font-medium text-dark max-md:col-start-2">
                一覧へ →
              </span>
            </Link>
          )}
        </div>

        <div className="mt-[clamp(2.5rem,5vw,4rem)] text-center">
          <Link href="/products" className={ctaButtonClass}>
            <span className={ctaContentClass}>All products</span>
            <ArrowRight className={ctaArrowClass} size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
