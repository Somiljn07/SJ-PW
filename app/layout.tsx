import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StarsBackground } from '@/components/stars-background'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

// Heading font — elegant serif with beautiful curves, premium on dark backgrounds
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-syne', // reuse the same CSS var so no other files need changing
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
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
  themeColor: '#0e0d0b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        <StarsBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
