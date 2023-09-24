'use client'

import Image from 'next/image'
import MainTitleAnimation from './components/MainTitleAnimation'
import { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { motion } from 'framer-motion'
import AboutUsSection from './components/AboutUsSection'

import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {
  const [letterAnimationFinished, setLetterAnimationFinished] = useState(false)

  return (
    <ParallaxProvider>
      <main className="flex min-h-screen bg-white">
        <div className="w-full flex flex-col justify-center mt-20">
          <div className="lg:px-20 z-10">
            <MainTitleAnimation
              inputString="CONSTRUIMOS Y TRANSFORMAMOS EL HOGAR PERFECTO"
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
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:-mt-36 mt-10  object-cover"
                  />
                </div>
                <AboutUsSection />
                <ProjectsSection />
                <ServicesSection />
                <div className="flex flex-row justify-center lg:py-40 lg:px-0 px-6 py-10">
                  <Image
                    src="https://res.cloudinary.com/caskchain/image/upload/v1695214338/AEHGroup/aeh_bg_4.png"
                    alt="AEH Group Services"
                    width={900}
                    height={900}
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </ParallaxProvider>
  )
}
