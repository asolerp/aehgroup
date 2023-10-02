import { mapBgImages } from '@/app/utils/constants'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function Commitment() {
  return (
    <div className="h-screen lg:grid lg:grid-cols-2">
      <div className="hidden lg:block col-span-1">
        <Image
          src={mapBgImages.bg_2}
          alt="AEH Group"
          width={500}
          height={300}
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="relative w-full h-screen overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:hidden">
        <Image
          src={mapBgImages.bg_2}
          alt="AEH Group"
          width={500}
          height={300}
          className="w-full h-screen object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: `rgba(132, 160, 149, 0.7)` }}
        >
          <div className="flex h-full items-center justify-center px-4">
            <Parallax translateY={[5, 0]} shouldAlwaysCompleteAnimation>
              <h3 className="text-white text-center font-sans text-[40px] lg:text-[90px] lg:w-2/3 mb-10 lg:mb-0 tracking-widest">
                COMPROMISO
              </h3>
              <p className="font-sans text-xl lg:text-3xl text-white text-center lg:w-2/3 lg:text-left tracking-widest">
                En cada proyecto, un compromiso sublime que supera expectativas,
                del primer contacto a la entrega final.
              </p>
            </Parallax>
          </div>
        </div>
      </div>
      <div className="col-span-1 h-screen bg-aeh_primary lg:flex lg:flex-col justify-center items-start space-y-10 px-20 hidden">
        <Parallax translateX={[5, 0]} shouldAlwaysCompleteAnimation>
          <h3 className="text-white text-center font-sans text-[40px] lg:text-[90px] tracking-wider w-2/3">
            COMPROMISO
          </h3>
          <p className="font-sans text-3xl text-white w-2/3">
            En cada proyecto, un compromiso sublime que supera expectativas, del
            primer contacto a la entrega final.
          </p>
        </Parallax>
      </div>
    </div>
  )
}
