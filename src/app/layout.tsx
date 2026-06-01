import "@/components/home/marquee/MarqueeSection.css";
import "@/components/home/skew/SkewSection.css";
import "@/components/home/works/WorksSection.css";
import type { Metadata } from "next";
import "./globals.css";
import "./products/products.css";
import "./products/[id]/product-detail.css";

export const metadata: Metadata = {
  title: "Naoki Ishida / Stasshe — Portfolio",
  description:
    "Portfolio of Naoki Ishida, a software builder focused on browser IDEs, real-world operations tools, UX under constraints, and context-aware engineering.",
  openGraph: {
    title: "Naoki Ishida / Stasshe — Portfolio",
    description:
      "Browser IDEs, school operations tools, UX under constraints, and context-aware engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
