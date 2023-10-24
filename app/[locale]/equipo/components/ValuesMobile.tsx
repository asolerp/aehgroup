import { mapBgImages } from '@/app/utils/constants'
import Service from '../../servicios/components/Service'
import { Carousel } from 'react-responsive-carousel'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Value from './Value'

export default function ValuesMobile() {
  const t = useTranslations('AboutPage.values')
  const carouselRef = useRef<any>(null)

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.increment()
    }
  }

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement()
    }
  }

  return (
    <div>
      <div className="relative">
        <Carousel
          ref={carouselRef}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          className="bg-aeh_primary w-screen pb-16"
        >
          <div className="w-full p-6">
            <Value
              position="right"
              index={1}
              title={t('value_1.title')}
              subtitle={t('value_1.subtitle')}
            />
          </div>
          <div className="w-full p-6">
            <Value
              position="right"
              index={2}
              title={t('value_2.title')}
              subtitle={t('value_2.subtitle')}
            />
          </div>
          <div className="w-full p-6">
            <Value
              position="right"
              index={3}
              title={t('value_3.title')}
              subtitle={t('value_3.subtitle')}
            />
          </div>
          <div className="w-full p-6">
            <Value
              position="right"
              index={4}
              title={t('value_4.title')}
              subtitle={t('value_4.subtitle')}
            />
          </div>
        </Carousel>
        <div className="w-full px-2 absolute z-10 bottom-4 left-4 flex flex-row items-center justify-between">
          <div className="flex flex-row space-x-5">
            <motion.img
              whileHover={{ scale: 1.1 }}
              alt="AEH Group left icon"
              src="https://res.cloudinary.com/caskchain/image/upload/v1695134267/AEHGroup/aeh_left_icon.png"
              onClick={handlePrevClick}
              className="cursor-pointer lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              alt="AEH Group right icon"
              src="https://res.cloudinary.com/caskchain/image/upload/v1695134267/AEHGroup/aeh_right_icon.png"
              onClick={handleNextClick}
              className="cursor-pointer lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
