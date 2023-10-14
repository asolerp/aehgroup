import { mapBgImages } from '@/app/utils/constants'
import Image from 'next/image'

export default function Project({ orientation = 'left' }) {
  const orientationClassName =
    orientation === 'left' ? 'lg:text-right' : 'lg:text-left'

  const orderFirstColumnClassName =
    orientation === 'left' ? 'lg:order-1' : 'lg:order-2'

  const orderSecondColumnClassName =
    orientation === 'left' ? 'lg:order-2' : 'lg:order-1'

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2">
      <div
        className={`col-span-1 flex items-center justify-center ${orderFirstColumnClassName}`}
      >
        <Image
          src={mapBgImages.bg_1}
          alt="AEH Group project 1"
          width={620}
          height={620}
          className="object-cover w-full lg:h-[620px] h-[200px] mb-6 lg:mb-0"
        />
      </div>
      <div
        className={`col-span-1 space-y-3 lg:space-y-5 flex flex-col justify-center lg:px-14  ${orderSecondColumnClassName}`}
      >
        <h2
          className={`font-sans text-xl  lg:text-2xl text-gray-600 tracking-widest ${orientationClassName}`}
        >
          AÑO
        </h2>
        <h3
          className={`font-sans text-2xl lg:text-3xl text-aeh_primary tracking-widest ${orientationClassName}`}
        >
          NOMBRE DEL PROYECTO
        </h3>
        <p
          className={`font-thin font-sans text-gray-600 leading-normal lg:text-lg tracking-widest ${orientationClassName} `}
        >
          Nuestra dedicación a la excelencia se refleja en cada proyecto que
          llevamos a cabo. Desde el primer contacto hasta la entrega final, nos
          esforzamos por brindar un servicio profesional y de calidad. Nuestro
          objetivo es superar las expectativas de nuestros clientes en cada paso
          del camino.
        </p>
      </div>
    </div>
  )
}
