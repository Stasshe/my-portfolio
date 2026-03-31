import type { Metadata } from "next";
import "./globals.css";
import "./products/products.css";

export const metadata: Metadata = {
  title: "Stasshe — Portfolio",
  description: "Creative portfolio of Stasshe. Design, development, and everything in between.",
  openGraph: {
    title: "Stasshe — Portfolio",
    description: "Creative portfolio of Stasshe. Design, development, and everything in between.",
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
