import HomeClient from "@/components/home/HomeClient";
import type { IndexItem, Product } from "@/components/home/data";
import { getAllProductsFromMdx } from "@/lib/mdx";

const HOME_CARD_GRADIENTS = [
  "linear-gradient(135deg, #0b0b0c 0%, #2a2a2c 100%)",
  "linear-gradient(135deg, #1a2a00 0%, #3a5a00 100%)",
  "linear-gradient(135deg, #2a2a2c 0%, #0b0b0c 100%)",
];

const FALLBACK_GRADIENT = "linear-gradient(135deg, #0b0b0c 0%, #2a2a2c 100%)";

const HOME_FEATURED_PRODUCT_IDS = ["pyxis-codecanvas", "recon", "fluxa-webcp"];

const INDEX_LIMIT = 8;

export default function Home() {
  const all = getAllProductsFromMdx().sort((a, b) => {
    const areaA = (a.colSpan ?? 1) * (a.rowSpan ?? 1);
    const areaB = (b.colSpan ?? 1) * (b.rowSpan ?? 1);
    if (areaB !== areaA) return areaB - areaA;
    return (b.date ?? "").localeCompare(a.date ?? "");
  });
  const productById = new Map(all.map((item) => [item.id, item]));

  const featuredProducts: Product[] = HOME_FEATURED_PRODUCT_IDS.flatMap((id, index) => {
    const item = productById.get(id);
    if (!item) return [];

    return {
      id: item.id,
      title: item.title,
      category: item.category || "Project",
      description: item.summary || "",
      tags: item.tags?.slice(0, 3) ?? [],
      gradient: HOME_CARD_GRADIENTS[index % HOME_CARD_GRADIENTS.length] ?? FALLBACK_GRADIENT,
      ...(item.thumbnail ? { thumbnail: item.thumbnail } : {}),
    };
  });

  const indexItems: IndexItem[] = all.slice(0, INDEX_LIMIT).map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category || "Project",
  }));

  return (
    <HomeClient products={featuredProducts} indexItems={indexItems} totalProducts={all.length} />
  );
}
