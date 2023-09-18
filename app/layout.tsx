import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import { MenuContextProvider } from './context/MenuContext'
import Menu from './components/Menu'

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
      <body>
        <MenuContextProvider>
          <Menu />
          <div className="p-10">
            <NavBar />
            {children}
          </div>
        </MenuContextProvider>
      </body>
    </html>
  )
}
