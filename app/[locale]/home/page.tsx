'use client'

import Image from 'next/image'
import LayoutWithMainTitleAnimation from '../../components/LayoutWithMainTitleAnimation'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import AboutUsSection from './components/AboutUsSection'

import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

import Spacer from '../../components/Spacer'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'

const Home = () => {
  const t = useTranslations('HomePage')

  return (
    <LayoutWithMainTitleAnimation>
      <div className="flex flex-col items-center">
        <HeroSection />
        <Spacer className="mb-10 lg:mb-28" />
        <AboutUsSection />
        <Spacer className="mb-10 lg:mb-32" />
        <ProjectsSection />
        <Spacer className="mb-10 lg:mb-32" />
        <ServicesSection />
        <Spacer className="mb-10 lg:mb-32" />
        <div className="flex flex-row justify-center lg:px-0 px-6 ">
          <Image
            src="https://res.cloudinary.com/caskchain/image/upload/v1697697796/AEHGroup/MOODBOARD_MATERIALES.jpg"
            alt="AEH Group Services"
            width={900}
            height={900}
            className="object-contain w-[300px] h-[300px] lg:w-[700px] lg:h-[700px]"
          />
        </div>
        <Spacer className="pb-10 lg:pb-20" />
      </div>
    </LayoutWithMainTitleAnimation>
  )
}

export default Home
