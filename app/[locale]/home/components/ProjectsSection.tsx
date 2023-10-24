'use client'

import Button from '@/app/components/Button'
import Image from 'next/image'
import { useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next-intl/client'

export default function ProjectsSection() {
  const t = useTranslations('HomePage')
  const carouselRef = useRef<any>(null)
  const router = useRouter()

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
        >
          <Image
            alt=""
            width={1400}
            height={1000}
            className="w-full h-[300px] lg:h-[1000px] object-cover"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697697802/AEHGroup/S9/Serralet-2.jpg"
          />
          <Image
            alt=""
            width={1400}
            height={1000}
            className="w-full h-[300px] lg:h-[1000px] object-cover"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697699058/AEHGroup/JV22/JV22-16-min.jpg"
          />
          <Image
            alt=""
            width={1400}
            height={1000}
            className="w-full h-[300px] lg:h-[1000px] object-cover"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697698150/AEHGroup/B55/B55-46-min.jpg"
          />
        </Carousel>
        <div className="w-full lg:px-10 px-2 absolute z-10 bottom-4 lg:bottom-14 flex flex-row items-center justify-between">
          <Button
            text={t('buttons.projects')}
            mode="secondary"
            onClick={() => router.push('/proyectos')}
          />
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
