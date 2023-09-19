'use client'

import { motion, Variants } from 'framer-motion'
import { useMenuContext } from '../context/MenuContext'
import { useEffect, useState } from 'react'

import UnderlineAnimation from './UnderlineAnimation'
import useMenuHandler from '../hooks/useMenuHandler'
import ImageTransition from './ImageTransition'
import Link from 'next/link'

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
  const { menuOpen } = useMenuContext()
  const { getIsMenuActive, imageSrc, handleImageChange } = useMenuHandler()

  const handleOnAnimationComplete = () => {
    if (!menuOpen) {
      setFinished(true)
    }
  }

  useEffect(() => {
    if (menuOpen) {
      setFinished(false)
    }
  }, [menuOpen])

  const animationVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  if (finished) return null

  return (
    <motion.div
      initial="hidden"
      animate={menuOpen ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={{ duration: 0.5 }}
      onAnimationComplete={handleOnAnimationComplete}
      className="fixed inset-0 top-0 z-10 w-full h-full"
    >
      <div className="grid grid-cols-2 w-full h-full">
        <div className="cols-span-1 bg-white">
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start justify-center w-full h-full px-32"
          >
            <motion.li variants={itemVariants}>
              <UnderlineAnimation
                isActive={getIsMenuActive('/home')}
                onHover={() => handleImageChange('/home')}
              >
                <Link href="/home">
                  <p className="font-sans text-[80px] font-light">Home</p>
                </Link>
              </UnderlineAnimation>
            </motion.li>
            <motion.li variants={itemVariants}>
              <UnderlineAnimation
                isActive={getIsMenuActive('/projectos')}
                onHover={() => handleImageChange('/projectos')}
              >
                <Link href="/projectos">
                  <p className="font-sans text-[80px] font-light">Projectos</p>
                </Link>
              </UnderlineAnimation>
            </motion.li>
            <motion.li variants={itemVariants}>
              <UnderlineAnimation
                isActive={getIsMenuActive('/servicios')}
                onHover={() => handleImageChange('/servicios')}
              >
                <Link href="/servicios">
                  <p className="font-sans text-[80px] font-light">Servicios</p>
                </Link>
              </UnderlineAnimation>
            </motion.li>
            <motion.li variants={itemVariants}>
              <UnderlineAnimation
                isActive={getIsMenuActive('/nosotros')}
                onHover={() => handleImageChange('/nosotros')}
              >
                <Link href="/nosotros">
                  <p className="font-sans text-[80px] font-light">El Equipo</p>
                </Link>
              </UnderlineAnimation>
            </motion.li>
          </motion.ul>
        </div>
        <div className=" col-span-1 bg-white">
          <ImageTransition imageSrc={imageSrc as string} />
        </div>
      </div>
    </motion.div>
  )
}
