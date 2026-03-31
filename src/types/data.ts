export type ProductItem = {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  thumbnail: string; // URL or gradient
  colSpan: number; // 1-4
  rowSpan: number; // 1-4
  year: string;
  contents: string;
};
