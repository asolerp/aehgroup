'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ParallaxBanner } from 'react-scroll-parallax'
import Button from '../../components/Button'
import Service from './components/Service'
import { mapBgImages } from '../../utils/constants'

import LayoutWithMainTitleAnimation from '../../components/LayoutWithMainTitleAnimation'
import Spacer from '../../components/Spacer'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Projects() {
  const t = useTranslations('ServicesPage')

  return (
    <LayoutWithMainTitleAnimation title={t('title')} subtitle={t('subtitle')}>
      <div className="flex flex-col items-center w-full ">
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
              <h1 className="lg:text-[50px] text-4xl text-white font-sans tracking-widest font-light flex flex-wrap text-center">
                {t('banner.title')}
              </h1>
              <Link href="/proyectos">
                <Button text={t('banner.button')} />
              </Link>
            </div>
          </ParallaxBanner>
        </div>
        <div className="mt-20 lg:mt-40 lg:px-20 px-6 lg:space-y-22 space-y-16">
          <Service text={t('service_1')} image={mapBgImages.bg_1} />
          <Service text={t('service_2')} image={mapBgImages.bg_2} />
          <Service text={t('service_3')} image={mapBgImages.bg_3} />
          <Service text={t('service_4')} image={mapBgImages.bg_2} />
        </div>
      </div>
      <Spacer className="pb-10 lg:pb-20" />
    </LayoutWithMainTitleAnimation>
  )
}
