import { mapBgImages } from '@/app/utils/constants'
import Image from 'next/image'

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-center space-y-10 mb-20">
      <Image
        src={mapBgImages.bg_1}
        alt="AEH Group contact info"
        width={500}
        height={300}
        className="lg:h-[700px] h-[500px] w-[300] object-cover px-10 lg:px-0"
      />
      <div className="flex flex-col items-center">
        <p className="font-sans text-gray-600 text-xl lg:text-3xl tracking-widest">
          C/ Andratx, 23
        </p>
        <p className="font-sans text-gray-600 text-xl lg:text-3xl tracking-widest text-center">
          07181 Andratx, Illes Balears
        </p>
        <p className="font-sans text-gray-600 text-xl lg:text-3xl tracking-widest my-5 lg:my-10">{`(+34) 600 12 12 12`}</p>

        <p className="font-sans text-gray-600 text-xl lg:text-3xl tracking-widest mb-10">
          info@aehgroup.es
        </p>
        <p className="font-sans text-gray-600 text-xl lg:text-3xl tracking-widest">
          LUN-VIE
        </p>
        <p className="font-sans text-gray-600 text-xl lg:text-3xl tracking-widest">
          08 AM - 17 PM
        </p>
      </div>
    </div>
  )
}
