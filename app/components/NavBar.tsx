'use client'

import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import Link from 'next/link'
import { Turn as Hamburger } from 'hamburger-react'
import { useMenuContext } from '../context/MenuContext'
import debounce from 'lodash.debounce'
import { usePathname } from 'next/navigation'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useTranslations } from 'next-intl'

const variants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
}

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
        <div className={`pt-10 lg:px-10 w-full ${backgroundColor}`}>
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
              className="flex flex-row justify-center lg:justify-between items-center w-full"
            >
              <Link href="/home">
                <Image
                  src={LOGO_ROUTE}
                  alt="AEH Group"
                  width={100}
                  height={100}
                  className="w-[80px] h-[55px] lg:w-[130px] lg:h-[90px]"
                />
              </Link>
              <div className="lg:flex lg:flex-row flex-grow justify-center space-x-20 hidden">
                <Link href="/home">
                  <p className="font-sans text-2xl font-light">{t('home')}</p>
                </Link>
                <Link href="/proyectos">
                  <p className="font-sans text-2xl font-light">
                    {t('projects')}
                  </p>
                </Link>
                <Link href="/servicios">
                  <p className="font-sans text-2xl font-light">
                    {t('services')}
                  </p>
                </Link>
                <Link href="/equipo">
                  <p className="font-sans text-2xl font-light">{t('about')}</p>
                </Link>
                <Link href="/contacta">
                  <p className="font-sans text-2xl font-light">
                    {t('contact')}
                  </p>
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
