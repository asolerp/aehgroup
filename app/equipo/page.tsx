'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { mapBgImages } from '../utils/constants'
import Image from 'next/image'
import ImageGallery from './components/ImageGallery'
import MessagesSection from './components/MessagesSection'
import FadeInElement from '../home/components/ScaleYAnimation'
import Commitment from './components/Commitment'
import Value from './components/Value'
import Values from './components/Values'
import MainTitleAnimation from '../components/LayoutWithMainTitleAnimation'
import LayoutWithMainTitleAnimation from '../components/LayoutWithMainTitleAnimation'

export default function AboutUs() {
  return (
    <LayoutWithMainTitleAnimation inputString="DESCUBRA NUESTRO EQUIPO">
      <div>
        <ImageGallery />
        <MessagesSection />
        <Commitment />
        <Values />
      </div>
    </LayoutWithMainTitleAnimation>
  )
}
