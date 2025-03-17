import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { feedConfig } from '@/lib/feedConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(feedConfig.siteUrl),
  title: {
    default: feedConfig.siteTitle,
    template: `%s - ${feedConfig.siteTitle}`
  },
  description: feedConfig.siteDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: feedConfig.siteUrl,
    siteName: feedConfig.siteTitle,
    images: [
      {
        url: feedConfig.ogImage,
        width: 1200,
        height: 630,
        alt: feedConfig.siteTitle
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@josh_b_rad'
  },
  appleWebApp: {
    title: feedConfig.siteTitle,
    statusBarStyle: 'black-translucent',
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon.ico/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.ico/favicon.svg",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      url: "/favicon.ico/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon.ico/apple-touch-icon.png",
    },
  ],
  manifest: "/favicon.ico/site.webmanifest",
  robots: {
    index: true,
    follow: true
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title={`${feedConfig.siteTitle} RSS Feed`} href={feedConfig.feedPaths.rss} />
        <link rel="alternate" type="application/atom+xml" title={`${feedConfig.siteTitle} Atom Feed`} href={feedConfig.feedPaths.atom} />
        <link rel="alternate" type="application/json" title={`${feedConfig.siteTitle} JSON Feed`} href={feedConfig.feedPaths.json} />
      </head>
      <body className={inter.className}>
        <main className="container max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
} 