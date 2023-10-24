'use client'

import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import Link from 'next/link'
import { Turn as Hamburger } from 'hamburger-react'
import { useMenuContext } from '../context/MenuContext'
import debounce from 'lodash.debounce'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useTranslations } from 'next-intl'

const variants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
}

const linkItems = [
  { href: '/home', text: 'home' },
  { href: '/proyectos', text: 'projects' },
  { href: '/servicios', text: 'services' },
  { href: '/equipo', text: 'about' },
  { href: '/contacta', text: 'contact' },
]

const LOGO_ROUTE =
  'https://res.cloudinary.com/caskchain/image/upload/v1696229637/AEHGroup/AEHGROUP_LOGO.jpg'

export default function NavBar() {
  const { setMenuOpen, menuOpen } = useMenuContext()
  const t = useTranslations('Menu')

  const handleMenuToggle = debounce((state) => {
    setMenuOpen(state)
  }, 300)

  const backgroundColor = 'bg-white'

  return (
    <>
      <ParallaxProvider>
        <div className={`py-10 lg:px-10 w-full ${backgroundColor}`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <Parallax
              translateY={[0, 50]}
              easing="easeOutQuad"
              opacity={[1, 0.3]}
              shouldAlwaysCompleteAnimation={true}
              className="flex flex-row justify-between items-center w-full px-5 lg:px-0"
            >
              <Link href="/home">
                <Image
                  src={LOGO_ROUTE}
                  alt="AEH Group"
                  width={100}
                  height={100}
                  className="w-[65px] h-[45px] lg:w-[110px] lg:h-[70px]"
                />
              </Link>
              <div className="lg:flex lg:flex-row flex-grow justify-center space-x-20 hidden">
                {linkItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <p className="font-sans text-xl font-light text-aeh-800">
                      {t(item.text)}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="hidden lg:block lg:w-[100px]"></div>
            </Parallax>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute right-4 top-10 lg:fixed lg:top-12 lg:right-10 z-40 lg:w-[100px]"
          >
            <Hamburger
              color="#313e3a"
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
