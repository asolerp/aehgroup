import React from 'react'
import Button from '@/app/components/Button'

export default function AboutUsSection() {
  return (
    <div className="px-6 lg:px-10">
      <div className="w-full mt-20 mb-10 lg:mb-20">
        <div>
          <h3 className="font-sans text-3xl lg:text-5xl text-gray-800 tracking-widest font-normal lg:w-3/5 lg:leading-[55px]">
            En cada proyecto, un compromiso sublime que supera expectativas, del
            primer contacto a la entrega final.
          </h3>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 ">
        <div className="col-span-1 lg:self-end">
          <Button mode="primary" text="About Us" />
        </div>
        <div className="col-span-1 mb-10 lg:mb-0 pl-14 lg:pl-0">
          <h4 className="text-xl lg:text-3xl font-light font-sans text-aeh_quaternary leading-relaxed">
            Nuestra dedicación a la excelencia se refleja en cada proyecto que
            llevamos a cabo. Desde el primer contacto hasta la entrega final,
            nos esforzamos por brindar un servicio profesional y de calidad.
            Nuestro objetivo es superar las expectativas de nuestros clientes en
            cada paso del camino.
          </h4>
        </div>
      </div>
    </div>
  )
}
