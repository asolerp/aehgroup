import Button from '@/app/components/Button'
import Image from 'next/image'
import FadeInElement from './FadeInElement'
import { Parallax } from 'react-scroll-parallax'

export default function ServicesSection() {
  return (
    <div className="flex flex-col items-center lg:mb-20 mb-10">
      <div className="py-20">
        <FadeInElement>
          <h2 className="text-gray-600 font-sans text-[32px] lg:text-[70px] tracking-widest text-center">
            CONTEMPLA EL ASOMBRO DE TU HOGAR RENACIDO
          </h2>
        </FadeInElement>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 px-4 lg:px-0">
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_2.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_3.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_2.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_3.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
      </div>
      <div className="px-6 lg:px-32">
        <div className="w-full mt-20 mb-4 lg:mb-20">
          <Parallax speed={5}>
            <div className="flex flex-row justify-end">
              <h3 className="font-sans text-3xl lg:text-[50px] text-gray-600 tracking-widest font-normal lg:w-3/5 lg:leading-tight self-end">
                En cada proyecto, un compromiso sublime que supera expectativas,
                del primer contacto a la entrega final.
              </h3>
            </div>
          </Parallax>
        </div>
        <Parallax speed={5}>
          <div className="flex flex-col lg:grid lg:grid-cols-2 ">
            <div className="col-span-1 mb-10 lg:mb-0 pl-14 lg:pl-0">
              <h4 className="text-xl lg:text-3xl font-thin font-sans text-gray-600 leading-normal">
                Nuestra dedicación a la excelencia se refleja en cada proyecto
                que llevamos a cabo. Desde el primer contacto hasta la entrega
                final, nos esforzamos por brindar un servicio profesional y de
                calidad. Nuestro objetivo es superar las expectativas de
                nuestros clientes en cada paso del camino.
              </h4>
            </div>
            <div className="col-span-1 flex flex-col justify-end items-start lg:items-end">
              <Button mode="primary" text="Servicios" />
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}
