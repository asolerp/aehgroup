'use client'

import { motion, Variants } from 'framer-motion'
import { useMenuContext } from '../context/MenuContext'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import UnderlineAnimation from './UnderlineAnimation'
import useMenuHandler from '../hooks/useMenuHandler'
import ImageTransition from './ImageTransition'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

const menuItems = [
  { path: '/home', label: 'Home' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/equipo', label: 'Equipo' },
  { path: '/contacto', label: 'Contacta' },
]

export default function Menu() {
  const [finished, setFinished] = useState(false)
  const { menuOpen, setMenuOpen } = useMenuContext()
  const { getIsMenuActive, imageSrc, handleImageChange } = useMenuHandler()
  const router = useRouter()

  const handleOnAnimationComplete = () => {
    if (!menuOpen) {
      setFinished(true)
    }
  }

  const handleRouteChange = (path: string) => {
    setMenuOpen(false)
    router.push(path)
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
                    className="font-sans text-[40px] lg:text-[80px] font-light tracking-widest cursor-pointer"
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
              className="object-contain lg:w-[50px] lg:h-[50px] w-[35px] h-[35px]"
            />
            <p className="font-sans text-[30px] lg:text-[40px] text-aeh_primary">
              ES | EN | DE
            </p>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:flex-grow h-full col-span-1 bg-white">
          <ImageTransition imageSrc={imageSrc as string} />
        </div>
      </div>
    </motion.div>
  )
}
