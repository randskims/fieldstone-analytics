import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MotionProvider from '@/components/MotionProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fieldstoneanalytics.com'),
  title: 'Fieldstone Analytics | Deterministic Edge Intelligence',
  description:
    'A window of signal, distilled to one auditable byte — the decision, not the data. Fieldstone Analytics builds a frozen, deterministic single-token encoder for sub-milliwatt, auditable edge intelligence, validated across more than a dozen sensing modalities.',
  keywords:
    'edge AI, decision token, deterministic inference, auditable AI, single-token encoder, condition monitoring, digital twin, AI safety, TinyML, sub-milliwatt, predictive maintenance',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://fieldstoneanalytics.com',
    siteName: 'Fieldstone Analytics',
    title: 'Fieldstone Analytics | Deterministic Edge Intelligence',
    description:
      'A frozen, deterministic single-token encoder — one auditable byte per decision. Sub-milliwatt, bit-exact edge AI, characterized across more than a dozen sensing modalities in 68 open-access studies.',
    images: [
      {
        url: '/og-image.png?v=4',
        width: 1200,
        height: 630,
        alt: 'Fieldstone Analytics — One auditable byte. Every decision.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fieldstone Analytics | Deterministic Edge Intelligence',
    description:
      'A frozen, deterministic single-token encoder — one auditable byte per decision. Sub-milliwatt, bit-exact edge AI.',
    images: ['/og-image.png?v=4'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
