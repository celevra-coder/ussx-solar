import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ussxsolar.com"),

  title: "USS-X Solar | Фотоволтаични системи",

  description:
    "Проектиране, доставка, изграждане и поддръжка на фотоволтаични системи.",

  openGraph: {
    title: "USS X Solar",
    description: "Фотоволтаични системи за дома и бизнеса.",
    url: "https://ussxsolar.com",
    siteName: "USS X Solar",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "/social-preview",
        width: 1200,
        height: 630,
        alt: "USS X Solar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "USS X Solar",
    description: "Фотоволтаични системи за дома и бизнеса.",
    images: ["/social-preview"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className={`${geist.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
