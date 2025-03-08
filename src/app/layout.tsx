import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";
import "./critical.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  title: "BC Policy Analysis | Data-Driven Insights on NDP Governance",
  description: "Data-driven analysis of policy failures in British Columbia under NDP governance, highlighting the need for accountability and reform.",
  metadataBase: new URL('https://www.voideconomy.com'),
  keywords: "BC politics, NDP policy failures, British Columbia analysis, crime rates, housing crisis, drug epidemic, refugee impact, population exodus",
  authors: [{ name: "BC Policy Analysis Team" }],
  openGraph: {
    title: "BC Policy Analysis | Data-Driven Insights on NDP Governance",
    description: "Comprehensive data analysis of policy failures in British Columbia under NDP governance.",
    url: 'https://www.voideconomy.com',
    siteName: 'BC Policy Analysis',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BC Policy Analysis | Data-Driven Insights on NDP Governance',
    description: 'Comprehensive data analysis of policy failures in British Columbia under NDP governance.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
        <link rel="canonical" href="https://www.voideconomy.com" />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical styles for orange elements - inline for immediate loading */
          header.bg-orange-600 {
            background-color: oklch(.646 .222 41.116) !important; /* Custom darker orange using OKLCH */
          }
          .text-orange-500, .text-orange-600 {
            color: #f97316 !important;
          }
          .border-orange-600 {
            border-color: #f97316 !important;
          }
          .bg-orange-600 {
            background-color: #f97316 !important;
          }
          .bg-orange-600\/20 {
            background-color: rgba(249, 115, 22, 0.2) !important;
          }
          [stroke="#f97316"] {
            stroke: #f97316 !important;
          }
        `}} />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
