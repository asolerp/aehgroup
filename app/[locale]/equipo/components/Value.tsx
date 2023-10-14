import Spacer from '@/app/components/Spacer'
import useIsLargeScreen from '@/app/hooks/useIsLargeScreen'
import { Parallax } from 'react-scroll-parallax'

export default function Value({
  position = 'left',
  index,
  title,
  subtitle,
}: any) {
  const { isLargeScreen } = useIsLargeScreen()
  const traslate: any = isLargeScreen
    ? position === 'left'
      ? [0, 5]
      : [0, -5]
    : [0, 0]

  return (
    <Parallax
      translateX={traslate}
      shouldAlwaysCompleteAnimation
      className="flex flex-col justify-start items-start w-full"
    >
      <span className="font-sans text-white text-2xl lg:text-2xl tracking-widest text-left">
        0{index}/
      </span>
      <Spacer className="h-4 lg:h-4" />
      <h3 className="font-sans text-white text-2xl lg:text-4xl tracking-widest text-left">
        {title}
      </h3>
      <Spacer className="h-4 lg:h-6" />
      <p className="font-sans text-white font-light text-xl lg:w-4/5 tracking-widest text-left">
        {subtitle}
      </p>
    </Parallax>
  )
}
