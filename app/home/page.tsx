'use client'

import Image from 'next/image'
import MainTitleAnimation from './components/MainTitleAnimation'
import { useRef, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { motion } from 'framer-motion'
import AboutUsSection from './components/AboutUsSection'
import { Carousel } from 'react-responsive-carousel'
import Button from '../components/Button'

export default function Home() {
  const [letterAnimationFinished, setLetterAnimationFinished] = useState(false)

  const carouselRef = useRef<any>(null)

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.increment()
    }
  }

  const handlePrevClick = () => {
    console.log('prev')
    if (carouselRef.current) {
      carouselRef.current.decrement()
    }
  }

  return (
    <main className="flex min-h-screen">
      <div className="w-full flex flex-col justify-center mt-20">
        <div className="px-20 z-10">
          <MainTitleAnimation
            inputString="CONSTRUIMOS Y TRANSFORMARMOS EL HOGAR PERFECTO"
            onAnimationFinished={() => setLetterAnimationFinished(true)}
          />
        </div>
        <div className="flex flex-grow">
          {letterAnimationFinished && (
            <div className="flex flex-col">
              <div className="self-end">
                <motion.img
                  alt="AEH Group Hero"
                  src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
                  width={1400}
                  height={800}
                  initial={{ scale: 0 }}
                  animate={{ scale: letterAnimationFinished ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className="-mt-36  object-contain"
                />
              </div>
              <AboutUsSection />
              <div className="mt-20">
                <div className="relative">
                  <Carousel
                    ref={carouselRef}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                  >
                    <Image
                      alt=""
                      width={1400}
                      height={1000}
                      className="w-full h-[1000px] object-cover"
                      src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_2.png"
                    />
                    <Image
                      alt=""
                      width={1400}
                      height={1000}
                      className="w-full h-[1000px] object-cover"
                      src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
                    />
                  </Carousel>
                  <div className="w-full px-10 absolute z-10 bottom-14 flex flex-row items-center justify-between">
                    <div>
                      <Button text="Projectos" mode="secondary" />
                    </div>
                    <div className="flex flex-row space-x-5">
                      <Image
                        alt="AEH Group left icon"
                        src="https://res.cloudinary.com/caskchain/image/upload/v1695134267/AEHGroup/aeh_left_icon.png"
                        width={100}
                        height={100}
                        onClick={handlePrevClick}
                      />
                      <Image
                        alt="AEH Group right icon"
                        src="https://res.cloudinary.com/caskchain/image/upload/v1695134267/AEHGroup/aeh_right_icon.png"
                        width={100}
                        height={100}
                        onClick={handleNextClick}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
