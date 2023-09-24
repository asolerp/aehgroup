'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ParallaxProvider } from 'react-scroll-parallax'
import Project from './components/Project'

export default function Projects() {
  return (
    <ParallaxProvider>
      <main className="flex min-h-screen bg-white overflow-x-hidden">
        <div className="w-full mt-20">
          <div className="flex flex-col items-center">
            <h1 className="text-gray-600 text-center font-sans text-[30px] lg:text-[90px] tracking-widest w-3/4">
              PROYECTOS QUE MODIFICAN EL LUGAR DONDE VIVIMOS
            </h1>
          </div>
          <div className="my-20 lg:my-52 lg:px-20 px-6 lg:space-y-40 space-y-32">
            <Project orientation="left" />
            <Project orientation="right" />
            <Project orientation="left" />
            <Project orientation="right" />
            <Project orientation="left" />
          </div>
        </div>
      </main>
    </ParallaxProvider>
  )
}
