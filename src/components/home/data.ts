export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  thumbnail?: string;
};

export type IndexItem = {
  id: string;
  title: string;
  category: string;
};

export const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Svelte / SolidJS",
  "Astro",
  "Swift",
  "Rust",
  "WebAssembly",
  "Web Workers",
  "Node.js",
  "GSAP",
  "Figma",
];
