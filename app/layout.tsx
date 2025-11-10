import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Family Recipe Keeper - Preserve Your Family's Culinary Heritage",
  description: "Digitize, preserve, and share your family's handwritten recipes before it's too late. Multi-image OCR captures both sides of recipe cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
