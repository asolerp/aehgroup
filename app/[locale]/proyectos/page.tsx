'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Project from './components/Project'
import LayoutWithMainTitleAnimation from '../../components/LayoutWithMainTitleAnimation'
import Spacer from '../../components/Spacer'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('ProjectsPage')
  return (
    <LayoutWithMainTitleAnimation title={t('title')}>
      <div className="flex flex-col items-center px-6 lg:px-32 space-y-10 md:space-y-20 lg:space-y-0">
        <Project orientation="left" />
        <Project orientation="right" />
        <Project orientation="left" />
        <Project orientation="right" />
        <Project orientation="left" />
      </div>
      <Spacer className="pb-10 lg:pb-20" />
    </LayoutWithMainTitleAnimation>
  )
}
