import type { Metadata } from "next";
import "./globals.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "NDP Analysis",
  description: "Data-driven insights and analysis about the New Democratic Party"
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
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
