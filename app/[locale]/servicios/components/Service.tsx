import Image from 'next/image'

import { Parallax } from 'react-scroll-parallax'

type ServiceProps = {
  text: string
  image: string
}

const Service: React.FC<ServiceProps> = ({ text, image }) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <Parallax
        opacity={[0, 1]}
        translateX={['100px', '0px']}
        shouldAlwaysCompleteAnimation
      >
        <h3 className="text-gray-600 font-sans text-center text-[25px] lg:text-[50px] tracking-widest font-light">
          {text}
        </h3>
      </Parallax>
      <Image
        src={image}
        alt="AEH Service 1"
        width={769}
        height={250}
        className="object-cover w-[769px] h-[550px]"
      ></Image>
    </div>
  )
}

export default Service
