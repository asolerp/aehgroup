'use client'

import { MenuContextProvider } from '../context/MenuContext'
import Footer from './Footer'
import Menu from './Menu'
import NavBar from './NavBar'
import Spacer from './Spacer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MenuContextProvider>
      <Menu />
      <div>
        <NavBar />
        <Spacer className="pb-10 lg:pb-20" />
        {children}
        <Footer />
      </div>
    </MenuContextProvider>
  )
}
