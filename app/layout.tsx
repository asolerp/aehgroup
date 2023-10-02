import './globals.css'

import { Metadata } from 'next'
import MainLayout from './components/MainLayout'

export const metadata: Metadata = {
  title: 'AEH Group',
  description: 'Construcción y reformas en Mallorca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
