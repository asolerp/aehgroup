import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useIsLargeScreen from '@/app/hooks/useIsLargeScreen'

type Props = {
  children: React.ReactNode
}

const TranslateYAnimation: React.FC<Props> = ({ children }) => {
  const { isLargeScreen } = useIsLargeScreen()

  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only triggers once when the element enters the viewport.
    threshold: 0.2, // Adjust this threshold as needed for when you want the animation to start.
  })

  const translateYAnimation = {
    hidden: { y: isLargeScreen ? 40 : 20, transition: { duration: 1 } },
    visible: { y: 0, transition: { duration: 1 } },
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={translateYAnimation}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default TranslateYAnimation
