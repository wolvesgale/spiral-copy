import type { Metadata } from "next";
import { generateDefaultSeo, type DefaultSeoProps } from "next-seo/pages";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | eggs.email",
    default: "eggs.email | Digital incubation for ideas that resonate",
  },
  description:
    "eggs.email is a digital studio supporting ideas from discovery to launch with thoughtful product strategy, design, and engineering.",
};

const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s | eggs.email",
  defaultTitle: "eggs.email | Digital incubation for ideas that resonate",
  description:
    "eggs.email partners with founders to craft resilient communication products and delightful email experiences.",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.eggs.email",
    siteName: "eggs.email",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "eggs.email hero",
      },
    ],
  },
  twitter: {
    handle: "@eggs_email",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [{ name: "theme-color", content: "#121418" }],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>{generateDefaultSeo(defaultSeo)}</head>
      <body className="min-h-screen bg-surface text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
