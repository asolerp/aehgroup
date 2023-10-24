import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const imageGallery = [
  'https://res.cloudinary.com/caskchain/image/upload/v1697699053/AEHGroup/JV22/JV22-3-min.jpg',
  'https://res.cloudinary.com/caskchain/image/upload/v1697697799/AEHGroup/S9/Serralet-7.jpg',
  'https://res.cloudinary.com/caskchain/image/upload/v1697697796/AEHGroup/PP50/PP50-2.jpg',
  'https://res.cloudinary.com/caskchain/image/upload/v1697698151/AEHGroup/B55/B55-5-min.jpg',
  'https://res.cloudinary.com/caskchain/image/upload/v1697699051/AEHGroup/JV22/JV22-17-min.jpg',
  'https://res.cloudinary.com/caskchain/image/upload/v1697697802/AEHGroup/S9/Serralet-10.jpg',
]

export default function ImageGallery() {
  return (
    <>
      <Parallax
        translateX={['0px', '-300px']}
        shouldAlwaysCompleteAnimation
        className="w-full overflow-auto"
      >
        <div className="flex flex-row items-start space-x-10 w-full md:items-center md:justify-center lg:-mr-[300px] overflow-hidden">
          <Image
            src={imageGallery[0]}
            alt="AEH Group"
            width={500}
            height={300}
            className="object-cover lg:w-[700px] lg:h-[400px] w-[200px] h-[200px]"
          />
          <Image
            src={imageGallery[1]}
            alt="AEH Group"
            width={500}
            height={150}
            className="object-cover lg:w-[500px] lg:h-[320px] w-[200px] h-[200px]"
          />
          <Image
            src={imageGallery[2]}
            alt="AEH Group"
            width={500}
            height={150}
            className="object-cover lg:w-[600px] lg:h-[400px] w-[200px] h-[200px]"
          />
        </div>
      </Parallax>
      <Parallax translateX={['0px', '300px']} shouldAlwaysCompleteAnimation>
        <div className="flex flex-row items-start md:justify-center space-x-10 mt-20 w-full lg:-ml-40">
          <Image
            src={imageGallery[3]}
            alt="AEH Group"
            width={500}
            height={150}
            className="object-cover lg:w-[500px] lg:h-[320px] w-[200px] h-[200px]"
          />
          <Image
            src={imageGallery[4]}
            alt="AEH Group"
            width={500}
            height={300}
            className="object-cover lg:w-[700px] lg:h-[400px] w-[200px] h-[200px]"
          />
          <Image
            src={imageGallery[5]}
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
