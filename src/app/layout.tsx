import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import {SanityLive} from "@/sanity/lib/live";

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

  title: "USS-X Solar | Ð¤Ð¾Ñ‚Ð¾Ð²Ð¾Ð»Ñ‚Ð°Ð¸Ñ‡Ð½Ð¸ ÑÐ¸ÑÑ‚ÐµÐ¼Ð¸",

  description:
    "ÐŸÑ€Ð¾ÐµÐºÑ‚Ð¸Ñ€Ð°Ð½Ðµ, Ð´Ð¾ÑÑ‚Ð°Ð²ÐºÐ°, Ð¸Ð·Ð³Ñ€Ð°Ð¶Ð´Ð°Ð½Ðµ Ð¸ Ð¿Ð¾Ð´Ð´Ñ€ÑŠÐ¶ÐºÐ° Ð½Ð° Ñ„Ð¾Ñ‚Ð¾Ð²Ð¾Ð»Ñ‚Ð°Ð¸Ñ‡Ð½Ð¸ ÑÐ¸ÑÑ‚ÐµÐ¼Ð¸.",

  openGraph: {
    title: "USS X Solar",
    description: "Ð¤Ð¾Ñ‚Ð¾Ð²Ð¾Ð»Ñ‚Ð°Ð¸Ñ‡Ð½Ð¸ ÑÐ¸ÑÑ‚ÐµÐ¼Ð¸ Ð·Ð° Ð´Ð¾Ð¼Ð° Ð¸ Ð±Ð¸Ð·Ð½ÐµÑÐ°.",
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
    description: "Ð¤Ð¾Ñ‚Ð¾Ð²Ð¾Ð»Ñ‚Ð°Ð¸Ñ‡Ð½Ð¸ ÑÐ¸ÑÑ‚ÐµÐ¼Ð¸ Ð·Ð° Ð´Ð¾Ð¼Ð° Ð¸ Ð±Ð¸Ð·Ð½ÐµÑÐ°.",
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
        <SanityLive />
      </body>
    </html>
  );
}
