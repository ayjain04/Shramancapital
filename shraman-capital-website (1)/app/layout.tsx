import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shraman Capital | Your Partner in Wealth Creation',
  description: 'Shraman Capital is a one-stop solution provider for all your financial needs. We help you grow your investment portfolio, plan for retirement, and secure your family\'s future.',
  keywords: ['financial planning', 'wealth management', 'mutual funds', 'investment', 'insurance', 'retirement planning', 'Pune'],
  authors: [{ name: 'Shraman Capital' }],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1e5631',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
