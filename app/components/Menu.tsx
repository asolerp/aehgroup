'use client'

import { motion } from 'framer-motion'
import { useMenuContext } from '../context/MenuContext'
import { useEffect, useState } from 'react'

export default function Menu() {
  const [finished, setFinished] = useState(false)
  const { menuOpen } = useMenuContext()

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
        <div className="cols-span-1 bg-white"></div>
        <div className=" col-span-1 bg-green-900"></div>
      </div>
    </motion.div>
  )
}
