import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Family Recipe Keeper - Preserve Your Family's Culinary Heritage",
  description: "Don't let Grandma's recipes die with her. Digitize, preserve, and share your family's handwritten recipes before it's too late. Multi-image OCR captures both sides of recipe cards. Free forever for 50 recipes.",
  keywords: "family recipes, recipe keeper, digitize recipes, preserve recipes, recipe cards, handwritten recipes, family cookbook, recipe organizer, OCR recipe scanning",
  openGraph: {
    title: "My Family Recipe Keeper - Preserve Your Family's Culinary Heritage",
    description: "Don't let Grandma's recipes die with her. Start preserving your family recipes today. Free forever.",
    url: "https://myfamilyrecipekeeper.com",
    siteName: "My Family Recipe Keeper",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Family Recipe Keeper - Preserve Your Family's Culinary Heritage",
    description: "Don't let Grandma's recipes die with her. Start preserving your family recipes today.",
    images: ["/og-image.png"],
  },
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
