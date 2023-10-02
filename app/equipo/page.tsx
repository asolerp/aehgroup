'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import ImageGallery from './components/ImageGallery'
import MessagesSection from './components/MessagesSection'

import Commitment from './components/Commitment'
import Values from './components/Values'
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
