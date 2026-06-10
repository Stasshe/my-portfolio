import ProductsClient from "@/components/products/ProductsClient";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteNav } from "@/components/shared/SiteNav";
import { getAllProductsFromMdx } from "@/lib/mdx";

export default function ProductsPage() {
  const products = getAllProductsFromMdx();
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category ?? "").filter(Boolean))),
  ];

  return (
    <div className="products-page">
      <SiteNav solid />

      <header className="products-page-header">
        <div className="container">
          <span className="label section-label">Products & Works</span>
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
      </header>

      {/* Client-side listing + interactions */}
      <ProductsClient initialProducts={products} initialCategories={categories} />

      <SiteFooter />
    </div>
  );
}
