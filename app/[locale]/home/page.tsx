'use client'

import Image from 'next/image'
import LayoutWithMainTitleAnimation from '../../components/LayoutWithMainTitleAnimation'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import AboutUsSection from './components/AboutUsSection'

import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'
import { Parallax } from 'react-scroll-parallax'

import Spacer from '../../components/Spacer'
import { useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations('HomePage')

  return (
    <LayoutWithMainTitleAnimation inputString={t('title')}>
      <Spacer className="mb-10 lg:mb-32" />
      <div className="flex flex-col items-center">
        <Parallax scale={[1, 0.8]} shouldAlwaysCompleteAnimation>
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
            width={1400}
            height={700}
            className={`object-cover w-[500px] h-[500px] lg:w-screen lg:h-screen transition-all duration-500 ease-in-out`}
          />
        </Parallax>
        <Spacer className="mb-10 lg:mb-28" />
        <AboutUsSection />
        <Spacer className="mb-10 lg:mb-32" />
        <ProjectsSection />
        <Spacer className="mb-10 lg:mb-32" />
        <ServicesSection />
        <Spacer className="mb-10 lg:mb-32" />
        <div className="flex flex-row justify-center lg:px-0 px-6 ">
          <Image
            src="https://res.cloudinary.com/caskchain/image/upload/v1695214338/AEHGroup/aeh_bg_4.png"
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
