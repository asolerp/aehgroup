'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { motion } from 'framer-motion'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import Button from '../components/Button'
import Service from './components/Service'
import { mapBgImages } from '../utils/constants'

export default function Projects() {
  return (
    <ParallaxProvider>
      <main className="flex min-h-screen bg-aeh_secondary overflow-x-hidden">
        <div className="w-full mt-20">
          <div className="flex flex-col items-center space-y-20 px-10 lg:px-0">
            <h1 className="text-gray-600 text-center font-sans text-[30px] lg:text-[90px] tracking-widest w-3/4">
              NUESTROS SERVICIOS
            </h1>
            <h2 className="font-sans text-xl tracking-widest text-aeh_primary text-center lg:w-1/3">
              En cada proyecto, un compromiso sublime que supera expectativas,
              del primer contacto a la entrega final.
            </h2>
          </div>
          <div className="py-32">
            <ParallaxBanner
              layers={[
                {
                  image:
                    'https://res.cloudinary.com/caskchain/image/upload/v1695623424/AEHGroup/bg_with_mask.png',
                  speed: -20,
                },
              ]}
              className="lg:aspect-[2/1] h-[750px] w-full"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-20">
                <h1 className="lg:text-8xl text-4xl text-white font-sans tracking-widest font-light flex flex-wrap text-center">
                  REFORMAS INTEGRALES
                </h1>
                <Button text="Ver más" />
              </div>
            </ParallaxBanner>
          </div>
          <div className="my-20 lg:my-20 lg:px-20 px-6 lg:space-y-40 space-y-32">
            <Service text="REFORMAS INTEGRALES" image={mapBgImages.bg_1} />
            <Service text="FACHADAS" image={mapBgImages.bg_2} />
            <Service text="EXTERIORES" image={mapBgImages.bg_3} />
            <Service text="BAÑOS" image={mapBgImages.bg_2} />
          </div>
        </div>
      </main>
    </ParallaxProvider>
  )
}
