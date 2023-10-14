import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/Spacer'
import { useTranslations } from 'next-intl'
import Button from '@/app/components/Button'

export default function HeroSection() {
  const t = useTranslations('HomePage')
  return (
    <div className="w-full">
      <Parallax scale={[1, 0.8]} shouldAlwaysCompleteAnimation>
        <ParallaxBanner
          layers={[
            {
              image:
                'https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png',
              speed: -20,
            },
          ]}
          className="lg:aspect-[2/1] h-[550px] lg:h-screen w-full"
        >
          <>
            <div className="absolute w-full h-full bg-aeh_primary opacity-70 " />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-20 px-16">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 1 },
                }}
              >
                <h1 className="lg:text-[50px] text-4xl  text-white font-sans tracking-widest font-bold flex flex-wrap text-center">
                  AEH Group
                </h1>
                <Spacer className="mb-2 lg:mb-12" />
                <h1 className="lg:text-[50px] text-lg  text-white font-sans tracking-widest font-light flex flex-wrap text-center">
                  {t('title')}
                </h1>
                <Spacer className="mb-2 lg:mb-12" />
                <Button text="Contacta" outline />
              </motion.div>
            </div>
          </>
        </ParallaxBanner>
      </Parallax>
    </div>
  )
}
