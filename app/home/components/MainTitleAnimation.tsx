'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'

type Props = {
  inputString: string
  onAnimationFinished: () => void
}

const MainTitleAnimation: React.FC<Props> = ({
  inputString,
  onAnimationFinished,
}) => {
  const [animationsCompleted, setAnimationsCompleted] = useState(0)
  const [words, setWords] = useState<string[]>([])
  const [speed, setSpeed] = useState(0)
  const { ref } = useParallax<HTMLDivElement>({ speed })

  useEffect(() => {
    const splitedWords = inputString.split(' ') // Separa la frase en palabra
    setWords(splitedWords)
  }, [inputString])

  const handleAnimationComplete = () => {
    setAnimationsCompleted(animationsCompleted + 1)

    if (animationsCompleted === words.length - 1) {
      setSpeed(10)
      onAnimationFinished()
    }
  }

  return (
    <div
      ref={ref}
      className="flex flex-row justify-center flex-wrap space-x-4 lg:space-x-10"
    >
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          onAnimationComplete={handleAnimationComplete}
        >
          <>
            {word.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="text-aeh_primary font-sans text-[28px] lg:text-[100px] tracking-wider"
              >
                {letter}
              </motion.span>
            ))}
          </>
        </motion.div>
      ))}
    </div>
  )
}

export default MainTitleAnimation
