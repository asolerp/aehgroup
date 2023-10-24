import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ImageTransitionProps = {
  imageSrc: string
}

const ImageTransition: React.FC<ImageTransitionProps> = ({ imageSrc }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={imageSrc} // Use the image source as the key to trigger animations
        src={imageSrc}
        alt="Image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className=" object-cover  w-full h-screen"
      />
    </AnimatePresence>
  )
}

export default ImageTransition
