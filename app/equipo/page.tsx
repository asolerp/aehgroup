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

export default function AboutUs() {
  return (
    <ParallaxProvider>
      <main className="flex min-h-screen bg-aeh_secondary overflow-x-hidden">
        <div className="w-full mt-20">
          <div className="flex flex-col items-center">
            <h1 className="text-gray-600 text-center font-sans text-[40px] lg:text-[90px] tracking-wider w-2/3">
              DESCUBRA NUESTRO EQUIPO
            </h1>
            <ImageGallery />
            <MessagesSection />
            <Commitment />
            <div className="py-20 w-full flex justify-center">
              <FadeInElement>
                <h2 className="text-gray-600 font-sans text-[32px] lg:text-[70px] tracking-widest text-center lg:w-2/3 px-10 lg:px-0">
                  SOMOS QUIENES SOMOS POR NUESTROS VALORES
                </h2>
              </FadeInElement>
            </div>
            <div className="bg-aeh_primary py-10 lg:p-20 flex flex-row lg:block overflow-x-auto w-full space-x-20">
              <div className="lg:grid lg:grid-cols-5 lg:mb-20 w-screen lg:w-auto">
                <div className="lg:col-span-3 w-screen p-5 lg:p-0 lg:w-auto">
                  <Value />
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-5 lg:mb-20 w-screen lg:w-auto">
                <div className="hidden lg:block lg:col-span-2" />
                <div className="lg:col-span-3 w-screen p-5 lg:p-0 lg:w-auto">
                  <Value position="right" />
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-5 lg:mb-20 w-screen lg:w-auto">
                <div className="lg:col-span-3 w-screen p-5 lg:p-0 lg:w-auto">
                  <Value />
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-5 lg:mb-20 w-screen lg:w-auto">
                <div className="hidden lg:block lg:col-span-2" />
                <div className="lg:col-span-3 w-screen p-5 lg:p-0 lg:w-auto">
                  <Value position="right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ParallaxProvider>
  )
}
