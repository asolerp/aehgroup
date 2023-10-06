import { mapBgImages } from '@/app/utils/constants'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function ImageGallery() {
  return (
    <>
      <Parallax
        translateX={['0px', '-300px']}
        shouldAlwaysCompleteAnimation
        className="w-full overflow-x-hidden lg:overflow-auto"
      >
        <div className="flex flex-row items-start space-x-10 mt-20 lg:mt-40 w-full lg:-mr-[300px]">
          <Image
            src={mapBgImages.bg_2}
            alt="AEH Group"
            width={500}
            height={300}
            className="object-cover lg:w-[700px] lg:h-[400px] w-[200px] h-[200px]"
          />
          <Image
            src={mapBgImages.bg_1}
            alt="AEH Group"
            width={500}
            height={150}
            className="object-cover lg:w-[500px] lg:h-[320px] w-[200px] h-[200px]"
          />
          <Image
            src={mapBgImages.bg_3}
            alt="AEH Group"
            width={500}
            height={150}
            className="object-cover lg:w-[600px] lg:h-[400px] w-[200px] h-[200px]"
          />
        </div>
      </Parallax>
      <Parallax translateX={['0px', '300px']} shouldAlwaysCompleteAnimation>
        <div className="flex flex-row items-start space-x-10 mt-20 w-full lg:-ml-40">
          <Image
            src={mapBgImages.bg_1}
            alt="AEH Group"
            width={500}
            height={150}
            className="object-cover lg:w-[500px] lg:h-[320px] w-[200px] h-[200px]"
          />
          <Image
            src={mapBgImages.bg_2}
            alt="AEH Group"
            width={500}
            height={300}
            className="object-cover lg:w-[700px] lg:h-[400px] w-[200px] h-[200px]"
          />
          <Image
            src={mapBgImages.bg_3}
            alt="AEH Group"
            width={500}
            height={150}
            className="object-cover lg:w-[600px] lg:h-[400px] w-[200px] h-[200px]"
          />
        </div>
      </Parallax>
    </>
  )
}
