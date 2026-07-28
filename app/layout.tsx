import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Agrowill Biotech | Premium Cultivated Cordyceps Supplier',
    template: '%s | Agrowill Biotech',
  },
  description:
    'Agrowill Biotech cultivates pharmaceutical grade Cordyceps militaris in controlled laboratory environments for pharmaceutical, nutraceutical, wellness and research industries worldwide.',
  keywords: [
    'Cordyceps supplier',
    'Cordyceps militaris',
    'cultivated Cordyceps India',
    'bulk medicinal mushrooms',
    'nutraceutical ingredients',
    'Agrowill Biotech',
  ],
  
   icons: {
    icon: "/images/my-logo.png",
  apple: "/images/my-logo.png",
  shortcut: "/images/my-logo.png",
  },
};


export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1B4D3E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
