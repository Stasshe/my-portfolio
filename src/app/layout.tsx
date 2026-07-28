import type { Metadata } from "next";
import { Newsreader, Noto_Sans_JP, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import "./products/products.css";
import "./products/[id]/product-detail.css";
import { ReactScan } from "@/components/shared/ReactScan";

const serifFont = Zen_Old_Mincho({
  weight: ["400", "600", "700", "900"],
  variable: "--font-serif",
  preload: false,
});

const accentFont = Newsreader({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-accent",
});

const sansFont = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  preload: false,
});

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
    <html lang="en" className={`${serifFont.variable} ${accentFont.variable} ${sansFont.variable}`}>
      <body>
        <ReactScan />
        {children}
      </body>
    </html>
  );
}
