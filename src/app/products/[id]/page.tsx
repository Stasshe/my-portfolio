import { getAllProductsFromMdx, getProductById } from "@/lib/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const items = getAllProductsFromMdx();
  return items.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
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
