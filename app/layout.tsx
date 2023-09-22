import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import { MenuContextProvider } from './context/MenuContext'
import Menu from './components/Menu'
import Image from 'next/image'
import Footer from './components/Footer'

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
        <MenuContextProvider>
          <Menu />
          <div className=" ">
            <NavBar />
            {children}
            <Footer />
          </div>
        </MenuContextProvider>
      </body>
    </html>
  )
}
