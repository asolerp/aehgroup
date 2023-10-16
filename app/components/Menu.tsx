'use client'

import { motion, Variants } from 'framer-motion'
import { useMenuContext } from '../context/MenuContext'
import { ChangeEvent, useEffect, useState, useTransition } from 'react'

import Image from 'next/image'
import UnderlineAnimation from './UnderlineAnimation'
import useMenuHandler from '../hooks/useMenuHandler'
import ImageTransition from './ImageTransition'
import { usePathname, useRouter } from 'next-intl/client'
import { useTranslations } from 'next-intl'

const listVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2, // Controls the stagger effect
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

export default function Menu() {
  const [finished, setFinished] = useState(false)
  const { menuOpen, setMenuOpen } = useMenuContext()
  const [startTransition] = useTransition()
  const { getIsMenuActive, imageSrc, handleImageChange } = useMenuHandler()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Menu')

  const menuItems = [
    { path: '/home', label: t('home') },
    { path: '/proyectos', label: t('projects') },
    { path: '/servicios', label: t('services') },
    { path: '/equipo', label: t('about') },
    { path: '/contacta', label: t('contact') },
  ]

  const handleOnAnimationComplete = () => {
    if (!menuOpen) {
      setFinished(true)
    }
  }

  const handleRouteChange = (path: string) => {
    setMenuOpen(false)
    router.push(path)
  }

  function handleLanguageChange(locale: string) {
    console.log(locale)
    router.replace(pathname, { locale })
  }

  useEffect(() => {
    if (menuOpen) {
      setFinished(false)
    }
  }, [menuOpen])

  const animationVariants = {
    hidden: { x: '100%', opacity: 1 },
    visible: { x: 0, opacity: 1 },
  }

  if (finished) return null

  return (
    <motion.div
      initial="hidden"
      animate={menuOpen ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 1,
      }}
      onAnimationComplete={handleOnAnimationComplete}
      className="fixed inset-0 top-0 z-20 w-full h-full"
    >
      <div className="flex items-center justify-center lg:grid lg:grid-cols-2 w-full h-full bg-white">
        <div className="lg:cols-span-1 flex h-full flex-col items-center">
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start justify-center w-fit h-full"
          >
            {menuItems.map((item: any) => (
              <motion.li key={item.path} variants={itemVariants}>
                <UnderlineAnimation
                  isActive={getIsMenuActive(item.path)}
                  onHover={() => handleImageChange(item.path)}
                >
                  <p
                    onClick={() => handleRouteChange(item.path)}
                    className="font-sans text-[20px] lg:text-[40px] font-light tracking-widest cursor-pointer text-gray-600"
                  >
                    {item.label}
                  </p>
                </UnderlineAnimation>
              </motion.li>
            ))}
          </motion.ul>
          <div className="flex flex-col flex-grow justify-end items-center mb-10 space-y-6">
            <Image
              src="https://res.cloudinary.com/caskchain/image/upload/v1695040186/AEHGroup/aeh_instagram.png"
              alt="AEH Group Instagram"
              width={50}
              height={50}
              className="object-contain lg:w-[40px] lg:h-[40px] w-[35px] h-[35px]"
            />
            <div className="flex flex-row space-x-4">
              {['es', 'en', 'de'].map((lang) => (
                <p
                  onClick={() => handleLanguageChange(lang)}
                  key={lang}
                  className="cursor-pointer font-sans text-[20px] lg:text-[30px] text-aeh_primary"
                >
                  {lang.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:flex-grow h-full col-span-1 bg-white">
          <ImageTransition imageSrc={imageSrc as string} />
        </div>
      </div>
    </motion.div>
  )
}
