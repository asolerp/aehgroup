'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ParallaxProvider } from 'react-scroll-parallax'
import Spacer from './Spacer'

type Props = {
  title?: string
  subtitle?: string
  children?: React.ReactNode
}

const LayoutWithMainTitleAnimation: React.FC<Props> = ({
  title,
  subtitle,
  children,
}) => {
  const [animationsCompleted, setAnimationsCompleted] = useState(0)
  const [words, setWords] = useState<string[]>([])
  const [letterAnimationFinished, setLetterAnimationFinished] = useState(false)

  useEffect(() => {
    if (!title) return
    const splitedWords = title?.split(' ') // Separa la frase en palabra
    setWords(splitedWords)
  }, [title])

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
          <div
            className={`flex flex-col items-center justify-start lg:w-[60%] w-[95%] ${
              title && `h-full`
            }`}
          >
            {title && (
              <div className="flex flex-row items-center justify-center flex-wrap space-x-4 lg:space-x-10 ">
                {words.map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    onAnimationComplete={handleAnimationComplete}
                  >
                    <>
                      {word.split('').map((letter, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0.1 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="text-aeh-700 font-sans text-[25px] lg:text-[50px] tracking-widest"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </>
                  </motion.div>
                ))}
              </div>
            )}
            <Spacer className="pb-4 md:pb-6 lg:pb-4" />
            {subtitle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="px-10 md:px-0"
              >
                <h2 className="text-sm lg:text-xl font-thin font-sans leading-normal tracking-widest text-aeh_primary text-center">
                  {subtitle}
                </h2>
              </motion.div>
            )}
          </div>
          <div className="flex flex-grow w-full">
            {(!title || letterAnimationFinished) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`w-full ${title && `pt-10`}`}
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
