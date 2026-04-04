import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";

export type MdxProduct = {
  id: string;
  title: string;
  summary?: string;
  category?: string;
  tags?: string[];
  thumbnail?: string;
  colSpan?: number;
  rowSpan?: number;
  year?: string;
  contentHtml: string;
  raw: string;
};

const PRODUCTS_DIR = path.join(process.cwd(), "data", "products");

function resolveImagePath(imagePath: string): string {
  if (!imagePath || imagePath.startsWith("http") || imagePath.startsWith("/")) {
    return imagePath;
  }
  return `/data/products/${imagePath}`;
}

function getMdxFiles(): string[] {
  if (!fs.existsSync(PRODUCTS_DIR)) return [];
  return fs.readdirSync(PRODUCTS_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

function resolveImagePathsInHtml(html: string): string {
  return html.replace(/src="(?!(?:https?:\/\/|\/|data:))([^"]+)"/g, (_match, imagePath) => {
    return `src="${resolveImagePath(imagePath)}"`;
  });
}

export function getAllProductsFromMdx(): MdxProduct[] {
  const files = getMdxFiles();
  return files.map((file) => {
    const fullPath = path.join(PRODUCTS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const rawContent = String(content ?? "");
    const withoutScripts = rawContent.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
    const contentHtml = marked(withoutScripts, { mangle: false, headerIds: false });
    const resolvedHtml = resolveImagePathsInHtml(String(contentHtml));

    return {
      id: String(data.id ?? ""),
      title: String(data.title ?? ""),
      summary: String(data.summary ?? ""),
      category: String(data.category ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      thumbnail: resolveImagePath(String(data.thumbnail ?? "")),
      colSpan: Number(data.colSpan ?? 1),
      rowSpan: Number(data.rowSpan ?? 1),
      year: String(data.year ?? ""),
      contentHtml: resolvedHtml,
      raw,
    } as MdxProduct;
  });
}

export function getProductById(id: string): MdxProduct | null {
  const items = getAllProductsFromMdx();
  return items.find((p) => p.id === id) ?? null;
}
