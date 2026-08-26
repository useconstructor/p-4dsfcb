import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurum | Exclusive Luxury Jewelry",
  description: "Discover Aurum's exclusive collection of luxury rings, necklaces, and bracelets. Handcrafted with precision for the discerning collector.",
  keywords: "luxury jewelry, exclusive jewelry, gold jewelry, premium rings, luxury necklaces, designer bracelets",
  openGraph: {
    title: "Aurum | Exclusive Luxury Jewelry",
    description: "Discover Aurum's exclusive collection of luxury rings, necklaces, and bracelets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💍</text></svg>" />
      </head>
      <body className={`${cormorantGaramond.variable} ${montserrat.variable} bg-[#0A0A0A] text-[#FAFAFA] antialiased`}>
        {children}
      </body>
    </html>
  );
}
