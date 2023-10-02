import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
}

const FadeInAnimation: React.FC<Props> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once when the element enters the viewport.
    threshold: 0.2, // Adjust this threshold as needed for when you want the animation to start.
  })

  const fadeInAnimation = {
    hidden: { y: -5, opacity: 0, transition: { duration: 1.5 } },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInAnimation}
    >
      {children}
    </motion.div>
  )
}

export default FadeInAnimation
