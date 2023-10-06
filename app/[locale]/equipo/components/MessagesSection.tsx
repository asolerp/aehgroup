import FadeInAnimation from '@/app/components/Animations/FadeInAnimation'
import { useTranslations } from 'next-intl'
import { Parallax } from 'react-scroll-parallax'

export default function MessagesSection() {
  const t = useTranslations('AboutPage')
  return (
    <div className="px-10 lg:px-20 lg:my-40 my-20">
      <div className="w-full mb-10 lg:mb-20">
        <Parallax
          translateY={[-5, 0]}
          opacity={[0.5, 1]}
          shouldAlwaysCompleteAnimation
        >
          <FadeInAnimation>
            <h3 className="font-sans text-2xl lg:text-[50px] text-gray-600 tracking-widest font-normal lg:w-3/5 lg:leading-tight">
              {t('subtitle_1')}
            </h3>
          </FadeInAnimation>
        </Parallax>
      </div>
      <div className="w-full">
        <Parallax
          opacity={[0.5, 1]}
          translateY={[5, 0]}
          shouldAlwaysCompleteAnimation
        >
          <FadeInAnimation>
            <div className="flex justify-end">
              <h3 className="font-sans text-2xl lg:text-[50px] text-gray-600 tracking-widest font-normal lg:w-3/5 lg:leading-tight text-right">
                {t('subtitle_2')}
              </h3>
            </div>
          </FadeInAnimation>
        </Parallax>
      </div>
    </div>
  )
}
