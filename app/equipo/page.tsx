'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { mapBgImages } from '../utils/constants'
import Image from 'next/image'
import ImageGallery from './components/ImageGallery'
import MessagesSection from './components/MessagesSection'
import FadeInElement from '../home/components/FadeInElement'
import Commitment from './components/Commitment'
import Value from './components/Value'
import Values from './components/Values'

export default function AboutUs() {
  return (
    <ParallaxProvider>
      <main className="flex min-h-screen bg-aeh_secondary overflow-x-hidden">
        <div className="w-full mt-20">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-gray-600 text-center font-sans text-[30px] lg:text-[90px] tracking-widest w-3/4">
              DESCUBRA NUESTRO EQUIPO
            </h1>
            <ImageGallery />
            <MessagesSection />
            <Commitment />
            <Values />
          </div>
        </div>
      </main>
    </ParallaxProvider>
  )
}
