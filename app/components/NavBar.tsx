'use client'

import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import Link from 'next/link'
import { Turn as Hamburger } from 'hamburger-react'
import { useMenuContext } from '../context/MenuContext'
import debounce from 'lodash.debounce'
import { usePathname } from 'next/navigation'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const variants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
}

const LOGO_ROUTE =
  'https://res.cloudinary.com/caskchain/image/upload/v1695036478/AEHGroup/aeh_logo.png'

export default function NavBar() {
  const { setMenuOpen, menuOpen } = useMenuContext()
  const pathName = usePathname()

  const handleMenuToggle = debounce((state) => {
    setMenuOpen(state)
  }, 300)

  const backgroundColor =
    pathName !== '/equipo' && pathName !== '/servicios'
      ? 'bg-white'
      : 'bg-aeh_secondary'

  return (
    <>
      <ParallaxProvider>
        <div className={`pt-10 lg:p-10 w-full ${backgroundColor}`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <Parallax
              translateY={[0, 50]}
              opacity={[1, 0.3]}
              shouldAlwaysCompleteAnimation={true}
              className="flex flex-row justify-center lg:justify-between items-center w-full"
            >
              <Image
                src={LOGO_ROUTE}
                alt="AEH Group"
                width={100}
                height={100}
                className="w-[80px] h-[55px] lg:w-[90px] lg:h-[60px]"
              />
              <div className="lg:flex lg:flex-row flex-grow justify-center space-x-20 hidden">
                <Link href="/home">
                  <p className="font-sans text-2xl font-light">Home</p>
                </Link>
                <Link href="/proyectos">
                  <p className="font-sans text-2xl font-light">Proyectos</p>
                </Link>
                <Link href="/servicios">
                  <p className="font-sans text-2xl font-light">Servicios</p>
                </Link>
                <Link href="/equipo">
                  <p className="font-sans text-2xl font-light">Equipo</p>
                </Link>
                <Link href="/contacta">
                  <p className="font-sans text-2xl font-light">Contacta</p>
                </Link>
              </div>
              <div className="hidden lg:block lg:w-[100px]"></div>
            </Parallax>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute right-4 top-10 lg:fixed lg:top-12 lg:right-10 z-50 lg:w-[100px]"
          >
            <Hamburger
              toggled={menuOpen}
              size={30}
              onToggle={(state) => handleMenuToggle(state)}
            />
          </motion.div>
        </div>
      </ParallaxProvider>
    </>
  )
}
