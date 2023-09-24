'use client'

import Button from '@/app/components/Button'
import Image from 'next/image'
import { useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { motion } from 'framer-motion'

export default function ProjectsSection() {
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
    <div className="mt-20">
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
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_2.png"
          />
          <Image
            alt=""
            width={1400}
            height={1000}
            className="w-full h-[300px] lg:h-[1000px] object-cover"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
          />
        </Carousel>
        <div className="w-full lg:px-10 px-2 absolute z-10 bottom-4 lg:bottom-14 flex flex-row items-center justify-between">
          <div>
            <Button text="Projectos" mode="secondary" />
          </div>
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
