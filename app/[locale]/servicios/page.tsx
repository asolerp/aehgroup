'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ParallaxBanner } from 'react-scroll-parallax'
import Button from '../../components/Button'
import Service from './components/Service'
import { mapBgImages } from '../../utils/constants'

import LayoutWithMainTitleAnimation from '../../components/LayoutWithMainTitleAnimation'
import Spacer from '../../components/Spacer'
import { useTranslations } from 'next-intl'

import { useRouter } from 'next-intl/client'

export default function Projects() {
  const t = useTranslations('ServicesPage')
  const router = useRouter()

  return (
    <LayoutWithMainTitleAnimation title={t('title')} subtitle={t('subtitle')}>
      <div className="flex flex-col items-center w-full ">
        <div className="w-full">
          <ParallaxBanner
            layers={[
              {
                image:
                  'https://res.cloudinary.com/caskchain/image/upload/v1697697800/AEHGroup/S9/Serralet-9.jpg',
                speed: -20,
              },
            ]}
            className="lg:aspect-[2/1] h-[750px] w-full"
          >
            <div className="absolute w-full h-full bg-aeh-400 opacity-70 " />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-20">
              <h1 className="lg:text-[50px] text-4xl text-white font-sans tracking-widest font-light flex flex-wrap text-center">
                {t('banner.title')}
              </h1>

              <Button
                text={t('banner.button')}
                onClick={() => router.push('/proyectos')}
              />
            </div>
          </ParallaxBanner>
        </div>
        <div className="mt-20 lg:mt-40 lg:px-20 px-6 lg:space-y-22 space-y-16">
          <Service text={t('service_1')} image={mapBgImages.viviendas} />
          <Service text={t('service_2')} image={mapBgImages.exteriores} />
          <Service text={t('service_3')} image={mapBgImages.baños} />
          <Service text={t('service_4')} image={mapBgImages.cocinas} />
        </div>
      </div>
      <Spacer className="pb-10 lg:pb-20" />
    </LayoutWithMainTitleAnimation>
  )
}
