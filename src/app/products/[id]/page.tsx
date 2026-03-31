import { getAllProductsFromMdx, getProductById } from "@/lib/mdx";
import { notFound } from "next/navigation";

// In Next.js app router, `params` can be passed as a Promise in some modes
// (development, streaming, or experimental features). To keep the page code
// simple and robust we accept either a value or a Promise for the params.
// `MaybePromise<T>` represents a value that may already be resolved or may be a Promise.
type MaybePromise<T> = T | Promise<T>;

// `resolveMaybe` normalizes a MaybePromise<T> into a Promise<T> so callers
// can `await` it in a consistent way. This keeps the page implementation
// straightforward and avoids branching on whether `params` is thenable.
function resolveMaybe<T>(v: MaybePromise<T>): Promise<T> {
  return Promise.resolve(v as any) as Promise<T>;
}

export async function generateStaticParams() {
  const items = getAllProductsFromMdx();
  return items.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: MaybePromise<{ id: string }> }) {
  // Ensure `params` is unwrapped because Next may supply a Promise for it.
  // We then use the `id` synchronously to fetch the product. Note that
  // `getProductById` currently performs synchronous file reads from
  // `data/products` (via our mdx loader). If that later becomes async
  // (e.g. remote fetch), convert `getProductById` to async and `await` it here.
  const { id } = await resolveMaybe(params);
  const product = getProductById(id);
  if (!product) return notFound();

  return (
    <main className="container product-page">
      <header style={{ marginBottom: "1.5rem" }}>
        <h1 className="heading-xl">{product.title}</h1>
        <p className="body-text">{product.summary}</p>
      </header>

      <article className="product-content">
        <div dangerouslySetInnerHTML={{ __html: product.contentHtml }} />
      </article>
    </main>
  );
}
