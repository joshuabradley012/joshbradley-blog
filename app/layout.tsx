import type { Metadata } from "next";
import { Lora, Inter, JetBrains_Mono } from "next/font/google";
import { unstable_ViewTransition as ViewTransition } from "react";
import { feedConfig } from "@/lib/feedConfig";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  style: ["normal", "italic"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  style: ["normal", "italic"],
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(feedConfig.siteUrl),
  title: {
    default: feedConfig.siteTitle,
    template: `%s · ${feedConfig.siteTitle}`,
  },
  description: feedConfig.siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: feedConfig.siteUrl,
    siteName: feedConfig.siteTitle,
    images: [
      {
        url: feedConfig.ogImage,
        width: 1200,
        height: 630,
        alt: feedConfig.siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@josh_b_rad",
  },
  appleWebApp: {
    title: feedConfig.siteTitle,
    statusBarStyle: "black-translucent",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon/favicon.svg",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
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
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${feedConfig.siteTitle} RSS Feed`}
          href={feedConfig.feedPaths.rss}
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title={`${feedConfig.siteTitle} Atom Feed`}
          href={feedConfig.feedPaths.atom}
        />
        <link
          rel="alternate"
          type="application/json"
          title={`${feedConfig.siteTitle} JSON Feed`}
          href={feedConfig.feedPaths.json}
        />
      </head>
      <body
        className={`text-sm text-neutral-800 antialiased ${inter.variable} ${lora.variable} ${jetbrainsMono.variable}`}
      >
        <div className="xs:flex-row xs:p-6 flex flex-col p-4 pb-12 sm:p-12 md:p-24 md:pb-24">
          <Nav />
          <main className="xs:pl-6 relative w-full min-w-0 text-justify hyphens-auto sm:max-w-2xl sm:pl-8 md:pl-12">
            <div className="xs:block absolute top-0 left-0 hidden h-full border-l border-neutral-200" />
            <ViewTransition name="crossfade">
              <article className="relative">{children}</article>
            </ViewTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
