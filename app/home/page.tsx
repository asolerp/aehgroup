'use client'

import Image from 'next/image'
import MainTitleAnimation from './components/MainTitleAnimation'
import { useRef, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { motion } from 'framer-motion'
import AboutUsSection from './components/AboutUsSection'
import { Carousel } from 'react-responsive-carousel'
import Button from '../components/Button'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
  const [letterAnimationFinished, setLetterAnimationFinished] = useState(false)

  return (
    <main className="flex min-h-screen">
      <div className="w-full flex flex-col justify-center mt-14 lg:mt-20">
        <div className="lg:px-20 z-10">
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
                  className="lg:-mt-36 mt-10  object-contain"
                />
              </div>
              <AboutUsSection />
              <ProjectsSection />
              <div className="flex flex-col items-center mb-20">
                <div className="py-20">
                  <h2 className="text-gray-800 font-sans text-[32px] lg:text-[70px] tracking-widest text-center">
                    CONTEMPLA EL ASOMBRO DE TU HOGAR RENACIDO
                  </h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 px-4 lg:px-0">
                  <div className="col-span-1">
                    <Image
                      alt="AEH Group Hero"
                      src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
                      width={480}
                      height={480}
                      className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      alt="AEH Group Hero"
                      src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_2.png"
                      width={480}
                      height={480}
                      className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      alt="AEH Group Hero"
                      src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_3.png"
                      width={480}
                      height={480}
                      className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      alt="AEH Group Hero"
                      src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_2.png"
                      width={480}
                      height={480}
                      className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      alt="AEH Group Hero"
                      src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_3.png"
                      width={480}
                      height={480}
                      className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      alt="AEH Group Hero"
                      src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
                      width={480}
                      height={480}
                      className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
                    />
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
