'use client'

import { createContext, useContext, useState } from 'react'

type MenuContextType = {
  menuOpen: boolean
  setMenuOpen: (state: boolean) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

type MenuContextProviderProps = {
  children: React.ReactNode
}

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenuContext() {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuContextProvider')
  }
  return context
}
