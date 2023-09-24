'use client'

import { ParallaxProvider } from 'react-scroll-parallax'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

export default function Contacta() {
  return (
    <ParallaxProvider>
      <main className="flex min-h-screen bg-white overflow-x-hidden">
        <div className="w-full mt-20">
          <div className="flex flex-col items-center">
            <h1 className="text-gray-600 text-center font-sans text-[30px] lg:text-[90px] tracking-widest w-3/4">
              TU PRÓXIMO PROYECTO EN MALLORCA COMIENZA AQUÍ, !CONTÁCTANOS!
            </h1>
          </div>
          <div className="flex mt-20 lg:mt-52 mb-40 lg:px-40 px-10">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </main>
    </ParallaxProvider>
  )
}
