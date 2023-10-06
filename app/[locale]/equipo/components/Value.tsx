import Spacer from '@/app/components/Spacer'
import { Parallax } from 'react-scroll-parallax'

export default function Value({
  position = 'left',
  index,
  title,
  subtitle,
}: any) {
  const traslate: any = position === 'left' ? [0, 5] : [0, -5]

  return (
    <Parallax translateX={traslate} shouldAlwaysCompleteAnimation>
      <span className="font-sans text-white text-2xl lg:text-4xl tracking-widest">
        0{index}/
      </span>
      <Spacer className="h-4 lg:h-4" />
      <h3 className="font-sans text-white text-2xl lg:text-4xl tracking-widest">
        {title}
      </h3>
      <Spacer className="h-4 lg:h-6" />
      <p className="font-sans text-white font-light text-xl lg:text-2xl lg:w-4/5 tracking-widest">
        {subtitle}
      </p>
    </Parallax>
  )
}
