import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'NoorDash — Quran Memorization Your Kids Ask For',
  description:
    'NoorDash makes Quran memorization joyful and structured through in-app rewards and parent-approved progress. Designed for Muslim families in the West with children aged 5-12.',
  keywords: [
    'Quran memorization app',
    'Muslim kids app',
    'Islamic education',
    'Quran for children',
    'hifz app',
    'NoorDash',
  ],
  openGraph: {
    title: 'NoorDash — Quran Memorization Your Kids Ask For',
    description:
      'Make Quran memorization something they ask for. Joyful, structured, parent-approved.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D7377',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
