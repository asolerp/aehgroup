'use client'

import { ParallaxProvider } from 'react-scroll-parallax'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import MainTitleAnimation from '../components/LayoutWithMainTitleAnimation'
import LayoutWithMainTitleAnimation from '../components/LayoutWithMainTitleAnimation'

export default function Contacta() {
  return (
    <LayoutWithMainTitleAnimation inputString="TU PRÓXIMO PROYECTO EN MALLORCA COMIENZA AQUÍ, !CONTÁCTANOS!">
      <div className="flex mt-20 lg:mt-52 mb-40 lg:px-40 px-10">
        <ContactForm />
      </div>
      <ContactInfo />
    </LayoutWithMainTitleAnimation>
  )
}
