import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { type } from 'os'

type Props = {
  children: React.ReactNode
}

const FadeInElement: React.FC<Props> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once when the element enters the viewport.
    threshold: 0.2, // Adjust this threshold as needed for when you want the animation to start.
  })

  const fadeInAnimation = {
    hidden: { scaleY: 0, transition: { duration: 1 } },
    visible: { scaleY: 1, transition: { duration: 1 } },
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

export default FadeInElement
