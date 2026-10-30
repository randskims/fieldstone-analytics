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
