import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Somil Jain | Cloud & DevOps Engineer',
  description: 'Portfolio of Somil Jain - Cloud & DevOps Engineer working with AWS and Databricks at Celebal Technologies, Jaipur. 3x AWS Certified.',
  keywords: ['Cloud Engineer', 'DevOps', 'AWS', 'Databricks', 'Platform Engineering', 'Somil Jain'],
  authors: [{ name: 'Somil Jain' }],
  creator: 'Somil Jain',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#141210',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased relative">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
