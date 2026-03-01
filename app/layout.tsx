import type { Metadata } from "next";
import { DM_Serif_Display, Syne, Syne_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const syneMono = Syne_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appraise — Vintage Pricing for Depop Sellers",
  description:
    "Stop guessing. Get instant price ranges, avg sold prices, and sell-through speed based on real Depop sold listings. Built for vintage resellers.",
  openGraph: {
    title: "Appraise — Vintage Pricing for Depop Sellers",
    description:
      "Stop guessing. Get instant price ranges based on real Depop sold data.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${syne.variable} ${syneMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
