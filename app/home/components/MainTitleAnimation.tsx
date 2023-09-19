'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

  useEffect(() => {
    const splitedWords = inputString.split(' ') // Separa la frase en palabra
    setWords(splitedWords)
  }, [inputString])

  const handleAnimationComplete = () => {
    setAnimationsCompleted(animationsCompleted + 1)

    if (animationsCompleted === words.length - 1) {
      onAnimationFinished()
    }
  }

  return (
    <div className="flex flex-row justify-center flex-wrap space-x-10">
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onAnimationComplete={handleAnimationComplete}
        >
          <>
            {word.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-aeh_primary font-sans text-[100px] tracking-widest"
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
