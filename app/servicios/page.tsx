'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ParallaxBanner } from 'react-scroll-parallax'
import Button from '../components/Button'
import Service from './components/Service'
import { mapBgImages } from '../utils/constants'

import LayoutWithMainTitleAnimation from '../components/LayoutWithMainTitleAnimation'
import Spacer from '../components/Spacer'

export default function Projects() {
  return (
    <LayoutWithMainTitleAnimation inputString="NUESTROS SERVICIOS">
      <div className="flex flex-col items-center w-full ">
        <h2 className="font-sans text-md lg:text-xl tracking-widest text-aeh_primary text-center lg:w-1/3 w-3/5 py-10 lg:py-20">
          En cada proyecto, un compromiso sublime que supera expectativas, del
          primer contacto a la entrega final.
        </h2>
        <div className="w-full">
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
              <h1 className="lg:text-6xl text-4xl text-white font-sans tracking-widest font-light flex flex-wrap text-center">
                REFORMAS INTEGRALES
              </h1>
              <Button text="Ver más" />
            </div>
          </ParallaxBanner>
        </div>
        <div className="mt-20 lg:mt-40 lg:px-20 px-6 lg:space-y-22 space-y-32">
          <Service text="REFORMAS INTEGRALES" image={mapBgImages.bg_1} />
          <Service text="FACHADAS" image={mapBgImages.bg_2} />
          <Service text="EXTERIORES" image={mapBgImages.bg_3} />
          <Service text="BAÑOS" image={mapBgImages.bg_2} />
        </div>
      </div>
      <Spacer className="pb-10 lg:pb-20" />
    </LayoutWithMainTitleAnimation>
  )
}
