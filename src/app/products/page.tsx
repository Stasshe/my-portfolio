import ProductsClient from "@/components/products/ProductsClient";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteNav } from "@/components/shared/SiteNav";
import { getAllProductsFromMdx } from "@/lib/mdx";
import { bodyTextClass, containerClass, headingXlClass, labelClass } from "@/lib/styles";

export default function ProductsPage() {
  const products = getAllProductsFromMdx();
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category ?? "").filter(Boolean))),
  ];

  return (
    <div className="relative min-h-screen bg-light">
      <SiteNav solid />

      <header className="border-b-2 border-dark pt-[clamp(3rem,7vw,6rem)] pb-[var(--space-lg)] max-sm:pt-[clamp(2.5rem,8vw,4rem)] max-sm:pb-[var(--space-md)]">
        <div className={containerClass}>
          <span className={`${labelClass} mb-4 block text-dark-accent`}>Products & Works</span>
          <h1 className={`${headingXlClass} text-dark`}>
            Every
            <br />
            <span>thing</span>{" "}
            <span className="font-accent font-normal italic text-dark-accent">I craft.</span>
          </h1>
          <p className={`${bodyTextClass} mt-[var(--space-md)] max-w-[460px] text-light-accent`}>
            A collection of projects, experiments, and explorations.
          </p>
        </div>
      </header>

      {/* Client-side listing + interactions */}
      <ProductsClient initialProducts={products} initialCategories={categories} />

      <SiteFooter />
    </div>
  );
}
