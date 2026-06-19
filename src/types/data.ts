export type ProductItem = {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  thumbnail: string; // URL or gradient
  colSpan: number; // final grid tile span: 1 or 2
  rowSpan: number; // final grid tile span: 1 or 2
  date: string; // YYYY-MM-DD, used for sort order
  contents: string;
};
