'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Turn as Hamburger } from 'hamburger-react'
import { useMenuContext } from '../context/MenuContext'

const LOGO_ROUTE =
  'https://res.cloudinary.com/caskchain/image/upload/v1695036478/AEHGroup/aeh_logo.png'

export default function NavBar() {
  const { setMenuOpen } = useMenuContext()

  return (
    <div className="flex flex-row items-center justify-between">
      <Image src={LOGO_ROUTE} alt="AEH Group" width={100} height={100} />
      <div className="flex flex-row flex-grow justify-center space-x-20">
        <Link href="/projectos">
          <p className="font-sans text-2xl font-light">Projects</p>
        </Link>
        <Link href="/servicios">
          <p className="font-sans text-2xl font-light">Servicios</p>
        </Link>
        <Link href="/equipo">
          <p className="font-sans text-2xl font-light">Sobre nosotros</p>
        </Link>
      </div>
      <div className="fixed right-10 z-50">
        <Hamburger size={30} onToggle={(state) => setMenuOpen(state)} />
      </div>
    </div>
  )
}
