'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ParallaxProvider } from 'react-scroll-parallax'
import Project from './components/Project'
import MainTitleAnimation from '../components/LayoutWithMainTitleAnimation'
import LayoutWithMainTitleAnimation from '../components/LayoutWithMainTitleAnimation'
import Spacer from '../components/Spacer'

export default function Projects() {
  return (
    <LayoutWithMainTitleAnimation inputString="PROYECTOS QUE MODIFICAN EL LUGAR DONDE VIVIMOS">
      <Spacer className="mb-10 lg:mb-32" />
      <div className="flex flex-col items-center px-6 lg:px-32 space-y-10 lg:space-y-0">
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
