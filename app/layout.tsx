import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MenuWatch — Track Competitor Restaurant Prices',
  description: 'Monitor competitor restaurant menus and prices within a 3-mile radius. Get instant alerts when competitors change pricing and receive AI-powered pricing recommendations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b933c7de-5ed7-4d3a-aba5-d2ff162cada9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
