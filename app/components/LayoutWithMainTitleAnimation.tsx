'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

type Props = {
  inputString: string
  children?: React.ReactNode
}

const LayoutWithMainTitleAnimation: React.FC<Props> = ({
  inputString,
  children,
}) => {
  const [animationsCompleted, setAnimationsCompleted] = useState(0)
  const [words, setWords] = useState<string[]>([])
  const [letterAnimationFinished, setLetterAnimationFinished] = useState(false)

  useEffect(() => {
    const splitedWords = inputString.split(' ') // Separa la frase en palabra
    setWords(splitedWords)
  }, [inputString])

  const handleAnimationComplete = () => {
    setAnimationsCompleted(animationsCompleted + 1)
    if (animationsCompleted === words.length - 1) {
      setLetterAnimationFinished(true)
    }
  }

  return (
    <ParallaxProvider>
      <main className="flex min-h-screen bg-white">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="lg:w-[80%] w-[95%] z-10">
            <div className="flex flex-row justify-center flex-wrap space-x-4 lg:space-x-10">
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
                        className="text-gray-600 font-sans text-[35px] lg:text-[70px] tracking-widest"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-grow w-full">
            {letterAnimationFinished && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full"
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </ParallaxProvider>
  )
}

export default LayoutWithMainTitleAnimation
