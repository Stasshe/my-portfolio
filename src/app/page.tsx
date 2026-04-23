import HomeClient from "@/components/home/HomeClient";
import type { Product } from "@/components/home/data";
import { getAllProductsFromMdx } from "@/lib/mdx";

const HOME_CARD_GRADIENTS = [
  "linear-gradient(135deg, #14A8C7 0%, #273582 100%)",
  "linear-gradient(135deg, #AC5D7B 0%, #273582 100%)",
  "linear-gradient(135deg, #8099B2 0%, #14A8C7 100%)",
  "linear-gradient(135deg, #273582 0%, #AC5D7B 100%)",
  "linear-gradient(135deg, #14A8C7 0%, #8099B2 100%)",
];

export default function Home() {
  const featuredProducts: Product[] = getAllProductsFromMdx()
    .sort((a, b) => {
      const areaA = (a.colSpan ?? 1) * (a.rowSpan ?? 1);
      const areaB = (b.colSpan ?? 1) * (b.rowSpan ?? 1);
      if (areaB !== areaA) return areaB - areaA;
      return (b.year ?? "").localeCompare(a.year ?? "");
    })
    .slice(0, 5)
    .map((item, index) => ({
      id: Number(item.id) || index + 1,
      title: item.title,
      category: item.category || "Project",
      description: item.summary || "",
      tags: item.tags?.slice(0, 3) ?? [],
      gradient:
        HOME_CARD_GRADIENTS[index % HOME_CARD_GRADIENTS.length] ||
        "linear-gradient(135deg, #14A8C7 0%, #273582 100%)",
      ...(item.thumbnail ? { thumbnail: item.thumbnail } : {}),
    }));

  return <HomeClient products={featuredProducts} />;
}
