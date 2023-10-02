import React from 'react'
import Button from '@/app/components/Button'
import { Parallax } from 'react-scroll-parallax'
import FadeInAnimation from '@/app/components/Animations/FadeInAnimation'
import Spacer from '@/app/components/Spacer'

export default function AboutUsSection() {
  return (
    <div className="px-6 lg:px-32">
      <div className="w-full">
        <div>
          <FadeInAnimation>
            <h3 className="font-sans text-3xl lg:text-[50px] text-gray-600 tracking-widest font-normal lg:w-3/5 lg:leading-tight">
              En cada proyecto, un compromiso sublime que supera expectativas,
              del primer contacto a la entrega final.
            </h3>
          </FadeInAnimation>
        </div>
      </div>
      <Spacer className="h-10 lg:h-20" />
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 ">
        <div className="col-span-1 lg:self-end">
          <FadeInAnimation>
            <Button mode="primary" text="About Us" />
          </FadeInAnimation>
        </div>
        <div className="col-span-1 mb-10 lg:mb-0 pl-14 lg:pl-0">
          <FadeInAnimation>
            <h4 className="text-xl lg:text-3xl font-thin font-sans text-gray-600 leading-normal tracking-widest">
              Nuestra dedicación a la excelencia se refleja en cada proyecto que
              llevamos a cabo. Desde el primer contacto hasta la entrega final,
              nos esforzamos por brindar un servicio profesional y de calidad.
              Nuestro objetivo es superar las expectativas de nuestros clientes
              en cada paso del camino.
            </h4>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  )
}
