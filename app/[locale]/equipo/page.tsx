'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import ImageGallery from './components/ImageGallery'
import MessagesSection from './components/MessagesSection'

import Commitment from './components/Commitment'
import Values from './components/Values'
import LayoutWithMainTitleAnimation from '../../components/LayoutWithMainTitleAnimation'
import { useTranslations } from 'next-intl'

import useIsLargeScreen from '@/app/hooks/useIsLargeScreen'
import ValuesMobile from './components/ValuesMobile'

export default function AboutUs() {
  const t = useTranslations('AboutPage')
  const { isLargeScreen } = useIsLargeScreen()
  return (
    <LayoutWithMainTitleAnimation title={t('title')}>
      <div className="overflow-hidden">
        <ImageGallery />
        <MessagesSection />
        <Commitment />
        {isLargeScreen ? <Values /> : <ValuesMobile />}
      </div>
    </LayoutWithMainTitleAnimation>
  )
}
