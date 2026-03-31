import ProductsClient from "@/components/products/ProductsClient";
import { getAllProductsFromMdx } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const products = getAllProductsFromMdx();
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category ?? "").filter(Boolean))),
  ];

  return (
    <div className="products-page-root">
      <nav className="products-nav">
        <div className="products-nav-inner">
          <Link href="/" className="products-back-link">
            <ArrowLeft size={18} />
            <span className="label">Back</span>
          </Link>
          <Link href="/" className="nav-logo" style={{ color: "var(--color-dark)" }}>
            Stasshe
          </Link>
        </div>
      </nav>

      <header className="products-page-header">
        <div className="container">
          <span className="label" style={{ color: "var(--color-brand)", marginBottom: "1rem", display: "block" }}>
            Products & Works
          </span>
          <h1 className="heading-xl products-page-title">
            Every
            <br />
            <span className="products-title-accent">thing</span>{" "}
            <span className="products-title-italic">I craft.</span>
          </h1>
          <p className="body-text products-page-subtitle">A collection of projects, experiments, and explorations.</p>
        </div>
      </header>

      {/* Client-side listing + interactions */}
      <ProductsClient initialProducts={products} initialCategories={categories} />

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
