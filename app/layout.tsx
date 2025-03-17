import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { feedConfig } from '../lib/feedConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(feedConfig.siteUrl),
  title: {
    default: feedConfig.siteTitle,
    template: `%s | ${feedConfig.siteTitle}`
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
  robots: {
    index: true,
    follow: true
  }
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
        <header className="py-6 border-b">
          <div className="container max-w-4xl mx-auto px-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">Josh Bradley</Link>
              <div className="flex gap-4">
                <Link href="/api/rss" className="flex items-center gap-1 hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11a9 9 0 0 1 9 9"></path>
                    <path d="M4 4a16 16 0 0 1 16 16"></path>
                    <circle cx="5" cy="19" r="1"></circle>
                  </svg>
                  RSS
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="container max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="py-6 border-t">
          <div className="container max-w-4xl mx-auto px-4 text-center text-gray-500">
            © {new Date().getFullYear()} Josh Bradley
          </div>
        </footer>
      </body>
    </html>
  )
} 