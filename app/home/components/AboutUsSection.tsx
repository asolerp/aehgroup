import React from 'react'
import Button from '@/app/components/Button'

export default function AboutUsSection() {
  return (
    <div className="px-10">
      <div className="w-full mt-20 mb-20">
        <div>
          <h3 className="font-sans text-5xl tracking-widest font-semibold w-3/5 leading-[55px]">
            En cada proyecto, un compromiso sublime que supera expectativas, del
            primer contacto a la entrega final.
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 self-end">
          <Button mode="primary" text="About Us" />
        </div>
        <div className="col-span-1 flex flex-row justify-between">
          <h4 className="text-3xl font-sans text-aeh_quaternary">
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
