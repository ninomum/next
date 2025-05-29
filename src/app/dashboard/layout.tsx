import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'nino',
  description: 'nino1213',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}