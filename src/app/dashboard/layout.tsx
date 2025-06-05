import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'

const caveat = Caveat({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'sans-serif'],
  weight: '700',
})

export const metadata: Metadata = {
  title: 'nino',
  description: 'nino1213',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={`${caveat.className}`}>
    {children}
  </div>
}