import { getAllProductsFromMdx, getProductById } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type MaybePromise<T> = T | Promise<T>;

function resolveMaybe<T>(v: MaybePromise<T>): Promise<T> {
  return Promise.resolve(v as any) as Promise<T>;
}

export async function generateStaticParams() {
  const items = getAllProductsFromMdx();
  return items.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: { params: MaybePromise<{ id: string }> }): Promise<Metadata> {
  const { id } = await resolveMaybe(params);
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.title} — Stasshe`,
    description: product.summary || `${product.title} by Stasshe`,
    openGraph: {
      title: `${product.title} — Stasshe`,
      description: product.summary || `${product.title} by Stasshe`,
      type: "article",
    },
  };
}

export default async function ProductPage({
  params,
}: { params: MaybePromise<{ id: string }> }) {
  const { id } = await resolveMaybe(params);
  const product = getProductById(id);
  if (!product) return notFound();

  const hasThumbnail = product.thumbnail && product.thumbnail.length > 0;
  const hasTags = product.tags && product.tags.length > 0;

  return (
    <div className="product-detail-root">
      {/* ── Navigation ── */}
      <nav className="product-detail-nav">
        <div className="product-detail-nav-inner">
          <Link href="/products" className="product-detail-back">
            <ArrowLeft size={16} className="back-icon" />
            <span className="label">Products</span>
          </Link>
          <Link href="/" className="nav-logo" style={{ color: "var(--color-dark)" }}>
            Stasshe
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="product-detail-hero">
        <div className="product-detail-hero-inner">
          {/* Meta: category + year */}
          <div className="product-detail-meta">
            {product.category && (
              <span className="product-detail-category">{product.category}</span>
            )}
            {product.year && <span className="product-detail-year">{product.year}</span>}
          </div>

          {/* Title */}
          <h1 className="product-detail-title">{product.title}</h1>

          {/* Summary */}
          {product.summary && (
            <p className="product-detail-summary">{product.summary}</p>
          )}

          {/* Tags */}
          {hasTags && (
            <div className="product-detail-tags">
              {product.tags!.map((tag) => (
                <span key={tag} className="product-detail-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── Divider ── */}
      <div className="product-detail-divider">
        <div className="product-detail-divider-line" />
      </div>

      {/* ── Thumbnail ── */}
      {hasThumbnail && (
        <div className="product-detail-thumbnail-wrap">
          <img
            className="product-detail-thumbnail"
            src={product.thumbnail!}
            alt={product.title}
          />
        </div>
      )}

      {/* ── Article (MDX content) ── */}
      <article className="product-detail-article">
        <div
          className="product-detail-prose"
          dangerouslySetInnerHTML={{ __html: product.contentHtml }}
        />
      </article>

      {/* ── Footer ── */}
      <footer className="product-detail-footer">
        <div className="product-detail-footer-inner">
          <Link href="/products" className="product-detail-footer-back">
            <ArrowLeft size={14} />
            <span>All Products</span>
          </Link>
          <span className="product-detail-footer-copy">
            © {new Date().getFullYear()} Stasshe
          </span>
        </div>
      </footer>
    </div>
  );
}
