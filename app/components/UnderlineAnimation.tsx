'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

type UnderlineAnimationProps = {
  isActive: boolean
  onHover?: () => void
  children: React.ReactNode
}

const UnderlineAnimation: React.FC<UnderlineAnimationProps> = ({
  onHover,
  isActive,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverStart = () => {
    setIsHovered(true)
    if (onHover) {
      onHover()
    }
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
  }

  return (
    <div
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className="cursor-pointer"
    >
      {children}
      {isActive ? (
        <div
          className="w-full h-1 bg-black"
          style={{
            transformOrigin: '0% 100%',
          }}
        ></div>
      ) : (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-1 bg-black"
          style={{
            transformOrigin: '0% 100%',
          }}
        ></motion.div>
      )}
    </div>
  )
}

export default UnderlineAnimation
