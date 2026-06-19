import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteNav } from "@/components/shared/SiteNav";
import { getAllProductsFromMdx, getProductById } from "@/lib/mdx";
import { labelClass } from "@/lib/styles";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type MaybePromise<T> = T | Promise<T>;

function resolveMaybe<T>(v: MaybePromise<T>): Promise<T> {
  return Promise.resolve(v);
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

export default async function ProductPage({ params }: { params: MaybePromise<{ id: string }> }) {
  const { id } = await resolveMaybe(params);
  const product = getProductById(id);
  if (!product) return notFound();

  const tags = product.tags ?? [];
  const thumbnail = product.thumbnail ?? "";
  const hasThumbnail = thumbnail.length > 0;
  const hasTags = tags.length > 0;

  return (
    <div className="product-detail-root">
      <SiteNav solid />

      {/* ── Hero ── */}
      <header className="product-detail-hero">
        <div className="product-detail-hero-inner">
          <Link href="/products" className="product-detail-back">
            <ArrowLeft size={16} className="back-icon" />
            <span className={labelClass}>Products</span>
          </Link>

          {/* Meta: category + year */}
          <div className="product-detail-meta">
            {product.category && (
              <span className="product-detail-category">{product.category}</span>
            )}
            {product.date && (
              <span className="product-detail-year">{product.date.slice(0, 4)}</span>
            )}
          </div>

          {/* Title */}
          <h1 className="product-detail-title">{product.title}</h1>

          {/* Summary */}
          {product.summary && <p className="product-detail-summary">{product.summary}</p>}

          {/* Tags */}
          {hasTags && (
            <div className="product-detail-tags">
              {tags.map((tag) => (
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
          <img className="product-detail-thumbnail" src={thumbnail} alt={product.title} />
        </div>
      )}

      {/* ── Article (MDX content) ── */}
      <article className="product-detail-article">
        <div
          className="product-detail-prose"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Product MDX is rendered to static HTML at build time.
          dangerouslySetInnerHTML={{ __html: product.contentHtml }}
        />
      </article>

      <SiteFooter />
    </div>
  );
}
